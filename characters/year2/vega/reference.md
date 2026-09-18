# M. Bison — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch: **2026-08-03 Year 4**
- Current combo / Oki guide: **2026-08-31**
- Frame reference: official-reference data through **2026-08-27**
- Checked through: **2026-09-19**
- Health: **10000**

## 2｜Psycho Mine Truth

### Plant

Normal Backfist Combo hit plants Psycho Mine.

### Persist

Mine stays on the opponent for a limited timer.

### Detonate

Mine can detonate through:
- Backfist Combo
- Psycho Crusher
- Devil Reverse
- timer self-detonation

### Consume

After detonation, return to normal-state move truth.

Learner rule:

**normal and Mine-enhanced variants are separate move states.**

## 3｜Normal vs Mine Risk Table

| Move | Normal block | Mine block | Normal KD | Mine KD |
|---|---:|---:|---:|---:|
| L Crusher | -20 | +6 | +24 | +42 |
| M Crusher | -20 | +6 | +24 | +42 |
| H Crusher | -23 | +5 | +14 | +46 |
| OD Crusher | -3 | +10 | +35 | up to +82 |
| L Backfist | -14 | +9 | +21 | +42 |
| M Backfist | -15 | +9 | +20 | +42 |
| H Backfist | -15 | +9 | +31 | +49 |
| OD Backfist | -25 | -3 | +24 | +48 |
| Devil Reverse | +2~+8 | +22~+28 | state-dependent | +53 or more |
| OD Devil Reverse | +4 | +24 | state-dependent | +51 or more |

Mine state is mandatory for every Mine column.

## 4｜Charge Truth

- [4]6P Psycho Crusher requires back charge.
- [2]8K Shadow Rise requires down charge.
- Backfist / Double Knee do not require the same charge state.
- strongest Mine cash-in routes may require Mine + charge + Drive simultaneously.

## 5｜Route Library

### R01｜Light Crusher
2LK > 2LP > 5LP > L Psycho Crusher  
Condition: back charge  
Normal-state route

### R02｜Light Mine plant
2LP or 2LK > 5LK > L Backfist Combo  
Plant Mine / +21

### R03｜Medium Mine plant
5MP > 2MP > M Backfist Combo  
Plant Mine / +20

### R04｜H Backfist plant
5MP > 2MP > OD Double Knee Press > H Backfist Combo  
Plant Mine / +31

### R05｜2MK DRC
2MK > CDR > 5MP > 2HP > H Backfist Combo  
Plant Mine / +31

### R06｜Year4 5HP Crusher
5HP > 5LP > L Psycho Crusher  
Condition: back charge

### R07｜Year4 5HP plant
5HP > 5LP > L Backfist Combo  
Plant Mine

### R08｜5HK PC
5HK PC > dash > 2HP > OD Double Knee > 6HP > L Crusher  
Condition: PC / back charge

### R09｜Jump plant
j.HK > 5HK > 2MP > OD Double Knee > H Backfist  
Plant Mine / +31

### R10｜DI plant
DI PC > two dashes > 5MP / 6HP TC > L Backfist  
Plant Mine

### R11｜Mine L Backfist
Mine active -> L Backfist  
Hit +42 / Block +9

### R12｜Mine H Backfist
Mine active -> H Backfist  
Hit +49 / Block +9

### R13｜Mine M Crusher
Mine active + back charge -> M Crusher  
Hit +42 / Block +6

### R14｜Mine H Crusher
Mine active + back charge -> H Crusher  
Hit +46 / Block +5

### R15｜Mine OD Crusher
Mine active + back charge -> OD Crusher  
Hit up to +82 / Block +10

## 6｜Oki / Pressure

### O01｜H Backfist normal +31
Midscreen:
- Drive Rush low
- DR 5MP
- DR 6HP overhead
- throw
- shimmy

Corner:
dash 19F -> 4HK active meaty

Approx:
- Hit +7
- Block +4

### O02｜Mine Backfist +42
Mine L/M Backfist -> +42 -> immediate forward jump HP

Safe-jump family.

### O03｜DR 5MP
- Hit +10
- Block +4
- throw / frame trap / shimmy

### O04｜DR 2LK
- Hit +8
- Block +2
- throw / 2MP / shimmy

### O05｜Mine Crusher
L/M:
- Block +6

H:
- Block +5

OD:
- Block +10

Use:
- strike
- throw
- shimmy
- delayed pressure

### O06｜5HP / 4HK
Year4:
- 5HP Block +1
- 4HK Block +1

Basic normal pressure independent of Mine cash-in.

### O07｜Mine timer
Leave Mine active:
- opponent still has to respect future detonation;
- throw / low / normal pressure become more valuable;
- detonation can be delayed until a better opening.

## 7｜Air Pressure

### Normal Devil Reverse
Block advantage varies by landing height:
roughly +2~+8.

### Mine Devil Reverse
Mine active:
roughly +22~+28.

### OD Devil Reverse
Normal:
about +4.

Mine:
about +24.

Keep height conditions explicit.

## 8｜Year 4 Notes

- 5HP Hit +4 -> **+5**, Block +1.
- OD Backfist Mine-version damage: **1700 -> 1800**.
- OD Shadow Rise movement window: **16…46F**.
- older normal L/M Backfist +24/+23 notes replaced by **+21/+20**.

## 9｜Backend-only

- OD Crusher -> Shadow Rise max route
- corner Mine cash-in/replant max
- generic Mine-special safety claims
- fixed Devil Reverse plus claims without height
- high-resource Mine+charge+SA stacks before S4

## 10｜Source Boundary

Current route/frame truth lives in sources.yaml. Psycho Mine state, charge availability, landing height, corner, active timing and resource state are part of the truth.
