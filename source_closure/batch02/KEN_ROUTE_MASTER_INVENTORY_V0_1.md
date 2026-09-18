# Ken Route Master Inventory v0.1

Status: **PHASE D BACKEND CANDIDATE POOL**
Boundary: Year 4 / 2026-08-03; route source updated 2026-08-31
Primary source: SRC05

Verification labels in this inventory are initial source judgments. Phase E must re-check conditioned setups before learner promotion.

## Combo / conversion candidates

| ID | Opportunity | Route | Value / end state | Verification |
|---|---|---|---|---|
| R01 | Jump-in | j.HP > 5MP > 5HP > Quick Dash Tatsu | corner carry; two dashes +5; corner-arrival setplay | conditioned: arrival / airborne hit state |
| R02 | 2MP normal hit | 2MP > 5LK > H Shoryuken | 2020; KD +25 -> dash +6 | verified |
| R03 | point-blank 2MP | 2MP > 5MP > 5HP > Quick Dash Shoryuken | 2540; KD +25 -> dash +6 | conditioned: point-blank |
| R04 | light confirm | 2LK > 2LP > 5LK > H Shoryuken | 1490; KD +25 -> dash +6 | verified |
| R05 | 2MK DRC stable carry | 2MK > DRC > 5LP > 5MP > 5HP > Quick Dash Tatsu | stable corner carry | verified route; arrival Oki conditioned |
| R06 | 2MK DRC Year4 carry | 2MK > DRC > 2HP > Emergency Stop > 2MP > 5MP > 5HP > Quick Dash Tatsu | 2072; carry / SA option; corner-arrival setplay | verified route; arrival Oki conditioned |
| R07 | 2MK DRC damage | 2MK > DRC > 2HP > Emergency Stop > 2MP > L Tatsu > M Shoryuken | 2360; damage; corner M-DP family can reach +33 | verified route; +33 follow-up is corner-conditioned |
| R08 | shimmy PC | 2MP PC > 2MK > Quick Dash Shoryuken | 2700; +25 -> dash +6 | verified |
| R09 | blocked reversal punish | 5HP PC > 2MK > Quick Dash Shoryuken | +25 -> dash +6; throw / 5HP | verified |
| R10 | blocked reversal high-value | 2HP PC > DRC > 2HP > Emergency Stop > 2MP > 5MP > 5HP > Quick Dash Tatsu | carry / Oki-focused | verified route; arrival state conditioned |
| R11 | corner Drive Reversal punish | 2MP PC > H Jinrai > HK follow-up > L Shoryuken | frame-kill family -> +5 throw / 2MP / shimmy | conditioned: corner |
| R12 | corner DI wall splat | DI wall splat > 5HP > H Jinrai > HK follow-up > M Shoryuken | +33 -> 2MK whiff -> +5 | conditioned: corner wall splat |
| R13 | midscreen DI PC carry | DI PC > 5MP > 5HP > Quick Dash Tatsu | 2120; carry | verified route; corner-arrival Oki conditioned |
| R14 | midscreen DI PC damage | DI PC > j.HK > Drive Rush 5HP > Quick Dash Shoryuken | +25 -> dash +6 | conditioned: DI launch/jump conversion |
| R15 | back-to-corner DI PC | DI PC > j.HK > Quick Dash Dragonlash > H Shoryuken | 3220; reverses position into corner-oriented result | conditioned: back-to-corner |
| R16 | 2MP counter hit | 2MP CH > 2MK > Quick Dash Shoryuken | approx 2580; +25 -> dash +6 | provisional: source damage is approximate |
| R17 | corner 2HP | 2HP > H Jinrai > HK follow-up > L Shoryuken | 2910; 2MK whiff -> +5 | conditioned: corner |
| R18 | 5HK punish counter | 5HK PC > Raw Drive Rush > 5HP > Quick Dash Shoryuken | damage-focused; +25 family | conditioned: PC |
| R19 | SA1 cashout | 2HP > H Jinrai > OD Dragonlash > OD Jinrai > Quick Dash HK branch > SA1 | high-damage SA1 family | provisional: branch naming must be normalized |
| R20 | SA2 cashout | 2HP > H Jinrai > OD Dragonlash > OD Jinrai > Quick Dash HK branch > SA2 | Year4 SA2 family | provisional: branch naming must be normalized |
| R21 | SA3 from H Shoryuken | H Shoryuken first grounded hit > SA3 | SA3 conversion | conditioned: first grounded hit |
| R22 | SA3 from Quick Dash Dragonlash | Quick Dash Dragonlash > SA3 | SA3 conversion | verified source route |
| R23 | SA3 from Quick Dash Shoryuken | Quick Dash Shoryuken hit 2 > SA3 | SA3 conversion | conditioned: hit timing |
| R24 | SA3 from Jinrai | M Jinrai > HK follow-up > SA3 | SA3 conversion | verified source route |

Backend candidate count: **24**.

## Shared Oki / next-loop candidates

| ID | Trigger | Package | Result | Verification |
|---|---|---|---|---|
| P01 | H / Quick Dash Shoryuken ender | +25 -> forward dash | +6 -> throw / strike / shimmy | verified |
| P02 | H Shoryuken ender | Raw Drive Rush > 5MP | block -> throw / 2LK 2LP H-DP / shimmy | conditioned: active-frame contact note |
| P03 | midscreen forward throw | Drive Rush > 5MP | throw / low / shimmy | verified source package |
| P04 | Quick Dash Tatsu reaching corner | airborne-hit ender > 5MP > 5LK | +3 -> throw / shimmy | conditioned: airborne hit / corner arrival |
| P05 | corner M Shoryuken | +33 -> 2MK whiff | +5 -> throw / 2MP / shimmy | conditioned: corner |
| P06 | corner OD Shoryuken | +22 -> forward dash | +3; corner 2LK active use can reach +5 | conditioned: corner |
| P07 | corner H Shoryuken grounded hit | 5LP whiff > 5HP | active meaty: block +1 / hit +6 | conditioned: Training Mode confirmation required |
| P08 | corner Quick Dash Shoryuken | forward dash > 5MP | active meaty: block 0 / hit +6; throw/shimmy around it | conditioned: corner active timing |
| P09 | corner forward throw | +20 | forward throw loop / 5HP meaty / defense-read branch | conditioned: corner |

Shared-package candidate count: **9**.

## Opportunity coverage check

- jump-in: covered
- grounded confirm: covered
- light confirm: covered
- low / DRC: covered
- shimmy PC: covered
- reversal punish: covered
- Drive Reversal punish: covered
- DI midscreen / corner / back-to-corner: covered
- carry: covered
- Oki / corner setplay: covered
- SA1 / SA2 / SA3: covered
- character-specific Quick Dash / Jinrai states: covered

## Phase E verification queue

1. Normalize Quick Dash HK branch naming in R19/R20 against official input nomenclature.
2. Keep R16 provisional until damage is reproduced or an exact source replaces approximate value.
3. Confirm P07/P08 active-frame meaty conditions in Training Mode evidence before learner promotion.
4. Confirm the exact airborne/corner-arrival condition for P04.
5. Separate Jinrai follow-ups by actual practical value rather than treating HK follow-up as a generic default.

## Early model check

The backend pool currently supports the Character Model v0 hypothesis: Ken repeatedly converts ordinary starters into different end states — damage, corner carry, +25 dash +6, corner +33 frame-kill, or SA cashout. This remains provisional until Pareto pruning and Phase H audit.
