import { useState } from 'react'
import { Check, Sparkles, ArrowRight } from 'lucide-react'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      badge: 'Creator Tier',
      description: 'Ideal for independent creators, coaches, and studios launching their first video streaming service.',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Branded Web & Mobile HTML5 Player',
        '500 GB Secure Cloud Video Storage',
        '2,500 Monthly Active Viewers',
        'Multi-Bitrate Automated Transcoding',
        'SVOD Subscription Monetization',
        'Standard Email & Ticket Support',
      ],
      popular: false,
      ctaText: 'Choose Starter',
    },
    {
      name: 'Growth',
      badge: 'Most Popular',
      description: 'Built for scaling media brands, sports leagues, and video publishers demanding multi-screen apps.',
      monthlyPrice: 249,
      annualPrice: 199,
      features: [
        'Native iOS & Android Mobile Apps',
        '2 TB High-Performance Video Storage',
        '25,000 Monthly Active Viewers',
        '4K UHD Transcoding & Live Playout',
        'Full Multi-DRM (Widevine & FairPlay)',
        'SVOD, AVOD (SSAI/VAST) & TVOD Pay-per-view',
        'Custom Domain & 100% White-Label',
        'Priority 24/7 Technical Support',
      ],
      popular: true,
      ctaText: 'Choose Growth',
    },
    {
      name: 'Enterprise',
      badge: 'Broadcaster Tier',
      description: 'For national television networks, telecom operators, and major sports leagues requiring dedicated infrastructure.',
      monthlyPrice: 699,
      annualPrice: 599,
      features: [
        'Smart TV Apps (Samsung, LG, Roku, Fire TV, Apple TV)',
        'Unlimited Video Storage & Dedicated CDN',
        'Unlimited Concurrent Live Viewers',
        '24/7 Linear FAST Channel Playout & EPG',
        'SAML 2.0 / Okta Enterprise Single Sign-On',
        'Custom Player Skinning & SDK Integration',
        'Dedicated Solutions Architect & 99.99% SLA',
      ],
      popular: false,
      ctaText: 'Contact Enterprise',
    },
  ]

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#0B0F17] border-t border-white/10">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A5AF8]/20 border border-white/10 text-[#BDB4FE] text-[13px] font-semibold tracking-wide mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pricing • Value, Built for Scale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white font-heading leading-tight mb-4">
            Flexible Plans. Clear Value.
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Predictable streaming infrastructure pricing designed to scale as your viewership grows, with zero hidden setup costs.
          </p>

          {/* Billing Switcher (matching BrightHub style with 20% off badge) */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="p-1 rounded-full bg-[#111622] border border-white/10 shadow-xs flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  !isAnnual
                    ? 'bg-[#7A5AF8] text-white shadow-md'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Billed Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isAnnual
                    ? 'bg-[#7A5AF8] text-white shadow-md'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <span>Billed Yearly</span>
                <span className="px-2 py-0.5 rounded-full bg-[#12B76A]/20 text-[#12B76A] text-xs font-bold">
                  20% Off
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-[#111622] border-2 border-[#7A5AF8] shadow-[0_0_50px_rgba(122,90,248,0.25)] lg:-translate-y-2'
                    : 'bg-[#111622] border border-white/10 shadow-xl hover:border-[#7A5AF8]/40 hover:shadow-2xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7A5AF8] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-[#7A5AF8]/40">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-white font-heading">{plan.name}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#7A5AF8]/20 text-[#BDB4FE]">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed min-h-[44px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-black text-white font-heading">
                      ${price}
                    </span>
                    <span className="text-sm font-semibold text-[#94A3B8]">
                      / month
                    </span>
                    {isAnnual && (
                      <span className="text-xs text-[#12B76A] font-semibold ml-auto">
                        Billed annually
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-white">
                      Everything included:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-white font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#12B76A]/20 text-[#12B76A] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#request-demo"
                  className={`w-full inline-flex items-center justify-center gap-2 h-12 rounded-full text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#7A5AF8] hover:bg-[#6941C6] text-white shadow-lg shadow-[#7A5AF8]/40 hover:scale-[1.02]'
                      : 'bg-[#161B26] hover:bg-[#7A5AF8] text-white hover:text-white border border-white/10 hover:border-[#7A5AF8]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
