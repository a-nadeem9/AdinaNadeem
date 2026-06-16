import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const checks = [
  ['dist/index.html', 'Adina Nadeem - Bioinformatics MSc'],
  ['dist/blog/index.html', 'Blog - Adina Nadeem'],
];

let failures = 0;

for (const [file, expectedTitle] of checks) {
  const html = await readFile(join(process.cwd(), file), 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];

  if (title !== expectedTitle) {
    failures += 1;
    console.error(`${file}: expected "${expectedTitle}", got "${title ?? 'missing'}"`);
  }
}

if (failures > 0) {
  process.exit(1);
}

console.log('Page titles are rendered from layout props.');
