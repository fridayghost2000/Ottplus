import { LiquidMetalButton } from '@/components/ui/liquid-metal-button'

export function CTASection() {
  return (
    <section className="relative w-full bg-black pt-12 lg:pt-20 pb-0 overflow-hidden">
      <div className="max-w-[1870px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[723px] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center justify-center">
          {/* Background Resort Image */}
          <img
            src="/figma-assets/s7_bg.png"
            alt="Video Engagement Background"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Subtle Overlay for Readability while keeping background clear */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Top Center Curved Notch / Tag */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black px-6 sm:px-10 py-4 sm:py-5 rounded-b-[24px] border-b border-x border-white/10 max-w-[480px] text-center z-10 shadow-xl">
            <p className="text-[14px] sm:text-[17px] leading-[22px] font-medium text-white/95">
              See how the OTTFast Video Engagement Platform can help your business reach its full potential through video
            </p>
          </div>

          {/* Center Title & Button */}
          <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-2xl px-4 mt-8">
            <h2
              className="text-[48px] sm:text-[62px] lg:text-[74.4px] leading-[1.1] font-bold text-[#faf9f5] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Ready, set,
              <br />
              engage
            </h2>

            <div className="pt-2">
              <LiquidMetalButton
                label="Get Started"
                onClick={() => {
                  const el = document.getElementById('contact')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
            </div>
          </div>

          {/* Bottom Left OTTFast Brand Tag (matching Figma node 1:2422) */}
          <div className="absolute bottom-0 left-0 bg-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-tr-[24px] border-t border-r border-white/10 flex items-center z-10">
            <img
              src="/logo.png"
              alt="OTTFast"
              className="h-[30px] sm:h-[34px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
