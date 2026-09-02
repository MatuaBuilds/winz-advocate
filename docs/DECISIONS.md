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

## 2026-09-01 — Phase 3.5: advocacy leverage

- Bill's steer: the tool should "fight tooth and nail". Added a rights/pushback
  layer from AAAP + Community Law + 2025 law changes.
- New: `process/your-rights-and-how-to-push-back.md`, `process/2025-rule-changes.md`,
  `entitlements/commonly-missed.md`. System prompt gained an "advocate hard" rule.
- Kept the safety line: still hands reviews/appeals to a human advocate; still
  never sends; still cites.

## 2026-09-01 — Phase 4 direction (offline model dropped)

- Bill: **no offline/local model.** Reasons for wanting it (privacy, no cost/sign-up,
  independence) are better served another way.
- Phase 4 = **free, open, published-openly access.** Distribution: publish openly for
  anyone (people + advocates + orgs) to use and build on.
- Open constraint to resolve with Bill: a zero-account hosted site needs someone to
  fund the AI usage. Recommended v1 = publish the pack + a plain landing page so
  anyone can run it in their own (free-tier) AI account; pursue a funded hosted
  version later with a partner/grant.
- Making the GitHub repo public requires Bill's explicit go-ahead.

## 2026-09-01 — "We are the advocate" + public release scaffolding

- Bill's steer: **do not push people to human advocates.** The tool carries the whole
  WINZ process itself, including Reviews of Decision and Benefit Review Committee
  preparation. `handoff.md` renamed to `support-network.md` and reframed as backup
  the person can *also* use.
- **One hard line kept:** fraud / benefit crime / prosecution / relationship-fraud
  investigation → needs a lawyer (Community Law / Legal Aid). Also: never sends,
  never invents, crisis → 1737/111.
- Bill confirmed: free website + public repo. Distribution = publish openly; ask
  users to contribute their experiences to grow the knowledge library; "do what we
  can with nothing; funders/help will turn up."
- Added: `LICENSE` (CC BY 4.0 / MIT), `CONTRIBUTING.md`, `.github/ISSUE_TEMPLATE/*`,
  `knowledge/community-notes/`, `index.html` (GitHub Pages landing page).
- Still to do (Bill): create the public GitHub repo + enable Pages; tell the orgs.
  No `gh` CLI on the machine — will need browser + `git remote add` + `git push`.

## 2026-09-01 — Phase 3 packaging

- Delivery is two files: `BUILD/winz-advocate-instructions.md` (project
  instructions) + `BUILD/winz-advocate-knowledge.md` (single knowledge pack,
  concatenated from source by `BUILD/build.sh`). Chosen over uploading 16 separate
  files to keep setup simple for a non-technical user.
- Instructions rewritten to reference "the Knowledge Pack" sections instead of file
  paths, and to work either as a Claude Project or pasted into a plain chat (fallback
  for plans without Projects).
- `HOW-TO-USE-THIS.md`: one-page end-user guide, includes 1737 and 111.
- Maintenance model: edit `knowledge/`, run `bash BUILD/build.sh`, re-upload the pack.
- Remaining human steps tracked in PLAN.md Phase 3 checkboxes.

## 2026-09-01 — Advocate Core direction (from Bill's live case study)

- Bill wrote `docs/CASE-STUDY-BILL.md` from real use of an AI assistant for his own
  life admin. Core insight: **the value is reducing the distance between overwhelm
  and action, not providing information.** Principle: *never make the user carry
  context the system can carry.* When avoidance is the barrier, help execute, not
  just explain.
- Architecture: WINZ Advocate = one **module**. Build an **Advocate Core** above the
  modules for case management, context, priority, waiting states, correspondence,
  evidence, next actions, wins. `docs/ADVOCATE-CORE.md` holds the model.
- Applied now: 7 interaction behaviours added to the WINZ system prompt ("How to
  carry the load"); case file gained next-3-actions, waiting-on, wins, evidence-held.
  Core v0 (multi-case dashboard) is the next build (PLAN.md Phase 5).
- Success measure changed: not "was the info correct" but "did something stuck start
  moving, and did it get easier."
