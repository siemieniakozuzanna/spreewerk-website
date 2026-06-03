import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'

const staticPairs = [
  {
    before: '/assets/projects/p02-before.png',
    after: '/assets/projects/p02-after.png',
    label: 'Küchensanierung',
  },
  {
    before: '/assets/projects/p04-before.png',
    after: '/assets/projects/p04-after.png',
    label: 'Gründerzeit Restaurierung',
  },
]

export function BeforeAfterShowcase() {
  return (
    <section className="bg-concrete-grey py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection className="mb-14">
          <SectionLabel>Vor & Nach</SectionLabel>
          <h2
            className="font-heading font-semibold text-dark"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05 }}
          >
            Vorher. Nachher.
            <br />
            Dazwischen liegt Handwerk.
          </h2>
        </AnimatedSection>

        {/* Premium slider — Project 07 */}
        <AnimatedSection className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-navy/40 font-body">
              Wohnungssanierung Berlin
            </span>
            <span className="text-[11px] font-medium text-navy/30 font-body hidden md:block">
              Ziehen zum Vergleichen
            </span>
          </div>
          <BeforeAfterSlider
            beforeSrc="/assets/projects/p07-before.png"
            afterSrc="/assets/projects/p07-after.png"
            beforeAlt="Wohnungssanierung Berlin — Zustand vor der Sanierung"
            afterAlt="Wohnungssanierung Berlin — Ergebnis nach hochwertiger Sanierung durch Spreewerk"
          />
        </AnimatedSection>

        {/* Static pairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {staticPairs.map((pair, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-navy/40 font-body mb-3">
                {pair.label}
              </p>
              <div className="grid grid-cols-2 gap-1">
                <div>
                  <span className="block text-[10px] tracking-[0.18em] uppercase text-navy/30 font-body mb-1">VOR</span>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={pair.before}
                      alt={`${pair.label} Berlin — vor der Sanierung`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.18em] uppercase text-navy/30 font-body mb-1">NACH</span>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={pair.after}
                      alt={`${pair.label} Berlin — nach der Sanierung durch Spreewerk`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
