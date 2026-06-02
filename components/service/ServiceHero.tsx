import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/lib/services'

export function ServiceHero({ service }: { service: Service }) {
  return (
    <div>
      {/* Hero image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-site mx-auto px-6 md:px-12 lg:px-20 pb-12">
          <h1
            className="font-heading font-bold text-white"
            style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', lineHeight: 0.97 }}
          >
            {service.title}
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-navy border-b border-white/10">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 py-3">
          <nav className="flex items-center gap-2 text-[12px] font-body text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/leistungen" className="hover:text-white/70 transition-colors">Leistungen</Link>
            <span>/</span>
            <span className="text-white/60">{service.shortTitle}</span>
          </nav>
        </div>
      </div>
    </div>
  )
}
