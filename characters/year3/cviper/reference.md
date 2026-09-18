# C. Viper — Reference

> Canonical lookup layer。第一次学习不需要全背；S0只要5MP +1、H Tracer Oki、一条meterless route和一条HJC proof。

## 1｜Version Boundary

- Baseline patch：2026-08-03 Year 4
- Current combo / Oki guide：updated 2026-08-31
- Current UFD：August 2026 updates complete
- Checked through：2026-09-19
- Health：10000

## 2｜High Jump Cancel Truth

High Jump：
- 2 > 8 / 9
- outside SA1 install costs 1 Drive
- cannot High Jump backward; down-up-back resolves neutral high jump in current UFD behavior

Standard ground normals:
- all except 2HK are HJC-capable
- unique attacks are not included in this standard-normal rule

High Jump pre-jump can special cancel.

Therefore:
- 5MK
- 2MK
- 5HP

can reach specials through HJC even without ordinary direct-special-cancel ownership.

This is Viper's central route grammar.

## 3｜Normal Anchors

5MP:
- 8F
- Hit +6
- Block +1

5MK:
- 8F
- Hit +5 current Year4
- Block -3
- HJC

2MK:
- 8F
- Hit +5
- Block -1
- HJC

2HP:
- 9F
- Hit +2
- Block -5
- C / HJC
- forces stand

2HK:
- KD +34
- Block -11
- **no HJC**

## 4｜Thunder Dash

### L
- 17F
- Hit +2..+4 current
- Block -4..-2
- Tracer available
- projectile invulnerable late

### M
- 16F
- Hit +1..+4
- Block -3..0
- Tracer available

### H
- 7F
- KD +21
- Block -24
- anti-air invulnerable 1-9F
- Tracer available

### OD
- KD +42
- Block -2
- **cannot Tracer**
- second hit can cancel SA2/SA3

## 5｜Tracer Combination

Tracer from normal Thunder Dash:
- costs 1 Drive
- strength/state changes aftermath

Current practical owners:
- L Dash -> Tracer: +37
- M Dash -> Tracer: +18
- H Dash -> Tracer: about +25..26

Do not merge them.

## 6｜H Tracer Core Oki

H Dash -> Tracer:
- +25..26

forward dash:
- 21F

leaves:
- +4..5

Options:
- 5MP
- throw
- 2MK
- walk-back shimmy

Corner:
H Tracer -> 2LK whiff
- about +10
- active 5MP:
  - Hit +8
  - Block +4

Condition:
- corner
- exact H Tracer state
- active timing

## 7｜Burning Kick Follow-up Split

Burning Kick:
- ground Hit KD +38
- Block -2
- follow-up requires Drive

### Hit
Knuckled Pursuit:
- combos after Burning Kick hit
- KD +23
- Block -15

### Block
Double Burn:
- intended block-pressure branch
- whiffs if Burning Kick already hit
- Block +2
- Hit KD +40

This branch split must remain visible.

## 8｜Aerial Burning Kick

Advantage depends on:
- jump height
- spacing
- strength

Current families:
- normal aerial: KD +39..42+, Block -6..+2
- OD aerial: KD +36..42+, Block +1..+7

Never publish one universal number.

## 9｜Seismic Hammer

Normal:
- startup 24F
- low
- limited-juggle KD +53
- Block -10
- feint available

OD:
- startup 19F
- KD +53
- current Block -8
- no feint

Year4 current routes include:
- 2HP > OD Seismic > 2HK
- delayed HJC Seismic conversion

## 10｜Starter Route Library

### R01｜Light stable
2LP > 2LP > 5LK > H Thunder Dash > Tracer  
End：+25..26

### R02｜Year4 meterless
5MK > 5LK > M Thunder Dash

### R03｜HJC low identity
2MK > HJC > M Thunder Dash > Tracer  
End：M Tracer +18  
Cost：HJC + Tracer Drive

### R04｜L Tracer
5MP > 2MP > L Thunder Dash > Tracer  
End：+37

### R05｜Burning hit
5MP > 2MP > L Burning Kick > Knuckled Pursuit  
End：+23

### R06｜Seismic air
2HP > M Seismic Hammer > HJ j.MP > H Burning Kick

### R07｜Seismic carry
2HP > M Seismic Hammer > HJ H Burning Kick > H Thunder Dash > Tracer

### R08｜OD Seismic Year4
2HP > OD Seismic Hammer > 2HK  
End：+42

### R09｜DR overhead
DR 6MP > 2MP > OD Seismic Hammer > HJC route

### R10｜DR low
DR 2MK > 2HP > Seismic Hammer

### R11｜DI
DI > 2HP > Seismic Hammer > HJC route

## 11｜Exact Setplay

### +45
Seismic Hammer  
-> delayed HJ j.MP  
-> immediate L Burning Kick  
-> +45  
-> forward jump

Condition:
- exact route
- height verified

### +42
Seismic Hammer  
-> HJ j.MP  
-> immediate M Burning Kick  
-> +42  
-> j.HK jump-in

Alternative exact +42:
- OD Thunder Dash
- 2HP > OD Seismic > 2HK

Each has a different owner.

### +44
Seismic Hammer  
-> HJ j.MP  
-> H Burning Kick  
-> +44

Option:
- 5LP whiff -> dash -> +9 -> active 5MP
- forward High Jump -> low/throw family

## 12｜Throw

Forward throw:
- +28
- immediate throw vs walk-back shimmy
- M Burning Kick setup can lead to Block +2 family

Back throw:
- +19

## 13｜2HK Punish Counter

2HK PC:
- 5LP whiff -> forward dash
- about +10
- active 5MP

Alternative:
- 2LK whiff -> HJ H Burning Kick
- block +2 family

Condition:
- exact Punish Counter state

## 14｜Focus Force

Normal:
- armor starts frame 6
- hold can extend armor
- dash cancel available
- Block -16 if attack resolves

OD:
- armor starts frame 3
- dash cancel available
- Block -16 if attack resolves

This is not S0/S1 core pressure. Use as a later adaptation tool.

## 15｜SA

### SA1 Limit Decoupler
- 8F
- 2000
- strike/throw invulnerable 1-11
- install enables Super Jump and special followups without Drive cost during install
- cannot build Super during install

### SA2 Mission Complete
- 7F
- 3000
- fully invincible 1-10
- +19

### SA3 Hard Luck Rejector
- 10F
- 4000 / CA 4500
- fully invincible 1-13
- +23

## 16｜Backend-only

- full HJC matrix in S0
- HJC without Drive owner
- 2HK HJC
- raw H Thunder Dash pressure
- Burning Kick universal follow-up
- generic Aerial Burning Kick frame value
- generic +42/+44/+45
- Focus Force flowchart before S4
- SA1 install logic projected back onto ordinary neutral

## 17｜Source Boundary

Current frame / route truth lives in sources.yaml.

HJC Drive cost、source-normal eligibility、hit confirm、Tracer strength、Burning hit/block outcome、air height、spacing、corner、active timing与exact route state都属于事实本身，不能从learner projection中删掉。
