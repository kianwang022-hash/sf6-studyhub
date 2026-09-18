# Mai — Reference

## Version boundary

- **Current competitive baseline:** Year 4 / 2026-08-03 battle balance update.
- **Current structured combo / okizeme source:** 2026-08-31.
- **Frame-data reference:** current official-reference data reflected by SF6 Lab through 2026-08-27.
- **Freshness check:** 2026-09-18. Later September hotfixes checked for this audit do not add a new Mai balance layer.
- Height, corner position, stock / boosted state, airborne state and active-frame timing stay **conditioned**. Do not flatten them into one universal number.

## Command index

| Input | Move / learner label | Main practical job |
| --- | --- | --- |
| `236P` | Kachousen · 飞扇 | 中远距离控制；逼跳、Parry、改走位。 |
| `236K` | Hissatsu Shinobi Bachi · 忍蜂 | 基础稳定收尾 / carry / Oki 分流。 |
| `214P` | Ryuuenbu · 龙炎舞 | 近身与连段转换；OD 版是 Year 4 的重要中场转换工具。 |
| `623K` | Hishou Ryuuenjin · 飞翔龙炎阵 | 反空 / 空中收尾；角落与命中高度会改变后续。 |
| `j.214P` | Musasabi no Mai · 空中鼯鼠之舞 | 安全跳、空中转换和部分高价值 Oki。 |
| `236236P` | SA1 Kagerou no Mai | 普通 / 强化状态会进入不同的后续帧差家族。 |
| `214214K` | SA2 Chou Hissatsu Shinobi Bachi | 高资源路线收尾之一。 |
| `236236K` | SA3 Shiranui Ryuu: Enbu Ada Zakura | 高资源现金化；只使用完整、已闭合的 route string。 |

完整 **18 个基础 Normal 帧数表**在 Role 的 Normal table；这里不再复制一遍，Reference 只保留真正会影响路线选择的数字与条件。

## Key Year 4 numbers

- **L `236K` Shinobi Bachi:** 常见 KD **+27**；前冲后约 **+9**。这是最基础的稳定下一轮入口。
- **H `214P > L 236K`:** 常见 KD **+30**；前冲后约 **+12**。
- **`j.214P` Musasabi:** 当前来源给出常见 **+41 / +42** 家族，可形成 forward-jump safe-jump；必须保留具体路线 / 命中状态条件。
- **OD `214P` Ryuuenbu:** **16F / Block -3**；单招当前来源约 **1400 damage**。Year 4 让它更适合中场转换，但 **-3 不是正帧**。
- **SA1:** 普通状态常见后续 **+26**；强化状态常见 **+40**。两种状态不能混写。
- **Corner forward throw:** 常见 **+21**；前冲后约 **+3**。
- M/H Ryuuenbu、H Ryuuenbu 后续以及空中收尾会随命中高度 / 位置进入不同桶，不给一个“万能 Oki”数字。

## Stable learner-facing route families

### 1. 基础低段 / 地面确认 → L Shinobi Bachi

先把普通地面骨架练稳：低段或稳定接触确认后，用 `L 236K` 收尾，优先拿 **+27 → dash +9** 的可重复下一轮。

**用途：** 低资源、稳定、适合 S0。  
**下一轮：** strike / throw / active-meaty / shimmy，而不是为了多几百伤害立刻改成长路线。

### 2. Safe-jump family

`5LK > LK > LK > j.214P | Musasabi no Mai`

当前来源把它放在 **+41 / +42** 家族。满足对应命中状态时，可进入 forward-jump HK safe-jump 结构。

**条件：** route / hit-state conditioned。  
**不要记成：** “只要 Musasabi 收尾就永远 +42”。

### 3. Air conversion

`5MP > OD 236K > j.MP > j.214P`

这是完整的空中转换字符串之一，用来把普通中拳接触升级成空中收尾 / 下一轮。

角落可见另一条完整分支：

`5MP > OD 236K > j.MP > SA1`

### 4. OD Ryuuenbu conversion

`2MP > OD 214P > SA1`

这是当前来源已闭合的完整 route string。

另一个条件化家族：

`OD 214P > 5HP > H 214P > L 236K`

Starter、屏幕位置与空中状态会影响合法性 / 结果，因此必须带条件使用。

### 5. High-resource Musasabi cashout

`5LK > LK > LK > OD j.214P > SA2`

作为 S4 高资源代表即可，不需要因为来源里存在更多路线就全部暴露给学习者。

### 6. Boosted-state representative

`Hien Ren Kyaku > [强化状态] OD Musasabi > H 214P > H 623K`

这是**有强化资源 / 强化状态**才成立的条件路线。前台先讲“强化资源改变路线价值”，再讲 Stock / Boosted 名词。

## Setplay / active-frame families

这些是可复现的**条件化** setup，不是无条件脚本：

- Corner `4HK > HK` 状态：约 **+48**；可进入 `5MK whiff > L 214P` active-frame meaty。
- H `214P` 的 **+43** 家族：可进入 `5LP x2 > 6MP` active-frame overhead。
- SA1 normal-hit **+26**：可进入 `2LK whiff > 4HK` active-frame meaty。
- SA1 boosted-state **+40**：dash 后进入约 **+22** 家族。

Training Mode 里必须保留角落、状态、timing 与 hit-state 条件；数字相同也不代表所有路线距离相同。

## Resource / boosted-state rules

目前 learner-facing 可以安全带走的是：

1. Mai 有一层**强化资源**，它会改变后续部分动作的价值。
2. 有资源时进入的**强化状态**不是第二套独立角色，而是同一地面骨架上的升级分支。
3. 同一个 starter 的选择，应比较：
   - 当前伤害；
   - Oki / safe jump；
   - carry / corner；
   - Drive；
   - 强化资源与下一轮。
4. 当前 Source Closure **没有把所有 Stock gain / spend 规则完整暴露成一张可无条件背诵的账本**。所以没有核实的精确 Stock 账目继续留在 backend / Training Mode，不在 Reference 里补造。

## Keep out of learner UI for now

以下 family 当前仍不应该伪装成完整路线：

- `OD 214P > 5HP > OD 236P > Midare Kachousen > DR > ... > SA3`
  - 当前来源本身含缺失段，不能把省略号带到学习页面。
- 把 OD `214P` 后的 `L236K / H623K / SA1 / SA2 / SA3` 写成一个万能多 ender 速记。
  - 只有 individually complete 的成员才能作为正式路线出现。
- 把 `OD 214P Block -3` 讲成“被防后继续压”。
- 把 `+41 / +42`、`+26 / +40` 脱离对应状态，压成单一固定数字。

## Practical lookup

需要实战决策时，优先回 Practical 的 S0–S4：

- **S0:** projectile / ground confirm / stable `236K` ender；
- **S1:** strong knockdown / safe-jump；
- **S2:** DRC / punish / DI；
- **S3:** OD `214P` 与状态转换；
- **S4:** boosted / super / high-resource optimization。

Reference 负责“查完整事实和条件”，不负责替代 S0–S4 学习顺序。

## Source map

- **SRC01** — Official Street Fighter 6 Frame Data — Mai.
- **SRC02** — SF6 Lab Mai Combos & Okizeme, Year 4, updated 2026-08-31.
- **SRC03** — SF6 Lab Mai Frame Data, current official-reference layer.
- **SRC00** — accepted historical learner-facing baseline; only contextual, never overrides current patch-sensitive numbers.

Numeric conflicts follow the rule in `sources.yaml`: **official/current wins; stock / height / corner / active-frame differences remain conditioned.**
