# Marisa — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Current combo / Oki guide：**2026-08-31**
- Frame reference：official-reference data through **2026-08-27**
- Checked through：**2026-09-19**
- Health：**10500**

## 2｜Charged Attack Truth

Charged 不是 charge-input。

它意味着：
- 持续 hold normal / special；
- startup 变慢；
- damage / armor / frame state 变化。

### Key charged values

- charged 5HP：23F / Hit +7 / Block +5 / 1200
- charged 5HK：24F / Block +1 / 1200
- charged 2HP：21F / Block -3 / 1000
- charged 2HK：20F / Block -3 / 1200
- charged j.HP：28F / 1500
- charged j.HK：29F / 1500
- charged 4HP：20F / Hit +13 / Block +4
- charged Falx first hit：27F / Hit +10 / Block +3

## 3｜Special Truth

### Gladius

Normal:
- L 17F / Block -5
- M 19F / Block -5
- H 22F / Block -5

Charged:
- L 30F / Block +4 / 2400
- M 35F / Block +4 / 2600
- H 41F / Block +4 / 2800

OD:
- normal 19F / Block -2
- charged 35F / Block +4

Armor does not erase startup / whiff / punish risk.

### Dimachaerus

- L first hit 12F / Block -16
- M 16F / Block -16
- H 22F / Block -16
- dedicated 6P follow-up leads to practical knockdown states

### Phalanx

- L/M/H：Block +3
- OD：Block +4
- H / route ender can create +42 safe-jump family

### Quadriga

- L：Block -6
- M：Block -3
- H：Block +1

### Enfold

- 5F
- 2500 damage
- current end state about +18

Use after respect, not as automatic S0 guess.

## 4｜Route Library

### R01｜Light
2LK or 2LP > 2LP > L Dimachaerus > 6P  
End state：+31

### R02｜5MP Damage
5MP > MP > M Gladius

### R03｜5MP Oki
5MP > MP > M Dimachaerus > 6P  
End state：+36

### R04｜2MP Basic
2MP > M Gladius

### R05｜2MP CDR Damage
2MP > CDR > 5MK > 4HP > H Dimachaerus > 6P > H Gladius

### R06｜2MP CDR Safe Jump
2MP > CDR > 5MK > 4HP > H Dimachaerus > 6P > DR > 2HP > H Phalanx  
End state：+42

### R07｜5MP Safe Jump
5MP > MP > OD Dimachaerus > 6P > DR > 4HP > H Phalanx  
End state：+42

### R08｜Heavy Starter
6HK or 4HP > H Dimachaerus > 6P > H Gladius

### R09｜5HK PC
5HK PC > DR > 6HK > 6HK follow-up > M Dimachaerus > 6P > 2HK

### R10｜DR Overhead
DR > 3HP > 2LP > 2LP > L Dimachaerus > 6P

### R11｜Corner Safe Jump
5MP > MP > OD Dimachaerus > 6P > fully charged 4HP > L Phalanx  
Condition：corner / full charge  
End state：+42

## 5｜Oki / Respect Library

### O01｜L Dimachaerus +31

Frame-kill:
- 5LP whiff -> 6HK
- 2LP whiff -> 6HK

Approx active-meaty state:
- Hit +7
- Block +1

After respect:
- immediate Enfold
- throw
- shimmy

### O02｜M Dimachaerus +36

DR > 6HK active meaty

Then:
- strike
- throw
- walk-back

### O03｜Phalanx +42

Immediate forward jump HP / HK

Safe-jump family.

Additional choices after respect:
- 4HP strike
- immediate Enfold
- 6HK

### O04｜Forward Throw +23

forward dash 22F -> +1

Then:
- 2LP
- throw

Alternative:
DR > 5MK active meaty

Approx:
- Hit +10
- Block +4

### O05｜Corner +36

5LP whiff -> fully charged 4HP

or

2MP whiff -> immediate Enfold

Condition：
corner / exact spacing / respect.

### O06｜Enfold +18

DR > Scutum

Used for:
- reversal bait
- delayed Enfold
- strike read

Late-stage only.

## 6｜Year 4 Key Points

- 6HK current Hit +4 / Block -2.
- PC / DR 6HK can enter higher-reward states.
- H Quadriga current Block +1.
- M Quadriga Block -3.
- Phalanx +42 safe jump remains a key current route.
- active-frame / corner spacing must be verified.

## 7｜Anti-template Truth

- cr.MK is non-cancelable.
- Enfold is not S0.
- +42 belongs to Phalanx ender state.
- charged values require actual full-charge timing.
- armor is a read tool, not safety.
- damage route is not automatically better than Oki route.

## 8｜Backend-only

- max reversal punish
- OD Quadriga corner max
- Burnout full Quadriga string
- generic charged / armor safety
- Enfold without respect/setup

## 9｜Source Boundary

Current frame / route truth lives in sources.yaml. Full-charge timing, active-frame timing, corner spacing, opponent respect and resource state remain part of the truth.
