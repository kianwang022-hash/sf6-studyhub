# Alex — Reference

> Canonical lookup layer。第一次学习不需要全背；S0只需要稳定contact、4MK +2和一个earned Prowler出口。

## 1｜Version Boundary

- Baseline patch：2026-08-03 Year 4
- Current combo / Oki guide：updated 2026-08-31
- Current frame cross-check：checked 2026-09-19
- Tier 2 strategy guide：2026-03-25，只保留稳定战略框架，不覆盖Year4数值
- Health：10500

## 2｜Year 4 Decision Changes

当前版本最重要的不是单纯“伤害buff”，而是让 Alex 更容易从普通地面回合进入角色分支：

- 5MP Hit：+4
- 2MK Hit：+5
- 4MK Block：+2
- 2HK Hit：可以转 Prowler
- charged Prowler Heavy Lariat armor duration 增强
- Dangerous Armbar projectile invulnerability：3–22F
- H Power Bomb throw hitbox 增强
- Flying Cross Chop 增加新的 air-route utility

## 3｜Prowler Truth

Command：
- 2PP

Learner rule：

**Prowler = earned-entry stance。**

优先从：
- M Flash Axe hit；
- 2HP / 2HK hit；
- charged normal；
- declared knockdown/setup

进入。

不要把 raw neutral Prowler 当默认。

### Key branches

| Branch | Main value | Important truth |
|---|---|---|
| Prowler LP | 4F check | Hit +2 / Block -2 |
| Shoulder Launcher | anti-air / launch | 7F / KD +51 / Block -6 |
| Heavy Lariat | plus strike | Block +3；charged +5 |
| Air Stampede | overhead | Block +2 / KD +28 |
| Sweep Combination | low | Block -17 / -20，极高风险 |
| Hyper Takedown | throw | 5F / KD +32 |
| Dangerous Armbar | projectile/read throw | 21F / KD +21；whiffs crouchers |

## 4｜Power Bomb / Power Drop

### Power Bomb

- L / M / H startup：9 / 7 / 5F
- damage：2500
- end state：+15

Learner truth：

**+15 不等于 guaranteed point-blank Oki。**

4MK Block +2 -> Power Bomb 也必须是 opponent-respect / read，不是强制连锁。

### Power Drop

Turn-around state以后：

- normal Power Drop：side-switch / damage family，约 +13 end state
- OD Power Drop：更高资源现金化，+38 family
- forward-input OD Power Drop：exact +42 end state

只有最后一个 exact state 才能拥有 +42 标签。

## 5｜Aerial Knee Smash

常用：

- M：anti-air主工具之一
- H：稳定combo ender，常见 +29
- OD：常见 +27

### ODKNEE27

OD Knee hit -> forward dash  
结果：+5 family

下一拍：
- 5MP
- throw
- Power Bomb read
- block / reversal read

Condition：exact OD Knee end state。

## 6｜Route Library

### R01｜Low light
2LK > 2LP > L Flash Axe

### R02｜5MP stable
5MP > H Aerial Knee Smash  
End state：+29

### R03｜Earned Prowler
2MP > M Flash Axe hit > Prowler > Heavy Lariat

### R04｜DRC pressure
5MP > CDR > 2HP > H Flash Chop > 4MK

### R05｜DRC long
2MP > CDR > 4MK > 2HP > Prowler LP > Prowler HP > 5LK > H Aerial Knee Smash

### R06｜DI stable
DI Punish Counter > 2HP > M Flash Axe > Prowler 6P > M Aerial Knee Smash

### R07｜2HK Year4
2HK hit > Prowler

### R08｜Turn-around side switch
H Flash Chop hit > Power Drop

### R09｜Turn-around +42
H Flash Chop hit > forward-input OD Power Drop  
End state：+42  
Condition：turn-around state + forward-input OD variant

### R10｜Corner Flying Cross Chop
corner M Flash Axe > Prowler MP > j.MP > Flying Cross Chop  
End state：point-blank +8  
Condition：corner + exact route

### R11｜High resource
turn-around state > OD Power Drop > Omega Wing Buster

## 7｜Oki / Pressure Library

### O01｜4MK Block +2

Default first:
- 5LP / strike

After respect:
- H Power Bomb read

Do not label the throw guaranteed.

### O02｜Forward Throw +28
forward throw -> dash -> +6

Options:
- 5MP
- throw
- delayed read

Condition：throw spacing / exact forward-throw state.

### O03｜H Knee +29

Midscreen:
- immediate Drive Rush -> about +3 family

Corner:
- forward dash -> about +7 family

Do not merge these two states.

### O04｜M Flash Axe +39 -> Prowler

First learner exit:
- Heavy Lariat

Later:
- Air Stampede
- Sweep
- Hyper Takedown
- conditioned Armbar

### O05｜Prowler Throw +32

Immediate Prowler 6P meaty family:
- Hit +6
- Block +2

Condition：exact Prowler throw end state.

### O06｜Heavy Lariat

- normal Block +3
- charged Block +5

Then:
- 5MP
- Power Bomb read
- delayed strike

### O07｜Air Stampede

Block +2

Then:
- 2LP / 2MP
- Power Bomb read

### O08｜Corner Cross Chop +8

Exact route:
corner M Flash Axe > Prowler MP > j.MP > Flying Cross Chop

Then:
- active 4MK
- L Power Bomb read
- jump / movement response

This +8 must never be projected as generic Flying Cross Chop advantage.

### O09｜Forward-input OD Power Drop +42

Exact state:
turn-around -> forward-input OD Power Drop -> +42

Next:
- forward jump / safe-jump family
- exact-state Oki

## 8｜Supers

- SA1 Raging Spear：9F / 2000
- SA2 Sledgecross Hammer：13F / 3000 / wall-splat utility
- Omega Wing Buster：high-resource follow-up after OD Power Drop family
- SA3 Final Prison：12F / 4000
- CA：4500

Learner rule：
Super只在已确认opening / lethal / position价值值得时现金化，不重新定义角色主线。

## 9｜Backend-only

- raw neutral Prowler as default
- Power Bomb after every + frame
- generic guaranteed close Oki after Power Bomb +15
- Prowler Sweep as safe low
- generic Flying Cross Chop +8
- generic Power Drop +42
- matchup Dangerous Armbar without projectile/crouch truth
- active-frame routes without exact predecessor state

## 10｜Source Boundary

Current frame / route truth lives in sources.yaml.

Prowler entry、opponent respect、corner、throw spacing、active timing、turn-around state、forward-input OD Power Drop与Cross Chop exact route都是数值的一部分，不能从learner projection里删掉。
