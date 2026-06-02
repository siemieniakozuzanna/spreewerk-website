import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Anfrage',
    description:
      'Sie schildern Ihr Vorhaben per Telefon oder Formular. Kein langer Papierkram.',
  },
  {
    number: '02',
    title: 'Vor-Ort-Termin',
    description:
      'Wir kommen zu Ihnen — kostenlos, unverbindlich, gründlich.',
  },
  {
    number: '03',
    title: 'Festpreisangebot',
    description:
      'Kein Stundensatz. Ein klares, verbindliches Angebot vor Baubeginn.',
  },
  {
    number: '04',
    title: 'Umsetzung',
    description:
      'Termingerecht, sauber, mit Gewährleistung. So wie es sein soll.',
  },
]

export function Process() {
  return (
    <section className="bg-concrete-grey py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection className="mb-16">
          <SectionLabel>Unsere Arbeitsweise</SectionLabel>
          <h2
            className="font-heading font-semibold text-dark"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05 }}
          >
            Von der Anfrage bis zur Übergabe.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-concrete-grey border-t border-dark/10 z-0" style={{ top: '2.5rem' }} />

          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative pt-8 pr-8 pb-8 border-t border-dark/10 lg:border-t-0">
                {/* Large background number */}
                <span
                  className="block font-heading font-bold text-dark/[0.06] leading-none select-none mb-4"
                  style={{ fontSize: 'clamp(72px, 9vw, 120px)' }}
                >
                  {step.number}
                </span>
                <h3 className="font-heading font-semibold text-dark text-[20px] mb-3">
                  {step.title}
                </h3>
                <p className="text-dark/55 font-body text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="mt-16 md:mt-20 flex justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-3 bg-blue text-white font-body font-semibold text-[16px] px-9 rounded-full min-h-[60px] w-full sm:w-auto hover:bg-blue/85 transition-colors duration-300"
          >
            Kostenlose Kostenschätzung
            <svg width="16" height="9" viewBox="0 0 16 9" fill="none" className="flex-shrink-0">
              <path d="M1 4.5H15M15 4.5L11 1M15 4.5L11 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </AnimatedSection>

      </div>
    </section>
  )
}
