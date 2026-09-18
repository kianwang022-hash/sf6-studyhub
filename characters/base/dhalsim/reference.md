# Dhalsim — Reference

> Canonical lookup layer。第一次学习不需要全背；S0只需要range geometry、lane anti-air、M Flame +33和一条M Blast→Teleport +3转换。

## 1｜Version Boundary

- Baseline patch：2026-08-03 Year 4
- Current combo / Oki guide：updated 2026-08-31
- Current frame reference：official-reference data through 2026-08-27
- UFD Dhalsim August patch：live since 2026-08-10
- Checked through：2026-09-19
- Health：10000

## 2｜Long-Limb Frame Truth

Official-reference table给出baseline。

但Dhalsim部分长肢具有很长active window，所以：

**实际命中/被防时的frame取决于哪一帧active碰到对手。**

Current UFD practical ranges include examples:

### 2LK
baseline:
- Hit -5
- Block -10

late contact practical:
- Hit可改善到约 +1
- Block可改善到约 -4

### 2MK
baseline:
- Hit -3
- Block -10

late contact practical:
- Hit可改善到约 +9
- Block可改善到约 +2

### 2HK
baseline:
- KD
- Block -16

practical contact:
- knockdown budget约 +22..+37
- Block可改善到约 -1

这些不是让你“追求固定plus”。

它们说明：

**spacing与contact timing本身就是Dhalsim的frame data。**

## 3｜Close Normal Anchors

4MP Yoga Uppercut:
- 8F
- Hit +2
- Block -3
- cancelable
- close/steep anti-air

1HP Nirvana Punch:
- 10F
- Hit +3
- Block -3
- cancelable

4MK Divine Kick:
- 7F
- Hit +3
- Block 0
- cancelable
- S0 close confirm owner

## 4｜Yoga Fire

Normal:
- startup 15F
- travel speed changes by strength
- ordinary baseline pressure is not inherently plus

Charged:
- long hold
- knockdown around +49
- Block around -1 family

OD:
- startup 12F
- knockdown +49
- Block -3

Fire's learner purpose:
- force jump
- force walk
- force wait
- create another geometry layer

## 5｜Yoga Arch — Delayed Projectile Truth

Startup:
- 18F

Raw frame row:
- around Hit +1
- Block -1

But outside point blank:
Dhalsim can recover before the arcing projectile reaches the opponent.

Current UFD effective post-recovery budget:
- around +29 on later hit
- around +27 on later block

Condition:
- non-point-blank
- delayed projectile contact

Never render this as “Yoga Arch is Block +27”.

## 6｜Yoga Flame

### L
- 16F
- KD +33
- Block -4

### M
- 20F
- KD +33
- Block -4

### H
- 26F
- KD +45
- Block -4

### OD
- 18F
- KD +51
- Block -11
- juggle-state utility

Raw H Flame is not plus.
Large plus H Flame states come from active-meaty setup.

## 7｜Yoga Blast

### L
- 12F
- KD +39
- Block -6

### M
- 15F
- KD +42
- Block -3

### H
- 17F
- KD +42
- Block -3

### OD
- 12F
- KD +42
- Block 0

## 8｜Identity Route — M Blast -> Teleport

Route:

2LP  
-> CDR  
-> 5LP  
-> 4MP Yoga Uppercut  
-> M Yoga Blast  
-> P Yoga Teleport (Forward)

State:
- M Yoga Blast +42
- immediate forward P Teleport
- point-blank about +3

Options:
- 5LP
- 4MK
- throw
- block / reversal read

Condition:
- confirmed hit
- exact M Blast +42
- immediate forward P Teleport

**raw forward Teleport does not own +3.**

## 9｜Yoga Teleport

Ground forward:
- full invincibility 5-15F
- total recovery / motion remains meaningful

Air forward:
- full invincibility 10-15F

Teleport may:
- cross up by version/spacing
- change side
- convert knockdown into proximity

But frame advantage comes from:
- knockdown cover
- projectile cover
- setup timing

not from “Teleport = plus”.

## 10｜Yoga Float

Ground Float:
- levitation state
- forward version moves while rising

Aerial Float:
- faster aerial state
- height/trajectory changes follow-up

Basic learner route:
Aerial Yoga Float > j.HP > 1HP > M Yoga Flame  
End:
- +33

Advanced Float/Drill/Comet remains S4 / Training Mode.

## 11｜Starter Route Library

### R01｜Close basic
4MK > M Yoga Flame  
End：+33

### R02｜Identity Drive route
2LP > CDR > 5LP > 4MP > M Yoga Blast > forward P Teleport  
End：point-blank +3 after covered Teleport

### R03｜Light OD Fire
5LP > 2LP > OD Yoga Fire  
End：+49 or more family

### R04｜H Flame
2MP > CDR > 4MK > H Yoga Flame  
End：+45

### R05｜Aerial Float
Aerial Yoga Float > j.HP > 1HP > M Yoga Flame  
End：+33

### R06｜OD Flame
OD Yoga Flame > 2HK

### R07｜5HK PC
5HK Punish Counter > 1HP > OD Yoga Flame > 2HK

### R08｜Corner Blast
corner 4MK > H Yoga Blast > L Yoga Blast  
End：+37

### R09｜Year4 projectile chain A
OD Yoga Fire > Yoga Arch > Yoga Comet

### R10｜Year4 projectile chain B
OD Yoga Arch > Yoga Fire > Yoga Comet

## 12｜Forward Throw

forward throw:
- +31

Current pressure:
forward throw +31 -> Drive Rush > 2MK  
active contact can create about Block +5 family.

Condition:
- exact throw state
- Drive Rush timing
- contact timing

Corner:
forward throw +31 -> 2LK whiff
- about +5 before close action

## 13｜Corner +37 Setplay

Exact owner:
corner 4MK > H Yoga Blast > L Yoga Blast  
End:
- +37

Branches:

### Point-blank
about +4 family  
-> 4MK / throw / block

### Shimmy
2MK whiff  
-> about +7 timing budget  
-> walk-back / punish

### Fire cover
5LP whiff -> L Yoga Fire  
-> later projectile Block about +3 family  
-> jump-in / strike / throw

All require:
- corner
- H Blast -> L Blast exact route

## 14｜Active H Yoga Flame

In declared corner meaty setups:
H Yoga Flame can contact on later active frames and produce a large plus family, around +11 in the published setup family.

Raw H Yoga Flame:
- Block -4

Therefore:
**the setup is plus, not the move in general.**

## 15｜Year4 Projectile Chains

Current 2026-08-03 route additions include:

- OD Yoga Fire -> Yoga Arch -> Yoga Comet
- OD Yoga Arch -> Yoga Fire -> Yoga Comet

These combine:
- straight projectile
- arcing projectile
- aerial projectile

and should be understood as multi-lane geometry rather than a memorized combo string.

## 16｜Anti-air

Close/steep:
- 4MP Yoga Uppercut

Farther lane:
- 5HK
- airborne hit launch

Later routes may add:
- Yoga Blast
- Drive conversion
- SA

S0 only needs lane recognition.

## 17｜SA

SA1 Yoga Inferno:
- startup 10F
- variants differ in damage / block
- throw invulnerability early
- route-dependent end states

Higher SA:
- use only on confirmed route / lethal / position value.

Super is not Dhalsim's identity owner.

## 18｜Backend-only

- raw forward Teleport +3
- full Float/Teleport tree in S0
- Yoga Arch “Block +27” without delayed projectile condition
- long-limb fixed positive frames without late contact
- generic corner +37
- raw H Yoga Flame +11
- Year4 Comet chain before single-projectile geometry is stable
- matchup-specific Drill / Float height before S4

## 19｜Source Boundary

Current frame / route truth lives in sources.yaml.

Spacing、late active contact、projectile travel、air height、corner、active timing、knockdown owner与Teleport cover都属于事实本身，不能从learner projection里删掉。
