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
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#7A5AF8] hover:text-[#7A5AF8] text-neutral-300 flex items-center justify-center transition-colors text-xs font-bold"
              >
                FB
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#7A5AF8] hover:text-[#7A5AF8] text-neutral-300 flex items-center justify-center transition-colors text-xs font-bold"
              >
                X
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#7A5AF8] hover:text-[#7A5AF8] text-neutral-300 flex items-center justify-center transition-colors text-xs font-bold"
              >
                IN
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#7A5AF8] hover:text-[#7A5AF8] text-neutral-300 flex items-center justify-center transition-colors text-xs font-bold"
              >
                YT
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
