import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button'
import { HoverHighlightGrid } from '@/components/ui/hover-highlight'
import { DeviceLogos5D, HlsPlayer5D, Visual5D } from '@/components/ui/visual-5d'
import { CTASection } from '@/pages/Home/components/CTASection'
import {
  PRODUCT_CATEGORIES,
  PRODUCTS_DATA,
  getProductBySlug,
} from '@/data/products'
import { PRODUCT_THEMES, ProductUniqueSection } from './ProductLayouts'

export default function ProductsPage() {
  const { slug } = useParams<{ slug?: string }>()
  const navigate = useNavigate()
  const activeProduct = getProductBySlug(slug) ?? PRODUCTS_DATA[0]
  const isCatalogView = !slug
  const theme = PRODUCT_THEMES[activeProduct.slug] ?? PRODUCT_THEMES['ott-platform']

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.category === activeProduct.category && p.slug !== activeProduct.slug,
  )

  return (
    <div className="w-full bg-black text-[#faf9f5] overflow-x-hidden">
      <div className="max-w-[1920px] mx-auto relative">
        {/* Catalog Overview Hero */}
        {isCatalogView ? (
          <section className="relative w-full bg-black min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center pt-[120px] sm:pt-[140px] pb-20 lg:pb-28 px-4 sm:px-8">
            <div className="w-full max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h1
                  className="text-[38px] sm:text-[52px] lg:text-[62px] leading-[1.12] tracking-[-1.8px] text-[#faf9f5] font-normal"
                  style={{ fontFamily: "'Adamina', Georgia, serif" }}
                >
                  Everything You Need to Launch & Scale Your OTT Empire.
                </h1>
                <p className="text-[16px] sm:text-[18px] leading-[27px] text-[rgba(250,249,245,0.72)] max-w-xl">
                  Explore OTTFast’s complete suite of white-label OTT streaming, video hosting,
                  Smart TV apps, IPTV solutions, DRM security, and AI analytics.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <LiquidMetalButton
                    label="Request Demo"
                    onClick={() => navigate('/#contact')}
                  />
                  <Link
                    to="/#platform"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-[14px] font-medium text-white transition-colors"
                  >
                    <span>Explore Platform Overview</span>
                    <ArrowRight className="size-4 text-[#A48AFB]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <Visual5D
                  src="/ottfast-images/ott-platform-5d.png"
                  alt="OTTFast All-in-One OTT Suite"
                  glowColor="rgba(164, 138, 251, 0.38)"
                  maxHeightClass="max-h-[480px]"
                />
              </div>
            </div>
          </section>
        ) : (
          /* Distinct Hero Composition per Product */
          <section className="relative w-full bg-black min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center pt-[120px] sm:pt-[140px] pb-20 lg:pb-28 px-4 sm:px-8 overflow-hidden">
            {activeProduct.heroBgImage ? (
              <>
                <motion.img
                  src={activeProduct.heroBgImage}
                  alt=""
                  animate={{ scale: [1.02, 1.06, 1.02] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover object-right opacity-90 pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              </>
            ) : (
              <>
                {/* Homepage-matched neon curved light pillars arch & warm gold/accent glow */}
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
              </>
            )}
            <div className="relative z-10 w-full max-w-[1405px] mx-auto">
              {theme.heroLayout === 'centered' && (
                <div className="max-w-4xl mx-auto text-center space-y-6 py-10 sm:py-16 lg:py-24">
                  <h1
                    className="text-[38px] sm:text-[52px] lg:text-[62px] leading-[1.12] tracking-[-1.8px] text-[#faf9f5] font-normal"
                    style={{ fontFamily: "'Adamina', Georgia, serif" }}
                  >
                    {activeProduct.heroHeadline}
                  </h1>
                  <p className="text-[16px] sm:text-[18px] leading-[27px] text-[rgba(250,249,245,0.72)] max-w-2xl mx-auto">
                    {activeProduct.heroSummary}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <LiquidMetalButton
                      label="Request Demo"
                      onClick={() => navigate('/#contact')}
                    />
                    <Link
                      to={activeProduct.homepageSectionHref}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-[14px] font-medium text-white transition-colors"
                    >
                      <span>{activeProduct.homepageSectionLabel}</span>
                      <ArrowRight className="size-4" style={{ color: theme.accentHex }} />
                    </Link>
                  </div>
                </div>
              )}

              {theme.heroLayout === 'split-left' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    {activeProduct.slug === 'media-player' ? (
                      <HlsPlayer5D />
                    ) : (
                      <Visual5D
                        src={activeProduct.heroImage}
                        secondarySrc={activeProduct.secondaryImage}
                        alt={activeProduct.title}
                        glowColor={theme.glowRgba}
                        maxHeightClass="max-h-[430px]"
                      />
                    )}
                  </div>
                  <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                    <h1
                      className="text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.12] tracking-[-1.8px] text-[#faf9f5] font-normal"
                      style={{ fontFamily: "'Adamina', Georgia, serif" }}
                    >
                      {activeProduct.heroHeadline}
                    </h1>
                    <p className="text-[16px] sm:text-[18px] leading-[27px] text-[rgba(250,249,245,0.72)] max-w-xl">
                      {activeProduct.heroSummary}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <LiquidMetalButton
                        label="Request Demo"
                        onClick={() => navigate('/#contact')}
                      />
                      <Link
                        to={activeProduct.homepageSectionHref}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-[14px] font-medium text-white transition-colors"
                      >
                        <span>{activeProduct.homepageSectionLabel}</span>
                        <ArrowRight className="size-4" style={{ color: theme.accentHex }} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Unique Interactive / Visual Section Per Product */}
        {!isCatalogView && <ProductUniqueSection product={activeProduct} />}

        {/* Product Specs & Core Capabilities */}
        {!isCatalogView && (
          <section className="w-full py-14 lg:py-20 px-4 sm:px-8 border-t border-white/10">
            <div className="max-w-[1405px] mx-auto space-y-10">
              <HoverHighlightGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {activeProduct.specs.map((spec) => (
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
                {activeProduct.highlights.map((item) => (
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

        {/* Product Catalog / Related Products */}
        <section className="w-full py-16 lg:py-24 px-4 sm:px-8 border-t border-white/10">
          <div className="max-w-[1405px] mx-auto space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#A48AFB] mb-2">
                  {isCatalogView ? 'PRODUCT CATALOG' : 'MORE IN THIS SUITE'}
                </p>
                <h2
                  className="text-[30px] sm:text-[40px] text-[#faf9f5] font-normal"
                  style={{ fontFamily: "'Adamina', Georgia, serif" }}
                >
                  {isCatalogView ? 'Explore All OTTFast Products' : 'Explore Related Capabilities'}
                </h2>
              </div>
              {!isCatalogView && (
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[#A48AFB] hover:text-white transition-colors"
                >
                  <span>View all 13 products</span>
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>

            {isCatalogView ? (
              <div className="space-y-12">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <div key={cat.key} className="space-y-5">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#94A3B8] border-b border-white/10 pb-3">
                      {cat.label}
                    </h3>
                    <HoverHighlightGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {PRODUCTS_DATA.filter((p) => p.category === cat.key).map((product) => {
                        const cardTheme =
                          PRODUCT_THEMES[product.slug] ?? PRODUCT_THEMES['ott-platform']
                        return (
                          <Link
                            key={product.slug}
                            to={`/products/${product.slug}`}
                            className="group rounded-2xl bg-[#111111]/45 border border-white/[0.05] p-6 flex flex-col justify-between gap-5 transition-colors"
                          >
                            <div className="space-y-4">
                              <Visual5D
                                src={product.heroImage}
                                alt={product.title}
                                glowColor={cardTheme.glowRgba}
                                maxHeightClass="max-h-[150px]"
                              />
                              <h4 className="text-[19px] font-semibold text-white group-hover:text-[#A48AFB] transition-colors">
                                {product.title}
                              </h4>
                              <p className="text-[14px] text-white/70 leading-relaxed">
                                {product.heroSummary}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#A48AFB]">
                              Explore product <ArrowRight className="size-4" />
                            </span>
                          </Link>
                        )
                      })}
                    </HoverHighlightGrid>
                  </div>
                ))}
              </div>
            ) : (
              <HoverHighlightGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedProducts.map((product) => {
                  const cardTheme =
                    PRODUCT_THEMES[product.slug] ?? PRODUCT_THEMES['ott-platform']
                  return (
                    <Link
                      key={product.slug}
                      to={`/products/${product.slug}`}
                      className="group rounded-2xl bg-[#111111]/45 border border-white/[0.05] p-6 flex flex-col justify-between gap-4 transition-colors"
                    >
                      <div className="space-y-3">
                        <Visual5D
                          src={product.heroImage}
                          alt={product.title}
                          glowColor={cardTheme.glowRgba}
                          maxHeightClass="max-h-[120px]"
                        />
                        <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#94A3B8]">
                          {product.categoryLabel}
                        </div>
                        <h3 className="text-[19px] font-semibold text-white group-hover:text-[#A48AFB] transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-[14px] text-white/70">{product.shortDescription}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#A48AFB]">
                        Learn more <ArrowRight className="size-4" />
                      </span>
                    </Link>
                  )
                })}
              </HoverHighlightGrid>
            )}
          </div>
        </section>

        <CTASection />
      </div>
    </div>
  )
}
