# Decisions log

Record every significant decision here so future sessions don't relitigate it.

## 2026-09-01 — Project started

- **Who it's for:** individuals helping themselves (not advocate-operated).
- **What it does:** identifies WINZ entitlements from a guided intake, then drafts
  emails to case managers / WINZ to move applications forward.
- **Build target for v1:** shareable Claude Project (system prompt + `knowledge/`
  files). No app, no hosting, no login. Revisit a local/web app only at Phase 4.
  *(Pending Bill's confirmation — see SPEC.md open questions.)*
- **Scope discipline:** finished small v1 over ambitious unfinished automation.
- **Safety:** never auto-send; never invent entitlements (cite sources); advocacy
  not legal advice; privacy-first.

## 2026-09-01 — Phase 1 built

- Knowledge base v1: Accommodation Supplement, Disability Allowance, Special Needs
  Grant (food), contacting-your-case-manager, 2 email templates, handoff list. All
  carry source URLs + "checked 2026-09-01".
- `prompt/system-prompt.md` and `prompt/intake-script.md` written.
- Passes simulated "Sam" acceptance test (`docs/test-sam.md`).
- Delivery mechanism for v1 confirmed: Claude Project (`docs/SET-UP-THE-CLAUDE-PROJECT.md`).
- Outstanding before "live": Bill verifies each cited source figure; one live test run.

## 2026-09-01 — Phase 2 built

- Added entitlements: Jobseeker Support, Sole Parent Support, Supported Living
  Payment, Temporary Additional Support, Childcare Assistance, Advance Payment +
  Recoverable Assistance Payment; plus `entitlements/overview.md` (situation → payment map).
- Added `process/review-of-decision.md` + `templates/review-of-decision-request.md`.
  Rule: the tool never positions itself as running a review/appeal — always hands off
  to a free advocate (AAAP / Community Law) and stresses the 3-month limit.
- Case file gained a Reviews/challenges section and a "paste WINZ replies back" workflow;
  system prompt handles interpreting a pasted decision.
- SSAA appeal time limit: sources conflict (3 months vs 60 working days) — knowledge
  file says "urgent, confirm with advocate" rather than asserting one.
- Passes `docs/test-phase2.md` (Aroha / Ben / Mia personas).
