import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const ROOT = process.cwd();
const assert = (ok, msg) => { if (!ok) throw new Error(msg); };
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const yaml = (p) => YAML.parse(read(p));

const collectSourceRefs = (node, out = []) => {
  if (Array.isArray(node)) {
    for (const item of node) collectSourceRefs(item, out);
    return out;
  }
  if (!node || typeof node !== 'object') return out;
  for (const [key, value] of Object.entries(node)) {
    if ((key === 'source_id' || key === 'primary_source') && typeof value === 'string') out.push(value);
    if (key === 'sources' && Array.isArray(value)) {
      for (const id of value) if (typeof id === 'string') out.push(id);
    }
    collectSourceRefs(value, out);
  }
  return out;
};

const chars = [
  { slug:'ryu', group:'base', normals:18, learn:['S0｜最小可玩','623HP','236P'], ref:['+42','236236K'], practical:['623HP'] },
  { slug:'jamie', group:'base', normals:18, learn:['安全窗口','Drink Level','H Arrow Kick'], ref:['Bakkai','Tenshin'], practical:['236K','63214'] },
  { slug:'mai', group:'year2', normals:18, learn:['dash +9','Musasabi','stock'], ref:['OD `214P` Ryuuenbu','+41 / +42'], practical:['j.214P','OD 236K','SA2'] },
  { slug:'zangief', group:'base', normals:23, learn:['建立“对手必须防”的尊重','SPD','Lariat'], ref:['SPD 后重置','OD Double Lariat'], practical:['360P','SA3'] },
  { slug:'cammy', group:'base', normals:18, learn:['M Spiral Arrow','Cannon Strike','Hooligan'], ref:['Cannon Strike','SA3'], practical:['SA1','SA3'] },
  { slug:'ken', group:'base', normals:18, learn:['S0｜最小可玩','Quick Dash Tatsu','2MP > 5LK'], ref:['+25','Forward Step Kick'], practical:['Quick Dash','SA3'], candidate:true }
];

for (const c of chars) {
  const dir = `characters/${c.group}/${c.slug}`;
  const practicalText = read(`${dir}/practical.yaml`);
  const practical = YAML.parse(practicalText);
  const progression = yaml(`${dir}/grow.yaml`);
  const learn = read(`${dir}/learn.md`);
  const reference = read(`${dir}/reference.md`);
  const roleOwner = c.slug === 'ryu'
    ? yaml(`${dir}/meta.yaml`)
    : yaml(`${dir}/role_profile.yaml`);
  const role = c.slug === 'ryu' ? roleOwner.role_profile : roleOwner.role_profile;
  const sourceRegistry = yaml(`${dir}/sources.yaml`);
  const sourceIds = new Set((sourceRegistry?.sources ?? []).map((s) => s?.id).filter(Boolean));

  assert(sourceRegistry?.character === c.slug, `${c.slug}: source registry character mismatch`);
  assert(sourceIds.size >= 4, `${c.slug}: source registry is missing current evidence tiers`);
  assert((sourceRegistry.sources ?? []).some((s) => Number(s?.tier) === 0), `${c.slug}: official Tier 0 source missing`);
  for (const id of new Set([...collectSourceRefs(roleOwner), ...collectSourceRefs(practical)])) {
    assert(sourceIds.has(id), `${c.slug}: unresolved source reference ${id}`);
  }

  assert(learn.length > 500, `${c.slug}: learning content missing/thin`);
  assert(reference.length > 400, `${c.slug}: reference content missing/thin`);
  assert(role?.character_model || role?.identity, `${c.slug}: character model missing`);
  assert(role?.normal_frame_table?.rows?.length === c.normals, `${c.slug}: normal table must be ${c.normals}`);
  assert(practical?.stages?.S0 && practical?.stages?.S4, `${c.slug}: S0-S4 practical stages missing`);
  assert(Array.isArray(practical?.opportunities) && practical.opportunities.length >= 4, `${c.slug}: practical Opportunity Hub too small`);
  assert(Array.isArray(progression?.progression_stages) && progression.progression_stages.length === 5, `${c.slug}: learning S0-S4 progression missing`);
  assert(progression.progression_stages.every((s) => s.learner_goal && Array.isArray(s.add_now) && s.gate), `${c.slug}: incomplete learning progression stage`);

  for (const token of c.learn) assert(learn.includes(token), `${c.slug}: learning marker missing: ${token}`);
  for (const token of c.ref) assert(reference.includes(token), `${c.slug}: reference marker missing: ${token}`);
  for (const token of c.practical) assert(practicalText.includes(token), `${c.slug}: practical marker missing: ${token}`);

  for (const op of practical.opportunities ?? []) {
    for (const row of op.rows ?? []) {
      const input = String(row.input ?? '');
      assert(input && !input.includes('...') && !input.includes('…'), `${c.slug}: unfinished practical input: ${input}`);
      assert(!/^starter\s*>/i.test(input) && !/^move\s*>/i.test(input), `${c.slug}: generic starter leaked: ${input}`);
      assert(String(row.next_loop ?? row.next_loop_package ?? '').trim(), `${c.slug}: practical row missing next loop`);
      assert(String(row.why ?? '').trim(), `${c.slug}: practical row missing WHY`);
    }
  }

  if (c.slug === 'jamie') {
    assert(!/Bakkai[^\n]{0,40}214K|214K[^\n]{0,40}Bakkai/i.test(`${learn}\n${reference}\n${practicalText}`), 'jamie: incorrect 214K Bakkai mapping leaked');
  }
  if (c.slug === 'zangief') {
    assert(!/SPD[^\n]{0,80}(保证|guaranteed).{0,20}(贴脸|point-blank)/i.test(`${learn}\n${reference}\n${practicalText}`), 'zangief: guaranteed point-blank Oki wording leaked');
  }
  if (c.slug === 'cammy') {
    assert(/高度|距离|落点/.test(practicalText), 'cammy: Cannon Strike conditioning language missing');
  }
}

const roster = yaml('ROSTER.yaml');
const count = Object.values(roster.groups).flat().length;
assert(count === 31, `roster must remain 31, got ${count}`);
console.log('CONTENT INTEGRATION GATE PASS | 31 roster | 5 current characters + 1 content candidate | Learn + Role + Practical + Reference + resolved source registries');
