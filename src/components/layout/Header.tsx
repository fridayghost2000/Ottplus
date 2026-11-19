import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Tv,
  Film,
  Server,
  Play,
  Layers,
  GraduationCap,
  Clapperboard,
  Building2,
  Trophy,
  Users,
  Search,
  Bell
} from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsDropdown, setSolutionsDropdown] = useState(false)
  const [industriesDropdown, setIndustriesDropdown] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showNotification, setShowNotification] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/' && !location.hash

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090D14]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center shrink-0 group cursor-pointer py-1">
          <img
            src="/logo-white.png"
            alt="OTTFast"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Center: StreamVibe-Style Dark Capsule Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 bg-[#0F0F12] border border-[#26262B] rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_8px_20px_rgba(0,0,0,0.4)]">
          {/* Home Tab */}
          <Link
            to="/"
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isHome
                ? 'bg-[#1A1A1E] text-white shadow-xs border border-white/10'
                : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </Link>

          {/* Solutions Dropdown Tab */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                solutionsDropdown
                  ? 'bg-[#1A1A1E] text-white'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  solutionsDropdown ? 'rotate-180 text-[#7A5AF8]' : 'text-[#64748B]'
                }`}
              />
            </button>

            {solutionsDropdown && (
              <div className="absolute top-full left-0 w-80 pt-2 z-50">
                <div className="bg-[#111622] rounded-2xl p-2.5 shadow-2xl border border-white/10 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl">
                  <a
                    href="/#features"
                    onClick={() => setSolutionsDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <Tv className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">OTT Platform</div>
                      <div className="text-xs text-[#94A3B8]">VoD &amp; Live streaming infrastructure</div>
                    </div>
                  </a>

                  <a
                    href="/#features"
                    onClick={() => setSolutionsDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Video Hosting &amp; CMS</div>
                      <div className="text-xs text-[#94A3B8]">Upload, manage &amp; schedule video assets</div>
                    </div>
                  </a>

                  <a
                    href="/#features"
                    onClick={() => setSolutionsDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <Play className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Custom Media Player</div>
                      <div className="text-xs text-[#94A3B8]">Low-latency adaptive HTML5 player</div>
                    </div>
                  </a>

                  <a
                    href="/#features"
                    onClick={() => setSolutionsDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Video Transcoding</div>
                      <div className="text-xs text-[#94A3B8]">Multi-bitrate cloud encoding</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown Tab */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesDropdown(true)}
            onMouseLeave={() => setIndustriesDropdown(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                industriesDropdown
                  ? 'bg-[#1A1A1E] text-white'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  industriesDropdown ? 'rotate-180 text-[#7A5AF8]' : 'text-[#64748B]'
                }`}
              />
            </button>

            {industriesDropdown && (
              <div className="absolute top-full left-0 w-84 pt-2 z-50">
                <div className="bg-[#111622] rounded-2xl p-2.5 shadow-2xl border border-white/10 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl">
                  <a
                    href="/#industries"
                    onClick={() => setIndustriesDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <Film className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Broadcast &amp; Media</div>
                      <div className="text-xs text-[#94A3B8]">Linear TV to Smart TV &amp; mobile apps</div>
                    </div>
                  </a>

                  <a
                    href="/#industries"
                    onClick={() => setIndustriesDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Education &amp; E-Learning</div>
                      <div className="text-xs text-[#94A3B8]">Deliver courses online in a branded app</div>
                    </div>
                  </a>

                  <a
                    href="/#industries"
                    onClick={() => setIndustriesDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <Clapperboard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Filmmakers &amp; Studios</div>
                      <div className="text-xs text-[#94A3B8]">D2C movie streaming &amp; TVOD ticketing</div>
                    </div>
                  </a>

                  <a
                    href="/#industries"
                    onClick={() => setIndustriesDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Enterprise Streaming</div>
                      <div className="text-xs text-[#94A3B8]">Secure internal workforce video portals</div>
                    </div>
                  </a>

                  <a
                    href="/#industries"
                    onClick={() => setIndustriesDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Sports &amp; Live Events</div>
                      <div className="text-xs text-[#94A3B8]">Broadcast live sports tournaments globally</div>
                    </div>
                  </a>

                  <a
                    href="/#industries"
                    onClick={() => setIndustriesDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB] group-hover:bg-[#7A5AF8] group-hover:text-white transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Creators &amp; YouTubers</div>
                      <div className="text-xs text-[#94A3B8]">Build direct fan subscriptions</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* IPTV Tab */}
          <a
            href="/#iptv"
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all"
          >
            IPTV &amp; Smart TV
          </a>

          {/* Pricing Tab */}
          <a
            href="/#pricing"
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all"
          >
            Subscriptions
          </a>

          {/* Support / FAQ Tab */}
          <a
            href="/#faq"
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all"
          >
            Support
          </a>
        </nav>

        {/* Right: StreamVibe Action Icons (Search, Bell) & Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Action Icon */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Search Video Solutions"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Search Popup */}
            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-[#111622] border border-white/10 rounded-xl p-3 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center gap-2 bg-[#161B26] border border-white/10 rounded-lg px-3 py-2">
                  <Search className="w-4 h-4 text-[#94A3B8]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search OTT features, DRM, IPTV..."
                    className="w-full bg-transparent text-xs text-white placeholder:text-[#94A3B8] focus:outline-hidden"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-[#94A3B8] hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="mt-2 text-[11px] text-[#94A3B8] flex items-center justify-between px-1">
                  <span>Popular: VoD, Live, DRM, Smart TV</span>
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-[#7A5AF8] hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bell / Notification Icon with Badge */}
          <div className="relative">
            <button
              onClick={() => setShowNotification(!showNotification)}
              className="p-2.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer relative"
              aria-label="Platform Updates"
            >
              <Bell className="w-5 h-5" />
              {/* Active notification indicator dot */}
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#E50000] border border-[#090D14] animate-pulse" />
            </button>

            {/* Notification Drawer */}
            {showNotification && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-[#111622] border border-white/10 rounded-xl p-3.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Platform Updates
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#12B76A]/20 text-[#12B76A] font-semibold">
                    Live
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-[#161B26] border border-white/10">
                    <div className="font-semibold text-white">Apple TV &amp; Roku Fast Engine</div>
                    <div className="text-[11px] text-[#94A3B8] mt-0.5">
                      Updated with low-latency LL-HLS 2.0 streaming pipeline.
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#161B26] border border-white/10">
                    <div className="font-semibold text-white">Multi-DRM Auto Rotation</div>
                    <div className="text-[11px] text-[#94A3B8] mt-0.5">
                      Widevine Modular &amp; FairPlay 4K keys active across all nodes.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Primary Request Demo Action Button */}
          <a
            href="/#request-demo"
            className="hidden sm:inline-flex items-center gap-2 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-[13px] sm:text-[14px] font-semibold h-10 px-5 rounded-xl shadow-[0_4px_16px_rgba(122,90,248,0.4)] hover:shadow-[0_6px_22px_rgba(122,90,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shrink-0"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors ml-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (matching StreamVibe dark capsule aesthetics) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0A0D14]/98 border-b border-white/10 shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300 backdrop-blur-2xl">
          <div className="flex flex-col gap-2 p-2 bg-[#0F0F12] border border-[#26262B] rounded-2xl text-[15px] font-medium text-white">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-xl bg-[#1A1A1E] text-white font-semibold"
            >
              Home
            </Link>
            <a
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5"
            >
              Solutions &amp; Services
            </a>
            <a
              href="/#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5"
            >
              Industries
            </a>
            <a
              href="/#iptv"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5"
            >
              IPTV &amp; Smart TV
            </a>
            <a
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5"
            >
              Subscriptions &amp; Pricing
            </a>
            <a
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5"
            >
              Support &amp; FAQ
            </a>
          </div>

          <div className="pt-2">
            <a
              href="/#request-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-[15px] font-semibold h-12 rounded-xl shadow-lg shadow-[#7A5AF8]/40 transition-all cursor-pointer"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
