import type { Metadata } from 'next'
import { company } from '@/lib/company'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BlueprintLines } from '@/components/ui/BlueprintLines'
import { SWWatermark } from '@/components/ui/SWWatermark'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ContactForm } from '@/components/ui/ContactForm'
import { localBusinessSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Jetzt Kontakt aufnehmen mit Spreewerk Sanierung Berlin. Kostenloser Vor-Ort-Termin in ganz Berlin und Brandenburg.',
}

export default function KontaktPage() {
  const schema = localBusinessSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        {/* Header */}
        <div className="bg-navy pt-36 pb-20">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
            <SectionLabel light>Kontakt</SectionLabel>
            <h1
              className="font-heading font-bold text-white mt-2"
              style={{ fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 0.95 }}
            >
              Sprechen wir.
            </h1>
          </div>
        </div>

        {/* Contact section */}
        <section className="bg-navy relative overflow-hidden py-24 md:py-32">
          <BlueprintLines />
          <SWWatermark />
          <div className="relative max-w-site mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
              {/* Info */}
              <AnimatedSection className="lg:col-span-5">
                <div className="space-y-8">
                  <div>
                    <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">Telefon</p>
                    <a
                      href={`tel:${company.phone}`}
                      className="font-heading font-bold text-white hover:text-white/70 transition-colors"
                      style={{ fontSize: 'clamp(22px, 2.5vw, 34px)' }}
                    >
                      {company.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">E-Mail</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-white font-body text-[18px] hover:text-white/70 transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">Adresse</p>
                    <p className="text-white/60 font-body text-[16px] leading-relaxed">
                      {company.address.street}<br />
                      {company.address.zip} {company.address.city}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/40 font-body text-[14px] leading-relaxed">
                      Kostenloser Vor-Ort-Termin in ganz Berlin & Brandenburg.
                      Wir kommen zu Ihnen - unverbindlich und ohne Beratungskosten.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Form */}
              <AnimatedSection delay={0.15} className="lg:col-span-7">
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
