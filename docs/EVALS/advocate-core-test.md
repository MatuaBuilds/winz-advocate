# Advocate Core — Phase 3B verification

Run: 2026-09-01 (traced against `docs/advocate-core-example.md` using
`BUILD/advocate-core-full-prompt.md`).

The Core must be able to answer these six questions from the tracker, and handle a
new document arriving. Manual trace below; re-run as a live session before relying on it.

---

## 1. What is currently front burner?

**Expected:** exactly the three, with why:
- **Housing** — blocked on the confirmation letter; move-out in ~3 months.
- **Disability Allowance claim** — form ready; only the provider evidence is missing.
- **KiwiSaver hardship** — nothing started; a real path to stability/transport.

Everything else is Waiting, Ready, Back burner, or Complete — **not** front burner.
**PASS** — the tracker names 3; the Core repeats them and holds the ≤3 limit.

## 2. What is waiting on someone else?

**Expected:**
- Disability Allowance — prescriber (escalated to medical team) — chase by **2026-09-08**
- Disability Allowance — GP — chase by **2026-09-08**
- Housing — confirmation letter from the household — chase by **2026-09-08**

And the framing: *"these are on them, not on you — chase dates are set."*
**PASS.**

## 3. What evidence already exists?

**Expected (pulled from `evidence held` across cases):**
- work-capacity medical certificate
- GP health summary
- specialist reports
- treatment / approval letter
- prescription info
- signed WINZ housing paperwork

And the point: *for the Disability Allowance claim, the diagnosis side is already
covered — don't re-request it; the only gap is current cost + ongoing-cost
certification.*
**PASS.**

## 4. What is the single best next action?

**Expected:** ONE thing — *chase the accommodation confirmation letter* (it's the
single item blocking the housing paperwork, and housing has the nearest hard
deadline). Not a list.
**PASS** — the Core gives one action; offers the full picture only if asked.

## 5. What has been completed recently?

**Expected (the wins list, said back as wins):**
- WINZ housing paperwork signed
- Disability Allowance form obtained
- Requests sent to the prescriber and the GP
- Therapy re-engaged
- Three support services contacted ahead of the move

Framed as *"you said you'd do these, and you did."*
**PASS.**

## 6. What changed when a new email or document arrived?

**Test input:** *"The GP sent a letter. It confirms the condition is ongoing and lists
the weekly cost of the treatment."*

**Expected Core behaviour:**
1. **Read it** — say what it means: this is the current cost evidence + ongoing-cost
   certification the case manager asked for.
2. **Update the case** — Disability Allowance claim: add the letter to `evidence
   held`; remove "GP" from `waiting on`; status moves from `Waiting on someone` →
   `Ready to act` (the prescriber piece may still be outstanding — if so it stays
   partly waiting, but the claim can likely proceed on the GP letter).
3. **Name the win** — "the GP came back — that's the piece that was missing."
4. **Surface the next action** — one thing: complete the Disability Allowance form
   using the GP letter and the cost figures, ready to submit. Offer to draft the
   covering note.
5. **Does NOT** invent an unrelated task, and does NOT ask Bill to re-explain his
   medical history.

**PASS** — matches the "read first / reuse evidence / carry waiting / name wins /
one bounded action" rules.

---

## Result

All six pass on the trace. The Core layer works as a thin wrapper: it manages the
cases, holds the context, keeps the front burner to three, carries the waiting, names
the wins, and routes domain questions (Disability Allowance → WINZ module; supplier
research → moving-house module; KiwiSaver → money-debt module).

**Next:** run it as a live session with `BUILD/advocate-core-full-prompt.md` +
`case-files/bill-live-case.md`, and log anything the trace missed in
`docs/IMPROVEMENTS.md`.
