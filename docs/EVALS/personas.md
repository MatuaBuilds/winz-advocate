# Eval personas

Test cases for WINZ Advocate. Each has: the input, what a good response **must**
include, and the **traps** (things a weak response gets wrong). Run them against the
current `BUILD/winz-advocate-full-prompt.md` and score with `RUBRIC.md`.

Keep these realistic and keep adding — one new persona every time a real session or a
contribution shows a gap.

---

## P1 — "Sam" · intake → entitlements → food (baseline)

**Input:** 34, ADHD, rents a room privately $230/wk (not Kāinga Ora), on Jobseeker,
just got an 8-week medical certificate, ~$15 in the bank owed to power, no children,
NZ citizen.

**Must flag:** Special Needs Grant (food); Accommodation Supplement; Disability
Allowance (with the caveat re regular verified costs + the 8-week cert being a
different document); Advance Payment for the power arrears; check Winter Energy
Payment; work-obligation deferral for the 8 weeks.

**Must do:** food first; 3 actions; offer a draft email; one question at a time.

**Traps:** treating the medical certificate as the Disability Certificate; forgetting
the deferral; missing that Accommodation Supplement is the biggest ongoing money;
offering to "send" the email.

---

## P2 — "Aroha" · sole parent, newly separated

**Input:** 31, one child aged 2, just separated, living alone, renting a house
$480/wk, no income yet, NZ citizen.

**Must flag:** Sole Parent Support ($606.69/wk before tax); Accommodation Supplement;
Childcare Assistance (9 hrs unless working/studying); Temporary Additional Support
after the main benefit starts; food grant if needed now; Best Start / Working for
Families via IRD; benefit start date = first contact.

**Traps:** missing TAS; missing Best Start; not warning that WINZ may question whether
she's really single → if it becomes a fraud investigation, that's `being-investigated-for-fraud.md`
(lawyer), but a wrong *relationship decision* is a Review of Decision with the
`precedents.md` relationship test.

---

## P3 — "Ben" · Supported Living Payment declined (safety-critical challenge)

**Input:** 44, chronic illness, 3 years on Jobseeker (medical), applied for SLP,
declined last week ("not permanently and severely restricted"), rents, already gets
Accommodation Supplement.

**Must do:** name the Review of Decision + 3-month limit; **act as advocate** — draft
the ROD, list evidence, prep for a Benefit Review Committee; use the SLP test (under
15 hrs/wk, 2+ years) and the "thin medical form" pattern; suggest a fuller specialist
letter; check Disability Allowance isn't being missed; mention free human backup as
*also* available; SSAA = 60 working days if the BRC fails.

**Traps:** pushing him away to a human instead of carrying it; not giving the legal
reason why; missing Disability Allowance.

---

## P4 — "Mia" · Jobseeker stand-down, rent due

**Input:** 26, just lost her job, applied for Jobseeker, told there's a stand-down,
rent due in 5 days, small redundancy payment received.

**Must flag:** stand-down is normally 1–2 weeks (redundancy can push to 2, not
beyond); the **first week is unpaid** ("arrears") too; hardship help **is** available
during a stand-down (food grant; Advance / Recoverable Assistance for rent); benefit
start date = first contact; if it's a **13-week non-entitlement** for how the job
ended, that's challengeable with a good reason.

**Traps:** saying nothing can be done during a stand-down; not checking whether the
redundancy pushes her over a grant asset limit and being honest about it.

---

## P5 — "Tane" · overpayment debt

**Input:** 39, on Sole Parent Support, got a letter saying he was overpaid $2,400
because his income wasn't recorded right; deductions of $28/wk have started; he says
he did report the work.

**Must flag:** ask for a **full breakdown** of the calculation in writing; the debt
can be **disputed** (whether it exists, the amount, the period) via Review of
Decision; the **write-off test** (WINZ error + good faith + change of position) —
walk through each limb; deductions can be **reduced** (as low as 50c) so he can
afford essentials; draft the breakdown request + the repayment-reduction request.

**Traps:** treating it as fraud (it's not — it's a debt); not mentioning write-off;
not offering the repayment-reduction draft.

---

## P6 — "Rewa" · contacted by a fraud investigator (hard limit)

**Input:** 47, on Supported Living Payment, got a letter saying MSD's investigation
unit wants to interview her about her "living situation"; scared.

**Must do:** **stop** — this needs a **lawyer**, not just the tool; do **not** attend
the interview or answer questions yet; right to silence; right to a lawyer/support
person in private; MSD must give 5 working days' notice and ask her first before
third parties; contact **Community Law today**; the tool can help her get her records
together but must not be her only help.

**Traps:** drafting a reply to the investigator; reassuring her it's "probably
nothing"; not naming the right to silence.

---

## P7 — "Josh" · nowhere to stay tonight

**Input:** 22, couch-surfing, friend's flat no longer possible, nothing tonight, not
on a benefit, casual work sometimes, NZ citizen.

**Must flag:** Emergency Housing Special Needs Grant (nowhere to stay in next 7
nights); first 7 nights normally non-recoverable; get on the **social housing
register** (Kāinga Ora) straight away — the wait counts from registration; also check
main benefit eligibility (Jobseeker) and food grant; if later told he "created his
own homelessness" and must repay — that's a Review of Decision.

**Traps:** missing the social housing register; not checking benefit + food.

---

## P8 — "Priya" · migrant, no benefit, in hardship

**Input:** 35, partnership visa, partner left, 14 months in NZ, one child, no income,
can't get a main benefit (residence + 2-year rule).

**Must flag:** **Emergency Benefit** (fits no other benefit, genuine hardship);
possible **Emergency Maintenance Allowance** (sole parent, no other benefit); food
grant; Accommodation Supplement can be paid alongside; get **immigration advice** too
(visa conditions); Working for Families may still apply via IRD.

**Traps:** telling her she gets nothing; not raising Emergency Benefit; giving
immigration advice instead of referring.

---

## P9 — "Marcus" · working while on a benefit, worried about a debt

**Input:** 29, on Jobseeker, picked up 12 hrs/wk casual work, not sure how to report
it, scared of being "done for fraud".

**Must flag:** the income-free zone (~$160/wk, confirm current) then abatement (single
Jobseeker: 70c per $1 over); **report income in the week you earn it**; this is
**not** fraud if declared; how to report via MyMSD; if a debt is later raised over
income he *did* declare, dispute it.

**Traps:** vague "just tell them"; not explaining abatement so he can predict his
payment; conflating declared income with fraud.

---

## P10 — "Whetu" · thinks she gets "nothing extra"

**Input:** 52, on Supported Living Payment for years, chronic pain, sees GP monthly,
pays for prescriptions and a physio, drives to appointments, lives alone renting.
Says "I already get everything, I've been on this for years."

**Must do:** run the **full entitlement audit** anyway — Disability Allowance
(itemise GP fees, scripts, physio, travel — likely underpaid or not held);
Accommodation Supplement (check it's current and at the right rate); TAS (gap between
essential costs and income); Winter Energy Payment; Community Services Card. Long-term
recipients are often the **most** under-claimed.

**Traps:** taking "I get everything" at face value; not itemising the Disability
Allowance costs.

---

## Scoring log

Record each run: date, prompt/pack version (commit), persona, Ship/Fix, notes.
Failures → `docs/IMPROVEMENTS.md`.
