import {
  Tv,
  Hotel,
  Network,
  Radio,
  Building,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export function IPTVSection() {
  const solutions = [
    {
      icon: <Hotel className="w-6 h-6 text-[#7A5AF8]" />,
      iconBg: 'bg-[#F4F3FF]',
      title: 'IPTV for Hotels & Hospitality',
      description:
        'Deliver interactive guest-room TV entertainment, customized branded hotel portals, on-demand movies, and integration with Property Management Systems (PMS).',
      features: ['Custom Hotel Welcome Screen', 'VOD Movie Rentals', 'PMS Billing Integration'],
    },
    {
      icon: <Network className="w-6 h-6 text-[#0BA5EC]" />,
      iconBg: 'bg-[#F0F9FF]',
      title: 'IPTV for MSOs & Telecom ISPs',
      description:
        'End-to-end turnkey IPTV middleware, headend streaming integration, and multi-cast / unicast delivery pipelines optimized for broadband network operators.',
      features: ['Multicast & Unicast Support', 'Set-Top Box Middleware', 'Subscriber Management'],
    },
    {
      icon: <Radio className="w-6 h-6 text-[#12B76A]" />,
      iconBg: 'bg-[#ECFDF3]',
      title: 'HbbTV & Hybrid Broadcast',
      description:
        'Bridge traditional linear broadcast TV with interactive broadband services. Provide interactive red-button services, catch-up TV, and targetable advertisements.',
      features: ['Red-Button Interactive TV', 'Catch-Up & On-Demand', 'Targeted Ad Delivery'],
    },
    {
      icon: <Building className="w-6 h-6 text-[#EE46BC]" />,
      iconBg: 'bg-[#FDF2FA]',
      title: 'IPTV for Governments & Public Sector',
      description:
        'Secure internal media distribution for government assemblies, educational institutions, and public infrastructure with localized encryption and access control.',
      features: ['Secure Internal Streaming', 'Air-Gapped Deployment', 'Multi-Language Feeds'],
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFC] border-t border-[#E9EAEB]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E9EAEB] text-[#7A5AF8] text-[13px] font-semibold tracking-wide mb-4 shadow-xs">
            <Tv className="w-3.5 h-3.5" />
            <span>Infrastructure • Enterprise Video Networks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#181D27] font-heading leading-tight mb-4">
            Turnkey IPTV, Smart TV &amp; HbbTV Solutions
          </h2>

          <p className="text-base sm:text-lg text-[#535862] leading-relaxed">
            Enterprise video delivery infrastructure for telecom operators, hospitality chains, content syndicators, and broadcast networks worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-[#E9EAEB] hover:border-[#7A5AF8]/40 hover:shadow-xl hover:shadow-[#7A5AF8]/6 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-[#181D27] font-heading mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#535862] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 border-t border-[#E9EAEB]/60 pt-4">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-[#181D27]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#12B76A] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E9EAEB]/60">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A5AF8] hover:text-[#6941C6] transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
