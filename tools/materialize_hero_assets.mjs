import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, 'hero-src');
const OUTPUT_DIR = path.join(ROOT, 'public', 'hero');
const CHARACTERS = ['ryu', 'jamie', 'cammy', 'mai', 'zangief'];
const THEMES = ['dark', 'light'];

const failures = [];
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const character of CHARACTERS) {
  for (const theme of THEMES) {
    const name = `${character}-${theme}.webp`;
    const sourcePath = path.join(SOURCE_DIR, `${name}.b64`);
    const outputPath = path.join(OUTPUT_DIR, name);

    if (!fs.existsSync(sourcePath)) {
      failures.push(`${name}: source missing`);
      continue;
    }

    const compact = fs.readFileSync(sourcePath, 'utf8').replace(/\s+/g, '');
    if (!compact || !/^[A-Za-z0-9+/]+={0,2}$/.test(compact)) {
      failures.push(`${name}: invalid base64 text`);
      continue;
    }

    const bytes = Buffer.from(compact, 'base64');
    const riff = bytes.subarray(0, 4).toString('ascii');
    const webp = bytes.subarray(8, 12).toString('ascii');
    if (riff !== 'RIFF' || webp !== 'WEBP') {
      failures.push(`${name}: decoded payload is not a complete WebP (possible truncated chunk)`);
      continue;
    }
    if (bytes.length < 8_000) {
      failures.push(`${name}: decoded image suspiciously small (${bytes.length} bytes)`);
      continue;
    }

    fs.writeFileSync(outputPath, bytes);
  }
}

if (failures.length) {
  console.error('HERO ASSET MATERIALIZATION FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('HERO ASSET MATERIALIZATION PASS | 5 characters | light + dark | valid WebP payloads');
