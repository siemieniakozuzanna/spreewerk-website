import Link from 'next/link'
import Image from 'next/image'
import { company } from '@/lib/company'
import { BlueprintLines } from '@/components/ui/BlueprintLines'
import { SWWatermark } from '@/components/ui/SWWatermark'

const serviceLinks = [
  { href: '/leistungen/komplettsanierung', label: 'Komplettsanierung' },
  { href: '/leistungen/bad-und-kuchensanierung', label: 'Bad & Küche' },
  { href: '/leistungen/wasserschaden-schimmelsanierung', label: 'Wasserschäden' },
  { href: '/leistungen/innenausbau-oberflachen', label: 'Innenausbau' },
  { href: '/leistungen/dachgeschossausbau-berlin', label: 'Dachgeschossausbau' },
  { href: '/leistungen/technische-gewerke', label: 'Technische Gewerke' },
]

export function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      <BlueprintLines />
      <SWWatermark />

      <div className="relative max-w-site mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="relative w-36 h-12 mb-6">
              <Image
                src="/assets/logo/logo-alt.png"
                alt="Spreewerk Sanierung Berlin"
                fill
                className="object-contain object-left"
                sizes="144px"
              />
            </div>
            <p className="text-white/50 text-[15px] font-body leading-relaxed max-w-xs">
              Professionelle Sanierung in Berlin und Brandenburg.
            </p>
            <p className="text-white/30 text-[13px] font-body mt-4 tracking-wide">
              Berlin & Brandenburg
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/30 font-body mb-5">
              Leistungen
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-[15px] font-body hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/30 font-body mb-5">
              Kontakt
            </p>
            <div className="space-y-3">
              <p className="text-white/50 text-[15px] font-body">{company.address.city}</p>
              <a
                href={`tel:${company.phone}`}
                className="block text-white text-[15px] font-body hover:text-white/70 transition-colors"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="block text-white/50 text-[15px] font-body hover:text-white transition-colors"
              >
                {company.email}
              </a>
            </div>

            <div className="mt-8">
              <Link
                href="/kontakt"
                className="inline-block bg-blue text-white text-[13px] font-medium font-body tracking-wide px-5 py-3 hover:bg-blue/90 transition-colors"
              >
                Termin anfragen
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 gap-4">
          <p className="text-white/30 text-[13px] font-body">
            © {new Date().getFullYear()} {company.name}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-white/30 text-[13px] font-body hover:text-white/60 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-white/30 text-[13px] font-body hover:text-white/60 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
