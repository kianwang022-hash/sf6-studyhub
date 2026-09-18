# Sagat Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | light low | 2LK > 2LK > 5LP > M Tiger Uppercut | stable damage / +27 | verified |
| R02 | light pressure | 2LP > 5LP > L Tiger Nexus > Mighty Tiger | hit +3 continuation | verified |
| R03 | light branch | 2LK > 5LP > L Tiger Nexus > Greedy Tiger | Greedy Tiger knockdown family | verified |
| R04 | 5MP basic | 5MP > 2LP > M Tiger Uppercut | stable medium confirm / +27 | verified |
| R05 | point-blank 5MP | 5MP > 5MP > 5LP > M Tiger Uppercut | close confirm / +27 | conditioned: point-blank |
| R06 | 2MP basic | 2MP > M Tiger Nexus > Mighty Tiger | Year4 stable route / hit +3 continuation | verified |
| R07 | 2MP CDR stable | 2MP > CDR > 5MP > 4HP > H Tiger Knee Crush > L Tiger Uppercut | carry + Uppercut Oki | verified |
| R08 | 2MP CDR Oki focus | 2MP > CDR > 5MP > 5HK hit 1 > H Tiger Nexus > Nova Tiger > 6HK | carry + Oki focus | conditioned: hit-1 / route state |
| R09 | 5MP CH | 5MP CH > 4HP > H Tiger Knee Crush > L Tiger Uppercut | CH conversion / Oki | conditioned: CH |
| R10 | corner 5MP CH | 5MP CH > 2MP > H Tiger Uppercut | corner stable damage / +27 | conditioned: corner / CH |
| R11 | target combo | 5MK > 6HK | +38 | verified |
| R12 | 6HK hit | 6HK > 2MP > H Tiger Knee Crush | strong contact -> Knee Oki | verified |
| R13 | corner 6HK | 6HK > 2MP > OD Tiger Knee Crush > L Tiger Uppercut | corner high-value Oki | conditioned: corner |
| R14 | jump-in Oki | j.HP > 4HP > H Tiger Knee Crush > L Tiger Uppercut | high-value jump-in | verified |
| R15 | jump-in easy | j.HP > 2HP > H Tiger Uppercut | simple jump-in / +27 | verified |
| R16 | 6HK PC basic | 6HK PC > 4HP > M High Tiger Shot > 6HK > M Tiger Uppercut | Year4 PC route | conditioned: PC |
| R17 | 6HK PC high value | 6HK PC > 5HK hit 2 > OD Tiger Nexus > Greedy Tiger > 4HP > fully charged H Tiger Uppercut | high reward / charged Uppercut | conditioned: PC / hit-2 / charge |
| R18 | 2MP PC | 2MP PC > HP > H Tiger Uppercut | source route / 2700 note | provisional: source abbreviates HP input |
| R19 | 5LK PC | 5LK PC > CDR > 5MP > 4HP > H Tiger Knee Crush > L Tiger Uppercut | -7F punish family | conditioned: PC |
| R20 | blocked reversal | 6HK PC > 4HP > H Tiger Knee Crush > L Tiger Uppercut | stable big punish | verified route / PC |
| R21 | DI airborne conversion | DI PC > 4HP airborne hit > fully charged H Tiger Uppercut | charged Uppercut ender | provisional: source string contains omitted token before 4HP |
| R22 | DI grounded SA3 | DI PC > 4HP grounded hit > M High Tiger Shot > DR 2MP > CDR > 4HP > H Tiger Knee Crush > M Tiger Uppercut > SA3 | high-resource SA3 | conditioned: grounded DI PC / resources |
| R23 | corner basic | 4HP > M High Tiger Shot > 6HK > M Tiger Uppercut | corner stable route | conditioned: corner / delayed shot |
| R24 | corner DR overhead | DR 6MP > 2MP > OD Tiger Knee Crush > L Tiger Uppercut | corner overhead conversion | conditioned: corner |
| R25 | corner jump-in | j.HP > 2HP > OD Tiger Knee Crush > L Tiger Uppercut | corner high-value jump-in | conditioned: corner |
| R26 | SA1 | OD High Tiger Shot > SA1 | simple SA1 cashout | verified |
| R27 | SA2 forward variation | 5MP > 2LP > SA2 forward variation > DR 4HP > fully charged H Tiger Uppercut | SA2 route / post-SA extension | conditioned: SA2 variation / charge |

Backend conversion candidate count: **27**.

## Oki / setplay candidates

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | 5MK > 6HK TC | +38 -> H Tiger Knee Crush active-frame meaty | block about +4 -> 5MP / throw / shimmy | conditioned: active timing |
| P02 | 5HP > 6HK TC | +39 -> H Tiger Knee Crush active-frame meaty | block about +5 -> 5MP / throw / shimmy | conditioned |
| P03 | L Tiger Uppercut | +32 -> Drive Rush | DR 6MP / DR 2MK / DR 5MP / DR throw | verified package |
| P04 | corner L Tiger Uppercut | +32 -> 2MP whiff > 5MP active-frame | hit about +7 / block +3 | conditioned: corner / active timing |
| P05 | combo L Tiger Uppercut | +34 -> DR 6MP active-frame | hit about +9 / block +4 | conditioned: exact route / active timing |
| P06 | H Tiger Uppercut | +27 -> forward dash 23F | +4 -> 5MP / 2MK / throw | verified package |
| P07 | charged H Tiger Uppercut | +23 -> M Tiger Knee Crush meaty | block about +1…+2 | conditioned: spacing |
| P08 | L Tiger Knee Crush | +36 -> forward dash | +13 -> 2HP active-frame / DR 5MP / DR throw | conditioned: Knee spacing |
| P09 | corner L Tiger Knee | +36 -> 2MK whiff > 5MP active-frame | pressure family | conditioned: corner / spacing |
| P10 | M Tiger Knee | +39 -> forward dash | +16 -> 5HP active-frame | conditioned: spacing / active timing |
| P11 | corner M Tiger Knee | +39 -> 2HP whiff | +4 -> throw | conditioned: corner / spacing |
| P12 | H Tiger Knee | +41 -> 5LP whiff > 6MP active-frame | hit about +5 / block 0 | conditioned: exact +41 state |
| P13 | H Tiger Knee | +41 -> 5LP whiff > 5LP whiff > 2MK active-frame | hit about +7 / block 0 | conditioned |
| P14 | H Tiger Knee airborne hit | +42 -> forward jump HP | safe jump | conditioned: airborne-hit state |
| P15 | 6HK airborne hit / Nova family | +48 -> two forward dashes | +2 -> throw / M Tiger Knee | conditioned: airborne-hit route |
| P16 | forward throw | +21 | throw / L Tiger Knee / DR 2MK active-frame | conditioned: spacing / dash timing |
| P17 | 5MP block | +2 | 2LP / 5MP / 2MK / throw / walk-back shimmy | verified |
| P18 | 2MP CDR 5MP block | +6 | 5MP / delayed throw / 2MK / 5HK | verified |
| P19 | OD Tiger Nexus > Mighty Tiger block | -3 | turn generally ends; do not fake plus pressure | verified |

Shared package candidate count: **19**.

## Current-version corrections

- 2MP is 7F / Hit +4 / Block -1 / cancellable with current Year4 starter scaling.
- 5LK current hit advantage is 0.
- 5MK > 6HK target-combo second hit is current 16F and produces +38 after hit.
- OD Tiger Nexus > Mighty Tiger is current Block -3, not older -5.
- H Tiger Knee +42 safe jump is specifically an airborne-hit family, not a universal H Knee result.

## Phase E queue

1. R18 remains provisional until the abbreviated HP input is resolved.
2. R21 remains backend because the source string is incomplete before 4HP.
3. All Tiger Knee KD values retain spacing / airborne-hit conditions.
4. P01/P02/P04/P05/P08/P10/P12/P13/P16 active-frame or spacing packages remain conditioned.
5. P14 safe jump requires exact airborne-hit state.
