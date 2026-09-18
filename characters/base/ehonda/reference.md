# E. Honda — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch: **2026-08-03 Year 4**
- Current combo / Oki guide: **2026-08-31**
- Checked through: **2026-09-19**
- Health: **10500**

## 2｜Charge / State Truth

### Charge

- [4]6P Sumo Headbutt requires back charge.
- [2]8K Sumo Smash requires down charge.
- charge should be stored during normal defense / compatible actions.
- Sumo Dash / Hands / Oicho are not the same charge requirement.

### Sumo Spirit

22K:
- total about 52F
- changes Hundred Hand Slap properties
- L Hands: Block 0
- OD Hands: Block +1
- some normals gain Spirit-only Hands cancel

Keep S3+.

## 3｜Key Current Values

| State | Current value | Meaning |
|---|---:|---|
| 5MP block | +1 | basic respect |
| Sumo Smash grounded | +23 | S0/S1 Oki |
| Smash dash | +4 | strike / Oicho later |
| Teppo first hit | +42 | safe jump |
| OD Teppo first hit | Block +3 point-blank | S3 pressure |
| current +40 corner family | +40 | active-frame setup |
| Teppo ender | about +41 | safe jump / two-dash +3 |
| Taiho Cannon Lift | +64 forward | launcher budget |
| forward throw | +17 | basic Oki |
| SA1 | +13 | cashout |
| SA3 | +11 | cashout |
| CA | +34 | advanced Oki |

## 4｜Route Library

### R01｜Light
2LP or 2LK > 2LP > L Hundred Hand Slap

### R02｜Light Headbutt
2LP > 2LP > M Sumo Headbutt  
Condition: back charge

### R03｜Light Smash
2LP > 2LP > H Sumo Smash  
Condition: down charge / +23

### R04｜5MP Sumo Dash
5MP > Sumo Dash > Teppo Triple Slap

### R05｜5MP CDR Taiho
5MP > CDR > 5MP > 5HP > Sumo Dash > Taiho Cannon Lift

### R06｜Taiho -> Smash
5MP > CDR > 5MP > 5HP > Taiho Cannon Lift > H Sumo Smash  
End state: +23

### R07｜Taiho -> TC
5MP > CDR > 5MP > 5HP > Taiho Cannon Lift > DR 5MP > 3HK > 2HK

### R08｜DI PC stable
DI PC > 5HP > Taiho Cannon Lift > Sumo Smash

### R09｜DI PC OD
DI PC > 5HP > OD Taiho Cannon Lift > 5HK > Teppo first hit > SA1

### R10｜6HK PC
6HK PC > M Sumo Headbutt > forward dash  
After dash: +4

### R11｜crHP Super
2HP > SA1 / SA2 / SA3 / CA

### R12｜Reversal punish
5HP PC > Taiho Cannon Lift > Sumo Smash

## 5｜Oki / Respect Library

### O01｜Sumo Smash +23
Option A:
2LP whiff -> +7
- H Oicho
- 5HK
- 5MP
- normal throw

Option B:
forward dash 19F -> +4
- 2LP
- normal throw
- Oicho

### O02｜DR 5MK
Sumo Smash -> DR 5MK

Approx:
- hit +11
- block +4

Then:
- 5HK
- Oicho
- shimmy

### O03｜Teppo +42
Sumo Dash > Teppo Triple Slap first hit -> +42 -> immediate forward jump attack

Exact first-hit state required.

### O04｜Current +40 corner family
Examples:
- 5LK whiff -> active meaty
- 5LK whiff -> dash -> +7
- 2MK whiff -> 5MP active

Trigger state is route-specific and must be verified.

### O05｜Teppo ender +41
safe jump OR two forward dashes -> +3 -> strike / Oicho

Exact ender required.

### O06｜OD Headbutt
OD Headbutt -> 2LK x2 > 5MP  
5MP active block about +4

Alternative:
OD Headbutt -> 5MK -> +7

Exact route/state required.

### O07｜OD Teppo +3
OD Sumo Dash > OD Teppo first hit block -> +3 point-blank

Options:
- 2LP
- Oicho

### O08｜Respect Loop
meaty strike -> opponent blocks -> Oicho

If opponent jumps/backwalks:
- strike
- shimmy
- anti-air/read

**Oicho is not guaranteed after knockdown.**

## 6｜Year 4 Notes

- Sumo Dash total: 51F -> **44F**
- Teppo route / forward spacing improved
- 5MP whiff recovery: 15F -> **17F**
- cr.HP can cancel into SA1 / SA2 / SA3
- 5HK first-hit block: -11 -> **-9**

## 7｜Backend-only

- corner Taiho route with omitted source segment
- corner DI route with omitted source segment
- DI +59 trigger with incomplete route
- generic +40/+42 claims without exact trigger
- Sumo Spirit properties outside Spirit state

## 8｜Source Boundary

Current route/frame truth lives in sources.yaml. Charge, Spirit, exact trigger, active-frame, corner and spacing conditions remain part of truth.
