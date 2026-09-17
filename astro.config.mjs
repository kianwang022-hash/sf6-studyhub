import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://kianwang022-hash.github.io',
  base: '/sf6-studyhub',
  build: { format: 'directory' }
});
