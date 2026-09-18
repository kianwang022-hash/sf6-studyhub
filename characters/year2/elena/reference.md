# Elena — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Current combo / Oki guide：**2026-08-31**
- Current frame reference：official-reference data through **2026-08-27**
- Checked through：**2026-09-19**
- Health：**10000**

## 2｜关键数值

| Tool / state | Current value | Meaning |
|---|---|---|
| 5MK | 6F / Hit +5 / Block +1 | 基础respect。 |
| 2MK | 9F / Hit +4 / Block -3 / non-cancel | Year4低段。 |
| L Scythe | +34 | 基础Oki。 |
| M Scythe | +42 | midscreen two dashes +2；corner safe jump。 |
| H Scythe | +52 | 高Oki budget。 |
| M Rhino Horn | +39 grounded | Lynx setup入口。 |
| H Rhino Horn | +40 | 高价值ender。 |
| OD Rhino Horn | +43 | SA2/SA3 route。 |
| Leopard Snap | +48 | Lynx高预算结果。 |
| Harvest Circle | +50 | route / Oki hub。 |
| Forward throw | +24 | corner dash后 +4。 |
| SA1 | +42 | corner safe jump family。 |
| SA2 | +25 | normal branch。 |
| SA3 | +24 | DR setup。 |

## 3｜Route Library

### R01｜Light
2LP x2 > L Spinning Scythe  
End state：+34  
Verify：verified

### R02｜Low
2MK > 2LP > L Spinning Scythe  
End state：+34  
Verify：verified

### R03｜Medium
5MP > MP > M Rhino Horn  
End state：+39 grounded  
Verify：verified

### R04｜5MK basic
5MK > 2LP > 5LK > H Scratch Wheel  
Verify：verified

### R05｜5MK CH
5MK CH > 5MK / HK > H Rhino Horn  
Verify：conditioned

### R06｜2MK target
2MK > HK > H Rhino Horn  
End state：+40 family  
Verify：verified

### R07｜2MP CDR
2MP > CDR > 5MK > 2HP > H Spinning Scythe > M Rhino Horn  
Verify：verified

### R08｜Oki-focused meter
2MK / medium starter > OD Spinning Scythe > DR 2MP > L Lynx Song > Harvest Circle  
End state：about +41  
Verify：conditioned

### R09｜Jump-in
j.HP > 2HP > H Spinning Scythe > M Rhino Horn  
Verify：verified

### R10｜Blocked reversal stable
5MK PC > 2HP > H Spinning Scythe > M Rhino Horn  
Verify：verified

### R11｜Corner light
2LK > 2LP > L Rhino Horn > M Scratch Wheel  
Verify：conditioned: corner

### R12｜Corner medium
5MP > MP > M Rhino Horn > M Scratch Wheel  
Verify：conditioned: corner

### R13｜SA3
5HP > HP > SA3  
Verify：verified

### R14｜SA1 route
5HP > HP > SA1 > H Scratch Wheel  
Verify：verified

## 4｜Oki / Setplay

### O01｜L Scythe +34
Corner：
- dash -> +14 -> 5HP active meaty
- 2LP whiff -> 2LK low meaty

Midscreen：
- 2LP x2 whiff -> +10 -> 2MK active

All active-frame versions are conditioned.

### O02｜M Scythe +42
Midscreen：
- two forward dashes -> +2
- throw / 2LP / 2LK

Corner：
- immediate forward jump HP -> safe jump

Corner condition is mandatory.

### O03｜Rhino +39 -> Lynx
M Rhino grounded hit -> +39 -> L Lynx Song -> +11 -> Mallet Smash active

Approx:
- hit +4
- block -1

Conditioned by grounded hit / timing.

### O04｜Lynx Song mix hub
Earned setup only:

- Mallet Smash overhead
- 2MK low
- throw
- Lynx Whirl -> walk-back shimmy

### O05｜Harvest Circle +50
Can route into:
- Rhino Horn
- Scratch Wheel
- SA

### O06｜+41 setplay
OD Spinning Scythe > DR 2MP > L Lynx Song > Harvest Circle

Then:
- M Lynx Song active
- dash -> +21
- conditioned 6F safe-jump family

### O07｜Forward throw +24
Corner forward dash 20F -> +4

Options:
- throw
- 5MK
- 2LP
- shimmy

### O08｜Sweep +31
forward dash -> +11  
throw / 5MK / DR 2MK

## 5｜Lynx follow-up truth

- Leopard Snap: normal block -5; Boosted block +1.
- Harvest Circle: normal block -9; Boosted block -4.
- Mallet Smash: normal Hit +2 / Block -3.
- Boosted Mallet Smash: Hit +4 / Block +3.

Do not flatten the whole family into “Lynx is plus”.

## 6｜SA2 Revival Dance

### Normal branch
- startup 12F
- damage 2800
- after hit +25

### Healing variation
- damage 1950
- heals 1600
- current source notes Drive recovery
- current source notes +1 Oki family

Use only in S4 when current health / Drive / kill range justify it.

## 7｜Backend-only / conditioned

- anti-air 2HP -> OD Rhino -> SA2 height-specific conversion.
- airborne Scythe -> Lynx Whirl frame families.
- +41 exact safe-jump timing.
- active-frame Mallet / 5MK / 6MK exact timing.
- universal Rhino / Scratch Wheel fixed-frame claims.

## 8｜Source Boundary

Current frame and route truth live in sources.yaml. All spacing, airborne-height, corner, active-frame and Healing-specific claims remain conditioned unless explicitly verified.
