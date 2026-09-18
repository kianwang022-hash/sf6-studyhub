# Guile — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Current combo / Oki guide：**2026-08-31**
- Frame reference：official-reference data through **2026-08-27**
- Checked through：**2026-09-19**
- Health：**10000**
- Controls：Classic

## 2｜Charge truth

Charge不是独立动作。

Learner rule：

- crouch-block / down-back期间存down+back charge；
- 兼容crouching normals期间继续保charge；
- back-direction unique normals可帮助维持back charge；
- forward walk / dash会主动放弃当前back/down-back charge；
- route里出现Somersault时，必须提前有down charge；
- route里出现Boom时，必须提前有back charge。

不要把“有route”误读成“任何时刻special都可用”。

## 3｜Command Index

- [4]6P｜Sonic Boom
- [2]8K｜Somersault Kick
- 214P｜Sonic Blade
- Sonic Blade后6P｜Sonic Cross
- 214214P｜SA2 Solid Puncher
- SA1 Sonic Hurricane
- SA3 Crossfire Somersault

## 4｜关键数值

| State | Current value | Meaning |
|---|---:|---|
| 5MP | 7F / Hit +6 / Block 0 | 基础medium confirm |
| 2MP | 6F / Hit +4 / Block -2 | charge-friendly confirm |
| normal Sonic Boom | 10F / Block -3 | 水平塑形 |
| OD Sonic Boom | Block +3 | 资源projectile pressure |
| L/M/H Somersault | 5/6/7F | anti-air / ender |
| OD Somersault | 6F / fully invincible early | reversal |
| L/M/H Somersault Oki | about +36 / +37 / +37 | route-dependent |
| corner H Somersault | 3HK whiff -> +4 | strike/throw/shimmy |
| OD Sonic Blade | 15F / Block +1 | Year4 pressure升级 |
| forward throw | +15 | meterless/DR follow-up |
| HP-version SA1 | +70 | advanced setplay |
| SA3 | +16 | late cashout |
| special H Somersault state | about +42 | hit-height-conditioned safe jump |

## 5｜Route Library

### R01｜Light
2LK > 2LP > H Somersault Kick  
Verify：charge-ready

### R02｜Light extended
2LK > 2LP > 5LK > H Somersault Kick  
Verify：charge-ready

### R03｜5MP basic
5MP > 2MP > H Somersault Kick  
Verify：route charge timing

### R04｜Back-normal
5MP > 4HP > H Somersault Kick  
Verify：verified

### R05｜2MP
2MP > H Somersault Kick  
Verify：verified

### R06｜2HP current route
2HP > H Somersault Kick  
Verify：current cancel route

### R07｜DR stable
DR > 5MP > 2HP > H Somersault Kick

### R08｜DR damage
DR > 5MP > 5MP > 2MP > H Somersault Kick

### R09｜DR overhead
DR > 6MP > 2MP > H Somersault Kick

### R10｜5HP PC
5HP PC > 5MP > 4HP > H Somersault Kick

### R11｜6HP PC
6HP PC > 5MP > 2MP > H Somersault Kick

### R12｜Sweep PC
2HK PC > 3HK > H Somersault Kick  
Condition：first-hit PC state

### R13｜Corner stable
6HP PC > 5MP > 4HP > L Sonic Blade > H Somersault Kick  
Condition：corner

### R14｜Corner OD Blade
6HP PC > 5HP > OD Sonic Blade > Sonic Cross > H Somersault Kick  
Condition：corner / resource

### R15｜Boom route
6HP PC > 2MP > L Sonic Boom > 2LP > H Somersault Kick  
Condition：charge/timing

### R16｜Corner jump-in Boom
j.HP > 2HP > L Sonic Boom > 2LP > 5LK > H Somersault Kick  
Condition：corner / charge

### R17｜SA3 basic
2MP > H Somersault Kick > SA3

### R18｜SA3 easy
5MP > 4HP > SA3

### R19｜SA1 current
5MP > 4HP > HP-version SA1  
Condition：SA1 version

### R20｜Reversal punish lethal
5HP PC > 5HP > CDR > 5HK > 2MP > H Somersault Kick > SA3  
Condition：resources / kill range

## 6｜Oki / Setplay

### O01｜Corner +4
corner H Somersault > 3HK whiff -> +4

Options：
- throw
- strike
- walk-back shimmy

### O02｜M Somersault -> DR
Options：
- DR 2MP
- DR 6MP
- DR throw

### O03｜H Somersault -> Sonic Blade
Midscreen:
- L Blade / H Blade
- Sonic Cross
- anti-air
- spacing reset

Spacing/timing conditioned.

### O04｜OD Blade +1
OD Sonic Blade block -> +1

Options：
- 2LP
- Sonic Cross
- throw
- reset spacing

### O05｜6HP block +3
Options：
- 2LP
- 5MP
- throw

### O06｜4HP CDR -> 5MP block +4
Options：
- throw
- 5MP frame trap
- walk-back shimmy

### O07｜Forward throw +15
Meterless / DR follow-up family.  
Spacing and reversal response matter.

### O08｜HP SA1 +70
two forward dashes -> +28

Options：
- Sonic Blade
- Drive Rush
- meaty

### O09｜Hit-height +42
specific H Somersault hit state -> about +42 -> immediate forward jump attack

**Hit-height condition is mandatory.**

## 7｜Year 4 notes

- 5HK startup: 13F -> **12F**
- OD Sonic Blade block: -4 -> **+1**
- cr.HP current special / SA cancel property
- Somersault Oki remains hit-height-sensitive

## 8｜Backend-only

- delayed Sonic Boom high-execution loop
- terse SA2 route until input normalization
- generic H Somersault +42 claims
- Perfect Boom/Somersault as entry requirement

## 9｜Source Boundary

Current frame / route truth lives in sources.yaml. Charge availability, hit height, spacing, corner and active-frame conditions remain part of the truth.
