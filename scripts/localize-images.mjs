// Localize + compress all external (Readdy) images into public/images and
// rewrite source references. Photos from the search-image API are re-encoded
// to WebP; brand assets (logos/icons, already compressed) are copied as-is.
//
// Run:  node scripts/localize-images.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");
const OUT = join(ROOT, "public", "images");
mkdirSync(OUT, { recursive: true });

const HOST_RE =
  /https?:\/\/[^"'`)\s]*(?:readdy\.ai\/api\/search-image|storage\.helloreaddy\.io)[^"'`)\s]*/g;

// --- collect source files ---
function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(tsx?|ts|css)$/.test(name)) out.push(p);
  }
  return out;
}
const files = walk(SRC);

// --- collect unique URLs ---
const urls = new Set();
for (const f of files) {
  const txt = readFileSync(f, "utf8");
  for (const m of txt.matchAll(HOST_RE)) urls.add(m[0]);
}
console.log(`Found ${urls.size} unique external image URLs`);

function localName(url) {
  const u = new URL(url);
  if (u.hostname.includes("readdy.ai")) {
    const seq = u.searchParams.get("seq");
    return `${(seq || "img-" + Math.abs(hash(url))).replace(/[^a-z0-9_-]/gi, "-")}.webp`;
  }
  let base = u.pathname.split("/").pop();
  base = base.replace(/^[0-9a-f]{8}-[0-9a-f-]{27,}_/i, "").replace(/^compressed_/, "");
  return base;
}
function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }

const map = {};        // originalUrl -> /images/name
const dims = {};        // /images/name -> {w,h}
let photoOrig = 0, photoNew = 0, ok = 0, fail = 0;

for (const url of urls) {
  const name = localName(url);
  const dest = join(OUT, name);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());

    if (url.includes("readdy.ai/api/search-image")) {
      // Heavy photo -> compress to WebP, cap width, never upscale
      const reqW = parseInt(new URL(url).searchParams.get("width") || "0", 10) || 1920;
      const img = sharp(buf).resize({ width: Math.min(reqW, 1920), withoutEnlargement: true }).webp({ quality: 76 });
      const outBuf = await img.toBuffer();
      writeFileSync(dest, outBuf);
      const meta = await sharp(outBuf).metadata();
      dims["/images/" + name] = { w: meta.width, h: meta.height };
      photoOrig += buf.length; photoNew += outBuf.length;
    } else if (extname(name).toLowerCase() === ".svg") {
      writeFileSync(dest, buf);                 // vector — copy as-is
    } else {
      writeFileSync(dest, buf);                 // already-compressed brand webp — copy as-is
      try { const meta = await sharp(buf).metadata(); dims["/images/" + name] = { w: meta.width, h: meta.height }; } catch {}
    }
    map[url] = "/images/" + name;
    ok++;
  } catch (e) {
    console.warn(`  ! FAILED ${name}: ${e.message} (leaving original ref)`);
    fail++;
  }
}

// --- rewrite references (only for successfully localized urls) ---
let filesChanged = 0;
for (const f of files) {
  let txt = readFileSync(f, "utf8");
  let changed = false;
  for (const [url, local] of Object.entries(map)) {
    if (txt.includes(url)) { txt = txt.split(url).join(local); changed = true; }
  }
  if (changed) { writeFileSync(f, txt); filesChanged++; }
}

writeFileSync(join(OUT, "_dimensions.json"), JSON.stringify(dims, null, 2));
console.log(`\nLocalized ${ok} images (${fail} failed), rewrote ${filesChanged} files`);
console.log(`Photos: ${(photoOrig / 1024 / 1024).toFixed(2)}MB -> ${(photoNew / 1024 / 1024).toFixed(2)}MB WebP`);
console.log(`Dimensions written to public/images/_dimensions.json`);
