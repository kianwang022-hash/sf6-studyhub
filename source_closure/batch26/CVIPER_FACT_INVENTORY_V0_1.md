# C. Viper Fact Inventory v0.1

Status: PHASE C PASS  
Version: Year 4 / 2026-08-03  
Sources: SRC01 / SRC03 / SRC05 / SRC06

## 1. Complete baseline Normal table

| Input | Startup | Active | Recovery | Hit | Block | Cancel | Damage | Decision note |
|---|---:|---|---:|---:|---:|---|---:|---|
| 5LP | 4 | 4-6 | 8 | +4 | -2 | C / HJC | 300 | chain cancel |
| 5LK | 5 | 5-7 | 11 | +3 | -2 | C / HJC | 300 | HJC available |
| 5MP | 8 | 8-11 | 12 | +6 | +1 | C / HJC | 600 | pressure owner |
| 5MK | 8 | 8-10 | 18 | +5 | -3 | HJC | 700 | Year4 Hit +5 |
| 5HP | 12 | 12-14 | 21 | +3 | -2 | HJC | 900 | HJC can route into special despite no ordinary special cancel |
| 5HK | 10 | 10-13 | 20 | +4 | -3 | HJC | 900 | airborne hit knockdown |
| 2LP | 4 | 4-6 | 8 | +5 | -1 | C / HJC | 300 | chain cancel |
| 2LK | 5 | 5-6 | 9 | +4 | -1 | HJC | 200 | chain / HJC route |
| 2MP | 6 | 6-9 | 16 | +5 | -2 | C / HJC | 600 | March 2026 active/hurtbox improvement retained |
| 2MK | 8 | 8-10 | 17 | +5 | -1 | HJC | 600 | Year4 core low HJC starter |
| 2HP | 9 | 9-11 | 20 | +2 | -5 | C / HJC | 800 | forces stand / Seismic route |
| 2HK | 10 | 10-12 | 25 | KD +34 | -11 | - | 900 | only standard ground normal without HJC |
| j.LP | 5 | 5-10 | Landing 3 | - | - | - | 300 | air normal |
| j.LK | 5 | 5-11 | Landing 3 | - | - | - | 300 | air normal |
| j.MP | 8 | 8-13 | Landing 3 | - | - | C | 600 | airborne launch |
| j.MK | 7 | 7-12 | Landing 3 | - | - | - | 500 | cross-up |
| j.HP | 11 | 11-15 | Landing 3 | - | - | - | 800 | airborne slam |
| j.HK | 8 | 8-14 | Landing 3 | - | - | C | 700 | cross-up / Air Burning Kick cancel |

Neutral-jump HK is Reference and is not counted as a 19th baseline row.

## 2. High Jump Cancel truth

- High Jump: 2 > 8 / 9.
- costs 1 Drive outside SA1 install.
- all standard normals except 2HK are HJC-capable in current data; unique attacks are not part of this universal ground-normal rule.
- HJC can special-cancel during pre-jump frames.
- therefore st.MK / cr.MK / st.HP can route into specials even without ordinary direct special-cancel flags.
- SA1 install removes Drive cost from Super Jump / special follow-up for the install duration.

## 3. Key specials / follow-ups

- L Thunder Dash: 17F, Hit +2..+4, Block -4..-2; projectile invulnerable late; Tracer available.
- M Thunder Dash: 16F, Hit +1..+4, Block -3..0; Tracer available.
- H Thunder Dash: 7F, KD +21, Block -24; anti-air invulnerable 1-9F; Tracer available.
- OD Thunder Dash: KD +42, Block -2; no Tracer follow-up.
- Tracer Combination: costs 1 Drive when canceled from normal Thunder Dash; L/M/H variants have different end states.
- Burning Kick: Hit KD +38, Block -2; follow-up choice costs Drive.
- Knuckled Pursuit: hit-conversion follow-up, KD +23, Block -15.
- Double Burn: block-pressure follow-up, Block +2, KD +40; whiffs after Burning Kick hits.
- Aerial Burning Kick: advantage depends on jump height / spacing.
- Seismic Hammer: 24F low projectile-like strike, KD +53, Block -10, HJC-capable.
- OD Seismic Hammer: 19F, KD +53, Block -8 current.
- Focus Force: armor tool; held version can dash cancel.

## 4. Current high-value end states

- H Thunder Dash -> Tracer: about +25..26.
- L Thunder Dash -> Tracer: +37.
- M Thunder Dash -> Tracer: +18.
- Burning Kick -> Knuckled Pursuit: +23.
- Burning Kick -> Double Burn: Block +2 / KD +40.
- OD Burning Kick: +38..43.
- M Burning Kick air/height family: +39..42+.
- Seismic Hammer: +53.
- 2HK: +34.
- forward throw: +28.
- back throw: +19.
- exact Seismic / Burning Kick routes: +42 / +44 / +45 jump-in families.

## 5. Anti-anchoring facts

- HJC costs Drive outside SA1; never label it free.
- 2HK is the standard-normal HJC exception.
- H Thunder Dash is Block -24 and must remain confirmed.
- Tracer costs Drive and is not available from OD Thunder Dash.
- Knuckled Pursuit = hit branch; Double Burn = block branch.
- OD Seismic Hammer current block value is -8, not older -6.
- +42/+44/+45 jump-in values require exact route states.
- Aerial Burning Kick advantage requires height / spacing.

## Phase C judgment

PASS. Current facts are sufficient for route compilation.
