'use client'

import Image from 'next/image'
import { company } from '@/lib/company'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BlueprintLines } from '@/components/ui/BlueprintLines'
import { SWWatermark } from '@/components/ui/SWWatermark'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function ContactCTA() {
  return (
    <section id="kontakt" className="bg-navy relative overflow-hidden">
      <BlueprintLines />
      <SWWatermark />

      {/* Team photo - trust anchor before the CTA */}
      <AnimatedSection>
        <div className="relative w-full overflow-hidden" style={{ height: 'clamp(300px, 38vw, 520px)' }}>
          <Image
            src="/assets/team/ourteam.png"
            alt="Ihr Team für Altbausanierung und Wohnungssanierung in Berlin - Spreewerk Sanierung"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/70" />
          <div className="absolute bottom-8 left-6 md:left-12 lg:left-20">
            <p className="text-white/70 font-body text-[13px] tracking-[0.16em] uppercase font-medium">
              Das Team hinter Ihrem Projekt
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="relative max-w-site mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <AnimatedSection className="lg:col-span-6">
            <SectionLabel light>Kontakt</SectionLabel>
            <h2
              className="font-heading font-bold text-white mb-8"
              style={{ fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 0.97 }}
            >
              Bereit für Ihre
              <br />
              Sanierung?
            </h2>
            <div className="space-y-3">
              <a
                href={`tel:${company.phone}`}
                className="block font-heading font-bold text-white hover:text-white/70 transition-colors"
                style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="block text-white/50 font-body text-[16px] hover:text-white transition-colors"
              >
                {company.email}
              </a>
            </div>
            <p className="text-white/30 font-body text-[14px] mt-8">
              Kostenloser Vor-Ort-Termin in ganz Berlin & Brandenburg
            </p>
          </AnimatedSection>

          {/* Right - form */}
          <AnimatedSection delay={0.15} className="lg:col-span-6">
            <form className="space-y-4" action="#" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 text-white font-body text-[15px] px-4 py-3 focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full bg-white/5 border border-white/10 text-white font-body text-[15px] px-4 py-3 focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                  placeholder="+49"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 text-white font-body text-[15px] px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none placeholder:text-white/20"
                  placeholder="Beschreiben Sie kurz Ihr Vorhaben…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue text-white font-body font-medium text-[14px] tracking-wide py-4 hover:bg-blue/90 transition-colors duration-200"
              >
                Anfrage senden
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
