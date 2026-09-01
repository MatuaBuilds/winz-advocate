/* Wizard eval — runs persona answer-sets through the real wizard logic.
   Run:  node docs/EVALS/wizard-test.mjs
   Checks each persona's results include what a good advocate would flag,
   and don't include anything it shouldn't. See docs/EVALS/RUBRIC.md. */

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const W = require("../../wizard-logic.js");

const PERSONAS = [
  { id:"Sam — ADHD, Jobseeker, no food",
    a:{ urgent:["food"], bigcosts:["none"], income:"benefit", which_benefit:"jobseeker",
        already:["none"], age:"25_64", kids:"none", single:"single", housing:"board",
        housingcost:"230", health:"long", healthcosts:"yes", bank:"15",
        debt:"no", trouble:["none"], resident:"yes", newhere:"yes" },
    must:["Special Needs Grant — food","Accommodation Supplement","Disability Allowance","Work-obligation deferral","Winter Energy"],
    mustNot:["Jobseeker Support"] },   // already on it

  { id:"Aroha — newly single parent, no income",
    a:{ urgent:["none"], bigcosts:["none"], income:"nothing", age:"25_64",
        kids:"one_young", childcare:"want", single:"single", housing:"rent_private",
        housingcost:"480", health:"no", bank:"40", debt:"no", trouble:["none"], resident:"yes", newhere:"yes" },
    must:["Sole Parent Support","Accommodation Supplement","Working for Families + Best Start","Childcare Assistance","Training Incentive Allowance"],
    mustNot:[] },

  { id:"Ben — SLP declined within 3 months",
    a:{ urgent:["none"], bigcosts:["none"], income:"benefit", which_benefit:"jobseeker",
        already:["as"], age:"25_64", kids:"none", single:"single", housing:"rent_private",
        housingcost:"300", health:"severe", healthcosts:"some", bank:"200",
        debt:"no", trouble:["declined"], declined_when:"within3", resident:"yes", newhere:"yes" },
    must:["Review of Decision (challenge the decline)","Disability Allowance","Accommodation Supplement — check it's at the right rate"],
    mustNot:["Accommodation Supplement"] },  // has it — must be the "check the rate" variant, not the apply one

  { id:"Mia — stand-down (no benefit yet), rent due",
    a:{ urgent:["rent"], bigcosts:["none"], income:"nothing", age:"25_64", kids:"none",
        single:"single", housing:"rent_private", housingcost:"260", health:"no",
        bank:"900", debt:"no", trouble:["none"], resident:"yes", newhere:"yes" },
    must:["Recoverable Assistance for the arrears","Jobseeker Support","Accommodation Supplement"],
    mustNot:[] },

  { id:"Tane — overpayment debt",
    a:{ urgent:["none"], bigcosts:["none"], income:"benefit", which_benefit:"sole",
        already:["as"], age:"25_64", kids:"one_u14", childcare:"no", single:"single",
        housing:"rent_private", housingcost:"400", health:"no", bank:"30",
        debt:"yes", trouble:["none"], resident:"yes", newhere:"yes" },
    must:["Sort out the debt / deductions","Working for Families","Training Incentive Allowance"],
    mustNot:["Sole Parent Support"] },

  { id:"Priya — migrant, no benefit, one child",
    a:{ urgent:["food"], bigcosts:["none"], income:"nothing", age:"25_64", kids:"one_u14",
        childcare:"no", single:"single", housing:"rent_private", housingcost:"350",
        health:"no", bank:"20", debt:"no", trouble:["none"], resident:"visa" },
    must:["Special Needs Grant — food","Emergency Benefit","Accommodation Supplement","Working for Families"],
    mustNot:["Sole Parent Support","Jobseeker Support"] },

  { id:"Josh — nowhere to stay",
    a:{ urgent:["housing"], bigcosts:["none"], income:"nothing", age:"20_24", kids:"none",
        single:"single", housing:"nofixed", health:"no", bank:"5", debt:"no",
        trouble:["none"], resident:"yes", newhere:"yes" },
    must:["Emergency Housing","Jobseeker Support"],
    mustNot:[] },

  { id:"Whetu — long-term SLP, thinks she gets everything",
    a:{ urgent:["none"], bigcosts:["dental"], income:"benefit", which_benefit:"slp",
        already:["none"], age:"25_64", kids:"none", single:"single", housing:"rent_private",
        housingcost:"320", health:"severe", healthcosts:"yes", bank:"600",
        debt:"no", trouble:["none"], resident:"yes", newhere:"yes" },
    must:["Disability Allowance","Accommodation Supplement","Temporary Additional Support","Emergency Dental grant","Winter Energy"],
    mustNot:[] },

  { id:"Marcus — Jobseeker + casual work",
    a:{ urgent:["none"], bigcosts:["none"], income:"both", which_benefit:"jobseeker",
        already:["as"], age:"25_64", kids:"none", single:"single", housing:"rent_private",
        housingcost:"240", health:"no", bank:"120", debt:"no", trouble:["none"], resident:"yes", newhere:"yes" },
    must:["Accommodation Supplement — check it's at the right rate","Winter Energy"],
    mustNot:["Jobseeker Support","Accommodation Supplement"] },

  { id:"Rangi — sanctioned",
    a:{ urgent:["none"], bigcosts:["none"], income:"benefit", which_benefit:"jobseeker",
        already:["none"], age:"25_64", kids:"none", single:"single", housing:"board",
        housingcost:"180", health:"no", bank:"50", debt:"no", trouble:["sanction"], resident:"yes", newhere:"yes" },
    must:["Challenge the sanction","Accommodation Supplement"],
    mustNot:[] }
];

let pass = 0, fail = 0;
for (const p of PERSONAS) {
  const results = W.evaluate(p.a);
  const names = results.map(r => r.name);
  const missing = p.must.filter(m => !names.some(n => n === m || n.startsWith(m)));
  // mustNot: fail only if an EXACT excluded name appears (not a "startsWith" variant)
  const bad = p.mustNot.filter(m => names.includes(m));
  const ok = missing.length === 0 && bad.length === 0;
  console.log(`${ok ? "PASS" : "FAIL"}  ${p.id}`);
  if (!ok) {
    if (missing.length) console.log(`      missing: ${missing.join(", ")}`);
    if (bad.length)     console.log(`      should not include: ${bad.join(", ")}`);
    console.log(`      got: ${names.join(" | ")}`);
  }
  ok ? pass++ : fail++;
}
console.log(`\n${pass} pass, ${fail} fail`);
process.exit(fail ? 1 : 0);
