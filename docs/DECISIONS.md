# Decisions log

Record every significant decision here so future sessions don't relitigate it.

## 2026-09-01 — Project started

- **Who it's for:** individuals helping themselves (not advocate-operated).
- **What it does:** identifies WINZ entitlements from a guided intake, then drafts
  emails to case managers / WINZ to move applications forward.
- **Build target for v1:** shareable Claude Project (system prompt + `knowledge/`
  files). No app, no hosting, no login. Revisit a local/web app only at Phase 4.
  *(Pending Bill's confirmation — see SPEC.md open questions.)*
- **Scope discipline:** finished small v1 over ambitious unfinished automation.
- **Safety:** never auto-send; never invent entitlements (cite sources); advocacy
  not legal advice; privacy-first.

## 2026-09-01 — Phase 1 built

- Knowledge base v1: Accommodation Supplement, Disability Allowance, Special Needs
  Grant (food), contacting-your-case-manager, 2 email templates, handoff list. All
  carry source URLs + "checked 2026-09-01".
- `prompt/system-prompt.md` and `prompt/intake-script.md` written.
- Passes simulated "Sam" acceptance test (`docs/test-sam.md`).
- Delivery mechanism for v1 confirmed: Claude Project (`docs/SET-UP-THE-CLAUDE-PROJECT.md`).
- Outstanding before "live": Bill verifies each cited source figure; one live test run.
