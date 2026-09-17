# Batch01 Character Model ↔ Route / Oki Audit v0.2

Status: `SEMANTIC_ALIGNMENT_PASS_WITH_FIXES`  
Characters: Jamie / Mai / Zangief / Cammy  
Authority: Character Understanding + Model Depth + Learner Terminology + Gold Page contracts

Purpose: verify that S0–S4 actually teaches the character described by the Character Model, instead of merely sorting generic combo categories.

---

## Jamie

### Character claim
Jamie is about **current turn value vs future Drink Level investment**. Lv0 must be a real playable character; Drink is an optional investment, not a startup tax.

### Audit result
Current Pareto structure is mostly aligned.

Keep:
- S0: stable ground confirms -> `623K` Arrow Kick family -> concrete knockdown loop.
- S1: first meaningful Drink payoff / stronger Oki choice.
- S2: DRC / punish / conversion.
- S3: Lv2/Lv3 state branches including `63214K` close-range grab.
- S4: Lv4 and high-resource optimization.

### Required correction
S0 learner language must explicitly teach one **Drink decision**, even if no Drink-specific combo is added yet:

> After a safe knockdown, first ask whether keeping pressure/position is worth more than taking one Drink Level.

This preserves Jamie identity from the first playable stage without forcing Lv1–Lv4 route overload.

### Current-source recheck
- `22P | The Devil Inside` raises Drink Level at frame 49; it is a real time/turn investment, not a free passive buff.
- `236K | Bakkai` is the correct input family and becomes available at Drink Lv2+.
- `63214K | Tenshin` / OD Tenshin become available at Drink Lv3+.
- `H 623K` supports the +39 main loop; `L 623K` and `L 236K` support the +42 stronger-Oki family.

### Frontend consequence
S0 opportunity set must contain a small `安全喝酒窗口 / 继续压` decision interface. It is not a route dump.

---

## Mai

### Character claim
Mai uses a fairly standard projectile/ground-confirm skeleton, then turns resources/states into **better next-turn value**: stronger Oki, safe-jump, position or conversions.

### Audit result
Current stage placement is aligned if terminology is simplified.

Keep:
- S0: projectile + ground confirm + stable `236K` ender.
- S1: strong knockdown / safe-jump package and corner throw structure.
- S2: common DRC / punish / DI.
- S3: `OD 214P` conversion family and state-dependent route choice.
- S4: boosted/high-resource/super optimization.

### Required correction
Do not expose `Stock / Boosted / Ryuuenbu` as unexplained nouns. Role must first teach:

1. **强化资源** — held resource that changes later move value;
2. **强化状态** — some actions get stronger while that resource condition is active;
3. `OD 214P` — Drive-spending rotating-fire conversion tool.

S0 does not need boosted routes, but the Role explanation must preview why later stages change.

### Current-source recheck
- Year4 `OD 214P` is 16F and block -3; it is safer than the older -12 version but **not plus**.
- Current source gives standalone OD 214P damage 1400 and explicitly separates midscreen vs corner follow-ups.
- `L 236K` gives +27 and dash +9; `H 214P > L 236K` gives +30 and dash +12.
- SA1 has +26 vs +40 state families.
- The source exposes a `stock` / `[Boosted]` route layer, but the English extraction does not fully expose every gain/spend rule; exact stock accounting remains a closure item.

### Frontend consequence
Opportunity Hub should distinguish `普通命中` from `有强化资源时的命中`, instead of creating a second unrelated combo list.

---

## Zangief

### Character claim
Zangief is a **respect loop**: strikes/buttons make the opponent willing to block; command grab punishes that respect; fear of the grab makes strikes better again.

### Audit result
A real contradiction was found in the older `meta.yaml` progression.

Old Lv0 text said:

> `不要求 SPD 读人`

and delayed SPD until Lv3. This violates the Character Model. Without one command-grab read, S0 teaches a generic big-body strike character, not Zangief.

### Required correction — mandatory
Move the **basic command-grab threat into S0**.

S0 should teach:
- walk / hold space;
- stable strike confirm;
- anti-air;
- one simple `360P` command-grab read after respect;
- command grab aftermath as **re-approach/read**, not guaranteed point-blank Oki.

Later stages may add exact strength choice, OD, advanced frame traps and state-specific Lariat Oki, but the strike ↔ command-grab feedback loop starts immediately.

### Current-source recheck
- L SPD gives +30; M/H/OD SPD give +28 in the current guide.
- Double Lariat is a +27...56 family and OD Lariat a +38...57 family depending on hit state.
- `OD Lariat +38 -> DR -> 6HP active-frame meaty` is a concrete high-value interface; source reports about +4 on block.
- `6HP` block +4 and `5HK` block +1 directly support the respect-loop model.
- Because Lariat KD varies so widely, no universal “Lariat -> fixed Oki” line is acceptable.

### Frontend consequence
Zangief's Opportunity Hub cannot be a Ryu-style list with command grab as a late specialty. `正帧接触 / 对手老实防 / 指令投` is a first-class early opportunity.

---

## Cammy

### Character claim
Cammy first wins through a very clean, fast grounded skeleton; spacing-dependent air/special entries are second-layer tools used after the opponent develops predictable defense.

### Audit result
Current stage structure is aligned.

Keep:
- S0: walk/ground buttons -> light/low confirm -> `236K` Spiral Arrow -> dash -> strike/throw.
- S1: punish, carry, simple knockdown pressure.
- S2: DRC / DI / defensive-response adaptation.
- S3: spacing-qualified `j.214K` divekick and Hooligan branches.
- S4: high-resource, super, advanced setup.

### Required correction
Any Cannon Strike statement must carry landing-height/spacing semantics. Do not teach `Cannon Strike = plus`.

### Current-source recheck
- basic light confirm is published at about 1290 damage and explicitly flows into forward-dash Oki.
- corner DI stable route is about 2720 damage.
- `2HK` gives +31 -> dash +13; PC gives +43.
- back-to-corner DI route creates about +36, then dash throw/strike.
- favorable/corner Cannon Strike block state is about +1...+2, but the same source explicitly says spacing/height matter.
- H Cannon Spike aftermath changes with airborne hit height, so no universal fixed KD/Oki should be projected.

### Frontend consequence
Role should explain the move in plain language before naming it:

`j.214K | 空中俯冲踢 | Cannon Strike`

and state that landing low/at good spacing changes the block result.

---

# Cross-character conclusion

The shared production pipeline is valid. The shared learning content is not.

Batch01 now has four distinct S0 identity floors:

- **Jamie:** normal SF6 + optional current-pressure-vs-Drink investment decision.
- **Mai:** projectile/ground skeleton + preview that resource state upgrades later conversion value.
- **Zangief:** respect creation + command-grab threat from the start.
- **Cammy:** fast grounded repeatable loop; divekick/Hooligan deliberately delayed.

The current-source recheck also confirms that **total route damage is not uniformly published** across these guides. Gold assets must therefore prefer verified KD/Oki/position/resource values over invented damage. Source-published approximate damage keeps the `约` qualifier; missing damage stays blank until Training Mode or another current reliable source closes it.

## Gate

A future character fails semantic alignment if its S0 could be copied to another character by merely renaming the special moves.
