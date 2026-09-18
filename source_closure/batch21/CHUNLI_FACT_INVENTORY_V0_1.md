# Chun-Li Fact Inventory v0.1

Status: PHASE C PASS  
Version: Year 4 / 2026-08-03  
Sources: SRC01 / SRC02 / SRC03 / SRC04 / SRC05 / SRC06

## 1. Complete baseline Normal table

| Input | Startup | Active | Recovery | Hit | Block | Cancel | Damage | Decision note |
|---|---:|---|---:|---:|---:|---|---:|---|
| 5LP | 4 | 4-6 | 7 | +5 | -3 | C | 300 | chain-cancelable |
| 5LK | 5 | 5-7 | 10 | +2 | -2 | C | 300 | close support |
| 5MP | 5 | 5-8 | 10 | +6 | +1 | C | 600 | core pressure/contact |
| 5MK | 7 | 7-10 | 16 | +4 | -2 | C | 500 | spacing/confirm |
| 5HP | 13 | 13-15 | 20 | +2 | -3 | Serenity Stream | 800 | stance-cancel owner |
| 5HK | 14 | 14-16 | 18 | +4 | 0 | Serenity Stream | 900 | airborne hit launch |
| 2LP | 4 | 4-6 | 7 | +4 | -2 | C | 300 | chain-cancelable |
| 2LK | 4 | 4-5 | 10 | 0 | -2 | C | 200 | fast low |
| 2MP | 6 | 6-9 | 13 | +4 | -2 | C | 600 | stable confirm |
| 2MK | 7 | 7-9 | 19 | -2 | -6 | C | 500 | low CDR starter |
| 2HP | 11 | 11-23 | 18 | +1 | -3 | C | 900 | first hit / stance route, anti-air launch |
| 2HK | 9 | 9-14 | 19 | KD | -9 | Serenity Stream | 900 | PC hard knockdown |
| j.LP | 4 | 4-13 | Landing 3 | - | - | - | 300 | air normal |
| j.LK | 4 | 4-11 | Landing 3 | - | - | - | 300 | air normal |
| j.MP | 7 | 7-21 | Landing 3 | - | - | C | 600 | airborne launch / air-route owner |
| j.MK | 6 | 6-10 | Landing 3 | - | - | - | 500 | cross-up |
| j.HP | 9 | 9-14 | Landing 3 | - | - | - | 800 | airborne launch |
| j.HK | 8 | 8-14 | Landing 3 | - | - | - | 800 | heavy jump-in |

Neutral-jump HK remains Reference and is not counted as an additional baseline row.

## 2. Decision-changing unique normals / stance facts

- 4/6MP Swift Thrust: 7F / Hit +2 / Block -3 / cancelable.
- 4HP Hakkei: 8F / Hit +5 / Block -1 / cancelable.
- 3HP Water Lotus Fist: 21F / Hit +2 / Block -3 / Serenity Stream cancelable.
- 6HK Yokusen Kick: 16F / Hit -1 / Block -4 / Serenity Stream cancelable; PC crumple.
- 3HK Falling Crane: 37F / Hit +7 / Block +3 / cross-up.
- Serenity Stream command: 214P.
- current Year4 stance can exit with Up or repeat stance input.
- stance Orchid Palm: 5F / Block -4 / cancelable.
- stance Snake Strike: 6F low / Block -15.
- stance Lotus Fist: 23F, overhead property when first hit whiffs, Block +1 CURRENT.
- stance Forward Strike: 8F low / Block -5 / cancelable.
- stance Senpu Kick: 10F low / Block -10 / cancelable.
- stance Tenku Kick: 8F launcher / Block -9 / jump-cancelable on hit.

## 3. Specials / charge truth

- Kikoken: charge projectile family. L/M/H Block -7/-7/-6; OD Block 0.
- Hundred Lightning Kicks: 236K family; current M/OD versions received forward-movement improvements.
- Spinning Bird Kick: down-up charge family. L/M/H/OD are very unsafe on block (-18/-17/-18/-12), so learner routes stay hit-confirmed.
- Hazanshu: 214K family; current L version Block -4, M -3, H -1.
- Tensho Kicks: 22K family. L/M/H startup 5/7/9F; OD 6F with early full invulnerability.
- current H Tensho has throw invulnerability on frames 8-9.

## 4. Current stable route / Oki facts

- 5MP > 2MP > M Spinning Bird Kick: stable starter, KD +34.
- M Spinning Bird Kick +34 -> forward dash -> +15.
- 2LK > 2LP > L Spinning Bird Kick: grounded KD +33.
- L/H grounded Spinning Bird Kick +33 -> dash -> +14 family.
- 2MK > CDR > 5MP > Hakkei > Serenity Stream / Forward Strike > M Spinning Bird Kick.
- 2HP > Serenity Stream / Forward Strike > M Spinning Bird Kick.
- H Tensho grounded hit: +37 -> dash +18 / Parry Drive Rush pressure family.
- corner H Tensho airborne hit: +35 -> stance Lotus Fist / immediate 2LK / throw family.
- corner M Spinning Bird Kick +34 -> 2MP whiff -> +11 -> Hakkei active-meaty family.
- exact +46 airborne route state -> 5F safe jump.
- exact +45 route state -> 6F safe jump with 5F reversal interaction boundary.
- corner forward throw: +11 -> throw-loop / immediate 2HP meaty family.

## 5. Anti-anchoring facts

- stance Lotus Fist Block +1 is not 3HP Water Lotus Fist, which remains Block -3.
- Serenity Stream charge-bypass routes do not make all SBK routes charge-free.
- raw/blocked Spinning Bird Kick is not a safe pressure tool.
- H Tensho grounded and airborne Oki states must remain separate.
- +45/+46 must carry exact-state conditions.
- S0 does not need the complete stance high/low tree.

## Phase C judgment

PASS. Current facts are sufficient for route compilation.
