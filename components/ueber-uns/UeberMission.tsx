import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function UeberMission() {
  return (
    <section className="bg-warm-white py-24 md:py-36">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection>
          <p
            className="font-heading font-semibold text-dark max-w-4xl"
            style={{ fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.25 }}
          >
            Spreewerk wurde gegründet, weil Sanierung in Berlin besser sein kann — präziser,
            transparenter, handwerklich anspruchsvoller. Wir bringen den Anspruch eines
            Architekturbüros in die Ausführung eines Handwerksbetriebs.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
