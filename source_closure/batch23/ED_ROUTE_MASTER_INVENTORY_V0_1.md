# Ed Route Master Inventory v0.1

Status: PHASE D BACKEND INVENTORY  
Version: Year 4 / 2026-08-03  
Primary route source: SRC05

This inventory is broader than the learner view. Spacing / Hitman Combination / corner state are part of the route key.

## A. Conversion candidates

| ID | Opportunity | Full input | Result / value | Next state | Verification candidate |
|---|---|---|---|---|---|
| R01 | Light | 2LP > 5LP > M Psycho Blitz | stable confirm | +39 | verified |
| R02 | 5MP | 5MP > 2LK > M Psycho Blitz | stable confirm | +39 | verified |
| R03 | 5MP alt | 5MP > 2LK > M Psycho Uppercut | alternate ender | +39 | verified |
| R04 | 5MK | confirmed 5MK > L Psycho Flicker | midrange confirm | Hit +1 | conditioned |
| R05 | 2MP Drive | 2MP > CDR > 5HP > 2MK > 2MP > H Psycho Blitz | stable Drive route | +40 | conditioned |
| R06 | Body Blow | 5MP > 5HP > H Psycho Blitz | short heavy route | exact Hitman route +42 family | conditioned |
| R07 | carry | 5MP > 5HP > Kill Switch Break > M Psycho Uppercut | corner carry | +39 family | conditioned |
| R08 | 2MK | 2MK > 5MP > 5HP > H Psycho Blitz | long-low starter | +40 / route-specific +42 | conditioned |
| R09 | 5HP OD Flicker | 5HP > OD Psycho Flicker > H Psycho Flicker > Kill Switch Break > H Psycho Blitz | resource extension | +40 | conditioned |
| R10 | 5HK PC | 5HK PC > 5HP > Kill Switch Chaser > H Psycho Blitz | punish route | +40 | conditioned |
| R11 | 5HP PC | 5HP PC > 2MK > OD Psycho Flicker > H Psycho Flicker > Kill Switch Break > H Psycho Blitz | high-value punish | +40 | conditioned |
| R12 | 2HK TC | 2HK > HP > Kill Switch Break > H Psycho Blitz | meterless route | +40 | conditioned |
| R13 | 5MK PC | 5MK PC > CDR 5MP > 5HP > Kill Switch Chaser > H Psycho Blitz | PC conversion | +40 | conditioned |
| R14 | L Flicker PC | L Psycho Flicker PC > DR 5MK > Kill Switch Break > H Psycho Blitz | PC crumple conversion | +40 | conditioned |
| R15 | DI spacing | DI > 5HK > 5MP / 5HP > H Psycho Blitz | DI route | +40 | conditioned |
| R16 | DI carry | DI > walk / dash > 5HP Hitman Combination > Kill Switch Break > H Psycho Blitz | carry route | +40 | conditioned |
| R17 | DI alternative | DI > 5MP / 5HP > H Psycho Flicker > L Psycho Uppercut > H Psycho Blitz | Flicker route | +40 | conditioned |
| R18 | corner easy | 5MP / 5HP > H Psycho Flicker > M Psycho Uppercut | corner route | +39 | conditioned |
| R19 | corner damage | 5HP > OD Psycho Flicker > H Psycho Flicker > L Psycho Blitz > L Psycho Uppercut | high damage | +38 | conditioned |
| R20 | charged Flicker | charged L/M Psycho Flicker block | +4 pressure | spacing-conditioned strike / walk throw / shimmy | conditioned |
| R21 | 5HK pressure | 5HK block | +4 | 5MP / throw / 5HP shimmy | verified |
| R22 | Psycho Spark | Psycho Spark hit / block | Hit +3 / Block -5 | Shoot / spacing / later meaty | verified |
| R23 | OD Spark | OD Psycho Spark block | about -2 | Shoot / spacing | verified |
| R24 | Psycho Knuckle Lv1 | charged 5HP Lv1 Psycho Knuckle | crumple +41 / block about -2, corner can differ | route / spacing reset | conditioned |
| R25 | Psycho Knuckle Lv2 | fully charged Psycho Knuckle | crumple +41 / Block +4 | pressure / route | conditioned |
| R26 | SA2 easy | OD Psycho Blitz final hit > SA2 > H Psycho Uppercut > 6HP > H Psycho Uppercut | SA2 extension | damage / carry | conditioned |
| R27 | SA2 long | 5MP > 2LK > OD Psycho Blitz final hit > SA2 > delayed H Blitz > delayed H Uppercut > Kill Switch Chaser > dash > H Uppercut > dash > H Uppercut | dream extension | damage/carry | conditioned |
| R28 | SA3 | 5HP > OD Psycho Flicker > L Psycho Uppercut > H Psycho Blitz > SA3 | lethal cashout | round end | conditioned |

## B. Oki / re-entry package candidates

| ID | Source state | Action | Result | Important condition |
|---|---|---|---|---|
| O01 | M Blitz +39 | Drive Rush | about +8 | exact M Blitz state |
| O02 | H Blitz +40 | Drive Rush | about +9 | exact H Blitz state |
| O03 | H Blitz +40 -> DR +9 | 5HP / 2MK / throw / walk-back | strike-low-throw-shimmy | exact state |
| O04 | exact Hitman H Blitz +42 | immediate forward jump HP | safe jump | declared Hitman route / height |
| O05 | corner safe jump block | 5HK | Block +4 -> 5MP / throw / 5HP shimmy | corner |
| O06 | exact +38 corner | 2LP whiff -> Psycho Spark | active meaty ~Hit +13 / Block +5 | corner / exact timing |
| O07 | 2HP +30 | dash -> 5HP active meaty | ~Hit +7 / Block 0 | exact +30 timing |
| O08 | 2HP CH/PC +47 | dash x2 | +9 -> 5HP / 2MK / throw / shimmy | CH/PC |
| O09 | L Flicker PC | dash x3 | point-blank +4 | PC exact state |
| O10 | forward throw +24 | corner dash | +5 -> 5MP meaty | corner |
| O11 | forward throw +24 | Drive Rush | DR 5MP / DR throw | resource pressure | throw state |
| O12 | back throw +17 | reset / spacing | no old +24 loop | current Year4 |
| O13 | charged Flicker Block +4 | judge distance | 5MP / walk throw / shimmy | spacing |
| O14 | 5HK Block +4 | 5MP | 4F frame trap family | exact block state |
| O15 | Psycho Spark | Psycho Shoot | slow/fast projectile layer | version / chosen strength |
| O16 | SA1 +33 | setup | later exact route | super state |
| O17 | SA3 +24 | setup / round state | limited Oki | super state |

## C. Backend-only candidate reasons

Keep backend-only until later stages:
- charged Flicker pressure before ordinary Blitz re-entry is stable;
- Psycho Knuckle charge game before midrange confirm discipline is stable;
- generic +42 safe jump without Hitman route owner;
- generic Spark +5 meaty without exact +38 corner setup;
- old back-throw +24 loop;
- SA2 dream route before basic carry / Kill Switch decisions are stable;
- raw uncharged Flicker pressure on block.

## Phase D judgment

Inventory breadth is sufficient for Verification and Pareto.
