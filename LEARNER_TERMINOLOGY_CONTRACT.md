# SF6 Learner Terminology Contract

Status: **FROZEN — mandatory learner-language authority**  
Accepted: 2026-09-17

## Purpose

A technically correct character page can still fail if the learner has to decode unexplained terms such as `Stock`, `Boosted`, `OD Ryuuenbu`, `Tenshin`, `Cannon Strike`, `Oki`, `DRC`, or `PC` before understanding what the page is saying.

The learner-facing rule is:

> **Explain the game idea first. Show the input second. Keep the official / community term as a secondary alias.**

Official English names remain searchable and useful, but they must never be the only way a new learner can understand the page.

---

## 1. First-exposure rule

The first time a term appears on a Role / Learn / Practical page, it must be understandable without prior character knowledge.

Preferred shapes:

- `强化资源（Stock）` — a temporary/held resource that changes later options
- `强化状态（Boosted）` — the move becomes a stronger version because the character currently has the required resource/state
- `OD 214P｜强化版龙炎舞（Ryuuenbu）` — spends Drive to use the Overdrive version of `214P`
- `63214K｜Tenshin（Lv3 后可用的近身抓取分支）`
- `Cannon Strike（空中俯冲踢；落点越低，通常越容易拿到有利局面）`

After the first explanation, shorter labels may be used when the page is already in the same context.

---

## 2. Display hierarchy

For character-specific actions, default learner hierarchy is:

`输入 | 中文功能描述 | 官方/社区名`

Examples:

`214P | 旋转火焰攻击 | Ryuuenbu`

`63214K | 近身抓取分支 | Tenshin`

`j.214K | 空中俯冲踢 | Cannon Strike`

The exact Chinese description should describe **what it does in play**, not attempt a literal translation when that is less useful.

---

## 3. Acronym / system-term rule

Do not assume the learner already knows abbreviations.

First exposure should expand or paraphrase:

- `OD` -> `OD / Overdrive：耗 Drive 的强化版必杀`
- `DRC` -> `取消绿冲：普通技命中/被防后花 Drive 接 Drive Rush`
- `PC` -> `Punish Counter：抓到对手招式硬直的惩罚反击`
- `CH` -> `Counter Hit：对手正在出招时打中`
- `Oki` -> `击倒后的起身压制 / 下一轮起攻`
- `Safe Jump` -> `安全跳：能压起身，同时来得及防多数无敌反击`
- `Shimmy` -> `骗拆投：假装要投，后退让对手投挥空再惩罚`

Once defined, the shorter term may appear in dense tables.

---

## 4. Character-resource rule

Every named resource/state needs a plain-language explanation before route tables use it.

Required fields:

- `plain_name`
- `official_name`
- `how_you_get_it`
- `what_changes`
- `when_it_matters`

Example shape for Mai:

- plain name: `强化资源`
- official/community alias: `Stock`
- what changes: enables stronger/boosted versions of some actions or changes later conversion value

Do not write a route such as `[Boosted] ...` until the Role page has already explained what Boosted means.

---

## 5. Character-model writing rule

`essence_short` and `essence_detail` must be readable without knowing official move names.

When a named move materially helps understanding, use one of:

- input + plain function + name
- plain function first, then name in parentheses

Avoid sentences such as:

> Stock / Boosted / OD Ryuuenbu change the route tree.

Prefer:

> 火舞拿到强化资源后，一部分招式会进入更强版本；这时 `OD 214P` 也能把普通命中换成更强的后续，所以同一个开口会因为“有没有资源、人在版中还是角落”而价值不同。

---

## 6. Practical-table rule

Dense tables may remain compact, but learner comprehension wins over jargon density.

Bad:

`Boosted OD Ryuuenbu -> SA1`

Better:

`有强化资源 | OD 214P（强化龙炎舞）> ... > SA1`

Bad:

`Tenshin route`

Better:

`Lv3+ | 63214K（近身抓取）命中后 > ...`

---

## 7. Page-level mini glossary

A character page should render a small `本角色先看懂这几个词` block when the character has 2+ important character-specific terms.

Keep it short: usually 2–5 terms.

Do not build a giant glossary. Generic system terms belong to global Learn / Reference after their first learner-facing explanation.

---

## 8. Acceptance gate

A Role / Practical migration fails learner-language QA if:

- [ ] an unexplained English move name is required to understand a sentence
- [ ] an acronym appears before its meaning is established
- [ ] character resources are used in route labels before being explained
- [ ] the page assumes the learner already knows what a named stance/state does
- [ ] official terminology is visually louder than input/function on first exposure
- [ ] translating jargon would make the sentence substantially easier, but the page leaves it untranslated

The goal is not to remove correct fighting-game terminology. The goal is to **teach the term at the exact moment it becomes useful**.
