import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const ROOT = process.cwd();
const assert = (ok, msg) => { if (!ok) throw new Error(msg); };
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const yaml = (p) => YAML.parse(read(p));

const chars = [
  { slug:'ryu', group:'base', normals:18, learn:['S0｜最小可玩','623HP','236P'], ref:['+42','236236K'], practical:['623HP'] },
  { slug:'jamie', group:'base', normals:18, learn:['安全窗口','Drink Level','H Arrow Kick'], ref:['Bakkai','Tenshin'], practical:['236K','63214'] },
  { slug:'mai', group:'year2', normals:18, learn:['dash +9','Musasabi','stock'], ref:['OD Ryuuenbu block -3','+41/+42'], practical:['j.214P','OD 236K','SA2'] },
  { slug:'zangief', group:'base', normals:23, learn:['建立“对手必须防”的尊重','SPD','Lariat'], ref:['SPD 后重置','OD Double Lariat'], practical:['360P','SA3'] },
  { slug:'cammy', group:'base', normals:18, learn:['M Spiral Arrow','Cannon Strike','Hooligan'], ref:['Cannon Strike','SA3'], practical:['SA1','SA3'] }
];

for (const c of chars) {
  const dir = `characters/${c.group}/${c.slug}`;
  const practicalText = read(`${dir}/practical.yaml`);
  const practical = YAML.parse(practicalText);
  const learn = read(`${dir}/learn.md`);
  const reference = read(`${dir}/reference.md`);
  const role = c.slug === 'ryu'
    ? yaml(`${dir}/meta.yaml`).role_profile
    : yaml(`${dir}/role_profile.yaml`).role_profile;

  assert(learn.length > 500, `${c.slug}: learning content missing/thin`);
  assert(reference.length > 400, `${c.slug}: reference content missing/thin`);
  assert(role?.character_model || role?.identity, `${c.slug}: character model missing`);
  assert(role?.normal_frame_table?.rows?.length === c.normals, `${c.slug}: normal table must be ${c.normals}`);
  assert(practical?.stages?.S0 && practical?.stages?.S4, `${c.slug}: S0-S4 practical stages missing`);
  assert(Array.isArray(practical?.opportunities) && practical.opportunities.length >= 4, `${c.slug}: practical Opportunity Hub too small`);

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
console.log('CONTENT INTEGRATION GATE PASS | 31 roster | Ryu/Jamie/Mai/Zangief/Cammy Learn + Role + Practical + Reference');
