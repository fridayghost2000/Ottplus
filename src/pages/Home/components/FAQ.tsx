import { useState } from 'react'
import { Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How fast can we launch our branded OTT streaming apps?',
      answer:
        'With OTTFast’s turnkey white-label framework, your web streaming portal and mobile apps (iOS & Android) can be deployed in under 48 hours. Smart TV applications (Apple TV, Android TV, Fire TV, Roku, Samsung Tizen, LG webOS) typically take 2 to 3 weeks including store review and approval.',
    },
    {
      question: 'Which monetization models does OTTFast support?',
      answer:
        'OTTFast supports all industry-standard monetization architectures: SVOD (recurring subscriptions with free trials), AVOD (dynamic video advertising via VAST/VMAP/SSAI), TVOD (pay-per-view live tickets and transactional rentals), and free ad-supported linear FAST channels.',
    },
    {
      question: 'How does OTTFast protect our video content against piracy?',
      answer:
        'We enforce studio-grade Multi-DRM licensing covering Google Widevine, Apple FairPlay, and Microsoft PlayReady. In addition, OTTFast provides dynamic forensic user watermarking, geo-blocking, domain restrictions, and encrypted tokenized playback URLs.',
    },
    {
      question: 'Can we broadcast live events with ultra-low latency?',
      answer:
        'Yes. OTTFast provides low-latency live streaming protocols including LL-HLS, WebRTC, and SRT ingestion, delivering glass-to-glass latency under 0.8 seconds. This enables real-time sports broadcasting, live betting telemetry, interactive chat, and live Q&A.',
    },
    {
      question: 'Can we migrate our existing subscribers and video catalog to OTTFast?',
      answer:
        'Absolutely. Our dedicated migration engineering team provides automated ingestion tools to transfer your existing video catalog, metadata, multi-language subtitles, and active subscriber payment tokens without service disruption.',
    },
    {
      question: 'What kind of ongoing technical support is included?',
      answer:
        'All accounts receive 24/7 global network monitoring and ticket support. Growth and Enterprise plans include dedicated solutions architects, phone escalations, and guaranteed 99.99% stream uptime Service Level Agreements (SLA).',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#090D14] relative">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Subtitle & Support Button (matching BrightHub) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A5AF8]/20 border border-white/10 text-[#BDB4FE] text-[13px] font-semibold tracking-wide">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions • Answers &amp; Guidance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white font-heading leading-tight">
              Need Help? <br />
              We’ve Got You Covered.
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              From automated cloud transcoding and multi-DRM encryption to Smart TV app deployment — here are the answers to your most common streaming questions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-[15px] font-semibold h-12 px-7 rounded-full shadow-lg shadow-[#7A5AF8]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Talk to an OTT Architect</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Items (matching BrightHub pxl_accordion) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#7A5AF8]/50 bg-[#161B26] shadow-xl'
                      : 'border-white/10 bg-[#111622] hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-white font-heading">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#7A5AF8] text-white'
                          : 'bg-[#161B26] text-[#BDB4FE] border border-white/10'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-[15px] text-[#94A3B8] leading-relaxed border-t border-white/10 pt-4 animate-in fade-in duration-200 text-left">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
