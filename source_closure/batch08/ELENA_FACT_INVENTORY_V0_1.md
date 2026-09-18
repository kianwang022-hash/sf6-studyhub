# Elena Fact Inventory v0.1

Status: **PHASE C CANDIDATE**  
Checked: **2026-09-19**

## Stable constraints

- Health: **10000**.
- No stock resource in neutral.
- SA2 includes a distinct Healing variation; it is a late resource/recovery decision.
- Lynx Song is a follow-up hub whose value depends on having earned setup time.

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
| 2HP | Crouching Heavy Punch | 9 | 9-18 / 9-11,16-18 | 20 | +6 | -7 | C | 800 |
| 2HK | Crouching Heavy Kick | 11 | 11-13 | 24 | KD | -12 | — | 900 |
| j.LP | Jumping Light Punch | 5 | 5-10 | Landing 3 | — | — | — | 300 |
| j.LK | Jumping Light Kick | 5 | 5-10 | Landing 3 | — | — | — | 300 |
| j.MP | Jumping Medium Punch | 8 | 8-12 | Landing 3 | — | — | — | 700 |
| j.MK | Jumping Medium Kick | 7 | 7-11 | Landing 3 | — | — | — | 500 |
| j.HP | Jumping Heavy Punch | 10 | 10-16 | Landing 3 | — | — | — | 800 |
| j.HK | Jumping Heavy Kick | 10 | 10-20 / 10-11,13-20 | Landing 3 | — | — | — | 800 |

## Key current tools

| Tool | Current fact | Practical meaning |
|---|---|---|
| 5MK | 6F / Hit +5 / Block +1 / C | early respect / confirm |
| 2MK | 9F / Hit +4 / Block -3 / non-cancel | Year4 safer low; not a Cammy/Juri-style DRC low |
| 2HP | 9F / anti-air invul 8-20F / C | current anti-air conversion hub |
| L Spinning Scythe | 15F / Block -12 / +34 family | basic light/low ender |
| M Spinning Scythe | 20F / Block -14 / +42 family | corner safe-jump ender |
| H Spinning Scythe | 24F / Block -10 / +52 family | high Oki budget |
| M Rhino Horn | 17F / Block -9 / +39 grounded family | medium-contact ender |
| H Rhino Horn | 21F / Block -9 / +40 family | heavier ender |
| OD Rhino Horn | 11F / Block -9 / +43 family | SA2/SA3 cancel route |
| Lynx Song | movement/follow-up hub | enables Leopard Snap / Harvest Circle / Mallet Smash / Lynx Whirl |
| Mallet Smash | 22F / Hit +2 / Block -3 | overhead follow-up |
| Boosted Mallet Smash | 22F / Hit +4 / Block +3 | later enhanced follow-up |
| L Scratch Wheel | 5F / Block -24 | anti-air / ender |
| OD Scratch Wheel | 6F fully invincible 1-8F | reversal |
| SA2 Revival Dance | 12F / 2800 normal branch; Healing variation exists | late damage-vs-recovery decision |

## Current Year 4 notes

- cr.MK: block -4 -> -3; startup 9F / hit +4.
- cr.HP: airborne second-hit behavior improved; anti-air invulnerability 8-20F; second hit special/SA-cancelable.
- OD Spinning Scythe hitbox/route stability improved.
- SA2 Healing variation has Drive recovery in the current version line.

## Constraints

- M Spinning Scythe +42 safe jump is corner-specific in the current guide.
- Rhino Horn / Scratch Wheel Oki can vary with airborne hit height.
- Lynx Song follow-up strength depends on having earned the setup; do not teach it as neutral automatic mix.
- Healing is late-stage and must not replace the stable ground/knockdown model.
- cr.MK is non-cancelable; do not inherit Juri/Cammy 2MK DRC semantics.

## Next

Proceed to Route Master Inventory and audit whether Lynx Song should enter S1 or S2.
