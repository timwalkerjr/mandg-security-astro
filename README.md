# M&G Security — Astro (static)

Static [Astro](https://astro.build) port of the optimized SPA
[`timwalkerjr/mandg-security`](https://github.com/timwalkerjr/mandg-security).
Real, pre-rendered HTML per route — content in the served HTML, per-route
`<title>` / meta / canonical, and JSON-LD — so the site is readable by
JS-less AI crawlers (GPTBot / ClaudeBot / PerplexityBot), not just Googlebot.

## Stack

- Astro `output: 'static'` — every route builds to a real `.html` file.
- `@astrojs/react` — the SPA's `.tsx` for the few interactive **islands** only.
- `@astrojs/tailwind` — same `tailwind.config.ts` + `oklch` design tokens.
- Self-hosted `@fontsource` fonts + subset Remix Icon `.woff2`. No third-party CDN.

### Islands (the only client JS; everything else is static)

| Island | Directive | Why |
| --- | --- | --- |
| `Navbar` | `client:load` | scroll-state styling + mobile menu |
| `ContactForm` | `client:load` | Formspree submit (contact) |
| `EmploymentForm` | `client:load` | Formspree submit (employment) |
| `GalleryLightbox` | `client:load` | full-screen lightbox over the static gallery grid |

The Partners marquee is CSS-only (no JS). Scroll-reveal wrappers were dropped
so all content is visible in the served HTML.

## Routes

`/`, `/security-services` (+ 9 service detail pages via `[slug]`), `/about-us`,
`/photo-gallery`, `/contact-us`, `/employment-opportunities`, `/articles`
(+ `/articles/[slug]`), `/style-guide`, `/about-this-site`, `/sitemap`, `/404`,
plus `sitemap-index.xml` and `robots.txt`.

## Articles (twc-publish target)

`src/content/articles/` is a content collection (`src/content/config.ts`).
twc-publish drips MD/MDX files here; each renders through `BlogLayout` with
`Article` JSON-LD (app-owned override supported via the `jsonLd` frontmatter
field). New posts appear on `/articles` and in the XML sitemap automatically.

## Develop / build

```bash
npm install
npm run dev      # local dev
npm run build    # -> dist/
npm run preview  # serve dist/
```

## Deploy

Netlify from this repo — `netlify.toml` sets `command = "npm run build"` and
`publish = "dist"` (Astro default), with **no** SPA catch-all redirect.

## Before publish

- Replace the `info@theiroldurl.com` placeholder email (footer + contact page).
- Point `site` in `astro.config.mjs` + the canonical/OG base in `src/lib/seo.ts`
  at the final production domain.
