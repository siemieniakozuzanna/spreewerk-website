import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function FeaturedProject() {
  return (
    <section className="bg-warm-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">

        <AnimatedSection className="mb-14">
          <SectionLabel>Referenzprojekt</SectionLabel>
        </AnimatedSection>

        {/* Main editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

          {/* Image — 7 cols, taller */}
          <AnimatedSection className="lg:col-span-7">
            <div className="relative h-[400px] md:h-[560px] lg:h-[640px] overflow-hidden">
              <Image
                src="/assets/projects/p04-after.png"
                alt="Restaurierte Berliner Gründerzeitwohnung — Komplettsanierung"
                fill
                className="object-cover"
                style={{ objectPosition: '30% center' }}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </AnimatedSection>

          {/* Details — 5 cols */}
          <AnimatedSection delay={0.18} className="lg:col-span-5 lg:pl-16 xl:pl-20 flex flex-col justify-center pt-10 lg:pt-0">
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-navy/35 font-body mb-6">
              Komplettsanierung · Berlin · 2023
            </span>

            <h2
              className="font-heading font-bold text-dark mb-7"
              style={{ fontSize: 'clamp(34px, 3.8vw, 52px)', lineHeight: '0.97', letterSpacing: '-0.02em' }}
            >
              Gründerzeit-
              <br />
              wohnung
              <br />
              Berlin
            </h2>

            <p className="text-dark/55 font-body text-[16px] leading-[1.8] mb-10 max-w-sm">
              Vollständige Restaurierung einer Berliner Gründerzeitwohnung mit originalem Stuckornament,
              Fischgrätparkett und Kassettendecke. Alle technischen Gewerke erneuert,
              historische Substanz vollständig erhalten.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 mb-10 pt-7 border-t border-concrete-grey">
              {[
                { label: 'Typ', value: 'Komplettsanierung' },
                { label: 'Ort', value: 'Berlin' },
                { label: 'Jahr', value: '2023' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-navy/25 font-body mb-1.5">{item.label}</p>
                  <p className="text-dark font-body text-[14px] font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="/projekte"
              className="inline-flex items-center gap-3 text-navy font-medium font-body text-[13px] tracking-wide border-b border-navy/25 pb-1 hover:border-navy transition-colors duration-200 self-start"
            >
              Alle Projekte ansehen
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M1 4H13M13 4L10 1M13 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        {/* Transformation thumbnail strip — hidden on mobile to prevent overflow */}
        <AnimatedSection delay={0.25} className="mt-10 hidden sm:flex items-center gap-5">
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-navy/25 font-body flex-shrink-0">Vorher</span>
          <div className="relative w-36 overflow-hidden flex-shrink-0" style={{ height: '88px' }}>
            <Image
              src="/assets/projects/p04-before.png"
              alt="Gründerzeitwohnung vor der Sanierung"
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className="text-navy/20 flex-shrink-0">
            <path d="M1 5H27M27 5L23 1.5M27 5L23 8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="relative w-36 overflow-hidden flex-shrink-0" style={{ height: '88px' }}>
            <Image
              src="/assets/projects/p04-after.png"
              alt="Gründerzeitwohnung nach der Sanierung"
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-navy/25 font-body flex-shrink-0">Nachher</span>
        </AnimatedSection>

      </div>
    </section>
  )
}
