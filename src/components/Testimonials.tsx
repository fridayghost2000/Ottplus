import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote:
        'Switching to OTTFast was a game-changer for our national broadcast network. We launched our branded Smart TV applications across Samsung and LG in under 3 weeks, and stream latency dropped significantly.',
      author: 'Marcus Vance',
      role: 'VP of Digital Media',
      company: 'AeroStream Networks',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      quote:
        'The multi-model monetization and Widevine DRM protection gave our film studio the confidence to premiere our latest movie directly to viewers worldwide. The ROI and customer feedback have been outstanding.',
      author: 'Elena Rostova',
      role: 'Head of Distribution',
      company: 'CineSphere Films',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
    {
      quote:
        'Our online learning academy needed dynamic forensic watermarking and multi-bitrate transcoding to ensure uninterrupted streaming across emerging markets. OTTFast delivered on every single promise.',
      author: 'Dr. Kevin Thorne',
      role: 'Founder & CEO',
      company: 'OmniLearn Global',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
  ]

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F3FF] border border-[#EBE7FB] text-[#7A5AF8] text-[13px] font-semibold tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted • Proof That It Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#181D27] font-heading leading-tight mb-4">
            Trusted by Broadcasters &amp; Creators Worldwide
          </h2>

          <p className="text-base sm:text-lg text-[#535862] leading-relaxed">
            See how forward-thinking media enterprises, independent filmmakers, and digital broadcasters scale their streaming operations with OTTFast.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#F8F9FC] border border-[#E9EAEB] p-8 sm:p-12 lg:p-16 relative shadow-sm">
          <Quote className="w-16 h-16 text-[#7A5AF8]/15 absolute top-8 right-8" />

          <div className="space-y-8 relative z-10 text-left">
            {/* Stars */}
            <div className="flex items-center gap-1.5 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="ml-2 text-sm font-bold text-[#181D27]">5.0 / 5.0</span>
            </div>

            {/* Quote */}
            <p className="text-xl sm:text-2xl lg:text-[26px] font-medium text-[#181D27] font-heading leading-relaxed italic">
              “{current.quote}”
            </p>

            {/* Author Meta & Carousel Nav Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E9EAEB]">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <div className="text-base font-bold text-[#181D27] font-heading">{current.author}</div>
                  <div className="text-sm text-[#535862]">
                    {current.role} • <span className="font-semibold text-[#7A5AF8]">{current.company}</span>
                  </div>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full bg-white border border-[#E9EAEB] hover:border-[#7A5AF8] hover:text-[#7A5AF8] text-[#181D27] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-white border border-[#E9EAEB] hover:border-[#7A5AF8] hover:text-[#7A5AF8] text-[#181D27] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
