import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Gallery() {
  return (
    <section className="bg-concrete-grey py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection className="mb-14">
          <SectionLabel>Projekte</SectionLabel>
          <h2
            className="font-heading font-semibold text-dark"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05 }}
          >
            Sanierungsprojekte in Berlin.
          </h2>
        </AnimatedSection>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Row 1: p01-after2 (2-col, tall) + p02-after (1-col) */}
          <AnimatedSection className="md:col-span-2">
            <GalleryItem project={projects[0]} imageIndex={1} tall />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <GalleryItem project={projects[1]} imageIndex={0} />
          </AnimatedSection>

          {/* Row 2: three equal — all at h-72 md:h-96 for better bathroom visibility */}
          <AnimatedSection delay={0.05}>
            {/* p03: Badsanierung Mosaikfliesen — right+down to reveal bathtub */}
            <GalleryItem
              project={projects[2]}
              imageIndex={0}
              objectPosition="62% 58%"
              heightClass="h-72 md:h-96"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <GalleryItem
              project={projects[3]}
              imageIndex={0}
              heightClass="h-72 md:h-96"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            {/* p05: Bad Dunkelgrün — push far down to expose fixtures, reduce dark upper wall */}
            <GalleryItem
              project={projects[4]}
              imageIndex={0}
              objectPosition="50% 80%"
              heightClass="h-72 md:h-96"
            />
          </AnimatedSection>

          {/* Row 3: full-width */}
          <AnimatedSection delay={0.1} className="md:col-span-3">
            {/* p06: Bad Travertin — left+down to centre shower niches, reduce empty wall */}
            <GalleryItem
              project={projects[5]}
              imageIndex={0}
              wide
              objectPosition="38% 62%"
            />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2} className="mt-10">
          <Link
            href="/projekte"
            className="inline-flex items-center gap-3 text-navy font-medium font-body text-[14px] border-b border-navy/30 pb-1 hover:border-navy transition-colors duration-200"
          >
            Alle Projekte ansehen
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 4H13M13 4L10 1M13 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

function GalleryItem({
  project,
  imageIndex,
  tall = false,
  wide = false,
  objectPosition = '50% 50%',
  heightClass,
}: {
  project: (typeof projects)[0]
  imageIndex: number
  tall?: boolean
  wide?: boolean
  objectPosition?: string
  heightClass?: string
}) {
  const href = project.hasDetailPage ? `/projekte/${project.slug}` : '/projekte'
  const src = project.images[imageIndex] ?? project.images[0]

  const defaultHeight = wide
    ? 'h-56 md:h-72'
    : tall
    ? 'h-72 md:h-[480px]'
    : 'h-60 md:h-72'

  return (
    <Link href={href} className="block group overflow-hidden relative">
      <div className={`relative overflow-hidden ${heightClass ?? defaultHeight}`}>
        <Image
          src={src}
          alt={`${project.title} — Sanierungsprojekt in Berlin von Spreewerk`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ objectPosition }}
          sizes={
            wide
              ? '100vw'
              : tall
              ? '(max-width: 768px) 100vw, 66vw'
              : '(max-width: 768px) 100vw, 33vw'
          }
        />
        {/* Hover label */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-400 flex items-end p-4">
          <span className="text-white/0 group-hover:text-white/80 font-body text-[12px] tracking-[0.16em] uppercase transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            {project.type}
          </span>
        </div>
      </div>
    </Link>
  )
}
