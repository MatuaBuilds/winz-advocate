# Improvements log

Every time an eval fails or real feedback shows a gap, log it here with the fix. This
is the record of the tool getting better at the job.

## Format

```
### YYYY-MM-DD — [what broke]
- Found by: eval persona P# / red-team / outcome / contribution
- Problem: …
- Change: … (file, commit)
- Re-ran suite: pass / [which personas]
```

## Log

### 2026-09-01 — suite created
- Baseline: personas P1 (Sam) and P3 (Ben) passed a manual run earlier this session
  (`docs/real-tests.md`). P2, P4–P10 not yet run against the current pack.
- Next: run the full suite (`EVALS/RUN.md` quick run) and record results.
