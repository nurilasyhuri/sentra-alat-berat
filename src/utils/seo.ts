import { BUSINESS_INFO } from '../data/businessInfo';

export const CANONICAL_BASE = 'https://sentraalatberat.com';

export function ensureAbsoluteUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return `${CANONICAL_BASE}${cleanPath}`;
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${CANONICAL_BASE}/#business`,
    name: BUSINESS_INFO.name,
    url: `${CANONICAL_BASE}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${CANONICAL_BASE}/images/og/default-og.jpg`,
      width: 1200,
      height: 630,
    },
    image: [
      `${CANONICAL_BASE}/images/hero/hero-alat-berat.webp`,
      `${CANONICAL_BASE}/images/og/default-og.jpg`,
    ],
    description: BUSINESS_INFO.description,
    telephone: `+${BUSINESS_INFO.whatsappNumber}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: `${BUSINESS_INFO.address.district}, ${BUSINESS_INFO.address.city}`,
      addressRegion: BUSINESS_INFO.address.province,
      addressCountry: 'ID',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Sentra Alat Berat',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jual Alat Berat Baru & Bekas',
            url: `${CANONICAL_BASE}/jual-alat-berat/`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jual Spare Part Alat Berat',
            url: `${CANONICAL_BASE}/spare-part-alat-berat/`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Service & Perbaikan Alat Berat',
            url: `${CANONICAL_BASE}/service-alat-berat/`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sewa Alat Berat untuk Proyek',
            url: `${CANONICAL_BASE}/sewa-alat-berat/`,
          },
        },
      ],
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${CANONICAL_BASE}/#website`,
    url: `${CANONICAL_BASE}/`,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    publisher: {
      '@id': `${CANONICAL_BASE}/#business`,
    },
    inLanguage: 'id-ID',
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const entry: Record<string, any> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };
      if (item.url) {
        entry.item = ensureAbsoluteUrl(item.url);
      }
      return entry;
    }),
  };
}

export function getServiceSchema(service: {
  title: string;
  description: string;
  url: string;
  serviceType: string;
  image?: string;
}) {
  const serviceUrl = ensureAbsoluteUrl(service.url);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    url: serviceUrl,
    name: service.title,
    serviceType: service.serviceType,
    description: service.description,
    provider: {
      '@id': `${CANONICAL_BASE}/#business`,
    },
    ...(service.image ? { image: ensureAbsoluteUrl(service.image) } : {}),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  url: string;
  image?: string;
}) {
  const articleUrl = ensureAbsoluteUrl(article.url);
  const img = article.image || '/images/og/default-og.jpg';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    headline: article.title,
    description: article.description,
    image: ensureAbsoluteUrl(img),
    datePublished: article.publishDate,
    dateModified: article.updatedDate || article.publishDate,
    author: {
      '@type': 'Person',
      name: article.author || 'Tim Teknis Sentra Alat Berat',
      url: `${CANONICAL_BASE}/tentang-kami/`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${CANONICAL_BASE}/#business`,
      name: BUSINESS_INFO.name,
      url: `${CANONICAL_BASE}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${CANONICAL_BASE}/images/og/default-og.jpg`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path?: string; url?: string }>) {
  return getBreadcrumbSchema(
    items.map((item) => ({
      name: item.name,
      url: item.path || item.url,
    }))
  );
}

export function buildArticleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return getArticleSchema({
    title: opts.headline,
    description: opts.description,
    publishDate: opts.datePublished,
    updatedDate: opts.dateModified,
    author: opts.author || 'Tim Teknis Sentra Alat Berat',
    url: opts.path,
    image: opts.image,
  });
}

export function buildFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}
