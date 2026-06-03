import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const expertise = [
  'Stuckrestauration nach historischem Vorbild',
  'Fischgrätparkett, Massivdielen & Kassettentüren',
  'Denkmalgerechte Ausführung — Originalsubstanz erhalten',
  'Moderne Technik unsichtbar integriert',
]

export function AltbauExpertise() {
  return (
    <section className="relative overflow-hidden min-h-[540px] md:min-h-[660px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/team/altbauwork1.png"
          alt="Altbausanierung Berlin — Spreewerk Sanierung bei der Restaurierung historischer Berliner Bausubstanz"
          fill
          className="object-cover object-left md:object-center"
          sizes="100vw"
        />
        {/* Mobile: heavy overlay — image is bright plaster/windows throughout */}
        <div className="absolute inset-0 bg-navy/[0.88] md:bg-navy/[0.78]" />
      </div>

      {/* Content */}
      <div className="relative max-w-site mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          <AnimatedSection>
            <SectionLabel light>Berliner Altbau</SectionLabel>
            <h2
              className="font-heading font-bold text-white mb-7 md:mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 0.97 }}
            >
              Altbausanierung Berlin.
              <br />
              Unser Zuhause.
            </h2>
            <p className="text-white/80 md:text-white/60 font-body text-[15px] md:text-[18px] leading-[1.8] mb-8 md:mb-10 max-w-lg">
              Stuckgesimse, Fischgrätparkett, Kassettenfenster, Gründerzeitfassaden — bei jeder Altbausanierung in Berlin verstehen wir historische Bausubstanz nicht als Einschränkung, sondern als das eigentliche Qualitätsmerkmal.
            </p>

            {/* Expertise points */}
            <div className="space-y-5 md:space-y-4">
              {expertise.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-0.5 bg-blue flex-shrink-0 self-stretch min-h-[20px]" />
                  <p className="text-white/90 md:text-white/80 font-body text-[14px] md:text-[15px]">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
