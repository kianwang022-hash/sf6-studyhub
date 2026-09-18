# Guile Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03
Primary source: SRC05

## Conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | light | 2LK > 2LP > H Somersault Kick | stable knockdown | verified; charge-ready required |
| R02 | light extended | 2LK > 2LP > 5LK > H Somersault Kick | stable knockdown | verified; charge-ready required |
| R03 | 5MP basic | 5MP > 2MP > H Somersault Kick | stable medium confirm | verified; route charge timing required |
| R04 | 5MP back-normal | 5MP > 4HP > H Somersault Kick | charge-compatible route | verified |
| R05 | 2MP basic | 2MP > H Somersault Kick | simple punish/confirm | verified |
| R06 | 2HP cancel route | 2HP > H Somersault Kick | Year4 current cancel route | verified |
| R07 | DR 5MP stable | DR > 5MP > 2HP > H Somersault Kick | stable DR route | verified |
| R08 | DR 5MP damage | DR > 5MP > 5MP > 2MP > H Somersault Kick | damage route | verified |
| R09 | DR overhead | DR > 6MP > 2MP > H Somersault Kick | overhead conversion | verified |
| R10 | 5HP PC | 5HP PC > 5MP > 4HP > H Somersault Kick | stable punish | verified |
| R11 | 6HP PC | 6HP PC > 5MP > 2MP > H Somersault Kick | stable punish | verified |
| R12 | sweep PC | 2HK PC > 3HK > H Somersault Kick | PC route | conditioned: first-hit PC state |
| R13 | corner stable | 6HP PC > 5MP > 4HP > L Sonic Blade > H Somersault Kick | corner route | conditioned: corner |
| R14 | corner OD Blade | 6HP PC > 5HP > OD Sonic Blade > Sonic Cross > H Somersault Kick | Year4 OD Blade route | conditioned: corner / resource |
| R15 | midscreen Boom route | 6HP PC > 2MP > L Sonic Boom > 2LP > H Somersault Kick | projectile route | conditioned: charge/timing |
| R16 | corner jump-in Boom route | j.HP > 2HP > L Sonic Boom > 2LP > 5LK > H Somersault Kick | corner route | conditioned: corner / charge |
| R17 | delayed Boom loop | 5MP > 2MP > delayed L Sonic Boom > 2MP > delayed L Sonic Boom > 3HK > H Somersault Kick | high-execution route | conditioned: delay / charge / active timing |
| R18 | SA3 basic | 2MP > H Somersault Kick > SA3 | SA3 cashout | verified |
| R19 | SA3 easy | 5MP > 4HP > SA3 | easy SA3 | verified |
| R20 | SA1 current route | 5MP > 4HP > HP-version SA1 | Year4 SA1 route | conditioned: SA1 version |
| R21 | SA1 OD extension | 5MP > 4HP > HP-version SA1 > OD Somersault Kick | SA1 + OD extension | conditioned: SA1 version / resource |
| R22 | SA2 easy | 5HK > SA2 > OD Sonic Break | Solid Puncher route | provisional: current source string is terse; backend until input sequence is normalized |
| R23 | reversal punish stable | 5HP PC > 5MP > 4HP > H Somersault Kick | stable punish | verified |
| R24 | reversal punish lethal | 5HP PC > 5HP > CDR > 5HK > 2MP > H Somersault Kick > SA3 | lethal / high resource | conditioned: resources / kill range |

Backend conversion candidate count: **24**.

## Oki / space-control packages

| ID | Trigger | Setup | Result | Verification |
|---|---|---|---|---|
| P01 | H Somersault midscreen | H Somersault -> L Sonic Blade | stable space-reset / Cross / anti-air layer | conditioned: spacing/timing |
| P02 | H Somersault midscreen | H Somersault -> H Sonic Blade | Sonic Cross / anti-air / jump check | conditioned: spacing |
| P03 | corner H Somersault | 3HK whiff | +4 -> throw / strike / walk-back shimmy | verified corner package |
| P04 | corner H Somersault | H Sonic Blade meaty | strike / throw / shimmy / Sonic Cross | conditioned: corner / active timing |
| P05 | OD Sonic Blade | block +1 | 2LP / Sonic Cross / throw / reset | verified Year4 frame truth; spacing-conditioned use |
| P06 | corner H Somersault | 5LK whiff > 6MP active overhead | overhead vs throw | conditioned: corner / active timing |
| P07 | M Somersault | Drive Rush | DR 2MP / DR 6MP / DR throw | verified action structure |
| P08 | forward throw +15 | meterless/DR follow-up | throw loop / DR throw / DR strike | conditioned: spacing / opponent reversal |
| P09 | HP-version SA1 +70 | two forward dashes -> +28 | Sonic Blade / DR / meaty | conditioned: SA1 version / spacing |
| P10 | H Somersault special hit state | immediate forward jump attack | about +42 safe jump | conditioned: hit height |
| P11 | 4HP CDR | 5MP block | point-blank +4 -> throw / 5MP frame trap / shimmy | verified |
| P12 | 6HP block | direct +3 | 2LP / 5MP / throw | verified; spacing/opponent state may matter |
| P13 | H Somersault common family | +39…41 | Blade / reset / pressure by position | conditioned: hit height / spacing |
| P14 | L/M/H Somersault generic families | +36 / +37 / +37 | route-dependent Oki budget | conditioned: exact hit state |

Shared package candidate count: **14**.

## Charge truth

- Every Boom / Somersault route has a charge-availability requirement.
- Charge should be preserved during compatible movement/blocking/normals; it is not a separate waiting phase.
- Learner routes must not imply Flash Kick is available after arbitrary movement that released down charge.
- “Perfect timing” Boom/Somersault variants are execution optimization, not S0 requirements.

## Phase E queue

1. P10 +42 remains hit-height-specific.
2. P01/P02/P04 Blade/Cross layers keep spacing/timing truth.
3. R17 delayed-Boom route remains backend until exact learner value justifies it.
4. R22 Solid Puncher route remains provisional until terse current source input is normalized.
5. charge-preservation language must survive learner projection.
