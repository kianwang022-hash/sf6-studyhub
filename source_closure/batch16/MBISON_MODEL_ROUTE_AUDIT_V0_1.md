# M. Bison Character Model ↔ Route Audit v0.1

Status: **PHASE H PRE-AUDIT PASS**

## Claim 1 — Mine is a state-cycle, not passive bonus damage

Evidence:

- Backfist hit plants Mine.
- Mine-enhanced Backfist / Crusher / Devil Reverse have different frame states.
- Mine detonation consumes the opponent state.
- Current Game Plan repeatedly returns from Mine cash-in to normal Backfist planting later.

Judgment: **SUPPORTED**.

## Claim 2 — keeping Mine active is a real option

Evidence:

- Mine M Crusher changes from -20 to +6.
- Mine H Backfist changes from -15 to +9.
- Mine Devil Reverse can become +22~+28.
- therefore Mine presence itself changes which defense/punish the opponent can choose, even before detonation.

Judgment: **SUPPORTED**.

## Claim 3 — charge and Mine must be tracked simultaneously

Evidence:

- Psycho Crusher cash-in requires back charge.
- Shadow Rise / Devil Reverse routes require down-charge state.
- Backfist planting/cash-in does not require the same charge.
- the strongest Mine routes often stack state + charge + Drive/Super.

Judgment: **SUPPORTED**.

## S0 identity gate

Proposed S0:

- light -> L Backfist plant Mine.
- 5MP -> 2MP -> M Backfist plant Mine.
- one L Crusher charge route.
- st.HP / 4HK +1 basic pressure.
- explicit rule: Mine can remain active; S0 does not require detonation.

Question: is Bison recognizable without immediate Mine cash-in?

Judgment: **YES**. The opponent-state mechanic is already visible because normal routing changes what the next opening can mean.

## Transfer check

Transfers in:
- charge availability discipline.
- grounded contact / DRC / strike-throw-shimmy.
- punish / corner / Oki.

New:
- opponent-side Psycho Mine state.
- normal vs Mine-enhanced move truth.
- hold Mine vs detonate Mine.
- simultaneous Mine + charge tracking.
- state-aware air pressure.

Unlearn:
- move frame data is fixed regardless of opponent state.
- status should be spent immediately.
- charge is the only state that matters for charge characters.
- normal and Mine versions can share one learner row.

## Audit outcome

Character Model v0 survives current route/state evidence.

Proceed to learner assets with Mine planting in S0, first cash-in in S1, hold-vs-detonate decision in S2, and high-resource Mine/air routes later.
