import { LiquidMetalButton } from '@/components/ui/liquid-metal-button'

export function Hero() {
  return (
    <section className="relative w-full bg-black text-[#faf9f5] pt-[80px] sm:pt-[90px] pb-[30px] px-3 sm:px-6 overflow-hidden">
      {/* Top Header Area: Heading & Subtitle / CTA */}
      <div className="max-w-[1405px] mx-auto px-4 sm:px-8 lg:px-[41px] pt-8 sm:pt-14 pb-10 sm:pb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12">
        {/* Heading 1 */}
        <div className="max-w-[992px] shrink-0">
          <h1
            className="text-[42px] sm:text-[58px] lg:text-[72px] leading-[1.12] lg:leading-[89px] tracking-[-2px] lg:tracking-[-3.3px] text-[#faf9f5] font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Your Streaming Empire.
            <br />
            From Our Source.
          </h1>
        </div>

        {/* Paragraph & Contact Sales Button */}
        <div className="flex flex-col gap-[24px] max-w-[290px] shrink-0 lg:pt-2">
          <p className="text-[16px] sm:text-[18.6px] leading-[25.1px] text-[rgba(250,249,245,0.7)] font-sans">
            Thoughtfully designed OTT ecosystem to connect your content to the world.
          </p>

          <div>
            <LiquidMetalButton
              label="Contact Sales"
              onClick={() => {
                const el = document.getElementById('contact')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          </div>
        </div>
      </div>

      {/* Hero Video Visual with Curved Neon Blades Arch */}
      <div className="max-w-[1870px] mx-auto rounded-[12.4px] p-[1.033px] bg-gradient-to-r from-[rgba(243,193,44,0.06)] via-[45%] via-[rgba(243,193,44,0.15)] to-[rgba(243,193,44,0.06)] shadow-2xl">
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] lg:h-[681px] bg-black overflow-hidden rounded-[12px]">
          {/* Subtract graphic: neon curved light pillars arch */}
          <div className="absolute top-0 left-1/2 -translate-x-[50%] w-[148.9%] h-[161.6%] pointer-events-none select-none">
            <img
              src="/figma-assets/s1_blades.png"
              alt="Streaming Stage"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Floating Explore CTA Button */}
          <div className="absolute right-5 sm:right-9 bottom-5 sm:bottom-9 z-10">
            <LiquidMetalButton
              label="Explore"
              onClick={() => {
                const el = document.getElementById('platform')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
