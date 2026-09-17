# Cammy Gold Page Receipt

Status: `GOLD_PAGE_READY`
Date: 2026-09-17
Character: Cammy / 嘉米
Version boundary: Year 4 / 2026-08-03

## Semantic acceptance

- Character Model: PASS — fast grounded loop first; spacing-dependent air/special entries are adaptations to learned defensive habits.
- Learner terminology: PASS — `236K | Spiral Arrow`, `j.214K | Cannon Strike`, `236P | Hooligan` are function-first.
- Normal frame table: PASS — 18 baseline Normal rows.
- Practical: PASS — 9 opportunity groups / 23 learner-facing rows across S0–S4.
- Identity floor: PASS — S0 is grounded light/low -> `236K` -> dash -> strike/throw; divekick/Hooligan are deliberately delayed.
- Condition semantics: PASS — Cannon Strike is never taught as universally plus; landing height/spacing remain explicit.
- Super boundary: PASS — current complete SA1 / SA3 jobs surface; incomplete SA2 remains backend-only.

## Render / browser QA

GitHub Actions Astro Gate run `35171931415`: PASS.

Verified in real Chromium render:

- Astro static build succeeds.
- Role and Practical render.
- 18 Normal rows render.
- S0–S4 + ALL controls render and fold future stages correctly.
- Cannon Strike condition language survives projection.
- desktop Practical remains high-density and readable.
- mobile 390×844 has no document overflow.
- dark theme visually inspected; shared light-theme runtime was also inspected and readable.

Visual artifact: `sf6-visual-qa` from run `35171931415`.

## Final judgment

`GOLD_PAGE_READY`

Public GitHub Pages hosting remains a separate repository deployment setting.