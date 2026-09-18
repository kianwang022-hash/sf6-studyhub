# Terry Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | light low | 2LK > 2LP > M Burning Knuckle | carry + M BK Oki | verified route; KD advantage spacing-conditioned |
| R02 | light | 5LK > M Burning Knuckle | carry + M BK Oki | verified route; spacing-conditioned |
| R03 | light damage | 2LK > 2LP > H Rising Tackle | +27 | verified |
| R04 | 2MP basic | 2MP > 5LK > M Burning Knuckle | carry + Oki | verified route; spacing-conditioned |
| R05 | corner active-frame | 2MP > 5LK > L Power Charge active-frame > 2LP > 5LP > H Rising Tackle | about +7 active-frame family | conditioned: corner / active timing |
| R06 | Fire Kick basic | 2MK > 2HK Fire Kick > H Burning Knuckle | damage / H BK family | verified route; KD spacing-conditioned |
| R07 | Fire Kick alternative | Fire Kick > H Power Charge > delayed H Rising Tackle | damage / +27 | conditioned: delay timing |
| R08 | 2MK DRC | 2MK > CDR > 2HP > H Power Charge > delayed H Crack Shoot > Quick Burn | damage / route relay | conditioned: delay timing |
| R09 | 5MP DRC | 5MP > CDR > 2HP > H Power Charge > delayed H Crack Shoot > Quick Burn | damage / route relay | conditioned: delay timing |
| R10 | 5HP basic | 5HP hit 1 > H Power Charge > H Burning Knuckle | damage / H BK family | conditioned: first-hit confirm |
| R11 | 5HP meterless high | 5HP hit 1 > H Power Charge > delayed H Crack Shoot (3hit) > Quick Burn | high damage | conditioned: delay / hit count |
| R12 | 5HK PC | 5HK PC > 5HP hit 1 > H Power Charge > delayed H Crack Shoot > H Rising Tackle | high punish / +27 | conditioned: PC / delay |
| R13 | OD Power Charge easy | 2MP > OD Power Charge > H Burning Knuckle | OD route / H BK family | verified source route |
| R14 | OD Power Charge alt | OD Power Charge > H Crack Shoot > M Rising Tackle | special-cancel route / +25 | conditioned: OD route state |
| R15 | corner basic | 5HP hit 1 > H Power Charge > Round Wave > M Power Charge > H Rising Tackle | corner damage / +27 | conditioned: corner / first hit |
| R16 | corner jump-in | j.HK > 5HP hit 1 > H Power Charge > Round Wave > H Rising Tackle | corner route / +27 | conditioned: corner / first hit |
| R17 | SA1 corner | 5HP hit 1 > H Power Charge > Round Wave > SA1 > SA1 | 2x SA1 corner family | conditioned: corner / height |
| R18 | SA2 route | OD Quick Burn hit 2 > SA2 > Twin Geyser > Triple Geyser | 1600 ODQB + SA2 chain | conditioned: hit2 cancel / SA |
| R19 | blocked reversal midscreen | 2HP PC > H Power Charge > delayed H Crack Shoot > H Rising Tackle | stable high punish | conditioned: PC / delay |
| R20 | blocked reversal corner | 2HP PC > H Power Charge > Round Wave > M Power Charge > H Rising Tackle | corner high punish | conditioned: corner |
| R21 | DI easy | DI > 2HP > M Crack Shoot > H Rising Tackle | stable DI | verified source route |
| R22 | DI SA1 | DI > 2HP > M Crack Shoot > SA1 | SA1 cashout | verified source route |
| R23 | DI SA2 | DI > 2HP > M Power Charge > SA2 > Twin Geyser > Triple Geyser | SA2 cashout | conditioned: SA resources |

Backend conversion candidate count: **23**.

## Oki / setplay packages

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | M Burning Knuckle | forward dash | source spacing family reaches about +11; strike / throw / 2MP / shimmy | conditioned: BK spacing |
| P02 | corner forward throw +22 | forward dash 19F | +3 -> throw / 2MP / block / jump-read | conditioned: corner |
| P03 | corner forward throw +22 | Drive Rush 5HP | active-frame: hit +8 / block +5 | conditioned: active timing |
| P04 | corner M Burning Knuckle | 2MP whiff > 2MP | active-frame approx hit +7 / block +1 | conditioned |
| P05 | corner M Burning Knuckle | Round Wave meaty | block about +7 | conditioned: corner / meaty |
| P06 | corner ender | Round Wave meaty | block +5 family | conditioned: ender / spacing |
| P07 | H Power Charge > H Burning Knuckle | two forward dashes | point-blank +6 -> 2MP active meaty | conditioned: route spacing |
| P08 | H Burning Knuckle | 5LP whiff > H Burning Knuckle active | block +2 | conditioned: active timing |
| P09 | OD Quick Burn +33 | delayed walk / crouch timing | Year4 shimmy -> throw-tech whiff -> PC | conditioned: spacing/timing |
| P10 | H Crack Shoot +43 | corner follow-up | jump attack / low / throw | conditioned: corner / spacing |
| P11 | SA3 +22 | forward dash 19F | +3 / midscreen DR throw family | conditioned: spacing |
| P12 | CA +37 | forward dash > DR 2MP | approx hit +11 / block +5 | conditioned |

Shared package candidate count: **12**.

## Current-version corrections

- st.MP uses current 7F / Hit +2 / Block -3 and increased whiff-punish exposure.
- Round Wave uses current 29F / Hit +8 / Block +5.
- Quick Burn normal uses current Hit +3.
- OD Quick Burn uses current 1600 / +33 family.
- OD Power Charge current special-cancel property owns route truth.

## Phase E queue

1. Burning Knuckle +30…42 / +28…41 must retain spacing conditions.
2. Round Wave meaty packages require exact earned-time / active-frame condition.
3. R08/R09/R11/R12/R19 delayed Crack Shoot timing stays conditioned.
4. OD Quick Burn +33 shimmy requires actual spacing/timing closure.
5. SA2 chain is cashout, not an early starter tree.
