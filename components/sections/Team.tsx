import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const teamMembers = [
  {
    image: '/assets/team/team-01.png',
    name: 'Name folgt',
    title: 'Technische Leitung',
  },
  {
    image: '/assets/team/team-02.png',
    name: 'Name folgt',
    title: 'Geschäftsführer & Projektmanagement',
  },
  {
    image: '/assets/team/team-03.png',
    name: 'Name folgt',
    title: 'Bauleitung & Ausführung',
  },
]

export function Team() {
  return (
    <section className="bg-warm-white py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection className="mb-14">
          <SectionLabel>Unser Team</SectionLabel>
          <h2
            className="font-heading font-semibold text-dark"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05 }}
          >
            Die Menschen hinter Spreewerk.
          </h2>
        </AnimatedSection>

        {/* Portrait grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.title} delay={i * 0.1}>
              <div>
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <Image
                    src={member.image}
                    alt={member.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% 22%' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-navy/40 font-body mb-1">
                  {member.title}
                </p>
                <h3 className="font-heading font-semibold text-dark text-[20px]">
                  {member.name}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA to about page */}
        <AnimatedSection delay={0.3} className="mt-14">
          <Link
            href="/ueber-uns"
            className="inline-flex items-center gap-3 text-navy font-medium font-body text-[14px] border-b border-navy/30 pb-1 hover:border-navy transition-colors duration-200"
          >
            Mehr über uns
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 4H13M13 4L10 1M13 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
