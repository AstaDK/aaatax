import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://www.aaataxconsulting.com/',
      lastModified: new Date()
    },
    {
      url: 'https://www.aaataxconsulting.com/blog',
      lastModified: new Date()
    }
  ];
}
