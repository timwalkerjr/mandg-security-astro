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

## Status

Live and deployed on Netlify at **https://astro-mandgsecurity.netlify.app**
(auto-deploys from `main`). All 21 routes render real pre-rendered HTML with
per-route SEO + JSON-LD. GTmetrix (Aug 2026): grade **A**, Performance 99,
Structure 100, LCP ~0.7s, CLS 0, ~283&nbsp;KB.

Done:
- Static Astro port, 1:1 with the source SPA; islands-only client JS.
- Canonical / `site` / OG / sitemap set to `astro-mandgsecurity.netlify.app`
  (the prior `mandgsecurity.netlify.app` SPA is being retired after review —
  do **not** canonical back to it).
- Article template matches the service-detail layout; articles collection
  wired for twc-publish.
- Home images optimized via `astro:assets` (responsive hero `srcset`,
  lazy-loaded below-the-fold); Navbar hydrates `client:idle`.

### Outstanding before launch

- [ ] Replace the `info@theiroldurl.com` placeholder email (footer +
      `src/pages/contact-us.astro`) with the client's real address.
