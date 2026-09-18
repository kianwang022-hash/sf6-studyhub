# Lily Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | light basic | 2LK > 2LP > M Tomahawk Buster | stable low confirm | verified |
| R02 | light Windclad | 2LK > 2LP > 2LP > Windclad M Condor Spire | resource-backed entry / +49 | conditioned: windclad_stock |
| R03 | 2MK resource | 2MK > L Condor Wind | Year4 attack/stock decision | verified route; resource branch conditioned |
| R04 | 2HP Wind | 2HP > M Condor Wind | Windclad investment route | verified |
| R05 | 4HP Wind | 4HP > H Condor Wind | Windclad investment route | verified |
| R06 | CDR basic | 2HP / 4HP / 6HP > CDR > 4HP > 5MK > L Condor Spire | normal Spire route / +33 | verified |
| R07 | CDR Tomahawk | 2HP / 4HP / 6HP > CDR > 4HP > 5MK > H Tomahawk Buster | damage/anti-air ender family | verified |
| R08 | CDR Windclad | 2HP / 4HP / 6HP > CDR > 4HP > 5MK > Windclad H Condor Spire | +52 setplay | conditioned: windclad_stock |
| R09 | light resource extension | 2LK > 2LP > CDR > 5LP > 2HP > M Condor Spire | high-resource route | verified |
| R10 | light resource SA | 2LK > 2LP > CDR > 5LP > 2HP > M Condor Wind > SA3 | resource/cashout | conditioned: SA |
| R11 | 5HP PC | 5HP PC > 4HP > H Condor Wind | punish / Windclad investment | verified |
| R12 | DI PC | DI PC > jump 2HP > 6HP > H Condor Wind | punish / Windclad investment | verified |
| R13 | DI damage | DI PC > j.HK active > 6HP > spacing OD Condor Spire > SA1 | high-resource DI | conditioned: spacing / Drive / SA |
| R14 | corner high | 2HP > Windclad H Condor Spire > Windclad OD Tomahawk Buster > OD Condor Dive > SA1 or SA2 | corner resource route | conditioned: corner / windclad_stock / resources |
| R15 | point-blank punish | 5HP PC > H Mexican Typhoon | command-grab punish | conditioned: point_blank / PC |
| R16 | corner wall | DI wall splat > 4HP > H Condor Wind | Windclad investment | conditioned: corner |
| R17 | corner wall SA | DI wall splat > 4HP > OD Condor Wind > SA2 | SA cashout | conditioned: corner / resource |
| R18 | full-charge Wind | fully charged L Condor Wind > 2HP > H Condor Spire > OD Tomahawk > OD Condor Dive > SA1/SA2 | stock route / high resource | conditioned: full_charge / resources |
| R19 | Windclad air route | j.HK > 4HP > Windclad H Tomahawk > OD Tomahawk > OD Dive > SA2 | air/high-resource | conditioned: windclad_stock / resources |
| R20 | lethal | starter > CDR > 4HP > 5MK > CDR > 2HP > SA1/SA2/SA3 | lethal | conditioned: resources |

Backend conversion candidate count: **20**.

## Oki / stock / respect packages

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | M Condor Spire | forward dash | 2HP / L Mexican Typhoon / OD Mexican Typhoon | conditioned: hit / spacing |
| P02 | Windclad L Spire +47 | two forward dashes | +5 -> strike / Typhoon | conditioned: windclad_stock |
| P03 | Windclad M Spire +49 | two forward dashes | +7 -> strike / Typhoon | conditioned: windclad_stock |
| P04 | Windclad H Spire +52 | two forward dashes | +10 -> 2HP / Mexican Typhoon | conditioned: windclad_stock |
| P05 | Windclad OD Spire +56 | two forward dashes | +14 -> strike / Typhoon | conditioned: windclad_stock / Drive |
| P06 | Windclad Spire block | practical plus-entry state | strike vs Mexican Typhoon | conditioned: windclad_stock / spacing / active timing |
| P07 | Windclad H Spire +52 | delayed forward jump | safe jump | conditioned: windclad_stock / exact end state |
| P08 | 5HP PC route | Windclad L Tomahawk -> forward jump | midscreen safe jump | conditioned: windclad_stock / PC / spacing |
| P09 | corner Windclad H Spire | 5LK whiff > forward jump | safe jump | conditioned: corner / windclad_stock |
| P10 | DI corner Windclad H Spire | 2LP whiff > forward jump | safe jump | conditioned: corner / windclad_stock / DI |
| P11 | Mexican Typhoon +28 | immediate Windclad OD Spire | corner active-frame meaty | conditioned: corner / windclad_stock / active timing |
| P12 | SA1 +27 | forward dash 21F | +6 -> 2HP meaty / Windclad Spire | conditioned: corner / spacing |
| P13 | normal Spire family | +33/+37/+37/+43 | simple strike / throw Oki by version | conditioned: version / spacing |
| P14 | Windclad Spire family | +47/+49/+52/+56 | large Oki budget | conditioned: windclad_stock / version |
| P15 | Condor Wind charge | 46/71/90F hold | gain 1/2/3 Windclad stocks | conditioned: safe_resource_window |
| P16 | Windclad Spire on block | +1 normal / +2 OD frame truth | pressure remains plus | conditioned: windclad_stock |

Shared package candidate count: **16**.

## Resource / respect truth

- Windclad acquisition costs real time/space.
- normal Condor Spire is block -8; Windclad version becomes block +1, OD +2.
- current setplay after Windclad Spire explicitly becomes strike vs Mexican Typhoon.
- Mexican Typhoon is 5F high-reward command grab, but it is most credible after plus entry/respect.
- stock can be held for future entry; it should not be auto-spent.

## Phase E queue

1. every Windclad route keeps stock state.
2. P06 plus-entry setplay keeps spacing/active timing.
3. +52 safe jump keeps exact Windclad H Spire state.
4. Mexican Typhoon learner rows need respect/plus-entry truth unless used as point-blank punish.
5. stock-building rows keep opportunity-cost truth.
