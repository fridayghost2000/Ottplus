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
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E9EAEB] shadow-[0_4px_20px_-4px_rgba(24,29,39,0.06)] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#7A5AF8] to-[#9B8AFB] flex items-center justify-center shadow-md shadow-[#7A5AF8]/30 group-hover:scale-105 transition-transform duration-200">
            <Play className="h-5 w-5 fill-white text-white translate-x-0.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[22px] font-bold tracking-tight text-[#181D27] font-heading leading-none">
              OTT<span className="text-[#7A5AF8]">Fast</span>
            </span>
            <span className="text-[10px] tracking-wider text-[#535862] font-medium uppercase mt-0.5">
              Streaming Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#535862]">
          <Link to="/" className="text-[#181D27] hover:text-[#7A5AF8] transition-colors py-2 font-semibold">
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-[#7A5AF8] transition-colors py-2 cursor-pointer">
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdown ? 'rotate-180 text-[#7A5AF8]' : ''}`} />
            </button>

            {solutionsDropdown && (
              <div className="absolute top-full left-0 w-80 pt-2 z-50">
                <div className="bg-white rounded-2xl p-3 shadow-xl border border-[#E9EAEB] grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <a href="/#features" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#F4F3FF] text-[#7A5AF8]">
                      <Tv className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">OTT Platform</div>
                      <div className="text-xs text-[#535862]">VoD &amp; Live streaming infrastructure</div>
                    </div>
                  </a>

                  <a href="/#features" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#F4F3FF] text-[#7A5AF8]">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">Video Hosting &amp; CMS</div>
                      <div className="text-xs text-[#535862]">Upload, manage &amp; schedule video assets</div>
                    </div>
                  </a>

                  <a href="/#features" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#F4F3FF] text-[#7A5AF8]">
                      <Play className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">Custom Media Player</div>
                      <div className="text-xs text-[#535862]">Low-latency adaptive HTML5 player</div>
                    </div>
                  </a>

                  <a href="/#features" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#F4F3FF] text-[#7A5AF8]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">Video Transcoding</div>
                      <div className="text-xs text-[#535862]">Multi-bitrate cloud encoding</div>
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
            <button className="flex items-center gap-1.5 hover:text-[#7A5AF8] transition-colors py-2 cursor-pointer">
              <span>Industries</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesDropdown ? 'rotate-180 text-[#7A5AF8]' : ''}`} />
            </button>

            {industriesDropdown && (
              <div className="absolute top-full left-0 w-84 pt-2 z-50">
                <div className="bg-white rounded-2xl p-3 shadow-xl border border-[#E9EAEB] grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#ECFDF3] text-[#12B76A]">
                      <Film className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">Broadcast &amp; Media</div>
                      <div className="text-xs text-[#535862]">Powerful live streaming for audiences</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#F0F9FF] text-[#0BA5EC]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">Education &amp; E-Learning</div>
                      <div className="text-xs text-[#535862]">Deliver interactive courses online in an app</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#FDF2FA] text-[#EE46BC]">
                      <Clapperboard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">Filmmakers &amp; Studios</div>
                      <div className="text-xs text-[#535862]">Personalized movie streaming &amp; monetization</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#F4F3FF] text-[#7A5AF8]">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">Enterprise Streaming</div>
                      <div className="text-xs text-[#535862]">Engage workforce with secure business video</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#ECFDF3] text-[#12B76A]">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">Sports &amp; Live Events</div>
                      <div className="text-xs text-[#535862]">Broadcast live sports tournaments globally</div>
                    </div>
                  </a>

                  <a href="/#industries" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                    <div className="p-2 rounded-lg bg-[#FDF2FA] text-[#EE46BC]">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#181D27]">YouTubers &amp; Content Creators</div>
                      <div className="text-xs text-[#535862]">Build direct subscriptions beyond YouTube</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="/#features" className="hover:text-[#7A5AF8] transition-colors py-2">
            Features
          </a>
          <a href="/#pricing" className="hover:text-[#7A5AF8] transition-colors py-2">
            Pricing
          </a>
          <a href="/#contact" className="hover:text-[#7A5AF8] transition-colors py-2">
            Contact Us
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/#contact"
            className="text-[14px] font-semibold text-[#181D27] hover:text-[#7A5AF8] px-3.5 py-2 transition-colors cursor-pointer"
          >
            Contact Sales
          </a>

          <a
            href="/#request-demo"
            className="inline-flex items-center gap-2 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-[14px] font-semibold h-11 px-6 rounded-full shadow-[0_4px_14px_rgba(122,90,248,0.3)] hover:shadow-[0_6px_20px_rgba(122,90,248,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#181D27] hover:bg-[#F8F9FC] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-[#E9EAEB] shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-3 text-[16px] font-medium text-[#181D27]">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E9EAEB]/60 text-[#7A5AF8] font-semibold"
            >
              Home
            </Link>
            <a
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E9EAEB]/60 hover:text-[#7A5AF8]"
            >
              Solutions &amp; Services
            </a>
            <a
              href="/#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E9EAEB]/60 hover:text-[#7A5AF8]"
            >
              Industries
            </a>
            <a
              href="/#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E9EAEB]/60 hover:text-[#7A5AF8]"
            >
              Features
            </a>
            <a
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E9EAEB]/60 hover:text-[#7A5AF8]"
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
              className="w-full inline-flex items-center justify-center gap-2 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-[15px] font-semibold h-12 rounded-full shadow-lg shadow-[#7A5AF8]/30 transition-all cursor-pointer"
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
