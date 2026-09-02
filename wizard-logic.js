/* WINZ Advocate — wizard logic (questions + entitlement rules).
   Kept separate from the UI so docs/EVALS/wizard-test.mjs can test it.
   Every rule's wording must trace to the knowledge base (see MAINTAINERS.md). */
(function (root) {
  "use strict";

  var QUESTIONS = [
    { id:"urgent", q:"Is anything urgent this week?", hint:"Pick all that apply. If nothing's on fire, choose the last one.", multi:true, options:[
        {v:"food", t:"No money for food"},
        {v:"power", t:"Power about to be cut off"},
        {v:"rent", t:"Behind on rent, or could be evicted"},
        {v:"housing", t:"Nowhere to stay tonight or this week"},
        {v:"none", t:"None of these right now", clears:true} ]},

    { id:"bigcosts", q:"Any of these costs you can't afford right now?", hint:"Pick all that apply.", multi:true, options:[
        {v:"dental", t:"Dental treatment (pain, infection, a broken tooth)"},
        {v:"glasses", t:"Glasses"},
        {v:"car", t:"Car repairs, WoF or rego — and I need the car"},
        {v:"school", t:"School uniform, stationery or a device for school"},
        {v:"whiteware", t:"A fridge, washing machine, or beds"},
        {v:"none", t:"None of these", clears:true} ]},

    { id:"income", q:"Are you getting any money coming in right now?", options:[
        {v:"benefit", t:"A benefit from Work and Income"},
        {v:"wages", t:"Wages from a job"},
        {v:"both", t:"A benefit and some wages"},
        {v:"nothing", t:"Nothing at all"} ]},

    { id:"which_benefit", q:"Which main benefit are you on?", options:[
        {v:"jobseeker", t:"Jobseeker Support"},
        {v:"sole", t:"Sole Parent Support"},
        {v:"slp", t:"Supported Living Payment"},
        {v:"super", t:"NZ Superannuation"},
        {v:"other", t:"Another one / an emergency benefit"},
        {v:"notsure", t:"Not sure what it's called"} ],
      skipIf:function(a){ return a.income!=="benefit" && a.income!=="both"; }},

    { id:"already", q:"Which of these extra payments are you already getting?", hint:"Pick all you get. Not sure? Leave them and we'll flag it.", multi:true, options:[
        {v:"as", t:"Accommodation Supplement (help with rent)"},
        {v:"da", t:"Disability Allowance"},
        {v:"tas", t:"Temporary Additional Support"},
        {v:"none", t:"None of these", clears:true} ],
      skipIf:function(a){ return a.income!=="benefit" && a.income!=="both"; }},

    { id:"age", q:"How old are you?", options:[
        {v:"u18", t:"Under 18"}, {v:"18_19", t:"18 or 19"}, {v:"20_24", t:"20 to 24"},
        {v:"25_64", t:"25 to 64"}, {v:"65", t:"65 or older"} ]},

    { id:"kids", q:"Are there children who live with you and depend on you?", options:[
        {v:"none", t:"No"},
        {v:"one_young", t:"Yes — my youngest is under 3"},
        {v:"one_u14", t:"Yes — my youngest is 3 to 13"},
        {v:"teen", t:"Yes — all are 14 or older"},
        {v:"whangai", t:"Yes — caring for a child who isn't mine (whāngai, grandchild, etc.)"} ]},

    { id:"childcare", q:"Does a child go to daycare, kōhanga reo, or before/after-school care?", options:[
        {v:"yes", t:"Yes, and I pay for it"},
        {v:"want", t:"Not yet, but I'd like them to"},
        {v:"no", t:"No"} ],
      skipIf:function(a){ return !a.kids || a.kids==="none" || a.kids==="teen"; }},

    { id:"single", q:"Are you doing this on your own, or with a partner?", options:[
        {v:"single", t:"On my own"}, {v:"partner", t:"I have a partner"} ]},

    { id:"housing", q:"Where are you living?", options:[
        {v:"rent_private", t:"Renting from a private landlord"},
        {v:"board", t:"Boarding / paying to stay somewhere"},
        {v:"kaingaora", t:"Kāinga Ora or community housing"},
        {v:"own", t:"Paying a mortgage on my own home"},
        {v:"staying", t:"Staying with family or friends"},
        {v:"nofixed", t:"No fixed place right now"} ]},

    { id:"housingcost", q:"Roughly how much do you pay a week for that?", type:"amount",
      hint:"A rough number is fine. Put 0 if you don't pay anything.",
      skipIf:function(a){ return a.housing==="staying" || a.housing==="nofixed"; }},

    { id:"health", q:"Do you have a health condition, disability, injury, or effects of trauma that affects daily life or your ability to work?", options:[
        {v:"no", t:"No"},
        {v:"short", t:"Yes — but short-term (under 6 months)"},
        {v:"long", t:"Yes — lasted or will last 6 months or more"},
        {v:"severe", t:"Yes — it severely limits my ability to work, long-term"} ]},

    { id:"healthcosts", q:"Do you have regular ongoing costs because of it?",
      hint:"Doctor's visits, prescriptions, counselling, travel to appointments, extra heating, special food.",
      options:[ {v:"yes", t:"Yes, regularly"}, {v:"some", t:"Some, now and then"}, {v:"no", t:"No"} ],
      skipIf:function(a){ return a.health==="no"; }},

    { id:"bank", q:"Roughly how much money do you have in your bank accounts right now?", type:"amount", hint:"A rough number is fine." },

    { id:"debt", q:"Do you owe money to Work and Income, or have deductions coming off your payments?", options:[
        {v:"yes", t:"Yes"}, {v:"no", t:"No"}, {v:"notsure", t:"Not sure"} ]},

    { id:"trouble", q:"Has any of this happened recently?", hint:"Pick all that apply.", multi:true, options:[
        {v:"declined", t:"WINZ turned down something I applied for"},
        {v:"sanction", t:"WINZ cut or reduced my payment as a penalty"},
        {v:"delay", t:"I'm waiting on a decision that's taking too long"},
        {v:"none", t:"None of these", clears:true} ]},

    { id:"declined_when", q:"How long ago did you get the decision letter?",
      hint:"This matters — there's a 3-month limit to challenge it.",
      options:[
        {v:"within3", t:"Within the last 3 months"},
        {v:"longer", t:"Longer than 3 months ago"},
        {v:"notsure", t:"Not sure — I'd have to check the letter"} ],
      skipIf:function(a){ return !(a.trouble||[]).includes("declined"); }},

    { id:"resident", q:"Are you a New Zealand citizen or permanent resident?", options:[
        {v:"yes", t:"Yes"}, {v:"visa", t:"No — I'm here on a visa"}, {v:"unsure", t:"Not sure"} ]},

    { id:"newhere", q:"Have you lived in NZ for at least 2 years as a citizen or resident?", options:[
        {v:"yes", t:"Yes"}, {v:"no", t:"No, less than 2 years"} ],
      skipIf:function(a){ return a.resident!=="yes"; }}
  ];

  function num(x){ x = parseFloat(String(x||"").replace(/[^0-9.]/g,"")); return isNaN(x)?0:x; }
  function onBenefit(a){ return a.income==="benefit" || a.income==="both"; }
  function has(a,k,v){ return (a[k]||[]).indexOf(v) !== -1; }
  function single(a){ return a.single!=="partner"; }

  var RULES = [
    function foodGrant(a){
      if(!has(a,"urgent","food")) return null;
      var cap = single(a)?1400:2350, lots = num(a.bank) > cap;
      return { level:"urgent", name:"Special Needs Grant — food",
        why: lots ? "You said you have no money for food. There's a cash-asset guide (about $"+(single(a)?"1,400":"2,350")+"). You're near or over it, so explain what your money is committed to (rent, power, a debt)."
                  : "You have no money for food and no other way to pay. You usually don't pay this back, and there's no limit on how often you can apply.",
        doThis:"Phone 0800 559 009 today, or apply on MyMSD. Ask for the amount you actually spend on food — not what they offer." };
    },
    function arrears(a){
      if(!has(a,"urgent","power") && !has(a,"urgent","rent")) return null;
      return { level:"urgent", name: onBenefit(a) ? "Advance Payment for the arrears" : "Recoverable Assistance for the arrears",
        why:"For power or rent arrears you can get help to clear them. It's repayable, but you can ask for repayments as low as a few dollars a week so it doesn't leave you short.",
        doThis:"Ask about this in the same phone call. Bring the bill or a letter from your landlord stating the amount owed." };
    },
    function emergencyHousing(a){
      if(!has(a,"urgent","housing") && a.housing!=="nofixed") return null;
      return { level:"urgent", name:"Emergency Housing",
        why:"You have nowhere to stay. The first 7 nights are usually a grant you don't pay back.",
        doThis:"Phone 0800 559 009 now. Ask to go on the social housing register too — the wait counts from today." };
    },
    function declined(a){
      if(!has(a,"trouble","declined")) return null;
      var w = a.declined_when, level = "yes", why, doThis;
      if(w==="within3"){ why="WINZ turned something down and you're still inside the 3-month window to challenge it. A Review of Decision is designed to be done without a lawyer — and WINZ can't cut your benefit for lodging one."; doThis="Lodge a Review of Decision now — ask for the form, or write a letter. Get it date-stamped, keep a copy. The full version (the “deeper” option on the home page) can draft it for you."; }
      else if(w==="longer"){ level="maybe"; why="It's been more than 3 months, but a late Review of Decision can still be accepted if you have a 'good and sufficient reason' for the delay (being unwell, overwhelmed, or not knowing the deadline can count)."; doThis="Lodge the Review of Decision anyway and explain the delay. Get free advocacy help — Community Law or AAAP."; }
      else { why="There's a 3-month limit to challenge a WINZ decision, counted from the date on the letter. Check that date."; doThis="Find the decision letter and check the date. If it's within 3 months, lodge a Review of Decision straight away."; }
      return { level:level, name:"Review of Decision (challenge the decline)", why:why, doThis:doThis };
    },
    function sanction(a){
      if(!has(a,"trouble","sanction")) return null;
      return { level:"yes", name:"Challenge the sanction",
        why:"Before WINZ can sanction you for an 'obligation failure', it has to follow a strict process and give you proper written notice (section 252 of the Social Security Act). Advocates say this is often not done right — sanctions are frequently overturned or back-paid.",
        doThis:"Lodge a Review of Decision. Ask for the written notice they say they sent. Get free advocacy help." };
    },
    function delay(a){
      if(!has(a,"trouble","delay")) return null;
      return { level:"yes", name:"Follow up on the delay",
        why:"You're entitled to a decision and to know how long it will take. Chasing it in writing creates a record and often unsticks it.",
        doThis:"Send a written follow-up (MyMSD or email) asking for the current status and a date for the decision. The full version can draft it for you." };
    },
    function debt(a){
      if(a.debt!=="yes") return null;
      return { level:"yes", name:"Sort out the debt / deductions",
        why:"A WINZ debt can be disputed (whether it exists, the amount, the period). If it came from a WINZ error and you received the money in good faith, it can be written off. And the weekly deductions can be reduced — as low as 50c — so they don't leave you short.",
        doThis:"Ask for a full breakdown of the debt in writing. Then ask for a write-off (if it was their mistake) or for the deductions to be reduced. The full version has ready templates for all three." };
    },
    function youthPayment(a){
      if(onBenefit(a)) return null;
      if(a.age!=="u18" && a.age!=="18_19") return null;
      return { level: a.age==="u18" ? "yes" : "maybe", name:"Youth Payment / Young Parent Payment",
        why:"You're 16–19 and can't be supported by your parents. It's run through a Youth Service provider (a coach), and some of the money is managed for you at first — you get more control as you meet your obligations."
          + (a.age==="18_19" ? " (At 18–19, Jobseeker Support may fit instead — Youth Payment is mainly for those still studying toward NCEA level 2.)" : ""),
        doThis:"Phone 0800 559 009 and ask for Youth Service, or apply on MyMSD. You'll need to be in education or training toward NCEA level 2." };
    },
    function mainBenefit(a){
      if(a.age==="u18") return null; // youthPayment covers under-18
      if(onBenefit(a)){
        if(a.which_benefit==="notsure" || a.which_benefit==="other")
          return { level:"maybe", name:"Check you're on the right benefit", why:"Being on the wrong benefit can cost you money — Supported Living Payment pays more than Jobseeker, for example.", doThis:"Ask WINZ which benefit you're on and whether a different one fits your situation better." };
        return null;
      }
      if(a.age==="65") return { level:"yes", name:"NZ Superannuation", why:"You're 65 or older.", doThis:"Apply through Work and Income. You don't have to have stopped working." };
      if(a.resident==="visa" || a.newhere==="no")
        return { level:"maybe", name:"Emergency Benefit", why:"You can't get a standard benefit yet (residence or the 2-year rule), but you're in hardship. If you're a sole parent, ask about the Emergency Maintenance Allowance.", doThis:"Phone 0800 559 009. Say you can't support yourself and don't qualify for another benefit. Get immigration advice too — some visas have conditions." };
      if((a.kids==="one_young"||a.kids==="one_u14") && single(a))
        return { level:"yes", name:"Sole Parent Support", why:"You're a single parent with a child under 14.", doThis:"Start the application on MyMSD, then a phone appointment." };
      if(a.health==="severe")
        return { level:"maybe", name:"Supported Living Payment", why:"Your health condition severely limits your ability to work long-term. It pays more than Jobseeker.", doThis:"Get a thorough report from your doctor or specialist spelling out how the condition limits work and why it will last 2+ years." };
      return { level:"yes", name:"Jobseeker Support", why:"You're under 65 and not working, or not enough.", doThis:"Start the application on MyMSD. If a health condition stops you working right now, ask about a medical deferral so work obligations are paused." };
    },
    function accommodation(a){
      if(a.housing==="kaingaora")
        return { level:"maybe", name:"Accommodation Supplement — check your rent instead", why:"You're in Kāinga Ora / community housing, so this doesn't apply. But if your income drops, your income-related rent should drop too.", doThis:"Tell your housing provider about any income change." };
      if(["rent_private","board","own"].indexOf(a.housing) !== -1){
        if(has(a,"already","as"))
          return { level:"maybe", name:"Accommodation Supplement — check it's at the right rate", why:"You already get this. It can drift below what you're owed — especially if your rent went up and wasn't reported.", doThis:"Report any rent increase. Ask WINZ to confirm your area and current rate." };
        return { level:"yes", name:"Accommodation Supplement", why:"You pay "+(a.housing==="own"?"a mortgage":a.housing==="board"?"board":"rent")+". It's a weekly payment toward housing costs — for people on a benefit and low-income workers. Often the biggest ongoing money people miss.", doThis:"Apply on MyMSD or ask for the form. Bring your tenancy/board agreement and proof of what you pay." };
      }
      return null;
    },
    function disability(a){
      if(a.health!=="long" && a.health!=="severe") return null;
      var costs = a.healthcosts==="yes" || a.healthcosts==="some";
      if(has(a,"already","da"))
        return { level:"maybe", name:"Disability Allowance — check it's not underpaid", why:"You already get this. It's paid only up to your verified costs — if a cost changed or was left off, you're owed more (up to about $82.85/week).", doThis:"List every current health cost. Ask WINZ to recalculate, with updated proof." };
      return { level: costs?"yes":"maybe", name:"Disability Allowance",
        why: costs ? "Your condition has lasted 6+ months and you have regular costs (doctor, prescriptions, travel, heating, special food). Weekly payment, not taxed, never repaid — up to about $82.85/week toward those costs."
                   : "Your condition has lasted 6+ months. If there are any regular costs because of it, you can claim them.",
        doThis:"Book a longer GP appointment and ask for a Disability Certificate listing each cost. Keep a list of your health costs for a month." };
    },
    function tas(a){
      if(has(a,"already","tas"))
        return { level:"maybe", name:"Temporary Additional Support — reapply every 13 weeks", why:"You get this, but it stops after 13 weeks and you have to reapply. People lose it just by missing that.", doThis:"Put the reapplication date in your notes. Check every essential cost is included — leaving one out means you're underpaid." };
      if(a.income!=="wages" && num(a.housingcost) > 0)
        return { level:"maybe", name:"Temporary Additional Support", why:"If your essential costs (rent, power, etc.) are more than your income after other help, this tops up the gap. Best checked once your main benefit and Accommodation Supplement are in place.", doThis:"Apply after those. List every essential cost — each one left out means less money." };
      return null;
    },
    function trainingIncentive(a){
      if((a.which_benefit==="sole" || a.which_benefit==="slp") || (single(a) && (a.kids==="one_young"||a.kids==="one_u14")))
        return { level:"maybe", name:"Training Incentive Allowance (if you study)", why:"If you're on Sole Parent Support or Supported Living Payment and doing (or wanting to do) a course, this helps with fees, transport, childcare and materials.", doThis:"Ask WINZ about it before you enrol." };
      return null;
    },
    function wff(a){
      if(!a.kids || a.kids==="none" || a.kids==="whangai") return null;
      var best = a.kids==="one_young";
      return { level:"yes", name:"Working for Families"+(best?" + Best Start":""),
        why:"You have dependent children. Paid by Inland Revenue (not WINZ) — Family Tax Credit, and "+(best?"Best Start (about $77/week for a child under 1).":"Best Start for children under 3.")+" A lot of newly-single parents aren't registered.",
        doThis:"Register on myIR at ird.govt.nz, or phone IRD 0800 227 773. Ask for it weekly." };
    },
    function ucb(a){
      if(a.kids!=="whangai") return null;
      return { level:"yes", name:"Unsupported Child's Benefit",
        why:"You're caring for a child because their parents can't. It's not income tested — you can be working and still get it. Many carers miss it for years because WINZ doesn't tell them.",
        doThis:"Apply through WINZ. A letter from a doctor, kōhanga reo or school confirming you care for the child full-time helps. Also check the Child Disability Allowance if the child has a disability." };
    },
    function childcareAssist(a){
      if(a.childcare!=="yes" && a.childcare!=="want") return null;
      return { level:"yes", name:"Childcare Assistance (Childcare Subsidy / OSCAR)",
        why:"Helps with the cost of daycare, kōhanga reo, or before/after-school care — up to 50 hours a week if you're working, studying, or doing a WINZ activity; otherwise up to 9 hours.",
        doThis:"Apply through MyMSD / SmartStart. The childcare place fills in part of the form. Make sure your work/study hours are recorded so you get the higher rate." };
    },
    function dental(a){
      if(!has(a,"bigcosts","dental")) return null;
      return { level:"yes", name:"Emergency Dental grant",
        why:"A grant (up to about $1,000 a year — confirm current) toward emergency dental treatment. You don't pay it back. Available whether or not you're on a benefit.",
        doThis:"Phone 0800 559 009. Get a quote from the dentist first if you can." };
    },
    function otherGrants(a){
      var bits = [];
      if(has(a,"bigcosts","glasses")) bits.push("glasses");
      if(has(a,"bigcosts","car")) bits.push("essential car repairs");
      if(has(a,"bigcosts","school")) bits.push("school uniform / stationery / a device");
      if(has(a,"bigcosts","whiteware")) bits.push("a fridge, washing machine or beds");
      if(!bits.length) return null;
      return { level:"yes", name:"Grants for "+bits.join(", "),
        why:"WINZ can help with essential one-off costs you can't meet another way. Some you pay back (an Advance or Recoverable Assistance), some you don't — ask which, and ask for the non-recoverable option first.",
        doThis:"Phone 0800 559 009 or use MyMSD. Say the exact cost and why it's essential. For furniture get two quotes; for whiteware they have a supplier arrangement (no quote needed)." };
    },
    function winter(a){
      if(!onBenefit(a)) return null;
      return { level:"maybe", name:"Winter Energy Payment — check it's being paid",
        why:"On a benefit, this is automatic from about 1 May to 1 October. If it's not in your payments over winter, something's wrong.",
        doThis:"Check your payment history. If it's missing, ask WINZ why." };
    },
    function csc(a){
      if(onBenefit(a)) return null;
      return { level:"maybe", name:"Community Services Card",
        why:"Low income and not on a benefit — this cuts the cost of doctor's visits and prescriptions.",
        doThis:"Apply through WINZ, or check whether you already have a current one." };
    },
    function deferral(a){
      if(onBenefit(a) && (a.health==="short"||a.health==="long"||a.health==="severe"))
        return { level:"maybe", name:"Work-obligation deferral",
          why:"If a health condition stops you meeting work obligations, they should be paused for the period your medical certificate covers. This gets missed — and people get sanctioned for things they were excused from.",
          doThis:"Give WINZ a medical certificate and ask for the deferral to be confirmed in writing." };
      return null;
    }
  ];

  function evaluate(a){
    var out = [];
    for(var i=0;i<RULES.length;i++){ try{ var r = RULES[i](a); if(r) out.push(r); }catch(e){} }
    var order = { urgent:0, yes:1, maybe:2 };
    out.sort(function(x,y){ return order[x.level]-order[y.level]; });
    return out;
  }

  function visibleQuestions(a){
    return QUESTIONS.filter(function(q){ return !(q.skipIf && q.skipIf(a)); });
  }

  var API = { QUESTIONS:QUESTIONS, RULES:RULES, evaluate:evaluate, visibleQuestions:visibleQuestions,
              helpers:{ num:num, onBenefit:onBenefit, has:has, single:single } };

  if (typeof module !== "undefined" && module.exports) module.exports = API;
  root.WIZARD = API;
})(typeof window !== "undefined" ? window : globalThis);
