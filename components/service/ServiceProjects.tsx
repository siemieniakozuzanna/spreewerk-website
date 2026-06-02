import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function ServiceProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="bg-warm-white py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection className="mb-10">
          <SectionLabel>Referenzen</SectionLabel>
          <h2 className="font-heading font-semibold text-dark" style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.1 }}>
            Unsere Arbeit spricht für sich.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((project, i) => {
            const href = project.hasDetailPage ? `/projekte/${project.slug}` : '/projekte'
            return (
              <AnimatedSection key={project.slug} delay={i * 0.1}>
                <Link href={href} className="block group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="pt-4">
                    <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-navy/40 font-body">{project.type}</p>
                    <h3 className="font-heading font-semibold text-dark text-[16px] mt-1">{project.title}</h3>
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
