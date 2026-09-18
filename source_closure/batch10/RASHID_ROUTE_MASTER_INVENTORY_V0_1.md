# Rashid Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | light basic | 2LK > 5LP > 5LP > M Spinning Mixer | +31 | verified |
| R02 | light carry | 5LP > 5LK > L Eagle Spike | corner carry | verified route; Oki spacing conditioned |
| R03 | 2MP | 2MP > 5LK > L Eagle Spike | meterless carry | conditioned: spacing |
| R04 | medium basic | 5MK > 5MP > M Eagle Spike | stable route / carry + Oki | verified route; Oki spacing conditioned |
| R05 | 2MK DRC | 2MK > CDR > 5MK > 5HP > M Eagle Spike | 3 Drive; carry + Oki | verified |
| R06 | 5HP DRC | 5HP > CDR > 2HP > 5HP > M Eagle Spike | 3 Drive; carry + Oki | verified |
| R07 | 5HP PC easy | 5HP PC > H Eagle Spike | high punish / large KD budget | verified |
| R08 | 5HK PC basic | 5HK PC > 6MP > L Eagle Spike | current PC route | verified |
| R09 | 5HK PC Air Current | 5HK PC > 6MP > OD Arabian Cyclone > Air Current Boosted M Spinning Mixer | create Air Current -> +42 | conditioned: PC / Air Current |
| R10 | 5HK PC SA | 5HK PC > 6MP > OD Arabian Cyclone > Air Current Boosted OD Spinning Mixer > M Arabian Skyhigh > j.2HP > SA1 | high-resource SA1 | conditioned: PC / Air Current / resources |
| R11 | DI PC carry | DI PC > j.HK > 5HK > 6MP > L Eagle Spike | carry | verified |
| R12 | DI PC Oki | DI PC > j.HK > 6MP > H Eagle Spike | larger Eagle Spike Oki | conditioned: spacing |
| R13 | jump-in high | jump attack > 5MK > 5MP/5HK TC > OD Arabian Cyclone > Tempest Moon | Air Current / route hub | conditioned: jump-in / OD route |
| R14 | Arabian Cyclone Oki | 5MP/5HK TC > H Arabian Cyclone > Wing Stroke > L Arabian Skyhigh | aerial Oki/mix route | conditioned: follow-up state |
| R15 | corner meter | 5MP/5HK TC > H Arabian Cyclone > Rolling Assault > H Spinning Mixer | corner meter route | conditioned: corner / branch |
| R16 | corner max | 5MK > 5MP/5HK TC > OD Arabian Cyclone > Air Current Boosted OD Spinning Mixer > OD Arabian Skyhigh > M Spinning Mixer > SA3 | high-resource corner | conditioned: corner / Air Current / resources |
| R17 | SA3 lethal | 5MK > 5MP > CDR > 2HP > 5HP > CDR > 2HP > 5HP > L Eagle Spike > SA3 | 6 Drive + 3 SA | conditioned: lethal/resources |
| R18 | blocked reversal | 5HP PC > CDR > 2HP > 5HP > M Eagle Spike | stable reversal punish | conditioned: PC / 3 Drive |
| R19 | blocked reversal lethal | 5HP PC > CDR > 2HP > 5HP > CDR > 2HP > 5HP > L Eagle Spike > SA3 | lethal punish | conditioned: resources |
| R20 | SA2 starter | 5MK > target route > OD Arabian Cyclone > 2LP whiff > M Eagle Spike > SA2 Ysaar | install/screen-control entry | conditioned: exact TC / SA2 |
| R21 | corner active setplay | 2HK PC > immediate OD Arabian Cyclone | Year4 active-frame meaty hub | conditioned: PC / exact timing |
| R22 | Nail/Rolling ender | Arabian Cyclone branch > Nail Assault / Rolling Assault | +44 family | conditioned: branch state |

Backend conversion candidate count: **22**.

## Oki / re-entry packages

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | M Spinning Mixer +31 | immediate Drive Rush | basic strike / throw / shimmy | verified |
| P02 | M Eagle Spike | Run > active cr.MP | cr.MP -> 5MP -> M Eagle Spike loop | conditioned: Eagle Spike spacing |
| P03 | M Eagle Spike | Run > cr.MP > 5LK > L Eagle Spike | carry re-entry | conditioned: spacing |
| P04 | M Eagle Spike | Run -> throw | simple throw branch | conditioned: spacing |
| P05 | corner M Eagle Spike | 5MK whiff > forward dash | about point-blank +5 -> throw / 2LK / 6HP active overhead | conditioned: corner / spacing |
| P06 | M Eagle Spike | 5MK whiff > 6HP active overhead | hit -> light confirm | conditioned: active timing |
| P07 | H Eagle Spike | 5LP whiff > forward jump HK | jump-in / safe-ish setplay | conditioned: spacing / route |
| P08 | H Arabian Cyclone route | Wing Stroke > L Arabian Skyhigh -> forward dash | +5 -> 6HP overhead / throw / 2LK | conditioned: follow-up |
| P09 | Boosted M Mixer +42 | forward jump attack | safe-jump family | conditioned: Air Current |
| P10 | Boosted OD Mixer +42 | forward jump attack | safe-jump family | conditioned: Air Current |
| P11 | forward throw +27 | forward dash 18F | +9 -> DR strike / DR throw / read | conditioned: spacing |
| P12 | Nail/Rolling +44 | jump-in / throw / overhead | high Oki budget | conditioned: branch |
| P13 | 5MP block +1 | 4F / throw / delayed strike | basic close respect | verified |
| P14 | 2MP block +1 | 4F / throw / delayed strike | basic close respect | verified |
| P15 | Air Current L Mixer block +2 | strike / throw | boosted pressure truth | conditioned: Air Current |
| P16 | OD Arabian Cyclone Year4 meaty | +47…51 state -> immediate OD Cyclone | throw / strike / OD Mixer branch | conditioned: exact end-state / active timing |
| P17 | SA2 Ysaar | Ysaar screen -> 6HP overhead / 2MK low / throw | persistent screen-control mix | conditioned: SA2 active |

Shared package candidate count: **17**.

## State truth

- normal M Spinning Mixer is +31 ender; Boosted M Mixer becomes a +42 family only under Air Current.
- Eagle Spike Oki is spacing-dependent; M/H have large but variable KD budgets.
- Arabian Cyclone generates/uses movement branches and can create Air Current-related routes.
- Ysaar is a late screen-control system, not a normal combo ender.

## Phase E queue

1. P02-P07 Eagle Spike setplay must retain spacing.
2. P09/P10 +42 requires Air Current.
3. P16 OD Arabian Cyclone active-frame setup remains exact-state conditioned.
4. SA2 Ysaar must be modeled as a system layer rather than a single combo.
5. ambiguous translated target-combo tokens stay descriptive/backend unless exact input is closed.
