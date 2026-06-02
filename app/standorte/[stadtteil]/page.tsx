import type { Metadata } from 'next'
import { stadtteile } from '@/lib/standorte'
import { services } from '@/lib/services'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema'
import Link from 'next/link'

interface Props {
  params: { stadtteil: string }
}

export function generateStaticParams() {
  return stadtteile.map((s) => ({ stadtteil: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stadtteil = stadtteile.find((s) => s.slug === params.stadtteil)
  if (!stadtteil) return { title: 'Standort' }
  return {
    title: stadtteil.metaTitle,
    description: stadtteil.metaDescription,
    alternates: { canonical: `https://spreewerk.de/standorte/${stadtteil.slug}` },
  }
}

export default function StadtteilPage({ params }: Props) {
  const stadtteil = stadtteile.find((s) => s.slug === params.stadtteil)

  const schemas = stadtteil
    ? [
        localBusinessSchema(),
        breadcrumbSchema([
          { name: 'Home', url: 'https://spreewerk.de' },
          { name: stadtteil.name, url: `https://spreewerk.de/standorte/${stadtteil.slug}` },
        ]),
      ]
    : []

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
        {/* Header */}
        <div className="bg-navy pt-36 pb-20">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
            <nav className="flex items-center gap-2 text-[12px] font-body text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">{stadtteil?.name ?? params.stadtteil}</span>
            </nav>
            <SectionLabel light>Sanierung in Berlin</SectionLabel>
            <h1
              className="font-heading font-bold text-white mt-2"
              style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', lineHeight: 0.97 }}
            >
              {stadtteil?.headline ?? `Sanierung in ${params.stadtteil}`}
            </h1>
          </div>
        </div>

        <section className="bg-warm-white py-20 md:py-32">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
            <AnimatedSection className="max-w-2xl mb-16">
              <p className="text-dark/60 font-body text-[18px] leading-[1.75]">
                {stadtteil?.description ??
                  `Spreewerk saniert professionell in ${params.stadtteil}. Kontaktieren Sie uns für ein kostenloses Vor-Ort-Gespräch.`}
              </p>
            </AnimatedSection>

            {/* Services list */}
            <AnimatedSection delay={0.1}>
              <h2 className="font-heading font-semibold text-dark text-[28px] mb-8">
                Unsere Leistungen in {stadtteil?.name ?? params.stadtteil}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/leistungen/${service.slug}`}
                    className="border border-concrete-grey p-6 hover:border-navy/30 transition-colors group"
                  >
                    <h3 className="font-heading font-semibold text-dark text-[17px] mb-2 group-hover:text-navy transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-dark/50 font-body text-[14px] line-clamp-2">
                      {service.intro.split('.')[0] + '.'}
                    </p>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ContactCTA />
      </main>
    </>
  )
}
