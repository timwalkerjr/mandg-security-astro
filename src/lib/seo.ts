// Central site + NAP constants and JSON-LD builders.
// Single source of truth for canonical URLs and structured data so every
// route ships correct, consistent schema in its served HTML.

export const SITE = {
  name: "M&G Security",
  url: "https://mandgsecurity.netlify.app",
  legalName: "M&G Security",
  description:
    "M&G Security provides professional security services for events, construction sites, corporate properties and more across Berks County, PA. Founded in 1997 by former law enforcement officers.",
  telephone: "+1-484-824-8631",
  telephoneDisplay: "(484) 824-8631",
  founded: "1997",
  areaServed: "Berks County, Pennsylvania",
  address: {
    poBox: "P.O. Box 6255",
    locality: "Wyomissing",
    region: "PA",
    postalCode: "19610",
    country: "US",
  },
  sameAs: ["https://www.facebook.com/profile.php?id=100063783338150"],
  logo: "https://mandgsecurity.netlify.app/images/mg-icon_gold-512.webp",
} as const;

// Absolute URL for a route path (leading-slash path in, absolute URL out).
export function abs(path: string): string {
  if (path === "/") return SITE.url + "/";
  return SITE.url + (path.startsWith("/") ? path : `/${path}`);
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.poBox,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

// LocalBusiness / SecurityService node describing the company. Used on the
// home page and, with a service name, as the provider on service pages.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecurityService"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url + "/",
    telephone: SITE.telephone,
    foundingDate: SITE.founded,
    address: postalAddress,
    areaServed: { "@type": "AdministrativeArea", name: SITE.areaServed },
    logo: SITE.logo,
    image: SITE.logo,
    sameAs: SITE.sameAs,
  };
}

// Per-service Service schema, provided by the LocalBusiness above.
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: abs(opts.path),
    areaServed: { "@type": "AdministrativeArea", name: SITE.areaServed },
    provider: {
      "@type": ["LocalBusiness", "SecurityService"],
      name: SITE.name,
      telephone: SITE.telephone,
      address: postalAddress,
      url: SITE.url + "/",
    },
  };
}

// BreadcrumbList for service detail pages.
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

// Article schema for the blog/news collection (twc-publish target).
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  pubDate: Date;
  updatedDate?: Date;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: abs(opts.path),
    mainEntityOfPage: abs(opts.path),
    datePublished: opts.pubDate.toISOString(),
    dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
    author: { "@type": "Organization", name: opts.author || SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    ...(opts.image ? { image: abs(opts.image) } : {}),
  };
}
