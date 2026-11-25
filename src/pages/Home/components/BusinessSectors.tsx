interface SectorItem {
  title: string
  description: string
  image: string
  href: string
}

const SECTOR_ROWS: SectorItem[][] = [
  [
    {
      title: 'OTTFAST FOR BROADCASTERS',
      description:
        'PowerStream and Captivate feature powerful live video broadcasting software for all audiences.',
      image: '/sectors/broadcasters.jpg',
      href: '#contact',
    },
    {
      title: 'OTTFAST FOR EDUCATION',
      description:
        'Educate and Motivate! Bring Your Video Courses Online In an App!',
      image: '/sectors/education.jpg',
      href: '#contact',
    },
    {
      title: 'OTTFAST FOR FILMMAKERS',
      description:
        'Create Your Own Personalized Movie Streaming Platform to Make Unlimited Revenue through Videos...',
      image: '/sectors/filmmakers.jpg',
      href: '#contact',
    },
    {
      title: 'OTTFAST FOR ENTERPRISE',
      description:
        'Engage your corporate workforce with a business streaming platform for live and on-demand video',
      image: '/sectors/enterprise.jpg',
      href: '#contact',
    },
  ],
  [
    {
      title: 'OTTFAST FOR FITNESS',
      description:
        'Procure 5X More Money by Streaming and Selling Fitness Courses',
      image: '/sectors/fitness.jpg',
      href: '#contact',
    },
    {
      title: 'OTTFAST FOR SPORTS',
      description:
        'Sports events can be broadcast using OTT sports streaming software for live and on-demand viewing.',
      image: '/sectors/sports.jpg',
      href: '#contact',
    },
    {
      title: 'OTTFAST FOR RELIGIOUS',
      description:
        'Connect & Involve Your Communities With Live & On-Demand Religious Streaming Platform',
      image: '/sectors/religious.jpg',
      href: '#contact',
    },
    {
      title: 'OTTFAST FOR YOUTUBERS',
      description: 'Think outside of YouTube! Create 5x More Revenue',
      image: '/sectors/youtubers.jpg',
      href: '#contact',
    },
  ],
]

export function BusinessSectors() {
  return (
    <section id="industries" className="relative w-full bg-black py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-12">
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.2] tracking-[-1.2px] text-[#faf9f5] mb-3"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Streaming Solutions for Every Business Sector
          </h2>
          <p className="text-[16px] sm:text-[17px] leading-[26px] text-white/70">
            OTTFAST supports streaming goals on a very large scale.
          </p>
        </div>

        {/* Two Horizontal Image Accordion Rows (matching ottfast.com eael-img-accordion) */}
        <div className="space-y-6">
          {SECTOR_ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-col md:flex-row w-full md:h-[400px] overflow-hidden rounded-[12px] border border-white/10"
            >
              {row.map((sector) => (
                <a
                  key={sector.title}
                  href={sector.href}
                  className="group relative flex-1 md:hover:flex-[3] md:focus-visible:flex-[3] min-h-[240px] md:min-h-0 overflow-hidden transition-[flex] duration-400 ease-out border-b md:border-b-0 md:border-r last:border-b-0 last:border-r-0 border-white/10"
                >
                  {/* 4K Local Image from ottfast.com */}
                  <img
                    src={sector.image}
                    alt={sector.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Overlay (darkens on hover for crisp white text) */}
                  <div className="absolute inset-0 bg-black/30 md:bg-black/20 group-hover:bg-black/60 transition-colors duration-300" />

                  {/* Centered Overlay Text matching Elementor transition: all .3s .3s */}
                  <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 py-8">
                    <div className="max-w-md opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-visible:opacity-100 md:group-focus-visible:translate-y-0 transition-all duration-300 md:delay-300">
                      <h3 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight uppercase mb-2.5">
                        {sector.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/90">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
