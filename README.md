# SF6 Project

A GitHub-backed Street Fighter 6 learning system contained inside **StudyHub** and built around three things only:

1. **LEARN** — understand the character and acquire the core game plan.
2. **PLAY** — navigate the actual match decision loop.
3. **GROW** — identify which ability is blocking stable performance.

`Reference` and `Notes` are side tools, not extra curricula.

## Project boundary

SF6 is a **StudyHub subproject**. Its architecture, content, runtime and evidence are owned inside `projects/sf6/`; they do not define the root architecture of StudyHub or other experiments/projects.

## Framework status

**Architecture v1: FROZEN**

Do not redesign the framework during normal character work. Change the framework only when a real character exposes a structural failure that cannot be solved locally.

Ryu is the first implementation target and is **not yet Gold**.

## Core model

```text
LEARN
认识角色 -> 工具地图 -> Neutral Map -> Core Loop

PLAY
Neutral -> Turn/Starter
        -> Hit / Block / Whiff
        -> Route Choice
        -> Ender
        -> Oki
        -> Next Turn
        -> LOOP

GROW
操作 / 立回 / 接触判断 / 进攻Loop / 防守与适应

SIDE
Reference <-> any node
Notes     <-> any node
```

## Non-negotiable rules

- One character has **one clear Core Loop**; advanced branches hang off it.
- Any actionable state must answer **what next?**
- If more than one route is valid, show a short **choice reason** before the details.
- Route IDs are for stable linking; labels such as `稳定 / 运版 / Oki / 伤害 / 省资源 / 斩杀` are for humans.
- Anti-air, defense success and knockdown may not end as prose-only dead ends.
- Reference is a complete lookup layer for every finished character.
- Notes stay local by default and may be attached to the current character/node/opponent.
- There is no generic “today training” page. Growth is gap-driven.
- The website is generated from repository source; generated HTML is not the content source of truth.

## Work order

`FRAMEWORK_V1 -> RYU_GOLD -> archetype calibration -> one-character-at-a-time build -> site release audit`

Location: `projects/sf6/` inside StudyHub.
