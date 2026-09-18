# Lily Fact Inventory v0.1

Status: **PHASE C CANDIDATE**
Checked: **2026-09-19**

## Stable constraints

- Health: **10000**.
- Resource: Windclad stock, up to 3.
- Condor Wind hold timing can build 1 / 2 / 3 stocks.
- Windclad modifies Spire / Tomahawk / Dive / Super states.
- Mexican Typhoon is 5F command grab.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 5 | 5-7 | 8 | +6 | -1 | C | 350 |
| 5LK | Standing Light Kick | 4 | 4-6 | 8 | +5 | -1 | C | 300 |
| 5MP | Standing Medium Punch | 9 | 9-12 | 17 | +1 | -4 | — | 800 |
| 5MK | Standing Medium Kick | 7 | 7-9 | 15 | +2 | -1 | C | 600 |
| 5HP | Standing Heavy Punch | 10 | 10-12 | 22 | 0 | -5 | C | 900 |
| 5HK | Standing Heavy Kick | 14 | 14-17 | 21 | +1 | -5 | — | 1000 |
| 2LP | Crouching Light Punch | 6 | 6-8 | 8 | +6 | -1 | C | 300 |
| 2LK | Crouching Light Kick | 5 | 5-6 | 12 | +2 | -2 | — | 200 |
| 2MP | Crouching Medium Punch | 8 | 8-10 | 18 | +1 | -3 | SA | 700 |
| 2MK | Crouching Medium Kick | 9 | 9-11 | 18 | +1 | -5 | C | 500 |
| 2HP | Crouching Heavy Punch | 10 | 10-15 / 10-11,12-15 | 22 | 0 | -2 | C | 1000 |
| 2HK | Crouching Heavy Kick | 11 | 11-20 / 11-12,19-20 | 24 | KD | -12 | — | 900 |
| j.LP | Jumping Light Punch | 5 | 5-13 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 6 | 6-11 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 9 | 9-12 | Landing 3 | — | — | C | 700 |
| j.MK | Jumping Medium Kick | 8 | 8-12 | Landing 3 | — | — | — | 500 |
| j.HP | Jumping Heavy Punch | 10 | 10-15 | Landing 3 | — | — | — | 800 |
| j.HK | Jumping Heavy Kick | 11 | 11-16 | Landing 3 | — | — | — | 800 |

## Key current tools

| Tool | Current fact | Practical meaning |
|---|---|---|
| L Condor Wind | 19F attack / Block -8 | Year4 attack-version vs hold-to-stock choice |
| Condor Wind hold | approx 46/71/90F -> 1/2/3 stock | resource investment |
| normal L/M/H Spire | 17/21/25F / Block -8 | risky without stock |
| Windclad L/M/H Spire | 9/13/17F / Block +1 | resource-backed plus entry |
| Windclad OD Spire | 9F / Block +2 | stronger plus entry / projectile invul |
| L/M/H Tomahawk | 6/8/10F | anti-air / route |
| Windclad L/M/H Tomahawk | 4/6/8F | stock-enhanced anti-air/route |
| Mexican Typhoon | 5F / 2000/2400/2800 | command-grab payoff |
| OD Mexican Typhoon | 5F / 2900 | resource command grab |

## High-leverage current end states

- L/M/H Spire: +33 / +37 / +37
- OD Spire: +43
- Windclad L/M/H Spire: +47 / +49 / +52
- Windclad OD Spire: +56
- Windclad H Spire two dashes: +10
- Mexican Typhoon: +28
- SA1: +27
- SA2: +42 / +43 family

## Current Year 4 notes

- L Condor Wind has explicit attack-version vs charged stock-version choice.
- spacing OD Condor Spire variants are current.
- Condor Dive activation/follow-up system is current.
- Windclad Spire safe-jump / plus-entry remains a current core setplay layer.

## Constraints

- Windclad values require stock state.
- normal Spire remains -8.
- stock building has real time/space cost.
- Mexican Typhoon should follow respect/plus entry, not define S0.
- +52 safe-jump claims require exact Windclad H Spire / route state.
- Spire setplay remains spacing/active-frame conditioned.

## Next

Proceed to Route Master Inventory and audit whether one Windclad stock belongs in S0 while Mexican Typhoon waits until S1.
