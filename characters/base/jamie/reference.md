# 杰米 Jamie — Reference

> Canonical lookup layer / Schema v1.1。这里允许比 LEARN 更密；玩家第一遍不需要全背。

## 1｜Command Index

### Normal attacks
5LP / 5LK / 5MP / 5MK / 5HP / 5HK / 2LP / 2LK / 2MP / 2MK / 2HP / 2HK / j.LP / j.LK / j.MP / j.MK / j.HP / j.HK

### Unique attacks / target-combo families
- Tensei Kick
- Phantom Sway
- Falling Star Kick
- Hermit's Elbow
- Senei Kick
- Bitter Strikes
- Full Moon Kick
- Intoxicated Assault
- Ransui Haze

### Special moves
- The Devil Inside
- Freeflow Strikes
- Freeflow Kicks
- Swagger Step
- Arrow Kick
- Bakkai
- Luminous Dive Kick
- Tenshin
- Swagger Hermit Punch

### Super Arts
- SA1 Breakin'
- SA2 The Devil's Song
- SA3/CA Getsuga Saiho

### Throws
- Back Shaver
- Wheel Punch

通用系统动作由全局系统 Reference 提供，本文件只记录该角色的命名与决策差异。

## 2｜关键决策数值

| 工具/状态 | 当前数值 | 为什么重要 |
|---|---|---|
| **5MP** | 8F / hit +6 / block +2 | Lv0 正帧尊重工具 |
| **2LP** | 4F / hit +5 / block -1 | 基础轻确认 |
| **2MK** | 7F / block -6 / cancellable | DRC入口；不取消时结束 |
| **H Arrow Kick** | +39 knockdown | dash 后约 +16 |
| **L Arrow Kick / L Bakkai** | +42 knockdown | 中场双 dash +4~5；角落 safe jump |
| **The Devil Inside** | 50F total; level gain at 49F | 仅安全窗口使用 |
| **Lv4 Swagger Hermit Punch** | +20 knockdown | Lv4优化层 |

所有带距离、空中高度、角落、active-frame、Drink/portal/charge 等条件的数字必须作为 `conditioned` 使用。

## 3｜Route Library

### `R01`｜稳定｜5MP→H Arrow Kick
- **输入**：`5MP > 2MP > H Arrow Kick`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R02`｜稳定｜轻确认→H Arrow Kick
- **输入**：`2LP > 2LP > 5LK > H Arrow Kick`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R03`｜低段｜贴身低段→H Arrow
- **输入**：`2LP > 2LK > 5LK > H Arrow Kick`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
- **条件**：point-blank
### `R04`｜稳定/DRC｜2MK DRC→Freeflow Kicks
- **输入**：`2MK > CDR > 2MP > 2HP > H Freeflow Kicks`
- **成本**：3 Drive
- **收尾**：`E04`
- **验证**：`verified`
### `R05`｜Raw DR｜DR heavy→H Arrow
- **输入**：`DR > 5HP > 5LK > 5LK > H Arrow Kick`
- **成本**：1 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R06`｜惩罚｜5HK PC→H Arrow
- **输入**：`5HK PC > dash > 2HP > H Arrow Kick`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R07`｜Lv1/Oki｜Bitter Strikes→L Arrow
- **输入**：`[Lv1+] 5MP > Bitter Strikes > L Arrow Kick`
- **成本**：0 Drive
- **收尾**：`E02`
- **验证**：`verified`
- **条件**：Drink Lv1+
### `R08`｜Lv2/Oki｜CH→L Bakkai
- **输入**：`[Lv2+] 5MP CH > 2MP > L Bakkai`
- **成本**：+ Drink Lv2
- **收尾**：`E02`
- **验证**：`verified`
- **条件**：Drink Lv2+ and CH
### `R09`｜Lv3｜Tenshin→H Arrow
- **输入**：`[Lv3+] Tenshin > 2MP > Bitter Strikes > H Arrow Kick`
- **成本**：+ Drink Lv3
- **收尾**：`E01`
- **验证**：`verified`
- **条件**：Drink Lv3+
### `R10`｜Lv4｜Swagger Hermit ender
- **输入**：`[Lv4] 5MP > Bitter Strikes > L Swagger Step > Swagger Hermit Punch`
- **成本**：+ Drink Lv4
- **收尾**：`E03`
- **验证**：`verified`
- **条件**：Drink Lv4
### `R11`｜角落｜DI墙撞→TC
- **输入**：`DI wall splat > 5MP > TC ender`
- **成本**：0 extra Drive
- **收尾**：`E05`
- **验证**：`verified`
- **条件**：角落
### `R12`｜斩杀｜SA3→H Arrow
- **输入**：`SA3 > dash > 5HP(1-2hit) > H Arrow Kick`
- **成本**：3 SA
- **收尾**：`E01`
- **验证**：`verified`

## 4｜Ender Library

- `E01` **H Arrow Kick** — `oki_advantage` — +39；中场前冲后约 +16，继续打投。 → `O01`
- `E02` **L Arrow Kick / L Bakkai** — `oki_advantage` — +42；中场双前冲约 +4~5，角落 immediate j.HP safe jump。 → `O02`
- `E03` **Lv4 Swagger Hermit Punch** — `oki_advantage` — +20；继续位置化起攻，不把等级变成第二套架构。 → `O03`
- `E04` **Freeflow Kicks** — `neutral_reset` — 部分 ender 会提高 Drink Level；这是资源交换，先处理等级变化再显式回 Neutral，而不是假 Oki。 → `O04`
- `E05` **Corner TC** — `oki_advantage` — +4；角落 strike / throw / shimmy。 → `O05`

## 5｜Oki / Reset / Setplay Library

### `O01`｜H Arrow +39
- Setup：`H Arrow Kick +39 → dash → about +16`
- Plan：strike / throw / shimmy / block；这是全等级共用核心。
- Verify：`verified`
### `O02`｜+42 ender
- Setup：`L Arrow Kick / L Bakkai +42`
- Plan：midscreen two dashes +4~5；corner immediate j.HP safe jump。
- Verify：`conditioned`
- Condition：L Arrow Lv1+ / L Bakkai Lv2+；角落 safe jump
### `O03`｜Lv4 +20
- Setup：`Swagger Hermit Punch +20`
- Plan：按距离推进；不要假设一定贴身。
- Verify：`conditioned`
- Condition：Drink Lv4
### `O04`｜喝酒后的重置
- Setup：`Drink Level +1 / ender resource gain`
- Plan：如果喝酒让你失去贴身优势，就把它标成资源交换并回 neutral，而不是假 Oki。
- Verify：`conditioned`
- Condition：具体 ender/距离
### `O05`｜角落 +4
- Setup：`TC ender +4`
- Plan：2LP/5MP meaty、投、shimmy、block。
- Verify：`verified`
- Condition：角落

## 6｜Punish / DI / Corner / SA

- 大无敌技确反：入口 `T04`。
- DI PC / wall splat：入口 `T05`。
- SA / kill：入口 `T08`。
- advanced / conditioned：入口 `T09`。

## 7｜Anti-air conversion

反空入口统一为 `D01`。第一目标是稳定把人打下来；只有当前版本明确验证过的追击才转 Route/Oki，否则显式 `Neutral reset → N02`。

## 8｜Source / Version Boundary

- Baseline patch：**2026-08-03**
- Current structured guide：**2026-08-31 Year 4**
- Checked through：**2026-09-18**
- 数值与当前路线来源见 `sources.yaml`
- Accepted Complete HTML 只作为 learner-facing migration baseline；不能单独提升 patch-sensitive claim。
