# Blanka Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | light | 5LK > 2LP > Electric Thunder | basic confirm / +39 | verified |
| R02 | low | 2LK > 2LP > Electric Thunder | low confirm / +39 | verified |
| R03 | light damage | 5LK > 5LK > M Rolling Attack | damage-focused route | verified; charge-ready |
| R04 | 4MK Thunder | 4MK > 5MK > Electric Thunder | +39 Oki | verified |
| R05 | 4MK Rolling | 4MK > 2MK > M Rolling Attack | damage/travel | conditioned: charge-ready |
| R06 | 2MP Thunder | 2MP > Electric Thunder | Oki focus / +39 | verified |
| R07 | 2MP Rolling | 2MP > M Rolling Attack | damage route | conditioned: charge-ready |
| R08 | 2MP CDR | 2MP > CDR > 5HK > 5HP > Coward Crouch > Wild Lift > M Vertical Rolling Attack | damage / +42 family | conditioned: charge-ready / route |
| R09 | 2MP CDR Oki | 2MP > CDR > 5HK > 5HP > Coward Crouch > Wild Lift > Amazon River Run | Oki-focused | verified route |
| R10 | 5HK basic | 5HK > 2LP > L Vertical Rolling Attack | anti-air/route / +35 | conditioned: charge-ready |
| R11 | DR overhead | DR > 6MP > 5HK > 2LP > L Vertical Rolling Attack | overhead / +35 | conditioned: charge-ready |
| R12 | lethal | DR 6MP > 5HK > 2LP > CDR > 5LK > 5MK > CDR > 5HK > 5HP > Wild Lift > M Rolling Attack > SA3 | lethal/resource route | conditioned: resources / charge |
| R13 | 5HK PC | 5HK PC > 5HP > Coward Crouch > Wild Lift > M Vertical Rolling Attack | PC punish / +42 | conditioned: PC / charge |
| R14 | 5HK PC Oki | 5HK PC > 5HP > Coward Crouch > Wild Lift > Amazon River Run | Oki focus | conditioned: PC |
| R15 | reversal punish | 5HK PC > 5HP > CDR x2 > Wild Lift > M Rolling Attack > SA3 | high-resource punish | conditioned: PC / resources |
| R16 | 6HP PC | 6HP PC > DR > 5HP > Coward Crouch > Wild Lift > Amazon River Run | grounded +37-ish route | conditioned: PC / route |
| R17 | H Rolling PC | H Rolling Attack PC > DR > Amazon River Run | Oki route | conditioned: PC / charge |
| R18 | corner H Rolling PC | H Rolling Attack PC > DR > 5HP > Coward Crouch > Wild Lift > SA3 | corner cashout | conditioned: corner / PC / SA |
| R19 | back-to-corner DI | DI counter state > Surprise Forward Hop > 5HP > Coward Crouch > Wild Lift > Amazon River Run | position recovery | conditioned: back-to-corner |
| R20 | corner Bomb | 5HP > Coward Crouch > Wild Lift > Blanka-chan Bomb | Bomb setplay | conditioned: corner / Bomb setup |
| R21 | corner damage | 5HP > Coward Crouch > Wild Lift > Electric Thunder > H Vertical Rolling Attack | corner damage / +42 family | conditioned: corner / charge |
| R22 | corner Bomb extension | 5HP > Wild Lift > Electric Thunder > OD Backstep Rolling Attack > Blanka-chan Bomb | Bomb + movement | conditioned: corner / resource / setup |
| R23 | DI | DI > 5HP > Electric Thunder > H Vertical Rolling Attack | +42 safe-jump family | conditioned: DI / charge |
| R24 | OD Thunder overhead | OD Electric Thunder > 6MP > hit 2 > backdash > H Backstep Rolling Attack > Electric Thunder > H Vertical Rolling Attack | overhead route -> +42 | conditioned: OD / timing / charge |
| R25 | OD Thunder low | OD Electric Thunder > 2MK > hit 2 > backdash > H Backstep Rolling Attack > Electric Thunder > H Vertical Rolling Attack | low route -> +42 | conditioned: OD / timing / charge |
| R26 | SA2 midscreen | 5HP > SA2 > 5HP > L Vertical Rolling Attack > Rolling Cannon > L Vertical Rolling Attack > delayed Rolling Cannon | Lightning Beast system route | conditioned: SA2 |
| R27 | SA2 corner | 2MP > OD Electric Thunder > SA2 > Electric Thunder > H Vertical Rolling Attack > Rolling Cannon > Blanka-chan Bomb | corner system route | conditioned: corner / SA2 / Bomb |
| R28 | reversal basic | 5HK PC > 5HP > Wild Lift > M Vertical Rolling Attack | stable punish | conditioned: PC / charge |
| R29 | reversal corner | 5HK PC > 5HP > OD Rolling Attack > H Vertical Rolling Attack > SA1 | corner punish | conditioned: corner / resource / SA |

Backend conversion candidate count: **29**.

## Oki / setplay candidates

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | Electric Thunder +39 | forward dash | +20 -> pressure | verified |
| P02 | Electric Thunder +39 | two forward dashes | +1 -> 5LK meaty | verified |
| P03 | Electric Thunder +39 | Surprise Forward Hop | +11 -> immediate 5HP meaty / throw | verified |
| P04 | corner Thunder +39 | 4MK whiff | +13 -> 4MK active meaty, approx hit +13 / block +7 | conditioned: corner / active timing |
| P05 | corner Thunder meaty | Electric Thunder meaty block | Blanka-chan Bomb +2 / charged jump-in / SA1 / PP read | conditioned: corner / meaty / Bomb setup |
| P06 | M Vertical Rolling +42 | immediate forward jump HK | safe jump | conditioned: exact +42 state |
| P07 | crHP PC +42 | two forward dashes -> +42 | forward jump HK safe jump | conditioned: PC / spacing |
| P08 | Amazon River Run grounded | +29 | DR 6MP overhead meaty | conditioned: grounded hit |
| P09 | Amazon River Run airborne | +35 -> dash +16 OR Hop +8 | meaty / throw / read | conditioned: airborne hit |
| P10 | Wild Lift -> L Vertical | +38 -> Hop +11 | 4MK active meaty OR L Rolling +7 | conditioned: route |
| P11 | Wild Lift -> M Vertical | +44 -> two dashes | +6 -> 2LP / throw / pressure | conditioned: route |
| P12 | forward throw +30 | Surprise Forward Hop | +3 -> throw / 5LK / DR 2MK / DR 6MK | verified package |
| P13 | OD Wild Hunt +64 | delayed pressure / meaty throw family | high Oki budget | conditioned: command-grab route |
| P14 | SA3 +50 | M Rolling Attack | +9 -> 4MK active meaty, block +3 | conditioned: SA3 / timing |
| P15 | Bomb route | Bomb activation via Electric Thunder | delayed object + body high/low/throw | conditioned: corner / Bomb placement / activation |
| P16 | OD Electric Thunder block | +4 | 6MP overhead / 2MK low / throw | verified frame state |
| P17 | Lightning Beast | SA2 active -> Rolling Cannon | rolling-system follow-ups | conditioned: SA2 active |
| P18 | Lightning Beast block string | H Rolling block -> Rolling Cannon x2 | second block +7 family | conditioned: SA2 / spacing |

Shared package candidate count: **18**.

## Charge / object truth

- Rolling Attack / Vertical Rolling require charge.
- Electric Thunder is the basic non-charge ender and Oki engine.
- Blanka-chan Bomb is a placed object whose attack is triggered through Thunder/related interactions; it is not automatic pressure.
- SA2 Lightning Beast changes Rolling-family behavior and enables Rolling Cannon follow-ups.

## Phase E queue

1. P06 +42 must retain exact M/H Vertical route state.
2. Bomb rows must keep corner/setup/activation truth.
3. P04/P05/P14 active-frame timing stays conditioned.
4. SA2 rows remain a late system layer.
5. Rolling Attack blocked-state risk must not be erased by mobility framing.
