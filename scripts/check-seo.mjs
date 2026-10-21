import { readdirSync, readFileSync, statSync } from 'node:fs';
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
if (files.length === 0) {
  console.error('ERROR: No HTML files found in dist/. Run build first.');
  process.exit(1);
}

let errors = 0;

for (const file of files) {
  const rel = relative(distDir, file);
  const html = readFileSync(file, 'utf8');

  // 1. Title check (55-70 chars, uses ' - ', no '|' or '—')
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch) {
    console.error(`[${rel}] Missing <title>`);
    errors++;
  } else {
    const title = titleMatch[1].trim();
    const len = title.length;
    if (len < 55 || len > 70) {
      console.error(`[${rel}] <title> length ${len} out of 55-70 range: "${title}"`);
      errors++;
    }
    if (!title.includes(' - ') || title.includes('|') || title.includes('—')) {
      console.error(`[${rel}] <title> separator violation: "${title}"`);
      errors++;
    }
  }

  // 2. Meta description check (120-155 chars, ends with '.')
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  if (!descMatch) {
    console.error(`[${rel}] Missing <meta name="description">`);
    errors++;
  } else {
    const desc = descMatch[1].trim();
    const len = desc.length;
    if (len < 120 || len > 155) {
      console.error(`[${rel}] <meta description> length ${len} out of 120-155 range: "${desc}"`);
      errors++;
    }
    if (!desc.endsWith('.')) {
      console.error(`[${rel}] <meta description> must end with period: "${desc}"`);
      errors++;
    }
  }

  // 3. Canonical URL check
  const canonMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canonMatch || !canonMatch[1].startsWith('https://sentraalatberat.com/')) {
    console.error(`[${rel}] Invalid or missing canonical URL`);
    errors++;
  }

  // 4. Author & Publisher meta
  if (!html.includes('name="author"') || !html.includes('name="publisher"')) {
    console.error(`[${rel}] Missing author or publisher meta tags`);
    errors++;
  }

  // 5. Single H1 check
  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`[${rel}] Expected exactly 1 <h1>, found ${h1Matches.length}`);
    errors++;
  }

  // 6. JSON-LD validity check (for non-404 pages)
  const ldMatches = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (rel !== '404.html' && ldMatches.length === 0) {
    console.error(`[${rel}] Missing JSON-LD schema`);
    errors++;
  }
  for (const m of ldMatches) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      console.error(`[${rel}] Invalid JSON-LD: ${e.message}`);
      errors++;
    }
  }

  // 7. Direct WhatsApp CTA presence check (at least 1 wa.me anchor on every page)
  const waLinks = html.match(/href="https:\/\/wa\.me\/6285183003060[^"]*"/gi) || [];
  if (waLinks.length === 0) {
    console.error(`[${rel}] Missing WhatsApp 085183003060 CTA button`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`SEO check failed with ${errors} error(s).`);
  process.exit(1);
}

console.log(`SEO check passed across ${files.length} HTML pages (0 errors).`);
