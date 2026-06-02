import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Projekt' }
  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

  return (
    <main>
      <div className="bg-navy pt-36 pb-20">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-[12px] font-body text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projekte" className="hover:text-white/70 transition-colors">Projekte</Link>
            {project && (
              <>
                <span>/</span>
                <span className="text-white/60">{project.title}</span>
              </>
            )}
          </nav>
          <SectionLabel light>Projekt</SectionLabel>
          <h1
            className="font-heading font-bold text-white mt-2"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 0.97 }}
          >
            {project ? project.title : 'Projekt'}
          </h1>
        </div>
      </div>

      <section className="bg-warm-white py-20 md:py-32">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          {project ? (
            <>
              <AnimatedSection className="mb-10">
                <div className="flex flex-wrap gap-6 text-[13px] font-body text-dark/50">
                  <span><strong className="text-dark">Typ:</strong> {project.type}</span>
                  <span><strong className="text-dark">Jahr:</strong> {project.year}</span>
                  <span><strong className="text-dark">Ort:</strong> {project.location}</span>
                </div>
                <p className="text-dark/60 font-body text-[17px] leading-relaxed mt-6 max-w-2xl">
                  {project.description}
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((src, i) => (
                  <AnimatedSection key={src} delay={i * 0.1}>
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={src}
                        alt={`${project.title} – Bild ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </>
          ) : (
            <AnimatedSection>
              <p className="text-dark/50 font-body text-[18px]">
                Dieses Projekt wird in Kürze ausführlich dokumentiert.
              </p>
              <Link
                href="/projekte"
                className="inline-flex items-center gap-2 text-navy font-medium font-body text-[14px] border-b border-navy/30 pb-1 hover:border-navy transition-colors mt-8"
              >
                Alle Projekte ansehen
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M1 4H13M13 4L10 1M13 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </AnimatedSection>
          )}
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}
