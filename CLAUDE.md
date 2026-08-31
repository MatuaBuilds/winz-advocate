# WINZ Advocate — Project Instructions

Read this first, every session. Then read `SPEC.md` and `PLAN.md`.

## What this project is

A free tool that acts as a New Zealand welfare/benefit advocate. It helps people who
are entitled to support from Work and Income (WINZ / Ministry of Social Development)
actually receive it. It is built for people whose ADHD, AuDHD, or trauma makes the
system's forms, phone calls, appointments, and deadlines a serious barrier.

Users are **individuals helping themselves**. The measure of success is: the most
useful *free* advocate tool for people with the fewest resources.

## The person you are helping

They are likely overwhelmed, low on money, possibly in crisis this week (food, rent,
power). Executive function is the bottleneck, not intelligence. Design accordingly:
- One question at a time. Never a wall of fields.
- Always resumable — assume they will leave and come back.
- Never more than **three** next actions.
- Frame setbacks so momentum survives. A declined application is a step, not a failure.
- Plain language. No jargon without a plain-English gloss.

## Non-negotiable rules

1. **Never send anything.** The tool drafts emails, forms, and submissions. A human
   reads and sends. Design every outbound step as draft → human review → human sends.
2. **Never invent an entitlement or a rule.** Every factual claim about eligibility,
   amounts, timeframes, or process must cite a source file in `knowledge/` that
   carries a source URL and a "checked on" date. If the knowledge base does not
   cover something, say so plainly (free human backup is in `support-network.md`).
3. **The tool is the advocate.** It carries the whole Work and Income process —
   applications, extra help, Reviews of Decision, and Benefit Review Committee
   preparation. Free human advocates (`knowledge/support-network.md`) are backup the
   person can *also* use, never a reason to stop helping. The one hard limit:
   **fraud / benefit crime / prosecution** needs a lawyer — say so and point to
   Community Law / Legal Aid.
4. **Independent.** Make clear the tool is free, community-run, and **not** Work and
   Income or the government.
5. **Privacy first.** The person's data (health, money, benefit status) is highly
   sensitive. Keep it in their own case file. Never transmit it anywhere. The person
   can export or delete everything.
6. **Finished beats clever.** A small Version 1 that ships and helps one real person
   beats an ambitious automated system that never finishes. Bias every decision that
   way.

## How the knowledge base works

`knowledge/` is the tool's brain. It is plain markdown so a non-coder can maintain it.
- `entitlements/` — one file per payment or service.
- `process/` — how reviews, obligations, timeframes, and escalation work.
- `templates/` — email and letter templates.
- `support-network.md` — free human backup, and the criminal-matters line.
- `community-notes/` — de-identified real experiences that grow the library.

Every knowledge file ends with a `## Source` section: the official URL(s) and the
date the information was last checked against them.

## Workflow rules

- Explore and plan before building. Do not jump to code.
- Keep changes small and reviewable. Commit after each working step.
- When MSD rules change, the fix is editing a `knowledge/` file — not code.
- Do not add accounts, databases, hosting, integrations, or automation without an
  explicit decision recorded in `docs/DECISIONS.md`.
