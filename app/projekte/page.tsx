import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ContactCTA } from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Projekte',
  description:
    'Referenzprojekte von Spreewerk Sanierung Berlin. Altbauwohnungen, Küchen, Bäder und mehr — aus ganz Berlin.',
}

export default function ProjektePage() {
  return (
    <main>
      {/* Header */}
      <div className="bg-navy pt-36 pb-20">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <SectionLabel light>Projekte</SectionLabel>
          <h1
            className="font-heading font-bold text-white mt-2"
            style={{ fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 0.95 }}
          >
            Ausgewählte Arbeiten.
          </h1>
        </div>
      </div>

      {/* Full gallery */}
      <section className="bg-warm-white py-20 md:py-32">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => {
              const href = project.hasDetailPage ? `/projekte/${project.slug}` : '#'
              return (
                <AnimatedSection key={project.slug} delay={i * 0.05}>
                  <Link href={href} className={`block group ${!project.hasDetailPage ? 'cursor-default' : ''}`}>
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {project.hasDetailPage && (
                        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-400" />
                      )}
                    </div>
                    <div className="pt-4">
                      <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-navy/40 font-body">
                        {project.type} · {project.year}
                      </p>
                      <h2 className="font-heading font-semibold text-dark text-[18px] mt-1">
                        {project.title}
                      </h2>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}
