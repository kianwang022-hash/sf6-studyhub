# SF6 Character Model Depth Contract

Status: **FROZEN — mandatory extension of `CHARACTER_UNDERSTANDING_CONTRACT.md`**  
Accepted: 2026-09-17

## Purpose

A Gold Role page must not reduce character understanding to two or three clever sentences.

Each character needs **two learner-facing depths**:

1. a short summary that can be remembered at a glance;
2. a compact detailed explanation, usually a few hundred Chinese characters, that actually teaches how the character works.

The short layer is a memory hook. The detailed layer is the understanding layer. Both are required.

---

## 1. Short layer — `essence_short`

Target length: roughly **25–70 Chinese characters**.

It should answer:

> What is the single recurring idea I should remember when I pick this character?

It must describe a real gameplay relationship or decision, not an archetype label.

Bad:

> Rushdown character with strong pressure.

Good shape:

> Use grounded pressure to make the opponent sit still; once they respect it, the command grab becomes real, and fear of the grab makes your strikes better again.

---

## 2. Detailed layer — `essence_detail`

Target length: normally **250–600 Chinese characters**. More is allowed when the character genuinely needs it; filler is not.

The detailed explanation should be readable by someone who has never played the character. It should explain the character as a **cause-and-effect system**, not as a list of moves.

It should usually cover, in natural prose:

- what the character does before getting an opening;
- what behavior they are trying to provoke from the opponent;
- which concrete tools create that respect/threat;
- what happens after the opponent starts respecting those tools;
- what the character's recurring tradeoff is;
- what a successful round tends to look like;
- what is character-specific versus generic SF6;
- the most common way a new player plays the character incorrectly.

Do not force every paragraph into identical headings if the prose reads better another way. The semantic coverage is mandatory; the writing shape may vary by character.

---

## 3. Structured support fields

The long explanation should be backed by structured fields so the UI and Guide can reuse the model:

- `force_opponent_to`
- `create_respect_with`
- `payoff_after_respect`
- `core_tradeoff`
- `successful_round`
- `common_misplays`
- `unique_decision`
- `transfer_in`
- `new_skill`
- `unlearn`

These fields are not a substitute for `essence_detail`; they are evidence/structure for it.

---

## 4. Writing rules

### Plain language first

Explain concepts before jargon.

Preferred:

> You are using the knockdown as a budget: keep the turn now, or give up some immediate pressure to raise Drink Level and make later turns stronger.

Not preferred:

> Resource-progression optimization with install-state conversion.

### Input first when a move matters

Use `63214K | Tenshin`, not only `Tenshin`.

### Concrete examples are welcome

A detailed explanation may mention 1–3 anchor tools or state packages when they clarify the idea, e.g.:

- `6HP Block +4`
- `H Arrow +39`
- `M Spiral Arrow -> dash`

Do not turn the explanation into a route dump.

### No generic praise

Avoid claims such as:

- strong neutral
- great pressure
- amazing damage
- flexible toolkit

unless the sentence immediately explains **how** and **what decision it creates**.

---

## 5. Role-page projection

Recommended hierarchy:

### 角色本质
`essence_short`

Then immediately below, in smaller but still readable type:

### 详细理解
`essence_detail`

Then the structured visual blocks:

- 你在逼对手做什么
- 对手一旦尊重，你得到什么
- 一局通常长这样
- 这个角色真正特别在哪
- 最容易玩歪

Then continue to:

- input-first key tools
- complete Normal frame table
- resource/signature mechanic
- key decision numbers
- constraints

The detailed paragraph should be collapsible only if the page becomes too long; it should not be hidden behind a separate Reference page.

---

## 6. Acceptance gate

A character cannot become `CONTENT_READY` or `GOLD_PAGE_READY` unless:

- [ ] `essence_short` is concrete and memorable
- [ ] `essence_detail` exists and is normally 250–600 Chinese characters
- [ ] the detailed layer explains cause-and-effect rather than listing moves
- [ ] the detailed layer distinguishes generic SF6 from the character-specific delta
- [ ] at least one recurring tradeoff/tension is explained when applicable
- [ ] common misplay is character-specific
- [ ] prose is understandable without already knowing official English move names
- [ ] factual/patch-sensitive claims are source-backed

## 7. Batch01 rule

Jamie / Mai / Zangief / Cammy are the first four characters required to produce this two-depth model before Role promotion.
