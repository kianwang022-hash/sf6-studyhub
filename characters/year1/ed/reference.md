# Ed — Reference

> Canonical lookup layer。第一次学习不需要全背；S0只需要中距离contact、Blitz knockdown和Rush re-entry。

## 1｜Version Boundary

- Baseline patch：2026-08-03 Year 4
- Current combo / Oki guide：updated 2026-08-31
- Current frame reference：official-reference data through 2026-08-27
- UFD Ed August 2026 update：2026-08-11
- Checked through：2026-09-19
- Health：10000

## 2｜Current Game Plan

Current Year4 practical chain：

**midrange contact / whiff punish -> Blitz knockdown -> Rush re-entry -> strike / throw / shimmy -> corner safe jump -> 5HK +4 -> 5MP frame trap -> SA2 damage/carry extension**

Learner progression follows this chain instead of starting with charged mechanics.

## 3｜Normal Anchors

### 5MP
- startup 7F
- Hit +6
- Block -1
- cancelable

### 5MK
- startup 10F
- Hit 0
- Block -5
- cancelable
- whiff +4F recovery

Use as a long midrange confirm / whiff-punish touch.

### 5HK
- startup 10F
- Hit +8
- Block +4
- cancelable

Close-pressure owner independent of Flicker.

### 5HP
- startup 10F
- Hit +5
- Block -2
- charge -> Psycho Knuckle
- while charging, forward Kill Rush cancel is available after the relevant window

## 4｜Psycho Blitz

### M Psycho Blitz
- startup 13F
- Block -12
- current end state: +39

### H Psycho Blitz
- startup 15F
- Block -12
- ordinary end state: +40

### OD Psycho Blitz
- startup 13F
- Block -4
- current end state: +42
- current starter-scaling caveat when used as a starter

Learner rule:

**Blitz is a confirmed knockdown owner, not raw pressure.**

## 5｜Blitz Re-entry

### M Blitz +39
Drive Rush:
- about +8

Options:
- 5HP
- 2MK
- throw
- walk-back shimmy

### H Blitz +40
Drive Rush:
- about +9

Options:
- 5HP
- 2MK
- throw
- shimmy

This is the central range-to-reentry interface.

## 6｜Exact +42 Safe Jump

Route owner:

5MP > 5HP > H Psycho Blitz  
in declared Hitman Combination / hit-height state

Result:
- +42
- immediate forward jump HP safe jump

Do not write generic H Blitz = +42.

## 7｜Psycho Flicker

### L Flicker
- startup 16F
- Hit +1
- Block -6
- PC crumple family

### M Flicker
- startup 20F
- Hit +3
- Block -6
- PC crumple family

### Charged L Flicker
- startup 31F
- Block +4

### Charged M Flicker
- startup 35F
- Block +4

### OD Flicker
- startup 25F
- Block +4
- route / pull-in owner

### Year4 spacing rule

Charged L/M Flicker remains +4, but pull distance / spacing changed.

Follow-up may be:
- 5MP
- immediate throw when truly close
- walk throw when slightly far
- shimmy

Never treat +4 as automatic point-blank throw.

## 8｜5HK +4 Pressure

5HK block:
- +4

Default:
- 5MP -> 4F frame-trap family

Adaptations:
- throw
- walk-back -> 5HP shimmy

This is the cleanest learner pressure owner before charged spacing gets complex.

## 9｜Kill Rush / Kill Switch

Kill Rush Forward:
- total 31F
- early window -> Kill Switch Break
- later window -> Kill Switch Chaser

Kill Switch Break:
- startup 11F
- Block -4

Kill Switch Chaser:
- startup 11F
- Block -6

Representative carry route:
5MP > 5HP > Kill Switch Break > M Psycho Uppercut

Representative PC route:
5HK PC > 5HP > Kill Switch Chaser > H Blitz

## 10｜Psycho Spark / Shoot

Psycho Spark:
- startup 14F
- Hit +3
- Block -5

OD Spark:
- Block about -2

Psycho Shoot:
- follow-up projectile after Spark
- current versions create more distinct slow/fast screen-control roles

Learner use:
- walk behind slower shot;
- use faster shot for quicker pressure;
- force movement back into Ed's midrange capture tools.

## 11｜Psycho Uppercut

- L 10F / Block -13 / common end state +38
- M 14F / Block -20 / +39
- H 16F / Block -21 / +38
- OD 13F / fully invincible early / Block -28 / +18

S0 uses L Uppercut as anti-air owner; advanced route selection later.

## 12｜2HP Oki

Ordinary 2HP:
- +30
- dash -> 5HP active meaty
- about Hit +7 / Block 0

2HP CH / PC:
- +47
- two forward dashes -> +9
- 5HP / 2MK / throw / shimmy

Never merge +30 and +47.

## 13｜L Flicker Punish Counter

L Psycho Flicker PC:
- triple dash
- point-blank +4

Then:
- throw
- strike
- shimmy

Condition:
- Punish Counter exact state.

## 14｜Throws

Forward throw:
- +24
- corner dash -> +5 -> 5MP meaty
- DR 5MP / DR throw also available

Back throw:
- **+17 current Year4**

Do not retain the older +24 back-throw loop.

## 15｜Psycho Knuckle

### Lv1
- startup 39F
- damage 800
- Block about -2
- declared crumple state about +41
- corner block can alter practical advantage

### Lv2
- startup 69F
- damage 1200
- Block +4
- crumple +41 family
- projectile clash property

These are S3 space-management tools, not the first requirement for learning Ed.

## 16｜Corner Spark Meaty

Exact setup:
- corner +38
- 2LP whiff
- Psycho Spark

Approx:
- Hit +13
- Block +5

Condition:
- corner
- exact +38 predecessor
- active-frame timing

Do not publish generic Spark Block +5.

## 17｜SA

SA1 Psycho Storm:
- startup 13F
- 2000
- +33 end state

SA2 Psycho Cannon:
- startup 8F
- 1100 initial
- +65 frame-data state
- current long-route SA gauge return is lower than older guide assumptions
- route extension / carry owner

SA3 Psycho Chamber:
- startup 10F
- 4000
- CA 4500
- +24 practical end-state family

SA2 dream routes stay S4.

## 18｜Backend-only

- charged Flicker in S0
- raw uncharged Flicker pressure
- generic H Blitz +42
- old back throw +24 loop
- Psycho Knuckle as entry requirement
- generic Spark +5
- SA2 dream route before basic carry decisions
- matchup Shoot cadence before S4

## 19｜Source Boundary

Current frame / route truth lives in sources.yaml.

Spacing、Hitman Combination state、corner、active timing、charge level、Punish Counter与screen position都是事实的一部分，不能从learner projection里删掉。
