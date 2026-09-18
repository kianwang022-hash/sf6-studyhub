# Batch01 Fresh Recheck — 2026-09-18

Status: `CONTENT_READY / ASTRO_V6_ASSET_GATE_BLOCKED`

Characters: Ryu / Jamie / Cammy / Mai / Zangief

Purpose: fresh current-state recheck before the remaining roster is produced in batches. This receipt separates semantic/source readiness from the current Astro v6 shell migration.

## 1. Version boundary / freshness

Current learner-facing battle data remains anchored to:

- Year 4 balance boundary: **2026-08-03**.
- SF6 Lab structured Combo & Okizeme guides: **updated 2026-08-31**.
- Current structured frame-data layer: references official frame data through **2026-08-27**.
- Fresh checked-through date for this batch: **2026-09-18**.

A later September hotfix was checked during this audit. No new battle-value layer for Ryu / Jamie / Cammy / Mai / Zangief was found that replaces the above baseline.

## 2. Source registry closure

Fresh migration audit found a real repository defect: all five current character packages referenced `SRCxx` IDs, but their `sources.yaml` registries had not been migrated into the canonical `sf6-studyhub` repository.

Fixed in this branch:

- `characters/base/ryu/sources.yaml`
- `characters/base/jamie/sources.yaml`
- `characters/base/cammy/sources.yaml`
- `characters/year2/mai/sources.yaml`
- `characters/base/zangief/sources.yaml`

The content gate now requires:

1. a matching character source registry;
2. at least one Tier 0 official source;
3. current evidence-tier coverage;
4. every `source_id` / `primary_source` / `sources` reference used by Role or Practical to resolve to a declared source.

A polished page can therefore no longer pass while its evidence registry is silently missing.

## 3. Source quality judgment

### Ryu

- Tier 0/1 current evidence: closed.
- Learn / Role / Practical / Reference: current.
- Character model and route/Oki relationship: already accepted as Gold reference behavior.
- Tier 2 judgment: `NOT_REQUIRED` for currently promoted core claims; current structured evidence directly supports the promoted decision loop.

### Jamie

- Tier 0/1 current evidence: closed.
- Bakkai correction remains `236K`, never the old `214K` wording.
- S0 preserves `current pressure vs Drink investment`.
- Tier 2 judgment: `NOT_REQUIRED` for currently promoted core claims after Model ↔ Route/Oki audit.

### Cammy

- Tier 0/1 current evidence: closed.
- Grounded light/low -> `236K` -> dash -> strike/throw remains the stable S0.
- Cannon Strike remains explicitly height/spacing conditioned; no universal-plus wording.
- Tier 2 judgment: `NOT_REQUIRED` for current core; expert evidence may still be added when promoting more matchup/spacing-sensitive branches.

### Mai

- Tier 0/1 current evidence: closed.
- Reference layer was materially thinner than the other Gold candidates and has been rebuilt in this audit.
- Current Reference now records version boundary, key Year4 values, safe-jump / air-conversion / OD Ryuuenbu / boosted-state representatives, conditioned setplay and explicit unresolved Stock accounting.
- OD `214P` remains **16F / Block -3**; it is not projected as plus.
- Exact Stock gain/spend accounting remains intentionally unresolved rather than fabricated.
- Tier 2 judgment: `NOT_REQUIRED` for currently promoted core claims; future stock/state expansion may require more evidence if Tier 0/1 does not close the exact rule.

### Zangief

- Tier 0/1 current evidence: closed.
- S0 still requires the strike -> respect -> `360P` loop.
- SPD aftermath remains re-approach/read semantics where distance requires it; no fake guaranteed point-blank Oki.
- Lariat KD remains state-bucketed rather than collapsed into one universal number.
- Tier 2 judgment: `NOT_REQUIRED` for current core after Model ↔ Route/Oki audit; use current expert evidence when promoting matchup-specific approach layers.

## 4. Learner asset status

All five current character packages contain:

- Learn progression;
- Role / Character Model;
- complete promoted Normal table;
- Practical S0–S4;
- Opportunity Hub;
- Reference;
- source registry;
- current version boundary.

Jamie / Cammy / Mai / Zangief stale `SOURCE_CLOSURE_DRAFT` labels were corrected to `CONTENT_READY`.

This receipt does **not** promote the current v6 Astro page to Gold until the new shell passes browser QA.

## 5. Current Astro v6 blocker — accepted Hero transport

The accepted v6 HTML contains the intended Hero artwork, but the migration branch does not yet contain ten valid complete source payloads.

Expected:

`5 characters × light/dark = 10 WebP assets`

Current source state at this recheck:

### Valid-looking complete WebP payloads

- `cammy-dark.webp.b64`
- `cammy-light.webp.b64`
- `jamie-light.webp.b64`

### Present but failing the WebP signature / completeness check

- `ryu-dark.webp.b64`
- `ryu-light.webp.b64`
- `jamie-dark.webp.b64`
- `mai-light.webp.b64`

These staged files are 19,999-character chunks and do not begin with a valid decoded WebP payload signature. They must not be treated as accepted binaries.

### Still missing

- `mai-dark.webp.b64`
- `zangief-dark.webp.b64`
- `zangief-light.webp.b64`

The new materialization gate validates base64, decoded `RIFF....WEBP` identity, minimum payload size, then writes `public/hero/*.webp`. Dev/build now fail early on missing/truncated assets.

Browser QA now requires **both light and dark Hero artwork for all five current characters**, not only Ryu.

## 6. Batch-scale rule frozen from this recheck

Before Batch02 begins:

1. current five content/source gate must pass;
2. ten accepted Hero payloads must materialize as complete WebP;
3. Astro build must pass;
4. browser QA must pass all five on desktop, theme switching and mobile;
5. only then treat the v6 Astro shell as the reusable projection baseline.

For the remaining roster, keep the frozen semantic order:

`Source Closure -> Character Model -> Fact/Route Inventory -> Verification -> Pareto -> Model ↔ Route Audit -> S0–S4 -> Terminology -> Role -> Practical -> QA`

Tier 2 is evidence on demand, not a quota. If Tier 0/1 directly supports the strategic claim and route/Oki evidence reproduces the same loop, no decorative old video is required. If a strategic claim extends beyond Tier 0/1, current expert / lab / VOD evidence is required or the claim stays provisional.

## Final judgment

- **Five-character semantic/content layer:** `READY`.
- **Five-character source registries:** `RESTORED + HARD-GATED`.
- **Latest current source boundary:** `RECHECKED 2026-09-18`.
- **Mai Reference:** `UPGRADED`.
- **Astro v6 learner shell:** `BLOCKED ONLY BY HERO ASSET INTEGRITY / FINAL BROWSER QA`.
- **Remaining roster batch rollout:** `DO_NOT_START_FROM_A_RED_SHELL`; start after the Hero/browser gate turns green.
