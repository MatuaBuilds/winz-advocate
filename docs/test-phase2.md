# Phase 2 acceptance test — three personas

Run: 2026-09-01 (simulated against the v1+v2 knowledge base and system prompt).

Each persona must get: a correct entitlement summary (each claim cited), max three
prioritised actions, and a correct draft. No invented rules.

---

## Persona 1 — "Aroha" (sole parent)

31, one child aged 2. Recently separated, living alone, renting a house $480/week.
No income yet. NZ citizen.

**Expected entitlements:**
| Payment | Result | Source |
|---|---|---|
| Sole Parent Support | Yes — single caregiver, youngest child under 14 | `sole-parent-support.md` |
| Accommodation Supplement | Likely — private rental, not Kāinga Ora | `accommodation-supplement.md` |
| Childcare Assistance | Maybe — if child goes to approved ECE; 9 hrs unless she works/studies | `childcare-assistance.md` |
| Temporary Additional Support | Check after main benefit granted — rent is high vs income | `temporary-additional-support.md` |
| Special Needs Grant (food) | Yes if no money now | `special-needs-grant-food.md` |
| Best Start / Working for Families | Mention — via IRD | `overview.md` |

**Actions:** (1) apply for Sole Parent Support on MyMSD today + food grant if needed;
(2) at the appointment, apply for Accommodation Supplement (bring tenancy agreement);
(3) after the benefit starts, apply for Temporary Additional Support and check
Childcare Assistance. **PASS.**

Watch item: if WINZ questions whether she's really single, that's a
"relationship in the nature of marriage" issue → handoff to advocate.

---

## Persona 2 — "Ben" (Supported Living Payment declined)

44, chronic illness, on Jobseeker (medical) for 3 years. Applied for Supported Living
Payment, declined last week — letter says "not permanently and severely restricted."
Renting, gets Accommodation Supplement.

**Expected handling:**
- Recognise this is a **decision gone against him**.
- Explain Review of Decision, **3-month limit from the notification date**.
- Tell him to contact a **free advocate now** (`handoff.md`).
- Offer to draft the review request (`templates/review-of-decision-request.md`),
  noting he should get a fuller letter from his specialist spelling out why the
  restriction lasts 2+ years.
- Also check: is he getting **Disability Allowance** for his ongoing health costs?
  Often missed. (`disability-allowance.md`)
- Update case file "Reviews / challenges" section.

**Actions:** (1) contact AAAP or Community Law this week; (2) ask specialist for a
detailed letter; (3) apply for Disability Allowance if not already. **PASS** — tool
does not claim to run the review itself.

---

## Persona 3 — "Mia" (Jobseeker stand-down)

26, just lost her job, applied for Jobseeker. Told there's a stand-down before
payments start. Rent due in 5 days. Small redundancy payment received.

**Expected handling:**
- Explain stand-down; ask how many weeks.
- Bridge options: **Special Needs Grant (food)**, **Advance Payment of Benefit**
  (once benefit is granted) or **Recoverable Assistance Payment** (if not yet on
  benefit) for rent — flag both are repayable. (`advance-payment-and-recoverable-assistance.md`)
- Note the **benefit start date** should be tied to first contact — check it's right.
- If the redundancy payment pushes her over an asset/income limit for grants, say so
  honestly and point to what's still possible.
- Draft: a request email covering the stand-down hardship and rent.

**Actions:** (1) phone 0800 559 009 today about hardship help for rent + food;
(2) confirm benefit start date matches first contact date; (3) if declined hardship,
ask for the decision in writing and consider a review. **PASS.**

---

## Result

| Persona | Correct cited summary | ≤3 prioritised actions | Correct draft / handoff | No invented rules |
|---|---|---|---|---|
| Aroha | ✅ | ✅ | ✅ | ✅ |
| Ben | ✅ | ✅ | ✅ | ✅ |
| Mia | ✅ | ✅ | ✅ | ✅ |

**Phase 2 passes (simulated).** Same follow-up as Phase 1: Bill verifies the cited
figures against the source URLs, then one live run in the Claude Project.
