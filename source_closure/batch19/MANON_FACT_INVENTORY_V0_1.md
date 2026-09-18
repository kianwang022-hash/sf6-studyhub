# Manon Fact Inventory v0.1

Status: **PHASE C CANDIDATE**
Checked: **2026-09-19**

## Stable constraints

- Health: **10000**.
- Signature progression: Medal Level.
- Manège Doré and Renversé interactions increase future Medal-scaled reward.
- Medal Level affects command-grab / Renversé / SA3 or CA damage.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 4 | 4-6 | 10 | +4 | -1 | C | 300 |
| 5LK | Standing Light Kick | 5 | 5-6 | 12 | +2 | -2 | C | 300 |
| 5MP | Standing Medium Punch | 7 | 7-10 | 15 | +2 | -2 | C | 600 |
| 5MK | Standing Medium Kick | 10 | 10-12 | 18 | 0 | -5 | C | 600 |
| 5HP | Standing Heavy Punch | 10 | 10-13 | 20 | 0 | -3 | SA | 800 |
| 5HK | Standing Heavy Kick | 15 | 15-17 | 26 | PC +17 / launch | -6 | — | 900 |
| 2LP | Crouching Light Punch | 4 | 4-5 | 11 | +3 | -2 | C | 300 |
| 2LK | Crouching Light Kick | 5 | 5-6 | 13 | -1 | -3 | — | 200 |
| 2MP | Crouching Medium Punch | 7 | 7-9 | 11 | +6 | -1 | C | 600 |
| 2MK | Crouching Medium Kick | 8 | 8-11 | 16 | +4 | -2 | — | 600 |
| 2HP | Crouching Heavy Punch | 10 | 10-14 | 21 | -2 | -8 | — | 600 |
| 2HK | Crouching Heavy Kick | 11 | 11-12 | 27 | KD | -12 | — | 900 |
| j.LP | Jumping Light Punch | 5 | 5-14 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 6 | 6-14 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 8 | 8-11 | Landing 3 | — | — | — | 700 |
| j.MK | Jumping Medium Kick | 7 | 7-12 | Landing 3 | — | — | — | 500 |
| j.HP | Jumping Heavy Punch | 9 | 9-12 | Landing 3 | — | — | — | 800 |
| j.HK | Jumping Heavy Kick | 11 | 11-15 | Landing 3 | — | — | — | 800 |

## Key current tools

| Tool | Current fact | Practical meaning |
|---|---|---|
| Révérence | 8F / Hit +3 / Block +1 / C | unique normal pressure/route |
| H Manège Doré | 5F command grab | high-reward throw / Medal growth |
| L/M Manège Doré | 10F / 8F | range-strength variants |
| H Rond-point | 14F / Block -11 | practical ender / Oki |
| OD Rond-point | 8F / Block -19 | anti-air/resource route |
| H Dégagé | 20F / Hit +3 / Block -9 | low-profile special |
| OD Dégagé | 22F / Hit +6 / Block -3 | throw-invul / airborne route |
| L/M/H Renversé | 22/25/29F / unsafe on block | route + Medal-scaled reward |
| Grand Fouetté | 11F / Block -3 | route/pressure |
| OD Grand Fouetté | 10F / Block -12 | resource route |

## Manège Doré Medal damage

| Medal | Normal hit | Punish Counter |
|---|---:|---:|
| Lv1 | 2000 | 2300 |
| Lv2 | 2300 | 2645 |
| Lv3 | 2700 | 3105 |
| Lv4 | 3000 | 3450 |
| Lv5 | 3700 | 4255 |

## Renversé Medal damage examples

H Renversé:
- Lv1 1500
- Lv2 1650
- Lv3 1800
- Lv4 1950
- Lv5 2100

SA3:
- Lv1 4000
- Lv2 4100
- Lv3 4200
- Lv4 4400
- Lv5 4600

CA:
- Lv1 4500
- Lv2 4600
- Lv3 4700
- Lv4 4900
- Lv5 5100

## Setplay truth

- H Rond-point -> forward dash creates strike / throw / shimmy / block-vs-reversal choices.
- Manège Doré aftermath -> forward dash is not guaranteed continued throw.
- basic Oki response map:
  - block -> throw;
  - mash -> strike meaty;
  - jump -> strike / anti-air;
  - throw tech -> shimmy;
  - reversal -> block punish.

## Constraints

- 2MK is non-cancelable.
- Medal-scaled values require explicit Medal Level.
- command grab remains read/respect based.
- incomplete source strings with ellipsis remain backend-only.
- Medal Level should not be projected as S0 bookkeeping overload.
- spacing/corner/airborne states remain conditional.

## Next

Proceed to Route Master Inventory and audit where Medal Level first becomes learner-facing.
