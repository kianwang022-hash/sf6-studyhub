# A.K.I. — Reference

> Canonical lookup layer。第一次学习不需要全背；S0只要知道“普通H Lash +44”和“poisoned state会改变下一次route”。

## 1｜Version Boundary

- Baseline patch：2026-08-03 Year 4
- Current combo / Oki guide：updated 2026-08-31
- Current frame reference：official-reference data through 2026-08-27
- UFD August 2026 patch：A.K.I. updated 2026-08-11
- Checked through：2026-09-19
- Health：10000

## 2｜Current Game Plan

Current Year4 route summary:

**Lash / projectile applies poison -> knockdown -> H Lash +44 -> overhead / low / throw / shimmy -> poison burst -> carry corner -> poison puddle -> break defense again -> burst combo -> SA lethal.**

The learning order mirrors this chain instead of dumping all poison routes at once.

## 3｜Poison State Truth

### Unpoisoned target

First priority:
- establish poison;
- take a stable knockdown;
- run ordinary Oki.

### Poisoned target

Qualifying follow-up hits can trigger poison burst and change:
- damage;
- crumple/launch state;
- knockdown budget;
- corner carry;
- available puddle routes.

Poison is therefore a **route-state modifier**, not just passive damage.

## 4｜Normal Baseline Notes

Key normals:
- 5LK: 4F / +3 / -3 / C
- 5MP: 6F / +3 / -3 / C
- 5MK: 8F / +6 / -2
- 5HK: 9F / +4 / -3 / C; PC +12
- 2MP: 7F / +1 / -3 / C
- 2MK: 7F / Hit +5 / Block +1 / SA-only cancel
- 2HP: 10F / Block -8; current Year4 PC poison application
- 2HK: 10F / Block -3; PC launch / current poison route

Do not inherit generic 2MK DRC from other characters.

## 5｜Serpent Lash State Table

### L Serpent Lash
- startup 14F
- Hit +1
- Block -8

### M Serpent Lash
- startup 14F
- Block -12
- poisoned burst: about +69

### H Serpent Lash
- startup 11F
- Block -20
- ordinary end state: +44
- poisoned burst: about +53

### OD Serpent Lash
- startup 21F
- unpoisoned Hit +4
- Block -14
- poisoned burst: about +71

Every burst value requires opponent_poisoned.

## 6｜H Lash +44 Core Oki

H Serpent Lash ordinary hit:
- +44

Two forward dashes:
- 19F + 19F
- leaves about +6

Options:
- 2MK
- 5HK
- delayed throw
- shimmy after throw-tech evidence

Important:
the current guide notes immediate throw can be early; preserve the slight-delay truth.

## 7｜Poison Burst Routes

### R01｜Poisoned M Lash
opponent poisoned -> M Serpent Lash burst -> 5HK -> Heel Strike -> L Serpent Lash

State:
- burst +69 family

### R02｜Poisoned H Lash -> +44 loop
opponent poisoned -> light confirm -> H Serpent Lash burst -> DR 2MP -> H Serpent Lash

Result:
- burst conversion
- returns to ordinary +44 owner

### R03｜Poisoned OD Lash
opponent poisoned -> 2MP -> OD Serpent Lash burst -> 5LK -> M Serpent Lash

State:
- +71 family
- Drive-costed advanced branch

## 8｜Toxic Wreath

5MP > Toxic Wreath

Current:
- startup 13F
- Block -4
- end state about +40

From +40:
- DR 5MP
- DR 2MK
- DR 3MP
- DR throw
- shimmy

## 9｜Qiong Qi

Input:
- 5HP > HP

Current Year4:
- unpoisoned -> about +34
- poisoned -> poison burst -> about +54

Do not merge these states.

## 10｜Corner Poison Puddle

Representative route:

opponent poisoned  
-> M Serpent Lash burst  
-> 5HK  
-> Toxic Wreath  
-> DR 5HK  
-> Venomous Fang  
-> Orchid Spring

After puddle setup:
- about +38 family

From there DR:
- 5MP
- 2MK
- 3MP
- throw
- shimmy

Opponent often tries:
- jump
- forward walk
- invincible reversal

The puddle changes movement incentives; it is not just DOT.

## 11｜Puddle -> Nightshade Active Meaty

Venomous Fang hit -> Orchid Spring -> Nightshade Pulse active meaty

Possible current block family:
- around +12

Condition:
- exact puddle route
- active-frame timing
- invincible reversal check

## 12｜Year4 OD Chaser Block-Poison

OD Nightshade Pulse -> Nightshade Chaser blocked normally

Current Year4:
- can poison on ordinary block
- **Drive Parry is an exception**

Practical use:
- apply poison through defense;
- then make opponent move;
- look for L Lash, 5MK, anti-air H Lash, whiff punish.

Do not teach it as point-blank guaranteed pressure.

## 13｜6HP Active-Frame Setplay

Current 6HP:
- active window increased
- ordinary Block -3

Common exact family:
- predecessor state -> +18
- 6HP active meaty
- about Hit +6 / Block 0

Examples of +18 normalization:
- +44 -> 2LK whiff x2
- +37 -> dash
- +32 -> 2LP whiff
- +31 -> 5LP whiff

These are not interchangeable unless the predecessor state is declared.

## 14｜OD Cruel Fate

Hit:
- +42
- jump-in family

Block:
- +2
- 2LK / throw / delayed 2MK / 5HK

Never project +42 onto block.

## 15｜Safe Jump

H Serpent Lash +44 can support spacing-dependent:
- forward jump HP
- j.2HP

Condition:
- spacing
- screen position
- jump target
- Training Mode verification

After safe-jump block + throw-tech:
- walk back -> 5HK PC shimmy route

## 16｜Throws

Forward throw:
- +19
- DR 5MP / DR 2MK / DR throw family

Back throw:
- +27
- especially useful near corner
- 6HP / 6HK / DR strike meaty family

## 17｜SA

SA1 Deadly Implication:
- startup 10F
- 1800
- invulnerable early window

SA2 Tainted Talons:
- startup 7F
- 2600
- +30
- leaves a large persistent poison field

SA3 Claws of Ya Zi:
- startup 10F
- 4000
- CA 4500
- +30

SA2 is S4 because ordinary puddle / poisoned-state routing should already be stable.

## 18｜Backend-only

- complete poisoned/unpoisoned route matrix in S0
- generic +53/+69/+71 without poisoned state
- raw H Serpent Lash pressure
- generic puddle +38
- generic +18 6HP meaty
- block-poison without Drive Parry exception
- safe jump without spacing / screen condition
- max poison-burst route before value judgment is stable

## 19｜Source Boundary

Current frame / route truth lives in sources.yaml.

Poison state、corner、screen position、Drive Parry、active-frame timing、spacing、airborne hit与exact knockdown state都属于事实本身，不能在learner projection里被删掉。
