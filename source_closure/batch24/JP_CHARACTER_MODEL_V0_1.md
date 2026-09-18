# JP Character Model v0.1

Status: PROVISIONAL — must survive Route/Oki audit  
Character: JP  
Primary evidence: SRC03 / SRC05

## essence_short

JP先用Stribog击倒和Triglav/Torbalan把对手留在远处被迫应答；等远程节奏稳定后，再花时间放Departure，把一次远程优势变成可重复的portal state。

## essence_detail

JP不是“远程招很多所以从最远处轮流按技能”。他的基本回合先从很普通的contact开始：light -> L Stribog拿+38，st.MK -> M Stribog拿+42，cr.MP也能收进L Stribog。击倒以后，JP最擅长的不是立刻追着贴脸，而是让对手继续处在“必须回答远程威胁”的位置：Triglav从地面刺出，Torbalan改变对手站/蹲/移动的应答，st.HP命中/被防又能把回合接到Torbalan或Drive分支。Departure则是这个模型的第二层——它不是开局免费铺的机关，而是在已经赚到空间后花时间建立一个未来节点；之后JP可以用portal shadow、teleport、low/strike/throw让原本线性的远程压制变成两点之间的状态机。当前训练顺序也先让学习者稳定Stribog、Torbalan和+42 safe jump，之后才进入Departure、Triglav -> OD Departure、SA2。成熟JP真正管理的是“现在继续用即时远程威胁，还是投资portal让未来的同一片空间更难逃”，而不是背一张远程招式表。

## force_opponent_to

- 在远处也必须对Triglav / Torbalan / Stribog做动作，而不能安心重置。
- M Stribog / L Torbalan击倒后处理+42 safe jump或继续远程压制。
- st.HP被防后不能把回合当成完全结束，因为L/OD Torbalan与Drive分支仍存在。
- Departure已建立后，必须同时考虑当前JP位置和portal未来位置。
- 角落portal/throw状态下不能只防一条轴线。

## create_respect_with

- light -> L Stribog +38稳定confirm。
- st.MK -> M Stribog +42。
- cr.MP -> st.LK -> L Stribog。
- far Triglav对静止/走地应答。
- st.HP -> L Torbalan hit/block layer。
- st.HK Block +2近身pressure。

## payoff_after_respect

- M Stribog / L Torbalan +42进入safe jump或active-frame pressure。
- 已有空间时放Departure建立未来portal node。
- airborne st.HP -> Departure可形成约+15的portal pressure budget。
- Triglav -> OD Departure可形成+4..+6的近身/portal混合状态。
- Departure state里低段、strike、throw、teleport让远程防守无法只看一条线。
- 角落与SA2把“远程应答压力”放大成更长的setplay。

## core_tradeoff

现在用Stribog/Triglav/Torbalan拿即时远程收益，还是花时间建立Departure换未来更强的空间状态；portal投资只有在空间已经赚到时才值得。

## successful_round

1. 用light / st.MK / cr.MP确认到Stribog，拉开并取得有利击倒。
2. 用Triglav / Torbalan让对手在远处继续做选择。
3. 对手开始尊重地面刺与projectile后，决定继续即时控制还是放Departure。
4. portal建立后，用shadow/teleport/low/strike/throw改变攻击轴。
5. 对手为了逃portal跳/前冲/Parry时，回到normal、Triglav或anti-air惩罚。
6. 角落再用+42 safe jump / throw / portal setplay，SA2只在资源值得时放大。

## common_misplays

- 开局就机械放Departure，被对手直接穿过设置时间。
- 把JP学成“轮流放远程招”，没有稳定Stribog knockdown owner。
- 所有+42都当同一个safe jump，不看M Stribog/L Torbalan状态。
- portal一放就固定teleport，不根据对手移动选shadow/继续远程。
- 还沿用旧OD Amnesia throw后的自动route。
- SA2 Lovushka太早进入主线，导致基础空间判断没形成。

## unique_decision

JP新增的是remote-state investment：即时projectile/spike负责现在的屏幕，Departure负责给未来的屏幕增加一个portal节点；你要判断何时继续即时控制，何时投资未来空间。

## transfer_in

- projectile / anti-air / whiff punish。
- knockdown -> Oki / reset。
- strike / throw / shimmy。
- exact-state setplay纪律。

## new_skill

- remote threat ordering：Stribog / Triglav / Torbalan不是随机轮招。
- immediate control vs Departure investment。
- portal state里的双位置思考。
- portal-entry low/strike/throw/teleport分支。
- current Amnesia aftermath与corner throw状态。
- SA2 Lovushka作为后置多层setplay。

## unlearn

- “zoner就是一直往后退放招”。
- “Departure越早放越像JP”。
- “所有+42都是同一个safe jump”。
- “portal只有teleport一个用途”。
- “旧Amnesia route仍然有效”。
