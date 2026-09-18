# 嘉米 Cammy — Reference

> Canonical lookup layer / Schema v1.1。这里允许比 LEARN 更密；玩家第一遍不需要全背。

## 1｜Command Index

### Normal attacks
5LP / 5LK / 5MP / 5MK / 5HP / 5HK / 2LP / 2LK / 2MP / 2MK / 2HP / 2HK / j.LP / j.LK / j.MP / j.MK / j.HP / j.HK

### Unique attacks / target-combo families
- Lift Uppercut
- Delayed Ripper
- Assault Blade
- Lift Combination
- Swing Combination

### Special moves
- Spiral Arrow
- Cannon Spike
- Quick Spin Knuckle
- Cannon Strike
- Hooligan Combination
- Razor's Edge Slicer
- Reverse Edge
- Fatal Leg Twister
- Silent Step

### Super Arts
- SA1 Spin Drive Smasher
- SA2 Killer Bee Spin
- SA3/CA Delta Red Assault

### Throws
- Rough Landing
- Delta Throw
- Leg Scissors Choke

通用系统动作（Drive Impact / Drive Parry / Perfect Parry / Drive Rush / Drive Reversal）由全局系统 Reference 提供，本文件只记录该角色的命名与决策差异。

## 2｜关键决策数值

| 工具/状态 | 当前数值 | 为什么重要 |
|---|---|---|
| **5LP** | 4F / hit +5 / block -2 | 基础打断与轻确认 |
| **5MP** | 6F / hit +6 / block -1 | 近身确认，不自动续压 |
| **5HP** | 8F / block -3 / cancellable | 主确认按钮 |
| **M Spiral Arrow** | block -14 | 只从确认中使用 |
| **H Quick Spin Knuckle** | block +3 | 较慢正帧推进，Lv3+ |
| **Cannon Strike** | block 约 -6…+5；OD约 -3…+7 | 高度/距离 conditioned，不显示成固定正帧 |
| **2HK** | hit +31；dash 后约 +13 | 可用的稳定起攻标尺 |

所有带距离、空中高度、角落、active-frame、Drink/portal/charge 等条件的数字必须作为 `conditioned` 使用；不要截掉条件只保留数字。

## 3｜Route Library

### `R01`｜稳定｜低段轻确认→M Spiral Arrow
- **输入**：`2LK > 2LP > 5LK > M Spiral Arrow`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R02`｜稳定｜轻拳确认→M Spiral Arrow
- **输入**：`2LP > 2LP > 5LK > M Spiral Arrow`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R03`｜运版｜2MK DRC 简单路线
- **输入**：`2MK > CDR > 5MP > 5HP > M Spiral Arrow`
- **成本**：3 Drive
- **收尾**：`E01`
- **验证**：`verified`
### `R04`｜伤害/运版｜2MK DRC 重路线
- **输入**：`2MK > CDR > 2HP > 5HP > H Spiral Arrow > H Cannon Spike`
- **成本**：3 Drive
- **收尾**：`E02`
- **验证**：`verified`
### `R05`｜惩罚｜Shimmy / 大硬直 PC
- **输入**：`5HP PC > L Spiral Arrow > H Cannon Spike`
- **成本**：0 Drive
- **收尾**：`E02`
- **验证**：`verified`
- **条件**：Spiral Arrow 距离影响连接
### `R06`｜角落｜DI 墙撞稳定
- **输入**：`DI wall splat > 5HP > L Spiral Arrow > H Cannon Spike`
- **成本**：0 extra Drive
- **收尾**：`E03`
- **验证**：`verified`
### `R07`｜DI｜版中 DI PC
- **输入**：`DI PC > 5HP > L Spiral Arrow > H Cannon Spike`
- **成本**：0 extra Drive
- **收尾**：`E02`
- **验证**：`verified`
### `R08`｜斩杀｜2MK DRC→SA3
- **输入**：`2MK > CDR > 2HP > 5HP > H Cannon Spike(1st hit) > SA3`
- **成本**：3 Drive + 3 SA
- **收尾**：`E04`
- **验证**：`verified`
### `R09`｜反应｜Cannon Strike PC 确认
- **输入**：`Cannon Strike PC > 5LP > 5LK > M Spiral Arrow`
- **成本**：0 Drive
- **收尾**：`E01`
- **验证**：`conditioned`
- **条件**：要求 Cannon Strike PC 后落地距离足够
### `R10`｜角落｜5HP→L Arrow→H Spike
- **输入**：`5HP > L Spiral Arrow > H Cannon Spike`
- **成本**：0 Drive
- **收尾**：`E03`
- **验证**：`verified`
- **条件**：角落

## 4｜Ender Library

- `E01` **M Spiral Arrow** — `oki_advantage` — M Spiral Arrow 击倒后前冲，进入基础打投。 → `O01`
- `E02` **H Cannon Spike** — `oki_advantage` — 用于伤害/运角；落点和空中命中高度会改变实际起攻。 → `O02`
- `E03` **角落 H Cannon Spike** — `oki_advantage` — 角落保墙后继续打 / 投 / shimmy。 → `O03`
- `E04` **SA3** — `oki_advantage` — SA3 后按当前场面进入追击/起攻；斩杀时终止。 → `O02`

## 5｜Oki / Reset / Setplay Library

### `O01`｜M Spiral Arrow 后前冲
- Setup：`M Spiral Arrow → forward dash`
- Plan：strike / throw / shimmy；对方凹时 block。
- Verify：`verified`
### `O02`｜H Cannon Spike 后追击
- Setup：`H Cannon Spike → forward dash / spacing check`
- Plan：先确认落点；能贴身才进入打投，否则回中距离。
- Verify：`conditioned`
- Condition：空中命中高度/位置改变帧差与距离
### `O03`｜角落 Arrow/Spike 起攻
- Setup：`corner ender → keep wall`
- Plan：轻拳/5MP meaty、投、shimmy；持续监控跳出与OD/SA。
- Verify：`conditioned`
- Condition：角落距离
### `O04`｜2HK +31
- Setup：`2HK hit +31 → dash +13`
- Plan：可 meaty / 投 / shimmy。
- Verify：`verified`

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
- Checked through：**2026-09-18**
- 数值与当前路线来源见 `sources.yaml`
- Accepted Complete HTML 只作为 learner-facing migration baseline；不能单独提升 patch-sensitive claim。
