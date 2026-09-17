# 桑吉尔夫 Zangief — Reference

> Canonical lookup layer / Schema v1.1。这里允许比 LEARN 更密；玩家第一遍不需要全背。

## 1｜Command Index

### Normal attacks
5LP / 5LK / 5MP / 5MK / 5HP / 5HK / 2LP / 2LK / 2MP / 2MK / 2HP / 2HK / j.LP / j.LK / j.MP / j.MK / j.HP / j.HK

### Unique attacks / target-combo families
- Hellstab
- Knee Hammer
- Headbutt
- Cyclone Wheel Kick
- Smetana Dropkick
- Flying Body Press
- Flying Headbutt
- Machine Gun Chops
- Power Stomps

### Special moves
- Double Lariat
- OD Double Lariat
- Screw Piledriver
- Borscht Dynamite
- Russian Suplex
- Siberian Express
- Tundra Storm

### Super Arts
- SA1 Aerial Russian Slam
- SA2 Cyclone Lariat
- SA3/CA Bolshoi Storm Buster

### Throws
- Bodyslam
- Capture Suplex
- German Suplex
- Spinebuster
- Russian Drop
- Brain Buster

通用系统动作（Drive Impact / Drive Parry / Perfect Parry / Drive Rush / Drive Reversal）由全局系统 Reference 提供，本文件只记录该角色的命名与决策差异。

## 2｜关键决策数值

| 工具/状态 | 当前数值 | 为什么重要 |
|---|---|---|
| **Health** | 11000 | 高血量允许承受部分接近风险，但不是无视 neutral |
| **6HP Headbutt** | hit +8 / block +4 | 核心尊重建立器 |
| **5HK** | block +1 | 正帧但高承诺 |
| **charged 5HP** | block +3 / armor | 高承诺推进 |
| **Double Lariat** | 15F / block -12 | 确认/对空，不从被防后续压 |
| **OD Double Lariat** | 12F / +38…57 knockdown | 高质量 Oki 资源 |
| **H SPD** | 5F / 3300 | 尊重后的高收益 |
| **OD SPD** | 5F / 3400 | 资源型 command grab |

所有带距离、空中高度、角落、active-frame、Drink/portal/charge 等条件的数字必须作为 `conditioned` 使用；不要截掉条件只保留数字。

## 3｜Route Library

### `R01`｜稳定｜Hellstab→Lariat
- **输入**：`3MP > Double Lariat`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R02`｜稳定｜Headbutt→Hellstab→Lariat
- **输入**：`6HP > 3MP > Double Lariat`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R03`｜Oki｜轻确认→OD Lariat
- **输入**：`2LK > 5LP > OD Double Lariat`
- **成本**：2 Drive
- **收尾**：`E02`
- **验证**：`verified`
### `R04`｜稳定｜轻确认 DRC→Lariat
- **输入**：`2LK > 5LP > CDR > 2LP > 3MP > Double Lariat`
- **成本**：3 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R05`｜惩罚｜6HK PC→Lariat
- **输入**：`6HK PC > 3MP > Double Lariat`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R06`｜投技｜DI PC→H SPD
- **输入**：`DI PC > H Screw Piledriver`
- **成本**：0 Drive
- **收尾**：`E03`
- **验证**：`verified`
### `R07`｜DI｜DI PC→strike route
- **输入**：`DI PC > 6HP > 3MP > Double Lariat`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R08`｜角落｜墙撞→Lariat
- **输入**：`DI wall splat > 3MP > Double Lariat`
- **成本**：0 extra Drive
- **收尾**：`E04`
- **验证**：`verified`
- **条件**：角落
### `R09`｜斩杀｜轻确认→OD Lariat→SA3
- **输入**：`2LK > 5LP > OD Double Lariat > SA3`
- **成本**：2 Drive + 3 SA
- **收尾**：`E05`
- **验证**：`verified`
### `R10`｜资源｜OD Lariat→DR Headbutt
- **输入**：`OD Double Lariat +38 > DR > 6HP(active meaty)`
- **成本**：2 Drive + DR
- **收尾**：`E06`
- **验证**：`conditioned`
- **条件**：要求 +38 击倒版本/距离

## 4｜Ender Library

- `E01` **Double Lariat** — `oki_advantage` — 指南给普通 Lariat +27…56，差异大；追法必须带命中/距离条件。 → `O01`
- `E02` **OD Double Lariat** — `oki_advantage` — 典型 +38…57；+38 条件下 DR 6HP active meaty 是核心 setplay。 → `O02`
- `E03` **H Screw Piledriver** — `reset_read` — H SPD 击倒约 +28，但中场距离被拉开；DR追近是重新读人，不写成自动贴身正帧。 → `O03`
- `E04` **角落 Double Lariat** — `oki_advantage` — 角落保墙，可用 6HP meaty 建尊重。 → `O04`
- `E05` **SA3** — `neutral_reset` — 高伤终局；未击杀时按距离重新进场。 → `N01`
- `E06` **DR Headbutt 接触** — `oki_advantage` — 6HP active meaty 后进入 +frame strike/SPD/block。 → `T02`

## 5｜Oki / Reset / Setplay Library

### `O01`｜普通 Lariat 后追近
- Setup：`Double Lariat +27…56 → spacing-dependent DR`
- Plan：先确认距离；能贴到正帧接触才进入打投，否则继续走近。
- Verify：`conditioned`
- Condition：命中高度/距离造成巨大帧差范围
### `O02`｜OD Lariat +38 核心
- Setup：`+38 → DR → 6HP active meaty`
- Plan：被防约 +4：3MP / M SPD / block；命中回 Lariat。
- Verify：`conditioned`
- Condition：+38 版本
### `O03`｜SPD 后重置
- Setup：`L/M/H/OD SPD +28~30`
- Plan：DR 5MP / DR 6MK / DR 6HP 都是追近读法，不标成保证贴脸 Oki。
- Verify：`conditioned`
- Condition：中场距离与 Drive Rush 接触时机
### `O04`｜角落 Lariat→Headbutt
- Setup：`corner Lariat → 6HP meaty`
- Plan：strike / SPD / shimmy / block；保留反跳/反凹。
- Verify：`conditioned`
- Condition：角落

## 6｜Punish / DI / Corner / SA

- **大无敌技确反**：入口 `T04`；优先选择当前 Route Library 中标记 `惩罚` 的稳定路线，再按血量决定斩杀。
- **DI Punish Counter / wall splat**：入口 `T05`；中场和角落不能当成同一落点。
- **SA / kill**：入口 `T08`；只在资源/血量匹配时使用，不替代核心确认。
- **advanced / conditioned**：入口 `T09`；所有高度、距离、角落、资源状态写在 route condition 中。

## 7｜Anti-air conversion

反空入口统一为 `D01`。第一目标是稳定把人打下来；只有当前版本明确验证过的追击才转 Route/Oki，否则显式 `Neutral reset → N02`。

## 8｜Source / Version Boundary

- Baseline patch：**2026-08-03**
- Current structured guide：**2026-08-31 Year 4**
- Checked through：**2026-09-11**
- 数值与当前路线来源见 `sources.yaml`
- Accepted Complete HTML 只作为 learner-facing migration baseline；不能单独提升 patch-sensitive claim。
