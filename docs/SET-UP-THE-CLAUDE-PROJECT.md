# How to turn this into the working tool (Claude Project)

This is how Version 1 gets used by a real person. ~15 minutes, no coding.

## Steps

1. Go to **claude.ai** and sign in.
2. In the left sidebar, click **Projects** → **New project**. Name it
   **Village Advocate**.
3. Open the project. Find **Instructions** (sometimes "Set custom instructions").
   Open `prompt/system-prompt.md` from this folder, copy everything **below the
   `---` line**, and paste it in. Save.
4. Find **Project knowledge** (the "Add content" / files area). Upload these files:
   - everything in `knowledge/` (all the `.md` files in `entitlements/`, `process/`,
     `templates/`, plus `handoff.md`)
   - `prompt/intake-script.md`
   - `case-file-template/case-file.md`
5. Start a new chat **inside the project** and type: *"I need help with Work and
   Income."* Check it behaves like the test in `docs/test-sam.md`.

## Testing it before real people use it

Role-play as "Sam" (`docs/test-sam.md`) and as one or two people you know. Watch for:
- Does it ask one thing at a time, calmly?
- Does every entitlement claim name a source?
- Does it refuse to "send" anything itself?
- Does it hand off to a real advocate for a declined decision?

Fix issues by editing the `.md` files here and re-uploading them to the project.

## Sharing it

Once it's solid: in the project, use **Share** to let specific people use it, or
publish it if your plan allows. Pair it with a one-page "how to use this" written for
someone in distress (Phase 3 in `PLAN.md`).

## Keeping it correct

Every ~3 months, or after the 1 April benefit changes, open each file in `knowledge/`,
check the figures against the source URLs at the bottom of the file, update them and
the "Checked" date, and re-upload. This is the whole maintenance job.
