# SF6 Repository Migration Receipt

Status: `CANONICAL_REPO_SWITCHED / CURRENT_GOLD_LANE_MIGRATED / BATCH01_GOLD_PAGE_READY`
Date: 2026-09-17

Source repository: `kianwang022-hash/StudyHub`
Source branch: `sf6-practical-role-contract-20260916-final`
Source PR: `#49`
Source head used for migration baseline: `8fe45811be8ce38d025c01b138db332c3c5baf25`

Destination: `kianwang022-hash/sf6-studyhub`

## Rule

From this point forward, **new SF6 work is written only in `sf6-studyhub`**. The old `StudyHub/projects/sf6` tree is historical migration evidence, not a second writable source of truth.

## Active-lane migration complete

- authority/contracts live at repository root;
- 31-character `ROSTER.yaml` and `CHARACTER_SKILL_TRANSFER_MAP.md` are present;
- Ryu canonical `meta.yaml` + `practical.yaml` are present;
- Jamie / Mai / Zangief / Cammy canonical `role_profile.yaml` + `practical.yaml` are present;
- Batch01 current receipt, model-route audit, value closure, backend closure and Pareto v0.3 are present;
- Astro static frontend is the active engineering projection for the five-character Gold lane;
- four final per-character Gold receipts are stored under `receipts/`.

The remaining 26 legacy character packages are intentionally not copied wholesale. Their roster identity and rollout state are preserved, and old StudyHub packages remain migration evidence until each character enters current Source Closure.

## Final browser + visual QA receipt

GitHub Actions Astro Gate run **`35171931415`** completed successfully.

It executed:

1. Node dependency installation;
2. `astro build`;
3. Playwright Chromium installation;
4. local Astro preview server;
5. real headless-browser desktop/mobile gate;
6. dark-theme visual screenshots for the five active characters;
7. representative light-theme Role + Practical screenshots;
8. static `dist` and `sf6-visual-qa` artifact upload.

The accepted gate verifies:

- Role + Practical render for all five;
- complete Normal counts: Ryu 18 / Jamie 18 / Mai 18 / Zangief 23 / Cammy 18;
- S0–S4 + ALL controls;
- character-specific S0 identity-floor inputs;
- S4 folded at default S0 and revealed under ALL;
- no ellipsis / generic-starter leakage in learner route cells;
- Jamie future-Drink semantics;
- Zangief respect -> `360P` semantics;
- Cammy spacing/height language for Cannon Strike;
- no document-level mobile horizontal overflow at 390×844;
- shared dark/light runtime remains readable under visual inspection.

## Accepted state after QA

- Ryu: `GOLD_REFERENCE`.
- Jamie: `GOLD_PAGE_READY`.
- Mai: `GOLD_PAGE_READY`.
- Zangief: `GOLD_PAGE_READY`.
- Cammy: `GOLD_PAGE_READY`.

## Public deployment

Repository Pages has now been enabled with **GitHub Actions** as the source. This commit intentionally retriggers `.github/workflows/pages.yml` so the accepted Astro `dist/` can be published.

Expected public URL:

`https://kianwang022-hash.github.io/sf6-studyhub/`

Deployment success is tracked separately from semantic/render Gold acceptance.

## Frontend state

Astro is the engineering/build layer and produces static HTML. YAML/JSON/Markdown remain semantic Source of Truth. A standalone single-HTML export remains a delivery target, not the canonical authoring model.
