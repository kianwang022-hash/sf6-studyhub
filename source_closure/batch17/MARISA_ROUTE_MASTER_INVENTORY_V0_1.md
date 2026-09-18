# Marisa Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | light | 2LK or 2LP > 2LP > L Dimachaerus > 6P follow-up | +31 | verified |
| R02 | 5MP damage | 5MP > MP > M Gladius | stable damage | verified |
| R03 | 5MP Oki | 5MP > MP > M Dimachaerus > 6P follow-up | +36 | verified |
| R04 | 2MP basic | 2MP > M Gladius | stable damage | verified |
| R05 | 2MP CDR damage | 2MP > CDR > 5MK > 4HP > H Dimachaerus > 6P > H Gladius | high damage | verified |
| R06 | 2MP CDR safe-jump | 2MP > CDR > 5MK > 4HP > H Dimachaerus > 6P > DR > 2HP > H Phalanx | +42 | verified |
| R07 | 5MP safe-jump | 5MP > MP > OD Dimachaerus > 6P > DR > 4HP > H Phalanx | +42 | verified |
| R08 | 6HK/4HP starter | 6HK or 4HP > H Dimachaerus > 6P > H Gladius | high damage | verified |
| R09 | 5HK PC | 5HK PC > DR > 6HK > 6HK follow-up > M Dimachaerus > 6P > 2HK | punish / knockdown | conditioned: PC |
| R10 | blocked reversal max | fully charged 5HP PC > 6HK > CDR > 5MK > 4HP > CDR > 5HP > 5MP > MP > M Gladius > SA3 | max punish | conditioned: full charge / PC / resources |
| R11 | DR overhead | DR > 3HP > 2LP > 2LP > L Dimachaerus > 6P | overhead -> +31 | verified |
| R12 | 6MP CH | 6MP CH > 2LP > L Dimachaerus > 6P | CH -> +31 | conditioned: CH |
| R13 | 6MP PC | 6MP PC > HK follow-up > SA3 | PC cashout | conditioned: PC / SA |
| R14 | corner safe-jump | 5MP > MP > OD Dimachaerus > 6P > fully charged 4HP > L Phalanx | +42 | conditioned: corner / full charge |
| R15 | corner punish | fully charged 5HP PC > 6HK > OD Quadriga > 4HP > H Gladius | corner damage | conditioned: corner / PC / full charge |
| R16 | reversal stable | confirmed punish > Phalanx ender | +42 safe-jump family | conditioned: punish starter / route |
| R17 | SA3 extension | 6HK or 4HP > H Dimachaerus > 6P > H Gladius > SA3 | SA3 cashout | verified |

Backend conversion candidate count: **17**.

## Oki / respect packages

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | L Dimachaerus +31 | 5LP whiff > 6HK | active meaty; approx hit +7 / block +1 | conditioned: active timing |
| P02 | L Dimachaerus +31 | 5LP whiff > immediate Enfold | command-grab read | conditioned: opponent_respect |
| P03 | L Dimachaerus +31 | 2LP whiff > 6HK | Year4 active meaty; approx hit +7 / block +1 | conditioned: active timing |
| P04 | M Dimachaerus +36 | DR > 6HK | active meaty -> strike / throw | conditioned: active timing |
| P05 | Phalanx +42 | immediate forward jump HP/HK | safe jump | verified exact end state |
| P06 | Phalanx +42 | 4HP / immediate Enfold / 6HK | strike / grab / strike choice | conditioned: respect/read |
| P07 | corner L Dimachaerus +31 | 2MP whiff | 2LK / throw | conditioned: corner / spacing |
| P08 | corner +36 | 5LP whiff > fully charged 4HP | charged strike | conditioned: corner / full charge |
| P09 | corner +36 | 2MP whiff > immediate Enfold | command grab | conditioned: corner / opponent_respect |
| P10 | forward throw +23 | dash 22F | +1 -> 2LP / throw | verified package |
| P11 | forward throw +23 | DR > 5MK active | approx hit +10 / block +4 | conditioned: active timing |
| P12 | Enfold +18 | DR > Scutum | reversal-bait / delayed Enfold layer | conditioned: read / timing |
| P13 | fully charged jump attack | block | safe-jump / charged 4HP continuation | conditioned: setup |
| P14 | H Quadriga block | +1 | strike / Enfold | verified Year4 frame truth |
| P15 | burnout H Quadriga | approx +5 | strike / Enfold | conditioned: opponent burnout |

Shared package candidate count: **15**.

## Respect truth

- Enfold is 5F / 2500, but its value comes after strike/armor/charged pressure creates respect.
- charged st.HP / 4HP / Gladius require actual charge time.
- armor reduces some attack risk but does not erase whiff/punish risk.
- Phalanx +42 is the cleanest safe-jump family.
- L/M Dimachaerus +31/+36 are earlier, lower-cognitive-load Oki states.

## Phase E queue

1. P02/P09 Enfold must retain opponent-respect/setup truth.
2. P05 +42 stays tied to Phalanx ender.
3. charged rows require full-charge condition.
4. active-frame rows retain timing/corner state.
5. armor wording must not become “safe because armored.”
