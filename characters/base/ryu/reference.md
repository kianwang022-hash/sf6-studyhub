# 隆 Ryu — Reference

> **用途**：查，不是从头背。当前阶段由学习阶段决定，机会选择由 Practical Hub 决定；这里给完整输入、关键数字、路线条件与扩展候选。打开 Reference 时应保留 Hub / origin，查完回原机会，不沿本文顺序继续学。

## Version Boundary

- Baseline balance update: **2026-08-03**
- Current combo source update: **2026-08-31**
- Checked: **2026-09-12**
- Controls: **Classic**
- 涉及空中高度、墙距、后段接触、起身恢复的数字，只在列出的条件下使用。
- **ID规则**：`R01–R10 / O01–O05` 与稳定实战语义保持同义；只放 Reference 的扩展候选使用 `Xxx`，不再复用稳定 ID。

## 1. 完整输入索引

### 普通技

| 输入 | 中文用途名 | English | 主用途 |
|---|---|---|---|
| 5LP | 站轻拳 | Standing Light Punch | 4F打断、轻确认 |
| 5LK | 站轻脚 | Standing Light Kick | 5F小确反、较长轻攻击 |
| 5MP | 站中拳 | Standing Medium Punch | 近身确认枢纽 |
| 5MK | 站中脚 | Standing Medium Kick | 中距离占位 |
| 5HP | 站重拳 | Standing Heavy Punch | 高回报差合/PC |
| 5HK | 站重脚 | Standing Heavy Kick | 大确反、Shimmy PC |
| 2LP | 蹲轻拳 | Crouching Light Punch | 4F打断、轻确认 |
| 2LK | 蹲轻脚 | Crouching Light Kick | 贴身低段 |
| 2MP | 蹲中拳 | Crouching Medium Punch | 确认桥梁、取消 |
| 2MK | 蹲中脚 | Crouching Medium Kick | 低段接触、S2后DRC主入口 |
| 2HP | 蹲重拳 | Crouching Heavy Punch | 重确认组件、部分对空 |
| 2HK | 扫腿 | Crouching Heavy Kick | 远端击倒/确反 |
| j.LP | 跳轻拳 | Jumping Light Punch | 快速空对空 |
| j.LK | 跳轻脚 | Jumping Light Kick | 空中轻攻击/交叉属性 |
| j.MP | 跳中拳 | Jumping Medium Punch | 空对空，可取消空中龙卷 |
| j.MK | 跳中脚 | Jumping Medium Kick | 交叉跳 |
| j.HP | 跳重拳 | Jumping Heavy Punch | 重跳入 |
| j.HK | 跳重脚 | Jumping Heavy Kick | 重跳入/安全跳常用 |

### 特殊拳脚 / TC

| 输入 | 中文 | English | 主用途 |
|---|---|---|---|
| 6MP | 前中拳 / 中段 | Collarbone Breaker | 慢中段 |
| 6HP | 前重拳 | Solar Plexus Strike | 推进、正帧接触、623HP后基础meaty |
| 4HP | 后重拳 / 短上勾 | Short Uppercut | 近身高伤组件 |
| 4HK | 后重脚 / 斧踢 | Axe Kick | 连段组件、空中bounce条件 |
| 6HK | 前重脚 | Whirlwind Kick | 运版/空中龙卷组件 |
| 5HP > 5HK | 重拳TC | High Double Strike | 版边/浮空组件 |
| 5MP > 5LK > 5HK | 中拳TC | Fuwa Triple Strike | 特定路线/Denjin结束 |

### 必杀

| 输入 | 中文 | English | 主用途 |
|---|---|---|---|
| 236P | 波动拳 | Hadoken | 远距离控地面 |
| 623P | 升龙拳 | Shoryuken | 对空 / 收尾；OD为全无敌反击 |
| 214K | 龙卷 | Tatsumaki Senpu-kyaku | 收尾 / 运版 / Oki |
| j.214K | 空中龙卷 | Aerial Tatsumaki Senpu-kyaku | 空中追击 / 运版 |
| 236K | 驴踢 | High Blade Kick | 伤害 / 击倒 / Denjin / 运版 |
| 214P | 波掌 | Hashogeki | 压力 / CH浮空 / Denjin接触 |
| 22P | 蓄电 | Denjin Charge | 获得1层Denjin |

### 超杀

| 输入 | 中文 | English |
|---|---|---|
| 236236P | SA1 真空波动拳 | Shinku Hadoken |
| 214214P | SA2 真波掌击 | Shin Hashogeki |
| 236236K | SA3/CA 真升龙拳 | Shin Shoryuken |

## 2. 决策用关键帧数

> 只列会直接改变“能不能按/该不该续”的数字。完整帧表见角色页。

| 动作 | Startup | Hit | Block | 决策意义 |
|---|---:|---:|---:|---|
| 5LP | 4 | +4 | -1 | 最快基础打断；被防不自动继续 |
| 2LP | 4 | +4 | -1 | 同上 |
| 2LK | 5 | +3 | -1 | 低段轻确认 |
| 5MP | 6 | +7 | -1 | 命中可稳定接2MP；被防重新判断 |
| 2MP | 6 | +5 | 0 | 确认组件；被防平帧 |
| 2MK | 8 | +1 | -6 | S2后低段DRC入口；没DRC时被防应结束 |
| 5MK | 9 | +4 | -4 | 中距离占位，不可普通取消 |
| 5HP | 10 | +4 | -2 | 高回报、可取消；不要乱挥 |
| 5HK | 12 | +9 | +1 | PC价值高，但不可取消/有姿态距离条件 |
| 6HP | 20 | +6 | +3 | 慢推进；被防后才是真正正帧决策 |
| 4HP | 7 | +1 | -13 | 只做确认/连段组件 |
| 214HP | 30 | KD | +2 | 慢但正帧，必须先有设置/读法 |
| OD 214P | 18 | +3 | +3 | 2Drive换稳定正帧接触 |
| Denjin OD 214P | 18 | crumple | +4 | 强接触，命中后有专门兑现 |
| 623HP | 7 | KD | -36 | 地面连段收尾/对空；被防风险巨大 |
| OD 623P | 6 | KD | -40 | 1–8F全无敌；地面反压用，风险极高 |

### 当前常用击倒/起攻数字

- **标准地面连段 623HP 收尾：+37** → `66` 后约 **+18** → `O01`。
- **注意**：反空 623P / 623HP 的空中命中高度会改变落点，**不能自动套用地面收尾 +37**。
- **214MK 空中命中：+27** → `66` 后 **+8**。
- **角落 214MK 地面命中：+23** → `66` 后 **+4**。
- **角落前投：+17** → whiff `5LP` 后可组织投/打/Shimmy → `O04`。
- **+42条件**：当前来源示例为 `236LK` 地面命中或 `236HK` 空中命中 → 前跳 `j.HK` 安全跳 → `O05`。

## 3. PLAY Route Library｜稳定ID

### S0｜最小可玩

**R01｜5MP稳定｜0 Drive**  
`5MP > 2MP xx 623HP` → `E01 → O01`

**R02｜轻确认稳定｜0 Drive**  
`2LK > 5LP > 5LP xx 623HP` → `E01 → O01`

### S1｜基本功扩展

**R10｜轻确认Oki变化｜0 Drive**  
`2LK > 5LP > 5LP xx 214LK` → `E02 → O02`。  
不是 S0 必背；基础 623HP Loop 稳定后再比较收尾价值。

**R05｜5HK PC稳定确反｜0 Drive**  
`5HK (PC) > 5HP > 623HP` → `E01 → O01`

**R06｜角落DI墙撞稳定｜后续不追加Drive**  
`DI wall splat > 2HP xx 214MP > 623HP` → `E01 → O01`

**R07｜版中DI换边｜Drive**  
`DI (PC) > 6HP > 2MP xx OD 236K > 66 > 623MP` → `E04`。  
**conditioned**：换边和后续距离必须按实际 spacing 验证。

### S2｜实战结构化

**R03｜2MK DRC稳定｜3 Drive**  
`2MK xx DRC > 5HP > 4HP xx 623HP` → `E01 → O01`

重点不是只会连，而是：Hit / Block / Whiff 不同结果不机械交 3 格。

### S3｜选择成熟

**R04｜OD 236K运版/Oki｜2+ Drive**  
`starter > OD 236K > slight delay 6HK xx j.214K` → `E03 → O03`。  
**conditioned**：起手、空中高度和落点影响连接与双前冲后的 spacing。

### S4｜高分优化

**R08｜高资源斩杀入口**  
`2MK xx DRC > ... > 623HP xx 236236K` → `E05`。  
只在资源和击杀条件值得时进入。

**R09｜+42 safe jump入口**  
`236LK grounded hit OR 236HK airborne hit > forward jump j.HK` → `E06 → O05`。  
**conditioned**：grounded / airborne 条件决定是否真是 +42。

## 4. Extended / Lab Candidates｜不抢PLAY稳定ID

以下用 `Xxx`，只用于扩展查询；不因为“存在于Reference”就自动进入当前学习阶段。

**X01｜2MK DRC后蓄电候选**  
`2MK xx DRC > 5HP > 4HP xx 236HK > 22P`。  
用途：S3以后有安全窗口时用位置/贴身机会换 Denjin；需要当前版本 Training Mode 复核具体距离。

**X02｜跳入稳定收尾**  
`j.HP > 4HP xx 623HP` → 地面收尾后可按 `O01`。  
跳入深度不够时不要强套。

**X03｜5HK PC运版**  
`5HK (PC) > 66 > 2HP xx 214MK`。  
214MK 后续按空中/角落地面命中条件分别读数字。

**X04｜高资源PC斩杀候选**  
`5HK (PC) > 2HP xx DRC > 5HK > 2HP xx DRC > 5HK > 2HP xx 623HP xx 236236K`。  
S4 才考虑；资源、距离、Burnout风险优先于“最大数字”。

**X05｜版中DI PC无资源稳定**  
`DI (PC) > 6HP > 2MP xx 623HP` → `O01`。

**X06｜版中DI PC运版/Oki**  
`DI (PC) > 6HP > 2MP xx OD 236K > 6HK xx j.214K` → `O03`。  
**conditioned**：高度/落点必须确认。

**X07｜版中DI PC斩杀**  
`DI (PC) > 6HP > 2MP xx OD 236K > 4HK > 623HP xx 236236K`。  
S4按击杀条件使用。

**X08｜Hashogeki浮空兑现**  
`214P launch > 214MK（或当前高度下已确认的稳定juggle）`。  
关键不是背固定字符串，而是先确认普通/CH/PC/Denjin状态、对手高度与是否仍够到。

**X09｜空对空位置路线**  
`j.MP xx j.214K` → 落地后回距离。高度不对时不要为了“必须接后续”强行取消。

**X10｜旧StudyHub蓄电候选**  
旧StudyHub记录：`5MP > 2MP xx 236MK > 22P`。当前Year4路线页没有把这条精确字符串列为主路线，因此只保留为历史候选，不进入主决策图。

## 5. Ender Library

| ID | 标签 | Ender | 为什么选 | 下一步 |
|---|---|---|---|---|
| E01 | 核心起攻 | 623HP地面连段收尾 | 稳定伤害，当前基线给+37起攻 | O01 |
| E02 | Oki变化 | 214LK | 伤害低一些，换另一种起攻结构 | O02 |
| E03 | 运版/Oki | OD 236K → 6HK → j.214K | 2Drive换推进和双前冲近身 | O03 |
| E04 | 换边 | OD 236K换边路线 | 位置收益优先 | N02 |
| E05 | 斩杀 | 236236K | 资源换收局；未击杀重新读位置 | Kill / N02 |
| E06 | +42 setup | 236LK地面 / 236HK空中特定命中 | 满足条件才进入安全跳 | O05 |

## 6. Oki Library｜与PLAY一致

### O01｜623HP地面连段收尾 +37

当前Year4基线：标准地面 `623HP` 收尾 +37；`66` 后约 +18。

**S0默认只先学：**

- `623HP > 66 > 6HP meaty`：最容易固定节奏的基础下一轮；`6HP` 被防 +3 后再进入正帧判断。

**S1以后逐步加：**

- Raw DR 打：花1Drive换更近接触。
- Raw DR 投：抓持续防守。
- Raw DR Shimmy：抓拆投习惯。
- `66` 后停手防：抓起身 reversal。

边界：**`66` 后直接投不是 meaty throw**；投/shimmy同时受 timing + spacing 影响。反空 623HP 也不套这套 +37。

### O02｜214LK → dash → L Hashogeki

- 后段 meaty 是这套成立的关键，不等于裸 L Hashogeki 正帧。
- 普通命中 → 回中拳确认。
- CH浮空 → 查 `X08`。
- 被防 → 重新进入打/投/骗拆/停手判断。
- 对手起身无敌技 → 这不是安全跳，必须承担风险。

### O03｜OD 236K空中龙卷 → 双前冲

当前Year4：满足对应起手/高度时，双前冲后进入近身，保留投 / 打 / Shimmy。

- 投：抓持续防守。
- 打：抓起身按键/后跳。
- Shimmy：抓拆投。
- 停手防：抓 reversal。

不要把“双前冲”从特定连段落点复制到任意 OD 236K。

### O04｜角落前投 +17

`前投 > whiff 5LP` 后再组织：

- 再投
- 打
- Shimmy
- 防凹

这是角落特定 spacing；不迁移到版中。

### O05｜+42 Safe Jump｜S4

当前来源示例：`236LK` 地面命中或 `236HK` 空中命中后 +42 → 前跳 `j.HK`。

成立以后才讨论：

- `j.HK` 压起身
- 空跳投
- 空跳 `2LK`
- 条件允许时的延迟空中龙卷变化

前提都是**先确认对应 +42 条件成立**。

### Reference-only｜214MK收尾数字

- 空中命中 +27 → `66` 后 +8 → 打/投/Shimmy。
- 角落地面命中 +23 → `66` 后 +4 → 打/投/Shimmy。
- 其他命中状态不套这两个数字。

## 7. 防守 / Punish Quick Reference

### 对空

- **623HP / 623P**：主力对空，但空中命中高度会改变落点；不要自动套 O01 的“地面623HP +37”。
- **2HP**：早一点的地面对空备选；命中后先看距离，通常回 Neutral。
- **j.MP**：空对空，可取消 `j.214K`；只在高度合适时追。

### 高风险动作的理论确反窗口

当前帧数据给出：

- L/M/H 623P 被防约 -23 / -32 / -36。
- OD 623P 被防 -40。
- SA1 被防 -24。
- SA2各蓄力层级被防 -20。
- SA3/CA 被防 -52。

这些数字只是“理论窗口”；真实 punish 还必须看推开、距离和角色射程。

## 8. Source / Verification Notes

- `current_source`：当前Year4路线页直接列出。
- `current_frame_supported`：当前帧表足以支持连接关系，且与现有教学资料一致，但该精确路线未在当前路线页单独列卡。
- `legacy_supported`：旧Ryu Mastery中有画面/字幕证据，当前数据未发现明显冲突；正式晋升主路线前仍需当前版本 Training Mode 复核。
- `conditioned`：高度/墙距/grounded/airborne/Denjin等条件会显著改变结果，不能压成万能数字。
- **阶段纪律**：Reference 收录 ≠ 当前要学；是否进入当前阶段由真实瓶颈决定。
