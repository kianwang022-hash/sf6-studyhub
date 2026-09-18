# Ingrid Fact Inventory v0.1

Status: PHASE C PASS  
Version: Year 4 / 2026-08-03  
Sources: SRC01 / SRC03 / SRC04 / SRC05

## 1. Complete baseline Normal table

| Input | Startup | Active | Recovery | Hit | Block | Cancel | Damage | Decision note |
|---|---:|---|---:|---:|---:|---|---:|---|
| 5LP | 4 | 4-6 | 7 | +5 | -1 | C | 300 | chain-cancelable |
| 5LK | 5 | 5-7 | 11 | +3 | -3 | C | 300 | Year4 Hit +3 |
| 5MP | 6 | 6-10 | 13 | +1 | 0 | C | 600 | stable pressure/confirm |
| 5MK | 8 | 8-11 | 16 | +4 | -3 | C | 700 | Year4 Hit +4 |
| 5HP | 12 | 12-15 | 20 | +3 | -5 | - | 900 | PC +23 |
| 5HK | 9 | 9-17 / 9-13,15-17 | 19 | +4 | -2 | SA | 800 | airborne hit ground bounce |
| 2LP | 4 | 4-5 | 9 | +4 | -1 | C | 300 | chain-cancelable |
| 2LK | 5 | 5-6 | 10 | +3 | -2 | - | 200 | chain-cancelable |
| 2MP | 7 | 7-10 | 12 | +6 | -1 | C | 600 | whiff +3F recovery |
| 2MK | 8 | 8-10 | 19 | +1 | -6 | C | 500 | low CDR starter |
| 2HP | 12 | 12-14 | 20 | +1 | -1 | C | 800 | stock route / DR owner |
| 2HK | 10 | 10-12 | 25 | KD | -12 | - | 900 | PC longer/hard KD |
| j.LP | 4 | 4-13 | Landing 3 | - | - | - | 300 | air normal |
| j.LK | 6 | 6-15 | Landing 3 | - | - | - | 300 | cross-up |
| j.MP | 8 | 8-11 | Landing 3 | - | - | - | 600 | airborne launch |
| j.MK | 8 | 8-13 | Landing 3 | - | - | - | 500 | cross-up |
| j.HP | 9 | 9-14 | Landing 3 | - | - | - | 800 | CH/PC slam |
| j.HK | 12 | 12-18 | Landing 3 | - | - | - | 800 | airborne launch |

## 2. Decision-changing unique / resource facts

- 6MP Sun Bright: 21F overhead / Hit +3 / Block -3; active-frame setplay can alter practical advantage.
- 4MK>6HP target-combo family can produce +44 exact end state.
- L Sun Flare hold / stock build takes about 47F for one stock; holding longer creates additional resource effects.
- Sun Flare Lv1: 21F / Block -4 / 900.
- Sun Flare Lv2: 18F / Block +4 / 1100 / consumes one stock.
- Sun Flare Lv3: 18F / Block +5 / 1350 / consumes two stock.
- OD Sun Flare Lv1: Block +4 / 1100.
- OD Sun Flare Lv2: Block +5 / 1350 / consumes one stock.
- OD Sun Flare Lv3: Block +9 / 1800 / consumes two stock; current practical spacing can reach +9..+13 and hit aftermath +87 or more.
- Solar Burst levels share stock consumption but have airborne/route-specific recovery.

## 3. Specials

- L/M/H Sun Shot: projectile-control family; H airborne-hit current Year4 follow-up changed.
- OD Sun Shot variants: current projectile / combo owners; selected versions Block +1/+2.
- L/M/H Sun Rise: 8/13/27F; Block -24/-23/-25 and therefore confirmed-only enders.
- OD Sun Rise: 14F / Block -3 / SA2 cancel; only final hit follow-up.
- Sun Veil: 6F / strike+jump invulnerability window / Block -3 / current aftermath +23 family.
- OD Sun Veil: 1F / strike+jump+throw invulnerability / Block -3 / current aftermath +52 family.
- Vanishing Sun Backward: invulnerable movement.
- Vanishing Sun Upward: Block +2 / airborne ground-bounce on hit.
- Vanishing Sun Forward: Block -3 / movement attack.

## 4. Current high-value Oki / resource states

- selected M Sun Rise route: about +38; forward dash 20F -> +18.
- 4MK>HP target combo: +44; two dashes -> +4.
- cr.HK PC: +45; two dashes -> +5.
- forward throw: +21; corner dash -> +1.
- cr.HK normal hit: +30.
- L Sun Rise: +36 family.
- OD Sun Rise: +40 family.
- Solar Burst selected route: +47 / +50 families depending route.
- one-stock Sun Flare Lv2 hit: +68 or more family.
- two-stock Sun Flare Lv3: +76 or more family.
- OD Lv3 Sun Flare: +87 or more family.
- Sun Veil: +23.
- OD Sun Veil: +52.
- SA3: +30.
- corner forward throw -> M Sun Shot active meaty: about Hit +10 / Block +6.
- selected M Sun Rise -> 5LP whiff -> L Sun Shot active meaty: about Hit +7 / Block +3.
- selected L Sun Rise -> 5LP whiff -> 6MP active overhead: about Hit +6 / Block 0.

## 5. Anti-anchoring facts

- Sun Rise aftermath is route / hit-height dependent; do not assign one universal +38/+40.
- L/M/H Sun Rise are deeply unsafe on block and require confirmed routes.
- stock_level_1 and stock_level_2 must remain explicit for Sun Flare plus states.
- zero-stock Sun Flare Lv1 is not plus.
- OD Lv3 +9..+13 / +87+ requires two stock and OD state.
- stock build requires a safe resource window.
- 4MK>HP +44 and cr.HK PC +45 are exact-state owners.
- corner forward throw +21 -> dash +1 is corner-specific.

## Phase C judgment

PASS. Current facts are sufficient for route compilation.
