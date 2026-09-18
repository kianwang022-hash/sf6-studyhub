# Alex Fact Inventory v0.1

Status: PHASE C PASS  
Version: Year 4 / 2026-08-03  
Sources: SRC01 / SRC02 / SRC03 / SRC04 / SRC05 / SRC06

## 1. Complete baseline Normal table

| Input | Startup | Active | Recovery | Hit | Block | Cancel | Damage | Decision note |
|---|---:|---|---:|---:|---:|---|---:|---|
| 5LP | 4 | 2 | 9 | +5 | -1 | Chain | 300 | fastest standing light |
| 5LK | 6 | 2 | 13 | +1 | -5 | C | 300 | route/punish support |
| 5MP | 7 | 4 | 14 hit / 15 block | +4 | 0 | C / TC | 600 | Year4 hit buff; core contact |
| 5MK | 9 | 3 | 19 | +3 | -4 | - | 700 | spacing normal |
| 5HP | 12 | 5 | 19 | +4 | -3 | SA | 900 | charge changes state; charged can enter Prowler |
| 5HK | 16 | 3 | 23 | +1 | -4 | - | 900 | charged version gains knockdown / Prowler option |
| 2LP | 5 | 3 | 8 | +5 | -2 | Chain / C | 300 | close confirm |
| 2LK | 5 | 3 | 13 | +2 | -2 | Chain / TC | 200 | low light |
| 2MP | 8 | 2 | 16 | +1 | -2 | C | 600 | M Flash Axe starter |
| 2MK | 8 | 3 | 18 | +5 | -2 | - | 600 | Year4 hit buff; non-cancelable |
| 2HP | 9 | 6 | 22 | -3 | -5 | C / Prowler on hit | 800 | anti-air / stance-entry route |
| 2HK | 10 | 3 | 26 | KD +29 | -11 | Prowler on hit | 1000 | Year4 stance transition |
| j.LP | 5 | 8 | Landing 3 | +8..+11 | +5..+8 | - | 300 | air-to-air / jump |
| j.LK | 6 | 9 | Landing 3 | +6..+11 | +3..+8 | - | 300 | cross-up |
| j.MP | 7 | 4 | Landing 3 | +10..+11 | +6..+7 | special route | 700 | Year4 Cross Chop route utility |
| j.MK | 8 | 7 | Landing 3 | +11..+14 | +8..+11 | - | 700 | jump-in |
| j.HP | 9 | 6 | Landing 3 | +9..+15 | +5..+11 | - | 800 | airborne knockdown property |
| j.HK | 10 | 7 | Landing 3 | +12..+15 | +8..+11 | - | 800 | heavy jump-in |

The Gold learner table will retain the same 18 baseline rows. Charged-state details belong in tools/Reference rather than pretending the baseline row is one universal state.

## 2. Decision-changing unique / stance facts

- 4MK / Oblique Stomp: 7F, Hit +5, Block +2, 600. Year4 changed Block +1 -> +2.
- 6MP / Chop: 22F overhead-style unique normal, Hit +3, Block -3.
- Prowler command: 2PP.
- Prowler LP: 4F, Hit +2, Block -2.
- Prowler MP / Shoulder Launcher: 7F, anti-air invulnerability, knockdown +51, Block -6.
- Prowler HP / Heavy Lariat: 12F, Hit +6, Block +3; charged version reaches Block +5 and has improved armor duration.
- Prowler MK / Air Stampede: 30F overhead, KD +28, Block +2.
- Prowler HK,Hk Sweep Combination: low/low, powerful commitment, Block -17 / -20.
- Prowler throw / Hyper Takedown: 5F, KD +32.
- Dangerous Armbar: 21F, 2000, KD +21; whiffs crouchers and now has projectile invulnerability 3–22.

## 3. Specials

- L Flash Axe: 236LP, 13F, 800, Hit +4, Block -4.
- M Flash Axe: 236MP, 17F, 1000, KD +39, Block -6; current route owner for Prowler transition on hit.
- H Flash Chop: 236HP, 26F, 1100, Hit +5, Block +2; turn-around state can convert to Power Drop.
- Aerial Knee Smash: 623K family; anti-air / combo ender. H common end state +29; OD common end state +27.
- Power Bomb: 63214P; L/M/H startup 9/7/5F, 2500, KD +15.
- OD Power Bomb: 5F, 2900, KD +15.
- Power Drop after turn-around: side-switch/carry state; OD variants can create +38 or forward-input +42 end states.

## 4. Supers

- SA1 Raging Spear: 9F, 2000, strike/throw invulnerability window.
- SA2 Sledgecross Hammer: 13F, 3000, invulnerable start and wall-splat utility.
- Omega Wing Buster: extra super cashout after OD Power Drop family; high-resource S4 material.
- SA3 Final Prison: 12F, 4000; CA 4500.

## 5. Current high-value Oki states

- H Aerial Knee Smash: +29.
- OD Aerial Knee Smash: +27 -> dash -> +5 family.
- forward throw: +28 -> dash -> +6 family.
- M Flash Axe: +39 -> Prowler entry.
- Prowler throw: +32 -> immediate Prowler 6P meaty family.
- 4MK blocked: +2 pressure decision.
- Air Stampede blocked: +2.
- Heavy Lariat blocked: +3, charged +5.
- corner j.MP -> Flying Cross Chop route: point-blank +8 state.
- forward-input OD Power Drop: +42 state.

## 6. Anti-anchoring facts

- 2MK is non-cancelable. Do not inherit 2MK DRC.
- 4MK +2 is a decision advantage, not a guaranteed Power Bomb.
- Power Bomb KD +15 is not guaranteed point-blank repeat pressure.
- Prowler Sweep is not “safe low”.
- +42 belongs to an exact OD Power Drop state.
- +8 Cross Chop pressure belongs to an exact corner route/state.

## Phase C judgment

PASS. Current facts are sufficient for route compilation.
