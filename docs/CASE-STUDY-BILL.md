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

## Current live cases

### 1. Housing

Goal: Secure stable housing and prepare for relocation.

Current state:
- Work and Income housing paperwork signed.
- MyMSD document upload section is open.
- Accommodation confirmation letter requested from current household.
- Working move-out date is 15 December 2026.
- Date may change if the current property sells or circumstances change.

Current status: Waiting on accommodation letter and housing process.

Important behaviour: Do not treat housing as only an application problem. Prepare for
the move before the address arrives.

### 2. Empty House Move-In

Goal: Be able to move into an empty property and make it functional immediately.

Current preparation areas: bed, mattress, bedding, fridge/freezer, washing machine,
basic seating, table/chairs, essential kitchen items, utilities, moving costs,
delivery, assembly, installation.

Important learning: Buying the item is not enough. The real outcome is: **delivered,
installed, usable.**

Supplier research should therefore include: delivery availability, installation
availability, assembly requirements, MSD preferred supplier status where relevant,
lead time, total delivered cost, suitability for the actual user.

Status: Preparation can happen before the final address exists. Applications and
delivery booking occur once the address and move-in date are confirmed.

### 3. Disability Allowance / Medicinal Cannabis

Goal: Get ongoing prescribed medicinal cannabis cost recognised through Work and
Income Disability Allowance.

Existing evidence: Work Capacity Medical Certificate, clinical history, ACC reports,
GP health summary, Dispensed medicinal cannabis approval letter, prescription/
treatment information.

Current learning: Do not repeatedly rebuild the medical story. Reuse existing medical
evidence.

The missing piece identified by the case manager is mainly: current cost evidence,
current certification of the ongoing disability-related cost.

Actions taken: Disability Allowance form obtained; request sent to Dispensed; request
sent to regular GP / Totara Health; Dispensed confirmed the request has been escalated
to their medical team.

Status: Waiting on providers.

### 4. Therapy

Goal: Maintain consistent therapeutic support.

Current state: Therapy has been re-engaged and organised.

Status: Stable / active.

### 5. Money / KiwiSaver

Goal: Improve stability and transport.

Current priority: Significant financial hardship KiwiSaver application.

Likely work required: identify provider; locate correct hardship form; confirm
evidence requirements; gather income and expenses; gather debt information; gather
housing and stability evidence; document transport need; document why reliable
transport supports health, therapy, housing, and stability.

Separate money target: Approximately NZD $1,700 for Türkiye flights.

Important behaviour: Do not turn every financial problem into one large "money" issue.
Break money into separate cases and funding targets.

### 6. Rotorua Support Network

Goal: Build support before relocating.

Services contacted include: Te Pokapū / housing navigation; Community Law; Health and
Disability Advocacy.

Important learning: The advocate should not just provide a list of services. It should
track: who was contacted, what was asked, when they replied, what they can actually
help with, next action, whether the relationship was useful.

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
