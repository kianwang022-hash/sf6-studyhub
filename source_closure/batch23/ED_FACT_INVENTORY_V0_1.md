# Ed Fact Inventory v0.1

Status: PHASE C PASS  
Version: Year 4 / 2026-08-03  
Sources: SRC01 / SRC03 / SRC04 / SRC05 / SRC06

## 1. Complete baseline Normal table

| Input | Startup | Active | Recovery | Hit | Block | Cancel | Damage | Decision note |
|---|---:|---|---:|---:|---:|---|---:|---|
| 5LP | 4 | 4-6 | 7 | +4 | -1 | C | 300 | chain-cancelable |
| 5LK | 6 | 6-7 | 13 | +3 | -3 | - | 300 | close support |
| 5MP | 7 | 7-9 | 15 | +6 | -1 | C | 600 | core confirm |
| 5MK | 10 | 10-11 | 16 | 0 | -5 | C | 600 | whiff +4F recovery; long midrange touch |
| 5HP | 10 | 10-13 | 18 | +5 | -2 | C | 800 | forces stand; charge -> Psycho Knuckle; can cancel to forward Kill Rush while charging |
| 5HK | 10 | 10-12 | 12 | +8 | +4 | C | 800 | major plus-pressure owner |
| 2LP | 4 | 4-6 | 10 | +3 | -3 | - | 200 | chain-cancelable |
| 2LK | 5 | 5-6 | 12 | +2 | -4 | C | 300 | low confirm bridge |
| 2MP | 8 | 8-10 | 19 | +2 | -6 | C | 500 | CDR starter |
| 2MK | 9 | 9-10 | 16 | +8 | -1 | C | 600 | long low; whiff +3F recovery |
| 2HP | 10 | 10-13 | 24 | KD | -12 | - | 900 | PC hard-knockdown extension |
| 2HK | 12 | 12-13 | 19 | -1 | -6 | C | 800 | whiff +2F recovery |
| j.LP | 5 | 5-9 | Landing 3 | - | - | - | 300 | air normal |
| j.LK | 8 | 8-10 | Landing 3 | - | - | - | 300 | air normal |
| j.MP | 8 | 8-13 | Landing 3 | - | - | - | 500 | cross-up |
| j.MK | 10 | 10-11 | Landing 3 | - | - | - | 700 | jump-in |
| j.HP | 9 | 9-13 | Landing 3 | - | - | - | 800 | CH/PC slam |
| j.HK | 8 | 8-9 | Landing 3 | - | - | - | 800 | route-specific airborne launch |

## 2. Decision-changing unique / charge tools

- Psycho Knuckle Lv1: 39F, 800, Block about -2, crumple +41 on declared Hitman Combination state; corner block can become +2.
- Psycho Knuckle Lv2: 69F, 1200, Block +4, crumple +41; projectile clash property.
- Cobra Punch: 17F, Hit +1, Block -3, low-profile frames 7-19.
- Body Blow Combination: 13F, Block -8, can route into Kill Rush Backward only.
- Hitman Combination chain provides current route-specific +42 state when ending in H Blitz.
- Low Smash Combination: 10F, Block -8, SA cancel; route-specific Kill Rush options.

## 3. Specials

- Psycho Spark: 14F, Hit +3, Block -5; Psycho Shoot follow-up window.
- OD Psycho Spark: 14F, Block -2.
- L/M/H Psycho Shoot: 12F follow-up projectile, Hit +3 / Block -8.
- OD L/M/H Psycho Shoot: 12F, Block -2; Year4 variants support more distinct slow/fast screen-control roles.
- L/M/H Psycho Uppercut: 10/14/16F; very unsafe on block; OD is 13F fully invincible early.
- L/M/H Psycho Blitz: 11/13/15F. M common end state +39; H +40. L/OD have 30% starter scaling when used as starter in current guide.
- L Psycho Flicker: 16F, Hit +1, Block -6; PC crumple.
- charged L Flicker: 31F, Block +4, pull-in effect but Year4 spacing remains variable.
- M Psycho Flicker: 20F, Hit +3, Block -6; PC crumple.
- charged M Flicker: 35F, Block +4, pull-in effect but Year4 spacing remains variable.
- H Psycho Flicker: 17F; long-range capture / route tool with charge variant.
- OD Psycho Flicker: 25F, Block +4; pull-in state / route owner.
- Kill Rush Forward total 31F; Kill Switch Break available early, Chaser later in the rush.
- Kill Switch Break: 11F / Block -4.
- Kill Switch Chaser: 11F / Block -6.
- Kill Rush Backward total 31F.

## 4. Current high-value Oki states

- M Psycho Blitz: +39.
- H Psycho Blitz: +40.
- H Blitz -> Drive Rush: about +9.
- M Blitz -> Drive Rush: about +8.
- exact Hitman Combination -> H Blitz: +42 -> immediate forward jump HP safe jump.
- L/M/H Psycho Uppercut: +38 / +39 / +38.
- OD Psycho Uppercut: +18.
- OD Psycho Blitz: +42.
- 2HP ordinary: +30 -> dash -> 5HP active meaty family.
- 2HP CH/PC: +47 -> two dashes -> +9.
- L Psycho Flicker PC: triple dash -> point-blank +4.
- forward throw: +24; corner dash -> +5.
- back throw: +17 CURRENT.
- 5HK Block: +4 -> 5MP 4F frame-trap family.
- charged L/M Flicker Block: +4, but follow-up depends on current spacing.
- exact +38 corner -> whiff 2LP -> Psycho Spark active meaty family, about Block +5.
- SA1: +33; SA3: +24.

## 5. Anti-anchoring facts

- uncharged L/M Psycho Flicker is Block -6; do not teach it as autopilot pressure.
- charged Flicker +4 is spacing-conditioned and no longer means guaranteed point-blank throw.
- back throw is +17 in the current version, not the older +24 loop state.
- H Blitz +42 safe jump belongs to a declared Hitman Combination route.
- M/H Blitz ordinary end states are +39/+40; do not replace them with +42 globally.
- 5HK Block +4 is a direct stable pressure owner independent of Flicker.
- Psycho Knuckle Lv1 and Lv2 have different startup/block properties and should not be merged.
- SA2 resource loop is later-stage optimization, not S0 identity.

## Phase C judgment

PASS. Current facts are sufficient for route compilation.
