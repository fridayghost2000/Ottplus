import { useRef, useState, type MouseEvent, type ReactNode } from 'react'

interface HoverBoxState {
  left: number
  top: number
  width: number
  height: number
  visible: boolean
  instant: boolean
}

interface HoverHighlightGridProps {
  children: ReactNode
  className?: string
  roundedClass?: string
}

/**
 * Grid container with a single persistent GPU-composited sliding highlight
 * matching the VideoTools ("Power up your business with video tools") card hover effect.
 */
export function HoverHighlightGrid({
  children,
  className = '',
  roundedClass = 'rounded-2xl',
}: HoverHighlightGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const activeCardRef = useRef<HTMLElement | null>(null)
  const [hoverBox, setHoverBox] = useState<HoverBoxState>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    visible: false,
    instant: true,
  })

  const handleMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    const grid = gridRef.current
    if (!grid) return

    let el = e.target as HTMLElement | null
    while (el && el.parentElement !== grid) {
      el = el.parentElement
    }
    if (!el || el.getAttribute('aria-hidden') === 'true') return
    if (activeCardRef.current === el) return
    activeCardRef.current = el

    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    const nextRect = {
      left: el.offsetLeft,
      top: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight,
    }

    setHoverBox((prev) => {
      if (!prev.visible) {
        rafRef.current = window.requestAnimationFrame(() => {
          setHoverBox((curr) => ({ ...curr, visible: true, instant: false }))
        })
        return { ...nextRect, visible: false, instant: true }
      }
      return { ...nextRect, visible: true, instant: false }
    })
  }

  const handleMouseLeave = () => {
    activeCardRef.current = null
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    setHoverBox((prev) => ({ ...prev, visible: false, instant: false }))
  }

  return (
    <div
      ref={gridRef}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`relative [&>*:not([aria-hidden='true'])]:relative [&>*:not([aria-hidden='true'])]:z-10 ${className}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 left-0 ${roundedClass} bg-[#1b1b21] border border-white/[0.12] shadow-[0_14px_36px_rgba(0,0,0,0.45)] will-change-transform z-0`}
        style={{
          width: hoverBox.width || undefined,
          height: hoverBox.height || undefined,
          opacity: hoverBox.visible ? 1 : 0,
          transform: `translate3d(${hoverBox.left}px, ${hoverBox.top}px, 0) scale(${
            hoverBox.visible ? 1 : 0.97
          })`,
          transition: hoverBox.instant
            ? 'none'
            : 'transform 380ms cubic-bezier(0.22, 1, 0.36, 1), width 380ms cubic-bezier(0.22, 1, 0.36, 1), height 380ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease',
        }}
      />
      {children}
    </div>
  )
}
