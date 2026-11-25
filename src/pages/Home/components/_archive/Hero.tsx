import {
  ArrowRight,
  Tv,
  CheckCircle2,
  Activity,
  Layers,
  ShieldCheck,
  Globe2,
  Sparkles,
  Zap,
  Volume2,
  Maximize2,
  Play
} from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 overflow-hidden bg-[#090D14]">
      {/* Background Decorative Tech Grid & Soft Radial Glow (BrightHub visual style) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse 65% 55% at 50% 15%, #000 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 15%, #000 60%, transparent 100%)'
          }}
        />

        {/* Soft violet & purple top ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[760px] h-[380px] bg-gradient-to-b from-[#7A5AF8]/25 via-[#9E77ED]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* 1. Slogan Badge (BrightHub pxl-heading__sub-slogan exact recreation) */}
        <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-[#111622] border border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)] hover:border-[#7A5AF8]/50 transition-all duration-200 cursor-pointer group mb-6">
          <span className="px-3 py-1 rounded-full bg-[#7A5AF8]/20 text-[#BDB4FE] text-[13px] font-semibold tracking-wide">
            OTT Platform
          </span>
          <span className="text-[13px] font-medium text-[#F8FAFC] flex items-center gap-1.5">
            One Turnkey Solution For All Streaming Needs
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#BDB4FE] group-hover:translate-x-0.5 transition-all duration-200" />
        </div>

        {/* 2. Main Heading H1 (BrightHub typography & proportions) */}
        <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-white font-heading max-w-4xl mx-auto leading-[1.12] mb-5">
          Video Streaming OTT Platform <br className="hidden sm:inline" />
          for Modern Media
        </h1>

        {/* 3. Subtitle Description */}
        <p className="text-base sm:text-lg lg:text-[18px] text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-8">
          One OTT solution for all your needs providing a world-class video experience.
          Deliver top-notch video quality for your VoD and live content across all devices seamlessly, effortlessly.
        </p>

        {/* 4. Dual CTA Buttons (BrightHub styling) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 sm:mb-20">
          <a
            href="#request-demo"
            className="inline-flex items-center justify-center gap-2.5 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-[15px] font-semibold h-13 px-8 rounded-full shadow-[0_4px_20px_rgba(122,90,248,0.4)] hover:shadow-[0_8px_28px_rgba(122,90,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 bg-[#161B26] hover:bg-[#1E2536] text-white hover:text-[#BDB4FE] border border-white/10 hover:border-white/20 text-[15px] font-semibold h-13 px-7 rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <Tv className="w-4 h-4 text-[#94A3B8]" />
            <span>Explore Solutions</span>
          </a>
        </div>

        {/* 5. Hero Visual: Streaming Operations Dashboard & Floating Parallax Elements */}
        <div className="relative w-full max-w-[1240px] mx-auto">
          {/* Floating Element 1: Cloud Transcoding (Top Left) */}
          <div className="absolute -top-7 -left-3 sm:-left-6 lg:-left-10 bg-[#111622]/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.7)] items-center gap-3.5 z-30 animate-float hidden md:flex text-left">
            <div className="p-2.5 rounded-xl bg-[#7A5AF8]/20 text-[#A48AFB]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-white leading-tight flex items-center gap-1.5">
                Cloud Video Transcoding
                <span className="w-2 h-2 rounded-full bg-[#12B76A] animate-pulse" />
              </div>
              <div className="text-[12px] text-[#94A3B8] mt-0.5">
                4K • 1080p • 720p Multi-Bitrate
              </div>
            </div>
          </div>

          {/* Floating Element 2: Multi-Screen Reach (Top Right) */}
          <div className="absolute -top-7 -right-3 sm:-right-6 lg:-right-10 bg-[#111622]/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.7)] items-center gap-3.5 z-30 animate-float-delayed hidden md:flex text-left">
            <div className="p-2.5 rounded-xl bg-[#12B76A]/20 text-[#12B76A]">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-white leading-tight">
                Multi-Screen Delivery
              </div>
              <div className="text-[12px] text-[#94A3B8] mt-0.5">
                Smart TV, Mobile, Apple TV &amp; Roku
              </div>
            </div>
          </div>

          {/* Floating Element 3: Ultra Low-Latency Player (Bottom Left) */}
          <div className="absolute -bottom-7 left-4 sm:left-12 lg:left-16 bg-[#111622]/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.7)] items-center gap-3.5 z-30 animate-float-delayed hidden sm:flex text-left">
            <div className="p-2.5 rounded-xl bg-[#0BA5EC]/20 text-[#0BA5EC]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-white leading-tight">
                Low-Latency HTML5 Player
              </div>
              <div className="text-[12px] text-[#94A3B8] mt-0.5">
                Sub-Second Glass-to-Glass Delivery
              </div>
            </div>
          </div>

          {/* Floating Element 4: Monetization Engine (Bottom Right) */}
          <div className="absolute -bottom-7 right-4 sm:right-12 lg:right-16 bg-[#111622]/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.7)] items-center gap-3.5 z-30 animate-float hidden sm:flex text-left">
            <div className="p-2.5 rounded-xl bg-[#EE46BC]/20 text-[#EE46BC]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[14px] font-bold text-white leading-tight">
                Instant Monetization
              </div>
              <div className="text-[12px] text-[#94A3B8] mt-0.5">
                SVOD • AVOD • TVOD • FAST
              </div>
            </div>
          </div>

          {/* Main Dashboard Mockup Box */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0E131F] shadow-[0_24px_80px_-16px_rgba(122,90,248,0.25),0_12px_32px_-8px_rgba(0,0,0,0.7)] overflow-hidden text-left">
            {/* Window Chrome Header Bar */}
            <div className="h-11 bg-[#111622] border-b border-white/10 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                <span className="ml-3 text-xs font-mono text-[#94A3B8] hidden sm:inline">
                  https://ottfast.com/control-room/live-broadcast
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#12B76A]/20 text-[#12B76A] border border-[#12B76A]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A] animate-ping" />
                  Live Stream Active
                </span>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="p-4 sm:p-6 lg:p-7 bg-[#0B0F17]">
              {/* Top Operational Telemetry Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-[#111622] border border-white/10 shadow-xs">
                  <div className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider">
                    Concurrent Viewers
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-0.5 font-heading">
                    124,580
                  </div>
                  <div className="text-[11px] text-[#12B76A] font-semibold flex items-center gap-1 mt-1">
                    <Activity className="w-3 h-3" /> Live Worldwide
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#111622] border border-white/10 shadow-xs">
                  <div className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider">
                    Stream Health
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-0.5 font-heading">
                    Optimal
                  </div>
                  <div className="text-[11px] text-[#12B76A] font-semibold flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> 0% Packet Loss
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#111622] border border-white/10 shadow-xs">
                  <div className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider">
                    Content Security
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-0.5 font-heading">
                    Multi-DRM
                  </div>
                  <div className="text-[11px] text-[#A48AFB] font-semibold flex items-center gap-1 mt-1">
                    <ShieldCheck className="w-3 h-3" /> Widevine + FairPlay
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#111622] border border-white/10 shadow-xs">
                  <div className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider">
                    Global Distribution
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-0.5 font-heading">
                    Tier-1 CDN
                  </div>
                  <div className="text-[11px] text-[#0BA5EC] font-semibold flex items-center gap-1 mt-1">
                    <Globe2 className="w-3 h-3" /> 150+ Edge Points
                  </div>
                </div>
              </div>

              {/* Main Media Player Interface Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* 2 Cols: Main Live Player Monitor */}
                <div className="lg:col-span-2 rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg relative aspect-video flex flex-col justify-between">
                  {/* Background Video Simulation Canvas */}
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80"
                    alt="OTTFast Live Broadcast Stream"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

                  {/* Player Top Controls Overlay */}
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-rose-600 text-white text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Live
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10">
                        4K UHD • 60 FPS
                      </span>
                    </div>

                    <div className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-emerald-400 text-xs font-mono border border-emerald-500/20">
                      Bitrate: 6.8 Mbps (Adaptive)
                    </div>
                  </div>

                  {/* Player Center Play Icon */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-[#7A5AF8] text-white flex items-center justify-center shadow-xl shadow-[#7A5AF8]/50 hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Player Bottom Scrubber / Controls */}
                  <div className="relative z-10 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-3">
                      <Play className="w-4 h-4 fill-white cursor-pointer" />
                      <Volume2 className="w-4 h-4 cursor-pointer" />
                      <span className="font-mono text-neutral-300">01:42:18 / Live</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-white/20 text-[11px] font-medium">1080p60</span>
                      <Maximize2 className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>

                {/* 1 Col: Channels & Ingestion Status Panel */}
                <div className="flex flex-col justify-between space-y-3 p-4 sm:p-5 rounded-2xl bg-[#111622] border border-white/10">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-sm font-bold text-white">Active Channels</span>
                      <span className="text-xs font-semibold text-[#A48AFB]">4 Active</span>
                    </div>

                    <div className="space-y-3 mt-3">
                      <div className="p-2.5 rounded-xl bg-[#161B26] border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#7A5AF8]/20 text-[#A48AFB] flex items-center justify-center font-bold text-xs">
                            C1
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Main Broadcaster</div>
                            <div className="text-[11px] text-[#94A3B8]">HLS / DASH Multi-stream</div>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-[#12B76A]" />
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#161B26] border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#0BA5EC]/20 text-[#0BA5EC] flex items-center justify-center font-bold text-xs">
                            C2
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Sports Live Channel</div>
                            <div className="text-[11px] text-[#94A3B8]">Low-Latency SRT Ingest</div>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-[#12B76A]" />
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#161B26] border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#EE46BC]/20 text-[#EE46BC] flex items-center justify-center font-bold text-xs">
                            C3
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">VoD Catalog Engine</div>
                            <div className="text-[11px] text-[#94A3B8]">10,400+ Assets Hosted</div>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-[#12B76A]" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                      Multi-Device Target Apps
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium text-white">
                      <span className="px-2 py-1 rounded-md bg-[#7A5AF8]/20 text-[#BDB4FE] font-semibold">Web</span>
                      <span className="px-2 py-1 rounded-md bg-[#7A5AF8]/20 text-[#BDB4FE] font-semibold">iOS</span>
                      <span className="px-2 py-1 rounded-md bg-[#7A5AF8]/20 text-[#BDB4FE] font-semibold">Android</span>
                      <span className="px-2 py-1 rounded-md bg-[#7A5AF8]/20 text-[#BDB4FE] font-semibold">Smart TV</span>
                      <span className="px-2 py-1 rounded-md bg-[#7A5AF8]/20 text-[#BDB4FE] font-semibold">Roku</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
