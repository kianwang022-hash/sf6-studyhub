# Rashid — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch: **2026-08-03 Year 4**
- Current combo / Oki guide: **2026-08-31**
- Frame reference: official-reference data through **2026-08-27**
- Checked through: **2026-09-19**
- Health: **10000**

## 2｜关键数值

| State | Current value | Meaning |
|---|---:|---|
| 5MP | 6F / Hit +5 / Block +1 | 普通近身 respect |
| 2MP | 6F / Hit +4 / Block +1 | 稳定 confirm |
| 2MK | 7F / Block -5 / C | 低段 DRC |
| M Spinning Mixer | +31 | S0 默认 Oki |
| Boosted M Mixer | +42 | Air Current state only |
| H Spinning Mixer | +33 | alternative KD |
| Boosted OD Mixer | +42 | Air Current state only |
| L Eagle Spike | +30…42 | spacing-dependent |
| M Eagle Spike | +56…68 | spacing-dependent |
| H Eagle Spike | +52…64 | spacing-dependent |
| Nail / Rolling Assault | +44 | movement branch |
| Forward throw | +27 | dash / DR pressure |
| SA3 | +17 | later cashout |

## 3｜Route Library

### R01｜Light stable
2LK > 5LP > 5LP > M Spinning Mixer  
End state: +31  
Verify: verified

### R02｜Light carry
5LP > 5LK > L Eagle Spike  
Verify: spacing-conditioned

### R03｜2MP carry
2MP > 5LK > L Eagle Spike  
Verify: spacing-conditioned

### R04｜Medium stable
5MK > 5MP > M Eagle Spike  
Verify: spacing-conditioned

### R05｜2MK DRC
2MK > CDR > 5MK > 5HP > M Eagle Spike  
Verify: verified route

### R06｜5HP DRC
5HP > CDR > 2HP > 5HP > M Eagle Spike  
Verify: verified route

### R07｜5HP PC
5HP PC > H Eagle Spike  
Verify: verified route

### R08｜5HK PC
5HK PC > 6MP > L Eagle Spike  
Verify: verified

### R09｜Air Current PC route
5HK PC > 6MP > OD Arabian Cyclone > Air Current Boosted M Spinning Mixer  
End state: +42  
Verify: conditioned

### R10｜DI carry
DI PC > j.HK > 5HK > 6MP > L Eagle Spike  
Verify: verified

### R11｜DI Oki
DI PC > j.HK > 6MP > H Eagle Spike  
Verify: spacing-conditioned

### R12｜Cyclone movement
5MP / target route > H Arabian Cyclone > Wing Stroke > L Arabian Skyhigh  
Verify: conditioned

### R13｜SA3 lethal
5MK > 5MP > CDR > 2HP > 5HP > CDR > 2HP > 5HP > L Eagle Spike > SA3  
Verify: conditioned: resources / kill

## 4｜Oki / Re-entry

### O01｜M Mixer +31
M Spinning Mixer -> +31 -> Drive Rush  
strike / throw / shimmy

### O02｜M Eagle Spike Run
M Eagle Spike -> Run

Options:
- active cr.MP
- cr.MP > 5LK > L Eagle Spike
- throw

All spacing-conditioned.

### O03｜Corner M Eagle Spike
M Eagle Spike -> 5MK whiff -> forward dash  
about point-blank +5

Options:
- throw
- cr.LK
- 6HP active overhead

### O04｜H Eagle Spike
H Eagle Spike -> 5LP whiff -> forward jump HK  
Verify: spacing / route conditioned

### O05｜H Arabian Cyclone
H Arabian Cyclone > Wing Stroke > L Arabian Skyhigh -> forward dash  
Result: +5 family  
overhead / throw / low

### O06｜Boosted +42
Air Current Boosted M Mixer or OD Mixer -> +42 -> forward jump

**Air Current condition is mandatory.**

### O07｜Nail / Rolling +44
jump-in / throw / overhead  
Verify: branch-conditioned

### O08｜Forward throw +27
forward dash 18F -> about +9 depending spacing  
DR strike / DR throw / read

## 5｜Air Current truth

Air Current changes several specials.

Examples:
- normal L Mixer block -3; Boosted L Mixer block +2.
- normal M Mixer is +31 Oki; Boosted M Mixer enters +42 family.
- boosted Eagle Spike has different startup/recovery properties.

Never project Boosted values into normal state.

## 6｜Arabian Cyclone

- L: 15F / block -6
- M: 20F / block -4
- H: 27F / block -2
- OD: 20F / block -10; Year4 active-frame behavior changed

Cyclone is a movement / setplay hub, not a neutral autopilot button.

## 7｜Ysaar

SA2 Ysaar:
- startup 11F
- creates a persistent tornado/screen-control layer
- learner-facing core: overhead / low / throw while Ysaar changes space

Keep in S4.

## 8｜Backend-only

- charged OD Whirlwind complete branch tree
- all duplicate Boosted routes without distinct value
- OD Arabian Cyclone +47…51 active-frame details without exact setup
- Ysaar full interaction tree

## 9｜Source Boundary

All current route/frame truth lives in sources.yaml. Spacing, Air Current, active-frame and corner claims remain conditioned where applicable.
