# Ingrid Route Master Inventory v0.1

Status: PHASE D BACKEND INVENTORY  
Version: Year 4 / 2026-08-03  
Primary route source: SRC05

This inventory is broader than the learner view. Stock level, Sun Rise hit-height/route, corner and active timing are part of each applicable route key.

## A. Conversion / resource candidates

| ID | Opportunity | Full input | Result / value | Next state | Verification candidate |
|---|---|---|---|---|---|
| R01 | Low light | 2LK > 5LP > 5LK > M Sun Rise | stable confirm | selected M Sun Rise knockdown | verified |
| R02 | 5MP | 5MP > 5MK > M Sun Rise | stable confirm | selected M Sun Rise knockdown | verified |
| R03 | 2MP | 2MP > 5LK > M Sun Rise | stable confirm | selected M Sun Rise knockdown | verified |
| R04 | Drive | 2MP > CDR > 2HP > H Sun Rise > L Solar Burst | damage / route | +50 family | conditioned |
| R05 | low Drive | 2MK > CDR > 5HK > 5MP>6MK TC > M Sun Rise | low conversion | selected M Sun Rise state | conditioned |
| R06 | stock cancel | 2HP > Sun Flare hold | resource build / route state | stock gain | conditioned |
| R07 | 5HK | 5HK > 2LP > M Sun Rise | stable route | M Sun Rise state | conditioned |
| R08 | 5HK CH | 5HK CH > 5MP>6MK TC > M Sun Rise | counter route | M Sun Rise state | conditioned |
| R09 | 4MK>HP | 4MK > HP | exact target-combo knockdown | +44 | conditioned |
| R10 | jump-in | j.HP > 5HK > 2LP > M Sun Rise | jump route | M Sun Rise state | conditioned |
| R11 | H Sun Shot AA | H Sun Shot airborne hit > DR > 5MP>6MK TC > M Sun Rise | Year4 airborne conversion | route-dependent | conditioned |
| R12 | H Sun Shot AA alt | H Sun Shot airborne hit > DR > 2HP > M Sun Rise | Year4 airborne conversion | route-dependent | conditioned |
| R13 | one-stock spend | confirmed cancelable normal > Sun Flare Lv2 | 1-stock pressure/damage | Block +4+ / hit +68+ family | conditioned |
| R14 | one-stock 2MK | confirmed 2MK > Sun Flare Lv2 | low/resource cashout | Lv2 state | conditioned |
| R15 | two-stock OD | 5MK > OD Sun Flare Lv3 > forward dash > H Sun Rise > Solar Burst | high-resource route | damage / +50 family | conditioned |
| R16 | two-stock max | confirmed high-value starter > OD Sun Flare Lv3 > high-damage extension | high damage | backend max | provisional |
| R17 | invincible punish | 2HP PC > H Sun Rise > Solar Burst | punish | +50 family | conditioned |
| R18 | DI PC | DI PC > forward dash > 4HP>6HP > Sun Flare | punish/resource route | state dependent | conditioned |
| R19 | DI corner | DI wall splat > 4HP>6HP > Sun Flare > M Sun Rise | corner conversion | route dependent | conditioned |
| R20 | SA2 | confirmed route > SA2 Order of the Sun | resource/install-like super | multi-route | conditioned |
| R21 | SA3 | confirmed route > SA3 Cosmic Ray | lethal cashout | +30 | conditioned |

## B. Oki / stock package candidates

| ID | Source state | Action | Result | Important condition |
|---|---|---|---|---|
| O01 | selected M Sun Rise +38 | forward dash 20F | +18 | declared route / hit height |
| O02 | M Sun Rise selected +38 | 2LK whiff > 5LK whiff | +4 | declared route / timing |
| O03 | M Sun Rise selected +38 | 5LP whiff > L Sun Shot | active meaty Hit +7 / Block +3 family | exact route/timing |
| O04 | M Sun Rise selected +38 | 4MK whiff > 2MP | active meaty Hit +8 / Block +1 family | exact route/timing |
| O05 | OD Sun Rise +40 | 2LP whiff > L Sun Shot | active meaty Hit +9 / Block +4 family | exact OD route |
| O06 | L Sun Rise +36 | 5LP whiff > 6MP active overhead | Hit +6 / Block 0 family | exact route |
| O07 | H Sun Rise > Solar Burst +50 | two dashes | +10 | exact route |
| O08 | safe stock window | hold L Sun Flare about 47F | +1 stock | safe_resource_window |
| O09 | one-stock Lv2 | Sun Flare Lv2 blocked | +4 or more | stock_level_1 / spacing |
| O10 | two-stock Lv3 | Sun Flare Lv3 blocked | +5 or more | stock_level_2 / spacing |
| O11 | two-stock OD Lv3 | OD Sun Flare Lv3 blocked | +9..+13 | stock_level_2 / OD / spacing |
| O12 | two-stock OD Lv3 | hit | +87 or more family | stock_level_2 / OD / exact hit state |
| O13 | 4MK>HP +44 | two dashes | +4 | exact TC state |
| O14 | 2HK PC +45 | two dashes | +5 | Punish Counter |
| O15 | corner forward throw +21 | dash 20F | +1 | corner |
| O16 | corner forward throw +21 | DR 5HK active meaty | Hit +8 / Block +2 family | corner / timing |
| O17 | corner forward throw | M Sun Shot active meaty | Hit +10 / Block +6 family | corner exact setup |
| O18 | Sun Veil +23 | next-turn setup | defensive aftermath | exact Sun Veil state |
| O19 | OD Sun Veil +52 | high-budget next turn | defensive aftermath | OD exact state |
| O20 | SA3 +30 | setup / round state | +30 | exact super end state |

## C. Backend-only candidate reasons

Keep backend-only until later stages:
- stock_level_2 / OD Lv3 before one-stock spend is stable;
- generic M Sun Rise +38/+40 without declared route/hit height;
- generic Sun Flare plus frames without stock level;
- active-meaty values without exact predecessor state;
- max two-stock damage route while source sequence is incomplete/provisional;
- SA2 before stock economy and ordinary Oki are stable.

## Phase D judgment

Inventory breadth is sufficient for Verification and Pareto.
