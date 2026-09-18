# Juri Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Resource / end state | Verification |
|---|---|---|---|---|
| R01 | jump-in | j.HP > 5MP > 2MP > M Fuhajin | gain 1 stock -> Oki | verified |
| R02 | medium basic | 5MP > 2MP > M Fuhajin | gain 1 stock -> Oki | verified |
| R03 | light low | 2LK > 2LP > 2LP > M Fuhajin | gain 1 stock -> Oki | verified |
| R04 | 2MK DRC | 2MK > DRC > 5MP > 2MP > M Fuhajin | 3 Drive; gain 1 stock | verified |
| R05 | shimmy MP | walk back > 5MP > 2MP > M Fuhajin | gain 1 stock | verified source family |
| R06 | shimmy HP | walk back > 5HP > 2MP > M Fuhajin | gain 1 stock | conditioned: spacing |
| R07 | blocked reversal high | Raw DR > 6HP PC > 2HP > H Fuhajin > H Tensenrin | gain stock -> Tensenrin Oki | conditioned: PC / DR |
| R08 | blocked reversal meterless | 6HP PC > 2HP > H Fuhajin > H Tensenrin | gain stock -> Tensenrin Oki | verified source route |
| R09 | Drive Reversal punish easy | 2MP PC > M Fuhajin | gain 1 stock -> Oki | verified |
| R10 | Drive Reversal punish high | 2MP PC > H Fuhajin > H Tensenrin | gain stock -> stronger Oki | verified source route |
| R11 | corner DI wall splat | DI wall splat > 6HP > 2HP > H Fuhajin > H Tensenrin | corner Tensenrin Oki | conditioned: corner wall splat |
| R12 | midscreen DI PC high | DI PC > 6HP > 2HP > H Fuhajin > H Tensenrin | Tensenrin Oki | verified source route |
| R13 | midscreen DI PC easy | DI PC > 5MP > 2MP > M Fuhajin | gain 1 stock -> Oki | verified |
| R14 | back-to-corner DI PC | DI PC > j.HP > 5MP > 2MP > M Fuhajin | recover position + stock | conditioned: back-to-corner |
| R15 | one-stock spend | 5MP > 2MP > Go Ohsatsu | spend stock for route value | conditioned: stock >= 1 |
| R16 | OD Fuhajin simple | 5MP > 2MP > OD Fuhajin > 6MP > H Tensenrin | Drive route -> Tensenrin Oki | verified source route |
| R17 | OD Fuhajin stock branch | 5MP > 2MP > OD Fuhajin > 6MP > Go Ohsatsu > Ankensatsu | stock-spend route | conditioned: stock state / follow-up resources |
| R18 | three-stock chain | 5MP > 2MP > Go Ohsatsu hit 1 > Saihasho > Ankensatsu > 6MP > M Fuhajin | spend multiple stock -> regain 1 stock | conditioned: 3-stock state / hit timing |
| R19 | three-stock damage | 5MP > 2MP > Go Ohsatsu hit 1 > Saihasho > Ankensatsu > 6MP > H Tensenrin | spend multiple stock -> damage/Oki | conditioned: 3-stock state / hit timing |
| R20 | 5HK PC | 5HK PC > 6HP > 2HP > H Fuhajin > H Tensenrin | PC punish -> stock + Oki | conditioned: PC |
| R21 | SA3 DRC | DRC > 2HP > 5MP > 2MP > Go Ohsatsu > SA3 | stock-spend -> SA3 | conditioned: stock / Drive / SA |
| R22 | SA3 punish | 6HP PC > 2HP > H Fuhajin > SA3 | stock gain -> SA3 | conditioned: PC / SA |

Backend conversion candidate count: **22**.

## Oki / resource-loop candidates

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | M Fuhajin | gain 1 stock -> forward dash | 5MP / 2MP / throw / walk-back shimmy | verified action structure |
| P02 | Go Ohsatsu stock spend | spend stock -> L Fuhajin | regain 1 stock -> forward -> strike / throw | conditioned: stock state |
| P03 | H Tensenrin midscreen | recover by hit height / spacing | 2MP / 5MP meaty OR dash strike / throw | conditioned: hit height / spacing |
| P04 | corner H Tensenrin | H Tensenrin -> 5MP | current Year4 about +5 family -> throw / 2MP / shimmy / overhead | conditioned: corner / hit state |
| P05 | corner forward throw | forward throw -> dash | strike / throw / shimmy | conditioned: corner |
| P06 | stock-building Oki | spacing permits -> L Fuhajin | gain stock while preserving next decision | conditioned: spacing / safety window |
| P07 | corner M Fuhajin | M Fuhajin -> 5LK x2 | throw / 5MP / overhead | conditioned: corner / timing |
| P08 | OD Fuhajin route end | OD route -> H Tensenrin | return to Tensenrin Oki family | conditioned by route / hit height |
| P09 | Feng Shui Engine | SA2 activation | altered cancel/pressure system | late-stage system; not a normal Oki package |

Shared package candidate count: **9**.

## Resource truth

- Basic M Fuhajin routes **gain stock and still lead into Oki**.
- This is not a Jamie-style mandatory sacrifice of the current turn.
- Boosted Saihasho / Ankensatsu / Go Ohsatsu require stock-state truth.
- A stock-spend route is valuable only if its damage/carry/pressure gain is worth reducing future option space.
- Routes that spend stock and then route into L/M Fuhajin may re-enter the stock loop.

## Backend / provisional

- SA1 source uses an ambiguous "low variation" token; do not reconstruct the exact route from memory.
- Feng Shui Engine is a system layer, not one fixed combo route.
- exact midscreen H Tensenrin frame/Oki is hit-height and spacing conditioned.
- boosted-special variants are never stockless learner defaults.
