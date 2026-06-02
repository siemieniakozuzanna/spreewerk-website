'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { globalFaq, type FAQItem } from '@/lib/faq'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-concrete-grey">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-8 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-dark text-[17px] md:text-[19px] leading-snug group-hover:text-navy transition-colors duration-200">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 relative mt-0.5 text-dark/40 transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-dark/60 font-body text-[16px] leading-[1.75] pb-6 pr-4 md:pr-10 max-w-3xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="bg-warm-white py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection className="mb-14">
          <SectionLabel>Häufige Fragen</SectionLabel>
          <h2
            className="font-heading font-semibold text-dark"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05 }}
          >
            Was unsere Kunden wissen möchten.
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl">
          {globalFaq.map((item) => (
            <FAQRow key={item.question} item={item} />
          ))}
          <div className="border-t border-concrete-grey" />
        </div>
      </div>
    </section>
  )
}
