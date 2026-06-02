import { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { projects } from '@/lib/projects'
import { stadtteile } from '@/lib/standorte'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://spreewerk.de'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/leistungen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/projekte`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/ueber-uns`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...services.map((s) => ({
      url: `${base}/leistungen/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...projects.map((p) => ({
      url: `${base}/projekte/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...stadtteile.map((s) => ({
      url: `${base}/standorte/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
