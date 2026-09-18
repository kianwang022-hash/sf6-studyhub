# Ken Route Verification v0.1

Status: **PHASE E PASS WITH CONDITIONED / PROVISIONAL EXCEPTIONS**

## Verification classes

- verified: current maintained source gives complete route and ordinary condition.
- conditioned: route exists, but position / hit state / active timing is part of truth.
- provisional: source string or numerical field is incomplete/approximate; backend only.

## Results

### Verified core

- R02 2MP > 5LK > H Shoryuken.
- R04 2LK > 2LP > 5LK > H Shoryuken.
- R05 2MK DRC easy -> Quick Dash Tatsu route.
- R06 Year4 2MK DRC carry route; corner-arrival continuation stays conditioned.
- R07 2MK DRC damage route; corner +33 continuation stays conditioned.
- R08 shimmy PC route.
- R09 blocked-reversal PC route.
- R10 high-value PC carry route; arrival continuation stays conditioned.
- R13 midscreen DI carry route.
- R18 5HK PC route.
- R22 Quick Dash Dragonlash -> SA3.
- R24 M Jinrai -> HK follow-up -> SA3.

### Conditioned but usable

- R01 jump-in Quick Dash Tatsu: corner-arrival / airborne-hit state matters.
- R03 point-blank 2MP route: point-blank condition is mandatory.
- R11 / R12 / R17: corner-only.
- R14: DI launch conversion.
- R15: back-to-corner position.
- R21 / R23: exact Shoryuken hit timing.
- P04 / P05 / P06 / P09: corner / arrival state.

### Keep out of default learner surface

- R16: source damage is approximate. Route may remain backend, value is not promoted.
- R19 / R20: branch naming needs official-input normalization before learner publication.
- P07 / P08: source itself flags active-frame / character-specific setup conditions. Do not promote as universal meaty until exact lab closure.

## Shared packages accepted for early learner use

- P01: H / Quick Dash Shoryuken +25 -> dash +6 -> strike / throw / shimmy.
- P03: midscreen forward throw -> Drive Rush 5MP pressure package, later than S0.

## Decision

Phase E does not block Pareto. Provisional items remain backend-only.
