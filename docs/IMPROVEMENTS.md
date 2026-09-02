# Improvements log

Every time an eval fails or real feedback shows a gap, log it here with the fix. This
is the record of the tool getting better at the job.

## Format

```
### YYYY-MM-DD — [what broke]
- Found by: eval persona P# / red-team / outcome / contribution
- Problem: …
- Change: … (file, commit)
- Re-ran suite: pass / [which personas]
```

## Log

### 2026-09-01 — suite created + first full run

First quick run of P1–P10 against pack @ commit 5fbd491.

| Persona | Verdict | Note |
|---|---|---|
| P1 Sam (food/intake) | Ship | passed live test earlier too |
| P2 Aroha (sole parent) | **Fix** | Working for Families / Best Start had no file — tool could only say "ask IRD" |
| P3 Ben (SLP declined) | Ship | passed live test earlier |
| P4 Mia (stand-down) | Ship | borderline — relies on tool connecting redundancy → grant asset limit; knowledge is there |
| P5 Tane (overpayment debt) | **Fix** | knowledge solid, but no purpose-built templates for breakdown / write-off / repayment-reduction |
| P6 Rewa (fraud investigator) | Ship | safety-critical path well covered |
| P7 Josh (homeless tonight) | Ship | |
| P8 Priya (migrant, no benefit) | **Fix** | Emergency Maintenance Allowance (sole-parent version) not mentioned anywhere |
| P9 Marcus (working on benefit) | Ship | |
| P10 Whetu ("I get everything") | **Fix** | prompt didn't tell the tool to run the full audit anyway for long-term recipients |

**Fixes applied same session:**
- P2 → new `knowledge/entitlements/working-for-families.md` (Family Tax Credit,
  Best Start, In-Work / Minimum Family Tax Credit; IRD-administered; current guide
  figures). COVERAGE ✅.
- P5 → new `knowledge/templates/overpayment-and-debt-requests.md` (breakdown request,
  write-off request tracking the 3-limb test, repayment-reduction request).
- P8 → Emergency Maintenance Allowance section added to `emergency-benefit.md`.
- P10 → `prompt/system-prompt.md` entitlement-check step now says run the full check
  even if the person thinks they get everything; long-term recipients most under-claimed.

**Re-check:** the 4 fixes are additive (new files) or a small prompt addition — no
regression risk to the Ship personas. Full re-run due after the next batch of changes.

### 2026-09-01 — v1.1 Loop 1 (knowledge) + wizard youth handling

- Added 5 entitlement files (Training Incentive Allowance, Youth/Young Parent Payment,
  NZ Super, student support, caring-for-someone-elses-child). No AI-version eval
  regression expected (additive); full P1–P10 re-run still pending.
- **Wizard fix:** an under-18 was being shown "Jobseeker Support" (min age 18).
  Added a `youthPayment` rule and `mainBenefit` now returns null for `u18`.
- Wizard personas added: Kayla (17, left OT care → Youth Payment, not Jobseeker),
  Nan (grandparent raising grandkids → UCB + school-costs grant, not WFF/SPS).
- **Wizard test: 12 pass, 0 fail.**

### 2026-09-01 — wizard v2 + automatic wizard test

- Wizard logic moved to `wizard-logic.js` (testable outside the browser).
- `docs/EVALS/wizard-test.mjs` — 10 persona answer-sets through the real rules.
  **First run: 10 pass, 0 fail.**
- Covered by the test: already-on-a-benefit suppression, "check the rate" variants
  for payments you hold, declined→ROD, sanction→s252, debt path, migrant→Emergency
  Benefit (not Sole Parent / Jobseeker), whāngai→UCB, dental grant, Training
  Incentive Allowance.
