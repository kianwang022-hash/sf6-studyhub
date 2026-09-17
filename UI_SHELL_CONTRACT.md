# SF6 UI Shell Contract

Status: `FROZEN`
Date: 2026-09-17

## Purpose

The Astro migration must preserve the accepted legacy StudyHub UI shell and only replace / reconnect content projections behind it.

## Frozen UI invariants

The following are **not redesign targets**:

1. **Character selector / roster UI**
   - preserve the legacy left-side roster interaction and visual hierarchy;
   - preserve the 31-character grouping / selection model;
   - Astro may reimplement the runtime, but must not replace the accepted selector with a new card-grid navigation.

2. **Character hero / artwork area**
   - preserve the legacy character hero composition, image/art placement, copy hierarchy and overall visual identity;
   - Astro may reconnect canonical character data and assets, but must not redesign this surface into a different hero/header system.

These two surfaces are treated as accepted product UI, not temporary legacy implementation.

## Functional integration target

The final Astro character workspace should map functions as follows:

- **角色首页 / ROLE** — current accepted character understanding, tools, numbers, conditions and baseline Normal data attach to the selected character inside the preserved legacy character shell.
- **LEARN** — keep the existing StudyHub learning flow / progression / course-oriented learning surface rather than replacing it with the new Practical workbench.
- **PLAY / PRACTICAL** — this is where the new S0–S4 stage controls, Opportunity Hub, framework/table projection, complete route strings, value/resource and Next Loop logic belong.
- **GROW** — preserve the existing evidence-based capability tracking flow.
- **REFERENCE** — preserve exhaustive lookup / source / version behavior.

## Migration rule

Do not treat the current minimal Astro homepage + Role + Practical pages as the final product shell. They are only a successful engineering projection proving the new content model and browser/runtime gates.

The next frontend phase is:

`legacy accepted shell + canonical new content + Astro runtime`

not:

`new Astro UI replaces legacy UI`.

## Acceptance rule

A future UI change fails acceptance if it changes the character selector or character hero/artwork experience without explicit user approval, even if the underlying content and runtime remain correct.
