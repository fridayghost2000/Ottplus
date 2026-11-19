import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-[#05070B] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <Link to="/" className="inline-flex items-center py-1">
              <img
                src="/logo.png"
                alt="OTTFast"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              OTTFast is a comprehensive turnkey video streaming platform empowering broadcasters,
              enterprises, filmmakers, and digital creators to launch branded video services worldwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com/ottfastindia"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#7A5AF8] hover:text-white hover:bg-[#7A5AF8]/20 text-[#94A3B8] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#7A5AF8] hover:text-white hover:bg-[#7A5AF8]/20 text-[#94A3B8] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#7A5AF8] hover:text-white hover:bg-[#7A5AF8]/20 text-[#94A3B8] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#7A5AF8] hover:text-white hover:bg-[#7A5AF8]/20 text-[#94A3B8] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Solutions (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Solutions
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  OTT Platform
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Video Hosting &amp; CMS
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Custom Media Player
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Cloud Transcoding
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Live Streaming
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Linear FAST Channels
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Industries
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  Broadcast &amp; Media
                </a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  Education &amp; E-Learning
                </a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  Filmmakers &amp; Studios
                </a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  Enterprise Video
                </a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  Sports &amp; Live Events
                </a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  YouTubers &amp; Creators
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Infrastructure (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Infrastructure
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="/#iptv" className="hover:text-white transition-colors">
                  IPTV for Hotels
                </a>
              </li>
              <li>
                <a href="/#iptv" className="hover:text-white transition-colors">
                  IPTV for Operators
                </a>
              </li>
              <li>
                <a href="/#iptv" className="hover:text-white transition-colors">
                  HbbTV Hybrid Broadcast
                </a>
              </li>
              <li>
                <a href="/#iptv" className="hover:text-white transition-colors">
                  Smart TV Applications
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Studio Multi-DRM
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Global CDN Network
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Support (2 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Company
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  About OTTFast
                </Link>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  FAQs &amp; Help
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20260113065931/https://ottfast.com/docs-category/docs/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  API Documentation <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} OTTFast. A product of UXDLab. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-neutral-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-neutral-400 transition-colors">
              Security &amp; Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
