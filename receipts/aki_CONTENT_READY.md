# A.K.I. CONTENT_READY Receipt

Status: **CONTENT_READY**  
Character: **A.K.I.**  
Checked through: **2026-09-19**  
Runtime promotion: **NOT YET**

## Source / semantic closure

- Source Closure: PASS
- Current version boundary: Year 4 / 2026-08-03
- Character Model v0: PASS after Model ↔ Route audit
- Fact Inventory: exact 18-Normal current frame table + current poison-state / Year4 boundaries
- Route Master Inventory: 28 conversion candidates
- Oki / next-loop candidates: 22
- Verification: PASS with poison / corner / Drive Parry / active-frame / exact-state conditions retained
- Pareto: poison application + H Lash +44 S0; first poison burst S1; poison+position/puddle and block-poison S2; exact +18 / OD burst / setplay S3; SA2 poison field / lethal S4
- S0-S4 progression: compiled
- Learner terminology: input-first glossary compiled
- Role / Practical / Grow / Learn / Reference: compiled

## Core learner judgment

A.K.I. is not taught as “memorize two complete combo books for poisoned and unpoisoned targets”.

Accepted semantic center:

stable contact -> H Serpent Lash establishes poison +44 -> ordinary low/strike/throw/shimmy Oki -> next opening checks poisoned state -> poison burst changes route value -> carry corner -> Orchid Spring poison puddle -> punish escape -> SA/lethal only after the state loop is stable

## Important constraints retained

- 2MK is current SA-only cancel and must not inherit generic 2MK DRC.
- S0 contains poison application and +44 Oki, not poison-burst optimization.
- M/H/OD poison-burst +69/+53/+71 requires opponent_poisoned.
- ordinary H Serpent Lash +44 remains separate from poisoned H Lash +53.
- Orchid Spring +38 remains corner / exact-route conditioned.
- OD Nightshade Chaser ordinary-block poison retains the Drive Parry exception.
- +18 -> 6HP active-meaty requires the exact predecessor state / timing.
- OD Cruel Fate hit +42 remains separate from block +2.

## Gate evidence

GitHub Actions Astro Gate run **35395471749 — PASS** on the pre-receipt semantic head:

- Content Integration Gate: PASS
- Astro build: PASS
- Chromium browser regression: PASS
- artifact upload: PASS

The receipt/status final head must preserve the same gate result before merge.

## Final judgment

**CONTENT_READY**

A.K.I. may later enter projection/browser Gold QA as a separate step. She is intentionally not added to the current Astro GOLD runtime in this content-only PR.
