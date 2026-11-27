import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button'
import { HoverHighlightGrid } from '@/components/ui/hover-highlight'
import { Visual5D, DeviceLogos5D } from '@/components/ui/visual-5d'
import { CTASection } from '@/pages/Home/components/CTASection'
import { INDUSTRIES_DATA, getIndustryBySlug } from '@/data/industries'
import { INDUSTRY_THEMES, IndustryUniqueSection } from './IndustryLayouts'

export default function IndustryPage() {
  const { slug } = useParams<{ slug?: string }>()
  const navigate = useNavigate()
  const activeIndustry = getIndustryBySlug(slug) ?? INDUSTRIES_DATA[0]
  const isCatalogView = !slug
  const theme = INDUSTRY_THEMES[activeIndustry.slug] ?? INDUSTRY_THEMES['broadcast-media']

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  const otherIndustries = INDUSTRIES_DATA.filter((item) => item.slug !== activeIndustry.slug)

  return (
    <div className="w-full bg-black text-[#faf9f5] overflow-x-hidden">
      <div className="max-w-[1920px] mx-auto relative">
        {/* Catalog Overview Hero */}
        {isCatalogView ? (
          <section className="relative w-full bg-black min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center pt-[120px] sm:pt-[140px] pb-20 lg:pb-28 px-4 sm:px-8 overflow-hidden">
            {/* Animated neon curved light pillars arch & warm gold/accent glow (matching ProductsPage) */}
            <motion.img
              src="/figma-assets/s1_blades.png"
              alt=""
              animate={{ scale: [1, 1.04, 1], opacity: [0.28, 0.42, 0.28] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 65% 55% at 50% 20%, rgba(243, 193, 44, 0.08), transparent 65%), radial-gradient(ellipse 55% 50% at 25% 55%, ${theme.glowRgba}, transparent 70%)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <h1
                  className="text-[38px] sm:text-[52px] lg:text-[62px] leading-[1.12] tracking-[-1.8px] text-[#faf9f5] font-normal"
                  style={{ fontFamily: "'Adamina', Georgia, serif" }}
                >
                  Streaming Solutions for Every Business Sector.
                </h1>
                <p className="text-[16px] sm:text-[18px] leading-[27px] text-[rgba(250,249,245,0.72)] max-w-xl">
                  OTTFAST supports streaming goals on a very large scale—empowering broadcasters,
                  educators, filmmakers, enterprises, fitness coaches, sports leagues, faith
                  communities, and creators.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <LiquidMetalButton
                    label="Request Demo"
                    onClick={() => navigate('/#contact')}
                  />
                  <Link
                    to="/#industries"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-[14px] font-medium text-white transition-colors"
                  >
                    <span>View Business Sectors</span>
                    <ArrowRight className="size-4 text-[#A48AFB]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <Visual5D
                  src={activeIndustry.heroImage}
                  alt="OTTFast Industries Suite"
                  glowColor={theme.glowRgba}
                  maxHeightClass="max-h-[480px]"
                />
              </div>
            </motion.div>
          </section>
        ) : (
          /* Distinct Hero Composition per Industry (matching ProductsPage) */
          <section className="relative w-full bg-black min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center pt-[120px] sm:pt-[140px] pb-20 lg:pb-28 px-4 sm:px-8 overflow-hidden">
            {/* Animated neon curved light pillars arch & warm gold/accent glow (matching ProductsPage) */}
            <motion.img
              src="/figma-assets/s1_blades.png"
              alt=""
              animate={{ scale: [1, 1.04, 1], opacity: [0.28, 0.42, 0.28] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 65% 55% at 50% 20%, rgba(243, 193, 44, 0.08), transparent 65%), radial-gradient(ellipse 55% 50% at 25% 55%, ${theme.glowRgba}, transparent 70%)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black pointer-events-none" />

            <motion.div
              key={activeIndustry.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-[1405px] mx-auto"
            >
              {theme.heroLayout === 'centered' && (
                <div className="max-w-4xl mx-auto text-center space-y-6 py-10 sm:py-16 lg:py-24">
                  <h1
                    className="text-[38px] sm:text-[52px] lg:text-[62px] leading-[1.12] tracking-[-1.8px] text-[#faf9f5] font-normal"
                    style={{ fontFamily: "'Adamina', Georgia, serif" }}
                  >
                    {activeIndustry.heroHeadline}
                  </h1>
                  <p className="text-[16px] sm:text-[18px] leading-[27px] text-[rgba(250,249,245,0.72)] max-w-2xl mx-auto">
                    {activeIndustry.heroSummary}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <LiquidMetalButton
                      label="Request Demo"
                      onClick={() => navigate('/#contact')}
                    />
                    <Link
                      to={activeIndustry.homepageSectionHref}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-[14px] font-medium text-white transition-colors"
                    >
                      <span>{activeIndustry.homepageSectionLabel}</span>
                      <ArrowRight className="size-4" style={{ color: theme.accentHex }} />
                    </Link>
                  </div>
                </div>
              )}

              {theme.heroLayout === 'split-left' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <Visual5D
                      src={activeIndustry.heroImage}
                      alt={activeIndustry.title}
                      glowColor={theme.glowRgba}
                      maxHeightClass="max-h-[430px]"
                    />
                  </div>
                  <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                    <h1
                      className="text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.12] tracking-[-1.8px] text-[#faf9f5] font-normal"
                      style={{ fontFamily: "'Adamina', Georgia, serif" }}
                    >
                      {activeIndustry.heroHeadline}
                    </h1>
                    <p className="text-[16px] sm:text-[18px] leading-[27px] text-[rgba(250,249,245,0.72)] max-w-xl">
                      {activeIndustry.heroSummary}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <LiquidMetalButton
                        label="Request Demo"
                        onClick={() => navigate('/#contact')}
                      />
                      <Link
                        to={activeIndustry.homepageSectionHref}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-[14px] font-medium text-white transition-colors"
                      >
                        <span>{activeIndustry.homepageSectionLabel}</span>
                        <ArrowRight className="size-4" style={{ color: theme.accentHex }} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </section>
        )}

        {/* Unique Interactive / Animated Section Per Industry */}
        {!isCatalogView && <IndustryUniqueSection industry={activeIndustry} />}

        {/* Industry Specs & Core Capabilities */}
        {!isCatalogView && (
          <section className="w-full py-14 lg:py-20 px-4 sm:px-8 border-t border-white/10">
            <div className="max-w-[1405px] mx-auto space-y-10">
              <HoverHighlightGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {activeIndustry.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-2xl bg-[#111111]/45 border border-white/[0.05] p-5 cursor-pointer"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#94A3B8]">
                      {spec.label}
                    </div>
                    <div className="mt-2 text-[17px] sm:text-[19px] font-semibold text-white">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </HoverHighlightGrid>

              <HoverHighlightGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {activeIndustry.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-[#111111]/45 border border-white/[0.05] p-6 space-y-3 cursor-pointer"
                  >
                    <div
                      className="size-9 rounded-lg bg-[#16161a] border border-white/10 flex items-center justify-center"
                      style={{ color: theme.accentHex }}
                    >
                      <CheckCircle2 className="size-4" />
                    </div>
                    <h3 className="text-[17.5px] font-semibold text-white">{item.title}</h3>
                    <p className="text-[14px] leading-[22px] text-white/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </HoverHighlightGrid>
            </div>
          </section>
        )}

        {/* 5D Device Strip (Stream Across Every Screen) */}
        <DeviceLogos5D />

        {/* Full Industry Catalog / Related Sectors */}
        <section className="w-full py-16 lg:py-24 px-4 sm:px-8 border-t border-white/10">
          <div className="max-w-[1405px] mx-auto space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2
                  className="text-[30px] sm:text-[40px] text-[#faf9f5] font-normal"
                  style={{ fontFamily: "'Adamina', Georgia, serif" }}
                >
                  {isCatalogView
                    ? 'Explore All OTTFast Industries'
                    : 'Explore Other Business Sectors'}
                </h2>
              </div>
              {!isCatalogView && (
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[#A48AFB] hover:text-white transition-colors"
                >
                  <span>View all 8 industries</span>
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>

            <HoverHighlightGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {(isCatalogView ? INDUSTRIES_DATA : otherIndustries).map((industry) => (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="group rounded-2xl bg-[#111111]/45 border border-white/[0.05] p-5 flex flex-col justify-between gap-4 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="h-36 rounded-xl bg-black/50 border border-white/5 overflow-hidden">
                      <img
                        src={industry.heroImage}
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-[18px] font-semibold text-white group-hover:text-[#A48AFB] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-[13.5px] text-white/70 leading-relaxed">
                      {industry.shortDescription}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#A48AFB]">
                    Explore sector <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              ))}
            </HoverHighlightGrid>
          </div>
        </section>

        {/* Synced Homepage CTA Section */}
        <CTASection />
      </div>
    </div>
  )
}
