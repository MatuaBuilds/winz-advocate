# TODO — pick up here

Last worked: 2026-09-01 (big morning session). You rested. Nothing is lost.

## Where things are

- **WINZ Advocate** is built: full knowledge base, "fight harder" rights layer,
  "we are the advocate" reframe, open-source licence, contribution setup.
- Repo is **public**: https://github.com/MatuaBuilds/winz-advocate
- Website is **live**: https://matuabuilds.github.io/winz-advocate/
  — but still showing the OLD plain page. The redesign is committed but **not pushed yet.**

## Do first (5 min) — ship the redesign

In a terminal:

```
cd "C:\Users\User\Dev\village-advocate"
git push
```

Wait ~1 min, hard-refresh the website. It should now have the new layout and a
**"Copy the tool"** button. Tell Claude if it still looks off — quick to iterate.

## Then — make it easier to start chatting

- Open your **WINZ Advocate** project on claude.ai. Look for a **Share** button
  (near the project name or top-right).
- If it offers "Share to web" / "Anyone with the link" → turn it on, give the link
  to Claude. It becomes the one big button on the site (zero pasting for users).
- If not → the "Copy the tool" button is the best free option for now.

## Still open (no rush)

1. **Check the dollar figures** — open each file in `knowledge/entitlements/`, check
   the amounts against workandincome.govt.nz (they change each 1 April). Update the
   file + the "Checked" date, then run `bash BUILD/build.sh` and `git push`.
   Priority ones: accommodation-supplement (asset limits), disability-allowance
   (max), special-needs-grant-food (limits), advance-payment (asset limits).
2. **Confirm the SSAA appeal time limit** — sources disagreed (3 months vs 60
   working days). `knowledge/process/review-of-decision.md` currently hedges.
3. **Test with 2–3 real people** — with their consent, you sitting beside them.
   Notes go in `docs/real-tests.md`. Fix what they reveal.
4. **Tell the orgs** — blurbs are ready in `docs/SHARE.md` (AAAP, Community Law,
   food banks, social). Send when you're ready.

## Someday / ideas

- The family of free apps: Housing, Debt, Kai, Hauora, Mahi, Whānau, Growtime, Forms
  — "tools from The Village".
- A hosted "just start typing" site (needs a funder or partner).
