# Village Advocate — Specification (v1 draft)

Status: **draft** — written 2026-09-01. Open questions are marked `❓`. Bill approves before Phase 1 build.

## 1. Problem

People entitled to WINZ support routinely miss out because the system is hard to
navigate: you have to know what to ask for, fill forms, phone case managers, gather
evidence, and hit deadlines. For people with ADHD, AuDHD, or trauma, that load is the
barrier. Free human advocates (AAAP, Community Law) do this work but cannot reach
everyone.

## 2. What Version 1 does

A guided assistant that takes a person from *"I don't know what I'm entitled to"* to
*"a correct draft email to my case manager is ready for me to send."*

Four capabilities:

1. **Guided intake** — a calm, one-question-at-a-time conversation that builds a
   picture of the person's situation. Resumable via a saved case file.
2. **Entitlement check** — compares the situation against the knowledge base and
   produces a plain-language summary: *"Based on what you've told me, you may be
   entitled to X, Y, Z. Here's why, and here's the source."*
3. **Next 3 actions** — the most important things to do now, in order, no more than
   three.
4. **Draft correspondence** — writes ready-to-send emails to a case manager or WINZ:
   request an appointment, apply for a specific payment, follow up on a delay, or
   request a Review of Decision. The person reads and sends.

## 3. What Version 1 does NOT do (explicitly out of scope)

- Sending email or submitting anything electronically. It only drafts.
- Accounts, login, database, server, or web hosting.
- Automated reminders. The case file lists deadlines; the person checks them.
- Appeals beyond drafting the initial Review of Decision request.
- Integrations with food-parcel services. v1 provides referral info and a draft
  request email only.
- Live scraping of MSD rules. Knowledge is hand-maintained markdown with sources.
- Legal advice, or advice on tax, immigration, or family law.

## 4. Build target — recommendation

**Version 1 = a shareable Claude Project** (system prompt + the `knowledge/` files as
project knowledge + the case-file template). No app to build, no hosting, no login,
no security burden. It matches how Bill already works and can ship in days, not months.

Trade-off: each user needs a Claude account (a free tier exists). Accepted for v1.
A local or web app is reconsidered only in Phase 4, after the knowledge base and
prompt are proven with real people.

`❓ Bill: agree with Claude Project for v1? Or do you specifically want a local app now?`

## 5. Data model — the case file

One markdown file per person, held by the person. Sections:

- **Situation** — age, household, housing/rent, income, current benefits, health &
  disability, dependents, immigration status, debts, urgent needs this week.
- **Entitlements identified** — payment, likely eligible? (yes/maybe/no), why, source,
  status (not applied / applied / granted / declined).
- **Correspondence log** — date, direction (sent/received), summary, what it needs.
- **Deadlines** — what, by when, why it matters.
- **Notes** — anything else.

Template lives in `case-file-template/`.

## 6. Safety rails (see CLAUDE.md for the full list)

- Never sends. Draft → human review → human sends.
- Never invents entitlements. Cites a `knowledge/` file with a source URL + date.
- States uncertainty plainly and hands off to a human advocate when unsure.
- "Not legal advice" stated where it matters; hand-off list always available.
- Privacy: data stays in the person's case file; nothing transmitted.

## 7. End-to-end acceptance test

**Persona — "Sam":** 34, has ADHD, renting a room ($230/week), on Jobseeker Support,
just got a medical certificate for 8 weeks, no money for food this week, no children.

Passing v1 must:
1. Run intake without overwhelming Sam (one question at a time, plain language).
2. Produce an entitlements summary that correctly flags at least: Accommodation
   Supplement, Disability Allowance, and a Special Needs Grant for food — each with
   a correct source citation.
3. Give Sam three next actions, in priority order (food grant first).
4. Produce a correct, ready-to-send draft email to Sam's case manager requesting the
   food grant and an appointment to sort the rest.
5. Every factual claim traces to a `knowledge/` file. Bill can check each one against
   its cited source and find it accurate.

## 8. Open questions for Bill

- `❓` Claude Project vs local app for v1 (see section 4).
- `❓` Should intake also cover ACC and Kāinga Ora / housing, or WINZ only for v1?
- `❓` Which region(s) first? (affects food-bank referral list)
- `❓` Is there a real person we can safely test with in Phase 3?
