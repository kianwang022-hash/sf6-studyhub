# Mai Gold Page Receipt

Status: `GOLD_PAGE_READY`
Date: 2026-09-17
Character: Mai / 火舞
Version boundary: Year 4 / 2026-08-03

## Semantic acceptance

- Character Model: PASS — ordinary projectile/ground skeleton first; resource/state upgrades later conversion value.
- Learner terminology: PASS — `强化资源 / 强化状态` precedes Stock / Boosted shorthand; `OD 214P` is explained function-first.
- Normal frame table: PASS — 18 baseline Normal rows.
- Practical: PASS — 7 opportunity groups / 20 learner-facing rows across S0–S4.
- Identity floor: PASS — S0 proves the ordinary projectile / ground-confirm / `236K` game works before boosted routes.
- Pareto: PASS — Safe Jump, OD air conversion and one SA2 cashout survive for distinct jobs; route dump is avoided.
- Route completeness: PASS — incomplete OD Kachousen -> SA3 ellipsis family remains backend-only.

## Render / browser QA

GitHub Actions Astro Gate run `35171931415`: PASS.

Verified in real Chromium render:

- Astro static build succeeds.
- Role and Practical render.
- 18 Normal rows render.
- S0–S4 + ALL controls render and fold future stages correctly.
- learner-facing first exposure is readable without prior Stock / Boosted jargon knowledge.
- desktop density and table hierarchy inspected.
- mobile 390×844 has no document overflow.
- dark theme visually inspected; shared light-theme runtime was also inspected and readable.

Visual artifact: `sf6-visual-qa` from run `35171931415`.

## Final judgment

`GOLD_PAGE_READY`

Public GitHub Pages hosting remains a separate repository deployment setting.