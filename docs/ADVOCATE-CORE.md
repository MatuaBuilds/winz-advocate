# Advocate Core — the model

The distilled design from [`bill-live-case.md`](bill-live-case.md). This is where
the project is heading: WINZ Advocate becomes **one module** under a persistent
advocate that holds context and keeps life moving.

## The one principle everything serves

> **Never make the user carry context the system can carry for them.**
> And when avoidance is the barrier, help *execute* the task — don't just explain it.

The measure of success is not "was the information correct." It is:
**did something stuck start moving, and did it get easier rather than harder?**

## Architecture

```
                 ┌─────────────────────────────────────┐
                 │           ADVOCATE CORE             │
                 │  cases · context · priority ·       │
                 │  waiting states · correspondence ·  │
                 │  evidence · next actions · wins     │
                 └──────────────┬──────────────────────┘
        ┌──────────┬────────────┼────────────┬───────────┐
     ┌──▼──┐   ┌───▼───┐   ┌────▼────┐   ┌───▼───┐   ┌───▼────┐
     │WINZ │   │Housing│   │Health / │   │ ACC   │   │Money / │  … more
     │     │   │/ move │   │ admin   │   │       │   │ debt   │
     └─────┘   └───────┘   └─────────┘   └───────┘   └────────┘
```

The Core doesn't know every domain rule. It knows: which case an issue belongs to,
what context already exists, which module handles it, what happened last, what's
waiting, what's next.

Today: **WINZ Advocate is the first module**, and its system prompt already carries
the Core's interaction behaviours (below). The Core itself — cross-case management —
is the next build direction.

## The case object

Every case is tracked with:

| Field | Meaning |
|---|---|
| **Goal** | What "done" looks like for this case |
| **Current state** | Where it's actually at, in plain words |
| **Evidence held** | Documents/letters/reports already gathered — reuse before asking for more |
| **People / services** | Who's involved, and whether the relationship is useful |
| **Correspondence** | Dates, names, messages, documents, decisions |
| **Waiting on** | Who owes the next step (them, not the user) |
| **Next action** | The one smallest useful thing |
| **Deadline** | If any |
| **Wins / completed** | Named back to the user — restores self-efficacy |
| **Notes / lessons** | What was learned |

## Status model

Every case sits in exactly one:

- **Front burner** — active, needs attention now
- **Waiting on someone** — a provider/agency owes the next step; not the user's job
- **Ready to act** — the user's move, defined and small
- **Complete** — done; keep it visible as a win
- **Back burner** — parked on purpose

The user never has to remember which. The system tracks it.

## Interaction behaviours (these apply to the WINZ module now)

1. **One bounded action.** No giant lists unless asked. When the person is
   overloaded, *reduce* the next action.
2. **Max three active priorities.** Everything else is waiting or parked.
3. **Read first.** New correspondence → read it, explain what it means, update the
   case, decide *if* action is actually needed. Don't auto-spawn a task.
4. **Reuse evidence.** Check what's already held before asking for another letter,
   form, quote, or a re-told medical history.
5. **Keep the paper trail.** Prefer writing for official conversations. Track dates,
   names, documents, decisions, deadlines.
6. **Carry waiting states.** Contacted a provider → the task is theirs until they
   reply. Waiting is not unfinished personal work.
7. **Name the wins.** "You said you'd do this, and you did." Visible completion
   matters for someone with a history of stalled admin.

## Build path

- **Now:** WINZ module (`start.html` wizard + the AI version) embodies behaviours 1–7.
- **Next (Core v0):** a single "life dashboard" — the case object + status model as a
  structured file the person keeps (like the case file, but multi-case), and the AI
  version taught to run it: read email → route to a case → update → surface the next
  ≤3 things → carry waiting states → log wins.
- **Later:** more domain modules (Housing/move, Health admin, ACC, Money/debt,
  Providers) as their own knowledge packs under the Core.
