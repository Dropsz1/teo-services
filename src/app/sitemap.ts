import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://teo-services.ro'; // URL-ul final

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Adaugă aici alte rute când creezi pagini de portofoliu individuale sau blog
  ];
}
