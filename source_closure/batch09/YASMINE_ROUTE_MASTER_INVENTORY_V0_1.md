# Yasmine Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03 implementation version
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | State / end state | Verification |
|---|---|---|---|---|
| R01 | light normal state | 2LP > 5LP/LP TC > M Daloy ng Tubig > Alon | gain Bayani; +30 | verified |
| R02 | light Bayani state | 2LP > 5LP/LP > L Daloy ng Tubig > Boosted Alon | spend Bayani; +42 safe-jump family | conditioned: Bayani |
| R03 | 2MP basic | 2MP > H Daloy ng Tubig > Alon | gain Bayani; +44 | verified |
| R04 | 2MP Talim | 2MP > M Talim ng Hangin | +2 point-blank throw state; Bayani acquisition path | verified |
| R05 | 2MP OD Talim damage | 2MP > OD Talim ng Hangin > 5HP > H Lipad ng Agila | +20~21 | verified route |
| R06 | 2MP OD Talim Oki | 2MP > OD Talim ng Hangin > OD Daloy ng Tubig > Alon | +40 | conditioned: OD route |
| R07 | 2MK DRC | 2MK > CDR 2MP > 2HP > H Daloy ng Tubig > Alon | +44; gain Bayani | verified |
| R08 | 2MK DRC damage | 2MK > CDR 2MP > 2HP > H Talim ng Hangin | +37 | verified |
| R09 | Bayani high damage | 2MP > H Daloy ng Tubig > Boosted Alon > DR 2MP > H Talim ng Hangin > 5HP > H Lipad ng Agila | spend Bayani; 3135~3600 family | conditioned: Bayani |
| R10 | DR overhead normal | DR 6MP > 2MP > OD Talim ng Hangin > 5HP > H Lipad ng Agila | overhead conversion | verified source route |
| R11 | DR overhead Bayani | DR 6MP > 2MP > H Daloy ng Tubig > Boosted Alon > DR 2MP > H Talim ng Hangin > 5HP > H Lipad ng Agila | Bayani high damage | conditioned: Bayani |
| R12 | jump-in normal | j.HP > 2HP > H Daloy ng Tubig > Alon | +44; gain Bayani | verified |
| R13 | jump-in Talim | j.HP > 2HP > H Talim ng Hangin | +37 | verified |
| R14 | blocked reversal normal | 5HP PC > 2MP > OD Talim ng Hangin > 5HP > H Lipad ng Agila | punish | conditioned: PC |
| R15 | blocked reversal Bayani | 5HP PC > 2MP > H Daloy ng Tubig > Boosted Alon > DR 2MP > H Talim ng Hangin > 5HP > H Lipad ng Agila | high damage | conditioned: PC / Bayani |
| R16 | 5F punish | 5LK PC > M Daloy ng Tubig > Alon | +30; gain Bayani | verified |
| R17 | Drive Reversal punish basic | 2MP PC > 2MP > H Daloy ng Tubig > Alon | +44; gain Bayani | verified source route |
| R18 | Drive Reversal punish high | 2MP PC > 2HP > OD Pangil sa Likuran > 5LK > H Talim ng Hangin > 5HP > H Lipad ng Agila | high punish | conditioned: PC / OD |
| R19 | DI PC easy | DI PC > H Talim ng Hangin > 5HP > H Lipad ng Agila | 2980 | verified |
| R20 | DI PC extension | DI PC > j.HK > DR 2MP > H Talim ng Hangin > 5HP > H Lipad ng Agila | 3175 | conditioned: launch / DR |
| R21 | DI wall/state | DI > 2HP > M Talim ng Hangin > 5HP > H Lipad ng Agila | 2500 | verified source route |
| R22 | Pangil route | j.HK > 2HP > L Pangil sa Likuran > 2LP > H Talim ng Hangin > 5HP > H Lipad ng Agila | movement/setplay route | conditioned: jump / Pangil timing |
| R23 | corner Pangil Bayani loop | 5HP > H Pangil sa Likuran > 2MP > L Daloy ng Tubig > Alon > 2HP > L Daloy ng Tubig > Boosted Alon | acquire -> spend Bayani loop | conditioned: corner / Bayani timing |
| R24 | Mukha Ulan | Mukha ng Langit > Ulan > 2LP > L Daloy ng Tubig > Alon | cross-up route -> Bayani | conditioned: height / cross-up |
| R25 | Mukha Kulog | Mukha ng Langit > Kulog > 2LP > 5LP/LP > M Daloy ng Tubig > Alon | front-side route -> Bayani | conditioned: height / spacing |
| R26 | SA1 | confirmed starter > SA1 Hiwa ng Kalangitan | +24 approx | conditioned: starter |
| R27 | SA2 basic | 2LP > OD Daloy ng Tubig > Alon > SA2 > H Talim ng Hangin > 5HP > H Lipad ng Agila | persistent Bayani install | conditioned: SA2 |
| R28 | SA2 Boosted route | confirmed starter > OD Daloy ng Tubig > Boosted Alon during SA2 | +47 setplay | conditioned: SA2 / Bayani persistent |
| R29 | SA3 | confirmed starter > SA3 | +42 | conditioned: starter / SA |
| R30 | CA | confirmed starter > CA | +20 | conditioned: CA |

Backend conversion candidate count: **30**.

## State / Oki packages

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | M Daloy > Alon +30 | forward dash 19F | +11 -> throw / 2MP / shimmy | verified |
| P02 | H Daloy > Alon +44 | two forward dashes | +6 -> throw / 2MP / 2LK / shimmy | verified |
| P03 | H Daloy > Alon +44 | two dashes -> 2MP active | approx hit +5 / block +1 | conditioned: active timing |
| P04 | H Daloy > Alon +44 | two dashes -> 2LK active | approx hit +4 / block 0 | conditioned |
| P05 | H Daloy > Alon +44 | Kulog setup | block about +3 | conditioned: Mukha/Kulog timing |
| P06 | L Daloy > Alon +1 | immediate throw / 4F frame trap | close pressure | verified source package |
| P07 | L Daloy > Boosted Alon +42 | forward jump attack | safe jump | conditioned: Bayani |
| P08 | Boosted Alon +42 | forward dash -> 6MP active overhead | overhead vs throw vs low | conditioned: Bayani / timing |
| P09 | H Talim +37 | forward dash | +18 -> throw / shimmy / DR 2MP | verified package |
| P10 | M Talim +2 | point-blank | throw / 2LP / walk-back shimmy | verified |
| P11 | H Lipad +20~21 | corner 2LP whiff | +7 -> 2MP active | conditioned: corner / exact end state |
| P12 | forward throw +29 | dash 19F | +10 -> throw / 5MP / shimmy | conditioned: corner for loop |
| P13 | sweep +40 | two forward dashes | +2 -> strike / throw | verified package |
| P14 | OD Lipad +25 | dash 19F | +6 -> DR HK active / throw / strike | conditioned |
| P15 | Mukha Ulan/Kulog | height-dependent landing | Ulan block -4~-2; Kulog -3~+4; OD Kulog +1~+7 | conditioned: height |
| P16 | SA2 OD Boosted Alon +47 | dash 19F -> 2LP whiff x2 | +4 -> throw / shimmy / 2LK | conditioned: SA2 persistent state |
| P17 | SA2 Linya setup | hit1 whiff -> hit2 meaty | block about -3; active setup +1~+5 | conditioned: SA2 timing |
| P18 | SA3 +42 | forward jump attack OR dash -> DR 2MP | safe-jump / pressure family | conditioned: spacing |

Shared state/Oki candidate count: **18**.

## Bayani state truth

- normal Alon hit: acquisition route.
- Boosted Alon: requires Bayani outside SA2.
- Boosted Alon hit/block normally consumes Bayani.
- OD Boosted Alon hit can restore/re-acquire Bayani in current system.
- SA2 provides persistent Bayani for about 25 seconds, changing the normal acquire/consume cadence.

## Phase E queue

1. Keep all Boosted Alon rows explicitly conditioned on Bayani or SA2.
2. Do not universalize +42 safe jump beyond Boosted Alon state.
3. Mukha Ulan/Kulog advantage remains height-conditioned.
4. Pangil routes remain later because total action is 50F and setup-specific.
5. SA2 persistent state must be modeled as a system layer, not just one combo.
