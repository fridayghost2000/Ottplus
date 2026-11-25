import { useRef, useState } from 'react'

interface ToolCard {
  title: string
  description: string
  icon: string
  badge?: string
}

const tools: ToolCard[] = [
  {
    title: 'Interactivity',
    description:
      'Turn viewers from passive watchers into active participants for deeper engagement and stronger connections.',
    icon: '/figma-assets/s3_tool1.png',
  },
  {
    title: 'Gallery',
    description:
      'Use customizable templates to build immersive video experiences, branded portals, and video-focused landing pages.',
    icon: '/figma-assets/s3_tool2.png',
  },
  {
    title: 'OTT',
    description:
      'Quickly build and launch compelling app experiences on all major platforms and devices.',
    icon: '/figma-assets/s3_tool3.png',
  },
  {
    title: 'Live Streaming',
    description:
      'Broadcast high-quality live video securely and at scale, with interactive chat, Q&A, and analytics to maximize engagement in real time.',
    icon: '/figma-assets/s3_tool4.png',
  },
  {
    title: 'AI Suite',
    description:
      'Streamline content creation, development, and translation—making it easier to maximize the value of your content.',
    icon: '/figma-assets/s3_tool5.png',
    badge: 'New',
  },
  {
    title: 'Analytics',
    description:
      'Leverage advanced live and on-demand video analytics to help you understand viewer behavior and improve future performance.',
    icon: '/figma-assets/s3_tool6.png',
  },
  {
    title: 'Player',
    description:
      'Deliver a smooth playback experience across devices, with adaptive streaming, custom branding, and rich controls that match your needs.',
    icon: '/figma-assets/s3_tool7.png',
  },
  {
    title: 'Developer APIs',
    description:
      "Tap into OTTFast's APIs for flexible, high-quality video integration with your custom apps.",
    icon: '/figma-assets/s3_tool8.png',
  },
]

interface HoverBoxState {
  left: number
  top: number
  width: number
  height: number
  visible: boolean
  instant: boolean
}

export function VideoTools() {
  const rafRef = useRef<number | null>(null)
  const [hoverBox, setHoverBox] = useState<HoverBoxState>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    visible: false,
    instant: true,
  })

  const handleCardEnter = (el: HTMLDivElement) => {
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
        // Snap position silently before fading in so it never flies in from (0, 0)
        rafRef.current = window.requestAnimationFrame(() => {
          setHoverBox((curr) => ({ ...curr, visible: true, instant: false }))
        })
        return { ...nextRect, visible: false, instant: true }
      }
      return { ...nextRect, visible: true, instant: false }
    })
  }

  const handleGridLeave = () => {
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    setHoverBox((prev) => ({ ...prev, visible: false, instant: false }))
  }

  return (
    <section className="relative w-full bg-black py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1405px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2
            className="text-[32px] sm:text-[42px] lg:text-[49.6px] leading-[1.2] lg:leading-[62px] tracking-[-1.5px] lg:tracking-[-1.98px] text-[#faf9f5]"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Power up your business with video tools
          </h2>
        </div>

        {/* 8-Card Grid with Single Persistent Gliding Highlight (matching Brightcove) */}
        <div
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          onMouseLeave={handleGridLeave}
        >
          {/* Persistent GPU-composited sliding highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 rounded-[18px] bg-[#1b1b21] border border-white/[0.12] shadow-[0_14px_36px_rgba(0,0,0,0.45)] will-change-transform z-0"
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

          {tools.map((tool) => (
            <div
              key={tool.title}
              onMouseEnter={(e) => handleCardEnter(e.currentTarget)}
              className="relative z-10 bg-[#111111]/45 p-6 sm:p-7 rounded-[18px] border border-white/[0.05] flex flex-col justify-start group cursor-pointer"
            >
              {/* Tool Icon / 3D Asset */}
              <div className="w-24 h-24 mb-6 flex items-center justify-start shrink-0">
                <img
                  src={tool.icon}
                  alt={tool.title}
                  className="w-full h-full object-contain pointer-events-none group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>

              {/* Title & Optional Badge */}
              <div className="flex items-center gap-2.5 mb-3">
                <h3 className="text-[22px] sm:text-[24.8px] font-bold text-[#faf9f5] tracking-tight">
                  {tool.title}
                </h3>
                {tool.badge && (
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#101010] shadow-sm uppercase tracking-wide"
                    style={{
                      backgroundImage:
                        'linear-gradient(0deg, rgb(243, 193, 44) 0%, rgb(255, 172, 150) 100%)',
                    }}
                  >
                    {tool.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[15px] sm:text-[16px] leading-[23px] text-[rgba(250,249,245,0.7)] group-hover:text-[rgba(250,249,245,0.9)] transition-colors duration-200">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
