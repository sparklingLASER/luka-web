export default function sitemap() {
  const baseUrl = 'https://www.lukarunninng.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
