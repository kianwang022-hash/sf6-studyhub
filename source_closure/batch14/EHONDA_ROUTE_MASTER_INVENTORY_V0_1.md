# E. Honda Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | light basic | 2LP or 2LK > 2LP > L Hundred Hand Slap | stable light confirm | verified |
| R02 | light Headbutt | 2LP > 2LP > M Sumo Headbutt | charge ender / position | conditioned: back_charge_ready |
| R03 | light Smash | 2LP > 2LP > H Sumo Smash | charge ender / +23 family | conditioned: down_charge_ready |
| R04 | 5MP basic | 5MP > Sumo Dash > Teppo Triple Slap | Year4 practical route / +42 first-hit family | verified route |
| R05 | 5MP CDR launcher | 5MP > CDR > 5MP > 5HP > Sumo Dash > Taiho Cannon Lift | launcher / +64 state | verified |
| R06 | Taiho -> Smash | 5MP > CDR > 5MP > 5HP > Taiho Cannon Lift > H Sumo Smash | +23 Oki family | verified |
| R07 | Taiho -> TC | 5MP > CDR > 5MP > 5HP > Taiho Cannon Lift > DR 5MP > 3HK > 2HK | TC / Sumo Spirit setup family | verified route |
| R08 | corner Taiho -> Headbutt | 5MP > CDR > 5MP > 5HP > Taiho Cannon Lift > [source omitted segment] > H Sumo Headbutt | +42-ish corner family | provisional: source omission |
| R09 | DI PC meterless | DI PC > 5HP > Taiho Cannon Lift > Sumo Smash | stable DI / +23 Oki | verified |
| R10 | DI PC OD | DI PC > 5HP > OD Taiho Cannon Lift > 5HK > Teppo Triple Slap first hit > SA1 | high-value DI / SA1 | conditioned: resource / first-hit timing |
| R11 | corner DI Year4 | DI PC or wall state > 5HP > Taiho Cannon Lift > [source omitted segment] | +42 safe-jump family | provisional: source omission |
| R12 | Sumo Spirit high-resource | Taiho Cannon Lift > DR 5HP > CDR > DR 5HK > CDR > Neko Damashi > [Sumo Spirit] M Hundred Hand Slap > H Sumo Headbutt > SA3 | stock/high-resource damage | conditioned: Sumo Spirit / resources |
| R13 | 6HK PC | 6HK PC > M Sumo Headbutt > forward dash | +4 after dash | verified |
| R14 | crHP SA1 | 2HP > SA1 | current Year4 SA cancel | verified |
| R15 | crHP SA2 | 2HP > SA2 | current Year4 SA cancel | verified |
| R16 | crHP SA3 | 2HP > SA3 | current Year4 SA cancel | verified |
| R17 | reversal punish stable | 5HP PC > Taiho Cannon Lift > Sumo Smash | meterless punish / +23 | verified |
| R18 | reversal punish corner | 5HP PC > Taiho Cannon Lift > [source omitted segment] | corner route | provisional: source omission |
| R19 | OD Teppo pressure route | OD Sumo Dash > OD Teppo Triple Slap first hit | block +3 point-blank | verified state |
| R20 | OD Headbutt pressure | OD Sumo Headbutt > 2LK x2 > 5MP | active-frame +4 block family | conditioned: exact hit state |
| R21 | OD Headbutt easy | OD Sumo Headbutt > 5MK | +7 family | conditioned: exact hit state |

Backend conversion candidate count: **21**.

## Oki / respect packages

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | Sumo Smash +23 | 2LP whiff | +7 -> H Oicho / 5HK / 5MP / normal throw | verified package |
| P02 | Sumo Smash +23 | forward dash 19F | +4 -> 2LP / normal throw / Oicho | verified |
| P03 | Sumo Smash +23 | DR 5MK | approx hit +11 / block +4 -> 5HK / Oicho / shimmy | conditioned: active timing |
| P04 | Teppo first hit +42 | immediate forward jump attack | safe jump | conditioned: exact first-hit state |
| P05 | current +40 corner family | 5LK whiff | active-frame hit +8 / block +2 -> 5HK | conditioned: corner / exact trigger |
| P06 | current +40 corner family | 5LK whiff > forward dash | +7 -> Oicho / strike | conditioned: corner / exact trigger |
| P07 | current +40 corner family | 2MK whiff > 5MP | active-frame hit +9 / block +4 | conditioned: corner / exact trigger |
| P08 | Teppo ender +41 | safe jump OR two dashes | two dashes +3 -> strike / Oicho | conditioned: exact ender |
| P09 | TC -> Sumo Spirit | +13 | 2HP / Neko Damashi / walk 5MP / throw / Oicho / shimmy | conditioned: Spirit state |
| P10 | DI +59 family | 2LP whiff | +42 -> safe jump | provisional: trigger route source incomplete |
| P11 | OD Headbutt | 2LK x2 > 5MP | 5MP active block +4 -> M Oicho / strike | conditioned: exact state |
| P12 | OD Headbutt | 5MK | +7 -> strike / Oicho | conditioned: exact state |
| P13 | OD Teppo first hit | block +3 point-blank | 2LP / Oicho | verified setup truth |
| P14 | 5MP block | +1 | 2LP / throw / spacing read | verified |
| P15 | Spirit Hands | L block 0 / OD block +1 | strike / Oicho / spacing | conditioned: Sumo Spirit |
| P16 | Oicho respect loop | meaty strike -> block -> Oicho | command-grab becomes credible after respect | verified strategic package |

Shared package candidate count: **16**.

## Charge / command-grab truth

- Headbutt / Sumo Smash require stored charge.
- Sumo Dash / Hands / Oicho do not use the same charge requirement, allowing Honda to keep playing while charge is unavailable.
- Oicho is 6F but **not guaranteed after knockdown**; its value comes from the opponent respecting strike/meaty.
- Sumo Spirit changes Hands block/hit properties and is a separate later state.

## Phase E queue

1. R08/R11/R18 remain backend because the current source omits route segments.
2. P04 +42 must retain Teppo-first-hit truth.
3. P05-P07 +40 corner packages require exact trigger state.
4. P11/P12 OD Headbutt follow-ups keep exact-state conditions.
5. Sumo Spirit pressure must retain state truth.
