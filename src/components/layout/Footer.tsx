export function Footer() {
  return (
    <footer className="relative w-full bg-black text-[#faf9f5] pt-16 pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient Multi-Color Gradient Glows (matching Figma node 2:4657) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-80 z-0">
        {/* Purple / Magenta Glow Blob on Left */}
        <div
          className="absolute blur-[85px] h-[1140px] -left-[186px] -top-[120px] w-[1663px] rounded-full opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(138.2deg, rgb(147, 51, 234) 0%, rgb(176, 72, 255) 50%, rgb(176, 72, 255) 100%)',
          }}
        />
        {/* Cyan / Blue Glow Blob on Right */}
        <div
          className="absolute blur-[75px] h-[1246px] left-[780px] -top-[180px] w-[1467px] rounded-full opacity-25 bg-gradient-to-r from-[#3b82f6] to-[#2dd4bf]"
        />
        {/* Amber / Orange Warm Glow Blob */}
        <div
          className="absolute blur-[65px] h-[209px] -left-[95px] top-[30px] w-[526px] rounded-full opacity-20 bg-gradient-to-r from-[#fbbf24] to-[#f97316]"
        />
      </div>

      <div className="relative z-10 max-w-[1488px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 pb-16">
          {/* Column 1: Core & Features */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Core</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#platform" className="hover:text-white transition-colors">Host &amp; Stream</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Manage Video Library</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Player</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Features</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#features" className="hover:text-white transition-colors">AI Suite</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Agentic Hub</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">MCP</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Interactivity</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Live Streaming</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">OTT</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Platform & Solutions */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Platform</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#platform" className="hover:text-white transition-colors">Developer APIs</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Accessibility</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Content Monetization</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Social Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Solutions</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#solutions" className="hover:text-white transition-colors">Communications Studio</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Media Studio</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Marketing Studio</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Beacon Studio</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Zencoder</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: OTTFast for & Industries */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">OTTFast for</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#for" className="hover:text-white transition-colors">Financial Services</a></li>
                <li><a href="#for" className="hover:text-white transition-colors">Leadership Updates</a></li>
                <li><a href="#for" className="hover:text-white transition-colors">Live Events</a></li>
                <li><a href="#for" className="hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#for" className="hover:text-white transition-colors">Monetizing your Media</a></li>
                <li><a href="#for" className="hover:text-white transition-colors">Sales</a></li>
                <li><a href="#for" className="hover:text-white transition-colors">Supporting Employees</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Industries</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#industries" className="hover:text-white transition-colors">Broadcasters</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Healthcare &amp; Pharma</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Media Entertainment</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Media Networks</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Publishers</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Retail</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Tech Companies</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Resources & Learning */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Resources</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#resources" className="hover:text-white transition-colors">Resource Center</a></li>
                <li><a href="#resources" className="hover:text-white transition-colors">Customer Stories</a></li>
                <li><a href="#resources" className="hover:text-white transition-colors">Integrations Hub</a></li>
                <li><a href="#resources" className="hover:text-white transition-colors">CAE Calculator</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Learning</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#learning" className="hover:text-white transition-colors">OTTFast Academy</a></li>
                <li><a href="#learning" className="hover:text-white transition-colors">OTTFast Community</a></li>
                <li><a href="#learning" className="hover:text-white transition-colors">Product Documentation</a></li>
                <li><a href="#learning" className="hover:text-white transition-colors">Developer Resources</a></li>
              </ul>
            </div>
          </div>

          {/* Column 5: Get Started, Updates & Company */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Get Started</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Sales</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Request Demo</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Login</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Why OTTFast</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Updates</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#updates" className="hover:text-white transition-colors">Pressroom</a></li>
                <li><a href="#updates" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#updates" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#updates" className="hover:text-white transition-colors">Events &amp; Webinars</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16.5px] font-bold text-[#faf9f5] mb-4">Company</h4>
              <ul className="space-y-3 text-[15.5px] text-[#8b8a88]">
                <li><a href="#company" className="hover:text-white transition-colors">About OTTFast</a></li>
                <li><a href="#company" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#company" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Terms & Social Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[15.5px] text-[#8b8a88]">
          <p>© 2026 OTTFast Inc. All rights reserved.</p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            </div>

            {/* Social Icons from Figma */}
            <div className="flex items-center gap-4">
              <a href="#social" className="w-5 h-5 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="/figma-assets/s8_social1.svg" alt="Social 1" className="w-full h-full object-contain" />
              </a>
              <a href="#social" className="w-5 h-5 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="/figma-assets/s8_social2.svg" alt="Social 2" className="w-full h-full object-contain" />
              </a>
              <a href="#social" className="w-5 h-5 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="/figma-assets/s8_social3.svg" alt="Social 3" className="w-full h-full object-contain" />
              </a>
              <a href="#social" className="w-5 h-5 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="/figma-assets/s8_social4.svg" alt="Social 4" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
