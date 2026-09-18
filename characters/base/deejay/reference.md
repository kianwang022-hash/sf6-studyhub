# Dee Jay — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch: **2026-08-03 Year 4**
- Current combo / Oki guide: **2026-08-31**
- Frame reference: official-reference data through **2026-08-27**
- Checked through: **2026-09-19**
- Health: **10000**

## 2｜Charge / Rhythm Truth

### Air Slasher

- L Air Slasher: fake projectile action
- M/H Air Slasher: real projectile
- OD Air Slasher: resource projectile / close contact can be plus

Learner rule:

**charge availability does not imply real projectile.**

The fake is part of the rhythm layer.

### Jackknife

- M: 6F
- H: 5F
- OD: 6F, fully invincible early
- H grounded hit: current +42 family

Charge state matters.

## 3｜Key Current Values

| State | Current value | Meaning |
|---|---:|---|
| 5MP block | +2 | S0 respect |
| DR 5MP block | +6 | S2 high-pressure contact |
| Quick Rolling Sobat | +34 | basic Oki |
| H Double Rolling Sobat hit | +2 | strike/throw/shimmy handoff |
| M Jackknife | +41 | high Oki budget |
| H Jackknife grounded | +42 | safe jump / two-dash +4 |
| OD MGU | +52 | two dashes -> +14 |
| forward throw | +34 | DR pressure |
| back throw | +22 | reset / position |
| sweep | +33 | active-frame setup |

## 4｜Route Library

### R01｜Light
5LP > 2LP > Quick Rolling Sobat  
End state: +34

### R02｜5MP basic
5MP > 5LK > H Double Rolling Sobat  
End state: hit +2

### R03｜5MP SA3
5MP > 5LK > Quick Rolling Sobat > SA3

### R04｜5MP corner-carry
5MP > 5LK > CDR > 2LP > 2HP > 2MP > H Jackknife Maximum  
End state: grounded +42  
Condition: grounded hit

### R05｜2MP OD Jus Cool stable
2MP > OD Jus Cool > HK variation > delayed H Jackknife Maximum  
Condition: OD / delay / grounded hit

### R06｜2MP OD Jus Cool damage
2MP > OD Jus Cool > MK variation > H Double Rolling Sobat

### R07｜OD Jus Cool SA3
2MP > OD Jus Cool > HK variation > OD Double Rolling Sobat > SA3

### R08｜2HP meterless
2HP > 2MP > L Machine Gun Uppercut

### R09｜2HP corner carry
2HP > 2MP > CDR > 5MP > 2HP > 2MP > H Jackknife Maximum  
Condition: grounded hit

### R10｜5HK PC
5HK PC > DR > 5MP > 2HP > 2MP > H Jackknife Maximum  
Condition: grounded hit

### R11｜2HP PC
2HP PC > 5HP > M Machine Gun Uppercut

### R12｜Corner meterless
2HP > 2MP > M Jackknife Maximum > H Jackknife Maximum  
Follow-up: +37 Knee Shot safe-jump family

### R13｜Corner punish
5HP PC > 4HK > OD Air Slasher > 5LK > OD Jus Cool > HK variation > Quick Rolling Sobat > H Jackknife Maximum

### R14｜DI wall splat
DI wall splat > 5MP > MP > HP > H Jackknife Maximum

## 5｜Oki / Pressure

### O01｜H Jackknife +42
H Jackknife grounded hit -> +42 -> immediate forward jump attack

Condition: grounded hit

Alternative:
two forward dashes -> +4 -> 2MP / throw / shimmy / Jus Cool

### O02｜+37 Knee Shot safe jump
Exact +37 state -> forward jump -> immediate Knee Shot

Condition: exact end state

### O03｜Quick Sobat +34
Quick Rolling Sobat -> Drive Rush

Options:
- DR 6MK -> block +5
- DR 5MP -> block +6
- throw

### O04｜Forward throw +34
forward throw -> dash -> DR

Options:
- DR 5MP
- throw
- Jus Cool

### O05｜OD MGU +52
OD Machine Gun Uppercut -> +52 -> two dashes -> point-blank +14

Options:
- strike meaty
- throw
- delayed throw
- shimmy
- Jus Cool
- block

### O06｜5MP block +2
- 2LP frame trap
- walk-back 2MP
- throw
- target/string timing

### O07｜DR 5MP block +6
- throw
- 5MP
- 2MP
- walk-back shimmy

### O08｜H Double Sobat +2
- 2LP
- 2MP
- throw
- walk-back shimmy

## 6｜Jus Cool Truth

### LK｜Funky Slicer
- low
- block -3

### MK｜Waning Moon
- overhead
- block +1
- throw threat / Year 4 interaction

### HK｜Maximum Strike
- combo starter
- block -10

OD follow-ups are higher-value variants, but still separate decisions.

Never flatten the family into “Jus Cool is safe/plus”.

## 7｜Year 4 Notes

- OD Machine Gun Uppercut: +23 -> **+52**
- OD Double Rolling Sobat startup: 19F -> **17F**
- current L Jackknife movement/input behavior supersedes older guides
- current Waning Moon / throw interaction supersedes older assumptions

## 8｜Backend-only

- reversal extension with ellipsis
- burnout route with ellipsis
- corner max resource chain
- generic Jus Cool safety claims
- SA2 timing system before S4

## 9｜Source Boundary

Current route/frame truth lives in sources.yaml. Grounded-hit, charge, spacing, active-frame, corner and resource conditions remain part of truth.
