import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const HERO_DIR = path.join(ROOT, 'public', 'hero');
const MANIFEST = path.join(ROOT, 'source-assets', 'v5-accepted', 'asset-manifest.json');
const failures = [];

if (!fs.existsSync(MANIFEST)) {
  failures.push('asset manifest missing');
}

const manifest = fs.existsSync(MANIFEST)
  ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))
  : { assets: [] };
const heroes = manifest.assets.filter((asset) => asset.kind === 'hero');

if (heroes.length !== 62) {
  failures.push(`expected 62 hero assets, found ${heroes.length}`);
}

const seen = new Set();
for (const asset of heroes) {
  const key = `${asset.character}:${asset.theme}`;
  if (seen.has(key)) failures.push(`duplicate hero mapping: ${key}`);
  seen.add(key);

  const file = path.join(ROOT, asset.path);
  if (!fs.existsSync(file)) {
    failures.push(`${asset.path}: missing`);
    continue;
  }
  const bytes = fs.readFileSync(file);
  if (bytes.length < 50_000) failures.push(`${asset.path}: suspiciously small (${bytes.length} bytes)`);
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[bytes.length - 2] !== 0xff || bytes[bytes.length - 1] !== 0xd9) {
    failures.push(`${asset.path}: not a complete JPEG`);
  }
  const hash = crypto.createHash('sha256').update(bytes).digest('hex');
  if (hash !== asset.sha256) failures.push(`${asset.path}: SHA-256 mismatch`);
}

if (!fs.existsSync(HERO_DIR)) failures.push('public/hero directory missing');

if (failures.length) {
  console.error('HERO ASSET GATE FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('HERO ASSET GATE PASS | 31 characters | 62 light/dark JPEG assets | manifest-verified');
