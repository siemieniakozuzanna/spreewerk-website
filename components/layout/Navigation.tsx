'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/projekte', label: 'Projekte' },
  { href: '/ueber-uns', label: 'Über uns' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.88)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-navy py-3 backdrop-blur-md border-b border-white/[0.08] shadow-[0_2px_24px_rgba(8,26,58,0.18)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 flex items-center">

          {/* Logo - left */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/assets/logo/logo-w-cropped.png"
              alt="Spreewerk Sanierung Berlin"
              width={1011}
              height={188}
              className="h-[44px] md:h-[56px] w-auto"
              priority
            />
          </Link>

          {/* Nav links - centered */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium font-body tracking-wide text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs - right */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Phone */}
            <a
              href="tel:030544532946"
              className="inline-flex items-center justify-center border border-white/35 text-white/75 font-body font-medium text-[13px] px-5 rounded-full h-[44px] hover:border-white/60 hover:text-white hover:bg-white/[0.07] transition-all duration-300 whitespace-nowrap"
            >
              030 544 532 946
            </a>

            {/* Primary CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy font-body font-semibold text-[13px] px-6 rounded-full h-[48px] hover:bg-[#F5F5F5] transition-colors duration-300 whitespace-nowrap"
            >
              Kostenlose Kostenschätzung
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" className="flex-shrink-0">
                <path d="M1 3.5H12M12 3.5L9.5 1M12 3.5L9.5 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2 ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <span className={`block w-7 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-7 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-7 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="relative opacity-[0.03]" style={{ width: '70vw', height: '70vw' }}>
            <Image src="/assets/logo/logo-w-cropped.png" alt="" fill className="object-contain" sizes="70vw" />
          </div>
        </div>

        <div className="relative flex flex-col h-full px-8 pt-28 pb-12">

          {/* Primary CTA - prominent top action */}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-3 bg-blue text-white font-body font-semibold text-[16px] rounded-full min-h-[60px] mb-12 hover:bg-blue/85 transition-colors duration-200"
          >
            Kostenlose Kostenschätzung
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" className="flex-shrink-0">
              <path d="M1 4.5H14M14 4.5L10.5 1M14 4.5L10.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Nav links */}
          <nav className="flex flex-col gap-8 mb-auto">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-heading font-bold tracking-tight hover:text-white/50 transition-colors duration-200"
                style={{ fontSize: 'clamp(32px, 9vw, 52px)', transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone - bottom of menu */}
          <a
            href="tel:030544532946"
            className="inline-flex items-center gap-3 text-white/50 font-body text-[15px] font-medium hover:text-white transition-colors duration-200 mt-10"
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="flex-shrink-0 opacity-60">
              <path d="M15.5 11.5v2a1.333 1.333 0 01-1.453 1.333 13.2 13.2 0 01-5.757-2.047 13 13 0 01-4-4A13.2 13.2 0 012.243 3C2.18 2.247 2.76 1.5 3.573 1.5h2a1.333 1.333 0 011.333 1.147c.085.64.24 1.27.467 1.873a1.333 1.333 0 01-.3 1.407L6.073 6.94a10.667 10.667 0 004 4l1.013-1.013a1.333 1.333 0 011.407-.3c.603.227 1.233.382 1.873.467A1.333 1.333 0 0115.5 11.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            030 544 532 946
          </a>
        </div>
      </div>
    </>
  )
}
