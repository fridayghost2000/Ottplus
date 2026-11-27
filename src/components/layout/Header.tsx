import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BarChart2,
  BookOpen,
  Building2,
  Cast,
  ChevronDown,
  Cpu,
  CreditCard,
  Dumbbell,
  Film,
  FolderOpen,
  Globe,
  GraduationCap,
  Landmark,
  Lightbulb,
  Megaphone,
  Menu,
  MonitorPlay,
  Newspaper,
  Radio,
  ShieldCheck,
  Smartphone,
  Terminal,
  Trophy,
  Tv,
  Users,
  Video,
  X,
} from 'lucide-react'

interface ProductItem {
  title: string
  description?: string
  href: string
  icon: ReactNode
}

interface ProductSection {
  heading: string
  items: ProductItem[]
}

const ICON_CLASS = 'size-[17px]'

const PRODUCT_SECTIONS: ProductSection[] = [
  {
    heading: 'OTT PLATFORM',
    items: [
      {
        title: 'White-Label OTT Platform',
        description: 'Turnkey VoD & live streaming',
        href: '/products/ott-platform',
        icon: <Video className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Video Hosting & CMS',
        description: 'Upload, edit, schedule & manage',
        href: '/products/video-hosting-cms',
        icon: <FolderOpen className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'HLS Media Player',
        description: 'Buffer-free playback across devices',
        href: '/products/media-player',
        icon: <MonitorPlay className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Video Transcoding',
        description: 'Adaptive multi-resolution encoding',
        href: '/products/video-transcoding',
        icon: <Cpu className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Live & Conferencing',
        description: 'Broadcast & low-lag video chats',
        href: '/products/live-conferencing',
        icon: <Radio className={ICON_CLASS} strokeWidth={1.65} />,
      },
    ],
  },
  {
    heading: 'APPS & TV',
    items: [
      {
        title: 'Web & Mobile Apps',
        description: 'iOS, Android & web portals',
        href: '/products/web-mobile-apps',
        icon: <Smartphone className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Smart TV Apps',
        description: 'Apple TV, Fire TV, Roku, Tizen & webOS',
        href: '/products/smart-tv',
        icon: <Tv className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'HbbTV',
        description: 'Hybrid Broadcast Broadband TV',
        href: '/products/hbbtv',
        icon: <Cast className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Monetization & Payments',
        description: 'SVOD, TVOD, AVOD & in-app purchases',
        href: '/products/monetization',
        icon: <CreditCard className={ICON_CLASS} strokeWidth={1.65} />,
      },
    ],
  },
  {
    heading: 'IPTV & INFRASTRUCTURE',
    items: [
      {
        title: 'IPTV Solutions',
        description: 'Hotels, operators, MSOs, ISPs & gov',
        href: '/products/iptv',
        icon: <Building2 className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'DRM & Security',
        description: 'Enterprise-grade content protection',
        href: '/products/drm-security',
        icon: <ShieldCheck className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'AI & Analytics',
        description: 'Smart recommendations & ROI insights',
        href: '/products/ai-analytics',
        icon: <BarChart2 className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Global CDN',
        description: 'Fast, lag-free multi-device delivery',
        href: '/products/global-cdn',
        icon: <Globe className={ICON_CLASS} strokeWidth={1.65} />,
      },
    ],
  },
]

const INDUSTRY_SECTIONS: ProductSection[] = [
  {
    heading: 'INDUSTRIES',
    items: [
      {
        title: 'Broadcast & Media',
        href: '/industries/broadcast-media',
        icon: <Tv className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Education & e-Learning',
        href: '/industries/education-e-learning',
        icon: <GraduationCap className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Filmmakers',
        href: '/industries/filmmakers',
        icon: <Film className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Enterprise',
        href: '/industries/enterprise',
        icon: <Building2 className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Fitness',
        href: '/industries/fitness',
        icon: <Dumbbell className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Sports',
        href: '/industries/sports',
        icon: <Trophy className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Religious',
        href: '/industries/religious',
        icon: <Landmark className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Creators',
        href: '/industries/youtubers',
        icon: <Video className={ICON_CLASS} strokeWidth={1.65} />,
      },
    ],
  },
]

const RESOURCE_SECTIONS: ProductSection[] = [
  {
    heading: '',
    items: [
      {
        title: 'Docs',
        href: '#resources',
        icon: <Terminal className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Why OTTFast',
        href: '#resources',
        icon: <Lightbulb className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Blog',
        href: '#resources',
        icon: <Newspaper className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Learn',
        href: '#resources',
        icon: <Megaphone className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Tutorials',
        href: '#resources',
        icon: <Users className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Case Studies',
        href: '#resources',
        icon: <BookOpen className={ICON_CLASS} strokeWidth={1.65} />,
      },
    ],
  },
]

type DesktopMenu = 'products' | 'industries' | 'resources' | null

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<DesktopMenu>(null)
  const [mobileExpanded, setMobileExpanded] = useState<DesktopMenu>(null)
  const [resourcesLeft, setResourcesLeft] = useState<number>(0)
  const headerRef = useRef<HTMLElement>(null)
  const resourcesTriggerRef = useRef<HTMLDivElement>(null)
  const closeTimerRef = useRef<number | null>(null)

  const syncResourcesPosition = () => {
    if (resourcesTriggerRef.current) {
      setResourcesLeft(Math.round(resourcesTriggerRef.current.getBoundingClientRect().left))
    }
  }

  const openMenu = (menu: Exclude<DesktopMenu, null>) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    if (menu === 'resources') syncResourcesPosition()
    setActiveMenu(menu)
  }

  const scheduleCloseMenu = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null)
    }, 180)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', syncResourcesPosition)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', syncResourcesPosition)
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 h-[65.1px] bg-[#080808]/80 backdrop-blur-[16.5px] border-b border-[#252833] font-sans"
    >
      <div className="relative max-w-[1587.25px] h-full mx-auto px-6 sm:px-12 lg:px-[132.3px] flex items-center justify-between">
        {/* Left: OTTFast Brand Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="OTTFast"
            className="h-[38px] w-auto object-contain hover:opacity-95 transition-opacity"
          />
        </Link>

        {/* Center: Navigation Links matching Figma node 2:1447 */}
        <nav className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center gap-[49.6px] text-[14.5px] font-medium text-white tracking-[0px] leading-[24.8px] font-sans">
          <div
            className="relative flex items-center"
            onMouseEnter={() => openMenu('products')}
            onMouseLeave={scheduleCloseMenu}
          >
            <button
              type="button"
              onClick={() => setActiveMenu((prev) => (prev === 'products' ? null : 'products'))}
              aria-expanded={activeMenu === 'products'}
              className="inline-flex items-center gap-1.5 text-white hover:text-white/80 transition-colors whitespace-nowrap cursor-pointer py-2"
            >
              <span>Products</span>
              <ChevronDown
                className={`size-3.5 text-white/75 transition-transform duration-200 ${
                  activeMenu === 'products' ? 'rotate-180 text-[#A48AFB]' : ''
                }`}
              />
            </button>
          </div>

          <div
            className="relative flex items-center"
            onMouseEnter={() => openMenu('industries')}
            onMouseLeave={scheduleCloseMenu}
          >
            <button
              type="button"
              onClick={() => setActiveMenu((prev) => (prev === 'industries' ? null : 'industries'))}
              aria-expanded={activeMenu === 'industries'}
              className="inline-flex items-center gap-1.5 text-white hover:text-white/80 transition-colors whitespace-nowrap cursor-pointer py-2"
            >
              <span>Industries</span>
              <ChevronDown
                className={`size-3.5 text-white/75 transition-transform duration-200 ${
                  activeMenu === 'industries' ? 'rotate-180 text-[#A48AFB]' : ''
                }`}
              />
            </button>
          </div>

          <a
            href="#pricing"
            className="text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            Pricing
          </a>

          <div
            ref={resourcesTriggerRef}
            className="relative flex items-center"
            onMouseEnter={() => openMenu('resources')}
            onMouseLeave={scheduleCloseMenu}
          >
            <button
              type="button"
              onClick={() => {
                syncResourcesPosition()
                setActiveMenu((prev) => (prev === 'resources' ? null : 'resources'))
              }}
              aria-expanded={activeMenu === 'resources'}
              className="inline-flex items-center gap-1.5 text-white hover:text-white/80 transition-colors whitespace-nowrap cursor-pointer py-2"
            >
              <span>Resources</span>
              <ChevronDown
                className={`size-3.5 text-white/75 transition-transform duration-200 ${
                  activeMenu === 'resources' ? 'rotate-180 text-[#A48AFB]' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Right: Project-Themed Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3.5 shrink-0">
          <Link
            to="/#contact"
            className="px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/35 text-white text-[13.5px] font-medium transition-all whitespace-nowrap"
          >
            Get a demo
          </Link>
          <Link
            to="/#contact"
            className="text-[13.5px] font-medium text-white/80 hover:text-white transition-colors whitespace-nowrap px-2 py-1.5"
          >
            Login
          </Link>
          <Link
            to="/#contact"
            style={{
              backgroundImage: 'linear-gradient(155deg, #4B0082 0%, #6D00B8 48%, #9B00FF 100%)',
            }}
            className="px-4 py-1.5 rounded-full border border-[#B84DFF]/40 text-white text-[13.5px] font-medium shadow-[0_0_20px_rgba(155,0,255,0.38)] hover:brightness-110 transition-all whitespace-nowrap"
          >
            Signup
          </Link>
        </div>

        {/* Right: Mobile Menu Trigger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Full-Width Brightcove-Style Mega-Menu */}
      <AnimatePresence>
        {activeMenu && (
          <>
            {/* Subtle page dim backdrop */}
            <motion.div
              key="mega-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveMenu(null)}
              className="hidden md:block fixed inset-0 top-[65.1px] bg-black/50 backdrop-blur-[2px] z-40"
            />

            <motion.div
              key="mega-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => openMenu(activeMenu)}
              onMouseLeave={scheduleCloseMenu}
              style={
                activeMenu === 'resources' && resourcesLeft > 0
                  ? { left: `${Math.max(16, resourcesLeft - 24)}px` }
                  : undefined
              }
              className={
                activeMenu === 'resources'
                  ? 'hidden md:block fixed top-[65.1px] w-max min-w-[210px] z-50'
                  : 'hidden md:block fixed left-0 right-0 top-[65.1px] w-full z-50'
              }
            >
              <div
                className={
                  activeMenu === 'resources'
                    ? 'relative w-max min-w-[210px] bg-[#0b0b0d]/98 backdrop-blur-2xl border border-white/[0.08] rounded-b-[18px] rounded-t-[12px] shadow-[0_32px_90px_rgba(0,0,0,0.92)] overflow-hidden'
                    : 'relative w-full bg-[#0b0b0d]/98 backdrop-blur-2xl border-t border-b border-white/[0.08] rounded-t-[20px] shadow-[0_32px_90px_rgba(0,0,0,0.92)] overflow-hidden'
                }
              >
                {/* Subtle Brightcove-style warm ambient radial glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-60"
                  style={{
                    background:
                      'radial-gradient(ellipse 55% 80% at 55% 45%, rgba(164, 138, 251, 0.07), transparent 70%), radial-gradient(ellipse 40% 60% at 25% 20%, rgba(255, 255, 255, 0.03), transparent 70%)',
                  }}
                />

                <div
                  className={
                    activeMenu === 'resources'
                      ? 'relative px-7 py-7'
                      : 'relative max-w-[1320px] mx-auto px-8 lg:px-16 py-11 lg:py-14'
                  }
                >
                  <AnimatePresence mode="wait">
                    {activeMenu === 'products' && (
                      <motion.div
                        key="products-content"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-3 gap-12 lg:gap-20"
                      >
                        {PRODUCT_SECTIONS.map((section) => (
                          <div key={section.heading}>
                            <div className="text-[13px] font-normal text-white/45 mb-6 tracking-[0.01em]">
                              {section.heading}
                            </div>
                            <ul className="space-y-4">
                              {section.items.map((item, idx) => (
                                <motion.li
                                  key={`${section.heading}-${item.title}`}
                                  initial={{ opacity: 0, y: 4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.24,
                                    delay: idx * 0.018,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                >
                                  <Link
                                    to={item.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="inline-block text-[16.5px] lg:text-[17.5px] font-normal tracking-[-0.01em] text-white/90 hover:text-[#A48AFB] hover:translate-x-1 transition-all duration-200 ease-out leading-snug"
                                  >
                                    {item.title}
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeMenu === 'industries' && (
                      <motion.div
                        key="industries-content"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="text-[13px] font-normal text-white/45 mb-6 tracking-[0.01em]">
                          {INDUSTRY_SECTIONS[0].heading}
                        </div>
                        <div className="grid grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-5 max-w-[980px]">
                          {INDUSTRY_SECTIONS[0].items.map((item, idx) => (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.24,
                                delay: idx * 0.018,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            >
                              <Link
                                to={item.href}
                                onClick={() => setActiveMenu(null)}
                                className="inline-block text-[16.5px] lg:text-[17.5px] font-normal tracking-[-0.01em] text-white/90 hover:text-[#A48AFB] hover:translate-x-1 transition-all duration-200 ease-out leading-snug"
                              >
                                {item.title}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeMenu === 'resources' && (
                      <motion.div
                        key="resources-content"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ul className="space-y-4">
                          {RESOURCE_SECTIONS[0].items.map((item, idx) => (
                            <motion.li
                              key={item.title}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.24,
                                delay: idx * 0.018,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            >
                              <a
                                href={item.href}
                                onClick={() => setActiveMenu(null)}
                                className="inline-block text-[16.5px] lg:text-[17.5px] font-normal tracking-[-0.01em] text-white/90 hover:text-[#A48AFB] hover:translate-x-1 transition-all duration-200 ease-out leading-snug"
                              >
                                {item.title}
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-[#252833] px-6 py-4 space-y-3 max-h-[82vh] overflow-y-auto">
          {[
            { key: 'products' as const, label: 'Products', sections: PRODUCT_SECTIONS },
            { key: 'industries' as const, label: 'Industries', sections: INDUSTRY_SECTIONS },
            { key: 'resources' as const, label: 'Resources', sections: RESOURCE_SECTIONS },
          ].map((group) => {
            const isOpen = mobileExpanded === group.key
            return (
              <div key={group.key}>
                <button
                  type="button"
                  onClick={() => setMobileExpanded((prev) => (prev === group.key ? null : group.key))}
                  className="w-full flex items-center justify-between py-2 text-[15px] font-medium text-white hover:text-[#A48AFB]"
                >
                  <span>{group.label}</span>
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#A48AFB]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-2 mb-3 pl-2 space-y-5 border-l border-white/10">
                    {group.sections.map((section, sIdx) => (
                      <div key={section.heading || sIdx} className="space-y-2.5 pl-3">
                        {section.heading && (
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                            {section.heading}
                          </div>
                        )}
                        <div className="space-y-2">
                          {section.items.map((item) =>
                            item.href.startsWith('/') ? (
                              <Link
                                key={`${section.heading}-${item.title}`}
                                to={item.href}
                                onClick={() => {
                                  setMobileExpanded(null)
                                  setMobileMenuOpen(false)
                                }}
                                className="flex items-center gap-3 py-1.5 text-white/90 hover:text-[#A48AFB]"
                              >
                                <span className="size-7 shrink-0 rounded-[6px] bg-[#16161a] border border-white/[0.08] text-white/75 flex items-center justify-center">
                                  {item.icon}
                                </span>
                                <div>
                                  <div className="text-[13.5px] font-semibold leading-tight">{item.title}</div>
                                  {item.description && (
                                    <div className="text-[12px] text-[#94A3B8] leading-tight">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ) : (
                              <a
                                key={`${section.heading}-${item.title}`}
                                href={item.href}
                                onClick={() => {
                                  setMobileExpanded(null)
                                  setMobileMenuOpen(false)
                                }}
                                className="flex items-center gap-3 py-1.5 text-white/90 hover:text-[#A48AFB]"
                              >
                                <span className="size-7 shrink-0 rounded-[6px] bg-[#16161a] border border-white/[0.08] text-white/75 flex items-center justify-center">
                                  {item.icon}
                                </span>
                                <div>
                                  <div className="text-[13.5px] font-semibold leading-tight">{item.title}</div>
                                  {item.description && (
                                    <div className="text-[12px] text-[#94A3B8] leading-tight">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </a>
                            ),
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[15px] font-medium text-white hover:text-[#A48AFB]"
          >
            Pricing
          </a>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <Link
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.1] text-white text-[14px] font-medium transition-all"
            >
              Get a demo
            </Link>
            <Link
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-[14px] font-medium text-white/80 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                backgroundImage: 'linear-gradient(155deg, #4B0082 0%, #6D00B8 48%, #9B00FF 100%)',
              }}
              className="w-full text-center px-4 py-2.5 rounded-full border border-[#B84DFF]/40 text-white text-[14px] font-medium shadow-[0_0_20px_rgba(155,0,255,0.38)] hover:brightness-110 transition-all"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
