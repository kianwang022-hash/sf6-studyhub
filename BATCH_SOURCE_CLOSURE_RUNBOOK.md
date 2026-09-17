# SF6 Batch Source Closure Runbook

Status: **FROZEN execution order for roster rollout**  
Purpose: turn a character from “existing package” into a Gold Role + Practical page without mass-producing low-quality filler.

This runbook is executed **per character**. UI projection may be reused; semantic judgment may not be blindly copied.

Authority stack:

1. `SOURCE_POLICY.md`
2. `CONTENT_SCHEMA.md`
3. `CHARACTER_PAGE_GOLD_CONTRACT.md`
4. `CHARACTER_UNDERSTANDING_CONTRACT.md`
5. `CHARACTER_MODEL_DEPTH_CONTRACT.md`
6. `LEARNER_TERMINOLOGY_CONTRACT.md`
7. `PRACTICAL_ROLE_CONTRACT.md`
8. `ROLE_FRAME_TABLE_CONTRACT.md`
9. current character package and sources

---

## 0. Hard rule

Do not start by rewriting prose or generating cards.

Required order:

`Source Closure -> Character Model v0 -> Fact Inventory -> Route Master Inventory -> Verification -> Pareto -> Shared Packages -> Character Model ↔ Route Audit -> S0–S4 -> Learner Terminology -> Role -> Practical -> Guide links -> QA`

A batch that skips Source Closure or Character Model alignment is not accepted even if the page looks polished.

The production pipeline can be shared. The learner's character model, Opportunity Hub, S0 identity floor and route priorities are character-specific.

---

## 1. Phase A — Source Closure

### A1. Version boundary

Record:

- current balance patch / season
- source update dates
- checked-through date
- controls assumption if relevant

### A2. Required source categories

Try to obtain, in source-tier order:

#### Tier 0 / official
- official command list
- official frame data
- official patch / adjustment notes
- official resource / mechanic description when available

#### Tier 1 / maintained structured references
- current frame-data database
- current character combo / Oki / move-list reference
- current structured route source

#### Tier 2 / expert practice evidence
- current high-level guide
- Training Mode demonstration
- tournament / high-level VOD for practical route use when needed

Community discussion may suggest candidates but does not establish patch-sensitive facts by itself.

### A3. Required closure outputs

Before route pruning, source enough material to answer:

- complete baseline normals
- unique / command normals that matter to decisions
- specials / supers / resource commands
- frame values that change decisions
- common confirms
- light confirm
- low confirm / DRC if relevant
- jump-in / anti-air conversion if relevant
- punish / PC
- DI / wall / corner
- resource / install routes
- Oki / setplay / reset
- carry / side-switch
- SA / kill
- character-specific special states

If an area has no trustworthy current source, record it as a gap rather than filling it from memory.

---

## 2. Phase B — Character Model v0

Before writing learner routes, explain in plain language what this character is actually trying to do.

Required:

- short memorable essence
- detailed 250–600 Chinese-character explanation when appropriate
- what behavior the character is trying to provoke
- concrete tools that create respect/threat
- payoff after respect
- recurring tradeoff/tension
- what a successful round looks like
- character-specific common misplays
- what transfers in / what is new / what must be unlearned

This is an initial hypothesis, not final copy. It must later be audited against the route/Oki evidence.

Reject archetype-only descriptions such as `rushdown`, `grappler`, `zoner`, `balanced` when they do not explain cause and effect.

---

## 3. Phase C — Role fact inventory

Compile the future `role_profile` before final Role prose.

Required assets:

### Identity
- one-line role
- preferred range
- win pattern
- lose pattern

### Key tools
For each promoted tool:

`input | plain function | official/community name | practical use`

Promote only tools that materially help a learner understand the character. Do not duplicate the full Reference command list here.

### Complete baseline Normal table
Use `ROLE_FRAME_TABLE_CONTRACT.md`.

Minimum fields:

`input, name, startup, active, recovery, hit, block, cancel, damage, note`

### Resource / signature mechanic
- input / trigger
- how obtained
- what changes
- when worth taking/spending

### Key decision numbers
Only numbers that change a decision.

### Constraints
Short list of condition-sensitive traps.

---

## 4. Phase D — Route Master Inventory

Build a backend candidate pool that is intentionally broader than the learner view.

Each candidate records, where applicable:

- opportunity / starter
- NH / CH / PC
- grounded / crouching / airborne / launch
- midscreen / corner / back-to-corner
- spacing / hit-height qualifier
- full input string
- damage
- Drive cost
- SA cost
- Ender
- KD / reset state
- carry
- side switch
- character resource gain/spend
- execution / stability note
- next-loop candidate
- source IDs
- verification state

Do not use placeholders as complete routes.

---

## 5. Phase E — Verification

Assign every route/setup one of the current verification states from `SOURCE_POLICY.md`.

### verified
Reproducible under declared ordinary conditions.

### conditioned
Valid only under explicit context such as corner, height, spacing, install, stock, active frame, etc.

### provisional
Useful evidence exists but exact conditions/version are not fully closed.

### legacy
Old but retained only for historical/reference use.

### conflict / blocked
Sources disagree or route string/condition is incomplete.

Learner-facing defaults should not be provisional unless the page clearly marks them and no better current closure exists.

When source re-check changes a command or state rule, correct the learner asset immediately and record the correction instead of preserving an anchored draft. Batch01 example: Jamie Bakkai is `236K`; an earlier `214K Bakkai` draft was corrected before Gold promotion.

---

## 6. Phase F — Pareto pruning

Do not choose routes by damage alone.

Compare practical value across:

- damage
- Drive
- SA
- Oki
- carry
- side switch
- character resource
- stability / execution
- lethal value

A route survives only if it owns a meaningful practical advantage.

Normal learner target per common opportunity:

`1 default + 0–2 distinct-value alternatives + optional kill route`

Backend can remain larger.

---

## 7. Phase G — Shared package compilation

Identify repeated Ender / Oki / Reset interfaces.

Examples:

- common knockdown -> dash -> meaty
- carry ender -> double dash -> strike/throw
- command grab -> reset/read
- +42 -> safe jump

Store them as shared packages so multiple starters do not create fake cognitive load.

Learner rows may still spell the complete route and Next Loop inline.

---

## 8. Phase H — Character Model ↔ Route / Oki audit

Return to the initial Character Model and ask whether the evidence actually supports it.

Required questions:

1. Does S0 preserve the minimum form of this character's identity?
2. Which opportunities occur because of the character's unique threat, not only generic SF6?
3. Does the route/Oki inventory reveal a different core tradeoff than the first draft assumed?
4. Are we accidentally teaching a generic checklist instead of this character?
5. Could S0 be copied to another character merely by renaming specials? If yes, fail and rewrite.

Batch01 examples:

- Jamie S0 must already expose `continue pressure vs 22P Drink investment`.
- Zangief S0 must already expose `strike -> respect -> 360P`.
- Cammy S0 stays grounded; divekick/Hooligan arrive only after the stable ground loop.
- Mai S0 proves the ordinary skeleton; later stages surface state/resource upgrades.

Freeze the learner-facing Character Model only after this audit.

---

## 9. Phase I — S0–S4 mapping

### S0
Minimum playable round **with the character's identity intact**.

Must answer, when relevant:

- how to control space
- what to do when opponent jumps
- one primary confirm
- light/basic confirm
- one stable ender
- one concrete next-loop
- how to reset when the loop ends
- the minimum character-specific decision that makes this character feel like itself

### S1
High-frequency stable additions:

- basic Oki
- punish / Shimmy PC
- throw/corner loop
- basic carry

### S2
Structured recurring branches:

- DRC
- DI
- Drive Reversal
- common state recognition
- reliable conversions

### S3
Same opportunity, multiple values:

- damage vs Oki
- damage vs carry
- resource gain/spend
- side switch
- position
- character-specific threat branches

### S4
Conditional optimization:

- lethal
- max damage
- safe jump
- specific spacing
- airborne height
- active-frame optimization
- niche matchup/character-state routes

Stage count is not the goal. Correct complexity placement is.

---

## 10. Phase J — Learner terminology closure

Before Role/Practical labels are accepted, build the learner terminology map.

First-exposure rule:

`plain-language game idea -> input -> official/community alias`

Examples:

- `强化资源（Stock）`
- `OD 214P｜耗 Drive 的强化旋转火焰攻击（Ryuuenbu）`
- `63214K｜近身抓取（Tenshin）`
- `360P｜高伤指令投（SPD）`
- `j.214K｜空中俯冲踢（Cannon Strike）`

System acronyms such as OD / DRC / PC / CH / Oki / Safe Jump / Shimmy / meaty are also expanded on first exposure.

A technically correct route fails learner QA if the user must already know the jargon to understand why it exists.

---

## 11. Phase K — Build learner assets

### K1. `role_profile.yaml`

Populate:

- identity
- two-depth Character Model
- mini glossary
- tools
- normal_frame_table
- resource if applicable
- key_numbers
- constraints

`role_profile.yaml` is optional during migration but canonical once the character enters the Gold candidate lane.

### K2. `practical.yaml`

Populate:

- version_scope
- stages
- shared_packages
- opportunities
- rows
- backend_only

Every learner route should resolve:

`Opportunity -> Result/Choice -> Full Input -> Value -> Next Loop -> WHY`

Special decision rows such as resource investment or command-grab reads may use explicit state labels, but must still state the concrete action and next decision.

### K3. Guide links

Opportunity rows may have compact inline Guide access. Guide must preserve practical origin.

---

## 12. Phase L — Gold QA

Use `CHARACTER_PAGE_GOLD_CONTRACT.md` acceptance checklist.

Visual checks:

- desktop density
- readable font size
- no large meaningless whitespace
- Character Model visible before data dump
- glossary is compact rather than encyclopedic
- future stages actually collapsed
- fullscreen uses width
- light contrast is strong
- dark contrast is strong
- mobile does not overflow/break

Semantic checks:

- input first
- learner language first
- no filler prose
- no raw backend IDs as content
- no incomplete finished routes
- conditions visible
- Next Loop concrete
- WHY tactical
- complete Normal frame table present
- S0 preserves character identity

---

## 13. Batch unit and receipts

A batch may contain multiple characters, but each character receives its own semantic receipt.

Recommended receipt fields:

- character
- source version boundary
- sources added/used
- frame-table coverage count
- route candidate count
- active/Pareto route count
- shared package count
- Character Model status
- terminology closure status
- S0–S4 status
- unresolved provisional/conflicts
- Role status
- Practical status
- Guide-link status
- visual QA status
- final judgment: `GOLD_PAGE_READY / BLOCKED`

Do not hide one weak character behind a green package-level build.

---

## 14. Batch scale-out rule

Allowed to automate:

- schema scaffolding
- Character Model layout rendering
- glossary rendering
- Normal table rendering
- stage folding
- Hub rendering
- metric chips
- fullscreen
- theme styling
- build/test projection

Not allowed to automate without semantic review:

- source quality judgment
- Character Model
- which tools are key
- which route is default
- Pareto pruning
- S0–S4 placement
- conditional route promotion
- terminology explanation for character-specific states
- WHY rationale

The goal is **shared product quality, not identical character pages**.
