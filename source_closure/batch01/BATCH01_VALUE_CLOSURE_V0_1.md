# Batch01 Current Value Closure v0.1

Status: `SOURCE_RECHECK_PASS / DAMAGE_PARTIAL`  
Characters: Jamie / Mai / Zangief / Cammy  
Version boundary: Year 4 / 2026-08-03  
Current practical guide update: 2026-08-31

Purpose: separate values that the current structured source explicitly publishes from values that still require Training Mode or another current reliable source. **No missing route damage is inferred from move damage.**

---

## Jamie

Current Year4 source explicitly supports the following learner-important end states:

- `H 623K | Arrow Kick` -> **+39**; midscreen forward dash -> about **+16**.
- `L 623K | Arrow Kick` -> **+42**; midscreen two dashes -> about **+4~5**; corner immediate forward-jump `j.HP` Safe Jump.
- `L 236K | Bakkai` at Drink Lv2+ -> **+42**; same +42 package.
- Corner TC ender -> **+4**.
- `L 214P | Swagger Step` ender -> **+39`; `5MK` whiff -> `5MP` active-frame meaty, source reports block **+5** / hit **+8**.
- Lv4 Swagger Hermit Punch ender -> **+20**.
- Corner forward throw variation -> **+7** -> `5MK` meaty.

Current move data additionally confirms:

- `22P | The Devil Inside`: Drink Level increases at frame **49**; holding continues the animation. At Drink Lv4 it restores Drive instead of increasing beyond Lv4.
- `236K | Bakkai` is the correct Bakkai input family; L/M/H become available at Drink Lv2+.
- `63214K | Tenshin` / OD Tenshin become available at Drink Lv3+.

### Still not closed from the current combo page

- Exact total damage for most full routes.
- Exact damage comparison between +39 / +42 / +4 / Lv4 +20 survivors.
- Exact Drive/SA net values for some high-resource families beyond obvious DRC/OD/SA costs.

**Policy:** keep route `damage` blank unless current source gives it or Training Mode confirms it. The learner can still use route value by KD/Oki/position/resource.

---

## Mai

Current Year4 source explicitly supports:

- `OD 214P | Ryuuenbu`: startup **16F**, block **-3**, standalone source value **1400 damage**; midscreen/corner follow-ups differ.
- `L 236K | Hissatsu Shinobi Bachi` -> **+27**; forward dash -> **+9** -> throw / active-frame `4HK` / shimmy.
- `M 236K` -> **+23**; dash -> about **+5**.
- `H 236K` -> **+22...**; dash -> about **+4** in the published grounded setup.
- `H 214P > L 236K` airborne route -> **+30**; dash -> **+12**.
- `j.214P | Musasabi` route family -> **+41 / +42** depending on route/height; Safe Jump family.
- `2HK` -> **+38**.
- forward throw -> **+21**; back throw -> **+17**.
- SA1 -> **+26** normal-state family / **+40** strengthened-state family.
- SA2 -> **+23 / +38** state family; SA3 -> **+19**; CA -> **+20**.

### Strengthened-resource semantics

The current source explicitly presents a `stock` section after SA1 and a `[Boosted]` route example. The English extraction does **not** cleanly expose every gain/spend rule. Therefore learner-facing Role may explain the concept — “强化资源让部分动作进入更强版本” — but exact stock accounting remains source-closure metadata until a clean primary/structured statement is obtained.

### Still not closed

- Exact total damage for most full learner routes.
- Exact stock gain/spend accounting for every strengthened route.
- Exact +41 vs +42 Musasabi condition split.
- Several OD 214P shorthand follow-ups that the source itself renders as grouped alternatives.

---

## Zangief

Current Year4 source explicitly supports:

- `cr.LK > st.LP > OD Double Lariat` -> important **+38** state.
- `cr.LK > st.LP > CDR > cr.LP > 3MP > Double Lariat` -> **+27** family.
- L Screw Piledriver -> **+30**.
- M / H / OD Screw Piledriver -> **+28**.
- Double Lariat -> **+27...56** depending on hit state.
- OD Double Lariat -> **+38...57** depending on hit state.
- `2HK` -> **+36**.
- Russian Suplex -> **+26**; Siberian Express -> **+29**.
- SA1 -> **+29**; SA3 -> **+26**.
- `OD Lariat +38 -> Drive Rush -> 6HP active-frame meaty`; source reports block around **+4**.
- `6HP` block -> **+4**; source explicitly branches to `3MP / SPD / block`.
- `5HK` block -> **+1**.
- active-frame `6MK` can reach hit **+7**, block **+2**.

### Still not closed

- Exact total damage for most combo routes.
- A complete bucket mapping from specific Lariat hit states/heights to each KD value in `+27...56 / +38...57`.
- Exact post-SPD distance/position by strength and screen position.
- Full Power Stomps and Borscht practical strings for learner promotion.

**Policy:** do not collapse Lariat into one universal KD number and do not label SPD aftermath as guaranteed point-blank Oki.

---

## Cammy

Current Year4 source explicitly supports:

- `2LP > 2LP > 5LK > M Spiral Arrow` -> approximately **1290 damage**; then forward-dash Oki.
- `DI wall splat > 5HP > L Spiral Arrow > H Cannon Spike` -> approximately **2720 damage**; corner Oki.
- `2MP > L Quick Spin Knuckle` -> approximately **1400 damage**; block around **-3**.
- `4MP > 4HK > forward jump > j.MP > Cannon Strike` -> approximately **2000 damage**.
- `2HK` normal hit -> **+31**; forward dash -> **+13**.
- `2HK PC` -> **+43**.
- back-to-corner DI route -> about **+36** situation -> forward dash throw/strike.
- favorable/corner Cannon Strike block state -> about **+1...+2**, explicitly spacing/height dependent.
- M Spiral Arrow -> forward dash -> throw / strike / shimmy.
- H Spiral Arrow prioritizes corner carry; H Cannon Spike aftermath varies with airborne hit height.

### Still not closed

- Exact total damage for most Pareto survivors.
- Exact Cannon Strike frame map by height/spacing.
- Exact H Cannon Spike KD/landing buckets by hit height.
- Complete current SA2 route strings.
- Exact midscreen DI delayed-DR extension string and value.

**Policy:** current source labels several values as approximate; learner UI must preserve `约` / conditioned language rather than silently converting them into exact numbers.

---

# Batch decision

The current structured guide is strong enough to close **route legality, key KD/Oki states, stage identity, position/value reasons, and many important frame states** for Batch01.

It is **not** strong enough by itself to truthfully fill exact total damage for every learner-facing route.

Therefore Batch01 Gold acceptance is split:

1. **Source-backed structure closure** — continue now.
2. **Exact route damage closure** — only where a current source publishes it; otherwise Training Mode / additional current source required.

No route is blocked merely because total damage is absent if its practical value is already clear from verified KD/Oki/position/resource semantics. However, a route must not display an invented damage number.
