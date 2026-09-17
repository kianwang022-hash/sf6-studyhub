# SF6 StudyHub

Personal Street Fighter 6 learning system.

This repository is the **canonical SF6 repository**. It was split out from `kianwang022-hash/StudyHub` so the private StudyHub can remain a general experiment/workbench repo.

## Product model

- **LEARN** — understand the character and acquire the core game plan.
- **ROLE** — understand what the character has and why the character plays differently.
- **PRACTICAL / PLAY** — navigate the actual round through S0–S4, opportunities, full inputs, value and Next Loop.
- **REFERENCE** — exhaustive lookup and source/version record.
- **GROW** — identify which ability is blocking stable performance.

## Current baseline

Migration source: `kianwang022-hash/StudyHub`, branch `sf6-practical-role-contract-20260916-final`, PR #49 baseline on 2026-09-17.

Current accepted state:

- Ryu — `GOLD_REFERENCE`.
- Jamie / Mai / Zangief / Cammy — `GOLD_PAGE_READY` after real Astro + Chromium desktop/mobile QA.
- Remaining roster — `SOURCE_CLOSURE_PENDING`; migrate character by character under the Gold contracts.

The current Astro build generates home + five accepted character pages. `Astro Gate` performs real Chromium checks for Role, Practical, S0–S4 folding, route completeness, dark/light rendering and mobile overflow.

## Canonical rule

New SF6 work belongs here. The old `StudyHub/projects/sf6` tree is historical migration evidence, not a second writable source of truth.

## Frontend direction

**Astro is the engineering/build layer.** Output remains static HTML, and a standalone HTML export can remain available for offline use.

Canonical content stays in repository data (`YAML / JSON / Markdown`); generated HTML is never the semantic source of truth.

## Public deployment

`.github/workflows/pages.yml` is ready to publish the accepted Astro `dist/` through GitHub Pages. Repository Pages still needs to be enabled with **Source = GitHub Actions** before deployment can succeed.
