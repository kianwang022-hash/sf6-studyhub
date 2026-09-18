# Juri Fact Inventory v0.1

Status: **PHASE C CANDIDATE**  
Checked: **2026-09-18**

## Stable constraints

- Health: **10000**.
- Resource: Fuhajin stock; M/L/H Fuhajin generate stock.
- Boosted Saihasho / Ankensatsu / Go Ohsatsu require the relevant stock state.
- SA2 Feng Shui Engine is a separate late-stage system layer.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 4 | 4-7 | 7 | +5 | -2 | C | 300 |
| 5LK | Standing Light Kick | 5 | 5-7 | 9 | +2 | -3 | C | 300 |
| 5MP | Standing Medium Punch | 6 | 6-9 | 12 | +7 | +2 | C | 600 |
| 5MK | Standing Medium Kick | 5 | 5-10 / 5-6, 8-10 | 17 | +3 | -4 | C | 700 |
| 5HP | Standing Heavy Punch | 10 | 10-12 | 24 | -1 | -5 | C | 800 |
| 5HK | Standing Heavy Kick | 17 | 17-20 | 19 | +2 | -3 | — | 900 |
| 2LP | Crouching Light Punch | 4 | 4-6 | 8 | +4 | -1 | C | 300 |
| 2LK | Crouching Light Kick | 5 | 5-7 | 8 | +3 | -1 | — | 200 |
| 2MP | Crouching Medium Punch | 6 | 6-9 | 14 | +5 | -2 | C | 600 |
| 2MK | Crouching Medium Kick | 8 | 8-10 | 19 | +1 | -6 | C | 500 |
| 2HP | Crouching Heavy Punch | 8 | 8-11 | 23 | +3 | -11 | C | 900 |
| 2HK | Crouching Heavy Kick | 10 | 10-12 | 23 | KD | -11 | — | 900 |
| j.LP | Jumping Light Punch | 5 | 5-10 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 4 | 4-9 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 7 | 7-11 | Landing 3 | — | — | C | 500 |
| j.MK | Jumping Medium Kick | 6 | 6-11 | Landing 3 | — | — | — | 500 |
| j.HP | Jumping Heavy Punch | 12 | 12-17 | Landing 3 | — | — | — | 900 |
| j.HK | Jumping Heavy Kick | 10 | 10-15 | Landing 3 | — | — | — | 800 |

## Key current tools

| Tool | Current fact | Practical meaning |
|---|---|---|
| 5MP | 6F / Hit +7 / Block +2 / C | main close respect / confirm |
| 2MP | 6F / Hit +5 / Block -2 / C | stable confirm |
| 2MK | 8F / Hit +1 / Block -6 / C | low DRC entry |
| M Fuhajin | 13F / Block -6 / stock +1 | basic ender / stock generation |
| L Fuhajin | 10F / Block -4 / stock +1 | stock tool / route component |
| H Fuhajin | 25F / Block -8 / stock +1 | heavier route / stock tool |
| Saihasho | 16F / Hit -2 / Block -8 | stock-spend family base |
| Boosted Saihasho | 16F / Hit +1 / Block -3 | improved stock state |
| Ankensatsu | 24F / Hit +5 / Block -8 | stock-spend route/pressure |
| Boosted Ankensatsu | 24F / Hit +8 / Block -8 | improved follow-up state |
| Go Ohsatsu | 18F / Block -11 | damage route |
| Boosted Go Ohsatsu | 18F / Block -10 | stock-spend route |
| M/H Tensenrin | 5F / Block -37 | anti-air / combo ender |
| OD Tensenrin | 6F fully invincible 1-9F | reversal |
| SA2 Feng Shui Engine | activation system | late-stage cancel/pressure layer |

## Current Year 4 notes

- 5MK second-hit damage: **300 -> 700**.
- Corner H Tensenrin -> 5MP has an important current meaty state around **+5**.
- Current guide keeps Fuhajin stock management and H Tensenrin spacing/hit-height conditions explicit.

## Constraints

- M Fuhajin Oki should be taught as forward-dash action structure unless exact fixed frame truth is closed.
- H Tensenrin Oki changes by hit height / spacing; corner +5 package is condition-specific.
- Boosted specials require stock; never project them as stockless universal moves.
- Feng Shui Engine is late-stage and changes cancel logic; it must not define S0.

## Next

Proceed to Route Master Inventory and audit stock generation vs spending.
