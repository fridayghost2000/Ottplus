import { useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Globe, Layers, MonitorPlay, Radio, Zap } from 'lucide-react'

const BROADCAST_PILLARS = [
  {
    icon: Layers,
    title: '100% Modifiable',
    description:
      'Customize every feature for a targeted audience with an unbeatable UI/UX experience to publish, distribute, and engage your content.',
  },
  {
    icon: MonitorPlay,
    title: 'Delivering and Distributing High Definition Video',
    description:
      'Distribute compelling material in high quality while you’re on the go without any effort.',
  },
  {
    icon: Zap,
    title: 'Player with lightning speed',
    description:
      'Use the HLS video player that our experts specifically created for you, or any other player of your choosing, to improve your broadcasting experience.',
  },
  {
    icon: Globe,
    title: 'Live & On-Demand Broadcasting',
    description:
      'Forget about using staff and large equipment to stream live. Broadcast flawlessly high-quality live content to mobile devices.',
  },
]

function Glossy3DVisual() {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[660px] lg:h-[660px] flex items-center justify-center select-none pointer-events-none">
      {/* Photorealistic 3D Brushed-Glass Sculpture (transparent PNG) */}
      <img
        src="/ottfast-images/broadcast-3d-sculpture.png"
        alt="OTTFast Modern Video Broadcasting 3D Visual"
        className="relative z-10 w-full h-full object-contain"
      />
    </div>
  )
}

export function ScrollRevealSection() {
  const stageRef = useRef<HTMLDivElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start 0.45', 'end end'],
  })

  const { scrollYProgress: sheetScrollProgress } = useScroll({
    target: sheetRef,
    offset: ['start end', 'start 0.25'],
  })

  const smoothSheetProgress = useSpring(sheetScrollProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.35,
    restDelta: 0.001,
  })

  const sheetWidth = useTransform(smoothSheetProgress, [0, 1], ['90%', '100%'])
  const sheetRadius = useTransform(smoothSheetProgress, [0, 1], ['16px', '0px'])

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 25,
    mass: 0.45,
    restDelta: 0.001,
  })

  // Balanced scroll-driven zoom: starts right below the Audience card under "Filmmakers & Creators"
  const visualScale = useTransform(smoothProgress, [0, 0.62, 1], [0.3, 1.08, 1.14])
  const visualRotate = useTransform(smoothProgress, [0, 0.62, 1], [-10, 0, 4])
  const visualRotateX = useTransform(smoothProgress, [0, 0.62, 1], [12, 0, -5])
  const visualRotateY = useTransform(smoothProgress, [0, 0.62, 1], [-14, 3, 8])
  const visualY = useTransform(smoothProgress, [0, 0.58, 1], [-260, 0, -10])

  // Pure black at start (0 purple light), blooming into deep PremierCS violet-purple on scroll
  const purpleBgOpacity = useTransform(smoothProgress, [0, 0.18, 0.55, 0.9], [0, 0.12, 0.92, 1])

  // Headline reveals cleanly over the expanded 3D visual
  const headlineOpacity = useTransform(smoothProgress, [0.36, 0.62, 1], [0, 1, 1])
  const headlineY = useTransform(smoothProgress, [0.36, 0.62, 1], [28, 0, 0])
  const headlineScale = useTransform(smoothProgress, [0.36, 0.62], [0.96, 1])

  return (
    <section className="relative w-full bg-black">
      {/* Stage 1: Sticky Pinned Scroll-Driven 3D Zoom (matching PremierCS) */}
      {prefersReducedMotion ? (
        <div className="relative w-full py-20 lg:py-28 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden bg-[#21084a]">
          <Glossy3DVisual />
          <div className="relative z-20 -mt-20 text-center max-w-4xl mx-auto">
            <h2
              className="text-[40px] sm:text-[62px] lg:text-[84px] leading-[1.08] tracking-[-0.03em] text-white font-light"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              How we’re different
            </h2>
          </div>
        </div>
      ) : (
        <div ref={stageRef} className="relative w-full h-[155vh] md:h-[180vh]">
          <div
            style={{ perspective: '1200px' }}
            className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-8 bg-black"
          >
            {/* Deep Violet-Purple Radial Backdrop blooming during zoom */}
            <motion.div
              aria-hidden="true"
              style={{ opacity: purpleBgOpacity }}
              className="absolute inset-0 pointer-events-none"
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    'radial-gradient(ellipse 90% 80% at 50% 50%, #2d0b63 0%, #19053a 55%, #070112 100%)',
                }}
              />
            </motion.div>

            {/* Centered Expanding 3D Sculpture */}
            <motion.div
              style={{
                scale: visualScale,
                rotateZ: visualRotate,
                rotateX: visualRotateX,
                rotateY: visualRotateY,
                y: visualY,
                transformStyle: 'preserve-3d',
              }}
              className="relative z-10 flex items-center justify-center will-change-transform"
            >
              <Glossy3DVisual />
            </motion.div>

            {/* Centered Editorial Headline revealing over the expanded 3D visual */}
            <motion.div
              style={{
                opacity: headlineOpacity,
                y: headlineY,
                scale: headlineScale,
              }}
              className="absolute inset-x-0 z-20 flex flex-col items-center text-center px-4 pointer-events-none"
            >
              <h2
                className="text-[40px] sm:text-[62px] lg:text-[84px] leading-[1.08] tracking-[-0.03em] text-white font-light max-w-5xl drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                How we’re different
              </h2>
            </motion.div>
          </div>
        </div>
      )}

      {/* Stage 2: Clean Flat Black Editorial Sheet (starts at 90% width, smoothly expands to 100% on scroll) */}
      <motion.div
        ref={sheetRef}
        style={{
          width: prefersReducedMotion ? '100%' : sheetWidth,
          borderTopLeftRadius: prefersReducedMotion ? '0px' : sheetRadius,
          borderTopRightRadius: prefersReducedMotion ? '0px' : sheetRadius,
        }}
        className="relative z-30 -mt-[16vh] mx-auto bg-black py-20 lg:py-28 px-4 sm:px-8 overflow-hidden"
      >
        <div className="max-w-[1160px] mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-5">
            <Radio className="size-5 text-white/80" strokeWidth={1.6} />
            <p className="text-[18px] sm:text-[22px] leading-[1.45] text-white font-normal">
              PowerStream and Captivate feature powerful live video broadcast software for all
              audiences. Streaming Video On Demand Solutions that can be created to operate on a
              live/on-demand basis, or both separately and simultaneously, are used to broadcast
              video.
            </p>
          </div>

          <div
            className="divide-y divide-white/15 border-t border-b border-white/15 max-w-[1160px] mx-auto"
            onMouseLeave={() => setHoveredRow(null)}
          >
            {BROADCAST_PILLARS.map((item, idx) => {
              const Icon = item.icon
              const isHovered = hoveredRow === idx
              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setHoveredRow(idx)}
                  className="group relative py-7 lg:py-8 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center cursor-pointer overflow-hidden"
                >
                  {/* PremierCS gliding purple ambient glow on row hover */}
                  {isHovered && (
                    <motion.div
                      layoutId="broadcast-row-glow"
                      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                      aria-hidden="true"
                      className="absolute inset-0 pointer-events-none z-0"
                      style={{
                        background:
                          'radial-gradient(ellipse 68% 120% at 32% 50%, rgba(109, 40, 217, 0.36) 0%, rgba(76, 29, 149, 0.16) 52%, transparent 82%)',
                      }}
                    />
                  )}

                  <div className="relative z-10 md:col-span-6 flex items-center gap-5 sm:gap-7">
                    <div
                      className={`size-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#6D28D9] text-white shadow-[0_0_24px_rgba(124,58,237,0.65)] scale-105'
                          : 'bg-transparent text-white/45'
                      }`}
                    >
                      <Icon className="size-5" strokeWidth={1.6} />
                    </div>
                    <h3
                      className={`text-[21px] sm:text-[26px] lg:text-[28px] leading-[1.2] font-light tracking-[-0.015em] transition-all duration-300 ${
                        isHovered ? 'text-white translate-x-1' : 'text-white/90'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className={`relative z-10 md:col-span-6 text-[14px] sm:text-[15px] leading-[23px] md:pl-8 transition-colors duration-300 ${
                      isHovered ? 'text-white/95' : 'text-white/65'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
