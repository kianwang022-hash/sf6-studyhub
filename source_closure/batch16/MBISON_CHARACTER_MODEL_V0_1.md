# M. Bison Character Model v0.1

Status: **PROVISIONAL — must survive Route/Oki audit**  
Character: **M. BISON**  
Sources: SRC03 / SRC04 / SRC05 / SRC06

## essence_short

Bison先用普通Backfist路线把Psycho Mine种到对手身上；Mine存在后，下一次Crusher / Backfist / Devil Reverse会从“高风险special”变成完全不同的正帧/高回报状态。核心是种Mine、利用Mine、再回到普通状态重建。

## essence_detail

M. Bison是Charge章最后一个很好的转折点：他确实需要保存Psycho Crusher / Shadow Rise的charge，但真正的新技能是“对手身上的状态”。没有Mine时，Psycho Crusher和Backfist被防都非常危险；一旦Backfist命中把Mine植入，对手下一次面对这些special时风险结构直接改变，例如L/M Crusher从block -20变成+6，H Backfist从-15变成+9，OD Crusher从-3变成+10。Mine因此不是“多一点伤害”的被动buff，而是让同一个special在下一个回合变成另一种招。

当前Game Plan也支持这个循环：普通contact -> Backfist植Mine -> H Backfist +31 / DR Oki -> overhead/low/throw/shimmy -> Mine-enhanced Crusher/Backfist兑现 -> +42/+49/+82等大Oki或正帧pressure -> detonation后重新回普通状态。成熟Bison不是“有Mine就马上爆”，而是知道Mine存在本身就能让对手更怕special；如果当前pressure不需要马上兑现，可以让状态继续影响对手决策。反过来，没有Mine时也不能把Crusher当安全进场。charge和Mine要同时被追踪。

## force_opponent_to

- 尊重st.HP block +1与4HK block +1的普通正帧接触。
- normal Backfist命中后开始处理“下一次special可能引爆Mine”的威胁。
- Mine存在时，不敢把Crusher/Backfist/Devil Reverse按普通负帧special处理。
- +42/+49等大预算后继续处理overhead / low / throw / shimmy。

## create_respect_with

- st.MP / cr.MP：稳定ground contact。
- Backfist Combo：normal-state ender + Mine plant。
- H Backfist +31：第一套清楚Oki。
- st.HP / 4HK block +1：Year4普通pressure。
- Mine-enhanced Crusher / Backfist：后置plus-pressure/cash-in。

## payoff_after_respect

- Mine存在本身就让对手更难放心按normal punish。
- Mine Crusher/Backfist可从大负帧变成+5~+10。
- Mine Backfist/Crusher进入+42以上safe-jump/pressure预算。
- Devil Reverse在Mine状态下变成极高plus值的空中pressure。
- 对手为了等Mine或躲detonation而僵住后，throw / low / shimmy更强。

## core_tradeoff

现在引爆Mine兑现plus/damage/Oki vs 继续保留Mine，让它作为未来威胁影响对手。另一个取舍是charge availability：Crusher可能是最强cash-in，但只有你保住back charge时才存在。

## successful_round

1. st.MP / cr.MP / light拿contact
2. Backfist结束combo并植入Mine
3. H Backfist +31或DR Oki继续高低投
4. 对手开始尊重Mine special
5. 选择Mine Backfist / Crusher / Devil Reverse cash-in
6. detonation后回normal-state route重新植Mine

## common_misplays

- 没Mine时把Crusher当安全pressure。
- normal Backfist被防还以为因为“会种Mine”就安全。
- 有Mine就立即引爆，不看Mine的威慑价值。
- 忘记Crusher/Shadow Rise还需要charge availability。
- 把+42当普通Backfist/Crusher的通用结果。
- 太早围着Devil Reverse/SA2高阶路线打。

## unique_decision

Bison新增的是“对手状态 + 自己charge双状态管理”：同一个special的意义会随Mine有无彻底改变，你必须同时知道Mine现在在不在、charge现在够不够。

## transfer_in

- Guile/Dee Jay/Honda的charge storage纪律。
- grounded contact / strike / throw / shimmy。
- punish / corner / Oki。

## new_skill

- Psycho Mine植入 / 保留 / 引爆循环。
- Mine state改变special block/Oki truth。
- charge availability与Mine state同时追踪。
- Mine-enhanced +42/+49/+82 setplay。
- state-aware Devil Reverse / Backfist / Crusher选择。

## unlearn

- special帧差是固定属性。
- 有Mine就应该马上爆。
- charge角色只需追踪自己的输入状态。
- normal Backfist / Crusher和Mine版本可以合并记忆。
