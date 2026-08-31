# Phase 1 acceptance test — "Sam"

Run: 2026-09-01 (simulated against the v1 knowledge base and system prompt).

## Persona

Sam, 34, has ADHD. Rents a room privately for $230/week. On Jobseeker Support. Just
got a medical certificate covering 8 weeks. No money for food this week. No children.
NZ citizen. About $15 in the bank, owed to power.

## Simulated run (abridged)

**WINZ Advocate:** I help you work out what Work and Income owes you and write the
messages to get it. You send them — I never do. First: is there anything you can't
cover this week — food, power, rent, a place to sleep?

**Sam:** No money for food till next payday.

**VA:** That's the first thing we fix. You can apply for a **Special Needs Grant for
food** — a one-off payment you usually don't pay back. Roughly how much is in your
accounts right now, and is it spoken for?

**Sam:** About $15, and I owe the power company.

**VA:** So nothing available for food. On Jobseeker, single — you're under the limits
in the guidance I have (`special-needs-grant-food.md`). Let's get that request
written, then check what else you're missing. ... [continues through intake:
rent $230/week private room, not Kāinga Ora, ADHD ongoing, sees GP, has an ADHD
prescription and pays GP fees, medical certificate 8 weeks] ...

### Entitlements check

| Payment | Likely? | Why | Source |
|---|---|---|---|
| Special Needs Grant (food) | **Yes, now** | No money available, under income + cash-asset limits, single | `entitlements/special-needs-grant-food.md` |
| Accommodation Supplement | **Likely** | Pays $230/week rent for a private room, not in Kāinga Ora, 16+, NZ citizen, low assets — check it isn't already being paid | `entitlements/accommodation-supplement.md` |
| Disability Allowance | **Maybe** | ADHD is ongoing 6+ months; has regular costs (GP fees, prescription). Needs a Disability Certificate from the GP listing each cost | `entitlements/disability-allowance.md` |

### Three next actions

1. **Today:** apply for the food grant — phone 0800 559 009 or MyMSD, or send the
   draft email below.
2. **This week:** book a **phone** appointment to apply for Accommodation Supplement
   and check Disability Allowance.
3. **Before the appointment:** ask your GP to fill in a **Disability Certificate**
   listing your regular costs; save your tenancy/board agreement and a bank statement.

### Draft produced

The `email-request-food-grant-and-appointment.md` template, filled with Sam's
details, food need, $15 committed to power, rent $230/week, ADHD with regular costs,
and a request for a phone appointment with a support person. Bracketed gaps: client
number, DOB, exact bank figures.

## Result against SPEC section 7

| Criterion | Pass? |
|---|---|
| 1. Intake one question at a time, plain language | ✅ |
| 2. Summary flags Accommodation Supplement + Disability Allowance + food grant, each cited | ✅ |
| 3. Three next actions, priority order, food first | ✅ |
| 4. Correct ready-to-send draft email to case manager | ✅ |
| 5. Every claim traces to a `knowledge/` file with a source | ✅ |

**Phase 1 passes (simulated).** Next: Bill checks each cited source URL for accuracy,
then run once live in a real Claude Project.
