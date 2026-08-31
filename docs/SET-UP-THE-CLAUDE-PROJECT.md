# Phase 3 — set it up and test it with real people

No coding. Two files do all the work:

- `BUILD/winz-advocate-instructions.md` — the assistant's instructions
- `BUILD/winz-advocate-knowledge.md` — everything it knows (one file)

(If you change anything in `knowledge/`, rebuild the pack with `bash BUILD/build.sh`.)

---

## Part A — build the Claude Project (~10 min)

1. Go to **claude.ai** and sign in.
2. Left sidebar → **Projects** → **+ New project**. Name it **WINZ Advocate**.
   Click **Create**.
3. In the project, find **"Instructions"** (or "Add instructions" / the ✎ near the
   project name). Open `BUILD/winz-advocate-instructions.md`, select **all** of it,
   copy, paste it into Instructions, **Save**.
4. In the project, find **"Project knowledge"** / **"Add content"** → **Upload from
   device**. Upload **`BUILD/winz-advocate-knowledge.md`**. Wait for it to finish
   processing.
5. That's the whole build.

**If you don't see "Projects"** (some plans don't): start a normal new chat instead.
Paste the contents of `winz-advocate-instructions.md`, then a line saying
"--- KNOWLEDGE PACK BELOW ---", then the contents of `winz-advocate-knowledge.md`.
Then start talking to it. It works the same; you just paste those two things at the
start of each new chat.

---

## Part B — test it yourself first (~20 min)

Open a **new chat inside the project** and type: *"I need help with Work and Income."*

Run the "Sam" scenario from `test-sam.md` (34, ADHD, renting a room $230/wk, on
Jobseeker, just got a medical certificate, no food money). Check:

- [ ] Asks **one question at a time**, calm, plain language
- [ ] Flags the food grant, Accommodation Supplement, and Disability Allowance,
      each with a reason
- [ ] Gives **three** actions, food first
- [ ] Writes a real draft email, with [brackets] for the bits only Sam knows
- [ ] Every dollar figure comes with "check the current amount"
- [ ] If you say "WINZ declined it", it points you to a free advocate and the
      3-month limit — it does **not** pretend to run the review

Then run one more from `test-phase2.md` (Aroha, Ben, or Mia).

**If something's wrong:** tell me which scenario and what it did. I fix the source
file, you rebuild the pack and re-upload it.

---

## Part C — test with 2–3 real people (the real Phase 3)

Only when Part B looks right.

- Ask people you trust who are actually dealing with WINZ. **Get their okay** to sit
  with them while they use it.
- You drive or sit beside them. Don't leave them alone with it yet.
- Watch for:
  - Did any part **add stress** or confusion?
  - Did it say anything about entitlements that turned out **wrong**? (check against
    workandincome.govt.nz)
  - Did it ever sound like it would **send** something itself? (it shouldn't)
  - Where did they **get stuck**?
- Write what you saw in `docs/real-tests.md` (make the file). We fix from there.

---

## Part D — keep it correct

Every ~3 months, or after 1 April each year: open each file in `knowledge/`, check
the figures against the source links at the bottom, update them and the "Checked"
date, run `bash BUILD/build.sh`, and re-upload `winz-advocate-knowledge.md` to the
project.
