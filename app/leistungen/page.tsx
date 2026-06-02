import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/services'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ContactCTA } from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Alle Sanierungsleistungen von Spreewerk in Berlin: Komplettsanierung, Bad & Küche, Wasserschäden, Innenausbau, Dachgeschoss, Technische Gewerke.',
}

export default function LeistungenPage() {
  return (
    <main>
      {/* Page header */}
      <div className="bg-navy pt-36 pb-20">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <SectionLabel light>Leistungen</SectionLabel>
          <h1
            className="font-heading font-bold text-white mt-2"
            style={{ fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 0.95 }}
          >
            Alles aus einer Hand.
          </h1>
        </div>
      </div>

      {/* Services grid */}
      <section className="bg-warm-white py-20 md:py-32">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.06}>
                <Link href={`/leistungen/${service.slug}`} className="group block">
                  <div className="relative h-64 overflow-hidden mb-5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h2 className="font-heading font-semibold text-dark text-[22px] mb-2 group-hover:text-navy transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-dark/50 font-body text-[15px] leading-relaxed line-clamp-2">
                    {service.intro.split('.')[0] + '.'}
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue text-[13px] font-medium font-body mt-3">
                    Mehr erfahren
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M1 4H13M13 4L10 1M13 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}
