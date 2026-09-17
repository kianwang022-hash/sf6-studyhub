# SF6 StudyHub

Personal Street Fighter 6 learning system.

This repository is now the **canonical SF6 repository**. It was split out from `kianwang022-hash/StudyHub` so the private StudyHub can remain a general experiment/workbench repo.

## Product model

- **LEARN** — understand the character and acquire the core game plan.
- **ROLE** — understand what the character has and why the character plays differently.
- **PRACTICAL / PLAY** — navigate the actual round through S0–S4, opportunities, full inputs, value and Next Loop.
- **REFERENCE** — exhaustive lookup and source/version record.
- **GROW** — identify which ability is blocking stable performance.

## Current baseline

Migration source: `kianwang022-hash/StudyHub`, branch `sf6-practical-role-contract-20260916-final`, PR #49 baseline on 2026-09-17.

Current accepted state:

- Ryu — Gold reference.
- Jamie / Mai / Zangief / Cammy — `CONTENT_READY`, Gold browser/render QA pending.
- Remaining roster — legacy/source-closure pending and will be migrated/rewritten character by character.

## Canonical rule

From this migration onward, new SF6 work belongs here. The old `StudyHub/projects/sf6` tree is historical migration evidence, not a second writable source of truth.

## Frontend direction

Long-term frontend: **Astro as the engineering/build layer**, while preserving static HTML output and a standalone HTML export for offline use.

Canonical content remains repository data (`YAML / JSON / Markdown`); generated HTML is never the semantic source of truth.
