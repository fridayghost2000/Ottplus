import {
  Server,
  Activity,
  Layers,
  ShieldCheck,
  Tv,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Lock
} from 'lucide-react'

export function BentoGrid() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7A5AF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0BA5EC]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (matching BrightHub pxl_heading) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F3FF] border border-[#EBE7FB] text-[#7A5AF8] text-[13px] font-semibold tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture • Built for Real Scale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#181D27] font-heading leading-tight mb-4">
            Foundation for High-Performing <br className="hidden sm:inline" />
            Video Streaming Services
          </h2>

          <p className="text-base sm:text-lg text-[#535862] leading-relaxed">
            Empower your media organization with turnkey tools that simplify content upload,
            automate cloud transcoding, protect premium rights, and stream buffer-free to millions.
          </p>
        </div>

        {/* Bento Grid Layout (Asymmetrical 5-tile arrangement) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Video Hosting & CMS (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#F8F9FC] border border-[#E9EAEB] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7A5AF8]/40 hover:shadow-xl hover:shadow-[#7A5AF8]/5 transition-all duration-300 group">
            <div className="space-y-3 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E9EAEB] text-[#7A5AF8] text-xs font-semibold">
                <Server className="w-3.5 h-3.5" /> Media Asset Management
              </div>
              <h3 className="text-2xl font-bold text-[#181D27] font-heading">
                All-in-One Video Hosting &amp; CMS
              </h3>
              <p className="text-sm sm:text-base text-[#535862] leading-relaxed max-w-xl">
                Upload, store, transcode, organize, and schedule your media assets with granular metadata,
                custom playlists, multi-language audio tracks, and automated EPG linear programming.
              </p>
            </div>

            {/* CMS UI Interactive Mockup Preview */}
            <div className="bg-white rounded-2xl border border-[#E9EAEB] p-4 sm:p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#535862] pb-2 border-b border-[#E9EAEB]">
                <span>Asset Name &amp; Metadata</span>
                <span>Bitrate / Format</span>
                <span className="hidden sm:inline">Status</span>
              </div>

              <div className="p-3 rounded-xl bg-[#F8F9FC] border border-[#E9EAEB] flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#7A5AF8] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    4K
                  </div>
                  <div>
                    <div className="font-bold text-[#181D27] text-sm">Championship Finals Live Feed</div>
                    <div className="text-[#535862] text-[11px]">Duration: 02:45:10 • Multi-Audio (EN, ES, FR)</div>
                  </div>
                </div>
                <div className="font-mono text-[#535862] text-right">
                  <div>HLS / DASH</div>
                  <div className="text-[10px] text-[#12B76A] font-semibold">6.8 Mbps Adaptive</div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ECFDF3] text-[#12B76A] font-semibold text-[11px]">
                  <CheckCircle2 className="w-3 h-3" /> Ready
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E9EAEB] flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0BA5EC] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    HD
                  </div>
                  <div>
                    <div className="font-bold text-[#181D27] text-sm">Documentary Feature Premiere</div>
                    <div className="text-[#535862] text-[11px]">Duration: 01:34:00 • DRM Protected</div>
                  </div>
                </div>
                <div className="font-mono text-[#535862] text-right">
                  <div>MP4 / VoD</div>
                  <div className="text-[10px] text-[#7A5AF8] font-semibold">4.2 Mbps Multi</div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ECFDF3] text-[#12B76A] font-semibold text-[11px]">
                  <CheckCircle2 className="w-3 h-3" /> Ready
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Track Your Success (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#F8F9FC] border border-[#E9EAEB] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7A5AF8]/40 hover:shadow-xl hover:shadow-[#7A5AF8]/5 transition-all duration-300">
            <div className="space-y-3 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E9EAEB] text-[#0BA5EC] text-xs font-semibold">
                <Activity className="w-3.5 h-3.5" /> Performance Telemetry
              </div>
              <h3 className="text-2xl font-bold text-[#181D27] font-heading">
                Track Streaming Health &amp; ROI
              </h3>
              <p className="text-sm text-[#535862] leading-relaxed">
                Live audience telemetry, bandwidth distribution, and watch-time analytics to ensure optimal delivery worldwide.
              </p>
            </div>

            {/* 3 Metric Counters matching BrightHub style */}
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              <div className="p-3 rounded-2xl bg-white border border-[#E9EAEB] text-center">
                <div className="text-xl sm:text-2xl font-black text-[#12B76A] font-heading">
                  99.99%
                </div>
                <div className="text-[11px] font-semibold text-[#535862] mt-0.5">
                  Stream Uptime
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-[#E9EAEB] text-center">
                <div className="text-xl sm:text-2xl font-black text-[#7A5AF8] font-heading">
                  &lt; 0.8s
                </div>
                <div className="text-[11px] font-semibold text-[#535862] mt-0.5">
                  Glass Latency
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-[#E9EAEB] text-center">
                <div className="text-xl sm:text-2xl font-black text-[#0BA5EC] font-heading">
                  100%
                </div>
                <div className="text-[11px] font-semibold text-[#535862] mt-0.5">
                  White Label
                </div>
              </div>
            </div>

            {/* Performance SVG Visual Graph */}
            <div className="bg-white rounded-2xl p-4 border border-[#E9EAEB] space-y-2">
              <div className="flex items-center justify-between text-xs text-[#535862]">
                <span className="font-semibold text-[#181D27]">Real-Time CDN Bitrate Delivery</span>
                <span className="text-[#12B76A] font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> Optimal Curve
                </span>
              </div>
              <svg viewBox="0 0 400 90" className="w-full h-18 text-[#7A5AF8]" fill="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7A5AF8" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#7A5AF8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 Q60,30 120,45 T240,20 T360,15 L400,25 L400,90 L0,90 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,70 Q60,30 120,45 T240,20 T360,15 L400,25"
                  stroke="#7A5AF8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Card 3: Multi-Screen Collaborative Distribution (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-[#F8F9FC] border border-[#E9EAEB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#7A5AF8]/40 hover:shadow-xl hover:shadow-[#7A5AF8]/5 transition-all duration-300">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E9EAEB] text-[#EE46BC] text-xs font-semibold">
                <Tv className="w-3.5 h-3.5" /> Universal Ecosystem
              </div>
              <h3 className="text-xl font-bold text-[#181D27] font-heading">
                Multi-Screen Device Reach
              </h3>
              <p className="text-sm text-[#535862] leading-relaxed">
                Seamlessly launch native applications for iOS, Android, Apple TV, Android TV, Fire TV, Roku, Samsung Tizen, and LG webOS.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-6">
              <div className="p-3 rounded-xl bg-white border border-[#E9EAEB] text-center">
                <div className="text-sm font-bold text-[#181D27]">Smart TVs</div>
                <div className="text-[11px] text-[#535862]">Samsung &amp; LG</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E9EAEB] text-center">
                <div className="text-sm font-bold text-[#181D27]">Streaming Boxes</div>
                <div className="text-[11px] text-[#535862]">Roku, Apple TV, Fire</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E9EAEB] text-center">
                <div className="text-sm font-bold text-[#181D27]">Mobile Apps</div>
                <div className="text-[11px] text-[#535862]">iOS &amp; Android</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E9EAEB] text-center">
                <div className="text-sm font-bold text-[#181D27]">Web Player</div>
                <div className="text-[11px] text-[#535862]">HTML5 Adaptive</div>
              </div>
            </div>
          </div>

          {/* Card 4: Automated Cloud Transcoding (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-[#F8F9FC] border border-[#E9EAEB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#7A5AF8]/40 hover:shadow-xl hover:shadow-[#7A5AF8]/5 transition-all duration-300">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E9EAEB] text-[#7A5AF8] text-xs font-semibold">
                <Layers className="w-3.5 h-3.5" /> Video Transcoding
              </div>
              <h3 className="text-xl font-bold text-[#181D27] font-heading">
                Multi-Bitrate Encoding
              </h3>
              <p className="text-sm text-[#535862] leading-relaxed">
                Automatic generation of multiple resolution profiles ensuring instant playback without stutter across varying bandwidths.
              </p>
            </div>

            {/* Resolution meters matching BrightHub progress bars */}
            <div className="space-y-2.5 mt-6 bg-white p-4 rounded-2xl border border-[#E9EAEB]">
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#181D27] mb-1">
                  <span>4K UHD (2160p)</span>
                  <span className="text-[#12B76A]">Rendered</span>
                </div>
                <div className="w-full bg-[#F4F3FF] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#12B76A] h-2 rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[#181D27] mb-1">
                  <span>Full HD (1080p)</span>
                  <span className="text-[#12B76A]">Rendered</span>
                </div>
                <div className="w-full bg-[#F4F3FF] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#7A5AF8] h-2 rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[#181D27] mb-1">
                  <span>HD Ready (720p)</span>
                  <span className="text-[#12B76A]">Rendered</span>
                </div>
                <div className="w-full bg-[#F4F3FF] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#0BA5EC] h-2 rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[#181D27] mb-1">
                  <span>Mobile Adaptive (480p)</span>
                  <span className="text-[#12B76A]">Optimized</span>
                </div>
                <div className="w-full bg-[#F4F3FF] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#EE46BC] h-2 rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Studio-Grade Multi-DRM Security (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-[#F8F9FC] border border-[#E9EAEB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#7A5AF8]/40 hover:shadow-xl hover:shadow-[#7A5AF8]/5 transition-all duration-300">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E9EAEB] text-[#12B76A] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Studio Security
              </div>
              <h3 className="text-xl font-bold text-[#181D27] font-heading">
                Multi-DRM Content Protection
              </h3>
              <p className="text-sm text-[#535862] leading-relaxed">
                Hollywood-grade digital rights management with Widevine, FairPlay, and PlayReady licensing, dynamic forensic watermarking, and tokenized security.
              </p>
            </div>

            <div className="space-y-2 mt-6">
              <div className="p-2.5 rounded-xl bg-white border border-[#E9EAEB] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#181D27] flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#7A5AF8]" /> Apple FairPlay DRM
                </span>
                <span className="text-[#12B76A] font-semibold">Active</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#E9EAEB] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#181D27] flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#0BA5EC]" /> Google Widevine DRM
                </span>
                <span className="text-[#12B76A] font-semibold">Active</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#E9EAEB] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#181D27] flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#EE46BC]" /> Microsoft PlayReady
                </span>
                <span className="text-[#12B76A] font-semibold">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
