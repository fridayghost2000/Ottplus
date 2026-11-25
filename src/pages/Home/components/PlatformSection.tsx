import { useState, useRef, useEffect } from 'react'
import lottie, { type AnimationItem } from 'lottie-web'

// Reusable Lottie Component for Brightcove's animated cards
interface LottieCardProps {
  animationPath: string
  isHovered: boolean
  className?: string
  reverseSpeed?: number
}

function LottieCard({
  animationPath,
  isHovered,
  className = '',
  reverseSpeed = 1.2,
}: LottieCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<AnimationItem | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: animationPath,
    })

    animRef.current.addEventListener('DOMLoaded', () => {
      setIsLoaded(true)
    })

    return () => {
      animRef.current?.destroy()
      animRef.current = null
    }
  }, [animationPath])

  useEffect(() => {
    if (!animRef.current || !isLoaded) return

    if (isHovered) {
      animRef.current.setDirection(1)
      animRef.current.setSpeed(1)
      animRef.current.play()
    } else {
      animRef.current.setDirection(-1)
      animRef.current.setSpeed(reverseSpeed)
      animRef.current.play()
    }
  }, [isHovered, isLoaded, reverseSpeed])

  return <div ref={containerRef} className={className} />
}

// Corner Notch Arrow component with exact Brightcove inverted scooped-border cutout
interface CornerNotchProps {
  position: 'top-right' | 'top-left' | 'bottom-left'
  href?: string
  notchColor?: string
}

function CornerNotch({ position, href = '#', notchColor }: CornerNotchProps) {
  const defaultColors: Record<string, string> = {
    'top-right': '#2d285a',
    'top-left': '#33306a',
    'bottom-left': '#131224',
  }
  const color = notchColor || defaultColors[position]

  const notchClass =
    position === 'top-right'
      ? 'bc-notch-tr -top-1 -right-1 origin-top-right rounded-bl-[24px]'
      : position === 'top-left'
      ? 'bc-notch-tl -top-1 -left-1 origin-top-left rounded-br-[24px]'
      : 'bc-notch-bl -bottom-1 -left-1 origin-bottom-left rounded-tr-[24px]'

  return (
    <a
      href={href}
      aria-label="View product"
      style={{ '--notch-color': color } as React.CSSProperties}
      className={`pointer-events-none absolute flex items-center justify-center size-16 z-30 scale-0 group-hover:scale-100 group-hover:pointer-events-auto transition-transform duration-150 ease-in-out ${notchClass}`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-white size-6 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100"
      >
        <path
          d="M9.33398 22.6693L22.6673 9.33594"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33398 9.33594H22.6673V22.6693"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}

export function PlatformSection() {
  // Hover states for Lottie animations on Card 3 & 4
  const [isCard3Hovered, setIsCard3Hovered] = useState(false)
  const [isCard4Hovered, setIsCard4Hovered] = useState(false)

  return (
    <section id="platform" className="relative w-full bg-black py-20 lg:py-28 overflow-hidden">
      {/* Inverted Border Scallop / Notch CSS Styles matching Brightcove */}
      <style>{`
        /* Top-Right Scooped Notch (Card 1) */
        .bc-notch-tr {
          background-color: var(--notch-color, #2d285a);
        }
        .bc-notch-tr::before {
          content: "";
          position: absolute;
          width: 48px;
          height: 48px;
          top: 0;
          left: -48px;
          border-radius: 50%;
          box-shadow: 24px -24px 0 0 var(--notch-color, #2d285a);
          pointer-events: none;
        }
        .bc-notch-tr::after {
          content: "";
          position: absolute;
          width: 48px;
          height: 48px;
          bottom: -48px;
          right: 0;
          border-radius: 50%;
          box-shadow: 24px -24px 0 0 var(--notch-color, #2d285a);
          pointer-events: none;
        }

        /* Top-Left Scooped Notch (Card 2 & 3) */
        .bc-notch-tl {
          background-color: var(--notch-color, #33306a);
        }
        .bc-notch-tl::after {
          content: "";
          position: absolute;
          width: 48px;
          height: 48px;
          top: 0;
          right: -48px;
          border-radius: 50%;
          box-shadow: -24px -24px 0 0 var(--notch-color, #33306a);
          pointer-events: none;
        }
        .bc-notch-tl::before {
          content: "";
          position: absolute;
          width: 48px;
          height: 48px;
          bottom: -48px;
          left: 0;
          border-radius: 50%;
          box-shadow: -24px -24px 0 0 var(--notch-color, #33306a);
          pointer-events: none;
        }

        /* Bottom-Left Scooped Notch (Card 4) */
        .bc-notch-bl {
          background-color: var(--notch-color, #131224);
        }
        .bc-notch-bl::after {
          content: "";
          position: absolute;
          width: 48px;
          height: 48px;
          bottom: 0;
          right: -48px;
          border-radius: 50%;
          box-shadow: -24px 24px 0 0 var(--notch-color, #131224);
          pointer-events: none;
        }
        .bc-notch-bl::before {
          content: "";
          position: absolute;
          width: 48px;
          height: 48px;
          top: -48px;
          left: 0;
          border-radius: 50%;
          box-shadow: -24px 24px 0 0 var(--notch-color, #131224);
          pointer-events: none;
        }
      `}</style>

      {/* Ambient Multi-Color Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-85">
        <div
          className="absolute blur-[80px] h-[1400px] -left-[160px] -top-[90px] w-[1600px] rounded-full opacity-35"
          style={{
            backgroundImage:
              'linear-gradient(138.2deg, rgb(147, 51, 234) 0%, rgb(176, 72, 255) 50%, rgb(176, 72, 255) 100%)',
          }}
        />
        <div className="absolute blur-[70px] h-[1500px] left-[700px] -top-[200px] w-[1200px] rounded-full opacity-25 bg-gradient-to-r from-[#3b82f6] to-[#2dd4bf]" />
        <div className="absolute blur-[60px] h-[300px] -left-[80px] top-[40px] w-[600px] rounded-full opacity-20 bg-gradient-to-r from-[#fbbf24] to-[#f97316]" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-[1280px] mx-auto mb-14 lg:mb-20">
          <h2
            className="text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.15] lg:leading-[70px] tracking-[-1.1px] text-white font-bold"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            End-to-end video delivery &amp; monetization platform
          </h2>
        </div>

        {/* 4 Cards Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ======================================================== */}
          {/* Card 1: Host and stream (Left Column - Tall Card)        */}
          {/* ======================================================== */}
          <div className="lg:row-span-2 relative bg-[#17171a] rounded-[18px] border border-white/5 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-purple-950/20">
            {/* Top-Right Scooped Corner Notch with Arrow */}
            <CornerNotch position="top-right" href="#host-stream" notchColor="#2d285a" />

            <div className="flex h-full flex-col justify-between pb-8 sm:pb-10">
              <div>
                {/* Heading & Subtitle */}
                <div className="max-w-md p-6 sm:p-8 pb-6 sm:pb-8">
                  <h3 className="text-[26px] sm:text-[32px] font-bold text-white tracking-tight mb-3">
                    Host and stream
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#9e9e9e]">
                    Broadcast flawless live and on-demand video experiences to any audience, anywhere.
                  </p>
                </div>

                {/* Video Container with Smooth Hover Scale & Controls */}
                <div className="relative px-6 sm:px-8 lg:pr-16 lg:mb-6">
                  <div className="relative origin-top transition-transform duration-300 ease-out group-hover:scale-[1.04]">
                    <video
                      src="/videos/bento-green.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="rounded-[14px] aspect-[4/3] object-cover w-full shadow-2xl border border-white/5"
                    />

                    {/* Controls Bar Overlay */}
                    <img
                      src="/brightcove/controls.747afdb2.svg"
                      alt="Player controls"
                      className="absolute bottom-3 left-1/2 h-8 w-auto -translate-x-1/2 drop-shadow-lg pointer-events-none"
                    />
                  </div>

                  {/* Publish Pill Button with Hover Translate & Scale */}
                  <div className="absolute top-4 right-8 lg:right-20 flex items-center px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide shadow-xl transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:scale-105 cursor-pointer">
                    <span>Publish</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-black ml-1.5"
                    >
                      <path
                        d="M14.75 8.92188L10.75 4.92188M14.75 8.92188L10.75 12.9219M14.75 8.92188H2.25"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Scrubber Timeline Area with Playhead Line & Diamond Indicator */}
              <div className="relative px-6 sm:px-8 mt-4">
                {/* Time Markers Row */}
                <div className="flex items-center gap-0 mb-1 relative">
                  <span className="text-[10px] text-white/50 font-mono">0:00</span>
                  <div className="flex-1 flex items-center justify-around px-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="w-0.5 h-0.5 rounded-full bg-white/30" />
                    ))}
                  </div>
                  <span className="text-[10px] text-white/50 font-mono">0:01</span>
                  <div className="flex-1 flex items-center justify-around px-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="w-0.5 h-0.5 rounded-full bg-white/30" />
                    ))}
                  </div>
                  <span className="text-[10px] text-white/50 font-mono">0:02</span>
                  <div className="flex-1 flex items-center justify-around px-2">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className="w-0.5 h-0.5 rounded-full bg-white/30" />
                    ))}
                  </div>

                  {/* Animated Diamond Marker on the time row */}
                  <span className="absolute top-1/2 -translate-y-1/2 left-[30%] h-2.5 w-2.5 rotate-45 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-300 ease-out group-hover:translate-x-32 z-10" />
                </div>

                {/* Timeline Filmstrip with Vertical Playhead */}
                <div className="relative">
                  <img
                    src="/brightcove/timeline.d029cb29.webp"
                    alt="Scrubber timeline"
                    className="w-full h-auto object-contain transition-all duration-300 ease-out group-hover:translate-x-2 rounded-lg opacity-90 group-hover:opacity-100"
                  />

                  {/* Prominent Vertical White Playhead Line */}
                  <div
                    className="absolute top-0 bottom-0 left-[30%] w-[2px] bg-white shadow-[0_0_6px_rgba(255,255,255,0.8),0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 ease-out group-hover:translate-x-32 z-10 pointer-events-none"
                  >
                    {/* Top triangle indicator */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Card 2: Manage your video library (Top Right Card)       */}
          {/* ======================================================== */}
          <div className="relative bg-[#17171a] rounded-[18px] border border-white/5 flex flex-col justify-end overflow-hidden group transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-purple-950/20">
            {/* Top-Left Scooped Corner Notch with Arrow */}
            <CornerNotch position="top-left" href="#video-library" notchColor="#33306a" />

            <div className="w-full flex-1 justify-between gap-4 sm:gap-6 lg:gap-8 flex flex-col md:flex-row items-end pt-12 sm:pt-16">
              {/* Heading & Subtitle (Aligned to Bottom) */}
              <div className="shrink-0 self-end p-6 sm:p-8 lg:pr-0 lg:pb-8 lg:pl-8 max-w-[240px]">
                <h3 className="text-[22px] sm:text-[26px] xl:text-[28px] font-bold text-white tracking-tight mb-3 whitespace-pre-line">
                  Manage your{'\n'}video library
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#9e9e9e] max-w-[220px]">
                  Upload, publish, track, and organize all your team’s video content in one place.
                </p>
              </div>

              {/* Animated Interactive Library Widget with Folders & Tilting Video Card */}
              <div className="relative w-full max-w-[240px] sm:max-w-[250px] shrink-0 self-end p-6 sm:p-8 lg:pt-0 lg:pr-8 lg:pb-8 lg:pl-0">
                {/* 1. Folders Header Tab with Tilting on Hover */}
                <img
                  src="/brightcove/tab-1.27ebf415.svg"
                  alt="Folders tab"
                  className="mb-3 w-full transition-transform duration-300 ease-out group-hover:-translate-y-3 group-hover:-rotate-[2deg] drop-shadow-md"
                />

                {/* 2. Folder Row 1 (Count 16) with Tilting on Hover */}
                <div className="rounded-[8px] bg-white/10 border border-white/5 relative mb-2 flex items-center justify-between px-3 py-1.5 transition-transform duration-300 ease-out group-hover:-translate-y-3 group-hover:-rotate-[2deg]">
                  <div className="flex items-center">
                    <img
                      src="/brightcove/tab-3-folder.d5f8ec52.svg"
                      alt="Folder"
                      className="w-4 h-4"
                    />
                    <span className="bg-white/20 ml-2 h-1 w-16 rounded-full" />
                  </div>
                  <span className="text-white/60 text-[11px] font-bold">16</span>
                </div>

                {/* 3. Folder Row 2 (Count 60, Active Highlight) */}
                <div className="relative mb-3 flex items-center justify-between px-3 py-1.5 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  <div className="flex items-center">
                    <img
                      src="/brightcove/tab-3-folder.d5f8ec52.svg"
                      alt="Folder"
                      className="z-10 w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:mr-1"
                    />
                    <span className="bg-white/40 z-10 ml-2 h-1 w-24 rounded-full" />
                    <span className="rounded-[8px] absolute inset-0 bg-white/15 border border-white/15 transition-all duration-300 group-hover:scale-y-105" />
                  </div>
                  <span className="text-white z-10 text-[11px] font-bold">60</span>
                </div>

                {/* 4. Video Card: Tilts slightly, Elevates, and Yellow Checkmark Appears on Hover without rightward drift */}
                <div className="rounded-[12px] bg-[#222226] border border-white/10 relative p-1.5 transition-all duration-300 ease-out group-hover:-translate-y-3 group-hover:rotate-[2deg] group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
                  <div className="relative overflow-hidden rounded-[8px]">
                    <video
                      src="/videos/bento-yellow.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="aspect-video h-full w-full object-cover"
                    />
                    <p className="text-[11px] text-white rounded-[6px] absolute right-1.5 bottom-1.5 bg-black/70 px-2 py-0.5 font-bold font-mono">
                      00:10
                    </p>

                    {/* Yellow Checkbox Badge that Scales In on Hover */}
                    <img
                      src="/brightcove/checkbox.d1a98313.svg"
                      alt="Selected checkbox"
                      className="absolute top-2 left-2 scale-0 transition-transform duration-300 ease-out group-hover:scale-100 drop-shadow-md z-10"
                    />
                  </div>

                  {/* Card Bottom Skeleton Lines */}
                  <div className="relative px-1 pt-2.5 pb-1 flex items-center justify-between">
                    <div className="flex flex-col gap-1.5">
                      <span className="bg-white/20 block h-1.5 w-24 rounded-full" />
                      <span className="bg-white/10 block h-1 w-14 rounded-full" />
                    </div>
                    <span className="text-white/40 text-sm">⋮</span>
                  </div>
                </div>

                {/* 5. Hand Cursor Icon that Floats Down into View on Hover */}
                <img
                  src="/brightcove/cursor.d567ed81.svg"
                  alt="Hover cursor"
                  className="pointer-events-none absolute right-4 bottom-2 opacity-0 translate-y-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-4 z-20 drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Card 3: Leverage analytics (Middle Right Card)           */}
          {/* ======================================================== */}
          <div
            onMouseEnter={() => setIsCard3Hovered(true)}
            onMouseLeave={() => setIsCard3Hovered(false)}
            className="relative bg-[#17171a] rounded-[18px] border border-white/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-purple-950/20 min-h-[320px]"
          >
            {/* Top-Left Scooped Corner Notch with Arrow */}
            <CornerNotch position="top-left" href="#analytics" notchColor="#231f47" />

            <div className="justify-between gap-6 sm:gap-8 lg:flex items-center h-full">
              {/* Heading & Subtitle */}
              <div className="shrink-0 content-end pt-8 sm:pt-0 pl-0 sm:pl-6 max-w-xs mb-6 lg:mb-0">
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white tracking-tight mb-3">
                  Leverage analytics
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#9e9e9e]">
                  Take advantage of powerful insights to make smart decisions and drive higher engagement.
                </p>
              </div>

              {/* Lottie Animation: Donut Chart + Connecting Lines + Video Previews */}
              <div className="relative -mr-4 sm:-mr-6 w-full sm:w-[340px] h-[280px] flex items-center justify-center shrink-0">
                <LottieCard
                  animationPath="/lottie/bento-analytics.json"
                  isHovered={isCard3Hovered}
                  className="w-full h-full scale-110"
                />
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Card 4: Monetize your content (Bottom Full Width Card)   */}
          {/* ======================================================== */}
          <div
            onMouseEnter={() => setIsCard4Hovered(true)}
            onMouseLeave={() => setIsCard4Hovered(false)}
            className="lg:col-span-2 relative bg-[#17171a] rounded-[18px] border border-white/5 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 overflow-hidden group transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-purple-950/20"
          >
            {/* Bottom-Left Scooped Corner Notch with Arrow */}
            <CornerNotch position="bottom-left" href="#monetize" notchColor="#131224" />

            {/* Heading & Subtitle */}
            <div className="max-w-md pb-4 lg:pb-0 pl-0 lg:pl-10 shrink-0">
              <h3 className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight mb-3">
                Monetize your content
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#9e9e9e]">
                Turn views into revenue with flexible monetization tools built to scale your success.
              </p>
            </div>

            {/* Lottie Animation: Monetization Stream Clips & Badges */}
            <div className="relative w-full lg:w-[65%] h-[260px] sm:h-[280px] flex items-center justify-center overflow-visible">
              <LottieCard
                animationPath="/lottie/bento-monetization.json"
                isHovered={isCard4Hovered}
                reverseSpeed={1.5}
                className="w-[200%] lg:w-full h-full scale-105 sm:scale-110 lg:scale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
