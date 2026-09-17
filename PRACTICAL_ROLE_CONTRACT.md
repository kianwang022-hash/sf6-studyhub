# Practical + Role Contract v1

## Purpose

This contract freezes the learner-facing rules accepted on 2026-09-16 for SF6 StudyHub character pages and practical-play pages.

The product goal is simple:

> **Role tells the learner what tools the character has. Practical tells the learner how to use those tools through a whole turn.**

Backend coverage may be exhaustive. Learner-facing surfaces must remain selective, stage-aware, concrete and input-first.

---

## 1. Top-level information architecture

### LEARN
Owns generic SF6 learning and the character's structured Guide lessons.

Use for:
- game-wide concepts and mechanics
- character-specific judgment explanations
- lab drills / variation drills
- confusion repair

Do not use LEARN as the primary route lookup surface.

### ROLE / character home
Owns the concise character profile.

It answers only:
1. What kind of character is this?
2. What are the important buttons / specials / resources?
3. What numbers materially change decisions?
4. What are the most common constraints or traps?

Do **not** fill the role page with teaching-about-teaching prose, architecture language, stage philosophy, audit language, or long narrative explanations.

The existing character selector and hero artwork remain the visual entry point.

### PRACTICAL / PLAY
Owns the real-round decision surface.

It combines:
- S0–S4 stage focus
- Opportunity Hub
- dense decision table
- full route strings
- damage / Drive / SA / KD / position / resource value
- concrete Next Loop recipe
- short `WHY` rationale
- inline Guide expansion

### REFERENCE
Owns exhaustive lookup:
- complete command index
- frame data
- full Route / Ender / Oki libraries
- source/version boundaries
- verification notes
- backend-only / provisional candidates

---

## 2. Production order: Source Closure before UI

No character Practical page is built from vibes or from a handful of remembered BnBs.

Required order:

`current sources -> Route Master Inventory -> exact/condition metadata -> Pareto pruning -> S0–S4 mapping -> shared Ender/Oki packages -> learner projection`

The backend inventory should try to be complete enough to expose meaningful alternatives. The learner projection should be aggressively selective.

---

## 3. Route Master Inventory

A practical route candidate should carry, where applicable:

- opportunity / starter
- NH / CH / PC
- grounded / crouching / airborne / launch state
- midscreen / corner / back-to-corner / spacing condition
- full input string
- damage
- Drive cost
- SA cost
- Ender
- KD advantage / reset semantics
- carry / side-switch value
- stock / install / character-resource result
- execution / stability note
- Next Loop
- source IDs
- game version
- verification state

Incomplete strings such as `starter > ...`, `... > SA3`, or `then continue` must never be presented as finished learner routes.

Use `provisional / conditioned / blocked` visibly until closed.

---

## 4. Pareto pruning

The learner does not memorize every legal route.

A second route for the same opportunity survives only when it buys a genuinely different practical value, for example:

- more damage
- stronger Oki
- better carry
- side switch
- lower Drive / SA cost
- character resource / install
- materially easier execution
- lethal / kill

A route that is worse in damage, resources, position, Oki and execution remains backend-only even if technically valid.

Normal learner shape per opportunity:

`1 default + 0–2 distinct-value alternatives + optional kill route`

Kill routes are conditional and should not occupy normal working memory when the opponent is far from lethal.

---

## 5. S0–S4 is the primary complexity layer

Stages are **not five separate courses**.

They progressively unlock the same decision network.

### S0 — Minimum playable
One dependable answer for the most common opportunities. The learner can complete a whole round.

### S1 — Fundamentals formed
Add high-frequency punish, basic Oki, corner pressure and basic carry.

### S2 — Structured play
Add state recognition such as DRC / DI / Drive Reversal and reliable conversions.

### S3 — Mature choice
The same opportunity may branch by damage / Oki / position / Drive / character resource.

### S4 — High-rank optimization
Lethal, max-damage, safe-jump, spacing, active-frame, airborne-height and other conditional optimizations.

### Stage rendering
When viewing S2:
- S0/S1 remain visible as learned context
- S2 is strongly highlighted
- S3/S4 are **collapsed by default**
- a compact `expand future stages` control can reveal them

Do not leave a large field of low-opacity future rows consuming attention.

---

## 6. Practical decision grammar

For a normal contact opportunity, the primary result layer is exactly:

- `WHIFF`
- `BLOCK`
- `HIT`

Only `HIT` branches into route-value choices.

Do not flatten PC, DI, Throw, Air, install/resource states into peer results.

They are modeled as:
- PC = Hit modifier / punish opportunity
- DI = special opportunity
- Throw = special opportunity / direct KD entry
- Air / anti-air = special state entry
- Denjin / Drink / Medal / stock etc. = resource/state qualifier

---

## 7. Input-first learner language

Commands are the learner's first language.

Preferred:

`63214K | Tenshin`

Not preferred:

`Tenshin`

English / official move names are searchable aliases and secondary labels.

Do not require the learner to memorize an English name before they can execute the route.

Internal IDs such as `R03 / E01 / O07` remain backend identifiers. They must not be the learner-facing content.

---

## 8. Practical table projection

Opportunity is a group header, not a permanently wasted column.

Default high-density table uses four columns:

1. `RESULT / CHOICE`
2. `FULL INPUT`
3. `VALUE / RESOURCE`
4. `NEXT LOOP + WHY`

Example:

`HIT · 默认稳定 | 5MP > 2MP xx 623HP | 2320 / 0D / KD+37 | 66 > 6HP meaty; WHY: stable, no Drive, returns to the main loop`

### Value fields
Use compact chips for:
- damage
- Drive
- SA
- KD
- carry
- side switch
- resource / install
- verification state

### WHY
`WHY` is always short and tactical.

Good reasons:
- stable
- more damage
- carry
- stronger Oki
- save Drive
- build resource
- side switch
- lethal

Do not write long meta explanations in route rows.

---

## 9. Next Loop is mandatory

A knockdown number by itself is not enough.

Bad:

`+42`

Good:

`+42 -> forward jump j.HK -> Safe Jump`

Bad:

`KD +37`

Good:

`KD +37 -> 66 -> about +18 -> 6HP meaty -> strike / throw / shimmy / block`

Every learner-facing route must terminate in one of:
- concrete Oki recipe
- explicit reset / read
- Neutral reset
- side-switch result
- disengage
- kill

---

## 10. Shared package compression

Concrete route strings may repeat in the learner UI for direct practice, but the content model should detect shared interfaces.

Example Ryu packages:

- `623HP -> +37 -> 66 -> 6HP meaty`
- `OD236K -> 6HK -> j.214K -> 66 -> 66 -> strike / throw / shimmy`

Multiple starters may feed one shared Ender/Oki package.

This is how backend completeness and low learner cognitive load coexist.

---

## 11. Guide behavior inside Practical

Guide is the explanation layer, not the navigation layer.

Normal path:

`Opportunity Hub -> dense practical rows -> inline Guide when needed`

Guide explains:
- why the judgment works
- timing / spacing
- common confusion
- Training Mode drill
- match observation

Guide must preserve the origin opportunity so the learner can return to the same practical context.

---

## 12. Role profile contract

The role page should be compact and factual.

Recommended sections:

### Identity
- one-sentence role
- preferred range
- repeatable win pattern
- major weakness / loss condition

### Key tools
Each tool is input-first:

`input | short name | practical use`

### Character resource / signature mechanic
Only state:
- how it is obtained
- what it changes
- when it is worth spending / building

### Key decision numbers
Only numbers that change a choice.

### Constraints / common traps
Short, concrete warnings.

Delete sentences that only describe the curriculum, architecture, or author's organization.

---

## 13. Visual / interaction rules

- high information density without admin-panel aesthetics
- larger type + tighter row padding, not tiny text
- use available horizontal width
- Opportunity Hub stays compact / sticky when useful
- S-stage controls stay compact / sticky when useful
- future-stage rows collapsed by default
- full-screen Practical mode should hide site chrome and use the whole display
- inline Guide expansion must not cause navigation loss
- dark + light themes both need deliberate contrast tuning

Semantic colors remain consistent:
- Hit: green
- Block: orange
- Whiff / anti-air lane: blue
- PC / resource: purple
- Kill: red
- Damage: gold

### Light theme
Do not simply invert dark mode. Text, muted text, semantic labels and metric chips need stronger contrast on white.

---

## 14. Performance rules

Avoid visual effects that make large decision surfaces lag:
- large live `backdrop-filter`
- broad filter effects on many rows/nodes
- unnecessary scale transforms on large painted subtrees

For pan/zoom canvases when used:
- batch with `requestAnimationFrame`
- use compositor transforms such as `translate3d`
- use layout/paint containment

The preferred Practical surface is a dense table, which should normally avoid large-canvas performance costs.

---

## 15. Batch acceptance checklist

A character is ready for Practical batch projection only when:

- current version boundary is explicit
- practical source coverage is sufficient
- candidate inventory is compiled
- conditional routes expose their conditions
- Pareto pruning is complete enough to define a default
- S0 has a complete playable round
- S1–S4 additions are stage-owned
- learner routes contain full input strings
- Next Loop is explicit
- internal IDs are hidden from the primary learner surface
- Role profile contains concrete tools instead of filler prose
- light/dark contrast and future-stage folding pass visual review

## 16. Batch pipeline

`Source Closure -> Inventory -> Pareto -> shared packages -> S0–S4 -> Role profile -> Practical projection -> Guide links -> visual/contrast/performance QA`

Semantic judgment remains character-specific. Once those assets are accepted, projection and UI generation should be highly automated.
