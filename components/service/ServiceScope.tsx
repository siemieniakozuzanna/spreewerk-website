import type { Service } from '@/lib/services'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function ServiceScope({ service }: { service: Service }) {
  return (
    <section className="bg-warm-white py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Intro */}
          <AnimatedSection className="lg:col-span-5">
            <h2
              className="font-heading font-bold text-dark"
              style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.0, whiteSpace: 'pre-line' }}
            >
              {service.headline}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="lg:col-span-7">
            <p className="text-dark/60 font-body text-[17px] leading-[1.75]">{service.intro}</p>
          </AnimatedSection>
        </div>

        {/* Scope */}
        <AnimatedSection>
          <SectionLabel>Leistungsumfang</SectionLabel>
        </AnimatedSection>
        <div className="divide-y divide-concrete-grey mt-4">
          {service.scope.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.06}>
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <span className="md:col-span-4 font-heading font-semibold text-dark text-[18px]">
                  {item.title}
                </span>
                <p className="md:col-span-8 text-dark/55 font-body text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
