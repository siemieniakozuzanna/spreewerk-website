import Image from 'next/image'

export function UeberHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/team/altbauwork1.png"
          alt="Spreewerk Team bei der Altbausanierung"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/70" />
      </div>
      <div className="relative max-w-site mx-auto px-6 md:px-12 lg:px-20 pb-16 w-full">
        <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 font-body mb-4">
          Über uns
        </span>
        <h1
          className="font-heading font-bold text-white"
          style={{ fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 0.95 }}
        >
          Wir sind Spreewerk.
        </h1>
      </div>
    </section>
  )
}
