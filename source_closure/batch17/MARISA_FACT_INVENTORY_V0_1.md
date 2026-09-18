# Marisa Fact Inventory v0.1

Status: **PHASE C CANDIDATE**
Checked: **2026-09-19**

## Stable constraints

- Health: **10500**.
- Several heavy normals / jump attacks have charged variants.
- Gladius has normal / charged / OD charged states with armor.
- Enfold is a 5F command grab reached from Scutum.
- cr.MK is non-cancelable.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 6 | 6-8 | 11 | 0 | -2 | — | 400 |
| 5LK | Standing Light Kick | 6 | 6-7 | 14 | 0 | -2 | C | 400 |
| 5MP | Standing Medium Punch | 7 | 7-10 | 15 | +2 | -1 | — | 700 |
| 5MK | Standing Medium Kick | 11 | 11-14 | 16 | +4 | -2 | — | 800 |
| 5HP | Standing Heavy Punch | 12 | 12-13 | 23 | +3 | -3 | — | 1000 |
| 5HK | Standing Heavy Kick | 15 | 15-16 | 25 | +1 | -3 | — | 1000 |
| 2LP | Crouching Light Punch | 4 | 4-5 | 10 | +4 | -1 | C | 300 |
| 2LK | Crouching Light Kick | 5 | 5-7 | 12 | +2 | -3 | — | 300 |
| 2MP | Crouching Medium Punch | 8 | 8-10 | 16 | +3 | -2 | C | 700 |
| 2MK | Crouching Medium Kick | 9 | 9-11 | 18 | +5 | -2 | — | 600 |
| 2HP | Crouching Heavy Punch | 9 | 9-13 | 23 | KD | -6 | — | 900 |
| 2HK | Crouching Heavy Kick | 11 | 11-13 | 26 | KD | -11 | — | 1000 |
| j.LP | Jumping Light Punch | 4 | 4-10 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 5 | 5-14 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 7 | 7-10 | Landing 3 | — | — | — | 700 |
| j.MK | Jumping Medium Kick | 8 | 8-15 | Landing 3 | — | — | — | 500 |
| j.HP | Jumping Heavy Punch | 10 | 10-16 | Landing 3 | — | — | — | 800 |
| j.HK | Jumping Heavy Kick | 10 | 10-16 | Landing 3 | — | — | — | 800 |

## Charged normal facts

- charged 5HP: **23F / Hit +7 / Block +5 / 1200**.
- charged 5HK: **24F / Block +1 / 1200**.
- charged 2HP: **21F / Block -3 / 1000 / SA-cancelable**.
- charged 2HK: **20F / Block -3 / 1200**.
- charged j.HP: **28F / 1500**.
- charged j.HK: **29F / 1500**.
- charged 4HP Magna Bunker: **20F / Hit +13 / Block +4 / cancellable**.
- charged Falx Crusher first hit: **27F / Hit +10 / Block +3 / cancellable**.

## Key current specials

| Tool | Current fact | Practical meaning |
|---|---|---|
| L/M/H Gladius | 17/19/22F / Block -5 | normal armor strike |
| charged L/M/H Gladius | 30/35/41F / Block +4 | armor + high damage + plus |
| OD Gladius | 19F / Block -2 | 2-hit armor |
| charged OD Gladius | 35F / Block +4 | high-resource plus armor |
| L/M/H Dimachaerus first hit | 12/16/22F / Block -16 | route tool; dedicated follow-up |
| L/M/H Phalanx | 25/28/32F / Block +3 | armor / jump-in-like pressure |
| OD Phalanx | 28F / Block +4 | wall splat at corner |
| L/M/H Quadriga | 20/24/29F / Block -6/-3/+1 | spacing/burnout pressure |
| Scutum | total 54F / armor | late read / command-grab hub |
| Enfold | 5F / 2500 | command grab after respect |

## High-leverage current end states

- L Dimachaerus follow-up: +31
- M Dimachaerus follow-up: +36
- Phalanx ender: +42
- forward throw: +23
- Enfold: +18
- H Quadriga current block: +1
- DR forward throw setup: dash +1 family

## Constraints

- charged attacks require actual hold duration.
- cr.MK is non-cancelable.
- Enfold should not be projected as S0 autopilot.
- +42 belongs to Phalanx ender state.
- charged/armor actions keep startup and whiff/punish risk.
- active-frame setups keep timing/corner conditions.

## Next

Proceed to Route Master Inventory and audit when Enfold first belongs in S0-S4.
