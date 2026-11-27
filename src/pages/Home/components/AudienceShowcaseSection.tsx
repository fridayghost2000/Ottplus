import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useAnimationControls, useInView } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface WorkSlide {
  id: string
  title: string
  description: string
  mobileImage: string
  circleImage: string
  href: string
  external?: boolean
}

const WORK_SLIDES: WorkSlide[] = [
  {
    id: 'avr-cinemax',
    title: 'AVR Cinemax',
    description:
      'Stream the latest Kannada blockbusters, South Indian cinema, original web series, documentaries, and live sports in HD on AVR Cinemax OTT. Available on Android, iOS, Web & Smart TV.',
    mobileImage: '/ottfast-images/avrcinemax-mobile.jpg',
    circleImage: '/ottfast-images/avrcinemax-logo.png',
    href: 'https://avrcinemax.com/home',
    external: true,
  },
  {
    id: 'filmmakers',
    title: 'Filmmakers & Creators',
    description:
      'Create your own personalized movie and video streaming platform with built-in SVOD, TVOD, and AVOD monetization to generate 5x more revenue.',
    mobileImage: '/sectors/filmmakers.jpg',
    circleImage: '/sectors/filmmakers.jpg',
    href: '/industries/filmmakers',
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Education',
    description:
      'Engage your corporate workforce or enrolled students with secure live broadcasts, on-demand training libraries, and DRM-protected channels.',
    mobileImage: '/sectors/enterprise.jpg',
    circleImage: '/sectors/enterprise.jpg',
    href: '/industries/enterprise',
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

// Left slides upward from below (+280 -> 0); Right slides downward from above (-280 -> 0)
const makeContainerVariants = (
  enterDelay: number,
  enterDuration: number,
  invertDirection = false,
) => {
  const sign = invertDirection ? -1 : 1
  return {
    enter: (dir: number) => ({
      y: (dir > 0 ? 280 : -280) * sign,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: enterDuration, delay: enterDelay, ease: EASE },
    },
    exit: (dir: number) => ({
      y: (dir > 0 ? -280 : 280) * sign,
      opacity: 0,
      transition: { duration: 0.55, delay: 0, ease: EASE },
    }),
  }
}

const leftVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? 22 : -22,
    scale: 0.92,
    opacity: 0,
    filter: 'blur(10px)',
    zIndex: 1,
  }),
  center: {
    y: 0,
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    zIndex: 2,
    transition: { duration: 1.05, ease: EASE },
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -22 : 22,
    scale: 1.04,
    opacity: 0,
    filter: 'blur(10px)',
    zIndex: 3,
    transition: { duration: 0.95, ease: EASE },
  }),
}
const rightVariants = makeContainerVariants(0.16, 0.78, false)

const OSCAR_EASE = [0.76, 0, 0.24, 1] as const

const screenSlideVariants = {
  enter: {
    clipPath: 'circle(0% at 50% 50%)',
    scale: 1.06,
    opacity: 1,
    zIndex: 2,
  },
  center: {
    clipPath: 'circle(140% at 50% 50%)',
    scale: 1,
    opacity: 1,
    zIndex: 2,
    transition: { duration: 1.0, ease: OSCAR_EASE },
  },
  exit: {
    clipPath: 'circle(140% at 50% 50%)',
    scale: 0.96,
    opacity: 0,
    filter: 'brightness(0.55)',
    zIndex: 1,
    transition: { duration: 0.9, ease: OSCAR_EASE },
  },
}

export function AudienceShowcaseSection() {
  const cardRef = useRef<HTMLDivElement>(null)
  const dispMapRef = useRef<SVGFEDisplacementMapElement>(null)
  const isFirstRender = useRef(true)
  const phoneControls = useAnimationControls()
  const isInView = useInView(cardRef, { once: true, amount: 0.25 })
  const [[activeIdx, direction], setSlide] = useState<[number, number]>([0, 1])
  const active = WORK_SLIDES[activeIdx]

  // Drive SVG liquid water-ripple displacement wave + subtle phone frame zoom pulse on slide change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    phoneControls.start({
      scale: [1, 1.045, 1],
      transition: { duration: 0.42, times: [0, 0.35, 1], ease: [0.22, 1, 0.36, 1] },
    })

    const dispMap = dispMapRef.current
    let rafId = 0
    const start = performance.now()
    const duration = 950

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // Smooth bell-shaped ripple wave: swells fast on drop impact, then settles cleanly to 0
      const wave = Math.sin(t * Math.PI) * (1 - t * 0.35)
      if (dispMap) {
        dispMap.setAttribute('scale', (wave * 44).toFixed(2))
      }
      if (t < 1) {
        rafId = window.requestAnimationFrame(tick)
      } else if (dispMap) {
        dispMap.setAttribute('scale', '0')
      }
    }

    rafId = window.requestAnimationFrame(tick)
    return () => {
      window.cancelAnimationFrame(rafId)
      if (dispMap) dispMap.setAttribute('scale', '0')
    }
  }, [activeIdx, phoneControls])

  const goTo = (nextIdx: number) => {
    if (nextIdx === activeIdx) return
    const dir = nextIdx > activeIdx ? 1 : -1
    setSlide([nextIdx, dir])
  }

  const handlePrev = () => {
    const nextIdx = (activeIdx - 1 + WORK_SLIDES.length) % WORK_SLIDES.length
    setSlide([nextIdx, -1])
  }

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % WORK_SLIDES.length
    setSlide([nextIdx, 1])
  }

  return (
    <section className="relative z-10 w-full bg-black pt-8 pb-16 lg:pt-12 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1405px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
          <h2
            className="text-[32px] sm:text-[42px] lg:text-[49.6px] leading-[1.2] tracking-[-1.2px] text-[#faf9f5] font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Our Work
          </h2>
        </div>

        <div
          ref={cardRef}
          className="relative rounded-[16px] bg-[#121215] border border-white/[0.06] px-6 sm:px-10 lg:px-14 py-8 lg:py-0 overflow-visible"
        >
          <div className="relative flex items-center gap-5 sm:gap-6 lg:min-h-[380px]">
            {/* Fixed Left Vertical Dot Indicator */}
            <div className="flex flex-col items-center gap-2.5 shrink-0 z-10">
              {WORK_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Select ${slide.title}`}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIdx
                      ? 'size-2 bg-[#7C3AED] shadow-[0_0_12px_rgba(124,58,237,0.85)]'
                      : 'size-1.5 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* 3-Column Layout */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left: Full-Card-Height Masked Column (logo travels from container bottom to top) */}
              <div className="lg:col-span-4 h-[210px] lg:h-[380px] flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={active.id}
                    custom={direction}
                    variants={leftVariants}
                    initial="enter"
                    animate={isInView ? 'center' : 'enter'}
                    exit="exit"
                    className="size-36 sm:size-44 rounded-full bg-black border border-white/15 p-0 flex items-center justify-center shrink-0 overflow-hidden shadow-[0_0_28px_rgba(245,158,11,0.14)] will-change-transform"
                  >
                    <img
                      src={active.circleImage}
                      alt={active.title}
                      className={`w-full h-full ${
                        active.external ? 'object-contain' : 'object-cover rounded-full'
                      }`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Center: Anchored Flagship Mobile Hardware Mockup Breaking Out of Container */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <motion.div
                  animate={phoneControls}
                  className="relative z-20 lg:-my-14 w-[240px] sm:w-[265px] lg:w-[285px] rounded-[40px] border-[5px] border-[#2b2b33] ring-1 ring-white/15 bg-[#08080b] p-1 shadow-[0_32px_90px_rgba(0,0,0,0.95)] will-change-transform"
                >
                  {/* Left Side Volume Buttons */}
                  <div className="hidden sm:block absolute -left-[7px] top-24 h-8 w-[3px] rounded-l-sm bg-[#34343e]" />
                  <div className="hidden sm:block absolute -left-[7px] top-36 h-11 w-[3px] rounded-l-sm bg-[#34343e]" />
                  {/* Right Side Power Button */}
                  <div className="hidden sm:block absolute -right-[7px] top-28 h-14 w-[3px] rounded-r-sm bg-[#34343e]" />

                  {/* Full-Bleed Edge-to-Edge Phone Screen with Water-Drop Ripple Filter */}
                  <div
                    style={{ perspective: '900px' }}
                    className="relative aspect-[9/19.5] w-full rounded-[33px] overflow-hidden bg-black"
                  >
                    {/* Hidden SVG Liquid Ripple Displacement Filter */}
                    <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                      <defs>
                        <filter id="phone-water-ripple" x="-15%" y="-15%" width="130%" height="130%">
                          <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.018 0.025"
                            numOctaves="2"
                            seed="3"
                            result="noise"
                          />
                          <feDisplacementMap
                            ref={dispMapRef}
                            in="SourceGraphic"
                            in2="noise"
                            scale="0"
                            xChannelSelector="R"
                            yChannelSelector="G"
                          />
                        </filter>
                      </defs>
                    </svg>

                    {/* Overlaid Top Dynamic Island with Camera Lens */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 h-4 w-20 rounded-full bg-black border border-white/10 flex items-center justify-end pr-2 pointer-events-none">
                      <span className="size-1.5 rounded-full bg-[#1e1b4b] ring-1 ring-indigo-400/30" />
                    </div>

                    <div
                      className="absolute inset-0"
                      style={{ filter: 'url(#phone-water-ripple)' }}
                    >
                      <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.img
                          key={active.id}
                          src={active.mobileImage}
                          alt={active.title}
                          custom={direction}
                          variants={screenSlideVariants}
                          initial="enter"
                          animate={isInView ? 'center' : 'enter'}
                          exit="exit"
                          className="absolute inset-0 w-full h-full object-cover object-center will-change-transform rounded-[33px]"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Expanding Water-Drop Ripple Ring Overlay (only on slide change) */}
                    <AnimatePresence initial={false} mode="popLayout">
                      <motion.div
                        key={`ripple-${active.id}`}
                        initial={{ scale: 0.05, opacity: 0.75 }}
                        animate={{ scale: 3.4, opacity: 0 }}
                        transition={{ duration: 0.95, ease: OSCAR_EASE }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-36 rounded-full border-2 border-white/45 shadow-[0_0_24px_rgba(164,138,251,0.55)] pointer-events-none z-10"
                      />
                    </AnimatePresence>

                    {/* Subtle Glass Screen Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07] pointer-events-none z-10" />

                    {/* Overlaid Bottom Home Indicator Bar */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 h-1 w-24 rounded-full bg-white/30 pointer-events-none" />
                  </div>
                </motion.div>
              </div>

              {/* Right: Full-Card-Height Masked Column (text travels from container bottom to top) */}
              <div className="lg:col-span-4 h-[210px] lg:h-[380px] flex items-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={active.id}
                    custom={direction}
                    variants={rightVariants}
                    initial="enter"
                    animate={isInView ? 'center' : 'enter'}
                    exit="exit"
                    className="w-full flex flex-col justify-center gap-6 will-change-transform"
                  >
                    <p className="text-[14.5px] sm:text-[15.5px] leading-[24px] text-white/80 font-light">
                      {active.description}
                    </p>

                    <div className="flex justify-end">
                      {active.external ? (
                        <a
                          href={active.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white hover:text-[#A48AFB] transition-colors"
                        >
                          <span>Learn more</span>
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : (
                        <Link
                          to={active.href}
                          className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white hover:text-[#A48AFB] transition-colors"
                        >
                          <span>Learn more</span>
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Bottom Controls: Shifted up cleanly into bottom-right corner */}
          <div className="mt-4 lg:mt-0 lg:absolute lg:bottom-8 lg:right-14 flex items-center justify-end gap-2 z-20">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="size-10 rounded-[8px] bg-[#0a0a0d] border border-white/10 hover:border-white/45 text-white/75 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="size-10 rounded-[8px] bg-[#0a0a0d] border border-white/45 hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
