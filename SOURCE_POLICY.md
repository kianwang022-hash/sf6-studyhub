# Source & Version Policy v1.1

## Principle
The site may teach with simplified language, but it must not hide uncertainty in frame data, routes, patch-sensitive mechanics or character versions.

## Source tiers
### Tier 0 — primary
- official Capcom command list / frame data
- official patch notes
- official character/mechanic documentation

### Tier 1 — structured secondary
- current reputable frame-data databases
- maintained character reference sites

### Tier 2 — expert practice evidence
- current high-level guides
- tournament/VOD examples
- lab demonstrations

Community posts may suggest hypotheses but do not by themselves establish patch-sensitive facts.

## Claim classes
### Stable concept
Examples: character archetype, broad tool purpose. Can be taught without repeating a version on every sentence.

### Version-sensitive
Examples: frame advantage, damage, scaling, juggle behavior, Drive cost, route legality, Oki timing, patch-specific buffs/nerfs.

These require source coverage and a game-version/date boundary.

### Condition-sensitive
A claim may be numerically correct but only under a particular state. Typical qualifiers:
- grounded / airborne hit
- corner / midscreen
- spacing / hit height
- counter / punish counter
- stock / boosted / install state
- active-frame or delayed meaty timing
- resource threshold

Condition-sensitive claims must surface their qualifier. Never publish a conditional frame number as if universal.

## `sources.yaml` record
Recommended fields:

```yaml
- id: SRC01
  tier: 0
  title: Official frame data
  url: ...
  accessed: YYYY-MM-DD
  game_version: ...
  covers: [frames, commands]
  notes: ...
```

## Route verification
Every published route should carry one of:
- `verified`
- `conditioned`
- `provisional`
- `legacy`
- `conflict`

### `verified`
The route is reproducible under its declared ordinary conditions.

### `conditioned`
The route/setup is valid only under one or more declared conditions such as spacing, hit height, corner, active-frame timing, stock or boosted state. Record the condition explicitly.

### `provisional`
Useful current evidence exists but the exact condition/version has not been fully resolved.

A verified/conditioned route records:
- `verified_on`
- `game_version`
- `conditions` when applicable
- source IDs

Example:

```yaml
verification: conditioned
verified_on: 2026-09-11
game_version: 2026-08-03
conditions: [corner, airborne_hit, specific_spacing]
sources: [SRC01, SRC03]
```

## Training Mode boundary
Use a visible `训练场复核` note when a learner-facing route depends materially on spacing, airborne height, meaty active frames, character-specific hurtbox behavior or other unstable timing.

This label is not a substitute for source coverage. It communicates that the source establishes the route family while the player must verify the exact practical condition.

## Conflicts
When two sources disagree:
1. do not silently merge
2. prefer current primary evidence when available
3. record the disagreement
4. mark affected nodes provisional until resolved

## Version replacement rule
When a current patch invalidates a formerly common route or setup:
- do not retain the legacy route in the beginner Core Loop
- move it to legacy/reference only when historically useful
- publish the current replacement in the learner-facing path
- record the version boundary

## Language
Chinese is the teaching language. English move names remain as searchable aliases. Avoid unexplained English jargon in learner-facing prose.
