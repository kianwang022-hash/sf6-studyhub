# 豪鬼 Akuma — Reference

> Canonical lookup layer。这里允许更密；第一次学习不需要全背。

## 1｜Version Boundary

- Baseline patch：**2026-08-03 Year 4**
- Current combo / Oki guide：**2026-08-31**
- Checked through：**2026-09-18**
- Health：**9000**
- Controls：Classic

## 2｜Command Index

### Normal attacks

5LP / 5LK / 5MP / 5MK / 5HP / 5HK  
2LP / 2LK / 2MP / 2MK / 2HP / 2HK  
j.LP / j.LK / j.MP / j.MK / j.HP / j.HK

### Unique attacks

Skull Splitter / Resso Snap Kick / Rago High Kick / Viscera Piercer / Bone Crusher Axe Kick / Kikoku Combination / Tenmaku Blade Kick

### Special moves

- 236P｜Gou Hadoken
- air 236P｜Zanku Hadoken
- 623P｜Gou Shoryuken
- 214K｜Tatsumaki Zanku-kyaku
- 214P｜Adamant Flame
- 236K｜Demon Raid + follow-ups
- 6KKK / 4KKK｜Ashura Senku
- Oboro Throw

### Super Arts

SA1 Messatsu Gohado / Tenma Gozanku  
SA2 Empyrean's End  
SA3 / CA Sip of Calamity  
CA Shun Goku Satsu

## 3｜关键决策数值

| 工具 / 状态 | 当前数值 | 为什么重要 |
|---|---|---|
| 5MP | 6F / Hit +4 / Block +1 | 最干净的近身 respect 工具。 |
| 5HK | 13F / Hit +7 / Block +3 | 高价值正帧接触，但 multi-hit / spacing 要保留。 |
| 2MP | 6F / Hit +6 / Block -1 | 稳定确认。 |
| 2MK | 8F / Block -6 / C | 主要低段 DRC入口。 |
| H Gou Shoryuken | +30 family | 第一套稳定 Oki。 |
| L Tatsu > 2HK | +37 family | 当前版本，不再使用旧 +42。 |
| OD Tatsu > M DP | +32 | Meter 换不同 Oki budget。 |
| H Tatsu grounded | +34 | 另一种 knockdown budget。 |
| M Tatsu | +41 | 双前冲约 +3 / 百鬼 setplay。 |
| H Adamant Flame | +47 | 更长 setplay budget。 |
| OD Adamant Flame midscreen | +63 | 高阶 Ashura / meaty setplay。 |

## 4｜Route Library

### R01｜Light稳定
`2LP > 2LP > 5LK > H Gou Shoryuken`  
End state：+30  
Verify：verified

### R02｜Light Oki
`2LP > 2LP > 5LK > L Tatsu > 2HK`  
End state：+37  
Verify：verified

### R03｜Light OD
`2LP > 2LP > 5LK > OD Tatsu > M Gou Shoryuken`  
End state：+32  
Verify：verified

### R04｜2MP稳定
`2MP > 2MP > H Gou Shoryuken`  
End state：+30  
Verify：verified

### R05｜2MP Oki
`2MP > 2MP > L Tatsu > 2HK`  
End state：+37  
Verify：verified

### R06｜2MK DRC stable
`2MK > DRC > 5HP > 5MK > H Gou Shoryuken`  
End state：+30  
Verify：verified

### R07｜2MK DRC Oki
`2MK > DRC > 5HP > 5MK > L Tatsu > 2HK`  
End state：+37  
Verify：verified

### R08｜5HK
`5HK > 5MP > 5MP > H Tatsu`  
End state：+34  
Verify：verified

### R09｜5HP
`5HP > H Adamant Flame`  
End state：+47  
Verify：verified

### R10｜挡无敌技
`5HK PC > 2HP > H Adamant Flame`  
End state：+47  
Verify：verified

### R11｜4F punish
`2LP PC > 5HP > H Adamant Flame`  
Verify：verified

### R12｜6F punish
`2MP PC > 5HP > H Adamant Flame`  
Verify：verified

### R13｜DI wall splat
`DI wall splat > 2HP > Gou Hadoken > H Tatsu`  
End state：about +31  
Verify：conditioned

### R14｜DI wall splat OD
`DI wall splat > 2HP > OD Adamant Flame > H Tatsu`  
End state：about +35  
Verify：conditioned / approximate

### R15｜SA3 easy
`2HP > H Adamant Flame > SA3`  
Verify：verified

### R16｜SA3 basic
`2HP > M Tatsu > L Gou Shoryuken > SA3`  
Verify：verified

### R17｜Shun Goku Satsu
`2LP > 2LP > 5LK > L Adamant Flame > Shun Goku Satsu`  
Verify：conditioned  
Condition：CA available

## 5｜Oki / Setplay Library

### O01｜H DP +30
`H Gou Shoryuken -> +30 -> 5MK whiff -> about +4`  
Plan：2LP / 2MP / throw / shimmy  
Verify：verified

### O02｜+31 family
`+31 -> 5MK whiff -> about +5`  
Plan：strike / throw / shimmy  
Verify：conditioned

### O03｜+32 family
`+32 -> 6MK whiff -> about +2`  
Verify：verified

### O04｜+34 family
`H Tatsu +34 -> 6MK whiff -> about +4`  
Verify：verified

### O05｜+37 family
`L Tatsu > 2HK -> +37`  
Current note：旧 +42 shorthand 不再作为当前 truth。  
Verify：verified

### O06｜+41 family
`M Tatsu -> +41 -> two forward dashes -> about +3`  
Alternative：conditioned Demon Raid setplay  
Verify：verified / conditioned branch

### O07｜H Adamant +47
`H Adamant Flame -> +47 -> H Demon Raid > selected follow-up`  
Result：about +2 family depending follow-up  
Verify：conditioned

### O08｜OD Adamant +63
`OD Adamant Flame -> +63 -> Ashura Senku -> about +12`  
Plan：5HP active meaty / delayed strike / shimmy  
Verify：conditioned

## 6｜Demon Raid conditions

### Demon Low Slash
- Startup：8F
- Block：+2
- Condition：Raid timing / spacing

### Demon Guillotine
- Startup：16F
- Block：+1~+10
- Condition：landing height

### Demon Blade Kick
- Startup：13F
- Block：-4~+5
- Condition：landing height / spacing

因此禁止把“Demon Raid = plus”作为统一规则。

## 7｜Charged Gou Hadoken

- Lv2 common startup：31F / Block +2
- Lv3 common startup：56F / Block +21
- OD：Block +2
- Charged OD：Block +21

这些数字只说明 move 本体；实战使用仍必须算进蓄力时间、meaty、spacing 和对手 Perfect Parry。

## 8｜Backend-only

- 2MP CDR 未指定 ender family。
- 6HP PC 未指定完整 ender family。
- +32 / +34 active-frame 5HP meaty 精确 timing。
- OD Adamant +63 高阶 Ashura setplay。
- point-blank Shun Goku Satsu setup。

## 9｜Source / Current-version notes

- Year 4 baseline：2026-08-03
- Current route guide：2026-08-31
- current guide explicitly replaces older L Tatsu > 2HK +42 shorthand with +37 family
- current numerical truth见 `sources.yaml`
