# Roadmap — the pathway to a finished, self-improving tool

## The philosophy: loops, not one-shots

The tool gets better because **loops run over it** — not because someone sits down and
rewrites it. Each version is defined by *what the loops have produced*, and every
version has a **verification gate** (an eval suite) it has to pass to count as done.

A tool like this is never "finished" in the frozen sense — WINZ rules change every
year, forever. **"Complete" means: the v1 goal is met, and the loops run so it
maintains and improves itself without a rebuild.**

## The loops (always running — full detail in `../MAINTAINERS.md`)

| # | Loop | What it produces | Cadence | Run it |
|---|---|---|---|---|
| 1 | Completeness | every payment/topic has a file | monthly + quarterly A–Z re-check | work `knowledge/COVERAGE.md` ✗ items |
| 2 | Currency | no stale figures/rules | monthly, always after 1 April | re-fetch each `## Source`, prefer MAP |
| 3 | Contributions | real-world gaps, what worked | as they arrive | GitHub issues → verify → add |
| 4 | Precedents | the legal "reason why" | quarterly | NZLII → `knowledge/precedents.md` |
| 5 | Persona sweep | blind spots | quarterly | 20 life situations through the base |
| 6 | Institutional watch | how WINZ really operates, graded | quarterly | Ombudsman/OAG/OIA → `how-winz-operates.md` |
| 7 | Quality / evals | better diagnosis, push-back, drafts | after every change; monthly red-team | `docs/EVALS/RUN.md`; `node docs/EVALS/wizard-test.mjs` |
| 8 | Design & usability | the tool feels right to use | Bill reacts → pass → screenshot | `docs/DESIGN.md` |

Plus the **one-shot knowledge health check** in `MAINTAINERS.md` — a single prompt
that runs loops 1, 2, 4 and 6 in one pass and reports.

## The versions

### v1 — WINZ Advocate works ✅ SHIPPED

Knowledge base (all main benefits, extra help, hardship grants, rights & pushback,
how the system operates), the AI version, the tap-through wizard, a live website, an
open repo, and the eight loops documented.
**Done when:** ✅ a real person can go from "I don't know what I'm owed" to a correct
ready-to-send email. Passes the Sam + Ben + wizard suites.

### v1.1 — Hardened (NOW)

- [x] Loop 1: cleared the `COVERAGE.md` common-tier ✗ items — new files: Training
  Incentive Allowance, Youth/Young Parent Payment, NZ Super, Student support,
  caring-for-someone-elses-child (UCB/Orphan's + carer allowances)
- [x] Loop 7: AI-version eval P1–P10 + red-team — 10 Ship / 0 Fix, no holes (docs/EVALS/ai-version-run-2026-09-01.md); wizard suite 12/12
- [x] Wizard: wording pass (standardised "the full version" references; youth wording)
- [ ] Loop 8: design pass on the wizard + landing (Claude iterates; Bill reacts when he wants)
- [ ] Loop 3: test with 3 real people (consent, Bill beside them) → `docs/OUTCOMES.md` — in `FOR-BILL.md`
**Done when:** no ✗ in COVERAGE common tiers · eval suites green · 3 real people
through it · fixes logged in `IMPROVEMENTS.md`.

### v2 — Advocate Core ✅ RATIFIED (2026-09-01)

The thin layer above the modules: multi-case tracking, status model, "carry the
load" behaviours, routing. WINZ is module 1, unmoved. Ratified as built; `knowledge/`
stays put.
**Remaining:** one **live** run with a real case file (trace already passes) →
`FOR-BILL.md`.

### v3 — Modules 2–4

Build `housing`, `money-debt`, `health-admin` from stubs into real packs. Each gets:
its own `COVERAGE.md`, its sources of truth, its own persona evals, and wiring into
the Core's routing.
**Done when:** each module passes its own eval suite · the Core routes a mixed-domain
case correctly · loops 1/2/7 extended to cover them.

### v4 — Reach

- Decide the hosted "just start typing" version (needs a funder/partner) vs. keep the
  wizard + copy-paste path
- Org partnerships: AAAP, Community Law, food banks, marae (blurbs in `docs/SHARE.md`)
- te reo Māori + easy-read versions of the key pages (Loop 8 backlog)
**Done when:** a tracked number of real people have used it (`OUTCOMES.md`), and at
least one org is distributing it.

### v5 — The MatuaBuilds pattern

Replicate the Core + module + loops architecture for the next domain that isn't
WINZ-adjacent — the start of the family of free tools.
**Done when:** a second standalone tool ships using this repo's structure as the template.

## The gate — nothing advances a version without

1. the relevant **eval suite green** (`docs/EVALS/`, `wizard-test.mjs`, `advocate-core-test.md`)
2. changes **committed small and traceable** (one concern per commit, pushed)
3. an entry in **`docs/IMPROVEMENTS.md`** if anything was fixed
4. **WINZ standalone still works** — `winz-advocate-full-prompt.md` builds, wizard test 10/10

## What "done for now" looks like at any point

If work stops after any version, the tool still: helps a real person, cites its
sources, never sends, hands criminal matters to a lawyer — and the loops keep it
current. There is no version where stopping leaves something broken.
