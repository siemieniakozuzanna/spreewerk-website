import Image from 'next/image'

interface SWWatermarkProps {
  className?: string
}

export function SWWatermark({ className = '' }: SWWatermarkProps) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}
    >
      <div className="relative w-[600px] h-[600px] opacity-[0.03]">
        <Image
          src="/assets/logo/logo-alt.png"
          alt=""
          fill
          className="object-contain"
          sizes="600px"
        />
      </div>
    </div>
  )
}
