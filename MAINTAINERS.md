# Maintainers — how the knowledge base keeps growing

The knowledge base is a living brain. This file is the loop that keeps it complete,
current, and honest. Anyone can run these — Bill, a helper, or a Claude session with
this repo open.

**The sources of truth**, in order:
1. Legislation — `legislation.govt.nz` (Social Security Act 2018 + regulations + the
   Ministerial Directions / Welfare Programmes)
2. **MAP — the Guide to Social Development Policy** — `map.workandincome.govt.nz` —
   the actual policy manual Work and Income staff use to make decisions. This is
   where the **discretions** are written down. Public. Higher authority than the
   consumer-facing pages.
3. Work and Income consumer site — `workandincome.govt.nz` (A–Z Benefits, benefit
   rates, "what to bring")
4. Community Law Manual — `communitylaw.org.nz/community-law-manual` (chapter on
   dealing with Work and Income) — best for rights, process, and how discretion works
5. Official watchdogs — Ombudsman, Auditor-General, Privacy Commissioner; court and
   Social Security Appeal Authority decisions (NZLII); MSD's published OIA responses

Advocacy know-how (AAAP, beneficiary advocates, lived experience) fills the gap
between what the rules say and what actually happens — graded as below.

---

## Evidence grading — every claim earns its place

The knowledge base is only useful if it's trusted. Grade every factual claim:

| Grade | What it is | Where it can appear |
|---|---|---|
| **Confirmed** | Legislation, MAP, official watchdog reports, court/SSAA decisions, MSD OIA releases | Stated as fact anywhere |
| **Documented** | Named expert reports (WEAG, CPAG), investigative journalism citing named sources or documents, former staff on the public record | Stated as fact anywhere |
| **Reported** | An advocacy organisation's stated collective experience; a pattern consistent across many independent accounts | Only as "advocates consistently report…" — never as bare fact |
| **Lead** | Circulating online / word of mouth / a single unverified account | Never stated to a person as fact. An investigation lead, or a labelled community note |

Rules:
- Files in `knowledge/entitlements/` and `knowledge/process/` state only **Confirmed**
  and **Documented** as fact.
- `knowledge/how-winz-operates.md` carries the grade **inline** on every claim.
- `knowledge/community-notes/` holds de-identified individual accounts, clearly
  labelled, and they never override a cited rule.
- A **Lead** gets promoted only when a Confirmed/Documented source is found for it.

---

## Loop 1 — Completeness (monthly-ish)

**Goal:** every payment and every advocacy task has a file.

1. Open `knowledge/COVERAGE.md` and `docs/ADVOCATE-CAPABILITY-MAP.md`.
2. Pick the next `✗` or `◑` item (priority order is noted in the files).
3. Research it against the three sources of truth. Write the file in the house style
   (what it is · who can get it · how much · how to apply · evidence · common
   decline reasons + how to push back · `## Source` with URLs + checked date).
4. Add it to `BUILD/build.sh`, update `COVERAGE.md`, run `bash BUILD/build.sh`, commit, push.

**Quarterly:** re-fetch `workandincome.govt.nz/products/a-z-benefits/index.html` and
diff against `COVERAGE.md`. Add any new payment. Update "A–Z index last checked".

## Loop 2 — Currency (monthly, and always right after 1 April)

**Goal:** no stale figures or rules.

Every knowledge file ends with `## Source`: URLs + a "Checked: <date>". Working
through those:

1. Re-fetch each source URL.
2. Compare the dollar figures, thresholds, timeframes, and rules to the file.
3. Fix any drift; bump the "Checked" date; note what changed in the commit.
4. **After 1 April each year:** full pass on the `benefit-rates-april-YYYY` page —
   every rate, income limit, asset limit, abatement threshold.
5. Watch for **amendment acts** — search "Social Security Amendment Act" yearly;
   2025 brought big changes (see `knowledge/process/2025-rule-changes.md`), there
   will be more.

## Loop 3 — Contributions (as they arrive)

**Goal:** capture what official pages don't say — the myths, what actually works,
the discretion arguments, the SSAA precedents people cite.

The pipeline (already scaffolded):

1. Someone opens a GitHub issue (`Share what happened` / `Suggest a correction` /
   `Report something wrong`) — see `CONTRIBUTING.md`.
2. A maintainer reviews it:
   - **Correction** → verify against a source of truth → update the knowledge file +
     "Checked" date.
   - **Report something wrong** → treat as priority; fix the file; if it's a real
     inaccuracy, note it in the commit so the change is traceable.
   - **Shared experience** → **de-identify** (no names, client numbers, addresses,
     dates of birth) → sanity-check it doesn't contradict a cited rule → save as
     `knowledge/community-notes/note-<slug>.md` in the format in that folder's README.
3. Rebuild, commit, push. Close the issue with a note on what changed.

**The bar:** a fact only goes in the `entitlements/` and `process/` files if it
traces to a source of truth. Anecdotes live in `community-notes/` and never override
a cited rule.

## Loop 4 — Precedents (quarterly)

**Goal:** know the legal principles and decisions advocates lean on.

1. Check **NZLII** for recent Social Security Appeal Authority decisions:
   `nzlii.org` → "Social Security Appeal Authority".
2. For any decision that establishes or clarifies a principle (e.g. what counts as
   "exceptional circumstances", "good and sufficient reason", "relationship in the
   nature of marriage", the write-off test), add a short entry to
   `knowledge/precedents.md`: the principle, one line on the facts, the citation.
3. Cross-link it from the relevant knowledge file.

## Loop 6 — Institutional watch (quarterly)

**Goal:** keep `knowledge/how-winz-operates.md` current and honest — the picture of
how the machine actually works, so advocacy is grounded, not naive.

1. Check for new material from:
   - **Ombudsman** (`ombudsman.parliament.nz`) — investigations into MSD / hardship
     assistance / emergency housing
   - **Auditor-General** (`oag.parliament.nz`) — MSD performance audits
   - **Privacy Commissioner** (`privacy.org.nz`) — MSD inquiries
   - **MSD OIA responses** (`msd.govt.nz` → publications → official information
     responses) — training material, KPIs, case-management processes
   - **Select committee** submissions and reports on social security bills
   - Named investigative journalism (RNZ, Stuff, Newsroom) on WINZ culture, sanctions,
     treatment — cite the specific piece
2. For anything relevant, **grade it** (Confirmed / Documented / Reported / Lead) and
   add it to `how-winz-operates.md` with the grade inline and the source.
3. Review the **Lead** items — has a verifiable source appeared? Promote or leave.

**On "leaks" and ex-staff accounts:** treat them as **Leads**. Useful for knowing
what to look for. They become **Documented** only when the person goes on the public
record by name, or a document surfaces (e.g. via OIA, a court case, or a select
committee). Never publish someone else's leaked document or name a source who hasn't
chosen to be named.

## Loop 5 — Persona sweep (quarterly)

**Goal:** find blind spots by walking real lives through the base.

Run each of these through the current knowledge base and note anything it can't
answer well:

new baby · newly separated parent · shared-care parent · teenager leaving home ·
young parent · caregiver of a disabled child · adult child caring for a parent ·
person becoming disabled · person with a terminal diagnosis · migrant / visa holder ·
refugee · person leaving prison · person leaving a violent relationship · older
worker made redundant · seasonal / gig worker · student parent · rural / remote ·
person with no bank account or ID · person in emergency housing · person with a WINZ
debt · person who's been sanctioned.

Each blind spot becomes a `✗` line in `COVERAGE.md`.

---

## Loop 7 — Quality (the tool gets better at the *job*)

**Goal:** not just "knows more" — better diagnosis, stronger push-back, drafts that
land, gathering done for the person. Knowledge and skill are different loops.

The machinery lives in `docs/EVALS/`:
- `RUBRIC.md` — how to score any response (accuracy is a hard gate; then
  completeness, advocacy strength, safety, draft quality, human factors)
- `personas.md` — realistic test cases, each with "must flag" and "traps"
- `RUN.md` — the quick run (after every change), monthly (red-team + outcome
  review), quarterly (senior-advocate review)
- `../OUTCOMES.md` — what actually happened for real people (the true signal)
- `../IMPROVEMENTS.md` — the log of every fail → fix

**Cadence:**
- **After any prompt or knowledge change** → quick eval run. A change that fixes one
  persona must not break another.
- **Monthly** → red-team pass + read `OUTCOMES.md`, feed patterns back.
- **Quarterly** → senior-advocate-style review of real transcripts (with consent),
  pointing Claude at MAP as well as the knowledge base.

**Discipline:** `prompt/system-prompt.md` is the tool's skill — version it like code,
one change at a time, note what failed and why the change fixes it. Never fix a
persona by making the prompt longer and vaguer.

**The wizard** (`start.html` + `wizard-logic.js`) has its own automatic test:
`node docs/EVALS/wizard-test.mjs` — must be green before any wizard change is pushed.
The wizard rules and the `knowledge/` files describe the same entitlements: change a
rule or a figure in one, change it in the other in the same commit.

## Loop 8 — Design & usability

Makes the tool feel right to use — the website and how the guide reads. Full brief,
checklist, and backlog in `docs/DESIGN.md`. The loop: Bill reacts to how it looks →
Claude does a design pass → screenshot (light + dark, phone width) → Bill reacts →
repeat. Bill is the judge of aesthetics; Claude's job is to give him something
concrete to react to, fast.

## The one-shot "knowledge health check"

Paste this into a Claude Code session with the repo open (monthly, or after 1 April):

> Run the knowledge health check from MAINTAINERS.md:
> 1. Re-fetch the WINZ A–Z index and diff against knowledge/COVERAGE.md — list new or renamed payments.
> 2. Re-fetch the `## Source` URLs for every file in knowledge/entitlements/ and knowledge/process/. List any figure, threshold, timeframe or rule that has changed. Prefer MAP (map.workandincome.govt.nz) where the consumer page is vague.
> 3. Check NZLII for Social Security Appeal Authority decisions in the last 3 months — summarise any new principle for knowledge/precedents.md.
> 4. Check Ombudsman / Auditor-General / Privacy Commissioner / MSD OIA responses for new material on how WINZ operates — grade it and update knowledge/how-winz-operates.md.
> 5. Pick the top 3 `✗` items from COVERAGE.md by priority and draft those files.
> Produce a short graded report, then make the safe changes, rebuild, and commit. Flag anything uncertain, and every **Lead**, for me to check.

## Automating it

This check can run on its own as a scheduled cloud routine (opens a report / issues
each month, makes no risky changes). Ask Claude to "set up the knowledge health check
as a monthly routine" — it needs your go-ahead because it's a standing automation and
it's billed.

## Beyond WINZ

Each new MatuaBuild (Housing, Debt, etc.) gets its own repo with its own
`COVERAGE.md` and this same `MAINTAINERS.md` loop — different sources of truth,
same machine.
