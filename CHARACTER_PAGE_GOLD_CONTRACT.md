# SF6 Character Page Gold Contract

Status: **FROZEN — roster batch authority**  
Accepted baseline: Ryu Role + Practical page, 2026-09-17  
Applies to: all 31 characters during source-closure and rollout

This file is the single page-level acceptance authority for the new character experience. It composes and does not replace:

- `PRACTICAL_ROLE_CONTRACT.md`
- `ROLE_FRAME_TABLE_CONTRACT.md`
- `CHARACTER_UNDERSTANDING_CONTRACT.md`
- `CHARACTER_MODEL_DEPTH_CONTRACT.md`
- `LEARNER_TERMINOLOGY_CONTRACT.md`
- `CONTENT_SCHEMA.md`
- `SOURCE_POLICY.md`

If a future implementation disagrees with this file on page function or learner-facing hierarchy, this file wins until deliberately revised.

---

## 1. Product split

### ROLE / character page
Answers: **What does this character have, and why does this character play differently?**

Required surface order:

1. existing character selector + hero presentation — preserve
2. **character understanding block**: short essence + detailed plain-language explanation + mini glossary
3. concise structured identity / win pattern / failure pattern
4. input-first key tools
5. complete baseline Normal frame table
6. unique resource / install / stock mechanic
7. decision-changing numbers
8. concrete constraints / common traps
9. clear handoff to Practical and Reference

ROLE must not explain curriculum architecture, audit process, source workflow, or why the page was designed a certain way.

The character-understanding block is mandatory. A learner who has never played the character should be able to explain in plain language what the character is trying to make the opponent do before reading the full frame table.

### PRACTICAL / PLAY overview
Answers: **How do I actually use this character in a round?**

Required surface:

1. S0–S4 stage rail + ALL
2. future-stage folding
3. Opportunity Hub
4. dense four-column decision table
5. inline Guide access
6. backend-only / unresolved drawer
7. fullscreen Practical mode
8. deliberate dark/light contrast

### LEARN / Guide
Answers: **Why does this judgment work and how do I train it?**

### REFERENCE
Answers: **What is the exhaustive fact / command / source record?**

---

## 2. ROLE — frozen functional requirements

### 2.1 Character understanding — two depths

Every migrated character needs both:

- `essence_short`: roughly 25–70 Chinese characters; one memorable recurring gameplay idea;
- `essence_detail`: normally 250–600 Chinese characters; a plain-language causal explanation of how the character actually works.

The detailed layer should explain, naturally:

- what the character does before the opening;
- what behavior the character is trying to provoke;
- how concrete tools create respect/threat;
- what becomes available once the opponent respects it;
- the recurring tension/tradeoff;
- what a successful round tends to look like;
- what is genuinely new vs generic SF6;
- common character-specific misplays.

Do not replace this with archetype labels such as `rushdown`, `grappler`, `zoner` or `balanced`.

When the character has important jargon, show a small learner-first glossary immediately in this understanding block. First exposure follows:

`plain-language function -> input -> official/community alias`

not the reverse.

### 2.2 Structured identity

Keep it concise and decision-relevant:

- one-sentence role
- preferred range
- repeatable win pattern
- major loss condition / failure pattern

Bad copy:

> First learn the basic loop, then progressively add branches.

Good shape:

> Midrange control into stable knockdown; wins by repeatedly forcing grounded respect and anti-airing jumps.

### 2.3 Key tools — input first

Format:

`input | short/function name | practical use`

Input is primary. Move name is secondary/searchable.

Examples:

- `236P | 波动拳 / 控线 | Hadoken`
- `63214K | 近身抓取 | Tenshin`
- `360P | 高伤指令投 | SPD`

Do not make the learner decode an English name before understanding the button.

### 2.4 Complete baseline Normal frame table

Mandatory for a Role-migrated character.

Coverage:

- all standing normals
- all crouching normals
- all jumping normals
- any published normal variants that materially exist as separate baseline entries

Standard six-button characters will usually have 18 rows. Characters such as Zangief may legitimately require more when rapid/charged Normal variants are materially distinct current frame-data entries.

Required columns:

`输入 / 招式 | 发生 | 持续 | 硬直 | Hit | Block | Cancel | 伤害 | 备注`

Canonical fields:

- input
- name
- startup
- active
- recovery
- hit
- block
- cancel
- damage
- note

Table-level metadata must include source ID and scope/version boundary.

The table is factual lookup. Do not repeat long strategy prose in every row.

### 2.5 Unique resource / signature mechanic

Only answer:

- input / trigger
- how it is gained
- what it changes
- when it is worth taking/spending

Named resources/states must first be explained in plain language. Do not present `[Boosted]`, `Stock`, stance names, Drink Level, portal states, etc. as if the learner already knows them.

### 2.6 Key decision numbers

Only numbers that change a choice belong here.

Examples:

- important Hit / Block advantage
- KD number that enables a standard Oki interface
- resource-enhanced positive frame
- safe-jump threshold / special state

Full frame data stays in the Normal table or Reference.

### 2.7 Constraints / traps

Short concrete warnings only:

- airborne vs grounded distinction
- corner-only route
- spacing / height dependency
- unsafe on block
- resource state requirement
- common learner misconception

---

## 3. PRACTICAL — frozen functional requirements

### 3.1 S0–S4 is the primary complexity control

Stages unlock one growing decision network; they are not five separate courses.

- S0: minimum playable round
- S1: fundamentals / stable Oki / punish / carry
- S2: structured common branching such as DRC / DI / Drive Reversal
- S3: mature choice by damage / Oki / position / Drive / character resource
- S4: lethal / max damage / safe jump / spacing / airborne and other conditional optimization

**Character identity rule:** S0 must preserve the minimum form of the character's identity. S0 is not a universal combo checklist.

Examples:

- Jamie S0 needs a real `continue pressure vs 22P Drink investment` decision even before higher Drink-level routes are expanded.
- Zangief S0 needs one `strike -> respect -> 360P` command-grab read; delaying all command-grab logic to late stages would teach the wrong character.
- Cammy S0 should preserve the fast grounded `confirm -> 236K -> dash -> strike/throw` loop; spacing-dependent divekick/Hooligan can remain later.
- Mai S0 should prove the ordinary projectile/ground-confirm skeleton works, while Role previews that later resource states upgrade route value.

Rendering rule when S2 is selected:

- S0 / S1 remain visible as learned context
- S2 is strongly highlighted
- S3 / S4 are collapsed by default
- one compact control reveals future stages

Do not leave future rows as a giant low-opacity field.

### 3.2 Opportunity Hub

Hub is a compact index of real opportunities for the character.

Examples:

- primary contact button
- light confirm
- low DRC
- punish / Shimmy PC
- DI
- command grab
- throw / corner throw
- anti-air / air-to-air
- resource/install state

Do not force every character into Ryu's exact Hub list. Hub semantics are character-specific; Hub interaction is reusable.

### 3.3 Decision grammar

Normal contact primary result layer is exactly:

- `WHIFF`
- `BLOCK`
- `HIT`

Only `HIT` branches into route-value choices.

Special opportunities may use explicit state labels such as `READ`, `SAFE_WINDOW`, `RESOURCE_STATE`, `DI_PC`, etc. when those labels represent a real character-specific decision rather than a disguised normal-contact result.

Do not flatten PC, DI, Throw, Air, or resource states into peer normal-contact results.

### 3.4 Dense four-column table

Opportunity is a group header, not a wasted column.

Columns:

1. `RESULT / CHOICE`
2. `完整输入`
3. `价值 / 资源`
4. `NEXT LOOP · WHY`

Text must be large enough to read; density comes from tight layout and removing empty containers, not tiny type.

### 3.5 Full route string

Learner-facing routes must be explicit.

Forbidden as finished content:

- `starter > ...`
- `... > SA3`
- `then continue`
- only internal IDs such as `R03 / E01 / O07`
- unresolved official move names with no input/function explanation on first exposure

If the exact string is not closed, mark it provisional / verify / backend-only instead of inventing it.

### 3.6 Value / resource

Show compact values where they materially affect choice:

- damage
- Drive
- SA
- KD / frame state
- carry
- side switch
- Oki
- character resource / install
- verification state

Exact values must follow current source/version rules. Unknown damage is preferable to invented damage.

### 3.7 Next Loop is mandatory

A route is not finished at the combo ender.

Bad:

`KD +37`

Good:

`623HP -> KD +37 -> 66 -> 6HP meaty -> strike / throw / shimmy / block`

Bad:

`+42`

Good:

`+42 -> forward jump j.HK -> Safe Jump`

Every learner-facing route ends in one of:

- concrete Oki recipe
- reset/read
- Neutral reset
- side-switch result
- disengage
- kill
- explicit resource investment / state transition

### 3.8 WHY

WHY is always tactical and short.

Valid reasons include:

- stable
- more damage
- better Oki
- carry
- side switch
- save Drive
- build/spend resource
- lethal
- create respect
- punish respect
- improve future option space

No curriculum or architecture explanation inside route rows.

### 3.9 Guide

Guide is an explanation layer, not the default navigation layer.

Normal path:

`Opportunity Hub -> Practical row -> inline Guide when needed -> return to same opportunity`

### 3.10 Fullscreen

Practical must support fullscreen / workbench mode:

- hide nonessential chrome
- use the full horizontal display
- keep stage and Hub controls accessible
- preserve readable type

---

## 4. Shared Ender / Oki package rule

Backend should recognize shared interfaces even when the learner UI repeats full strings for practice.

Examples:

- many starters -> `HP DP +37 package`
- Jamie -> `H Arrow +39` or `+42` package
- Zangief -> `OD Lariat +38` package vs `SPD re-approach/read`
- Cammy -> `M Spiral Arrow -> dash` package
- Mai -> `L 236K +27 -> dash +9` package

This is cognitive compression, not learner-facing abbreviation.

---

## 5. Visual rules

Frozen direction:

- preserve existing SF6 StudyHub hero / selector language
- black/white base with neon-lime accents
- high density without admin-panel feel
- large readable type + tight row padding
- use available horizontal width
- stage and Hub controls compact/sticky where useful
- future stages collapsed by default
- semantic color consistency

Semantic colors:

- Hit: green
- Block: orange
- Whiff / anti-air lane: blue
- PC / resource: purple
- Kill: red
- Damage: gold

Light theme is independently tuned. Do not simply invert dark mode; muted text and semantic chips must remain high contrast.

---

## 6. Source and verification boundary

No Role or Practical migration is accepted without current-source closure sufficient for the claims shown.

Required verification vocabulary follows `SOURCE_POLICY.md`:

- verified
- conditioned
- provisional
- legacy
- conflict / blocked where unresolved

Condition-sensitive claims must expose qualifiers such as:

- grounded / airborne
- corner / midscreen / back-to-corner
- spacing / hit height
- CH / PC
- resource / install / stock
- active-frame / delayed meaty

Do not silently upgrade an old route because it is familiar.

If source re-check finds a command mismatch, correct the canonical learner asset immediately and record the correction. Example from Batch01: Jamie Bakkai is `236K`, not `214K`; the wrong input must not survive simply because an earlier draft used it.

---

## 7. Batch migration acceptance

A character is **GOLD_PAGE_READY** only when all are true:

### Source closure
- [ ] current game-version boundary recorded
- [ ] frame source closed
- [ ] route / Oki practical sources closed enough for learner claims
- [ ] conflicts explicitly recorded

### Role
- [ ] short essence + detailed plain-language Character Model
- [ ] mini glossary for important character-specific terminology
- [ ] concise role identity
- [ ] input-first key tools
- [ ] complete baseline Normal frame table
- [ ] resource/signature mechanic if applicable
- [ ] decision-changing key numbers
- [ ] concrete constraints / traps
- [ ] no filler / curriculum-meta prose

### Practical
- [ ] Route Master Inventory compiled
- [ ] Pareto pruning performed
- [ ] default route defined per common opportunity
- [ ] full learner route strings
- [ ] resource / damage / KD / position fields where relevant
- [ ] concrete Next Loop for every learner route
- [ ] S0 is a complete playable round **and preserves character identity**
- [ ] S1–S4 additions mapped
- [ ] future stages collapse correctly
- [ ] Opportunity Hub present
- [ ] Guide link preserves context
- [ ] fullscreen works

### QA
- [ ] no internal IDs as primary learner content
- [ ] no unexplained English/community jargon required for comprehension
- [ ] dark theme readable
- [ ] light theme high contrast
- [ ] desktop uses available width
- [ ] mobile does not break layout
- [ ] unresolved routes remain visibly provisional/backend-only

---

## 8. Non-negotiable anti-patterns

Reject a batch if it contains:

- generic filler such as “first master the basics, then add advanced options”
- unexplained English move names where input/function should lead
- route lists without why/Next Loop
- only damage-max routes without practical alternatives
- giant route dumps with no Pareto pruning
- conditional Oki shown as universal
- stale frame tables
- tiny-font density
- future-stage rows permanently consuming attention
- incomplete strings presented as finished combos
- S0 content that could be copied to another character merely by renaming specials

---

## 9. Gold reference and rollout rule

Ryu is the first accepted design/function reference:

- concise Role profile
- complete 18-Normal frame table
- S0–S4 Practical Workbench
- future-stage folding
- Opportunity Hub
- four-column route table
- concrete Next Loop + WHY
- fullscreen
- dark/light contrast treatment

Batch01 adds the first semantic-diversity test:

- Jamie: Drink investment economy
- Mai: state/resource upgrade of ordinary openings
- Zangief: strike-respect-command-grab feedback loop
- Cammy: fast grounded loop first, spacing/setup adaptations later

Other characters should match **function and quality**, not copy Ryu's specific opportunities, route count, stage contents, or character model.
