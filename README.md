# Village Advocate

A free tool that does the job of a New Zealand welfare/benefit advocate: it works out
what a person is entitled to from Work and Income (WINZ), and drafts the emails to get
it. Built for people whose ADHD, AuDHD, or trauma makes the system's forms, calls, and
deadlines a serious barrier.

**New here? Open [`START-HERE.md`](START-HERE.md).**

## Documents

| File | What it is |
|---|---|
| [`START-HERE.md`](START-HERE.md) | One page. Read first. |
| [`CLAUDE.md`](CLAUDE.md) | Project rules, read every session |
| [`SPEC.md`](SPEC.md) | What Version 1 does and does not do |
| [`PLAN.md`](PLAN.md) | The build plan, one phase at a time |
| `knowledge/` | The tool's brain — entitlements, process, email templates (plain markdown, editable by anyone) |
| `case-file-template/` | The per-person case file structure |
| `docs/` | Planning prompt, decisions log |

## Principles

- Never sends anything — drafts only, a human sends.
- Never invents an entitlement — every claim cites a source.
- Advocacy support, not legal advice.
- The person's data stays theirs.
- A finished small version beats an unfinished clever one.

## Status

- Phase 0 (setup) — done
- Phase 1 (working Version 1) — **built, passes the simulated "Sam" test** (`docs/test-sam.md`)
- Next: Bill checks each cited source, then set it up as a Claude Project
  (`docs/SET-UP-THE-CLAUDE-PROJECT.md`) and run once live
