import {
  Sparkles,
  DollarSign,
  Cpu,
  Tv,
  Globe,
  BarChart3,
  ArrowRight
} from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#A48AFB]" />,
      iconBg: 'bg-[#7A5AF8]/20',
      title: '100% White-Label Platform',
      description:
        'Enable your brand to shine. Complete ownership and control of your subscriber relationships, custom domain, and audience data without third-party platform branding.',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#12B76A]" />,
      iconBg: 'bg-[#12B76A]/20',
      title: 'Instant Multi-Model Monetization',
      description:
        'Monetize your video catalog instantly through SVOD recurring subscriptions, AVOD ad-insertion (VAST/VMAP), TVOD pay-per-view, and linear FAST channels.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#0BA5EC]" />,
      iconBg: 'bg-[#0BA5EC]/20',
      title: 'AI-Powered Recommendations',
      description:
        'Utilize artificial intelligence to boost viewer retention and watch-time. Surface tailored content discovery based on individual viewing habits and watch history.',
    },
    {
      icon: <Tv className="w-6 h-6 text-[#EE46BC]" />,
      iconBg: 'bg-[#EE46BC]/20',
      title: 'Turnkey FAST Channel Playout',
      description:
        'Easily build, program, and schedule 24/7 cloud linear streaming channels with automated Electronic Program Guides (EPG) and server-side ad insertion (SSAI).',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#FB6514]" />,
      iconBg: 'bg-[#FB6514]/20',
      title: 'Global Tier-1 CDN Distribution',
      description:
        'Deliver stunning 4K and Full HD video over 150+ edge caching locations worldwide for bufferless, low-latency streaming experiences across all network conditions.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#A48AFB]" />,
      iconBg: 'bg-[#7A5AF8]/20',
      title: 'Real-Time Streaming Analytics',
      description:
        'Gain full visibility into audience engagement, concurrent streaming peaks, geographic distribution, viewer drop-off rates, and revenue attribution.',
    },
  ]

  return (
    <section id="benefits" className="py-24 sm:py-32 bg-[#0B0F17] border-t border-white/10">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (matching BrightHub pxl_heading) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A5AF8]/20 border border-white/10 text-[#BDB4FE] text-[13px] font-semibold tracking-wide mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Benefits • Designed for Media Scale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white font-heading leading-tight mb-4">
            Why Content Owners &amp; Media Houses <br className="hidden sm:inline" />
            Choose OTTFast
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Built for media networks, independent filmmakers, educators, and enterprise teams who need complete ownership,
            rapid time-to-market, and broadcast-grade reliability.
          </p>
        </div>

        {/* 6-Card Grid (3x2 matching BrightHub) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#111622] border border-white/10 hover:border-[#7A5AF8]/50 hover:shadow-2xl hover:shadow-[#7A5AF8]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-[#BDB4FE] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#94A3B8] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-sm font-semibold text-[#A48AFB] group-hover:translate-x-1 transition-transform">
                <span>Explore capability</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
