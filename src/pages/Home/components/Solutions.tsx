import { useState, useEffect, useRef, type TransitionEvent } from 'react'
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button'

interface SolutionItem {
  title: string
  subtitle: string
  description: string
  bgImage: string
}

const solutionsList: SolutionItem[] = [
  {
    title: 'Media',
    subtitle: 'Studio',
    description:
      'Content monetization to fit any brand or company with advertising, subscription, and transactional video on demand offerings.',
    bgImage: '/figma-assets/s4_sol1.png',
  },
  {
    title: 'Communications',
    subtitle: 'Studio',
    description:
      'Transform your enterprise wide communication by incorporating videos into your strategy.',
    bgImage: '/figma-assets/s4_sol2.png',
  },
  {
    title: 'Marketing',
    subtitle: 'Studio',
    description:
      'All the tools you need to power your brand through video. Control your viewer experience, edit videos with precision, and maximize reach.',
    bgImage: '/figma-assets/s4_sol3.png',
  },
  {
    title: 'Beacon',
    subtitle: 'Studio',
    description:
      'Quickly build and launch compelling app experiences on all major platforms and devices.',
    bgImage: '/figma-assets/s4_sol4.png',
  },
  {
    title: 'Zencoder',
    subtitle: 'Studio',
    description:
      'Extremely fast transcoding, industry-leading reliability, unmatched input file compatibility, and output support for all connected devices.',
    bgImage: '/figma-assets/s4_sol5.png',
  },
]

const CLONE_COUNT = 2
const loopedSolutions: SolutionItem[] = [
  ...solutionsList.slice(-CLONE_COUNT),
  ...solutionsList,
  ...solutionsList.slice(0, CLONE_COUNT),
]

export function Solutions() {
  const [trackIndex, setTrackIndex] = useState(CLONE_COUNT)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
  const [isDesktop, setIsDesktop] = useState(true)
  const isTransitioningRef = useRef(false)
  const fallbackTimerRef = useRef<number | null>(null)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => {
      window.removeEventListener('resize', checkDesktop)
      if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current)
    }
  }, [])

  const startSlide = (delta: number) => {
    if (isTransitioningRef.current) return
    isTransitioningRef.current = true
    setIsTransitionEnabled(true)
    setTrackIndex((prev) => prev + delta)

    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current)
    fallbackTimerRef.current = window.setTimeout(() => {
      isTransitioningRef.current = false
    }, 550)
  }

  const handlePrev = () => startSlide(-1)
  const handleNext = () => startSlide(1)

  const handleTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return

    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current)
      fallbackTimerRef.current = null
    }

    const totalReal = solutionsList.length
    if (trackIndex >= CLONE_COUNT + totalReal || trackIndex <= 0) {
      const resetTo =
        trackIndex >= CLONE_COUNT + totalReal ? trackIndex - totalReal : trackIndex + totalReal
      setIsTransitionEnabled(false)
      setTrackIndex(resetTo)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitionEnabled(true)
          isTransitioningRef.current = false
        })
      })
      return
    }

    isTransitioningRef.current = false
  }

  return (
    <section id="solutions" className="relative w-full bg-black py-20 lg:py-28 overflow-hidden">
      {/* Inverted Border Scoop Styles for Solutions Card Bottom-Right Notch */}
      <style>{`
        .bc-sol-notch-br {
          background-color: #000000;
        }
        .bc-sol-notch-br::before {
          content: "";
          position: absolute;
          width: 48px;
          height: 48px;
          bottom: 0;
          left: -48px;
          border-radius: 50%;
          box-shadow: 24px 24px 0 0 #000000;
          pointer-events: none;
        }
        .bc-sol-notch-br::after {
          content: "";
          position: absolute;
          width: 48px;
          height: 48px;
          top: -48px;
          right: 0;
          border-radius: 50%;
          box-shadow: 24px 24px 0 0 #000000;
          pointer-events: none;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-14 xl:gap-20">
          {/* Left Intro Column with Single-Line 'Our solutions' */}
          <div className="w-full lg:w-[380px] xl:w-[440px] shrink-0 flex flex-col items-start gap-7 pt-4">
            <h2
              className="text-[44px] sm:text-[54px] lg:text-[62px] leading-tight tracking-[-1.5px] text-[#faf9f5] whitespace-nowrap"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Our solutions
            </h2>

            <p className="text-[16px] sm:text-[18px] leading-[28px] text-white/70 max-w-[380px]">
              We offer different solutions to meet different needs. Explore all the options to find your ideal pack.
            </p>

            <div className="pt-2">
              <LiquidMetalButton
                label="Contact Sales"
                onClick={() => {
                  const el = document.getElementById('contact')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
            </div>
          </div>

          {/* Right Cards Carousel - Exactly 2 Large Prominent Cards like Figma */}
          <div className="w-full lg:w-[940px] xl:w-[1020px] 2xl:w-[1080px] shrink-0 flex flex-col items-center gap-8">
            {/* Viewport masking container strictly showing 2 cards side-by-side */}
            <div className="w-full overflow-hidden pt-1">
              <div
                onTransitionEnd={handleTransitionEnd}
                className={`flex gap-7 ${
                  isTransitionEnabled
                    ? 'transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]'
                    : ''
                }`}
                style={{
                  transform: isDesktop
                    ? `translateX(calc(-${trackIndex} * (50% + 14px)))`
                    : `translateX(calc(-${trackIndex} * (100% + 28px)))`,
                }}
              >
                {loopedSolutions.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-full lg:w-[calc((100%-1.75rem)/2)] h-[540px] sm:h-[600px] lg:h-[640px] xl:h-[660px] rounded-[26px] overflow-hidden shrink-0 border border-white/10 flex flex-col justify-end p-8 sm:p-10 group shadow-2xl transition-all duration-300"
                  >
                    {/* Background Image Poster */}
                    <img
                      src={item.bgImage}
                      alt={`${item.title} ${item.subtitle}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Dark Gradient Overlay for non-hovered state */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                    {/* Brightcove Vibrant Yellow Hover Background Overlay */}
                    <div className="bg-[#f3c12c] absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10" />

                    {/* Permanent Scooped Bottom-Right Notch with Arrow (matching Figma & Brightcove) */}
                    <div className="bc-sol-notch-br absolute -right-1 -bottom-1 flex size-16 items-center justify-center rounded-tl-[24px] z-30 transition-all duration-200">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6 transition-all duration-300 stroke-white/60 group-hover:stroke-[#f3c12c] group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <path
                          d="M9.33398 22.6693L22.6673 9.33594"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.33398 9.33594H22.6673V22.6693"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Card Content (Large Bold Text like Figma) */}
                    <div className="relative z-20 space-y-3 pr-8 pb-1">
                      <div className="flex flex-col">
                        <h3 className="text-[34px] sm:text-[40px] lg:text-[44px] font-bold text-white group-hover:text-[#101010] transition-colors duration-200 leading-[1.08] tracking-tight">
                          {item.title}
                        </h3>
                        <div className="flex items-baseline gap-1.5">
                          <h3 className="text-[34px] sm:text-[40px] lg:text-[44px] font-bold text-white group-hover:text-[#101010] transition-colors duration-200 leading-[1.08] tracking-tight">
                            {item.subtitle}
                          </h3>
                          <span className="text-[12px] font-bold text-white/60 group-hover:text-black/60 transition-colors duration-200 uppercase">
                            TM
                          </span>
                        </div>
                      </div>

                      <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed text-white/80 group-hover:text-[#101010] transition-colors duration-200 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Centered Prev / Next Arrows Under the Cards like Figma */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer border border-white/10"
                aria-label="Previous solution"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer border border-white/10"
                aria-label="Next solution"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
