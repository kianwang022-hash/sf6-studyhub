# Ingrid — Reference

> Canonical lookup layer。第一次学习不需要全背；S0只需要zero-stock Sun Rise、Sun Shot、2HP与一次安全stock build。

## 1｜Version Boundary

- Baseline patch：2026-08-03 Year 4
- Current combo / Oki guide：updated 2026-08-31
- Current frame reference：official-reference through 2026-08-27
- Checked through：2026-09-19
- Health：10000

## 2｜Current Game Plan

Current guide sequence:

**Sun Shot -> grounded normal -> M Sun Rise -> zero-cost high/low/throw/shimmy -> safe L Sun Flare stock build -> 1 stock -> 2 stock -> OD Sun Flare Lv3 / high-damage route -> SA2**

Learning order follows this chain.

## 3｜Stock Resource

### Build

L Sun Flare hold:
- about 47F -> gain 1 Sun Shot Stock

The action has real time cost.

### Spend

- Sun Flare Lv2 consumes 1 stock
- Sun Flare Lv3 consumes 2 stock
- OD Lv2 / Lv3 use stock plus Drive
- Solar Burst versions also scale by stock
- selected SA routes interact with stock level

Learner rule:

**stock should be built only when the current screen gives enough time.**

## 4｜Sun Flare State Table

### Lv1
- 0 stock
- startup 21F
- Block -4
- damage 900

### Lv2
- consumes 1 stock
- startup 18F
- Block +4
- damage 1100

### Lv3
- consumes 2 stock
- startup 18F
- Block +5
- damage 1350

### OD Lv1
- Block +4
- damage 1100

### OD Lv2
- consumes 1 stock
- Block +5
- damage 1350

### OD Lv3
- consumes 2 stock
- damage 1800
- base frame table Block +9
- practical spacing family about +9..+13
- hit aftermath +87 or more family

Never expose these without stock level.

## 5｜Sun Rise

### L
- startup 8F
- Block -24
- common selected state +36 family

### M
- startup 13F
- Block -23
- common selected route around +38, but aftermath varies by route / hit height

### H
- startup 27F
- Block -25
- selected H Rise -> Solar Burst route +50 family

### OD
- startup 14F
- Block -3
- selected route +40 family
- SA2 cancel on final-hit structure

Learner rule:

**all normal Sun Rise routes are confirmed-only; Oki requires a named route owner.**

## 6｜Zero-Stock Starter Routes

### R01
2LK > 5LP > 5LK > M Sun Rise

### R02
5MP > 5MK > M Sun Rise

### R03
2MP > 5LK > M Sun Rise

### R04
2MP > CDR > 2HP > H Sun Rise > L Solar Burst

### R05
2MK > CDR > 5HK > 5MP>6MK TC > M Sun Rise

## 7｜Selected M Sun Rise Oki

Declared route:
- M Sun Rise selected grounded route
- about +38
- dash 20F
- about +18

Options:
- 2MP
- throw
- shimmy

Other exact options in current guide:
- 2LK whiff -> 5LK whiff -> +4
- 5LP whiff -> L Sun Shot active meaty -> about Hit +7 / Block +3
- 4MK whiff -> 2MP active meaty -> about Hit +8 / Block +1

All require the exact route/timing owner.

## 8｜One-Stock Layer

### Lv2 block
stock_level_1 -> Sun Flare Lv2
- Block +4 or more

Then:
- strike
- throw
- shimmy

### Lv2 hit
- +68 or more family

Condition:
- stock_level_1
- exact route / spacing

## 9｜Two-Stock Layer

### Lv3
stock_level_2 -> Sun Flare Lv3
- Block +5 or more

### OD Lv3
stock_level_2 + Drive -> OD Sun Flare Lv3
- Block +9..+13 family
- Hit +87 or more family

Do not merge with low-stock versions.

## 10｜H Sun Shot Air Conversion

Current Year4:
H Sun Shot airborne hit supports a stable Drive Rush route.

Representative:
H Sun Shot airborne hit  
-> Drive Rush  
-> 5MP>6MK TC  
-> M Sun Rise

Condition:
- airborne hit
- Drive resource

## 11｜Exact +44 / +45

### 4MK > HP
- exact +44
- two forward dashes -> +4

### 2HK Punish Counter
- exact +45
- two forward dashes -> +5

Do not expose as generic Ingrid knockdown values.

## 12｜Corner Throw / Sun Shot Meaty

Corner forward throw:
- +21
- dash 20F -> +1

Alternative:
corner forward throw -> M Sun Shot active meaty
- about Hit +10
- Block +6

Condition:
- corner
- exact throw/setup timing

## 13｜6MP Active-Frame Overhead

6MP Sun Bright:
- startup 21F
- Hit +3
- Block -3

With declared active-frame setup:
- practical advantage can reach around +6 family

This is setup-specific, not raw 6MP truth.

## 14｜Sun Veil

Normal:
- startup 6F
- strike/jump-in invulnerability window
- Block -3
- selected aftermath +23 family

OD:
- startup 1F
- strike/jump/throw invulnerability
- Block -3
- selected aftermath +52 family

State must remain explicit.

## 15｜SA

SA1 Shining Sun:
- level-dependent damage / stock interactions
- invulnerable early window

SA2 Order of the Sun:
- multi-route high-resource super
- S4 learner layer

SA3 Cosmic Ray:
- lethal/cashout
- selected aftermath +30 family

## 16｜Backend-only

- mechanical stock farming
- generic M Sun Rise +38/+40
- generic Sun Flare plus frames
- OD Lv3 without stock_level_2
- raw projectile active-meaty plus numbers
- provisional max 2-stock route
- SA2 before S4

## 17｜Source Boundary

Current frame / route truth lives in sources.yaml.

Stock level、safe resource window、Sun Rise route/height、corner、active timing、airborne hit与Drive/SA resource都是事实本身，不能从learner projection里删掉。
