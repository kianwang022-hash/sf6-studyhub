import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const ROOT = process.cwd();
const READY_STATE: Record<string, string> = {
  ryu: 'GOLD_REFERENCE',
  jamie: 'GOLD_PAGE_READY',
  mai: 'GOLD_PAGE_READY',
  zangief: 'GOLD_PAGE_READY',
  cammy: 'GOLD_PAGE_READY',
  ken: 'GOLD_PAGE_READY',
  akuma: 'GOLD_PAGE_READY',
  luke: 'GOLD_PAGE_READY',
  terry: 'GOLD_PAGE_READY',
  sagat: 'GOLD_PAGE_READY',
  juri: 'GOLD_PAGE_READY',
  elena: 'GOLD_PAGE_READY',
  yasmine: 'GOLD_PAGE_READY',
  rashid: 'GOLD_PAGE_READY',
  kimberly: 'GOLD_PAGE_READY'
};

const HERO_DISPLAY: Record<string, { position: string; scale: number }> = {
  ryu: { position: '58% 45%', scale: 0.97 },
  jamie: { position: '90% 50%', scale: 1 },
  cammy: { position: '88% 50%', scale: 1 },
  mai: { position: '90% 50%', scale: 1 },
  zangief: { position: '82% 50%', scale: 1 },
  ken: { position: '88% 50%', scale: 1 },
  akuma: { position: '88% 50%', scale: 1 },
  luke: { position: '88% 50%', scale: 1 },
  terry: { position: '88% 50%', scale: 1 },
  sagat: { position: '88% 50%', scale: 1 },
  juri: { position: '88% 50%', scale: 1 },
  elena: { position: '88% 50%', scale: 1 },
  yasmine: { position: '88% 50%', scale: 1 },
  rashid: { position: '88% 50%', scale: 1 },
  kimberly: { position: '88% 50%', scale: 1 }
};

const GROUP_LABELS: Record<string, string> = {
  base: '本体 · BASE ROSTER · 18人',
  year1: 'YEAR 1 · 4人',
  year2: 'YEAR 2 · 4人',
  year3: 'YEAR 3 · 4人',
  year4: 'YEAR 4 · 1人'
};

function readYaml(file: string) {
  return YAML.parse(fs.readFileSync(file, 'utf8'));
}

function readYamlIf(file: string) {
  return fs.existsSync(file) ? readYaml(file) : null;
}

function readTextIf(file: string) {
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

const rosterDoc = readYaml(path.join(ROOT, 'ROSTER.yaml'));

export const ROSTER_GROUPS = Object.entries(rosterDoc.groups).map(([group, entries]: [string, any]) => ({
  id: group,
  label: GROUP_LABELS[group] ?? group,
  characters: (entries as any[]).map((entry) => ({
    slug: entry.slug,
    nameZh: entry.name_zh,
    nameEn: entry.name_en,
    group,
    state: READY_STATE[entry.slug] ?? 'CONTENT_READY'
  }))
}));

export const ALL_CHARACTERS = ROSTER_GROUPS.flatMap((group) => group.characters);
export const CURRENT_CHARACTERS = ALL_CHARACTERS.filter((c) => READY_STATE[c.slug]);

export function loadCharacter(slug: string) {
  const meta = ALL_CHARACTERS.find((c) => c.slug === slug);
  if (!meta) throw new Error(`Unknown SF6 character: ${slug}`);

  const dir = path.join(ROOT, 'characters', meta.group, slug);
  const isReady = Boolean(READY_STATE[slug]);
  let roleProfile: any = null;
  let practical: any = null;
  let progression: any = null;

  if (isReady) {
    practical = readYaml(path.join(dir, 'practical.yaml'));
    progression = readYamlIf(path.join(dir, 'grow.yaml'));
    if (slug === 'ryu') {
      roleProfile = readYaml(path.join(dir, 'meta.yaml')).role_profile;
    } else {
      roleProfile = readYaml(path.join(dir, 'role_profile.yaml')).role_profile;
    }
  }

  const hero = HERO_DISPLAY[slug]
    ? {
        dark: `${slug}-dark.jpg`,
        light: `${slug}-light.jpg`,
        ...HERO_DISPLAY[slug]
      }
    : null;

  return {
    ...meta,
    isReady,
    roleProfile,
    practical,
    progression,
    learnMarkdown: readTextIf(path.join(dir, 'learn.md')),
    referenceMarkdown: readTextIf(path.join(dir, 'reference.md')),
    hero
  };
}
