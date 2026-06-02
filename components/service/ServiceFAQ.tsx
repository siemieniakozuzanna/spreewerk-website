'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface FAQItem {
  q: string
  a: string
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-concrete-grey">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-8 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-dark text-[17px] leading-snug group-hover:text-navy transition-colors">
          {item.q}
        </span>
        <span className={`flex-shrink-0 transition-transform duration-300 text-dark/40 ${open ? 'rotate-45' : ''}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-dark/60 font-body text-[15px] leading-relaxed pb-5 pr-8">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ServiceFAQ({ faq }: { faq: FAQItem[] }) {
  return (
    <section className="bg-concrete-grey py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection className="mb-10">
          <SectionLabel>Häufige Fragen</SectionLabel>
          <h2 className="font-heading font-semibold text-dark" style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.1 }}>
            Ihre Fragen beantwortet.
          </h2>
        </AnimatedSection>
        <div className="max-w-3xl">
          {faq.map((item) => (
            <FAQRow key={item.q} item={item} />
          ))}
          <div className="border-t border-concrete-grey" />
        </div>
      </div>
    </section>
  )
}
