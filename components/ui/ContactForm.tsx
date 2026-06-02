'use client'

export function ContactForm() {
  return (
    <form className="space-y-5" action="#" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">Name</label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 text-white font-body text-[15px] px-4 py-3 focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">Telefon</label>
          <input
            type="tel"
            className="w-full bg-white/5 border border-white/10 text-white font-body text-[15px] px-4 py-3 focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
            placeholder="+49"
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">E-Mail</label>
        <input
          type="email"
          className="w-full bg-white/5 border border-white/10 text-white font-body text-[15px] px-4 py-3 focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
          placeholder="ihre@email.de"
        />
      </div>
      <div>
        <label className="block text-[11px] font-medium tracking-[0.18em] uppercase text-white/30 font-body mb-2">Vorhaben</label>
        <textarea
          rows={5}
          className="w-full bg-white/5 border border-white/10 text-white font-body text-[15px] px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none placeholder:text-white/20"
          placeholder="Beschreiben Sie kurz Ihr Vorhaben — Lage, Größe, Umfang…"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue text-white font-body font-medium text-[14px] tracking-wide py-4 hover:bg-blue/90 transition-colors duration-200"
      >
        Anfrage senden
      </button>
    </form>
  )
}
