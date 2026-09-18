# Akuma Character Model v0.1

Status: **PROVISIONAL — must survive Route/Oki audit**
Character: **AKUMA**
Sources: SRC03 / SRC04 / SRC05

## essence_short

豪鬼先用完整 shoto 基础把局面做稳，再用更多空中、蓄波和百鬼选择去惩罚对手已经形成的防守；9000 体力要求这些额外 option 必须有理由。

## essence_detail

豪鬼不是“招多所以每回合都要多做事”。他的普通地面骨架其实很完整：236P 豪波动拳控空间、623P 豪升龙反空，2MK 取消绿冲，5MP 被防 +1，H 豪升龙收尾还能给 +30 的稳定起攻。真正属于豪鬼的增量，是在这套标准骨架上多出空中波、蓄力豪波动、百鬼袭、阿修罗闪空、金刚灼火等额外角度，让对手不能只用一种节奏处理你的接近和压制。但这些选择并不免费：豪鬼当前只有 9000 体力，百鬼派生和 charged fireball 的价值也明显依赖高度、距离、蓄力和 setplay 条件。成熟的豪鬼不是不停展示 option，而是先让对手尊重普通地面和 +frame 接触，再用最合适的一种额外 option 针对他的防守习惯；一旦对手开始抢、跳、Perfect Parry 或无敌技，就主动缩回稳定骨架重新读人。

## force_opponent_to

- 尊重 5MP +1、5HK +3 与 2MP/2MK 的普通近身接触。
- 不能只盯地面 Hadoken；空中 Zanku Hadoken 与 Demon Raid 会改变跳跃/对空时机。
- 在 H Shoryuken +30 和其他击倒后，必须持续处理 strike / throw / shimmy，而不是只防一条固定脚本。

## create_respect_with

- 236P Gou Hadoken：普通 shoto 飞道骨架，蓄力后再改变帧差和节奏。
- 623P Gou Shoryuken：稳定反空与 combo ender。
- 5MP / 5HK：当前 frame data 分别 Block +1 / +3，建立近身尊重。
- 236K Demon Raid：后置的 option family，用高度/派生针对固定防守。
- 214P Adamant Flame：不同强度和 OD 状态承担路线/角落价值。

## payoff_after_respect

- 普通 throw / shimmy / low 的基础选择更容易成立。
- charged Gou Hadoken 可以在 setplay 中制造更强的 block 状态。
- Demon Raid follow-up 针对只会站防、蹲防或固定对空节奏。
- 更丰富的 ender 把同一个 opening 换成 +30、+37、+41、+47 等不同下一轮。

## core_tradeoff

稳定 shoto 回合 vs 额外 option density。多一层百鬼、空波、蓄波或瞬移只有在它真的针对对手行为时才值得；9000 体力意味着无理由的高承诺选择成本更高。

## successful_round

1. 用普通火球 / 地面按钮控制节奏
2. 用升龙反空或 2MP / 2MK 拿可靠接触
3. 先用 H Shoryuken +30 等稳定 end-state 建立打投
4. 对手形成固定防守后再加入 charged fireball / Demon Raid / air fireball
5. 观察对手是抢、跳、PP 还是无敌技
6. 根据答案缩回基础或继续二层 option

## common_misplays

- 因为招多就每回合都百鬼、空波、瞬移，结果基础 shoto 反而没有稳定。
- 看到 5HK +3 / Demon Raid 某些派生正帧，就把不同高度和命中状态当成同一个固定数字。
- 为了追求 +42 继续背旧 guide，忽略当前 L Tatsu > 2HK 已按现行资料改成 +37 family。
- 忘记 9000 体力，拿高承诺 option 去换不值得的小收益。

## unique_decision

相对 Ryu/Ken，豪鬼新增的不是一个资源条，而是“什么时候值得打开额外 option space”。同一轮可以维持标准 shoto，也可以用空中、蓄波、百鬼和特殊移动改变对手必须处理的角度；成熟度体现在选择频率，而不是招式数量。

## transfer_in

- projectile / anti-air / 2MK DRC / strike-throw-shimmy。
- knockdown -> Oki 与 punish / DI / SA 基础。

## new_skill

- option density 管理：何时只用标准答案，何时打开额外角度。
- Demon Raid 高度 / 派生 / spacing 条件判断。
- charged fireball 的蓄力时间与 setplay 价值。
- 用 9000 health 重新衡量高承诺选择的风险。

## unlearn

- 招式更多就应该每回合使用更多招式。
- 正帧数字可以脱离高度 / spacing / active-frame 条件单独背。
- 旧版本 +42 等 setplay 口诀可以直接沿用。

## audit questions

1. S0 只加入哪一个 Akuma-specific option 才能保留身份又不过载？
2. 5HK +3 是否应在早期承担 respect 工具，还是因多段/spacing 推迟？
3. L Tatsu -> 2HK +37 是否比 H DP +30 更早进入 S1？
4. Demon Raid 哪些 follow-up 真正拥有独立 practical value？
