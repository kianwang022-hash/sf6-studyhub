import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

export const CURRENT_CHARACTERS = [
  { slug: 'ryu', nameZh: '隆', nameEn: 'Ryu', group: 'base', state: 'GOLD_REFERENCE' },
  { slug: 'jamie', nameZh: '杰米', nameEn: 'Jamie', group: 'base', state: 'CONTENT_READY' },
  { slug: 'mai', nameZh: '火舞', nameEn: 'Mai', group: 'year2', state: 'CONTENT_READY' },
  { slug: 'zangief', nameZh: '桑吉尔夫', nameEn: 'Zangief', group: 'base', state: 'CONTENT_READY' },
  { slug: 'cammy', nameZh: '嘉米', nameEn: 'Cammy', group: 'base', state: 'CONTENT_READY' }
] as const;

const ROOT = process.cwd();

function readYaml(file: string) {
  return YAML.parse(fs.readFileSync(file, 'utf8'));
}

export function loadCharacter(slug: string) {
  const meta = CURRENT_CHARACTERS.find((c) => c.slug === slug);
  if (!meta) throw new Error(`Unknown current character: ${slug}`);
  const dir = path.join(ROOT, 'characters', meta.group, slug);
  const practical = readYaml(path.join(dir, 'practical.yaml'));
  let roleProfile: any;
  if (slug === 'ryu') {
    const ryuMeta = readYaml(path.join(dir, 'meta.yaml'));
    roleProfile = ryuMeta.role_profile;
  } else {
    const role = readYaml(path.join(dir, 'role_profile.yaml'));
    roleProfile = role.role_profile;
  }
  return { ...meta, roleProfile, practical };
}
