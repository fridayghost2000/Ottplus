import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart2,
  BookOpen,
  Briefcase,
  Building2,
  Cast,
  ChevronDown,
  Cpu,
  Crop,
  Dumbbell,
  FolderOpen,
  GraduationCap,
  Image as ImageIcon,
  Lightbulb,
  Lock,
  Megaphone,
  Menu,
  Minimize2,
  MonitorPlay,
  Newspaper,
  Plug,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Terminal,
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
    heading: 'VIDEO',
    items: [
      {
        title: 'Overview',
        description: 'Simplified video hosting',
        href: '#platform',
        icon: <Video className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Video Library',
        description: 'Easy video management',
        href: '#platform',
        icon: <FolderOpen className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Video Protection',
        description: 'Secure video streaming',
        href: '#platform',
        icon: <Lock className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Video Player',
        description: 'Customization and branding',
        href: '#platform',
        icon: <MonitorPlay className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Video Marketing',
        description: 'Thumbnails & CTAs',
        href: '#solutions',
        icon: <Megaphone className={ICON_CLASS} strokeWidth={1.65} />,
      },
    ],
  },
  {
    heading: 'IMAGE',
    items: [
      {
        title: 'Overview',
        description: 'Image optimization',
        href: '#platform',
        icon: <ImageIcon className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Image Compression',
        description: 'Compress image size',
        href: '#platform',
        icon: <Minimize2 className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Responsive Resize',
        description: 'Resize for devices',
        href: '#platform',
        icon: <Smartphone className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Format Conversion',
        description: 'Latest image formats',
        href: '#platform',
        icon: <RefreshCw className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Image Operations',
        description: 'Auto image editing',
        href: '#platform',
        icon: <Crop className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Easy Integration',
        description: 'Setup in no time',
        href: '#platform',
        icon: <Plug className={ICON_CLASS} strokeWidth={1.65} />,
      },
    ],
  },
  {
    heading: 'VIDEO API',
    items: [
      {
        title: 'Overview',
        href: '#platform',
        icon: <Terminal className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Dual DRM',
        href: '#platform',
        icon: <ShieldCheck className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Video Transcoding',
        href: '#platform',
        icon: <Cpu className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Video Streaming',
        href: '#platform',
        icon: <Cast className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Video Analytics',
        href: '#platform',
        icon: <BarChart2 className={ICON_CLASS} strokeWidth={1.65} />,
      },
    ],
  },
]

const SOLUTION_SECTIONS: ProductSection[] = [
  {
    heading: 'PROSUMER',
    items: [
      {
        title: 'SMB & Startups',
        href: '#solutions',
        icon: <Building2 className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Fitness Creators',
        href: '#solutions',
        icon: <Dumbbell className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Course Creators',
        href: '#solutions',
        icon: <Megaphone className={ICON_CLASS} strokeWidth={1.65} />,
      },
    ],
  },
  {
    heading: 'ENTERPRISE',
    items: [
      {
        title: 'Online Retail',
        href: '#solutions',
        icon: <ShoppingCart className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'News & Media',
        href: '#solutions',
        icon: <Newspaper className={ICON_CLASS} strokeWidth={1.65} />,
      },
      {
        title: 'Consumer Apps',
        href: '#solutions',
        icon: <Briefcase className={ICON_CLASS} strokeWidth={1.65} />,
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
        title: 'Startup Credit Program',
        href: '#resources',
        icon: <GraduationCap className={ICON_CLASS} strokeWidth={1.65} />,
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

type DesktopMenu = 'products' | 'solutions' | 'resources' | null

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<DesktopMenu>(null)
  const [mobileExpanded, setMobileExpanded] = useState<DesktopMenu>(null)
  const headerRef = useRef<HTMLElement>(null)
  const closeTimerRef = useRef<number | null>(null)

  const openMenu = (menu: Exclude<DesktopMenu, null>) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveMenu(menu)
  }

  const scheduleCloseMenu = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null)
    }, 120)
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
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
            onMouseEnter={() => openMenu('solutions')}
            onMouseLeave={scheduleCloseMenu}
          >
            <button
              type="button"
              onClick={() => setActiveMenu((prev) => (prev === 'solutions' ? null : 'solutions'))}
              aria-expanded={activeMenu === 'solutions'}
              className="inline-flex items-center gap-1.5 text-white hover:text-white/80 transition-colors whitespace-nowrap cursor-pointer py-2"
            >
              <span>Solutions</span>
              <ChevronDown
                className={`size-3.5 text-white/75 transition-transform duration-200 ${
                  activeMenu === 'solutions' ? 'rotate-180 text-[#A48AFB]' : ''
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
            className="relative flex items-center"
            onMouseEnter={() => openMenu('resources')}
            onMouseLeave={scheduleCloseMenu}
          >
            <button
              type="button"
              onClick={() => setActiveMenu((prev) => (prev === 'resources' ? null : 'resources'))}
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

            {activeMenu === 'resources' && (
              <div className="hidden md:block absolute left-0 top-full pt-3 w-[270px] z-50">
                <div className="rounded-2xl bg-[#0b0b0f]/98 backdrop-blur-2xl border border-[#252833] shadow-[0_24px_60px_rgba(0,0,0,0.9)] p-4 space-y-2">
                  {RESOURCE_SECTIONS[0].items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group/item flex items-center gap-3.5 rounded-xl p-2 hover:bg-white/[0.05] transition-colors"
                    >
                      <div className="size-9 shrink-0 rounded-[8px] bg-[#16161a] border border-white/[0.08] text-white/75 group-hover/item:bg-[#202026] group-hover/item:border-white/[0.16] group-hover/item:text-white flex items-center justify-center transition-colors duration-150">
                        {item.icon}
                      </div>
                      <span className="text-[14px] font-semibold text-[#faf9f5] group-hover/item:text-white leading-snug">
                        {item.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

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

      {/* Desktop Products Mega-Menu Dropdown */}
      {activeMenu === 'products' && (
        <div
          onMouseEnter={() => openMenu('products')}
          onMouseLeave={scheduleCloseMenu}
          className="hidden md:block fixed left-1/2 -translate-x-1/2 top-[65.1px] w-[min(94vw,920px)] pt-2 z-50"
        >
          <div className="rounded-2xl bg-[#0b0b0f]/98 backdrop-blur-2xl border border-[#252833] shadow-[0_24px_60px_rgba(0,0,0,0.9)] overflow-hidden">
            {PRODUCT_SECTIONS.map((section, sectionIdx) => (
              <div
                key={section.heading}
                className={`px-8 py-6 ${
                  sectionIdx < PRODUCT_SECTIONS.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#94A3B8] mb-4">
                  {section.heading}
                </div>

                <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                  {section.items.map((item) => (
                    <a
                      key={`${section.heading}-${item.title}`}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group/item flex items-start gap-3.5 rounded-xl p-2 -m-2 hover:bg-white/[0.05] transition-colors"
                    >
                      <div className="size-9 shrink-0 rounded-[8px] bg-[#16161a] border border-white/[0.08] text-white/75 group-hover/item:bg-[#202026] group-hover/item:border-white/[0.16] group-hover/item:text-white flex items-center justify-center transition-colors duration-150">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[14px] font-semibold text-[#faf9f5] group-hover/item:text-white leading-snug">
                          {item.title}
                        </div>
                        {item.description && (
                          <div className="text-[12.5px] text-[#94A3B8] leading-snug mt-0.5">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Solutions Dropdown */}
      {activeMenu === 'solutions' && (
        <div
          onMouseEnter={() => openMenu('solutions')}
          onMouseLeave={scheduleCloseMenu}
          className="hidden md:block fixed left-1/2 -translate-x-1/2 top-[65.1px] w-[min(94vw,540px)] pt-2 z-50"
        >
          <div className="rounded-2xl bg-[#0b0b0f]/98 backdrop-blur-2xl border border-[#252833] shadow-[0_24px_60px_rgba(0,0,0,0.9)] px-8 py-6 grid grid-cols-2 gap-8">
            {SOLUTION_SECTIONS.map((section) => (
              <div key={section.heading}>
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#94A3B8] mb-4">
                  {section.heading}
                </div>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <a
                      key={`${section.heading}-${item.title}`}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group/item flex items-center gap-3.5 rounded-xl p-2 -m-2 hover:bg-white/[0.05] transition-colors"
                    >
                      <div className="size-9 shrink-0 rounded-[8px] bg-[#16161a] border border-white/[0.08] text-white/75 group-hover/item:bg-[#202026] group-hover/item:border-white/[0.16] group-hover/item:text-white flex items-center justify-center transition-colors duration-150">
                        {item.icon}
                      </div>
                      <span className="text-[14px] font-semibold text-[#faf9f5] group-hover/item:text-white leading-snug">
                        {item.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-[#252833] px-6 py-4 space-y-3 max-h-[82vh] overflow-y-auto">
          {[
            { key: 'products' as const, label: 'Products', sections: PRODUCT_SECTIONS },
            { key: 'solutions' as const, label: 'Solutions', sections: SOLUTION_SECTIONS },
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
                          {section.items.map((item) => (
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
                          ))}
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
        </div>
      )}
    </header>
  )
}
