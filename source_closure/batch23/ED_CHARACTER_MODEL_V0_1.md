# Ed Character Model v0.1

Status: PROVISIONAL — must survive Route/Oki audit  
Character: ED  
Primary evidence: SRC03 / SRC04 / SRC05 / SRC06

## essence_short

Ed先用超出普通拳脚距离的5MK、Flicker和长拳拿到接触，再用Blitz击倒；真正的角色循环是用Kill Rush把距离重新压回来，反复制造strike / throw / shimmy，而不是靠charged Flicker自动贴脸抓。

## essence_detail

Ed不是“没有波动拳的拳击版shoto”。他的普通拳脚和Psycho Flicker把有效接触距离拉得比普通近身角色更远：5MK可取消、5MP命中+6，5HP还能在蓄Psycho Knuckle期间转Kill Rush。可Ed真正能稳定赢回合的地方，不是一直在中距离蓄Flicker，而是把一次远距离contact转成Psycho Blitz击倒，再通过Kill Rush / Drive Rush重新获得贴身进攻。例如M Blitz +39、H Blitz +40，H Blitz后DR可形成约+9的下一拍；于是中距离touch能被编译成5HP/2MK/throw/shimmy。charged L/M Flicker虽然当前仍Block +4，但Year4明确缩短了拉近距离，所以它是“让对手重新尊重中距离并按spacing选择strike/走投/shimmy”的工具，不是固定throw loop。5HK本身Block +4又提供第二个清楚的近身pressure owner。成熟Ed因此是在“远处抓空挥/接触 → Blitz击倒 → Kill Rush re-entry → 近身猜拳 → 对手逃开 → 再用长手抓回来”之间循环，Psycho Spark/Shoot、Psycho Knuckle、charged Flicker和SA2都只是逐层扩展这个循环。

## force_opponent_to

- 尊重5MK / Psycho Flicker覆盖的中距离，不敢随便伸长招。
- Blitz击倒后处理Kill Rush / Drive Rush重新进身。
- 近身时处理5HK +4、5MP与throw/shimmy，而不是只等Flicker。
- charged Flicker出现时根据实际pull spacing重新判断strike / walk throw / shimmy。
- Psycho Shoot存在时不能只靠后退重置距离。

## create_respect_with

- 2LP > 5LP > M Psycho Blitz稳定confirm。
- 5MP > 2LK > M Psycho Blitz。
- 5MK > L Psycho Flicker只在confirm / whiff-punish语义下使用。
- H Blitz -> Drive Rush +9。
- 5HK Block +4 -> 5MP frame trap。
- H Blitz exact +42 -> safe jump in declared Hitman Combination route。

## payoff_after_respect

- throw / shimmy在Kill Rush re-entry后开始成立。
- charged Flicker +4可按spacing换strike / walk throw / shimmy。
- 5HK +4把已经贴近的回合继续压住。
- Kill Switch Break / Chaser把中距离contact换成carry / corner。
- corner safe jump与Spark meaty把一次击倒放大成下一轮。
- SA2在已确认opening上延长damage和corner carry。

## core_tradeoff

留在Ed擅长的中距离继续用长拳/Flicker控制，还是把已赚到的contact通过Blitz/Kill Rush换成更高回报的近身回合；charged Flicker、Knuckle和projectile都是“改变下一次接触方式”的工具，不该取代基础re-entry循环。

## successful_round

1. 用5MK、5MP、Flicker或whiff punish拿到中距离contact。
2. confirm到M/H Psycho Blitz拿+39/+40击倒。
3. Kill Rush / Drive Rush重新贴近，先跑strike / throw / shimmy。
4. 对手开始害怕近身后，用5HK +4维持pressure。
5. 对手为了逃离中距离框架乱伸/后退时，再用Flicker、长拳或Psycho Shoot抓回。
6. 进角后safe jump / Spark meaty放大，SA2/SA3只在资源值得时现金化。

## common_misplays

- 把charged Flicker +4理解成自动point-blank throw。
- 5MK > L Flicker没有确认就机械提交，吃-6惩罚。
- 只在中距离“甩Flicker”，却不会把Blitz击倒接回Kill Rush近身回合。
- 看到Psycho Knuckle能蓄就把它当S0主线，反而忽视普通confirm。
- 把H Blitz +42 safe jump泛化到所有H Blitz。
- 还沿用旧back throw +24 loop；当前back throw是+17。

## unique_decision

Ed新增的是range-to-reentry conversion：用比普通角色更长的中距离触角拿到contact，然后把它编译成Blitz knockdown与Kill Rush近身回合；对手逃出去后再回中距离重新捕捉。

## transfer_in

- whiff punish / confirm / anti-air。
- knockdown -> strike / throw / shimmy。
- Drive Rush / corner safe jump。
- projectile pressure与spacing纪律。

## new_skill

- 5MK / Flicker中距离触角的confirm纪律。
- Blitz knockdown -> Kill Rush / DR re-entry。
- charged Flicker +4的spacing-conditioned follow-up。
- 5HK +4近身pressure。
- Kill Switch route作为carry选择，而不是必选combo部件。
- Psycho Spark/Shoot速度差作为后续空间层。

## unlearn

- “Flicker +4 = 保证贴脸投”。
- “Ed只要一直Flicker就能构成game plan”。
- “所有H Blitz都是+42 safe jump”。
- “back throw还是+24 loop”。
- “Psycho Knuckle越早学越像Ed”。
