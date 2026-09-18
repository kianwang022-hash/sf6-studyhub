# Guile Fact Inventory v0.1

Status: **PHASE C CANDIDATE**  
Checked: **2026-09-19**

## Stable constraints

- Health: **10000**.
- Core input system: charge.
- Charge-system curriculum rule: charge is stored while performing compatible actions.
- 2MK is non-cancelable and should not inherit earlier 2MK DRC curriculum.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 5 | 5-7 | 7 | +4 | -2 | C | 300 |
| 5LK | Standing Light Kick | 5 | 5-6 | 12 | +3 | -1 | C | 300 |
| 5MP | Standing Medium Punch | 7 | 7-9 | 15 | +6 | 0 | C | 600 |
| 5MK | Standing Medium Kick | 7 | 7-11 | 18 | +1 | -4 | — | 700 |
| 5HP | Standing Heavy Punch | 7 | 7-9 | 23 | -1 | -6 | C | 900 |
| 5HK | Standing Heavy Kick | 12 | 12-14 | 21 | +4 | -4 | SA | 800 |
| 2LP | Crouching Light Punch | 4 | 4-6 | 8 | +5 | -2 | C | 300 |
| 2LK | Crouching Light Kick | 5 | 5-6 | 12 | +1 | -3 | — | 200 |
| 2MP | Crouching Medium Punch | 6 | 6-8 | 13 | +4 | -2 | C | 600 |
| 2MK | Crouching Medium Kick | 8 | 8-10 | 18 | +4 | -5 | — | 500 |
| 2HP | Crouching Heavy Punch | 9 | 9-13 | 20 | 0 | -9 | C | 900 |
| 2HK | Crouching Heavy Kick | 9 | 9-29 / 9-10,27-29 | 21 | KD | -12 | — | 900 |
| j.LP | Jumping Light Punch | 4 | 4-13 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 6 | 6-15 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 7 | 7-9 | Landing 3 | — | — | — | 700 |
| j.MK | Jumping Medium Kick | 7 | 7-13 | Landing 3 | — | — | — | 600 |
| j.HP | Jumping Heavy Punch | 9 | 9-12 | Landing 3 | — | — | — | 800 |
| j.HK | Jumping Heavy Kick | 10 | 10-14 | Landing 3 | — | — | — | 800 |

## Key current tools

| Tool | Current fact | Practical meaning |
|---|---|---|
| Sonic Boom | 10F / total ~40 / Block -3 | horizontal control; charge-dependent |
| Perfect Sonic Boom | same startup / more damage | execution optimization, not S0 requirement |
| OD Sonic Boom | 10F / Block +3 | resource pressure/projectile state |
| L Somersault | 5F / Block -30 | fast anti-air/ender |
| M Somersault | 6F / Block -31 | route/anti-air |
| H Somersault | 7F / Block -32 | core combo ender / Oki |
| OD Somersault | 6F / fully invincible 1-11F | reversal |
| L/M/H Sonic Blade | 16/21/31F | space/setplay object |
| OD Sonic Blade | 15F / Block +1 | Year4 plus-pressure layer |
| Sonic Cross | 10F follow-up family | blade/space conversion |
| 4HP Recoil Cannon | 16F / Block -9 / cancellable | charge-compatible route normal |
| 6HP Burning Straight | 9F / Block -4 / cancellable | PC / pressure route |
| 3HK Guile High Kick | 10F / Block -9 / cancellable | corner frame-kill/setplay tool |
| SA2 Solid Puncher | 6F activation total | late projectile-system layer |

## High-leverage current end states

- L Somersault: +36...
- M Somersault: +37...
- H Somersault: +37...; specific current setups around +39...41
- OD Somersault: +29...
- sweep: +34
- forward throw: +15
- SA1: +41
- HP-version SA1: +70
- SA3: +16
- corner H Somersault -> 3HK whiff: +4
- hit-height-specific H Somersault: about +42 safe-jump family

## Current Year 4 notes

- 5HK startup: 13F -> 12F.
- OD Sonic Blade block state: -4 -> +1.
- cr.HP is current special/SA cancelable.
- H Somersault post-hit frame advantage remains hit-height sensitive.

## Constraints

- charge availability is part of move truth; learner routes must not pretend Boom/Flash Kick are always available.
- 2MK is non-cancelable.
- +42 safe jump is hit-height conditioned.
- Sonic Blade meaty / Cross setups keep spacing/timing/corner conditions.
- Solid Puncher belongs late and should not replace basic Boom/Flash Kick discipline.

## Next

Proceed to Route Master Inventory and audit whether S0 should include Sonic Blade at all or stop at Boom/Flash Kick + basic Oki.
