# SF6 Repository Migration Receipt

Status: `CANONICAL_REPO_SWITCHED / CURRENT_GOLD_LANE_MIGRATED / ASTRO_BROWSER_GATE_PASS`
Date: 2026-09-17

Source repository: `kianwang022-hash/StudyHub`
Source branch: `sf6-practical-role-contract-20260916-final`
Source PR: `#49`
Source head used for migration baseline: `8fe45811be8ce38d025c01b138db332c3c5baf25`

Destination: `kianwang022-hash/sf6-studyhub`

## Rule

From this point forward, **new SF6 work is written only in `sf6-studyhub`**. The old `StudyHub/projects/sf6` tree is historical migration evidence and may be read during migration, but it is no longer a writable SF6 source of truth.

## Migration completed for the active lane

- authority/contracts are at repo root;
- 31-character `ROSTER.yaml` and `CHARACTER_SKILL_TRANSFER_MAP.md` are present;
- Ryu canonical `meta.yaml` + `practical.yaml` are present;
- Jamie / Mai / Zangief / Cammy canonical `role_profile.yaml` + `practical.yaml` are present;
- Batch01 current receipt, model-route audit, value closure, backend closure and Pareto v0.3 are present;
- Astro static frontend is now the active engineering projection for the five-character Gold lane.

Remaining 26 legacy character packages are intentionally not copied wholesale yet. Their roster identity and rollout state are preserved, and their old StudyHub package remains available as migration evidence until each character enters current Source Closure.

## Automated QA receipt

GitHub Actions run `35170904374` completed successfully on 2026-09-17.

It executed, rather than merely scheduling:

1. Node dependency installation;
2. `astro build`;
3. Playwright Chromium installation;
4. local Astro preview server;
5. real headless-browser desktop/mobile gate;
6. static `dist` artifact upload.

The gate passed for the current five-character lane and checks:

- Role + Practical render for all five;
- complete baseline Normal table counts: Ryu 18 / Jamie 18 / Mai 18 / Zangief 23 / Cammy 18;
- S0–S4 + ALL controls;
- character-specific S0 identity-floor inputs;
- S4 folded at default S0 and revealed under ALL;
- no ellipsis/generic-starter leakage in learner route cells;
- Jamie Drink-investment mental model;
- Zangief respect -> `360P` model;
- Cammy spacing/height language for Cannon Strike;
- no document-level mobile horizontal overflow.

This is **real automated browser QA**. It does not by itself sign the four Batch01 characters as `GOLD_PAGE_READY`; final visual/human acceptance of hierarchy, density and teaching feel still precedes Gold receipt signoff.

## Accepted semantic state at cutover

- Ryu: `GOLD_REFERENCE`.
- Jamie: `CONTENT_READY / GOLD_QA_PENDING`.
- Mai: `CONTENT_READY / GOLD_QA_PENDING`.
- Zangief: `CONTENT_READY / GOLD_QA_PENDING`.
- Cammy: `CONTENT_READY / GOLD_QA_PENDING`.

## Frontend transition

Astro is now the engineering/build layer for the active Gold lane and produces static HTML pages. The repository keeps YAML/JSON/Markdown as semantic Source of Truth. A standalone single-HTML export remains a planned delivery target, not the canonical authoring/runtime model.
