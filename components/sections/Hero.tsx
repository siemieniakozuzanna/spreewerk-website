'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const words = ['Sanierung.', 'Präzision.', 'Berlin.']

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-28 overflow-hidden">
      {/* Background - best finished renovation: restored Gründerzeit salon */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero/hero-main.png"
          alt="Hochwertige Altbausanierung in Berlin - Komplettsanierung durch Spreewerk Sanierung Berlin"
          fill
          className="object-cover"
          style={{ objectPosition: '50% center' }}
          priority
          sizes="100vw"
        />
        {/* Left gradient - creates readable zone for text without killing the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/45 to-transparent" />
        {/* Bottom gradient - anchors the text visually */}
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

          {/* Headline - staggered word reveal */}
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
            Altbausanierung in Berlin - hochwertige Wohnungs- und
            Badsanierungen für anspruchsvolle Immobilien.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            {/* Primary - scroll to contact */}
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-blue text-white font-body font-semibold text-[16px] px-9 rounded-full min-h-[60px] hover:bg-blue/85 transition-colors duration-300 sm:w-auto w-full"
            >
              Kostenlose Kostenschätzung
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" className="flex-shrink-0">
                <path d="M1 4.5H15M15 4.5L11 1M15 4.5L11 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Secondary - phone */}
            <a
              href="tel:030544532946"
              className="inline-flex items-center justify-center gap-2.5 border border-white/40 text-white/80 font-body font-medium text-[14px] px-7 rounded-full min-h-[52px] hover:bg-white hover:text-navy hover:border-white transition-all duration-300 sm:w-auto w-full"
            >
              030 544 532 946
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator - right edge */}
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
