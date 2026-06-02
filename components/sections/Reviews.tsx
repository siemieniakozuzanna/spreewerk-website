import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const reviews = [
  {
    author: 'Michael S.',
    text: 'Von der ersten Besichtigung bis zur Übergabe absolut professionell. Termine wurden eingehalten und die Qualität war hervorragend.',
  },
  {
    author: 'Anna K.',
    text: 'Sehr transparente Kommunikation und perfekte Ausführung. Wir würden jederzeit wieder mit Spreewerk arbeiten.',
  },
  {
    author: 'Thomas R.',
    text: 'Selten ein Handwerksunternehmen erlebt, das so zuverlässig arbeitet. Absolute Empfehlung.',
  },
  {
    author: 'Julia M.',
    text: 'Unser Altbau wurde mit viel Liebe zum Detail saniert. Das Ergebnis hat unsere Erwartungen übertroffen.',
  },
]

const trustBadges = [
  'Google Bewertungen',
  'Meisterbetrieb',
  'HWK Mitglied',
  'BG BAU',
  'SOKA-BAU',
]

function Stars({ size = 14 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="#FBBC04">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

export function Reviews() {
  return (
    <section className="bg-warm-white py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-14 items-end">

          {/* Left — headline */}
          <AnimatedSection className="lg:col-span-6">
            <SectionLabel>Kundenstimmen</SectionLabel>
            <h2
              className="font-heading font-bold text-dark mb-5"
              style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
            >
              Das sagen<br />unsere Kunden.
            </h2>
            <p className="text-dark/50 font-body text-[16px] leading-[1.75] max-w-md">
              Vertrauen entsteht durch saubere Arbeit, klare Kommunikation und zuverlässige Umsetzung.
            </p>
          </AnimatedSection>

          {/* Right — Google rating */}
          <AnimatedSection delay={0.15} className="lg:col-span-6 flex lg:justify-end">
            <div className="flex items-center gap-6 md:gap-8 bg-white rounded-2xl px-7 py-6 shadow-[0_2px_28px_rgba(9,18,36,0.07)]">
              <div className="flex flex-col items-center gap-1.5">
                <GoogleIcon />
                <span className="text-dark/35 font-body text-[11px] tracking-[0.14em] uppercase">Google</span>
              </div>

              <div className="w-px h-12 bg-dark/[0.08]" />

              <div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="font-heading font-bold text-dark leading-none" style={{ fontSize: '38px' }}>5,0</span>
                  <span className="text-dark/30 font-body text-[13px]">/ 5</span>
                </div>
                <Stars size={17} />
              </div>

              <div className="w-px h-12 bg-dark/[0.08]" />

              <div>
                <p className="font-heading font-bold text-dark leading-none mb-1" style={{ fontSize: '30px' }}>35+</p>
                <p className="text-dark/40 font-body text-[12px] leading-snug">Verifizierte<br />Bewertungen</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.author} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 shadow-[0_2px_24px_rgba(9,18,36,0.06)] border border-dark/[0.04] flex flex-col h-full">
                <Stars size={14} />
                <p className="text-dark/65 font-body text-[15px] leading-[1.8] mt-5 flex-1">
                  {`„${review.text}"`}
                </p>
                <div className="flex items-center gap-2 mt-6 pt-5 border-t border-dark/[0.06]">
                  <div className="w-7 h-7 rounded-full bg-dark/[0.06] flex items-center justify-center flex-shrink-0">
                    <span className="text-dark/40 font-body font-medium text-[11px]">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <p className="text-dark/45 font-body text-[13px] font-medium">— {review.author}, Berlin</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust badges */}
        <AnimatedSection delay={0.25} className="mt-12 pt-10 border-t border-concrete-grey">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.15" className="text-dark" />
                  <path d="M5 8l2.5 2.5 4-4" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-dark" />
                </svg>
                <span className="text-dark/55 font-body text-[13px] font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
