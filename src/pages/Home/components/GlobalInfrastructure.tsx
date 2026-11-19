import { WorldMap } from '@/components/ui/world-map'
import { Globe2, Zap, Shield, Server, ArrowRight } from 'lucide-react'

export function GlobalInfrastructure() {
  const cdnRoutes = [
    {
      start: { lat: 37.7749, lng: -122.4194, label: 'US West' }, // San Francisco
      end: { lat: 40.7128, lng: -74.006, label: 'US East' }, // New York
    },
    {
      start: { lat: 40.7128, lng: -74.006 }, // New York
      end: { lat: 51.5074, lng: -0.1278, label: 'London' }, // London
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 50.1109, lng: 8.6821, label: 'Frankfurt' }, // Frankfurt
    },
    {
      start: { lat: 50.1109, lng: 8.6821 }, // Frankfurt
      end: { lat: 19.076, lng: 72.8777, label: 'Mumbai' }, // Mumbai
    },
    {
      start: { lat: 19.076, lng: 72.8777 }, // Mumbai
      end: { lat: 1.3521, lng: 103.8198, label: 'Singapore' }, // Singapore
    },
    {
      start: { lat: 1.3521, lng: 103.8198 }, // Singapore
      end: { lat: 35.6762, lng: 139.6503, label: 'Tokyo' }, // Tokyo
    },
    {
      start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
      end: { lat: -33.8688, lng: 151.2093, label: 'Sydney' }, // Sydney
    },
    {
      start: { lat: 40.7128, lng: -74.006 }, // New York
      end: { lat: -23.5505, lng: -46.6333, label: 'São Paulo' }, // São Paulo
    },
  ]

  const metrics = [
    {
      icon: <Server className="w-5 h-5 text-[#A48AFB]" />,
      value: '150+',
      label: 'Edge Locations',
      subtext: 'Global Tier-1 CDN PoPs',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#0BA5EC]" />,
      value: '< 0.8s',
      label: 'Glass Latency',
      subtext: 'Sub-second live streaming',
    },
    {
      icon: <Globe2 className="w-5 h-5 text-[#12B76A]" />,
      value: '120+ Tbps',
      label: 'Edge Capacity',
      subtext: 'High-concurrency backbone',
    },
    {
      icon: <Shield className="w-5 h-5 text-[#EE46BC]" />,
      value: '99.99%',
      label: 'Uptime SLA',
      subtext: 'Broadcast-grade reliability',
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-[#090D14] border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7A5AF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A5AF8]/20 border border-white/10 text-[#BDB4FE] text-[13px] font-semibold tracking-wide mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global Distribution • Low-Latency Edge CDN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white font-heading leading-tight mb-4">
            Broadcast to Millions Globally <br className="hidden sm:inline" />
            with Zero Buffering
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Distribute high-throughput 4K live feeds and VoD catalogs worldwide through intelligent edge routing,
            localized DRM licensing, and Tier-1 multi-CDN peering.
          </p>
        </div>

        {/* 4 Infrastructure Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#111622] border border-white/10 shadow-xl hover:border-[#7A5AF8]/40 transition-all text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {item.label}
              </div>
              <div className="text-xs text-[#94A3B8] mt-0.5">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Aceternity UI World Map Canvas Container */}
        <div className="relative rounded-3xl bg-[#111622] border border-white/10 p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          {/* Decorative Corner Watermark */}
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#12B76A] animate-pulse" />
            <span className="text-xs font-mono font-semibold text-white/80 uppercase tracking-wider">
              Live Edge CDN Routing Active
            </span>
          </div>

          <div className="absolute top-6 right-6 z-10 hidden sm:flex items-center gap-3 text-xs text-[#94A3B8] font-mono">
            <span>Primary Protocol: LL-HLS / SRT</span>
            <span>•</span>
            <span className="text-[#A48AFB]">Multi-Bitrate Dynamic</span>
          </div>

          {/* Interactive World Map Component */}
          <div className="pt-8 sm:pt-4">
            <WorldMap dots={cdnRoutes} lineColor="#7A5AF8" />
          </div>

          {/* Map Footer Info */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
            <p>
              Auto-failover peering across AWS Cloud, Akamai, Cloudflare, Fastly, and custom ISP edge nodes.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[#A48AFB] hover:text-white font-semibold transition-colors shrink-0"
            >
              <span>Explore CDN topology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
