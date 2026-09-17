# SF6 Role Frame Table Contract

Status: Frozen extension of `PRACTICAL_ROLE_CONTRACT.md` for roster migration.

## Purpose

The Character / Role page is not only a concise role summary. It must also contain a **complete baseline normal-attack lookup table** so the learner can answer basic frame questions without leaving the character page.

This table complements, rather than replaces:

- concise role identity
- input-first key tools
- unique resource / install / stock rules
- decision-changing key numbers
- Practical S0–S4 workbench
- full Reference

## Required coverage

For a migrated character, `meta.yaml -> role_profile -> normal_frame_table` should cover all ordinary baseline Normal Attacks exposed by the current game frame-data source:

- standing normals
- crouching normals
- jumping normals

For a standard six-button character this will usually be 18 rows. Characters with chain variants or unusual normal sets may require more rows if those variants materially exist as distinct published frame-data entries.

Unique attacks / command normals / target combos / specials do not need to be duplicated into this baseline table. They remain in `role_profile.tools` and Reference unless the character-specific contract explicitly promotes them.

## Required fields

Each normal row should contain:

- `input`
- `name`
- `startup`
- `active`
- `recovery`
- `hit`
- `block`
- `cancel`
- `damage`
- `note`

The table-level object should record `source_id` and `scope`.

## Learner-facing projection

Render as a dense table with input first:

`输入 / 招式 | 发生 | 持续 | 硬直 | Hit | Block | Cancel | 伤害 | 备注`

Rules:

1. Input notation is visually primary; official move name is secondary/searchable text.
2. Group rows into Standing / Crouching / Jumping for scanability.
3. Use readable desktop type; do not shrink the table into tiny text merely to fit every column.
4. Horizontal scroll is acceptable on narrow screens.
5. Light theme must pass a dedicated contrast check.
6. Do not copy decision prose into every row. The table is factual lookup; key-tool cards explain practical use.
7. Notes should only carry frame-relevant properties such as chain cancel, forced stand, cross-up, launch, special whiff recovery, etc.
8. Source-sensitive frame data must follow `SOURCE_POLICY.md` and current version boundary.

## Division of responsibility

**Role page:** complete baseline normals + concise character model.

**Practical page:** only normals and routes that matter to the selected S0–S4 decisions.

**Reference:** exhaustive commands, unique attacks, TC, specials, supers, route details, source/version notes.

This prevents two bad extremes:

- a Role page that is vague but cannot answer basic frame questions;
- a Role page that becomes an exhaustive Reference dump and loses teaching hierarchy.

## Batch gate

A character is not considered Role-migrated if:

- the concise `role_profile` exists but the current complete baseline normal table is missing;
- the frame table is stale or lacks source/version coverage;
- learner-facing text uses unexplained move names where input notation should lead.

Semantic Source Closure remains character-specific. The UI projection may be reused across the roster after the character asset is accepted.
