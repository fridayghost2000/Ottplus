import { useState } from 'react'
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

export function CTABanner() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="request-demo" className="py-20 sm:py-28 bg-[#090D14] relative">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#121624] via-[#0E121D] to-[#0A0D15] border border-white/10 text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          {/* Atmospheric background glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#7A5AF8]/30 via-[#EE46BC]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-[#0BA5EC]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Background tech grid */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A5AF8]/20 border border-white/15 text-[#BDB4FE] text-[13px] font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Faster • Stream Worldwide</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold tracking-tight text-white font-heading leading-tight">
              Ready to Launch Your Turnkey <br className="hidden sm:inline" />
              Video Streaming Platform?
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Join hundreds of broadcast networks, film studios, educators, and creators who deliver world-class video with OTTFast.
            </p>

            {/* 3 Value Checkpoints */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs sm:text-sm font-medium text-neutral-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12B76A]" />
                <span>Zero upfront setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12B76A]" />
                <span>Launch in under 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12B76A]" />
                <span>100% white-label ownership</span>
              </div>
            </div>

            {/* Inline Demo Request Form */}
            <div className="pt-6 max-w-xl mx-auto">
              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Thank you! Our video solutions architect will connect with you within 24 hours.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-md p-2 rounded-2xl sm:rounded-full border border-white/15 shadow-xl"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate work email..."
                    className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-neutral-400 focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-sm font-semibold h-12 px-7 rounded-full shadow-lg shadow-[#7A5AF8]/40 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 cursor-pointer"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
