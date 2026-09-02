# The autonomous loop

A Claude session opens this repo and **keeps progressing** through the roadmap without
waiting for Bill to approve each step. Bill's time is for direction and the few things
only he can do — not for saying "yes, do the obvious next thing."

## What a session does each pass — without asking

1. **Pick the next item.** In priority order:
   - `docs/ROADMAP.md` — the current version's unchecked boxes
   - `knowledge/COVERAGE.md` — the highest-priority `✗`
   - `docs/IMPROVEMENTS.md` — anything logged but not fixed
   - `docs/DESIGN.md` backlog
2. **Do it.** Research against the sources of truth, write/fix, keep the house style.
3. **Run the gates:**
   - `node docs/EVALS/wizard-test.mjs` → must be green
   - `bash BUILD/build.sh` → must run clean
   - WINZ standalone intact (`winz-advocate-full-prompt.md` still builds)
4. **Commit small and push.** One concern per commit. Push every time.
5. **Log.** Update the ROADMAP checkbox / `IMPROVEMENTS.md` / `COVERAGE.md`.
6. **Repeat** until the version's boxes are done or a real blocker is hit.

## What it queues for Bill — instead of blocking

Write these to `docs/FOR-BILL.md` and keep going with other work:

- Real-person testing (needs a consenting real person)
- Anything that spends money or stands up a hosted service
- Sending outreach to orgs (AAAP, Community Law, food banks)
- A strategic pivot or a new domain module direction
- "Does this *feel* right" on a major design — **iterate it first**, then let Bill
  react on his own time

## What it never does

- Send anything on anyone's behalf (drafts only)
- State a fact the knowledge base doesn't support
- Remove or weaken a safety rail (never-send, never-invent, fraud→lawyer, 1737/111)
- Force a design change Bill has explicitly rejected

## Guardrails

- Every change is reversible through git.
- Nothing outward-facing happens without Bill (the repo is already public; that was
  his call).
- If genuinely stuck, write the blocker to `docs/FOR-BILL.md` and move to the next item.
- If two eval fixes in a row don't work, stop that item, log it, move on.

## Starting a session

> Read `docs/AUTONOMOUS-LOOP.md` and run it. Work through the current version in
> `docs/ROADMAP.md`. Don't ask me to confirm the obvious next step — just do it,
> commit, push, and log. Put anything that actually needs me in `docs/FOR-BILL.md`.
