# A.K.I. Fact Inventory v0.1

Status: PHASE C PASS  
Version: Year 4 / 2026-08-03  
Sources: SRC01 / SRC02 / SRC03 / SRC04 / SRC05 / SRC06

## 1. Complete baseline Normal table

| Input | Startup | Active | Recovery | Hit | Block | Cancel | Damage | Decision note |
|---|---:|---|---:|---:|---:|---|---:|---|
| 5LP | 5 | 5-6 | 7 | +4 | -1 | C | 300 | chain-cancelable |
| 5LK | 4 | 4-6 | 12 | +3 | -3 | C | 300 | fastest standing normal |
| 5MP | 6 | 6-10 | 14 | +3 | -3 | C | 600 | whiff +2F recovery |
| 5MK | 8 | 8-10 | 15 | +6 | -2 | - | 700 | whiff +2F recovery |
| 5HP | 12 | 12-14 | 21 | +1 | -4 | - | 800 | Qiong Qi starter |
| 5HK | 9 | 9-12 | 19 | +4 | -3 | C | 800 | forces stand; PC +12 |
| 2LP | 4 | 4-5 | 9 | +4 | -1 | C | 300 | chain-cancelable |
| 2LK | 5 | 5-7 | 8 | +3 | -2 | - | 200 | chain-cancelable |
| 2MP | 7 | 7-9 | 18 | +1 | -3 | C | 600 | route / OD Lash starter |
| 2MK | 7 | 7-9 | 16 | +5 | +1 | SA | 600 | plus low; no special-cancel DRC inheritance |
| 2HP | 10 | 10-12 | 28 | KD | -8 | - | 900 | Year4 PC applies poison |
| 2HK | 10 | 10-15 | 20 | 0 | -3 | SA | 900 | PC launch; current poison application |
| j.LP | 5 | 5-13 | Landing 3 | - | - | - | 300 | air normal |
| j.LK | 5 | 5-10 | Landing 3 | - | - | - | 300 | cross-up |
| j.MP | 7 | 7-10 | Landing 3 | - | - | - | 700 | airborne launch |
| j.MK | 7 | 7-12 | Landing 3 | - | - | - | 600 | jump-in |
| j.HP | 11 | 11-16 | Landing 3 | - | - | - | 800 | CH/PC slam |
| j.HK | 8 | 8-15 | Landing 3 | - | - | - | 800 | heavy jump-in |

## 2. Decision-changing unique normals

- 3MP Pu Lao: 24F / Hit +3 / Block -3 / overhead.
- 6HP Chi Wen: 16F / Hit +3 / Block -3 / SA; Year4 active 3F -> 4F.
- 6HK Qiu Niu: 14F / Hit +4 / Block +2; low-avoid property begins later in startup.
- 5HP > HP Qiong Qi: current Year4 target-combo route; unpoisoned about +34, poisoned burst about +54.
- 2HP PC: current Year4 poison-application route.

## 3. Specials / state tools

- Nightshade Pulse: projectile poison-application family.
- Nightshade Chaser: follow-up projectile; OD current Year4 block-poison property, with Drive Parry exception.
- Orchid Spring: poison-puddle setplay owner; long active field.
- Toxic Wreath: 13F strike, Block -4, current route end state about +40.
- L Serpent Lash: 14F / Hit +1 / Block -8; poison-state changes damage/launch behavior.
- M Serpent Lash: 14F / Block -12; poisoned target can burst to crumple +69.
- H Serpent Lash: 11F / Block -20; ordinary route end state +44, poisoned burst about +53.
- OD Serpent Lash: 21F / Hit +4 / Block -14 unpoisoned; poisoned burst about +71.
- L/M/H Cruel Fate: multi-hit airborne-advancing special; L current Hit +2.
- OD Cruel Fate: Hit +42 / Block +2 current route family.
- Snake Step: mobility / spacing tool.
- Sinister Slide: long commitment movement state with Venomous Fang / Heel Strike / Entrapment follow-ups.
- Venomous Fang: high-commitment follow-up used in corner poison-puddle routes.
- Heel Strike: 11F / Hit +4 / Block -3 route extension.

## 4. Current high-value state / Oki facts

- H Serpent Lash ordinary hit: +44.
- H Serpent Lash +44 -> two 19F dashes -> about +6.
- M Serpent Lash poisoned burst: +69.
- H Serpent Lash poisoned burst: +53.
- OD Serpent Lash poisoned burst: +71.
- Toxic Wreath: +40.
- Nightshade Chaser / projectile explosion family: around +42.
- OD Cruel Fate: +42.
- H Cruel Fate airborne hit: +41 family.
- OD Nightshade Pulse: +45 family.
- 2HP: +27.
- 2HK PC: +48.
- Qiong Qi: about +34 unpoisoned / +54 poisoned.
- forward throw: +19.
- back throw: +27.
- corner poison-puddle route: around +38.
- declared +18 -> 6HP active meaty: about Hit +6 / Block 0 family.

## 5. Anti-anchoring facts

- 2MK is +1 on block but only SA-cancelable in current frame data; do not inherit a generic 2MK DRC route.
- H Serpent Lash +44 is the stable ordinary state; poison burst changes the end state.
- M/H/OD poison-burst values require opponent_poisoned.
- Orchid Spring +38 requires corner / exact poison-puddle route.
- OD Nightshade Chaser block-poison does not apply through Drive Parry.
- 6HP active meaty requires exact +18 timing.
- safe jump after H Serpent Lash remains spacing/corner dependent.

## Phase C judgment

PASS. Current facts are sufficient for route compilation.
