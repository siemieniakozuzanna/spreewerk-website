import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const clientTypes = [
  {
    title: 'Privatpersonen',
    description: 'Eigentümer und Mieter, die renovieren oder sanieren möchten.',
  },
  {
    title: 'Vermieter & Eigentümer',
    description: 'Werterhalt und Aufwertung Ihres Immobilienbestands.',
  },
  {
    title: 'WEG & Hausverwaltungen',
    description: 'Gemeinschafts- und Sondereigentum aus einer Hand.',
  },
  {
    title: 'Investoren & Entwickler',
    description: 'Schnelle Umsetzung, klare Kalkulation, geprüfte Qualität.',
  },
  {
    title: 'Gewerbe & Unternehmen',
    description: 'Umbau und Sanierung von Gewerbeflächen in Berlin.',
  },
]

export function FuerWen() {
  return (
    <section className="bg-warm-white py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - editorial statement */}
          <AnimatedSection className="lg:col-span-4 flex flex-col justify-start lg:justify-center">
            <SectionLabel>Für wen wir arbeiten</SectionLabel>
            <p
              className="font-heading font-semibold text-dark leading-[1.1]"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
            >
              Wir arbeiten für Menschen, die Qualität verlangen und Vertrauen schätzen.
            </p>
          </AnimatedSection>

          {/* Right - typographic list */}
          <div className="lg:col-span-8">
            {clientTypes.map((client, i) => (
              <AnimatedSection key={client.title} delay={i * 0.07}>
                <div className="border-t border-concrete-grey py-6 flex items-start justify-between gap-8 group">
                  <div>
                    <h3 className="font-heading font-semibold text-dark text-[19px] mb-1">
                      {client.title}
                    </h3>
                    <p className="text-dark/50 font-body text-[15px]">
                      {client.description}
                    </p>
                  </div>
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    className="text-dark/20 flex-shrink-0 mt-1 group-hover:text-navy transition-colors duration-200"
                  >
                    <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </AnimatedSection>
            ))}
            <div className="border-t border-concrete-grey" />
          </div>
        </div>
      </div>
    </section>
  )
}
