# Blanka — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Current combo / Oki guide：**2026-08-31**
- Frame reference：official-reference data through **2026-08-27**
- Checked through：**2026-09-19**
- Health：**10000**

## 2｜Charge / Object Truth

### Charge

- [4]6P Rolling Attack requires back charge.
- [2]8K Vertical Rolling Attack requires down charge.
- charge is stored during ordinary defense / compatible actions.
- blocked Rolling remains highly punishable; charge availability does not make it a safe neutral entry.

### Blanka-chan Bomb

- placed object;
- current placement action about 50F;
- activated by Electric Thunder / related attacks;
- most valuable after corner/setup is already earned;
- does not automatically create mix without activation timing.

### SA2 Lightning Beast

- late install;
- changes Rolling-family behavior;
- enables Rolling Cannon follow-ups;
- S4 only.

## 3｜Key Current Values

| State | Current value | Meaning |
|---|---:|---|
| 4MK | 9F / Hit +8 / Block +2 | strong ground respect; Year 4 whiff recovery 16F |
| Electric Thunder | +39 | S0 default Oki |
| OD Electric Thunder | Block +4 | S2 object/high-low pressure |
| L Vertical Rolling | +35 | route-dependent Oki |
| M/H Vertical Rolling | +42 | exact-state safe jump family |
| H Rolling Attack | +30 | travel/damage |
| OD Rolling Attack | +57 | high-resource route |
| OD Wild Hunt | +64 | high Oki budget |
| Wild Lift | +55 | route/setplay state |
| Forward throw | +30 | Hop +3 family |
| SA3 | +50 | advanced Oki |

## 4｜Route Library

### R01｜Light
5LK > 2LP > Electric Thunder  
End state：+39  
Verify：verified

### R02｜Low
2LK > 2LP > Electric Thunder  
End state：+39  
Verify：verified

### R03｜Light Rolling
5LK > 5LK > M Rolling Attack  
Condition：back charge

### R04｜4MK Thunder
4MK > 5MK > Electric Thunder  
End state：+39

### R05｜4MK Rolling
4MK > 2MK > M Rolling Attack  
Condition：back charge

### R06｜2MP Thunder
2MP > Electric Thunder  
End state：+39

### R07｜2MP Rolling
2MP > M Rolling Attack  
Condition：back charge

### R08｜2MP CDR damage
2MP > CDR > 5HK > 5HP > Coward Crouch > Wild Lift > M Vertical Rolling Attack  
End state：+42 family  
Condition：down charge / exact route

### R09｜2MP CDR Oki
2MP > CDR > 5HK > 5HP > Coward Crouch > Wild Lift > Amazon River Run

### R10｜5HK basic
5HK > 2LP > L Vertical Rolling Attack  
Condition：down charge

### R11｜DR overhead
DR > 6MP > 5HK > 2LP > L Vertical Rolling Attack

### R12｜5HK PC
5HK PC > 5HP > Coward Crouch > Wild Lift > M Vertical Rolling Attack  
End state：+42 family

### R13｜Corner Bomb
5HP > Coward Crouch > Wild Lift > Blanka-chan Bomb  
Condition：corner

### R14｜Corner damage
5HP > Coward Crouch > Wild Lift > Electric Thunder > H Vertical Rolling Attack  
Condition：corner / down charge

### R15｜DI
DI > 5HP > Electric Thunder > H Vertical Rolling Attack  
End state：+42 family

### R16｜OD Thunder overhead
OD Electric Thunder > 6MP > hit 2 > backdash > H Backstep Rolling Attack > Electric Thunder > H Vertical Rolling Attack  
Condition：OD / timing / charge

### R17｜OD Thunder low
OD Electric Thunder > 2MK > hit 2 > backdash > H Backstep Rolling Attack > Electric Thunder > H Vertical Rolling Attack  
Condition：OD / timing / charge

### R18｜SA2 midscreen
5HP > SA2 > 5HP > L Vertical Rolling Attack > Rolling Cannon > L Vertical Rolling Attack > delayed Rolling Cannon  
Condition：SA2 active

### R19｜SA2 corner
2MP > OD Electric Thunder > SA2 > Electric Thunder > H Vertical Rolling Attack > Rolling Cannon > Blanka-chan Bomb  
Condition：corner / SA2 / Bomb

## 5｜Oki / Setplay

### O01｜Electric Thunder +39

Option A:
forward dash -> +20

Option B:
two forward dashes -> +1 -> 5LK meaty

Option C:
Surprise Forward Hop -> +11 -> immediate 5HP meaty / throw

### O02｜Corner Thunder +39

4MK whiff -> +13 -> 4MK active meaty

Approx:
- Hit +13
- Block +7

Condition：corner / active timing.

### O03｜M Vertical +42

exact M Vertical Rolling state -> +42 -> immediate forward jump HK

Condition：exact Vertical route state.

### O04｜Amazon River Run

Grounded hit:
- +29
- DR 6MP overhead meaty family

Airborne hit:
- +35
- forward dash -> +16
- or Hop -> +8

Keep grounded / airborne truth separate.

### O05｜Wild Lift -> Vertical

L Vertical:
- +38
- Hop -> +11

M Vertical:
- +44
- two dashes -> +6

### O06｜Forward throw +30

Surprise Forward Hop -> +3

Options:
- throw
- 5LK
- DR 2MK
- DR 6MK

### O07｜OD Wild Hunt +64

high Oki budget:
- meaty throw
- delayed strike
- object setup

Condition：command-grab hit.

## 6｜Bomb Setplay

### Placement

earned corner route -> Blanka-chan Bomb

### Activation

Electric Thunder / related attack activates the Bomb.

### Basic learner mix

- delayed strike
- 6MP overhead
- 2MK low
- throw
- Perfect Parry / reversal read

**Bomb must keep corner + placement + activation timing truth.**

## 7｜OD Electric Thunder

Block +4.

Around active Bomb:
- overhead
- low
- throw
- delayed activation pressure

Do not teach OD Thunder high/low as S0.

## 8｜Year 4 Notes

- charged Electric Thunder behavior updated.
- 4MK whiff recovery: 12F -> **16F**.
- 4MK remains Hit +8 / Block +2.
- 5MP startup: 10F -> **9F**.
- current Bomb interactions supersede older guide assumptions.

## 9｜Lightning Beast

SA2:
- install state;
- Rolling Cannon becomes part of Rolling-family pressure/combo system;
- S4 only.

## 10｜Backend-only

- full Bomb tree
- generic +42 claims without exact Vertical state
- blocked Rolling treated as safe entry
- Lightning Beast full interaction tree before S4

## 11｜Source Boundary

Current route/frame truth lives in sources.yaml. Charge, Bomb placement/activation, corner, airborne state, spacing and active-frame timing remain part of truth.
