# Ingrid Route Verification v0.1

Status: PHASE E PASS  
Sources: SRC03 / SRC04 / SRC05

## Verified ordinary routes

- R01 — 2LK > 5LP > 5LK > M Sun Rise.
- R02 — 5MP > 5MK > M Sun Rise.
- R03 — 2MP > 5LK > M Sun Rise.
- baseline 5MP Block 0, 2MP Block -1 and current 5LK/5MK hit values.

## Sun Rise condition audit

- R01-R03 establish selected grounded M Sun Rise route families, but Oki advantage remains route/hit-height conditioned.
- O01-O04 use a declared current guide state around +38; they must not redefine all M Sun Rise as +38.
- O05 requires OD Sun Rise exact +40 state.
- O06 requires L Sun Rise exact +36 state.
- O07 requires H Sun Rise -> Solar Burst exact +50 state.
- R11/R12 H Sun Shot airborne conversions require airborne hit and current Year4 route.

## Stock verification

- O08 stock build requires safe_resource_window because one stock costs about 47F.
- R13/R14/O09 one-stock Sun Flare Lv2 requires stock_level_1.
- O10 Sun Flare Lv3 requires stock_level_2.
- R15/O11/O12 OD Sun Flare Lv3 requires stock_level_2 plus OD / Drive resource.
- O11 +9..+13 and O12 +87+ are high-stock exact-state values, never generic Sun Flare truth.

## Exact setplay audit

- O13 +44 requires 4MK>HP target-combo end state.
- O14 +45 requires 2HK Punish Counter.
- O15-O17 require corner forward-throw state.
- O03-O06 active-meaty numbers require exact whiff/timing sequence.
- Sun Shot active-meaty values are setup properties, not raw projectile block advantage.

## Provisional / backend-only

- R16 remains provisional/backend-only because the current source summary does not preserve one fully explicit max route string.
- character-specific Sun Rise height interactions remain Training Mode verification material.

## Phase E judgment

PASS.

No S0/S1 learner default depends on an unqualified provisional state.
