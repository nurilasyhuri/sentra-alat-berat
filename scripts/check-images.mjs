import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const distDir = join(process.cwd(), 'dist');

function walkHtml(dir, list = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walkHtml(full, list);
    else if (name.endsWith('.html')) list.push(full);
  }
  return list;
}

const files = walkHtml(distDir);
let errors = 0;
let imgCount = 0;

for (const file of files) {
  const rel = relative(distDir, file);
  const html = readFileSync(file, 'utf8');
  const imgTags = [...html.matchAll(/<img\b[^>]*>/gi)];

  for (const [tag] of imgTags) {
    imgCount++;
    const srcMatch = tag.match(/\bsrc="([^"]+)"/i);
    const altMatch = tag.match(/\balt="([^"]*)"/i);

    if (!srcMatch) {
      console.error(`[${rel}] <img> missing src: ${tag}`);
      errors++;
      continue;
    }

    const src = srcMatch[1];
    if (!src.endsWith('.webp')) {
      console.error(`[${rel}] <img> src must be .webp, got: ${src}`);
      errors++;
    }

    const diskPath = join(distDir, src.replace(/^\//, ''));
    if (!existsSync(diskPath)) {
      console.error(`[${rel}] <img> file does not exist in dist: ${src}`);
      errors++;
    }

    if (!altMatch) {
      console.error(`[${rel}] <img> missing alt attribute: ${src}`);
      errors++;
    } else {
      const alt = altMatch[1].trim();
      if (alt.length < 10 || alt.length > 125) {
        console.error(`[${rel}] <img> alt length (${alt.length}) out of 10-125 range: "${alt}"`);
        errors++;
      }
    }
  }
}

if (errors > 0) {
  console.error(`Image check failed with ${errors} error(s).`);
  process.exit(1);
}

console.log(`Image check passed: ${imgCount} <img> tags across ${files.length} pages verified (.webp + ALT 10-125 chars).`);
