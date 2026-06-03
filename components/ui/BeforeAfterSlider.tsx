'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Vorher',
  afterAlt = 'Nachher',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(45)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(3, Math.min(97, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    updatePosition(e.clientX)
  }, [updatePosition])

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }, [isDragging, updatePosition])

  const onMouseUp = useCallback(() => setIsDragging(false), [])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [onMouseMove, onMouseUp])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none cursor-col-resize w-full"
      style={{ aspectRatio: '16/9', touchAction: 'none' }}
      onMouseDown={onMouseDown}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* AFTER - base layer (right side, always visible) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* BEFORE - clips from left edge to drag position */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center pointer-events-none"
        style={{ left: `${position}%`, boxShadow: '0 4px 24px rgba(0,0,0,0.30)' }}
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
          <path d="M7 7L3 4M7 7L3 10M7 7H0" stroke="#081A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 7L19 4M15 7L19 10M15 7H22" stroke="#081A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Labels - corners */}
      <div className="absolute bottom-5 left-5 z-10 text-[11px] tracking-[0.2em] uppercase text-white font-medium font-body bg-navy/50 px-2.5 py-1.5 pointer-events-none">
        VOR
      </div>
      <div className="absolute bottom-5 right-5 z-10 text-[11px] tracking-[0.2em] uppercase text-white font-medium font-body bg-navy/50 px-2.5 py-1.5 pointer-events-none">
        NACH
      </div>
    </div>
  )
}
