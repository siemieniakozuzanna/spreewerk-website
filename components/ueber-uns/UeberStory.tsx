import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { company } from '@/lib/company'

export function UeberStory() {
  return (
    <section className="bg-concrete-grey py-24 md:py-36">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <AnimatedSection className="lg:col-span-6">
            <SectionLabel>Unsere Geschichte</SectionLabel>
            <h2
              className="font-heading font-semibold text-dark mb-8"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.1 }}
            >
              Handwerk mit Haltung.
            </h2>
            <div className="space-y-5 text-dark/60 font-body text-[16px] leading-[1.75]">
              <p>
                Seit {company.foundingYear} sanieren wir Wohnungen, Häuser und Gewerberäume in
                Berlin und Brandenburg. Was uns antreibt: die Überzeugung, dass gute
                Handwerksarbeit keine Kompromisse kennt. Kein offenes Ende beim Preis. Keine
                leeren Versprechen beim Termin.
              </p>
              <p>
                Unser Team besteht aus erfahrenen Fachkräften, die Berlin kennen - seine Bauten,
                seinen Bestand, seine Anforderungen. Wir arbeiten in Altbauten wie in Neubauten,
                in kleinen Wohnungen wie in großen Gewerbeprojekten.
              </p>
              <p>
                Spreewerk bedeutet: ein Ansprechpartner, ein Festpreis, ein Termin. Und am Ende
                eine Immobilie, auf die Sie und wir stolz sein können.
              </p>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.15} className="lg:col-span-6">
            <div className="relative h-[400px] md:h-[520px] overflow-hidden">
              <Image
                src="/assets/team/housework1.png"
                alt="Spreewerk Team vor einem fertiggestellten Projekt"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
