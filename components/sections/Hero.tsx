'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const words = ['Sanierung.', 'Präzision.', 'Berlin.']

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-36 overflow-hidden">
      {/* Background — best finished renovation: restored Gründerzeit salon */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero/hero-main.png"
          alt="Spreewerk Sanierung Berlin — professionelle Komplettsanierung"
          fill
          className="object-cover"
          style={{ objectPosition: '50% center' }}
          priority
          sizes="100vw"
        />
        {/* Left gradient — creates readable zone for text without killing the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-transparent" />
        {/* Bottom gradient — anchors the text visually */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-site mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block text-[11px] font-medium tracking-[0.24em] uppercase text-white/40 font-body mb-10">
              Spreewerk Sanierung Berlin
            </span>
          </motion.div>

          {/* Headline — staggered word reveal */}
          <h1
            className="font-heading font-bold text-white mb-10"
            style={{ fontSize: 'clamp(54px, 7.5vw, 96px)', lineHeight: '0.91', letterSpacing: '-0.02em' }}
          >
            {words.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '115%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35 + i * 0.13,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="text-white/55 font-body leading-[1.75] mb-12 max-w-sm"
            style={{ fontSize: 'clamp(16px, 1.4vw, 19px)' }}
          >
            Komplettsanierung, Altbau, Bad & Küche —
            für anspruchsvolle Immobilien in Berlin und Brandenburg.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link
              href="/kontakt"
              className="inline-block bg-white text-navy text-[13px] font-semibold font-body tracking-[0.06em] uppercase px-8 py-4 hover:bg-blue hover:text-white transition-all duration-300"
            >
              Kostenlos anfragen
            </Link>
            <Link
              href="/projekte"
              className="inline-flex items-center gap-2.5 text-white/60 text-[14px] font-medium font-body hover:text-white transition-colors duration-200 py-4"
            >
              Projekte ansehen
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
                <path d="M1 4.5H15M15 4.5L11 1M15 4.5L11 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator — right edge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="hidden lg:flex absolute bottom-0 right-0 flex-col items-center gap-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-white/15"
          />
        </motion.div>
      </div>
    </section>
  )
}
