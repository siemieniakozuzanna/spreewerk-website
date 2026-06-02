interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
}

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`block text-[11px] font-medium tracking-[0.2em] uppercase font-body mb-4 ${
        light ? 'text-white/40' : 'text-navy/40'
      }`}
    >
      {children}
    </span>
  )
}
