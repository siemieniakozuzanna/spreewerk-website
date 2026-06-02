import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/services'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Services() {
  return (
    <section className="bg-warm-white py-24 md:py-36">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <SectionLabel>Leistungen</SectionLabel>
          <h2 className="font-heading font-semibold text-dark" style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05 }}>
            Was wir für Sie tun.
          </h2>
        </AnimatedSection>

        {/* Service rows */}
        <div className="divide-y divide-concrete-grey">
          {services.map((service, i) => {
            const isEven = i % 2 === 0
            return (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="group flex flex-col md:flex-row items-stretch gap-0 hover:bg-concrete-grey/30 transition-colors duration-300 py-0"
                >
                  {/* Text side */}
                  <div
                    className={`flex-1 py-10 md:py-12 flex items-center gap-8 ${
                      isEven ? 'md:pr-16 order-2 md:order-1' : 'md:pl-16 order-2 md:order-2'
                    }`}
                  >
                    {/* Number */}
                    <span
                      className="font-heading font-bold text-concrete-grey flex-shrink-0 leading-none select-none transition-colors duration-300 group-hover:text-navy/10"
                      style={{ fontSize: 'clamp(80px, 10vw, 140px)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-dark text-[22px] md:text-[26px] mb-2 group-hover:text-navy transition-colors duration-300">
                        {service.shortTitle}
                      </h3>
                      <p className="text-dark/50 font-body text-[15px] leading-relaxed max-w-sm line-clamp-2">
                        {service.intro.split('.')[0] + '.'}
                      </p>
                      <span className="inline-flex items-center gap-2 text-blue text-[13px] font-medium font-body mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Mehr erfahren
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                          <path d="M1 4H13M13 4L10 1M13 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Image side */}
                  <div
                    className={`relative w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden ${
                      isEven ? 'order-1 md:order-2' : 'order-1 md:order-1'
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
