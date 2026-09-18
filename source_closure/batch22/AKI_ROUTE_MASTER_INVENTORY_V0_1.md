# A.K.I. Route Master Inventory v0.1

Status: PHASE D BACKEND INVENTORY  
Version: Year 4 / 2026-08-03  
Primary route source: SRC05

This inventory is intentionally broader than the learner view. Poison state is part of every applicable route key.

## A. Conversion candidates

| ID | Opportunity | Poison state | Full input | Result / value | Next state | Verification candidate |
|---|---|---|---|---|---|---|
| R01 | Light | unpoisoned | 2LP > 2LP > 5LK > H Serpent Lash | stable confirm / poison application | +44 | verified |
| R02 | Low light | unpoisoned | 2LK > 2LP > 2LP > H Serpent Lash | stable low confirm | +44 | verified |
| R03 | 5MK | unpoisoned | 5MK > 5MP > H Serpent Lash | stable medium confirm | +44 | verified |
| R04 | 5MP | any | 5MP > Toxic Wreath | safe buffer route | +40 | verified |
| R05 | 5MP Drive | any | 5MP > CDR > 5MK > 5HK > Heel Strike > 2LP > 2LP > 5LK > H Serpent Lash | Drive conversion | +44 ordinary / poison-state conditional | conditioned |
| R06 | DR low | unpoisoned | DR 2LK > 5MP > H Serpent Lash | low entry | +44 | conditioned |
| R07 | DR overhead | unpoisoned | DR 3MP > 5MP > H Serpent Lash | overhead entry | +44 | conditioned |
| R08 | DR 2MK | any | DR 2MK > 5HK > Heel Strike > 2LP > 2LP > 5LK > H Serpent Lash | plus low entry | +44 ordinary / state dependent | conditioned |
| R09 | 5HK PC | any | 5HK Punish Counter > H Cruel Fate > 2LP > 2LP > 5LK > H Serpent Lash | punish | +44 ordinary / poison dependent | conditioned |
| R10 | 2HK PC | unpoisoned | 2HK Punish Counter > M Serpent Lash | Year4 poison application / launch | route state | conditioned |
| R11 | 2HK PC | any | 2HK Punish Counter > DR 5MP > Heel Strike > L Serpent Lash | extension | route / poison state | conditioned |
| R12 | poisoned light | poisoned | 2LP > 2LP > 5LK > H Serpent Lash burst > DR 2MP > H Serpent Lash | poison-burst extension | returns +44 | conditioned |
| R13 | poisoned M Lash | poisoned | M Serpent Lash poison burst > 5HK > Heel Strike > L Serpent Lash | burst conversion | +69 crumple budget | conditioned |
| R14 | poisoned M Lash corner | poisoned | M Serpent Lash burst > 5HK > Toxic Wreath > DR 5HK > Venomous Fang > Orchid Spring | damage + puddle setup | corner +38 family | conditioned |
| R15 | poisoned H Lash AA | poisoned | H Serpent Lash poison burst > M Serpent Lash | anti-air burst extension | +53 family | conditioned |
| R16 | poisoned H Lash | poisoned | H Serpent Lash burst > DR 5HK > Venomous Fang | carry / corner route | burst conversion | conditioned |
| R17 | poisoned OD Lash | poisoned | 2MP > OD Serpent Lash burst > 5LK > M Serpent Lash | high-budget burst route | +71 state | conditioned |
| R18 | Qiong Qi | unpoisoned | 5HP > HP | Year4 target combo | +34 | conditioned |
| R19 | Qiong Qi | poisoned | 5HP > HP poison burst > M Serpent Lash | burst follow-up | +54 family | conditioned |
| R20 | OD Cruel Fate | any | OD Cruel Fate hit | advancing hit | +42 | conditioned |
| R21 | OD Cruel Fate block | any | OD Cruel Fate block | plus entry | +2 | conditioned |
| R22 | OD Chaser block | unpoisoned | OD Nightshade Pulse > Nightshade Chaser block | Year4 poison application | opponent poisoned unless Drive Parry | conditioned |
| R23 | corner puddle | poisoned | M Serpent Lash burst > 5HK > Toxic Wreath > DR 5HK > Venomous Fang > Orchid Spring | poison field setup | +38 family | conditioned |
| R24 | corner puddle meaty | any | Venomous Fang hit > Orchid Spring > Nightshade Pulse active meaty | projectile + puddle overlap | about +12 block family | conditioned |
| R25 | safe-jump route | any | H Serpent Lash +44 -> spacing-dependent forward jump HP / j.2HP | safe-jump family | shimmy on block | conditioned |
| R26 | reversal punish | any | 5HK PC > H Cruel Fate > 2LP > 2LP > 5LK > H Serpent Lash | reliable punish | +44 ordinary / state dependent | conditioned |
| R27 | SA2 | any | confirmed route > SA2 | poison field super | +30 + persistent field | conditioned |
| R28 | SA3 | any | confirmed high-damage route > SA3 | lethal cashout | +30 | conditioned |

## B. Oki / next-loop package candidates

| ID | Source state | Action | Result | Important condition |
|---|---|---|---|---|
| O01 | H Serpent Lash ordinary +44 | two forward dashes | about +6 | ordinary / exact +44 state |
| O02 | H Lash +44 | DR 5MP / DR 2MK / DR 3MP / throw / shimmy | strike-low-overhead-throw | exact +44 state |
| O03 | +44 | 2LK whiff x2 -> 6HP active meaty | +18 timing -> about Hit +6 / Block 0 | exact timing |
| O04 | +37 | forward dash -> 6HP active meaty | same +18 family | exact predecessor state |
| O05 | +32 | 2LP whiff -> 6HP active meaty | same +18 family | exact predecessor state |
| O06 | +31 | 5LP whiff -> 6HP active meaty | same +18 family | exact predecessor state |
| O07 | H Lash +44 | spacing-dependent forward jump HP / j.2HP | safe-jump family | spacing / corner / jump target |
| O08 | safe jump block | walk back -> 5HK PC | shimmy punish | opponent throw-tech |
| O09 | Toxic Wreath +40 | DR strike / low / overhead / throw / shimmy | pressure hub | exact Wreath end state |
| O10 | corner puddle +38 | DR 5MP / 2MK / 3MP / throw / shimmy | field pressure | corner / Orchid Spring route |
| O11 | corner puddle | watch jump / forward walk / reversal | punish escape from field | opponent behavior |
| O12 | puddle + projectile | Nightshade Pulse active meaty | about +12 block family | exact Venomous Fang -> Orchid Spring setup |
| O13 | OD Cruel Fate hit +42 | jump-in | jump pressure | exact hit state |
| O14 | OD Cruel Fate block +2 | 2LK / throw / delayed 2MK / 5HK | plus mix | exact block state |
| O15 | forward throw +19 | DR 5MP / DR 2MK / DR throw | chase pressure | throw state |
| O16 | back throw +27 corner | 6HP / 6HK / DR strike | meaty pressure | corner |
| O17 | poisoned M Lash +69 | route / position cashout | large burst budget | opponent_poisoned |
| O18 | poisoned H Lash +53 | route / anti-air conversion | larger Oki budget | opponent_poisoned |
| O19 | poisoned OD Lash +71 | route / high-resource conversion | largest burst budget | opponent_poisoned |
| O20 | Qiong Qi unpoisoned +34 | simple follow-up / Oki | ordinary state | unpoisoned |
| O21 | Qiong Qi poisoned +54 | burst extension | large state | opponent_poisoned |
| O22 | OD Chaser blocked | move opponent with poison threat | L Lash / 5MK / AA H Lash / whiff punish | ordinary block, not Drive Parry |

## C. Backend-only candidate reasons

Keep backend-only until later stages:
- poison-burst max-damage routes before poisoned-state recognition is stable;
- corner puddle route before +44 Oki is stable;
- Sinister Slide branches without an earned setup;
- safe-jump claims without exact spacing;
- generic +18 active-meaty claims without predecessor-state proof;
- OD Nightshade Chaser block-poison without the Drive Parry exception;
- SA2 poison-field routing before ordinary puddle behavior is understood.

## Phase D judgment

Inventory breadth is sufficient for Verification and Pareto.
