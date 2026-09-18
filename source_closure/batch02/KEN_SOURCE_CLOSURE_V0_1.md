# Ken Source Closure v0.1

Status: **PHASE A CLOSED -> READY FOR CHARACTER MODEL v0**
Character: **KEN**
Batch: **Batch02 / Standard-character bridge**
Checked through: **2026-09-18**
Control assumption: **Classic**

## 1. Version boundary

- Current learner boundary: **Year 4 / 2026-08-03 battle balance update**.
- Maintained combo / Oki source: **updated 2026-08-31**.
- Frame / move sources re-checked on **2026-09-18**.
- No older route is promoted merely because it exists in legacy material.

## 2. Source closure judgment

Required source classes are present:

- Tier 0 official frame / current balance boundary.
- Tier 1 current frame, move, combo and Oki references.
- Tier 2 current expert material is **USED** for strategic interpretation and setplay, not as a quota.

No blocking source category is missing for building Character Model v0 and the backend route inventory.

## 3. Baseline move coverage

### Normal table

Role baseline should contain the standard **18 normals**:

- 6 standing
- 6 crouching
- 6 jumping

Neutral Jumping Heavy Kick is retained as an additional character move outside the 18-row baseline rather than silently inflating the standard table.

### Character-specific / command tools closed

Current sources cover at minimum:

- Quick Dash
- Emergency Stop
- Thunder Kick
- Forward Step Kick
- Chin Buster / Triple Flash Kicks
- Hadoken
- Shoryuken
- Tatsumaki Senpu-kyaku
- Dragonlash Kick
- Jinrai Kick + follow-ups
- SA1 / SA2 / SA3 / CA

## 4. Year 4 facts that materially change decisions

These are source facts, not yet the final Character Model:

- 2MP damage **700 -> 600**, hit advantage **+3 -> +5**, with reduced hitback.
- The new 2MP +5 state supports ordinary hit routes such as 2MP > 5LK > H Shoryuken; point-blank routes can reach stronger follow-ups.
- Quick Dash -> Forward Step Kick startup changed **10F -> 8F**, hit advantage **+3 -> +1**, with reduced guard pushback and more whiff/armor-hit recovery.
- Drive Rush 5MP retains forward momentum longer, increasing its value as a close-range entry into low / throw / strike choices.

Do not carry pre-2026-08-03 assumptions about Forward Step Kick counter-hit reward into the learner model without the new condition.

## 5. Route / opportunity coverage present

The current source pool closes candidate evidence for:

- jump-in
- basic grounded confirm
- light confirm
- 2MK -> Cancel Drive Rush
- midscreen shimmy / Punish Counter
- blocked reversal punish
- Drive Reversal punish
- midscreen / corner DI
- corner carry
- corner throw loop
- H / Quick-Dash Shoryuken knockdown
- Quick-Dash Tatsumaki carry ender
- Jinrai branches
- SA1 / SA2 / SA3 conversion
- lethal / resource routes
- Oki and corner setplay

## 6. High-leverage current numbers to carry into verification

These numbers are candidates for later learner promotion, not automatically UI content:

- H Shoryuken / Quick-Dash Shoryuken family: **+25**, then forward dash -> **+6**.
- Corner M Shoryuken family: **+33**, with 2MK whiff frame-kill -> **+5** candidate.
- OD Shoryuken: **+22**, forward dash -> **+3**.
- Corner forward throw: **+20**.
- H Dragonlash Kick: **+1 on block** in current frame data.
- 2MP: **+5 on hit / 0 on block**.

All spacing-, height-, active-frame- and corner-sensitive setups remain conditioned until the route audit declares their exact condition.

## 7. Evidence pattern already visible

The route pool repeatedly produces this structure:

ordinary grounded contact -> stable conversion -> carry / knockdown -> dash or corner setplay -> strike / throw / shimmy

Quick Dash and route-end choice amplify that loop, especially by converting ordinary confirms into corner travel or favorable re-entry.

This is **evidence for Phase B**, not yet the frozen learner Character Model.

## 8. Open items carried forward

Not blocked, but must be decided later:

1. Which Quick Dash branches are actually S0/S1 rather than backend-only optimization.
2. Which Jinrai follow-ups survive Pareto pruning as distinct-value learner choices.
3. Exact condition labels for corner meaty / frame-kill setups.
4. Whether Forward Step Kick belongs in the minimum identity floor or later spacing adaptation.
5. Final learner wording for Ken's difference from Ryu: do not collapse it to generic rushdown.

## 9. Phase A decision

**PASS.**

Ken may advance to:

Character Model v0 -> Fact Inventory -> Route Master Inventory

No Role / Practical learner page is promoted yet.
