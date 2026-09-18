# JP Route Master Inventory v0.1

Status: PHASE D BACKEND INVENTORY  
Version: Year 4 / 2026-08-03  
Primary route source: SRC05

This inventory is intentionally broader than the learner view. Remote object, portal, grounded/airborne state and corner position are part of each applicable route key.

## A. Conversion candidates

| ID | Opportunity | Full input | Result / value | Next state | Verification candidate |
|---|---|---|---|---|---|
| R01 | Light | 2LP > 5LP > L Stribog | stable confirm | +38 | verified |
| R02 | 5MK | 5MK > M Stribog | stable midrange confirm | +42 | verified |
| R03 | 2MP | 2MP > 5LK > L Stribog | stable confirm | +38 | verified |
| R04 | Drive | 2MP / 5MK > CDR > 2HP > H Stribog > M Torbalan > H Triglav | remote carry/control | remote reset | conditioned |
| R05 | 5HP | 5HP hit > L Torbalan | strike -> remote projectile | grounded route | conditioned |
| R06 | 5HP block | 5HP block > L Torbalan | pressure/reset | spacing dependent | conditioned |
| R07 | 5HK TC | 5HK > HP > M Stribog | stable heavy route | +42 | conditioned |
| R08 | anti-air | 2HP anti-air > H Stribog / Triglav | anti-air conversion | remote reset | conditioned |
| R09 | Triglav | Triglav hit | remote spike result | +44 | conditioned |
| R10 | OD Triglav | OD Triglav hit | high-resource remote result | +53 | conditioned |
| R11 | L Torbalan | grounded L Torbalan hit | projectile knockdown | +42 or more | conditioned |
| R12 | 5HP airborne | 5HP airborne hit > Departure | earned portal setup | about +15 | conditioned |
| R13 | 5HP airborne | 5HP airborne hit > Triglav > OD Departure | portal pressure | about +4..+6 | conditioned |
| R14 | M Stribog | M Stribog grounded hit +42 > immediate forward jump HK | safe jump | +42 exact state | conditioned |
| R15 | L Torbalan | grounded L Torbalan +42 > immediate forward jump HK | safe jump | +42 exact state | conditioned |
| R16 | +42 meaty | exact +42 > 2MK whiff > 5HK | active meaty | Hit +10 / Block +5 family | conditioned |
| R17 | stHK pressure | 5HK block +2 > 2LP | close pressure | frame-tight check | verified |
| R18 | stHK shimmy | 5HK block +2 > walk back > 2MP | shimmy punish | opponent throw-tech | conditioned |
| R19 | forward throw | corner forward throw +23 > forward dash | corner pressure | +1 | conditioned |
| R20 | Departure | earned Departure active -> Departure: Shadow | remote attack | portal state | conditioned |
| R21 | Departure | earned Departure active -> Departure: Window | teleport / side change | portal state | conditioned |
| R22 | portal low | Departure state -> portal-enabled 2LK / 2MK branch | low branch | portal pressure | conditioned |
| R23 | portal strike | Departure state -> portal-enabled 5MP / 5HK branch | strike branch | portal pressure | conditioned |
| R24 | portal throw | Departure state -> throw / Embrace read | throw branch | reset / knockdown | conditioned |
| R25 | Amnesia | current Amnesia success -> current aftermath | defensive reset | current state only | conditioned |
| R26 | OD Amnesia | OD Amnesia success -> current aftermath | invincible defensive branch | current recovery | conditioned |
| R27 | OD Torbalan | OD Torbalan block | high-resource plus state | +25 | conditioned |
| R28 | SA2 | confirmed route -> SA2 Lovushka | persistent setplay super | multi-layer state | conditioned |
| R29 | SA3 | confirmed route -> SA3 Interdiction | cashout | +23 | conditioned |
| R30 | CA | confirmed route -> CA Zapret | cashout / meaty setup | +44 family | conditioned |

## B. Oki / remote-state package candidates

| ID | Source state | Action | Result | Important condition |
|---|---|---|---|---|
| O01 | L Stribog +38 | remote spacing / Triglav / Torbalan | maintain screen | exact L Stribog state |
| O02 | M Stribog +42 | immediate forward jump HK | safe jump | grounded exact state |
| O03 | L Torbalan +42 | immediate forward jump HK | safe jump | grounded / spacing exact state |
| O04 | exact +42 | 2MK whiff -> 5HK | active meaty Hit +10 / Block +5 family | exact predecessor state |
| O05 | Triglav +44 | remote follow-up / Departure investment | state advantage | exact Triglav hit |
| O06 | OD Triglav +53 | larger remote budget | pressure / setup | Drive resource |
| O07 | 5HP airborne -> Departure +15 | portal low / strike / throw / Window | first earned portal tree | airborne-hit exact state |
| O08 | 5HP airborne -> Triglav -> OD Departure +4..+6 | 2MP / throw / low / portal | close+remote hybrid state | exact route / Drive |
| O09 | 5HK Block +2 | 2LP / throw-read / walk-back 2MP | stable close pressure | exact block state |
| O10 | corner forward throw +23 | forward dash 22F | +1 | corner |
| O11 | Departure active | Shadow / Window / wait | portal-state decision | active portal |
| O12 | current Amnesia aftermath | reset / punish / reposition | defensive state | current patch aftermath |
| O13 | exact corner setup | Torbalan / Stribog active meaty | setup-specific plus frames | corner / active timing |
| O14 | SA3 +23 | immediate H Triglav meaty family | super setplay | exact super end state |
| O15 | CA +44 | L / OD Torbalan meaty family | high-budget setplay | exact CA end state |

## C. Backend-only candidate reasons

Keep backend-only until later stages:
- raw Departure from neutral without earned space;
- full portal low/strike/throw/teleport tree in S0;
- generic +42 safe jump without M Stribog or grounded L Torbalan owner;
- generic Departure +15 or +4..+6 without exact predecessor route;
- OD Amnesia routes copied from pre-Year4 recovery;
- OD Torbalan +25 before resource/state discipline is stable;
- Lovushka trees before basic remote ordering and portal investment are stable.

## Phase D judgment

Inventory breadth is sufficient for Verification and Pareto.
