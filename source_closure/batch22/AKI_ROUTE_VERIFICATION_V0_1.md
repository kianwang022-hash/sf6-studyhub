# A.K.I. Route Verification v0.1

Status: PHASE E PASS  
Sources: SRC03 / SRC05 / SRC06

## Verified ordinary routes

- R01 / R02 / R03 — stable non-poison starter routes into H Serpent Lash.
- R04 — 5MP -> Toxic Wreath with current +40 end state.
- O01 — ordinary H Serpent Lash +44 -> two 19F dashes -> about +6.
- baseline DR 2LK / DR 3MP / DR 2MK current frame values.

## Poison-conditioned route families

- R12 requires opponent_poisoned; poison burst changes the H Serpent Lash route before returning to +44.
- R13/R14 require opponent_poisoned; M Serpent Lash burst produces the +69 family and enables larger extension / corner puddle routing.
- R15/R16 require opponent_poisoned; H Serpent Lash burst changes the state to about +53.
- R17 requires opponent_poisoned; OD Serpent Lash burst creates about +71.
- R19 requires opponent_poisoned; Qiong Qi poisoned value is about +54 rather than the unpoisoned +34.
- all poison-burst numeric values must retain the poisoned-target qualifier.

## Year4-conditioned facts

- R10: 2HK PC current poison application.
- R18/R19: current Qiong Qi follow-up behavior.
- R22/O22: OD Nightshade Chaser ordinary block can apply poison; Drive Parry is an explicit exception.
- 6HP active-meaty families use the current 4F active window / -3 ordinary block frame truth.

## Setplay condition audit

- O03-O06 require exact predecessor states that normalize to +18 before 6HP.
- O07 requires spacing / screen-position / jump-target verification.
- O10-O12 require corner / Orchid Spring puddle setup.
- O12's +12 block family is active-frame setplay, not generic Nightshade Pulse advantage.
- O13/O14 split OD Cruel Fate hit +42 from block +2.
- O17/O18/O19 must never be shown without opponent_poisoned.

## Conflicts / provisional

No blocker for learner defaults.

Safe-jump spacing, airborne-height routes and character-specific puddle interactions remain conditioned / Training Mode verification material.

## Phase E judgment

PASS.

No S0/S1 learner default depends on an unqualified provisional route.
