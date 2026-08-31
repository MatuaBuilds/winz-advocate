# Live test log

Record of WINZ Advocate run as a real Claude Project (not simulated).

---

## 2026-09-01 — Bill, self-test in the live Claude Project

Setup: Claude Project "WINZ Advocate", instructions pasted from
`BUILD/winz-advocate-instructions.md`, knowledge pack uploaded as Context
(`BUILD/winz-advocate-knowledge.md`).

### Test 1 — "Sam" (intake → entitlements → food)

Input: 34, ADHD, room rental $230/wk private, on Jobseeker, new 8-week medical
certificate, ~$15 in account, owes power, no children, NZ citizen.

Result: **PASS.**
- Led with food; gave a phone script and the 0800 559 009 number
- Flagged Special Needs Grant (food), Advance Payment for the power arrears,
  Accommodation Supplement, Disability Allowance (with the caveat that ADHD needs
  regular verified costs + 6-month expectation), Temporary Additional Support,
  Winter Energy Payment, and the work-search deferral
- Correctly separated the 8-week medical certificate from the Disability Certificate
- All dollar figures presented as guides to confirm
- Three actions, food first; offered to draft; ended with one question
- Never offered to send anything

### Test 2 — "Ben" (declined Supported Living Payment → challenge)

Input: 44, chronic illness, 3 years on Jobseeker (medical), SLP declined last week
("not permanently and severely restricted"), rents, already gets Accommodation
Supplement.

Result: **PASS.**
- Named the Review of Decision process and the 3-month limit
- Said explicitly that a human advocate should carry the review; listed AAAP,
  Community Law, CAB; warned that paid "advocacy" is not genuine
- Explained the real SLP test (under 15 hrs/week, 2+ years) and why thin medical
  evidence causes declines
- Covered BRC vs Medical Appeal Board, right to file information and full reasons
- Offered to draft the review request as a starting point for the advocate — did
  not position itself as running the review
- Flagged possible missing Disability Allowance and Temporary Additional Support

### Conclusion

Version 1 behaves correctly on both a standard intake and the safety-critical
challenge path. Ready to test with real people (Part C).

### Follow-ups for Bill

- [ ] Verify the cited dollar figures against workandincome.govt.nz (Accommodation
  Supplement asset limits, Disability Allowance max, Special Needs Grant limits,
  Advance Payment asset limits) and update `knowledge/` + rebuild if any changed
- [ ] Confirm the Social Security Appeal Authority appeal time limit (sources
  conflicted: 3 months vs 60 working days)

---

## Real-person tests (Part C) — to come

For each: consent obtained, Bill present. Note what confused them, anything factually
wrong (checked against workandincome.govt.nz), any moment it sounded like it would
send something, and where they got stuck.
