import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://www.aaataxconsulting.com',
    sitemap: 'https://www.aaataxconsulting.com/sitemap.xml',
  };
}
