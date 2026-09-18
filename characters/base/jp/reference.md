# JP — Reference

> Canonical lookup layer。第一次学习不需要全背；S0只要稳定Stribog、Triglav/Torbalan职责和一个近身+2 owner。

## 1｜Version Boundary

- Baseline patch：2026-08-03 Year 4
- Current combo / Oki guide：updated 2026-08-31
- Current frame reference：checked 2026-09-19
- Checked through：2026-09-19
- Health：10000

## 2｜Current Learning Order

Current Year4 training order supports:

1. stable Stribog / Torbalan routes;
2. +42 safe jump;
3. Departure setup;
4. Triglav -> OD Departure hybrid pressure;
5. deeper portal / SA2.

The learner progression preserves that ordering.

## 3｜Stribog

### L Stribog
- startup 16F
- damage 1000
- Block -10
- common end state +38

### M Stribog
- startup 20F
- damage 1200
- Block -8
- grounded hit common end state +42

### H Stribog
- startup 28F
- Block +4
- projectile-clash / spacing tool

### OD Stribog
- startup 19F
- Block +2
- SA-cancel properties

Learner rule:

**L/M Stribog are confirm enders; +38/+42 belong to declared hit states.**

## 4｜Triglav

L/M/H:
- startup 22F
- Block -2
- damage 800

OD:
- startup 20F
- Block +3
- damage 1000

Common hit states:
- normal Triglav +44
- OD Triglav +53

Use:
- punish predictable ground wait;
- maintain remote answer pressure;
- buy time for later Departure investment.

## 5｜Torbalan

### L Torbalan
- startup 22F
- Block -6
- damage 800
- grounded hit can create +42-or-more state depending on spacing

### M/H Torbalan
- startup 26F
- Hit +6
- Block -8
- damage 1000

### OD Torbalan
- startup 22F
- Block +25
- damage 800

OD +25 is a high-resource state, not generic Torbalan pressure.

## 6｜+42 Owners

### M Stribog grounded +42
Immediate:
- forward jump HK safe jump

Alternative:
- 2MK whiff -> 5HK active meaty
- about Hit +10 / Block +5 family

### L Torbalan grounded +42-or-more
Safe-jump use requires:
- grounded hit
- spacing confirmation
- exact +42 owner

Never publish generic JP +42.

## 7｜Departure

Departure is a placement investment.

Ordinary portal attack timing family:
- about 150F

OD:
- about 110F

Departure: Window:
- invulnerable / airborne timing properties
- teleport / side-change function

Departure: Shadow:
- attack-state function
- selected normals have portal-state cancel properties

Learner rule:

**portal requires earned time/space.**

## 8｜First Portal Setup

### Airborne 5HP -> Departure
5HP airborne hit -> Departure

Current practical budget:
- about +15

Options:
- Shadow
- low
- throw
- Window
- wait / remote reset

Condition:
- airborne 5HP hit
- portal active state

## 9｜Hybrid Portal Route

5HP airborne hit  
-> Triglav  
-> OD Departure

Current practical budget:
- about +4..+6

Options:
- 2MP
- throw
- low
- Shadow
- Window

Condition:
- exact route
- Drive resource
- portal active

## 10｜Portal-State Normals

Current versions of selected normals have Departure Shadow-only cancel behavior.

Examples:
- 5MP
- 5HK
- 2LK
- 2MK

Do not copy these portal-state cancel properties onto ordinary neutral versions.

## 11｜5HK +2 Pressure

5HK block:
- +2

Default:
- 2LP

Adaptations:
- throw-read
- walk back -> 2MP punish

This is the basic close-range owner before portal complexity.

## 12｜Corner Forward Throw

Current corner forward throw:
- +23
- forward dash 22F
- leaves +1

This is corner-specific current state.

## 13｜Amnesia

Amnesia:
- startup 3F

OD Amnesia:
- startup 1F

Year4:
- OD Amnesia throw aftermath includes extra JP recovery compared with older route memory.

Learner rule:
- use current reset / punish / position state only;
- do not preserve old automatic throw-loop sequences.

## 14｜Embrace

Embrace:
- startup 26F
- command grab
- damage 1800
- end state about +18

OD:
- damage 2600

Use only when remote/portal threats have created enough respect; not a neutral default.

## 15｜Active-Frame Remote Setplay

Examples of high-value setplay require:
- exact knockdown;
- corner where specified;
- remote move chosen;
- active timing.

Do not expose a universal Torbalan/Stribog plus number without the setup owner.

## 16｜Supers

SA1 Chornobog:
- defensive/cashout owner

SA2 Lovushka:
- persistent multi-layer setplay
- S4 only in learner progression

SA3 Interdiction:
- current practical aftermath around +23
- can feed immediate H Triglav meaty family

CA Zapret:
- current high-budget aftermath about +44
- L / OD Torbalan meaty family by exact state

## 17｜Backend-only

- raw neutral Departure
- full portal tree in S0
- generic +42 safe jump
- old OD Amnesia auto follow-up
- ordinary Torbalan +25
- portal-state cancels in ordinary neutral
- Lovushka before S4
- matchup-specific remote ordering before fundamentals

## 18｜Source Boundary

Current frame / route truth lives in sources.yaml.

Portal active state、airborne/grounded hit、spacing、corner、Drive resource、active timing、current Amnesia aftermath与exact knockdown state都是事实本身，不能从learner projection中删掉。
