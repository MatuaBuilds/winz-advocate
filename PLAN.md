# Village Advocate — Build Plan

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
4. **`knowledge/handoff.md`** — AAAP, Community Law, and how to tell a real advocacy
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

## Phase 2 — Breadth

- Add the rest of the entitlements: all main benefits (Jobseeker, Sole Parent
  Support, Supported Living Payment, etc.), supplementary help (Temporary Additional
  Support, Childcare Assistance, Advance Payment), and hardship grants.
- Add `knowledge/process/review-of-decision.md` and a Review of Decision draft
  template (the 3-month window, what to include).
- Add the correspondence-log workflow to the case file so replies get pasted back
  and tracked.

**Verify:** three more personas (sole parent; person on Supported Living Payment
declined a Disability Allowance cost; someone facing a stand-down). Each gets a
correct summary, actions, and draft.

---

## Phase 3 — Real use

- Package as a shareable Claude Project with a one-page "how to use this" for a
  non-technical person in distress.
- Bill runs it *with* 2–3 real people (with their consent), watching for confusion,
  wrong advice, or anything that adds stress.
- Fix what those sessions reveal. Update `knowledge/` sources to current dates.

**Verify:** each person reaches a correct, sent email and reports it felt easier,
not harder.

---

## Phase 4 — Only if Phase 3 proves it works

Reconsider a local desktop app for: offline privacy, a real case-file store, and
actual deadline reminders. Decision recorded in `docs/DECISIONS.md` first. Not
before.

---

## If you get stuck

Tell Claude: *"I'm stuck on Phase [n], step [n]. Explain it simply and do the next
smallest piece."* Or contact a free advocate (`knowledge/handoff.md`) — the tool
does not have to be finished for you to get help now.
