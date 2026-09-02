# Bill Live Case Study

_Captured 2026-09-01 — Bill's own words, from real use of an AI assistant to navigate
housing, health, Work and Income, therapy, money, moving, and life admin. This is the
north-star document for what the advocate is actually for. The distilled model is in
[`ADVOCATE-CORE.md`](ADVOCATE-CORE.md)._

---

## Why this case exists

This document captures a real-world use case that emerged while Bill was using an AI
assistant to navigate housing, health, Work and Income, therapy, money, moving, and
general life administration.

The main learning is that the value of the advocate is not just providing information.

The value is reducing the distance between overwhelm and action.

Bill often already knows that something needs to be done. The barrier is the
activation cost around doing it: opening an email, anticipating rejection, reading
official language, remembering what happened before, gathering documents, deciding
what matters, replying, following up, and holding multiple open loops at once.

The advocate helps carry that load.

## Core behaviour observed

Bill can say things like:

- "I need to move."
- "I got an email and I don't want to open it."
- "They sent me this form."
- "I need a car."
- "I don't know what happens next."
- "I'm overwhelmed."
- "Check the email."
- "Update where we're at."
- "What do I need to do tomorrow?"

The advocate then turns that into:

1. Understand the situation
2. Identify the correct life lane or case
3. Read existing correspondence and documents
4. Reuse existing evidence wherever possible
5. Explain what the new information means
6. Decide the smallest useful next action
7. Draft or send communication where authorised
8. Track who is responsible for the next step
9. Follow up when new information arrives
10. Record completed actions and wins
11. Re-prioritise the case without making the user reconstruct the whole story

## Core principle

**Never make the user carry context the system can carry for them.**

## Secondary principle

**When avoidance is the barrier, help execute the task instead of only explaining it.**

## The live cases (held privately)

Six real cases ran in parallel during this use: **housing**, **empty-home move-in
prep**, a **Disability Allowance cost claim**, **therapy**, **money / KiwiSaver
hardship + a one-off funding target**, and a **pre-move support network**.

The specific detail is kept out of this public file. The working version lives at
`case-files/bill-live-case.md` (gitignored, local only). A de-identified worked
version — safe to share, and used as the Advocate Core test fixture — is at
`docs/advocate-core-example.md`.

The reusable lessons from those cases:

- **Housing is not only an application.** Prepare the move before the address arrives.
- **"Bought" is not the outcome — "delivered, installed, usable" is.** Supplier
  research must cover delivery, installation, assembly, lead time, total delivered
  cost, MSD preferred-supplier status, and suitability for the actual person.
- **Do not rebuild the medical story.** Reuse the evidence that already exists. The
  gap for a cost claim is usually the *current cost evidence and certification the
  cost is ongoing* — not the diagnosis.
- **Don't collapse money into one problem.** Each funding target is its own case with
  its own path.
- **Don't just hand over a list of services.** Track each: what was asked, when they
  replied, what they can actually help with, whether the relationship was useful.

## Status model

Every case should be able to sit in one of these states: Front burner · Waiting on
someone · Ready to act · Complete · Back burner.

The user should not need to remember which state something is in. The system should.

## Case object

The emerging Advocate Core should manage each case using: Goal · Current state ·
Evidence held · People/services involved · Correspondence · Waiting on · Next action ·
Deadline · Wins/completed actions · Notes/lessons.

## Interaction behaviour that worked

**1. One bounded action.** Do not return a giant list unless explicitly requested.
When overloaded, reduce the next action.

**2. Maximum three active priorities.** Most tasks should remain waiting or parked.

**3. Read first.** When new correspondence arrives: read it, explain it, update the
case, identify whether action is actually required. Do not automatically create
another task.

**4. Reuse evidence.** Before asking the user to get another letter, fill out another
form, repeat their medical history, or find another quote — check whether the evidence
already exists.

**5. Maintain the paper trail.** Official conversations should preferably remain in
writing where appropriate. Track: dates, names, messages, documents, decisions,
deadlines.

**6. Carry waiting states.** If a provider has been contacted, the task belongs to
them until a reply arrives. Do not make the user feel like waiting is unfinished
personal work.

**7. Celebrate completed actions.** Progress needs to remain visible. Example: "I said
I would do this, and I did." This is not cosmetic. Visible completion helps restore
self-efficacy when the person has a long history of avoidance, overwhelm, or stalled
administration.

## Key product insight

This is not primarily: a planner, a chatbot, an entitlement checker, a productivity
tool, an email writer.

It is closer to: **a persistent advocate that holds context, handles friction, and
keeps life moving.**

## Advocate Core concept

WINZ should remain a specialist module. Above the modules, build an Advocate Core that
manages the person's real-world cases.

```
Advocate Core
- case management
- context
- priority
- waiting states
- correspondence
- evidence
- next actions
- wins

Domain modules
- WINZ
- Housing
- Health/admin
- ACC
- Money/debt
- Moving house
- Providers/suppliers
- Other future specialist areas
```

The Advocate Core does not need to know every domain rule. It needs to know: what
case the issue belongs to, what context already exists, what module should handle the
issue, what happened last, what is waiting, what should happen next.

## Success measure

The test is not: "Did the advocate give correct information?"

The stronger test is: **Did something that was stuck start moving?** And: **Did the
user feel the process became easier rather than harder?**
