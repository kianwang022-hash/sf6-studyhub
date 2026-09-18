# Elena Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | light | 2LP x1-3 > L Spinning Scythe | +34 family | verified |
| R02 | light alt | 2LP x1-3 > 5LK > L Rhino Horn | stable low-load route | verified |
| R03 | light anti-air/damage | 2LP > 5LK > H Scratch Wheel | stable damage / anti-air-style ender | verified |
| R04 | low | 2MK > 2LP > L Spinning Scythe | +34 family | verified |
| R05 | medium target | 5MP > MP > M Rhino Horn | +39 family | verified |
| R06 | 5MK basic | 5MK > 2LP > 5LK > H Scratch Wheel | stable damage | verified |
| R07 | 5MK CH | 5MK CH > 5MK / HK > H Rhino Horn | CH -> higher-value end state | conditioned: CH |
| R08 | 5MK CH meter | 5MK CH > 5MK / HK > OD Spinning Scythe > Lynx Whirl > Harvest Circle > M Rhino Horn | meter / carry / Oki | conditioned: CH / OD / follow-up state |
| R09 | 2MK target | 2MK > HK > H Rhino Horn | +40 family | verified |
| R10 | 2MK meter | 2MK > HK > OD Rhino Horn > H Scratch Wheel | meter route | conditioned: OD / follow-up |
| R11 | 2MP CDR | 2MP > CDR > 5MK > 2HP > H Spinning Scythe > M Rhino Horn | corner carry + Rhino Oki | verified route; end-state spacing conditioned |
| R12 | 2MP CDR carry | 2MP > CDR > 5MK > 2HP > H Spinning Scythe > DR 2MP > H Rhino Horn | higher carry | conditioned: route spacing |
| R13 | Oki-focus meter | 2MK / medium starter > OD Spinning Scythe > DR 2MP > L Lynx Song > Harvest Circle | about +41 setup | conditioned: route / follow-up timing |
| R14 | 5HP target | 5HP > HP (Turning Tail) > H Scratch Wheel | target route / damage | verified |
| R15 | 5HP SA3 | 5HP > HP > SA3 | SA3 cashout | verified |
| R16 | 5HP SA1 | 5HP > HP > SA1 > H Scratch Wheel | SA1 + follow-up | verified source route |
| R17 | jump-in | j.HP > 2HP > H Spinning Scythe > M Rhino Horn | jump-in / carry / Oki | verified |
| R18 | anti-air OD | 2HP anti-air > OD Rhino Horn > SA2 | anti-air conversion | conditioned: anti-air height / SA |
| R19 | anti-air extended | 2HP > H Spinning Scythe > Rhino Horn > SA1 / SA2 / SA3 | anti-air cashout family | conditioned: airborne height / super choice |
| R20 | 5HK PC | 5HK PC > OD Rhino Horn > H Scratch Wheel | +53 starter -> punish | conditioned: PC |
| R21 | blocked reversal stable | 5MK PC > 2HP > H Spinning Scythe > M Rhino Horn | stable punish | verified source route |
| R22 | blocked reversal Lynx | 5MK PC > 2HP > Lynx Song > Harvest Circle > H Scratch Wheel | mix / Oki oriented punish | conditioned: follow-up timing |
| R23 | corner light | 2LK > 2LP > L Rhino Horn > M Scratch Wheel | corner stable | conditioned: corner |
| R24 | corner medium | 5MP > MP > M Rhino Horn > M Scratch Wheel | corner stable | conditioned: corner |
| R25 | corner 2MK | 2MK > HK > H Rhino Horn > M Scratch Wheel | corner low route | conditioned: corner |
| R26 | corner meter | 5MK / HK > OD Spinning Scythe > Lynx Whirl > Harvest Circle > L Scratch Wheel > H Scratch Wheel | corner meter chain | conditioned: corner / OD / follow-up |
| R27 | SA2 normal | confirmed starter > SA2 | damage branch / +25 after hit | conditioned: SA2 route |
| R28 | SA2 healing | confirmed starter > SA2 Healing variation | restore 1600 health + Drive; +1 Oki family in source | conditioned: SA2 healing input / state |
| R29 | SA3 | confirmed starter > SA3 | +24 end state | conditioned: starter / SA |

Backend conversion candidate count: **29**.

## Oki / mix candidates

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | L Spinning Scythe +34 | corner dash -> active 5HP | approx hit +5 / block +1 | conditioned: corner / active timing |
| P02 | L Spinning Scythe +34 | midscreen 2LP x2 whiff -> 2MK active | low meaty family | conditioned: midscreen / timing |
| P03 | M Spinning Scythe +42 | corner immediate j.HP | safe jump | conditioned: corner |
| P04 | M Spinning Scythe +42 | midscreen two dashes | +2 -> throw / 2LP / 2LK | verified action structure |
| P05 | M Rhino Horn +39 | L Lynx Song -> Mallet Smash active | approx hit +4 / block -1 | conditioned: grounded Rhino / timing |
| P06 | Leopard Snap +48 | forward dash -> DR -> throw / 2MK / strike | plus-state transition | conditioned: route / spacing |
| P07 | Harvest Circle +50 | Rhino Horn / Scratch Wheel / SA follow-ups | high-value route hub | conditioned: follow-up |
| P08 | Lynx Song mix | Mallet Smash overhead vs 2MK low vs throw vs Lynx Whirl shimmy | central mix hub | conditioned: earned setup |
| P09 | +41 route | OD Spinning Scythe > DR 2MP > L Lynx Song > Harvest Circle | +41 -> M Lynx Song active / dash +21 / 6F safe jump | conditioned: route / timing |
| P10 | airborne Spinning Scythe | Lynx Whirl follow-up | L +30 / M +22 / H +20 families | conditioned: airborne hit / follow-up |
| P11 | L Scratch Wheel +36 | corner 2LK whiff -> 6MK active overhead | approx hit +4 / block 0 | conditioned: corner / timing |
| P12 | L Scratch Wheel +36 | L Lynx Song -> 5MK active | approx hit +8 / block +4 | conditioned |
| P13 | forward throw +24 | corner dash 20F | +4 -> throw / 5MK / 2LP / shimmy | conditioned: corner |
| P14 | sweep +31 | dash 20F | +11 -> throw / 5MK / DR 2MK | verified package |
| P15 | 6HP TC +40 | whiff frame kill | +5~+8 -> throw / shimmy / strike | conditioned: exact whiff |
| P16 | SA1 +42 | corner immediate j.HP | safe jump | conditioned: corner |
| P17 | SA2 +25 | immediate DR 5HK | approx hit +9 / block +3 | conditioned |
| P18 | SA2 healing | post-variation state | source notes +1 Oki | conditioned: healing variation |
| P19 | SA3 +24 | immediate DR 5HK | approx hit +10 / block +2 | conditioned |

Shared package candidate count: **19**.

## Current-version corrections

- 2MK is 9F / Hit +4 / Block -3 and non-cancelable.
- 2HP anti-air conversion uses current Year 4 airborne-hit / cancel behavior.
- OD Spinning Scythe route stability is current-version evidence.
- SA2 healing variation restores health and Drive in the current version line.

## Phase E queue

1. P05 Rhino Horn -> Lynx Song -> Mallet Smash must keep grounded-Rhino setup condition.
2. P03 +42 safe jump is corner-only.
3. P09 +41 / 6F safe-jump package remains exact-route conditioned.
4. H/M/L Scratch Wheel Oki remains hit-height conditioned.
5. SA2 healing exact post-state remains conditioned; do not turn +1 into a universal rule.
