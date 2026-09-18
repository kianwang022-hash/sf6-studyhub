# M. Bison Fact Inventory v0.1

Status: **PHASE C CANDIDATE**  
Checked: **2026-09-19**

## Stable constraints

- Health: **10000**.
- Charge moves: Psycho Crusher / Shadow Rise.
- Signature opponent state: Psycho Mine.
- Backfist Combo plants Mine on hit.
- Mine can self-detonate or be detonated by selected specials.
- Mine-enhanced variants have separate frame/damage truth.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 5 | 5-6 | 11 | +4 | -3 | C | 300 |
| 5LK | Standing Light Kick | 4 | 4-5 | 10 | +3 | -1 | C | 300 |
| 5MP | Standing Medium Punch | 8 | 8-10 | 15 | +6 | 0 | C | 600 |
| 5MK | Standing Medium Kick | 10 | 10-12 | 17 | +2 | -3 | — | 700 |
| 5HP | Standing Heavy Punch | 19 | 19-21 | 17 | +5 | +1 | SA | 1000 |
| 5HK | Standing Heavy Kick | 13 | 13-16 | 19 | +6 | -2 | — | 900 |
| 2LP | Crouching Light Punch | 4 | 4-5 | 10 | +4 | -2 | C | 300 |
| 2LK | Crouching Light Kick | 5 | 5-6 | 10 | +4 | -2 | — | 200 |
| 2MP | Crouching Medium Punch | 6 | 6-8 | 14 | +5 | -1 | C | 600 |
| 2MK | Crouching Medium Kick | 8 | 8-10 | 19 | -2 | -6 | C | 500 |
| 2HP | Crouching Heavy Punch | 10 | 10-15 | 21 | 0 | -9 | C | 900 |
| 2HK | Crouching Heavy Kick | 11 | 11-13 | 26 | KD | -12 | — | 900 |
| j.LP | Jumping Light Punch | 5 | 5-8 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 5 | 5-11 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 8 | 8-11 | Landing 3 | — | — | — | 700 |
| j.MK | Jumping Medium Kick | 7 | 7-13 | Landing 3 | — | — | — | 500 |
| j.HP | Jumping Heavy Punch | 9 | 9-14 | Landing 3 | — | — | — | 800 |
| j.HK | Jumping Heavy Kick | 10 | 10-15 | Landing 3 | — | — | — | 800 |

## Key current tools

| Tool | Normal state | Mine state | Practical meaning |
|---|---|---|---|
| L Psycho Crusher | 14F / Block -20 | Block +6 | charge cash-in; unsafe without Mine |
| M Psycho Crusher | 20F / Block -20 | Block +6 | same state rewrite |
| H Psycho Crusher | 24F / Block -23 | Block +5 | heavier cash-in |
| OD Psycho Crusher | 16F / Block -3 | Block +10 | high-value Mine cash-in |
| L Backfist | 13F / Block -14 / +21 KD | Block +9 / +42 KD | light Mine plant/cash-in |
| M Backfist | 17F / Block -15 / +20 KD | Block +9 / +42 KD | medium Mine route |
| H Backfist | 22F / Block -15 / +31 KD | Block +9 / +49 KD | main Oki / Mine cash-in |
| OD Backfist | 14F / Block -25 / +24 KD | Block -3 / +48 KD | Year4 1800 Mine version |
| L/M/H Double Knee | 13/17/22F / Block -5/-5/-4 | same | non-charge route/pressure |
| Devil Reverse | Block +2~+8 | Block +22~+28 | Mine-enhanced air pressure |
| OD Devil Reverse | Block +4 | Block +24 | resource air pressure |
| OD Head Press | Block +5~+7 | Mine-independent | late air route |
| 4HK Evil Knee | 10F / Hit +4 / Block +1 / C | same | pressure/route normal |
| 6HP Psycho Hammer | 22F overhead / Block -3 | same | overhead layer |

## Psycho Mine lifecycle

- planted by Backfist Combo hit;
- persists for a limited timer;
- can self-detonate;
- can be detonated by Backfist Combo / Psycho Crusher / Devil Reverse hit or block;
- after detonation, Bison returns to normal-state move truth.

## High-leverage current end states

Normal:
- L/M/H Backfist: +21 / +20 / +31
- OD Backfist: +24
- L/M/H Crusher: +24 / +24 / +14
- OD Crusher: +35
- forward throw: +21
- back throw: +18
- sweep: +29
- SA1: +11
- SA2: +23
- SA3: +15

Mine:
- L/M Backfist: +42
- H Backfist: +49
- OD Backfist: +48
- L/M Crusher: +42
- H Crusher: +46
- OD Crusher: up to +82
- Devil Reverse: +53 or more
- OD Devil Reverse: +51 or more

## Current Year 4 notes

- st.HP Hit +4 -> **+5**, Block +1.
- OD Backfist Mine-version damage: **1700 -> 1800**.
- OD Shadow Rise movement window: **16…46F**.
- older L/M Backfist +24/+23 notes are replaced by **+21/+20** normal-state values.

## Constraints

- Mine-enhanced values require Mine state.
- normal Crusher / Backfist remain unsafe on block.
- +42 safe jump belongs to Mine-enhanced L/M Backfist/Crusher end states, not normal versions.
- Shadow Rise / Devil Reverse block advantage is height-conditioned.
- Psycho Crusher requires back charge; Shadow Rise requires down charge.
- Mine timer/detonation is state truth, not a learner-facing fixed combo unless the setup owns it.

## Next

Proceed to Route Master Inventory and audit whether S0 should plant Mine but defer Mine detonation until S1.
