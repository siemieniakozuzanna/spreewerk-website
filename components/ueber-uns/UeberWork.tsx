import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function UeberWork() {
  return (
    <section className="bg-warm-white py-24 md:py-36">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection className="mb-4">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-navy/30 font-body">
            Berliner Altbau — In Arbeit
          </span>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative w-full h-[400px] md:h-[560px] overflow-hidden">
            <Image
              src="/assets/team/altbauwork2.png"
              alt="Spreewerk bei der Altbausanierung – Gründerzeithaus Berlin"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-6 max-w-xl">
          <p className="text-dark/50 font-body text-[15px] leading-relaxed">
            Unsere Arbeit spielt sich hauptsächlich in Berlins charaktervollsten Gebäuden ab —
            Gründerzeithäusern mit Stuck, Kassettenfenstern und Fischgrätparkett.
            Handwerk, das Geschichte respektiert.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
