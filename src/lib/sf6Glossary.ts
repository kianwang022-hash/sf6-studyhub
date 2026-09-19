export type Sf6GlossaryEntry = {
  key: string;
  term: string;
  zh: string;
  short: string;
  aliases: string[];
  group: 'round' | 'offense' | 'defense' | 'drive' | 'notation';
  beginner?: boolean;
};

export const SF6_GLOSSARY: Sf6GlossaryEntry[] = [
  { key:'hit', term:'Hit', zh:'命中', short:'攻击真正打到对手。命中后才进入命中确认、连段或击倒路线。', aliases:['HIT','Hit'], group:'round', beginner:true },
  { key:'block', term:'Block', zh:'被防', short:'攻击被对手防住。被防后的帧数决定你还能不能继续按，不能把命中路线机械播完。', aliases:['BLOCK','Block'], group:'round', beginner:true },
  { key:'whiff', term:'Whiff', zh:'挥空', short:'攻击没有碰到对手。很多招挥空后恢复很长，继续输入通常只会扩大被惩罚窗口。', aliases:['WHIFF','Whiff'], group:'round', beginner:true },
  { key:'ch', term:'CH', zh:'Counter Hit / 反击命中', short:'在对手动作启动期间打中。通常会得到比普通命中更好的帧数或连段机会。', aliases:['Counter Hit','CH'], group:'round' },
  { key:'pc', term:'PC', zh:'Punish Counter / 惩罚反击', short:'在对手招式恢复阶段打中。SF6 里常带来更高收益或特殊硬直。', aliases:['Punish Counter','PC'], group:'round', beginner:true },
  { key:'kd', term:'KD', zh:'Knockdown / 击倒', short:'把对手打倒。KD 后要看具体帧数与距离，不能默认每次都能贴脸继续压。', aliases:['Knockdown','KD'], group:'round', beginner:true },
  { key:'oki', term:'Oki', zh:'起攻', short:'对手倒地后起身时的进攻安排。可以是打、投、骗拆、压起身，也可能因为距离不够只能重置。', aliases:['Okizeme','Oki'], group:'offense', beginner:true },
  { key:'meaty', term:'Meaty', zh:'压起身 / 持续帧压起', short:'让攻击的有效判定覆盖对手起身时刻。成功时能压住普通按键，但仍要考虑无敌反击。', aliases:['Meaty','meaty'], group:'offense', beginner:true },
  { key:'throw', term:'Throw', zh:'普通投', short:'近身投技。对手一直防时可以抓；对手拆投、跳或后退时需要对应调整。', aliases:['Throw','throw'], group:'offense', beginner:true },
  { key:'command_grab', term:'Command Grab', zh:'指令投', short:'需要特定指令输入的投技，通常不能像普通投一样被拆，但落空风险往往更大。', aliases:['Command Grab','command grab'], group:'offense' },
  { key:'strike_throw', term:'Strike / Throw', zh:'打投二择', short:'用打击惩罚乱动，用投抓持续防守。真正强度来自让对手不能只押一种防守答案。', aliases:['Strike / Throw','strike / throw','strike/throw'], group:'offense', beginner:true },
  { key:'shimmy', term:'Shimmy', zh:'骗拆投', short:'靠近做出要投的感觉，再后退让对手的拆投挥空，然后用打击惩罚。', aliases:['Shimmy','shimmy'], group:'offense', beginner:true },
  { key:'neutral', term:'Neutral', zh:'立回 / 中立状态', short:'双方都没有明确回合优势时争夺距离与接触的阶段。重点是走位、对空、差合和安全地碰到对手。', aliases:['Neutral','neutral'], group:'round', beginner:true },
  { key:'footsies', term:'Footsies', zh:'地面立回', short:'围绕移动、距离、按钮覆盖与挥空惩罚展开的地面博弈。', aliases:['Footsies','footsies'], group:'round' },
  { key:'confirm', term:'Confirm', zh:'确认', short:'看到攻击真的命中后才继续后续输入；被防或挥空时及时停住。', aliases:['Hit Confirm','Confirm','confirm'], group:'round', beginner:true },
  { key:'punish', term:'Punish', zh:'确反 / 惩罚', short:'利用对手招式恢复或明显负帧，在他来不及防守时稳定反击。', aliases:['Punish','punish'], group:'round', beginner:true },
  { key:'antiair', term:'Anti-air', zh:'对空', short:'专门处理对手跳入的动作或路线。看见跳时优先把空中路线关掉，而不是继续盯地面连段。', aliases:['Anti-air','Anti Air','AA'], group:'defense', beginner:true },
  { key:'reversal', term:'Reversal', zh:'起身/受压反击', short:'在恢复控制的第一时间输入反击。无敌 Reversal 能打断压力，但被防后通常会吃大惩罚。', aliases:['Reversal','reversal'], group:'defense', beginner:true },
  { key:'safe_jump', term:'Safe Jump', zh:'安全跳', short:'利用特定击倒时间做跳攻击；既能压普通起身，又能及时落地防住多数无敌反击。必须绑定具体 KD/帧数条件。', aliases:['Safe Jump','safe jump'], group:'offense' },
  { key:'setplay', term:'Setplay', zh:'定式起攻', short:'在已知击倒、位置和时间条件下重复执行的起攻结构。条件变了就不能机械照搬。', aliases:['Setplay','setplay','Setup','setup'], group:'offense' },
  { key:'reset', term:'Reset', zh:'重置', short:'不继续保证连段或强制起攻，而是回到新的读法/距离状态。Reset 不等于 Oki。', aliases:['Reset','reset'], group:'round' },
  { key:'starter', term:'Starter', zh:'起手', short:'一条路线最开始的命中工具，比如轻攻击、2MK、跳入或 Punish Counter。', aliases:['Starter','starter'], group:'round' },
  { key:'ender', term:'Ender', zh:'收尾', short:'连段最后用来决定伤害、位置、KD 与下一轮状态的动作。', aliases:['Ender','ender'], group:'round' },
  { key:'route', term:'Route', zh:'路线', short:'从一个机会出发，到收尾和下一轮的完整选择链。不同路线可能买伤害、运版、Oki 或省资源。', aliases:['Route','route'], group:'round' },
  { key:'carry', term:'Carry', zh:'运版 / 推版', short:'把对手往墙角带的能力。少一点伤害换更好位置，往往是有价值的选择。', aliases:['Corner Carry','Carry','carry'], group:'round' },
  { key:'spacing', term:'Spacing', zh:'距离控制', short:'招式在什么距离命中或被防。很多正负帧、连段和起攻只在特定 spacing 成立。', aliases:['Spacing','spacing'], group:'round' },
  { key:'frame', term:'Frame', zh:'帧', short:'游戏时间的最小单位。正帧表示你更早恢复，负帧表示对手更早恢复；但距离和可用招式仍会影响实际选择。', aliases:['Frames','Frame','frame'], group:'notation', beginner:true },
  { key:'drive', term:'Drive', zh:'Drive 槽', short:'SF6 的核心通用资源。Drive Rush、Drive Impact、Parry、Drive Reversal 和 OD 招式都会和它发生关系。', aliases:['Drive Gauge','Drive'], group:'drive', beginner:true },
  { key:'drive_rush', term:'Drive Rush', zh:'斗气前冲', short:'消耗 Drive 快速前冲，常用来延长连段、买正帧、拉近距离或继续进攻。', aliases:['Drive Rush'], group:'drive', beginner:true },
  { key:'drc', term:'DRC', zh:'Drive Rush Cancel / 取消斗气前冲', short:'从可取消的普通技接 Drive Rush。通常花 3 格 Drive，把一次接触变成更大的确认或压力。', aliases:['Drive Rush Cancel','DRC'], group:'drive', beginner:true },
  { key:'raw_dr', term:'Raw DR', zh:'直接斗气前冲', short:'不是从普通技取消，而是直接用 Parry Drive Rush 进身。成本与风险和 DRC 不一样。', aliases:['Raw Drive Rush','Raw DR'], group:'drive' },
  { key:'di', term:'DI', zh:'Drive Impact / 斗气迸放', short:'带装甲的通用攻击。可被返 DI、投、部分多段/快速动作等处理；墙边命中会产生额外收益。', aliases:['Drive Impact','DI'], group:'drive', beginner:true },
  { key:'parry', term:'Parry', zh:'Drive Parry / 斗气防御', short:'用 Drive 资源防住攻击并降低部分压力；Perfect Parry 会产生特殊收益。', aliases:['Drive Parry','Parry'], group:'drive', beginner:true },
  { key:'drive_reversal', term:'Drive Reversal', zh:'斗气反击', short:'防守中的通用脱压手段，消耗 Drive 把对手推开；被防时可能被惩罚。', aliases:['Drive Reversal','D-Reversal'], group:'drive' },
  { key:'burnout', term:'Burnout', zh:'Burnout / 枯竭', short:'Drive 槽耗尽后的状态。不能正常使用 Drive 系统，并会承受更差的防守帧数与墙角风险。', aliases:['Burnout','burnout'], group:'drive', beginner:true },
  { key:'od', term:'OD', zh:'Overdrive / 强化必杀', short:'消耗 Drive 的强化必杀技。通常比普通版更强、更快或拥有不同性质。', aliases:['Overdrive','OD'], group:'drive', beginner:true },
  { key:'sa', term:'SA', zh:'Super Art / 超必杀', short:'使用 Super Art 槽的 SA1 / SA2 / SA3。不同角色用途不同，不等于“有就该放”。', aliases:['Super Art','SA3','SA2','SA1','SA'], group:'drive', beginner:true },
  { key:'cancel', term:'Cancel', zh:'取消', short:'在一个动作还没完全结束时，按照规则切到另一个动作。不是所有普通技都能取消到必杀或 DRC。', aliases:['Cancel','cancel'], group:'notation' },
  { key:'tc', term:'TC', zh:'Target Combo / 固定派生', short:'按指定顺序输入就能连接的角色固有连携。它和普通帧连接不是同一种机制。', aliases:['Target Combo','TC'], group:'notation' },
  { key:'crossup', term:'Cross-up', zh:'逆向', short:'跳到对手另一侧同时命中，让防守方向发生变化。是否成立取决于角色、距离和跳入轨迹。', aliases:['Cross-up','Crossup','cross-up'], group:'offense' }
];

export const PRACTICAL_GLOSSARY_KEYS = [
  'kd','oki','meaty','throw','shimmy','neutral','confirm','pc','whiff',
  'drive','drive_rush','drc','di','parry','od','sa','safe_jump','spacing'
];

export const BEGINNER_GLOSSARY = SF6_GLOSSARY.filter((entry) => entry.beginner);

const byKey = new Map(SF6_GLOSSARY.map((entry) => [entry.key, entry]));

export function glossaryEntry(key: string) {
  return byKey.get(key) ?? null;
}

const aliasEntries = SF6_GLOSSARY
  .flatMap((entry) => entry.aliases.map((alias) => ({ alias, entry })))
  .sort((a,b) => b.alias.length - a.alias.length);

const escapeRegex = (value: string) => value.replace(/[.*+?^$(){}|[\]\\]/g, '\\$&');
const aliasPattern = aliasEntries.map(({alias}) => escapeRegex(alias)).join('|');
const glossaryRegex = new RegExp('(?<![A-Za-z0-9])(' + aliasPattern + ')(?![A-Za-z0-9])', 'gi');

export function splitGlossaryText(value: unknown) {
  const text = String(value ?? '');
  if (!text || !aliasPattern) return [{ text, entry: null as Sf6GlossaryEntry | null }];

  const parts: { text: string; entry: Sf6GlossaryEntry | null }[] = [];
  let last = 0;
  for (const match of text.matchAll(glossaryRegex)) {
    const index = match.index ?? 0;
    if (index > last) parts.push({ text: text.slice(last, index), entry: null });
    const token = match[0];
    const found = aliasEntries.find(({alias}) => alias.toLowerCase() === token.toLowerCase());
    parts.push({ text: token, entry: found?.entry ?? null });
    last = index + token.length;
  }
  if (last < text.length) parts.push({ text: text.slice(last), entry: null });
  return parts.length ? parts : [{ text, entry: null }];
}
