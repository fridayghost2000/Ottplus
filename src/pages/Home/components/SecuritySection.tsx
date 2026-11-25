import { LiquidMetalButton } from '@/components/ui/liquid-metal-button'

export function SecuritySection() {
  return (
    <section className="relative w-full bg-black py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1405px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[24px] overflow-hidden border border-white/10 bg-[#0d0d0d] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Subtle background texture */}
          <img
            src="/figma-assets/s6_bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />

          {/* Left Security Graphic / Shield */}
          <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center">
            <img
              src="/figma-assets/s6_shield.png"
              alt="Enterprise Security Shield"
              className="w-full max-w-[540px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Right Text & CTA */}
          <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start gap-6 max-w-xl">
            <h2
              className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.15] lg:leading-[64px] font-bold text-white tracking-tight"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Stream confidently with enterprise-grade protection.
            </h2>

            <p className="text-[17px] sm:text-[18.6px] leading-[26px] text-white/80">
              Protect your data and meet your compliance targets with our comprehensive security tools.
            </p>

            <div>
              <LiquidMetalButton
                label="Discover More"
                onClick={() => {
                  const el = document.getElementById('contact')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
