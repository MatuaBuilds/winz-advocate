# WINZ Advocate — Build Plan

One phase at a time. Each phase ends with something you can check. Stop between
phases as often as you need.

---

## Phase 0 — Setup ✅ DONE

Folder, structure, `CLAUDE.md`, `SPEC.md`, this plan, `START-HERE.md`.

---

## Phase 1 — Walking skeleton (this is Version 1)

**Goal:** the thinnest complete path — intake → entitlement check → one drafted
email — working end to end, passing the "Sam" test in `SPEC.md` section 7.

Build, in order:

1. **`knowledge/entitlements/` — three files only:**
   - `accommodation-supplement.md`
   - `disability-allowance.md`
   - `special-needs-grant-food.md`
   Each: what it is, who qualifies, how to apply, evidence needed, common reasons
   for decline, and a `## Source` section (official URL + date checked).
2. **`knowledge/process/contacting-your-case-manager.md`** — how to reach a case
   manager, what MyMSD is, realistic timeframes, your right to bring support.
3. **`knowledge/templates/` — two files:**
   - `email-request-food-grant-and-appointment.md`
   - `email-follow-up-on-delay.md`
4. **`knowledge/support-network.md`** — AAAP, Community Law, and how to tell a real advocacy
   service from a paid impostor.
5. **`case-file-template/case-file.md`** — the structure from `SPEC.md` section 5.
6. **`prompt/system-prompt.md`** — the assistant's instructions: the intake flow,
   how to use the knowledge base, the safety rails, the "three actions" rule, tone.
7. **`prompt/intake-script.md`** — the ordered list of intake questions, grouped so
   the assistant asks one thing at a time.

**Verify Phase 1:**
- Load the system prompt + knowledge files into a Claude Project (or paste into a
  chat). Role-play as "Sam". Check all five points in `SPEC.md` section 7.
- Bill checks each entitlement claim against its cited source URL. Fix any mismatch.
- Commit.

**When this passes, Version 1 exists.** You can stop here and it is already useful.

---

## Phase 2 — Breadth ✅ DONE

- [x] Main benefits: Jobseeker Support, Sole Parent Support, Supported Living Payment
  (+ `entitlements/overview.md` mapping situations to payments)
- [x] Supplementary: Temporary Additional Support, Childcare Assistance
- [x] One-off repayable: Advance Payment of Benefit + Recoverable Assistance Payment
- [x] `knowledge/process/review-of-decision.md` + `templates/review-of-decision-request.md`
- [x] Correspondence-log + reviews workflow added to the case file; system prompt
  now handles a pasted WINZ reply

**Verified:** `docs/test-phase2.md` — three personas (sole parent; Supported Living
Payment declined; Jobseeker stand-down). All pass.

---

## Phase 3 — Real use  (IN PROGRESS)

- [x] Packaged for Claude Project: `BUILD/winz-advocate-instructions.md` +
  `BUILD/winz-advocate-knowledge.md` (one uploadable pack, rebuilt by
  `BUILD/build.sh`)
- [x] One-page user guide for someone in distress: `HOW-TO-USE-THIS.md`
- [x] Step-by-step setup + test script: `docs/SET-UP-THE-CLAUDE-PROJECT.md`
- [ ] **Bill:** build the project on claude.ai (Part A) and self-test (Part B)
- [ ] **Bill:** test with 2–3 real people, with consent (Part C) → notes in
  `docs/real-tests.md`
- [ ] Fix what those sessions reveal

**Verify:** each person reaches a correct, sent email and reports it felt easier,
not harder.

---

## Phase 4 — Free, open, public  (IN PROGRESS)

No offline model (dropped 2026-09-01). The tool is given away as text anyone can run.

- [x] `LICENSE` (CC BY 4.0 content / MIT code)
- [x] `CONTRIBUTING.md` + GitHub issue templates (share what happened / suggest a
  correction / report something wrong)
- [x] `knowledge/community-notes/` — de-identified real experiences grow the library
- [x] `index.html` — plain-language landing page (works as a GitHub Pages site)
- [x] "We are the advocate" reframe — carries RODs and BRC prep; human help is
  backup, not a redirect; hard line only for criminal/fraud matters
- [ ] **Bill:** make the GitHub repo public + turn on GitHub Pages
- [ ] Share with community orgs (AAAP, Community Law, food banks, marae)
- [ ] Later, if funded: a hosted no-login website

## Phase 5 — Advocate Core (the direction)

From `docs/CASE-STUDY-BILL.md` + `docs/ADVOCATE-CORE.md`: WINZ Advocate becomes one
**module** under a persistent advocate that holds context across a person's whole
life admin (housing, health, ACC, money/debt, moving, providers) and keeps things
moving — reducing the distance between overwhelm and action.

- [x] Interaction behaviours folded into the WINZ system prompt ("How to carry the
  load") + the case file (next 3 actions, waiting-on, wins, evidence-held)
- [ ] **Core v0** — a multi-case "life dashboard" file (the case object + status
  model) and the AI version taught to run it: read email → route to a case → update
  → surface next ≤3 → carry waiting states → log wins
- [ ] Later modules as their own knowledge packs under the Core

## Phase 6 — Only if it proves out and help arrives

A hosted site, or a local app for offline case files and deadline reminders. Recorded
in `docs/DECISIONS.md` first. Not before.

---

## If you get stuck

Tell Claude: *"I'm stuck on Phase [n], step [n]. Explain it simply and do the next
smallest piece."* Or contact a free advocate (`knowledge/support-network.md`) — the tool
does not have to be finished for you to get help now.
