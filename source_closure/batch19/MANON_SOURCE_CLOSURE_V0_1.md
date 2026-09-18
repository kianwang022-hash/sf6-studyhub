# Manon Source Closure v0.1

Status: **PHASE A CLOSED -> READY FOR CHARACTER MODEL v0**
Character: **MANON**
Batch: **Batch19 / High-reward guess & big-body chapter**
Checked through: **2026-09-19**
Control assumption: **Classic**

## 1. Version boundary

- Current learner boundary: **Year 4 / 2026-08-03**.
- Maintained combo / Oki guide: **updated 2026-08-31**.
- Current frame reference: **2026-08-27** official-reference data.

## 2. Source closure judgment

Tier 0 / Tier 1 coverage closes:

- complete 18-Normal baseline;
- Manège Doré Medal-scaled command grab;
- Renversé Medal-scaled route;
- Rond-point;
- Dégagé;
- Grand Fouetté;
- st.MP / st.MK / jump-in routes;
- light -> H Rond-point;
- DR cr.MP -> 4HP -> M Renversé;
- anti-air cr.HP / OD Rond-point -> Renversé;
- H Rond-point -> dash Oki;
- normal throw -> dash setplay;
- corner strike / throw / shimmy / DI;
- Medal Level strategy;
- SA1 / SA2 / SA3 Medal scaling.

Tier 2 status: **NOT_REQUIRED** for Phase A.

## 3. Current Training Priorities

The maintained guide teaches approximately:

1. stable move -> H Rond-point;
2. st.MP > DR > cr.MP > 4HP > Renversé;
3. jump-in > 4HP > Renversé;
4. DI Punish Counter route;
5. cr.HP anti-air;
6. H Rond-point -> forward-dash Oki;
7. throw -> forward dash -> strike / throw;
8. shimmy;
9. corner DI;
10. OD anti-air -> Renversé;
11. SA3;
12. Medal Level;
13. reversal punish;
14. Burnout corner DI.

Medal Level is therefore important, but **not the first learner object**.

## 4. Medal truth

Current frame data scales Manège Doré by Medal Level:

- Lv1: 2000
- Lv2: 2300
- Lv3: 2700
- Lv4: 3000
- Lv5: 3700

Punish Counter values scale higher.

Renversé damage also rises with Medal Level, and SA3/CA damage scales by Medal Level.

The current Medal strategy section states:

- Lv1–2: getting the throw/Medal matters.
- Lv3: combo damage and throw threat both become more meaningful.
- Lv4–5: throw damage becomes extremely important, so opponent jump/mash/reversal responses make strike increasingly valuable.

This supports an escalating strike/throw feedback model rather than “always chase Medal”.

## 5. Current facts that materially shape learning

- Health: **10000**.
- 5LP: **4F / Hit +4 / Block -1 / cancellable**.
- 5MP: **7F / Hit +2 / Block -2 / cancellable**.
- 5MK: **10F / Block -5 / cancellable**.
- 2LP: **4F / Hit +3 / Block -2 / cancellable**.
- 2MP: **7F / Hit +6 / Block -1 / cancellable**.
- 2MK: **8F / Hit +4 / Block -2 / non-cancelable**.
- Révérence: **8F / Hit +3 / Block +1 / cancellable**.
- H Manège Doré: **5F** command grab.
- H Rond-point: **14F / Block -11**, current practical combo/Oki ender.
- H Dégagé: **20F / Hit +3 / Block -9**, low-profile invulnerability.
- OD Dégagé: **22F / Hit +6 / Block -3**, throw invulnerability / airborne state.

## 6. Current setplay evidence

H Rond-point ender:
- forward dash -> strike;
- forward dash -> throw;
- forward dash -> shimmy;
- forward dash -> block vs reversal.

Normal throw aftermath:
- forward dash situation is not automatically a guaranteed throw;
- opponent response determines throw / strike / shimmy / block.

Corner:
- strike meaty;
- throw -> Medal Level;
- shimmy;
- DI vs Burnout;
- block reversal.

This explicitly supports “read the opponent” rather than deterministic command-grab Oki.

## 7. Character-model hypothesis

Manon is provisionally:

> play ordinary strike/throw/Oki first; Medal Level increases the future value of winning a throw/Renversé interaction, so each successful Medal makes the opponent more willing to jump/mash/escape, which in turn strengthens strike.

Unlike Lily:
- Lily invests time before entry.
- Manon upgrades future reward **after winning interactions**.

## 8. Important anti-template notes

- Medal should not become S0 bookkeeping.
- 2MK is non-cancelable.
- throw aftermath is not guaranteed close command-grab Oki.
- Renversé / Manège damage values require explicit Medal Level.
- incomplete source strings with ellipsis remain backend-only.
- high Medal makes strike stronger indirectly because opponent escape behavior changes.

## 9. Phase A decision

**PASS.**

Manon may advance to Character Model v0 and Fact / Route Inventory.
