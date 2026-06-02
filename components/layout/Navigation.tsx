'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/projekte', label: 'Projekte' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/98 py-4 backdrop-blur-sm border-b border-white/[0.07]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/assets/logo/logo-w-cropped.png"
              alt="Spreewerk Sanierung Berlin"
              width={1011}
              height={188}
              className="h-[44px] md:h-[64px] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium font-body tracking-wide transition-colors duration-200 ${
                  link.href === '/kontakt'
                    ? 'text-white border-b border-white/50 hover:border-white pb-px'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2"
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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="relative opacity-[0.03]" style={{ width: '70vw', height: '70vw' }}>
            <Image src="/assets/logo/logo-alt.png" alt="" fill className="object-contain" sizes="70vw" />
          </div>
        </div>

        <nav className="relative flex flex-col items-start justify-center h-full px-10 gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-heading font-bold tracking-tight hover:text-white/50 transition-colors duration-200"
              style={{ fontSize: 'clamp(36px, 10vw, 56px)', transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
