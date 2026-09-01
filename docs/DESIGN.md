# Design & usability loop

The third loop. Loop A grows the knowledge; Loop B sharpens the advice; **this one
makes it feel right to use** — the website, and how the guide reads.

## Who it's for (design brief)

Someone **stressed, skint, and tired**, often on a **cheap old Android phone**,
sometimes with low data, sometimes with low literacy or English as a second language,
often with ADHD/AuDHD/trauma making dense screens hard.

So the design is:

- **Calm** — no clutter, no urgency-red everywhere, generous space
- **Warm and dignified** — a community tool, not a charity pamphlet, not a startup
- **Legible** — big text, high contrast, real line spacing, plain words
- **Fast** — loads instantly on a bad connection; no heavy images, no trackers
- **Obvious** — one clear thing to do on each screen
- **Honest** — says plainly it's free and not the government

## What we check every design pass

- [ ] Reads well on a **narrow phone screen** first (design mobile-up, not desktop-down)
- [ ] Text contrast passes (dark text on light, and the dark-mode version too)
- [ ] The **primary action** ("Start using it" / "Copy the tool") is the most
      prominent thing
- [ ] No line of text is a wall — short paragraphs, headings, lists
- [ ] Works with the phone's text size turned up
- [ ] Light mode **and** dark mode both look intentional
- [ ] Loads with no external requests except Google Fonts (no CDNs, no analytics)
- [ ] Nothing flashes, moves, or auto-plays

## Decisions (from Bill, 2026-09-01)

- **Feel:** warm & human — calm cream, terracotta button, book-style (Fraunces) headings.
- **Front door:** a **guided tap-through wizard** (`start.html`) — the site asks the
  questions, big buttons, one per screen, and hands over finished emails. No claude.ai,
  no pasting. The paste-into-Claude version is the secondary "deeper" option.
- **Game feel:** light — progress bar, "Question X of N", a checklist that fills up
  on the results screen, one gentle halfway line. No badges, nothing childish.

## Current state

- `index.html` — landing page. Fraunces + Inter (Google Fonts); warm paper /
  terracotta / pine palette; light + dark. Two clear paths: the wizard, or the AI version.
- `start.html` — the wizard. Walking skeleton: ~11 questions → results (13 entitlement
  rules) → 3 actions → draft emails → copyable notes. Client-side only, answers in
  localStorage. **Needs: more rules, wording review, real-person testing, the drafts
  expanded.**
- Guide links go to GitHub's rendered markdown view (readable, but off-site).

## Backlog

- **Styled guide pages on our own domain** — right now "read the guide" sends people
  to GitHub. Build a simple `guide.html` that renders the knowledge markdown in the
  site's own style. (Self-contained: inline a tiny markdown renderer, no CDN.)
- A short **"is this for me?"** section up top for people who aren't sure.
- **Te reo Māori** and a plain-English/EASY-read version of the key pages.
- A tiny bit of visual identity — a mark or motif for MatuaBuilds — once the name and
  family of tools settle.
- Print stylesheet so an advocate can print the guide.

## The loop

1. **Bill reacts** to how it looks and feels — "it looks like mud", "the button's
   lost", "this bit's confusing", "I like this".
2. **Claude does a design pass** — one focused change or a full redo.
3. **Screenshot** (light and dark, phone width) back to Bill.
4. **Bill reacts again.** Repeat until it's right, then move on.

Aesthetic is subjective — Bill's the judge. Claude's job is to give him something
concrete to react to, fast.
