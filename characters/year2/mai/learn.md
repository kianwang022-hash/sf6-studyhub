# 不知火舞 Mai — LEARN

> 目标：第一次学 Mai 时，不把扇子、空中 setplay 或 SA1 stock 当成角色门槛，而是先形成一条**地面接触 → L Hissatsu Shinobi Bachi +27 → dash +9 → 下一轮**。Kachousen 只辅助空间，Musasabi / OD Ryuuenbu / stock 只放大已经成立的地面回合。详细路线与条件见 `reference.md`；状态跳转见 `play.yaml`。

## 1｜认识角色

### 一句话打法

**先用低段 / 中拳把接触稳定换成 L Hissatsu Shinobi Bachi，前冲后做打 / 投 / shimmy；Musasabi、OD Ryuuenbu 与 SA1 stock 都是在基础地面成立后的升级。**

### 深度角色模型

- **基础闭环**：cr.LK→cr.LP×2→L Shinobi Bachi；核心击倒 +27，dash 后约 +9，已经足够形成清楚的下一轮。
- **空间工具**：Kachousen 用来改变对手走位 / 跳跃节奏，但“扇子系统”不能替代反空与地面确认。
- **最常见输法**：为了扇子节奏不看跳、没确认就 Bachi、过早追 Musasabi setplay、因为 OD Ryuuenbu Year4 改成 -3 就误当正帧续压。
- **后置空中层**：Musasabi no Mai 从 LK TC 进入 +41/+42 safe-jump family，只在基础击倒和角落判断稳定后开放。
- **资源层**：SA1 会带来 stock / boosted specials；它改变后续收益，不应该让“攒 stock”成为整局 KPI。

### 真正的学习方式｜先地面闭环，再让扇子与空中系统加值

学习顺序按 **Whole → Part → Whole**。S0–S4 是同一条 +27→dash +9 Loop 逐渐增加空间节奏、空中 setplay 与 stock 资源。

#### S0｜最小可玩

1. cr.LP / cr.MP / cr.MK 负责正常地面接触。
2. 命中稳定转 L Shinobi Bachi；被防不自动提交。
3. 典型跳跃用 Hishou Ryuuenjin 等稳定反空。
4. Bachi +27 后 dash +9，先固定一个普通打击答案。

目标是**不用 Musasabi / stock 也能完成整轮**：地面接触 → L Bachi → dash +9 → 固定下一步 → 对手脱出回中距离。

#### S1｜基本功成型

- +27→dash +9 后逐步加入投 / shimmy / block reversal。
- Kachousen 发出后继续看跳 / 走位，不让 fan 锁死注意力。
- 地面 normal 按距离分工，不为了扇子 / stock 乱冒险。
- 对空、DI、大确反与基础防守不再反复漏。

这一层结束时，主要损失不应该再来自**基础确认掉落、Bachi Oki 空白、发扇忘看跳或把 fan 当完整 Neutral。**

#### S2｜实战结构化 · 冲 Master

- cr.MK / Drive 路线开始按 Hit / Block / Whiff 与资源分流。
- 对 mash / tech / jump / reversal 调整 strike / throw / shimmy / block。
- OD Ryuuenbu Year4 block -3 只按真实中场 / 角落 / 空中用途使用；-3 不是自动主动权。
- 同一次接触按位置、Drive、墙边价值选择稳定 / 运位 / Oki / 停手。

真正的进步是：**扇子和特殊技开始服务地面选择，而不是把地面判断替换掉。**

#### S3｜选择成熟 · 1500 MR稳定

- Musasabi no Mai 与 +41/+42 safe-jump family 接进已有击倒 Loop，但条件必须保留。
- 空中 setplay 没形成条件时会回地面主线，不硬飞。
- 同一次机会按位置、Drive、血量选择 grounded / air branch 与稳定 / Oki / 伤害。
- 复盘解释为什么这里值得进入 Musasabi，而不是只检查有没有用角色机制。

**1500 MR 是持续 Reality evidence，不是能力定义。**

#### S4｜高分上探

- SA1 stock / boosted specials、角落 OD Ryuuenbu、高资源 / SA 与窄条件 safe jump。
- Stock 是收益放大器，不成为“这局一定要攒”的任务。
- 回放重点转向空中 setplay 是否真正提高收益、fan/ground/air 比例是否被对手适应。

具体高分 MR 不硬编码；由后续真实目标与持续表现决定。

### 暂时后置原则

Reference 里有 Musasabi、+42、OD Ryuuenbu 与 SA1 stock，不代表 S0 就要学。**先让地面 Bachi Loop 稳定，再让 fan、air setplay 和 stock 增加收益。**

---

## 2｜工具地图

| 工具 | 第一用途 | 决策含义 |
|---|---|---|
| **Kachousen** | 空间 / 节奏 | 发扇后仍反空 / 走位，不替代地面。 |
| **cr.LP / cr.MP / cr.MK** | 地面接触 | S0 主轴。 |
| **Hissatsu Shinobi Bachi** | 核心击倒 / 运位 | L版 +27→dash +9 基础 Loop。 |
| **Hishou Ryuuenjin** | 反空 / 收尾 | 基础防空。 |
| **Ryuuenbu** | 连段 / 角落 / Year4 OD扩展 | OD -3 仍不是自动正帧。 |
| **Musasabi no Mai** | S3 safe-jump / 空中 setplay | +41/+42 family 条件化。 |
| **SA1 stock** | S4资源层 | boosted specials 后置。 |

## 3｜Core Loop

`N02 → T01 → R01 → E01 → O01 → T02 → N02`

**地面接触 → L Bachi +27 → dash +9 → 打 / 投 / shimmy → 对手脱出回中距离。**

## 4｜Lv0–Lv4 与 S0–S4 的关系

`Lv0–Lv4` 是底层内容解锁；`S0–S4` 是 learner-facing 长期阶段。Musasabi / stock 已在资料库，不意味着它们应该成为 S0 的角色入口。