# Elena Fact Inventory v0.1

Status: **PHASE C CANDIDATE**  
Checked: **2026-09-18**

## Stable constraints

- Health: **10000**.
- No stock resource owns S0.
- Character-specific complexity is end-state time budget + Lynx branch state.
- 2MK is non-cancelable; 2MP is the cancellable crouching medium.

## Baseline Normal table

| Input | Official name | Startup | Active | Recovery | Hit | Block | Cancel | Damage |
|---|---|---:|---|---|---:|---:|---|---:|
| 5LP | Standing Light Punch | 5 | 5-8 | 8 | +4 | -2 | C | 300 |
| 5LK | Standing Light Kick | 5 | 5-7 | 11 | +2 | -4 | C | 300 |
| 5MP | Standing Medium Punch | 8 | 8-12 | 15 | +3 | -3 | SA | 600 |
| 5MK | Standing Medium Kick | 6 | 6-9 | 13 | +5 | +1 | C | 500 |
| 5HP | Standing Heavy Punch | 12 | 12-15 | 20 | +2 | -2 | — | 800 |
| 5HK | Standing Heavy Kick | 12 | 12-15 | 19 | +2 | -4 | — | 900 |
| 2LP | Crouching Light Punch | 4 | 4-6 | 8 | +5 | -1 | C | 300 |
| 2LK | Crouching Light Kick | 5 | 5-7 | 8 | +3 | -1 | — | 200 |
| 2MP | Crouching Medium Punch | 8 | 8-10 | 20 | +1 | -4 | C | 600 |
| 2MK | Crouching Medium Kick | 9 | 9-11 | 18 | +4 | -3 | — | 600 |
| 2HP | Crouching Heavy Punch | 9 | 9-11, 16-18 | 20 | +6 | -7 | C | 800 |
| 2HK | Crouching Heavy Kick | 11 | 11-13 | 24 | KD | -12 | — | 900 |
| j.LP | Jumping Light Punch | 5 | 5-10 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 5 | 5-10 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 8 | 8-12 | Landing 3 | — | — | — | 700 |
| j.MK | Jumping Medium Kick | 7 | 7-11 | Landing 3 | — | — | — | 500 |
| j.HP | Jumping Heavy Punch | 10 | 10-16 | Landing 3 | — | — | — | 800 |
| j.HK | Jumping Heavy Kick | 10 | 10-11, 13-20 | Landing 3 | — | — | — | 800 |

## Key current tools

| Tool | Current fact | Candidate practical meaning |
|---|---|---|
| 5MK | 6F / Hit +5 / Block +1 / C | close respect / confirm |
| 2MK | 9F / Hit +4 / Block -3 / non-cancel | low poke / target-route starter |
| 2MP | 8F / Hit +1 / Block -4 / C | CDR entry |
| 2HP | 9F; 8–20F anti-air invul; hit 2 special/SA cancel | Year4 anti-air conversion |
| L Spinning Scythe | +34 family | simple stable Oki |
| M Spinning Scythe | +42 family | corner safe-jump end state |
| H/OD Spinning Scythe | +52 family | larger later setplay budget |
| M Rhino Horn | +39 grounded family | Lynx Song active-frame bridge |
| H Rhino Horn | +40 family | route / Oki |
| Harvest Circle | +50 | Lynx branch / big Oki |
| Leopard Snap | +48 / block +1 | branch pressure / Oki |
| Mallet Smash | normal hit +2 / block -3 | overhead branch |
| Boosted Mallet Smash | hit +4 / block +3 | stronger branch state |
| L Scratch Wheel | +36 family | anti-air/ender Oki |
| OD Scratch Wheel | 6F fully invincible | reversal |
| Forward throw | +24 | corner dash +4 family |
| Sweep | +31 | dash +11 basic Oki |

## Year 4 notes

- 2MK block -4 -> -3; 9F startup / Hit +4.
- 2HP second airborne hit now launches; anti-air invulnerability 8–20F; hit 2 special / SA cancel.
- OD Spinning Scythe collision / combo stability improved.
- SA2 recovery/healing variation gained Drive recovery in the current version line.

## Constraints

- 2MK is non-cancelable; do not inherit Cammy/Juri low-DRC semantics.
- M Spinning Scythe +42 safe jump requires the matching end-state and corner setup.
- Rhino Horn / Scratch Wheel Oki can vary with hit height / spacing.
- Lynx branch outcomes must retain branch-state truth.
- Boosted Mallet Smash is not the same state as normal Mallet Smash.
- SA2 recovery variation is late-stage; exact recovery semantics must be kept source-grounded.

## Next

Proceed to Route Master Inventory. Final S0 should keep Lynx branch count small until the stable ground/ender loop is proven.
