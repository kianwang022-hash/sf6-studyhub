# Character Content Schema v1.2

## 1. LEARN (`learn.md`)

`learn.md` owns the **whole-character teaching narrative**. It introduces the character and explains how the same Core Loop grows across stages. It does not own per-focus drill state or exhaustive move data.

### 1.1 认识角色
Two depths:

**一句话打法** — one sentence a beginner can remember.

**深度角色模型** — cover only what changes decisions:
- win condition / loss condition
- preferred ranges
- mobility/spacing identity
- damage/carry/Oki identity
- resource economy
- defensive identity
- repeatable round pattern
- what makes this character distinct
- first things to learn / what to postpone

### 1.2 Learner progression

The learner-facing long-term progression is `S0–S4`, canonically owned by `grow.yaml -> progression_stages`:

- `S0_MINIMUM_PLAYABLE` — one complete playable round
- `S1_FUNDAMENTALS` — high-frequency fundamentals become match-stable
- `S2_MASTER_CLIMB` — common branching becomes structured
- `S3_MR1500_STABLE` — choice quality matures; 1500 MR is sustained Reality evidence, not a skill definition
- `S4_HIGH_MR` — optimize already-won opportunities without degrading fundamentals

Each stage defines:
- `learner_goal`
- `add_now`
- `gate`
- `defer`
- stage-owned capability/focus links

`Lv0–Lv4` remains the underlying compatibility/content-unlock vocabulary in `meta.yaml`. It must not be rendered as a competing mastery scale when S0–S4 exists.

### 1.3 工具地图
Prioritize functional tools, not exhaustive commands.

Each key tool should state compactly:
`用途 | 距离 | Hit去哪里 | Block含义 | Whiff风险 | Cancel/Confirm | 常见误用 | Jump target`

Groups may include:
- neutral normals
- close checks/confirm buttons
- anti-air
- specials
- stance/charge/stock/setup tools
- key TC

Full commands and detailed frames belong in Reference.

### 1.4 Neutral Map
Organize by space and opponent behavior:
- far
- mid
- close
- anti-air lane
- opponent walks forward
- opponent walks back
- opponent jumps
- opponent turtles
- opponent mashes
- corner/resource changes

Each meaningful contact point links into a PLAY node and may also link to the Guide focus that explains the judgment.

### 1.5 Core Loop
Exactly one beginner-facing loop. Example shape:

`中距离接触 -> Hit confirm -> stable Ender -> Oki/Reset -> 打/投/骗拆 or return Neutral -> next Turn`

It must specify:
- how the loop starts
- the default stable route
- default Ender
- default Oki or reset semantics
- how it restarts
- the most common way the opponent breaks it

Advanced routes remain branches, not competing “core loops”. S3/S4 branches must reconnect to the Core Loop, an explicit reset, or a terminal state.

### 1.6 Starter Course Surface
The learner UI may derive six starter cards from canonical content. They are navigation aids, not a second source of truth and not a replacement for Guide.

A course card may jump to a PLAY/Oki target, but Stage knowledge-focus controls must open Guide lessons.

---

## 2. GUIDE (`guide.yaml`)

`guide.yaml` owns **structured knowledge-focus lessons inside LEARN**.

The full contract is `GUIDE_LAYER_CONTRACT.md`.

Top-level minimum:

```yaml
schema_version: '1.2'
character: <slug>
policy:
  principle: 'Whole -> Part -> Whole'
  stage_is_mastery: false
focuses: [...]
```

Every focus requires:
- `id`
- `title`
- `short`
- `domain`
- `stages`
- `question`
- `model`
- non-empty `chain`
- non-empty `understand`
- non-empty `confusion_repair`
- `lab.setup`
- `lab.drill`
- `lab.vary`
- `match.observe`
- `match.return_to_whole`
- at least one concrete GROW capability or PLAY target
- `refs` when the focus uses source-sensitive/patch-sensitive claims

A focus that contains only a heading, copied Stage summary, or direct Hub link is incomplete.

### Guide navigation contract

Required path:

`Stage -> Guide focus -> GROW and/or PLAY -> Whole Round`

A separately labeled **进入本阶段 Hub** shortcut is allowed. It must not replace Guide focus interaction.

### Guide coverage principle
Equalize teaching coverage, not focus count. Do not manufacture filler focuses for simple characters.

---

## 3. PLAY (`play.yaml`)

Node classes:
- `N` Neutral
- `T` Turn/Starter
- `R` Route
- `E` Ender
- `O` Oki
- `D` Defense
- `C` Counterplay/Adaptation

Every actionable node must resolve forward or explicitly reset/end.

### Route Choice
If a state exposes 2+ practical routes, every route requires:
- `label` — 稳定/运版/Oki/伤害/省资源/换边/斩杀/Setup etc.
- `summary` — a few words that distinguish it
- `cost`
- `next`

Detailed sequence may be shown inline or link into Reference.

### Outcome / Reset semantics
Do not use “Oki” as a generic label for every knockdown.

An Ender should resolve to one of:
- `oki_advantage`
- `reset_read`
- `neutral_reset`
- `side_switch`
- `kill`
- `disengage`

Example: a command grab followed by a negative dash is `reset_read`, not automatic Oki.

### Condition metadata
Patch-sensitive routes/setplay that depend on context must record applicable qualifiers, for example:
- grounded / airborne
- counter / punish counter
- corner / midscreen
- spacing / hit height
- resource / stock / boosted state
- active-frame/meaty timing

Never present a conditional frame number as universal.

### Defense
Anti-air/reversal/escape success must link to Route/Oki/Turn/Neutral reset.

### Counterplay
Baseline counterplay is behavior-based:
- 爱跳
- 爱按
- 爱拆投
- 爱DI
- 爱后退
- 龟
- 飞道/远程控制

Each counter changes a Neutral or Turn decision.

### PLAY -> Guide reverse link
When a PLAY node corresponds to a Guide focus, the UI should offer **这个判断怎么理解 / 怎么练** and return to that focus while preserving origin.

---

## 4. GROW (`grow.yaml`)
Use only the five domains in `GROWTH_MODEL.md`:
- execution
- neutral
- contact
- offense_loop
- defense_adaptation

Each character defines concrete sub-capabilities and links them to graph nodes and, when available, Guide focuses.

Capability state is runtime/user evidence, not a canonical skill score.

S0–S4 answers **what complexity deserves attention now**; GROW answers **what the learner can currently execute/recognize under evidence**; Guide explains **what the underlying judgment means and how to verify it**.

Do not merge these three concepts.

---

## 5. Reference (`reference.md`)
Every completed character has a real reference layer:
- complete command index
- key frame/numeric decision notes
- Route Library
- Ender Library
- Oki/Setplay Library
- PC / DI / corner / Burnout / SA/kill branches as applicable
- anti-air conversions
- common punish notes
- source/version boundary

Routes use stable IDs but human labels lead the UI.

For condition-sensitive routes, Reference must include the condition and verification state, not only the sequence and number.

Guide may quote only the subset needed for the current decision and should link back to Reference for exhaustive detail.

---

## 6. Notes
Notes are not stored in the character package by default. The rendered site attaches notes to character/node/opponent/Guide-focus context.

---

## Completion principle
Equalize **decision coverage and teaching coverage**, not word count.

A character is not more complete because it exposes more mechanics earlier or because its Guide is longer.

Beginner completeness means the learner can:
1. understand one coherent round;
2. isolate a real blocker through Guide;
3. verify it in training and observe it in matches;
4. return to the whole round;
5. use PLAY/Reference only when the current decision calls for them.

Full-roster v1.2 completion requires **31/31 gameplay PASS + 31/31 S0–S4 + 31/31 Guide PASS**.
