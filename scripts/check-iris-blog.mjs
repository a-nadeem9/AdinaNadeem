import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const postSlug = 'a-time-structured-look-at-the-m2k1-malaria-atlas-with-iris';
const title = 'A Time-Structured Look at the M2K1 Malaria Atlas with IRIS';
const postPath = join(process.cwd(), 'dist', 'blog', postSlug, 'index.html');
const indexPath = join(process.cwd(), 'dist', 'blog', 'index.html');

const indexHtml = await readFile(indexPath, 'utf8');
if (!indexHtml.includes(title) || !indexHtml.includes(`/blog/${postSlug}`)) {
  throw new Error('Blog index does not list the IRIS M2K1 post.');
}

const postHtml = await readFile(postPath, 'utf8');
const requiredPostSnippets = [
  title,
  'IRIS made the temporal structure of this atlas easier to see',
  '/blog-assets/m2k1-iris/iris_vs_umap_m2k1.html',
  '/blog-assets/m2k1-iris/blog_m2k1_asexual_iris_annotated_reader_guide_v2.png',
  '/blog-assets/m2k1-iris/blog_m2k1_asexual_iris_annotated_reader_guide.png',
];

for (const snippet of requiredPostSnippets) {
  if (!postHtml.includes(snippet)) {
    throw new Error(`Post page is missing expected content: ${snippet}`);
  }
}

const requiredAssets = [
  'dist/blog-assets/m2k1-iris/iris_vs_umap_m2k1.html',
  'dist/blog-assets/m2k1-iris/assets/iris_vs_umap_m2k1_data.js',
  'dist/blog-assets/m2k1-iris/blog_m2k1_asexual_iris_annotated_reader_guide_v2.png',
  'dist/blog-assets/m2k1-iris/blog_m2k1_asexual_iris_annotated_reader_guide.png',
];

for (const asset of requiredAssets) {
  await access(join(process.cwd(), asset));
}

console.log('IRIS M2K1 blog post and assets are present in the built site.');
