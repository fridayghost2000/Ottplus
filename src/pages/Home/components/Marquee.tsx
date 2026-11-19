export function Marquee() {
  const partners = [
    { name: 'Apple TV', category: 'tvOS App Ecosystem' },
    { name: 'Roku', category: 'Roku Channel Store' },
    { name: 'Samsung Tizen', category: 'Smart TV OS' },
    { name: 'LG webOS', category: 'Smart TV Platform' },
    { name: 'Amazon Fire TV', category: 'Fire OS Streaming' },
    { name: 'Android TV', category: 'Google TV & Android' },
    { name: 'Chromecast', category: 'Cast Protocol' },
    { name: 'AWS Cloud', category: 'Cloud Infrastructure' },
    { name: 'Akamai', category: 'Edge CDN Network' },
    { name: 'Cloudflare', category: 'Global Edge Security' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-[#FAFAFC] border-y border-[#E9EAEB] overflow-hidden">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#535862]">
          Powering Broadcast-Grade Streaming Across Global Devices &amp; Edge Networks
        </p>
      </div>

      {/* Infinite scrolling track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max gap-8 sm:gap-12 animate-marquee hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-[#E9EAEB] shadow-xs hover:border-[#7A5AF8]/40 hover:shadow-sm transition-all cursor-pointer group shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F4F3FF] group-hover:bg-[#7A5AF8] text-[#7A5AF8] group-hover:text-white flex items-center justify-center font-bold text-xs transition-colors">
                {partner.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#181D27] group-hover:text-[#7A5AF8] transition-colors">
                  {partner.name}
                </div>
                <div className="text-[11px] text-[#535862]">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
