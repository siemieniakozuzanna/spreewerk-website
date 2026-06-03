import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Certifications() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <AnimatedSection className="lg:col-span-4">
            <SectionLabel>Qualität & Vertrauen</SectionLabel>
            <h2
              className="font-heading font-semibold text-dark"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.1 }}
            >
              Zertifizierter Sanierungsbetrieb.
              <br />
              Bestätigtes Vertrauen.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-8 flex items-center">
            <div className="w-full max-w-lg">
              <Image
                src="/assets/certs/certificates.jpg"
                alt="Zertifizierungen und Auszeichnungen — Spreewerk Sanierungsbetrieb Berlin"
                width={900}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export function CertificationsPartners() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <AnimatedSection className="lg:col-span-4">
            <h3
              className="font-heading font-semibold text-dark"
              style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', lineHeight: 1.1 }}
            >
              Starke Partner.
              <br />
              Verlässliche Standards.
            </h3>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { abbr: 'HWK Berlin', full: 'Handwerkskammer Berlin', label: 'Mitglied der' },
                { abbr: 'BG BAU', full: 'Berufsgenossenschaft der Bauwirtschaft', label: 'Mitglied der' },
                { abbr: 'SOKA-BAU', full: 'Sozialkassen des Baugewerbes', label: 'Mitglied der' },
              ].map((org) => (
                <div key={org.abbr} className="border-t border-concrete-grey pt-6">
                  <p className="font-heading font-bold text-dark text-[22px] mb-1">{org.abbr}</p>
                  <p className="text-dark/40 font-body text-[13px]">
                    {org.label} {org.full}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
