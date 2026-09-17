# SF6 Character Understanding Contract

Status: **FROZEN — mandatory Gold-page extension**  
Applies to: all roster Source Closure / Role migration work

This contract exists because a technically complete character page can still fail the learner if it only lists buttons, frame data and routes.

The learner must leave the Role page with a **usable mental model of what makes this character different**.

This is not lore, archetype filler, or curriculum prose. It is gameplay understanding.

---

## 1. Core principle

The Role page must answer two layers:

### Layer A — factual kit

- normals / frame data
- specials / supers
- resource / install / stock
- key numbers
- conditions

### Layer B — character understanding

- what problem this character is trying to create for the opponent
- what the opponent is forced to respect
- what the character gets when that respect exists
- what the character is trading away to get stronger
- what a successful round usually feels like
- what makes this character meaningfully different from nearby archetypes

A Gold Role page requires both layers.

---

## 2. Mandatory learner-facing mental model

Every migrated character needs a compact `character_model` with these fields.

### 2.1 One-line essence

One plain-language sentence that a player who has never used the character can remember.

Bad:

> Resource-progression rushdown with strong pressure.

Good shape:

> You start with a smaller toolkit, then decide whether to spend knockdowns on immediate pressure or on building a stronger future toolkit.

The sentence should describe a real recurring decision, not a genre label.

### 2.2 What you are trying to make the opponent do

State the opponent behavior the character wants to provoke.

Examples of valid shapes:

- make them jump so anti-air becomes predictable
- make them sit still so command grab becomes real
- make them block low so overhead/throw becomes valuable
- make them respect a plus-frame button so walk-back/shimmy works
- make them spend Drive / corner space to escape

### 2.3 How you create that respect

Name the concrete tools/actions that create the threat.

Input notation should lead.

### 2.4 What you get once they respect it

Explain the character-specific payoff:

- command grab
- throw/shimmy
- stock build
- stance transition
- safe jump
- carry
- reset into another decision

### 2.5 Character tension / tradeoff

Every strong character identity should expose its recurring tradeoff when one exists.

Examples:

- current pressure vs future resource
- damage vs Oki
- safe spacing vs stronger but riskier entry
- command grab reward vs giving up position
- meter-efficient route vs corner carry

This is one of the most important anti-filler fields.

### 2.6 What a successful round looks like

Write a concrete 3–6 step round narrative.

Format example:

`control space -> force respect -> get the character-specific opening -> cash out -> run the character-specific next turn -> reset or repeat`

Do not write five vague paragraphs.

### 2.7 What usually goes wrong

Explain the 2–4 most common ways the learner misunderstands or misplays the character.

These must be character-specific.

### 2.8 What is actually unique

Answer:

> If I already understand generic strike/throw, Drive Rush and punish, what new decision does this character add?

If this field cannot be answered concretely, the character analysis is incomplete.

---

## 3. Role-page projection

Place the mental model near the top of Role, before or alongside the key-tool grid.

Recommended compact projection:

### 角色本质
One-line essence.

### 这角色在逼你做什么
Two short columns:

- `你在逼对手：...`
- `对手一旦尊重：...`

### 一局通常长这样
A 3–6-step flow strip.

### 这个角色真正特别在哪
One compact paragraph or 2–4 bullets of character-specific decisions.

### 最容易玩歪
2–4 concrete traps.

Then continue into:

- key tools
- complete Normal frame table
- resource mechanic
- key numbers
- constraints

---

## 4. Relationship to Practical

Role explains **why this character wants these opportunities**.

Practical explains **what to do once the opportunity occurs**.

Do not duplicate the full route table inside the mental model.

Example separation:

ROLE:
> Zangief's buttons are largely there to make the opponent sit still long enough that SPD becomes credible.

PRACTICAL:
> `6HP Block +4 -> 3MP / SPD / block` with exact route/value/next-loop branches.

---

## 5. Character-specific S0 rule

S0 cannot be mechanically cloned across the roster.

S0 must preserve the **minimum version of the character's identity**, not merely generic SF6 fundamentals.

Examples:

- a resource character may need one safe resource decision in S0/S1
- a grappler may need strike/command-grab respect logic immediately
- a charge/setplay character may need its defining state transition earlier than a standard shoto would
- a spacing character may need a spacing-dependent move introduced earlier because removing it erases the character

The universal stage meanings remain fixed; the content needed to satisfy each stage is character-specific.

---

## 6. Source Closure requirement

Character understanding must be evidence-backed.

Use:

- current structured character guides
- move/frame data
- practical combo/Oki guides
- current high-level play evidence when needed

Do not infer a distinctive identity only from archetype tags.

If sources disagree on the real current game plan, record the disagreement and keep the mental model provisional until resolved.

---

## 7. Batch acceptance gate

A character is not `CONTENT_READY` or `GOLD_PAGE_READY` unless all are true:

- [ ] one-line essence is concrete and memorable
- [ ] desired opponent response is explicit
- [ ] concrete tools that create respect are named
- [ ] payoff after respect is explicit
- [ ] major recurring tradeoff is explicit when applicable
- [ ] successful-round narrative is concrete
- [ ] common misplay pattern is character-specific
- [ ] unique decision vs generic SF6 is explicit
- [ ] S0 preserves the minimum form of the character identity
- [ ] no archetype-label filler substitutes for explanation

---

## 8. Anti-patterns

Reject:

- `balanced all-rounder`
- `rushdown character with strong pressure`
- `grappler with high damage`
- `zoner who controls space`

when these appear without explaining **how the character creates the problem, what the opponent must respect, and what decision follows**.

Labels may remain as metadata. They are never sufficient learner teaching.

---

## 9. Batch01 application notes

These are working mental-model directions, not final accepted copy.

### Jamie
Core tension: **immediate pressure vs investing in Drink Level for a stronger future toolkit**. S0 must prove he can play without compulsively chasing Lv4; later stages add +42/Oki, Bakkai, `63214K | Tenshin`, Lv4 options as the resource changes what threats exist.

### Mai
Core tension: **stable grounded control vs using stock/Boosted and OD Ryuuenbu to convert one opening into a stronger state/position**. The analysis must explain what stock changes instead of presenting Boosted routes as a separate combo list.

### Zangief
Core identity: **buttons create enough respect that SPD becomes a real threat; SPD threat then makes buttons better**. His page must teach strike/SPD fear and reset semantics, not pretend his identity is combo volume.

### Cammy
Core identity: **fast grounded contact and carry repeatedly turn small openings into close-range strike/throw, while Cannon Strike/Hooligan add spacing-dependent ways to challenge how the opponent defends**. The analysis must distinguish stable grounded pressure from higher-variance setup tools.
