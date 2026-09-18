# M. Bison Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | State / end state | Verification |
|---|---|---|---|---|
| R01 | light charge | 2LK > 2LP > 5LP > L Psycho Crusher Attack | normal state / +24 | conditioned: back_charge_ready |
| R02 | light Mine plant | 2LP or 2LK > 5LK > L Backfist Combo | plant Mine / +21 | verified |
| R03 | medium Mine plant | 5MP > 2MP > M Backfist Combo | plant Mine / +20 | verified |
| R04 | medium resource | 5MP > 2MP > OD Double Knee Press > H Backfist Combo | plant Mine / +31 | verified |
| R05 | 2MP resource | 2MP > OD Double Knee Press > H Backfist Combo | plant Mine / +31 | verified |
| R06 | 2MK DRC | 2MK > CDR > 5MP > 2HP > H Backfist Combo | plant Mine / +31 | verified |
| R07 | Year4 5HP charge | 5HP > 5LP > L Psycho Crusher Attack | +24 / charge route | conditioned: back_charge_ready |
| R08 | Year4 5HP Mine plant | 5HP > 5LP > L Backfist Combo | plant Mine / +21 | verified |
| R09 | 5HK PC | 5HK PC > forward dash > 2HP > OD Double Knee Press > 6HP > L Psycho Crusher Attack | punish / charge cashout | conditioned: PC / back_charge_ready |
| R10 | jump resource | j.HK > 5HK > 2MP > OD Double Knee Press > H Backfist Combo | plant Mine / +31 | verified |
| R11 | jump charge | j.HK > 5HK > 2MP > M Psycho Crusher Attack | normal-state charge ender | conditioned: back_charge_ready |
| R12 | DI easy | DI PC > two forward dashes > 5MP / 6HP TC > L Backfist Combo | plant Mine | conditioned: DI PC / spacing |
| R13 | DI resource | DI PC > 5HK > 2MP > OD Double Knee Press > H Backfist Combo | plant Mine / +31 | verified |
| R14 | reversal punish | 5HK PC > forward dash > 2HP > OD Double Knee Press > 6HP > L Psycho Crusher Attack | stable punish | conditioned: PC / back_charge_ready |
| R15 | reversal lethal | 5HK PC > forward dash > 2HP > OD Double Knee Press > 5HP > SA3 | high resource / kill | conditioned: PC / resources |
| R16 | Mine L Backfist | Mine active -> L Backfist Combo hit/block | detonate Mine / +42 on hit / +9 block | conditioned: psycho_mine_active |
| R17 | Mine M Backfist | Mine active -> M Backfist Combo hit/block | detonate Mine / +42 / +9 | conditioned: psycho_mine_active |
| R18 | Mine H Backfist | Mine active -> H Backfist Combo hit/block | detonate Mine / +49 / +9 | conditioned: psycho_mine_active |
| R19 | Mine OD Backfist | Mine active -> OD Backfist Combo hit/block | detonate Mine / +48 / -3 | conditioned: psycho_mine_active / Drive |
| R20 | Mine L/M Crusher | Mine active -> L or M Psycho Crusher Attack | detonate Mine / +42 / block +6 | conditioned: psycho_mine_active / back_charge_ready |
| R21 | Mine H Crusher | Mine active -> H Psycho Crusher Attack | detonate Mine / +46 / block +5 | conditioned: psycho_mine_active / back_charge_ready |
| R22 | Mine OD Crusher | Mine active -> OD Psycho Crusher Attack | detonate Mine / up to +82 / block +10 | conditioned: psycho_mine_active / back_charge_ready / Drive |
| R23 | Mine OD Crusher extension | 2MP > OD Psycho Crusher Attack (Mine detonation) > Shadow Rise > OD Head Press > 6HP > L Psycho Crusher Attack > SA3 | high-damage state route | conditioned: psycho_mine_active / down_charge_ready / back_charge_ready / resources |
| R24 | corner Mine cash-in | 6HP active-frame > 2LP > 5LP > OD Psycho Crusher Attack > 6HP > L Backfist Combo | corner Mine cash-in / replant | conditioned: corner / psycho_mine_active / active_timing / back_charge_ready |
| R25 | corner Mine SA3 | 6HP active-frame > 2LP > 5LP > OD Psycho Crusher Attack > 6HP > L Psycho Crusher Attack > SA3 | corner cashout | conditioned: corner / psycho_mine_active / active_timing / resources |
| R26 | SA2 | 5MP > 2MP > OD Backfist Combo > SA2 | SA2 cashout | conditioned: Drive / SA |
| R27 | SA3 easy | 5MP > 2MP > M Backfist Combo > SA3 | Mine-plant route -> SA3 | verified route |
| R28 | SA3 high | 5MP > 2MP > CDR > 5MP > 2HP > CDR > 5HK > 4HK > H Psycho Crusher Attack > SA3 | high-resource charge route | conditioned: resources / back_charge_ready |

Backend conversion candidate count: **28**.

## Mine / Oki / pressure packages

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | H Backfist normal +31 | corner forward dash 19F > 4HK active meaty | approx hit +7 / block +4 | conditioned: corner / active_timing |
| P02 | H Backfist normal +31 | midscreen Drive Rush | DR low / 5MP / 6HP overhead / throw / shimmy | verified action structure |
| P03 | DR 5MP | direct contact | hit +10 / block +4 -> throw / frame trap / shimmy | verified |
| P04 | DR 2LK | direct contact | hit +8 / block +2 -> throw / 2MP / shimmy | verified |
| P05 | Mine L/M Backfist +42 | immediate forward jump HP | safe jump | conditioned: psycho_mine_active / Mine detonation end state |
| P06 | Mine M Crusher block | block +6 | throw / 4HK / 5MP / shimmy | conditioned: psycho_mine_active / back_charge_ready |
| P07 | Mine H Crusher block | block +5 | throw / 4HK / 5MP / shimmy | conditioned: psycho_mine_active / back_charge_ready |
| P08 | Mine OD Crusher block | block +10 | strong strike / throw / shimmy | conditioned: psycho_mine_active / back_charge_ready / Drive |
| P09 | 6HP overhead active-frame | meaty contact | approx +4~+5 more than raw state | conditioned: corner / active_timing |
| P10 | 4HK Evil Knee | block +1 | 2LP / throw / 4HK / Mine pressure | verified |
| P11 | 5HP Year4 | block +1 | 2LP / throw / Mine pressure | verified |
| P12 | Devil Reverse normal | height-conditioned block approx +2~+8 | throw / low / Mine threat | conditioned: landing_height |
| P13 | Mine Devil Reverse | Mine active -> Devil Reverse block | +22~+28 | conditioned: psycho_mine_active / landing_height |
| P14 | OD Devil Reverse | block +4~+9 | plus aerial pressure | conditioned: landing_height / Drive |
| P15 | Mine OD Devil Reverse | block +24 | extreme Mine pressure | conditioned: psycho_mine_active / Drive |
| P16 | OD Head Press | block +5~+7 / hit +27 | strike / throw / low after state | conditioned: landing_height / Drive |
| P17 | sweep +29 | forward dash 19F | +10 -> 4HK / throw / Mine replant | verified action structure |
| P18 | forward throw +21 | simple Oki | strike / throw / Mine threat by state | conditioned: spacing / Mine state |
| P19 | Mine timer | leave Mine active without immediate detonation | opponent must respect future detonation / self-detonation | conditioned: psycho_mine_active / timer |

Shared package candidate count: **19**.

## State truth

- Backfist hit plants Psycho Mine.
- Mine state is on the opponent; it persists for a limited timer.
- Mine-enhanced Backfist / Crusher / Devil Reverse are different moves for learner purposes.
- detonation consumes the Mine state.
- keeping Mine active can itself alter opponent decisions, so “do not detonate yet” is a real option.

## Phase E queue

1. Every Mine-enhanced learner route must have psycho_mine_active.
2. Normal Backfist / Crusher must remain explicitly unsafe on block.
3. P05 +42 must remain a Mine-detonation end state.
4. Devil Reverse values retain height.
5. R23-R25 are late because charge + Mine + resource state stack together.
