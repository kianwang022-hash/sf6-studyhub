# Manon — Reference

> Canonical lookup layer。第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Current combo / Oki guide：**2026-08-31**
- Frame reference：official-reference data through **2026-08-27**
- Checked through：**2026-09-19**
- Health：**10000**

## 2｜Medal Level Truth

Medal Level changes future reward.

### Manège Doré

| Medal | Normal hit | Punish Counter |
|---|---:|---:|
| Lv1 | 2000 | 2300 |
| Lv2 | 2300 | 2645 |
| Lv3 | 2700 | 3105 |
| Lv4 | 3000 | 3450 |
| Lv5 | 3700 | 4255 |

### H Renversé

| Medal | Damage |
|---|---:|
| Lv1 | 1500 |
| Lv2 | 1650 |
| Lv3 | 1800 |
| Lv4 | 1950 |
| Lv5 | 2100 |

### SA3 Pas de Deux

| Medal | Damage |
|---|---:|
| Lv1 | 4000 |
| Lv2 | 4100 |
| Lv3 | 4200 |
| Lv4 | 4400 |
| Lv5 | 4600 |

### CA Pas de Deux

| Medal | Damage |
|---|---:|
| Lv1 | 4500 |
| Lv2 | 4600 |
| Lv3 | 4700 |
| Lv4 | 4900 |
| Lv5 | 5100 |

Every scaled number requires explicit Medal Level.

## 3｜Medal Strategy

### Lv1–2

- one clean Medal interaction has meaningful future value;
- ordinary Oki / position still matters;
- do not sacrifice every current turn to chase Medal.

### Lv3

- command-grab reward is now large enough that jump / mash often become more attractive;
- strike value rises.

### Lv4–5

- Manège Doré is extremely damaging;
- opponent anti-grab behavior becomes a central read;
- high Medal does **not** mean “always command grab”.

## 4｜Key Move Truth

### Révérence

- startup 8F
- Hit +3
- Block +1
- cancellable

### H Manège Doré

- startup 5F
- command grab
- Medal-scaled damage

### H Rond-point

- startup 14F
- Block -11
- practical ender
- current source supports forward-dash Oki action structure, but does not support one universal fixed KD number

### M Renversé

- startup 25F
- Block -20
- projectile-invulnerable window
- Medal-scaled route value

### H Dégagé

- 20F
- Hit +3
- Block -9
- low-profile invulnerability

### OD Dégagé

- 22F
- Hit +6
- Block -3
- throw-invulnerable / airborne state

## 5｜Route Library

### R01｜Light
2LP > 2LP > H Rond-point

### R02｜5MP Basic
5MP > Drive Rush > 2MP > 4HP > M Renversé

### R03｜5MK
5MK > Drive Rush > 2MP > 4HP > M Renversé

### R04｜Jump Medium
j.MK > 2LP > 2LP > H Rond-point

### R05｜Jump Heavy
j.HP or j.HK > 4HP > M Renversé

### R06｜Raw DR
Drive Rush > 2MP > 4HP > M Renversé

### R07｜DI PC
DI PC > forward dash > 4HP > OD Rond-point > M Renversé

### R08｜Corner DI
DI wall splat > 4HP > M Renversé

### R09｜Corner DI Meter
DI wall splat > 4HP > OD Rond-point > 4HP > H Renversé

### R10｜Anti-air
2HP

### R11｜Meter Anti-air
anti-air hit > OD Rond-point > Renversé

### R12｜Air-to-air
j.MP > OD Rond-point > Renversé

## 6｜Oki / Feedback Library

### O01｜H Rond-point Ender

forward dash:

- strike
- normal throw
- shimmy
- block vs reversal

No unsupported fixed KD number is added here.

### O02｜Throw Aftermath

normal throw / Manège Doré -> forward dash

Important:
- spacing remains conditional;
- not a guaranteed continued throw.

Then:
- strike
- throw
- shimmy
- block

### O03｜Basic Response Map

Opponent block:
- throw / command grab when appropriate

Opponent mash:
- strike meaty

Opponent jump:
- strike / anti-air

Opponent throw-tech:
- shimmy

Opponent reversal:
- block -> punish

Opponent DI:
- DI counter / block when available

### O04｜Corner

- meaty strike -> Renversé route
- throw -> Medal opportunity
- shimmy
- DI vs Burnout
- block reversal

## 7｜Anti-template Truth

- 2MK is non-cancelable.
- Medal Level is not S0 bookkeeping.
- command grab requires respect / point-blank read.
- throw-after dash is not guaranteed throw.
- all Medal-scaled damage requires explicit Level.
- incomplete source strings with ellipsis remain backend-only.

## 8｜Backend-only

- source routes with omitted starter before OD Rond-point
- fixed H Rond-point KD number
- command grab without read/setup
- Medal-scaled value without Level
- high-resource SA routes before S4

## 9｜Source Boundary

Current frame / route truth lives in sources.yaml. Medal Level, spacing, airborne state, corner, respect, Punish Counter and resource state remain part of the truth.
