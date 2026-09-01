# Maintainers — how the knowledge base keeps growing

The knowledge base is a living brain. This file is the loop that keeps it complete,
current, and honest. Anyone can run these — Bill, a helper, or a Claude session with
this repo open.

**The three sources of truth**, in order:
1. Legislation — `legislation.govt.nz` (Social Security Act 2018 + regulations + the
   Ministerial Directions / Welfare Programmes)
2. Work and Income — `workandincome.govt.nz` (A–Z Benefits, benefit rates, "what to bring")
3. Community Law Manual — `communitylaw.org.nz/community-law-manual` (chapter on
   dealing with Work and Income) — best for rights, process, and how discretion works

Advocacy know-how (AAAP, beneficiary advocates, lived experience) fills the gaps
between what the rules say and what actually happens.

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

## The one-shot "knowledge health check"

Paste this into a Claude Code session with the repo open (monthly, or after 1 April):

> Run the knowledge health check from MAINTAINERS.md:
> 1. Re-fetch the WINZ A–Z index and diff against knowledge/COVERAGE.md — list new or renamed payments.
> 2. Re-fetch the `## Source` URLs for every file in knowledge/entitlements/ and knowledge/process/. List any figure, threshold, timeframe or rule that has changed.
> 3. Check NZLII for Social Security Appeal Authority decisions in the last 3 months — summarise any new principle.
> 4. Pick the top 3 `✗` items from COVERAGE.md by priority and draft those files.
> Produce a short report, then make the safe changes, rebuild, and commit. Flag anything uncertain for me to check.

## Automating it

This check can run on its own as a scheduled cloud routine (opens a report / issues
each month, makes no risky changes). Ask Claude to "set up the knowledge health check
as a monthly routine" — it needs your go-ahead because it's a standing automation and
it's billed.

## Beyond WINZ

Each new MatuaBuild (Housing, Debt, etc.) gets its own repo with its own
`COVERAGE.md` and this same `MAINTAINERS.md` loop — different sources of truth,
same machine.
