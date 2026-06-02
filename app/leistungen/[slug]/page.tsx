import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'
import { ServiceHero } from '@/components/service/ServiceHero'
import { ServiceScope } from '@/components/service/ServiceScope'
import { ServiceFAQ } from '@/components/service/ServiceFAQ'
import { ServiceProjects } from '@/components/service/ServiceProjects'
import { Process } from '@/components/sections/Process'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://spreewerk.de/leistungen/${service.slug}` },
  }
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const schemas = [
    serviceSchema(service),
    breadcrumbSchema([
      { name: 'Home', url: 'https://spreewerk.de' },
      { name: 'Leistungen', url: 'https://spreewerk.de/leistungen' },
      { name: service.shortTitle, url: `https://spreewerk.de/leistungen/${service.slug}` },
    ]),
    faqSchema(service.faq),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main>
        <ServiceHero service={service} />
        <ServiceScope service={service} />
        <Process />
        <ServiceProjects />
        <ServiceFAQ faq={service.faq} />
        <ContactCTA />
      </main>
    </>
  )
}
