# 肯 Ken — Reference

> Canonical lookup layer。这里允许比 LEARN 更密；第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Maintained combo / Oki guide：**2026-08-31**
- Checked through：**2026-09-18**
- Controls：Classic
- 当前数值与路线来源见 `sources.yaml`

## 2｜Command Index

### Normal attacks

5LP / 5LK / 5MP / 5MK / 5HP / 5HK  
2LP / 2LK / 2MP / 2MK / 2HP / 2HK  
j.LP / j.LK / j.MP / j.MK / j.HP / j.HK  
Neutral Jump HK

### Character-specific / unique

- KK｜Quick Dash
- Emergency Stop
- Thunder Kick
- Forward Step Kick
- Chin Buster / target-combo family

### Special moves

- 236P｜Hadoken
- 623P｜Shoryuken
- 214K｜Dragonlash Kick
- 236K｜Jinrai Kick + follow-ups
- Tatsu family

### Super Arts

SA1 / SA2 / SA3 / CA

## 3｜关键决策数值

| 状态 | 当前数值 | 决策意义 |
|---|---|---|
| **2MP** | 6F / Hit +5 / Block 0 | Year 4 核心连接点；普通命中可接 5LK。 |
| **2MK** | 7F / Hit -2 / Block -6 / C | 主要 DRC 低段；本体被防就结束。 |
| **H / Quick-Dash Shoryuken** | 常见 KD +25 | forward dash 后约 +6，进入 strike / throw / shimmy。 |
| **Corner M Shoryuken** | 常见 +33 | 2MK whiff frame-kill 后约 +5。 |
| **OD Shoryuken** | 常见 +22 | forward dash 后约 +3；角落有额外 conditioned setup。 |
| **Corner forward throw** | +20 | throw loop / strike / delayed defense-read。 |
| **H Dragonlash** | 28F / Block +1 | plus 结果必须和慢 startup 一起理解。 |
| **Quick Dash Forward Step Kick** | 8F branch / Hit +1 / Block -4 | Year 4 更快，但不是命中后自动大收益。 |

## 4｜Route Library

### R01｜基础｜2MP → H Shoryuken
- 输入：`2MP > 5LK > H Shoryuken`
- 伤害：2020
- End state：+25
- Next：forward dash → +6
- Verify：verified

### R02｜贴身｜2MP 高价值
- 输入：`point-blank 2MP > 5MP > 5HP > Quick Dash > Shoryuken`
- 伤害：2540
- End state：+25
- Verify：conditioned
- Condition：point-blank

### R03｜Light｜低段确认
- 输入：`2LK > 2LP > 5LK > H Shoryuken`
- 伤害：1490
- End state：+25
- Verify：verified

### R04｜Carry｜Jump-in
- 输入：`j.HP > 5MP > 5HP > Quick Dash > Tatsu`
- Value：corner carry
- Verify：conditioned
- Condition：screen position / airborne hit state

### R05｜2MK DRC Easy Carry
- 输入：`2MK > DRC > 5LP > 5MP > 5HP > Quick Dash > Tatsu`
- 成本：3 Drive
- Value：stable carry
- Verify：verified

### R06｜2MK DRC Year4 Carry
- 输入：`2MK > DRC > 2HP > Emergency Stop > 2MP > 5MP > 5HP > Quick Dash > Tatsu`
- 伤害：2072
- 成本：3 Drive
- Value：carry / SA state
- Verify：verified

### R07｜2MK DRC Damage
- 输入：`2MK > DRC > 2HP > Emergency Stop > 2MP > L Tatsu > M Shoryuken`
- 伤害：2360
- 成本：3 Drive
- Value：damage；角落可接 +33 family
- Verify：verified

### R08｜Shimmy PC
- 输入：`2MP PC > 2MK > Quick Dash > Shoryuken`
- 伤害：2700
- End state：+25
- Verify：verified

### R09｜挡无敌技后
- 输入：`5HP PC > 2MK > Quick Dash > Shoryuken`
- End state：+25
- Verify：verified

### R10｜角落 Drive Reversal punish
- 输入：`2MP PC > H Jinrai > HK follow-up > L Shoryuken`
- Next：2MK whiff → +5
- Verify：conditioned
- Condition：corner

### R11｜角落 DI wall splat
- 输入：`DI wall splat > 5HP > H Jinrai > HK follow-up > M Shoryuken`
- End state：+33
- Next：2MK whiff → +5
- Verify：conditioned
- Condition：corner wall splat

### R12｜版中 DI PC Carry
- 输入：`DI PC > 5MP > 5HP > Quick Dash > Tatsu`
- 伤害：2120
- Value：carry
- Verify：verified

### R13｜背墙 DI PC
- 输入：`DI PC > j.HK > Quick Dash > Dragonlash > H Shoryuken`
- 伤害：3220
- Value：position reversal
- Verify：conditioned
- Condition：back to corner

### R14｜角落 2HP
- 输入：`2HP > H Jinrai > HK follow-up > L Shoryuken`
- 伤害：2910
- Next：2MK whiff → +5
- Verify：conditioned
- Condition：corner

### R15｜SA3
- 输入：`Quick Dash > Dragonlash > SA3`
- Verify：verified

### R16｜Jinrai → SA3
- 输入：`M Jinrai > HK follow-up > SA3`
- Verify：verified

## 5｜Oki / Setplay Library

### O01｜+25 → dash +6
- Trigger：H / Quick-Dash Shoryuken
- Setup：`KD +25 -> forward dash`
- Result：约 +6
- Plan：strike / throw / shimmy / block
- Verify：verified

### O02｜Midscreen forward throw
- Setup：`forward throw -> Drive Rush > 5MP`
- Plan：throw / low / shimmy
- Verify：verified source package

### O03｜Quick Dash Tatsu 到角落
- Setup：`Quick Dash Tatsu airborne hit -> reach corner`
- Result：source records +3 family after follow-up
- Verify：conditioned
- Conditions：airborne hit / corner arrival

### O04｜Corner M Shoryuken
- Trigger：+33
- Setup：`2MK whiff`
- Result：约 +5
- Plan：throw / 2MP / shimmy
- Verify：conditioned
- Condition：corner

### O05｜Corner forward throw
- Trigger：+20
- Plan：forward throw / 5HP / delayed defense-read
- Verify：conditioned
- Condition：corner

## 6｜Year 4 Change Notes

### 2MP
- Damage：700 → 600
- Hit advantage：+3 → +5
- Hitback reduced

这使普通 `2MP > 5LK > H Shoryuken` 成为当前版本非常稳定的 hit route。

### Drive Rush 5MP
Drive Rush 惯性保留更久，强化近身 entry 的 throw / low / shimmy 选择。

### Quick Dash → Forward Step Kick
- Startup：10F → 8F
- Hit：+3 → +1
- Guard pushback reduced
- Whiff / armor-hit recovery increased

因此不要继续使用旧版本“Quick Dash MK hit +3”的固定印象。

## 7｜Backend-only / 不直接教学

- 2MP CH approximate-damage route：来源伤害仍为 approximate。
- SA1 / SA2 长 Quick-Dash HK branch：命名 / 输入要继续规范化。
- Corner H Shoryuken active-frame 5HP meaty：需要精确 Training Mode closure。
- Corner Quick-Dash Shoryuken active-frame 5MP meaty：同样保留 conditioned。

## 8｜Source Boundary

Primary:
- Official current frame data
- CAPCOM Year 4 / 2026-08-03
- SF6 Lab current Frame / Move / Combo-Oki
- current strategy / setplay references

Tier 2 用于策略 / setplay interpretation，不作为强制配额。
