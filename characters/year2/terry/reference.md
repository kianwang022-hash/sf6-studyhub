# Terry — Reference

> Canonical lookup layer。这里允许更密；第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Current combo / Oki guide：**2026-08-31**
- Checked through：**2026-09-18**
- Health：**10000**
- Controls：Classic

## 2｜Command Index

### Normal attacks

5LP / 5LK / 5MP / 5MK / 5HP / 5HK  
2LP / 2LK / 2MP / 2MK / 2HP / 2HK  
j.LP / j.LK / j.MP / j.MK / j.HP / j.HK

### Special moves

- 236LP/MP｜Power Wave
- 236HP｜Round Wave
- 214LP｜Quick Burn
- 214MP/HP｜Burning Knuckle
- 236K｜Power Charge
- 214K｜Crack Shoot
- 623P｜Rising Tackle

### Super Arts

- SA1 Buster Wolf
- SA2 Power Geyser → Twin Geyser → Triple Geyser
- SA3 / CA Rising Fang

## 3｜Year 4关键变化

### 5MP
- startup 7F
- Hit +2
- Block -3
- 18–25F前方hurtbox扩大，挥空更容易被差返

### Round Wave
- startup 29F
- Hit +8
- Block +5
- Year4强化block timing，st.MP / 2MP后更难靠后走简单脱离

### Quick Burn
- normal Hit advantage：+2 → +3

### OD Quick Burn
- final hit：800
- total：1600
- Hit after：+33
- Year4更容易构造shimmy

### OD Power Charge
- current line supports special-move cancel on hit

## 4｜关键end-state

| Ender / state | 当前预算 | 备注 |
|---|---:|---|
| Forward throw | +22 | 角落dash后+3 |
| Back throw | +18 | — |
| Sweep | +40 | — |
| Fire Kick | +35 | — |
| OD Quick Burn | +33 | Year4 shimmy |
| M Burning Knuckle | +30…42 | spacing-dependent |
| H Burning Knuckle | +28…41 | spacing-dependent |
| OD Burning Knuckle | +60+ | high-stage |
| L / M / H Rising Tackle | +33 / +25 / +27 | — |
| H Crack Shoot | +43 | spacing / corner setplay |
| SA1 / SA2 / SA3 | +22 / +24 / +22 | spacing may matter |
| CA | +37 | high-stage |

## 5｜Route Library

### R01｜Light carry
`2LK > 2LP > M Burning Knuckle`  
Value：carry + Oki  
Verify：conditioned by BK spacing

### R02｜Light damage
`2LK > 2LP > H Rising Tackle`  
End state：+27  
Verify：verified

### R03｜2MP basic
`2MP > 5LK > M Burning Knuckle`  
Value：carry + Oki  
Verify：conditioned by spacing

### R04｜Fire Kick
`2MK > 2HK (Fire Kick) > H Burning Knuckle`  
Verify：verified route；KD spacing conditioned

### R05｜2MK DRC
`2MK > DRC > 2HP > H Power Charge > delayed H Crack Shoot > Quick Burn`  
Verify：conditioned  
Condition：delay timing

### R06｜5MP DRC
`5MP > DRC > 2HP > H Power Charge > delayed H Crack Shoot > Quick Burn`  
Verify：conditioned

### R07｜5HP basic
`5HP hit 1 > H Power Charge > H Burning Knuckle`  
Verify：conditioned  
Condition：first-hit confirm

### R08｜5HP high damage meterless
`5HP hit 1 > H Power Charge > delayed H Crack Shoot (3hit) > Quick Burn`  
Verify：conditioned

### R09｜5HK PC
`5HK PC > 5HP hit 1 > H Power Charge > delayed H Crack Shoot > H Rising Tackle`  
Verify：conditioned

### R10｜OD Power Charge
`2MP > OD Power Charge > H Burning Knuckle`  
Verify：verified source route

### R11｜Corner basic
`5HP hit 1 > H Power Charge > Round Wave > M Power Charge > H Rising Tackle`  
Verify：conditioned  
Condition：corner

### R12｜Corner jump-in
`j.HK > 5HP hit 1 > H Power Charge > Round Wave > H Rising Tackle`  
Verify：conditioned

### R13｜Blocked reversal
`2HP PC > H Power Charge > delayed H Crack Shoot > H Rising Tackle`  
Verify：conditioned

### R14｜DI stable
`DI > 2HP > M Crack Shoot > H Rising Tackle`  
Verify：verified

### R15｜DI SA1
`DI > 2HP > M Crack Shoot > SA1`  
Verify：verified

### R16｜DI SA2
`DI > 2HP > M Power Charge > SA2 > Twin Geyser > Triple Geyser`  
Verify：conditioned  
Condition：SA resource

### R17｜OD Quick Burn → SA2
`OD Quick Burn hit 2 > SA2 > Twin Geyser > Triple Geyser`  
Verify：conditioned  
Condition：hit 2 cancel / SA resource

## 6｜Oki / Setplay Library

### O01｜M Burning Knuckle
`M Burning Knuckle -> KD +30…42 by spacing -> forward dash`

常见目标：
- throw
- 2MP
- DR 6HP
- walk-back shimmy

不要记成固定 +11；只有特定spacing / route在dash后落到对应预算。

### O02｜Corner forward throw
`forward throw +22 -> forward dash 19F -> +3`

Plan：
- forward throw
- 2MP
- block
- jump-read
- backdash punish

### O03｜Corner forward throw → DR 5HP
active-frame family：
- Hit约 +8
- Block约 +5

Verify：conditioned

### O04｜Corner M Burning Knuckle → 2MP whiff
`M BK -> 2MP whiff -> 2MP active-frame`

Approx：
- Hit +7
- Block +1

Verify：conditioned

### O05｜Corner M BK → Round Wave
Round Wave active-frame meaty  
Block约 +7  
Verify：conditioned

### O06｜H Power Charge → H BK
`H Power Charge > H Burning Knuckle > two forward dashes`  
Result：point-blank +6 family  
Verify：conditioned

### O07｜OD Quick Burn +33
Year4 package：
`OD Quick Burn -> +33 -> delay / crouch timing -> bait throw tech whiff -> PC`

Verify：conditioned  
Condition：spacing / timing

### O08｜H Crack Shoot +43
角落：
jump attack / low / throw  
Verify：conditioned

## 7｜Round Wave

Current：
- startup 29F
- Hit +8
- Block +5

Learner rule：

**Round Wave是earned pressure。**

它强在你已经通过前一段接触/角落setplay赚到足够时间后，用+5阻止简单后走并继续2MP / throw / delayed strike / shimmy；不是中立29F裸放就免费拿回合。

## 8｜SA2

`Power Geyser -> Twin Geyser -> Triple Geyser`

OD Quick Burn hit 2可以取消到SA2。  
这是已有opening的resource cashout，不是独立neutral starter。

## 9｜Backend-only

- Burning Knuckle固定帧差口诀。
- Round Wave meaty无setup版本。
- active-frame 5HP / 2MP exact timing。
- H Crack Shoot +43完整角落树。
- CA +37高级setplay。

## 10｜Source Boundary

- current official-reference frame data：late Aug 2026
- Year4 combo/Oki：2026-08-31
- battle boundary：2026-08-03
- 数值与当前路线来源见 `sources.yaml`
