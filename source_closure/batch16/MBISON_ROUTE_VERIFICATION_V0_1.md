# M. Bison Route Verification v0.1

Status: **PHASE E PASS WITH MINE / CHARGE / HEIGHT CONDITIONS**

## Verified core

- R01 light -> L Crusher route existence.
- R02 light -> L Backfist Mine plant.
- R03 medium -> M Backfist Mine plant.
- R04/R05 H Backfist +31 routes.
- R06 2MK DRC -> H Backfist +31.
- R07/R08 Year4 5HP conversions.
- R09/R14 punish routes.
- R10/R11 jump routes.
- R12/R13 DI routes.
- R16-R22 Mine-enhanced state facts.
- R26/R27 SA cashout.
- P02/P03/P04 normal-state DR pressure.
- P10/P11 Year4 +1 normals.
- P17 sweep dash +10.

## Conditioned

- all Psycho Crusher rows: back charge.
- Shadow Rise rows: down charge.
- all Mine cash-in: psycho_mine_active.
- P05 +42: Mine-detonation end state.
- P09 active-frame overhead: corner / exact timing.
- P12-P16 Devil Reverse / Head Press: height / landing state.
- R23-R25: Mine + charge + resources / corner.

## Backend / late

- OD Crusher +82 route before learner can track Mine + charge reliably.
- Devil Reverse Mine-pressure tree before S3.
- generic “Mine special is safe” wording.
- any Mine-enhanced value without Mine state.
- timer/setplay claims without actual Mine active state.

## Decision

Phase E passes. Bison can proceed to Pareto with normal Backfist Mine planting in S0, first Mine cash-in in S1, and high-resource Mine/air routes later.
