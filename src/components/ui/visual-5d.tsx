import { useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { DEVICE_LOGOS } from '@/data/products'

interface Visual5DProps {
  src: string
  alt: string
  glowColor?: string
  secondarySrc?: string
  className?: string
  maxHeightClass?: string
  blendScreen?: boolean
  spaceFloat?: boolean
}

/**
 * Interactive 5D floating visual with mouse-tracked 3D perspective tilt,
 * continuous levitation, volumetric glow, and optional parallax secondary layer.
 */
export function Visual5D({
  src,
  alt,
  glowColor = 'rgba(164, 138, 251, 0.35)',
  secondarySrc,
  className = '',
  maxHeightClass = 'max-h-[420px]',
  blendScreen = false,
  spaceFloat = false,
}: Visual5DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 180,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 180,
    damping: 20,
  })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className={`relative flex items-center justify-center select-none ${className}`}
    >
      {/* Volumetric 5D Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-8 rounded-full blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
        }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={
          spaceFloat
            ? {
                y: [0, -14, 4, -8, 0],
                x: [0, 6, -5, 3, 0],
                rotateZ: [0, 1.8, -1.5, 0.8, 0],
                scale: [1, 1.04, 0.99, 1.02, 1],
              }
            : { y: [0, -10, 0], scale: [1, 1.03, 1] }
        }
        whileHover={{ scale: 1.08 }}
        transition={
          spaceFloat
            ? {
                duration: 7.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : {
                y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
              }
        }
        className="relative z-10 w-full flex items-center justify-center"
      >
        <img
          src={src}
          alt={alt}
          style={{
            transform: 'translateZ(35px)',
            filter: `drop-shadow(0 22px 45px ${glowColor})`,
          }}
          className={`w-full ${maxHeightClass} h-auto object-contain mx-auto ${
            blendScreen ? 'mix-blend-screen' : ''
          }`}
        />

        {secondarySrc && (
          <motion.img
            src={secondarySrc}
            alt=""
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            style={{
              transform: 'translateZ(75px)',
              filter: `drop-shadow(0 18px 30px ${glowColor})`,
            }}
            className="hidden sm:block absolute -bottom-4 -right-2 w-36 md:w-44 h-auto object-contain pointer-events-none rounded-xl"
          />
        )}
      </motion.div>
    </div>
  )
}

/**
 * Photorealistic 5D floating HTML5 & HLS Video Player stage with real looping video,
 * mouse-tracked 3D perspective tilt, and floating glassmorphic player HUD.
 */
export function HlsPlayer5D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [9, -9]), {
    stiffness: 180,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-11, 11]), {
    stiffness: 180,
    damping: 20,
  })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className="relative w-full py-4 select-none"
    >
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-6 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.32), transparent 72%)',
        }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-full max-w-[560px] mx-auto"
      >
        {/* 5D Space-Black Laptop Lid & Screen */}
        <div
          style={{ transform: 'translateZ(24px)' }}
          className="relative rounded-t-[18px] bg-gradient-to-b from-[#2a2d36] via-[#17191f] to-[#0e0f13] p-[9px] sm:p-[11px] border border-white/20 shadow-[0_24px_60px_-15px_rgba(45,212,191,0.32)]"
        >
          {/* Top Camera Dot */}
          <div className="mx-auto mb-1.5 size-1.5 rounded-full bg-[#2e323d] ring-1 ring-white/15" />

          {/* Laptop Display */}
          <div className="relative aspect-[16/10] w-full rounded-[8px] overflow-hidden bg-black ring-1 ring-white/10">
            <video
              src="/videos/bento-green.mp4"
              poster="/sectors/filmmakers.jpg"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Subtle Glass Screen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.09] pointer-events-none" />
          </div>
        </div>

        {/* Laptop Hinge & Lower Metallic Base */}
        <div
          style={{ transform: 'translateZ(36px) rotateX(65deg)', transformOrigin: 'top center' }}
          className="relative mx-auto w-[108%] -ml-[4%] h-6 sm:h-7 rounded-b-[16px] bg-gradient-to-b from-[#343844] via-[#1c1f26] to-[#0a0b0e] border-t border-white/25 shadow-[0_18px_35px_rgba(0,0,0,0.85)]"
        >
          {/* Thumb Notch */}
          <div className="mx-auto w-20 h-1.5 rounded-b-full bg-[#0d0e12] border-x border-b border-white/15" />
        </div>
      </motion.div>
    </div>
  )
}

interface DeviceLogos5DProps {
  title?: string
  filterNames?: string[]
}

/**
 * Premiercs-inspired continuous horizontal marquee of supported device ecosystems.
 */
export function DeviceLogos5D({
  title = 'Stream Across Every Screen',
  filterNames,
}: DeviceLogos5DProps) {
  const items = filterNames
    ? DEVICE_LOGOS.filter((d) => filterNames.includes(d.name))
    : DEVICE_LOGOS

  const baseItems = items.length < 6 ? [...items, ...items] : items
  const marqueeItems = [...baseItems, ...baseItems]

  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-8 border-t border-white/10 bg-black overflow-hidden">
      <div className="max-w-[1405px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <h2
            className="text-[28px] sm:text-[36px] lg:text-[40px] text-[#faf9f5] font-normal tracking-[-0.02em]"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            {title}
          </h2>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((device, idx) => (
              <div
                key={`${device.name}-${idx}`}
                className="group flex flex-col items-center justify-center gap-3 px-8 sm:px-12 lg:px-14 py-2 shrink-0 cursor-pointer select-none"
              >
                <div className="relative flex items-center justify-center transition-all duration-300 opacity-55 grayscale brightness-125 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105">
                  <div
                    role="img"
                    aria-label={device.name}
                    className="h-9 w-24"
                    style={{
                      background: device.gradient,
                      WebkitMaskImage: `url(${device.src})`,
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskImage: `url(${device.src})`,
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      maskSize: 'contain',
                    }}
                  />
                </div>
                <span className="text-[12px] font-normal tracking-wide text-white/45 group-hover:text-white/90 text-center leading-tight transition-colors duration-300">
                  {device.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
