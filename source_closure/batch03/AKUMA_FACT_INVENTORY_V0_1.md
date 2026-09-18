# Akuma Fact Inventory v0.1

Status: **PHASE C CANDIDATE**
Checked: **2026-09-18**

## Health / identity constraints

- Health: **9000**.
- No separate stock/resource bar owns the character.
- Character-specific complexity comes from option density: charged projectile, air projectile, Demon Raid, Adamant Flame, Ashura Senku and multiple setplay end states.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 4 | 4-6 | 7 | +4 | -1 | C | 300 |
| 5LK | Standing Light Kick | 5 | 5-7 | 11 | +2 | -4 | C | 300 |
| 5MP | Standing Medium Punch | 6 | 6-9 | 11 | +4 | +1 | C | 600 |
| 5MK | Standing Medium Kick | 7 | 7-11 | 15 | +3 | -3 | C | 700 |
| 5HP | Standing Heavy Punch | 9 | 9-13 | 18 | +3 | -3 | C | 800 |
| 5HK | Standing Heavy Kick | 13 | 13-15, 24-27 | 15 | +7 | +3 | — | 800 |
| 2LP | Crouching Light Punch | 4 | 4-5 | 9 | +5 | -1 | C | 300 |
| 2LK | Crouching Light Kick | 5 | 5-6 | 10 | +3 | -3 | — | 200 |
| 2MP | Crouching Medium Punch | 6 | 6-8 | 14 | +6 | -1 | C | 600 |
| 2MK | Crouching Medium Kick | 8 | 8-10 | 19 | 0 | -6 | C | 500 |
| 2HP | Crouching Heavy Punch | 8 | 8-15 | 19 | +1 | -8 | C | 900 |
| 2HK | Crouching Heavy Kick | 9 | 9-11 | 23 | KD | -12 | — | 900 |
| j.LP | Jumping Light Punch | 4 | 4-13 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 6 | 6-15 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 8 | 8-11 | Landing 3 | — | — | C | 700 |
| j.MK | Jumping Medium Kick | 7 | 7-12 | Landing 3 | — | — | — | 500 |
| j.HP | Jumping Heavy Punch | 9 | 9-14 | Landing 3 | — | — | — | 800 |
| j.HK | Jumping Heavy Kick | 12 | 12-17 | Landing 3 | — | — | — | 800 |

## Key tools / current facts

| Tool | Current fact | Candidate practical meaning |
|---|---|---|
| 5MP | 6F / Hit +4 / Block +1 / C | early respect / pressure connector |
| 5HK | 13F / Hit +7 / Block +3 | strong respect tool; multi-hit active behavior needs context |
| 2MP | 6F / Hit +6 / Block -1 / C | stable grounded confirm |
| 2MK | 8F / Block -6 / C | low DRC entry |
| Gou Hadoken Lv1 | 12-16F by strength; negative on block | ordinary projectile base |
| Gou Hadoken Lv2 | 31F / Block +2 | charged pressure / timing layer |
| Gou Hadoken Lv3 | 56F / Block +21 | high-commit charge / setplay layer |
| OD Gou Hadoken | 12F / Block +2 | meter-based plus projectile |
| OD Gou Hadoken charged | 31F / Block +21 | later setplay layer |
| H Gou Shoryuken | 7F / 1500 / Block -36 | anti-air / stable ender; +30 route family |
| OD Gou Shoryuken | 6F fully invincible 1-8F | reversal |
| L Tatsu | 12F / Block -13 | route bridge into 2HK +37 family |
| H Tatsu | 7F / Block -59 | route ender; grounded hit +34 family |
| H Adamant Flame | 23F / Block -3 | route ender; current guide +47 family |
| OD Adamant Flame | 18F / Block -3 | PC crumple / corner wall-splat family |
| Demon Low Slash | 8F / Block +2 | Demon Raid low branch |
| Demon Guillotine | 16F / Block +1~+10 | height-conditioned branch |
| Demon Blade Kick | 13F / Block -4~+5 | height-conditioned branch |
| Ashura Senku Forward | total 51F with pass-through window | mobility / setplay state, not neutral default |

## Key end-state candidates

- Forward throw: +28.
- H Gou Shoryuken: +30.
- DI combo: about +31.
- OD Tatsu -> M Shoryuken: +32.
- H Tatsu grounded hit: +34.
- L Tatsu -> 2HK: +37 current family.
- M Tatsu: +41.
- H Adamant Flame: +47.
- OD Adamant Flame midscreen: +63.

## Constraints

- Demon Raid follow-up block advantage depends on follow-up and often height; no universal "Demon Raid is plus".
- Fully charged Gou Hadoken pressure requires charge time / setplay spacing.
- Current guide explicitly replaces older +42 L Tatsu -> 2HK assumptions with +37 family.
- Akuma's 9000 health is a stable character constraint and should influence risk explanation, not be used as generic hype.

## Next

Proceed to Route Master Inventory. Final S0 identity remains unresolved until routes are audited.
