# JP Route Verification v0.1

Status: PHASE E PASS  
Sources: SRC03 / SRC04 / SRC05

## Verified ordinary routes

- R01 — 2LP > 5LP > L Stribog.
- R02 — 5MK > M Stribog.
- R03 — 2MP > 5LK > L Stribog.
- R17 — 5HK Block +2 -> 2LP.
- baseline L Stribog +38, M Stribog +42 and forward throw +23.

## Conditioned remote routes

- R04-R06 require declared spacing / contact state.
- R08 anti-air route requires airborne opponent state.
- R09 Triglav +44 and R10 OD Triglav +53 require the declared hit state.
- R11 L Torbalan +42-or-more requires grounded hit / spacing.
- R14 M Stribog +42 safe jump requires grounded exact state.
- R15 L Torbalan +42 safe jump requires grounded / spacing exact state.
- R16 active-meaty values require exact +42 predecessor state.

## Departure condition audit

- R12/O07 require 5HP airborne hit before Departure; about +15 belongs only to that portal setup.
- R13/O08 require 5HP airborne hit -> Triglav -> OD Departure; +4..+6 belongs only to the exact route and Drive state.
- R20-R24 require an active earned Departure state. They are not neutral defaults.
- portal-state normals retain their current special cancel properties; ordinary neutral versions must not inherit them.

## Defense / corner audit

- R25/R26 must use the current Year4 Amnesia aftermath. Older automatic throw/follow-up assumptions are blocked.
- R19/O10 forward throw +23 -> dash +1 is corner-only.
- R27 OD Torbalan +25 is OD / resource-specific.
- O13 active-meaty remote values require corner / exact timing.

## Super audit

- R28 SA2 Lovushka remains S4 / high-resource setplay.
- R29 SA3 +23 and R30 CA +44 require exact super end state before meaty follow-up.

## Conflicts / provisional

No blocker for learner defaults.

Matchup-specific projectile order, portal side-choice, character-specific active-frame interactions and deep Lovushka routes remain later-stage / Training Mode material.

## Phase E judgment

PASS.

No S0/S1 learner default depends on an unqualified provisional state.
