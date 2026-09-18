# E. Honda Fact Inventory v0.1

Status: **PHASE C CANDIDATE**
Checked: **2026-09-19**

## Stable constraints

- Health: **10500**.
- Charge moves: Sumo Headbutt / Sumo Smash.
- Command grab: Oicho Throw, 6F.
- State layer: Sumo Spirit changes Hundred Hand Slap properties.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 5 | 5-7 | 10 | +4 | -1 | C | 300 |
| 5LK | Standing Light Kick | 4 | 4-5 | 9 | +5 | -1 | C | 300 |
| 5MP | Standing Medium Punch | 10 | 10-13 | 13 | +6 | +1 | C | 700 |
| 5MK | Standing Medium Kick | 10 | 10-13 | 16 | +4 | -3 | conditional | 700 |
| 5HP | Standing Heavy Punch | 8 | 8-14 | 20 | +1 | -6 | C/conditional | 900 |
| 5HK | Standing Heavy Kick | 8 | 8-14 / 8-9,11-14 | 22 | -1 | -5 | C | 800 |
| 2LP | Crouching Light Punch | 4 | 4-6 | 10 | +4 | -1 | C | 300 |
| 2LK | Crouching Light Kick | 5 | 5-6 | 9 | +3 | -3 | conditional | 200 |
| 2MP | Crouching Medium Punch | 8 | 8-11 | 16 | +3 | -3 | C | 600 |
| 2MK | Crouching Medium Kick | 9 | 9-11 | 17 | +6 | -2 | conditional | 500 |
| 2HP | Crouching Heavy Punch | 11 | 11-14 | 17 | +3 | -3 | conditional/SA | 800 |
| 2HK | Crouching Heavy Kick | 11 | 11-24 / 11-13,20-24 | 14 | KD | -10 | — | 900 |
| j.LP | Jumping Light Punch | 5 | 5-10 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 6 | 6-11 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 6 | 6-13 | Landing 3 | — | — | — | 700 |
| j.MK | Jumping Medium Kick | 9 | 9-14 | Landing 3 | — | — | — | 700 |
| j.HP | Jumping Heavy Punch | 9 | 9-12 | Landing 3 | — | — | — | 800 |
| j.HK | Jumping Heavy Kick | 10 | 10-17 | Landing 3 | — | — | — | 800 |

Additional normal outside the standard 18-row baseline: Neutral Jumping Heavy Punch, 10F / 800.

## Key current tools

| Tool | Current fact | Practical meaning |
|---|---|---|
| L Hundred Hand Slap | 12F / Hit +2 / Block -4 | S0 light ender |
| Spirit L Hands | Hit +4 / Block 0 | later pressure state |
| Spirit OD Hands | Hit +6 / Block +1 | later plus pressure |
| L/M/H Headbutt | 10/10/14F / Block -3 | charge movement / route tool |
| OD Headbutt | 9F / Block -20 / armor | reversal-ish / route state, high risk on block |
| L/M/H Sumo Smash | 11F / Block +1 | charge cross-up / Oki tool |
| OD Sumo Smash | 6F / Block +2 | higher-value charge tool |
| L/M/H Oicho Throw | 6F / 2000/2200/2400 | command-grab reward |
| OD Oicho | 6F / 2800 | high-resource command grab |
| Sumo Dash | total 44F | Teppo / Taiho route hub |
| OD Sumo Dash | total 34F | faster route hub |
| Teppo first hit | 9F / Block -3 | +42 end-state family |
| OD Teppo first hit | 9F / Block +3 | point-blank pressure |
| Taiho Cannon Lift | 12F / Block -22 | launcher / +64 state |
| Sumo Spirit | total 52F | changes Hands properties |

## High-leverage current end states

- Sumo Smash grounded: +23
- another current grounded-hit family: +40
- Teppo first hit: +42
- OD Teppo first hit: +45
- Taiho Cannon Lift: +64 forward state
- forward throw: +17
- SA1: +13
- SA3: +11
- CA: +34
- 6HK PC > M Headbutt > dash: +4

## Current Year 4 notes

- Sumo Dash total: 51F -> **44F**
- Teppo route/spacing improvements
- 5MP whiff recovery: 15F -> **17F**
- cr.HP can cancel to SA1/SA2/SA3
- 5HK first-hit block: -11 -> **-9**
- 6HK PC behavior updated

## Constraints

- 2MK is not a normal DRC low; its special cancel is Sumo-Spirit Hands-specific.
- Oicho is a respect conversion, not guaranteed close Oki.
- +42 safe jump belongs to Teppo/DI-specific states.
- OD Teppo +3 is setup/point-blank truth, not generic Sumo Dash safety.
- Sumo Spirit is later because 52F activation is a real opportunity cost.

## Next

Proceed to Route Master Inventory and audit where Oicho first belongs in S0-S4.
