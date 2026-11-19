import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  Users
} from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsDropdown, setSolutionsDropdown] = useState(false)
  const [industriesDropdown, setIndustriesDropdown] = useState(false)

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090D14]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group cursor-pointer py-1">
          <img
            src="/logo-white.png"
            alt="OTTFast"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#94A3B8]">
          <Link to="/" className="text-white hover:text-[#7A5AF8] transition-colors py-2 font-semibold">
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-white transition-colors py-2 cursor-pointer">
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdown ? 'rotate-180 text-[#7A5AF8]' : ''}`} />
            </button>

            {solutionsDropdown && (
              <div className="absolute top-full left-0 w-80 pt-2 z-50">
                <div className="bg-[#111622] rounded-2xl p-3 shadow-2xl border border-white/10 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl">
                  <a href="/#features" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
                      <Tv className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">OTT Platform</div>
                      <div className="text-xs text-[#94A3B8]">VoD &amp; Live streaming infrastructure</div>
                    </div>
                  </a>

                  <a href="/#features" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Video Hosting &amp; CMS</div>
                      <div className="text-xs text-[#94A3B8]">Upload, manage &amp; schedule video assets</div>
                    </div>
                  </a>

                  <a href="/#features" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
                      <Play className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Custom Media Player</div>
                      <div className="text-xs text-[#94A3B8]">Low-latency adaptive HTML5 player</div>
                    </div>
                  </a>

                  <a href="/#features" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
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

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesDropdown(true)}
            onMouseLeave={() => setIndustriesDropdown(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-white transition-colors py-2 cursor-pointer">
              <span>Industries</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesDropdown ? 'rotate-180 text-[#7A5AF8]' : ''}`} />
            </button>

            {industriesDropdown && (
              <div className="absolute top-full left-0 w-84 pt-2 z-50">
                <div className="bg-[#111622] rounded-2xl p-3 shadow-2xl border border-white/10 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl">
                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
                      <Film className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Broadcast &amp; Media</div>
                      <div className="text-xs text-[#94A3B8]">Powerful live streaming for audiences</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Education &amp; E-Learning</div>
                      <div className="text-xs text-[#94A3B8]">Deliver interactive courses online in an app</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
                      <Clapperboard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Filmmakers &amp; Studios</div>
                      <div className="text-xs text-[#94A3B8]">Personalized movie streaming &amp; monetization</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Enterprise Streaming</div>
                      <div className="text-xs text-[#94A3B8]">Engage workforce with secure business video</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Sports &amp; Live Events</div>
                      <div className="text-xs text-[#94A3B8]">Broadcast live sports tournaments globally</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="p-2 rounded-lg bg-[#7A5AF8]/15 text-[#A48AFB]">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">YouTubers &amp; Content Creators</div>
                      <div className="text-xs text-[#94A3B8]">Build direct subscriptions beyond YouTube</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="/#features" className="hover:text-white transition-colors py-2">
            Features
          </a>
          <a href="/#pricing" className="hover:text-white transition-colors py-2">
            Pricing
          </a>
          <a href="/#contact" className="hover:text-white transition-colors py-2">
            Contact Us
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/#contact"
            className="text-[14px] font-semibold text-[#E2E8F0] hover:text-white px-3.5 py-2 transition-colors cursor-pointer"
          >
            Contact Sales
          </a>

          <a
            href="/#request-demo"
            className="inline-flex items-center gap-2 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-[14px] font-semibold h-11 px-6 rounded-full shadow-[0_4px_14px_rgba(122,90,248,0.4)] hover:shadow-[0_6px_20px_rgba(122,90,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0E131F] border-b border-white/10 shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300 backdrop-blur-xl">
          <div className="flex flex-col gap-3 text-[16px] font-medium text-white">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 text-[#7A5AF8] font-semibold"
            >
              Home
            </Link>
            <a
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#7A5AF8]"
            >
              Solutions &amp; Services
            </a>
            <a
              href="/#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#7A5AF8]"
            >
              Industries
            </a>
            <a
              href="/#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#7A5AF8]"
            >
              Features
            </a>
            <a
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#7A5AF8]"
            >
              Pricing
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#7A5AF8]"
            >
              Contact Sales
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="/#request-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-[15px] font-semibold h-12 rounded-full shadow-lg shadow-[#7A5AF8]/40 transition-all cursor-pointer"
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
