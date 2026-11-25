import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react'
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button'
import { CTASection } from '@/pages/Home/components/CTASection'
import {
  DEVICE_LOGOS,
  PRODUCT_CATEGORIES,
  PRODUCTS_DATA,
  getProductBySlug,
} from '@/data/products'

export default function ProductsPage() {
  const { slug } = useParams<{ slug?: string }>()
  const navigate = useNavigate()
  const activeProduct = getProductBySlug(slug) ?? PRODUCTS_DATA[0]
  const isCatalogView = !slug

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.category === activeProduct.category && p.slug !== activeProduct.slug,
  )

  return (
    <div className="w-full bg-black text-[#faf9f5] overflow-x-hidden">
      <div className="max-w-[1920px] mx-auto relative">
        {/* Hero Section */}
        <section className="relative w-full bg-black pt-[104px] sm:pt-[120px] pb-16 lg:pb-24 px-4 sm:px-8">
          <div className="max-w-[1405px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h1
                  className="text-[38px] sm:text-[52px] lg:text-[62px] leading-[1.12] tracking-[-1.8px] text-[#faf9f5] font-normal"
                  style={{ fontFamily: "'Adamina', Georgia, serif" }}
                >
                  {isCatalogView
                    ? 'Everything You Need to Launch & Scale Your OTT Empire.'
                    : activeProduct.heroHeadline}
                </h1>

                <p className="text-[16px] sm:text-[18px] leading-[27px] text-[rgba(250,249,245,0.72)] max-w-xl">
                  {isCatalogView
                    ? 'Explore OTTFast’s complete suite of white-label OTT streaming, video hosting, Smart TV apps, IPTV solutions, DRM security, and AI analytics.'
                    : activeProduct.heroSummary}
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
                    <ArrowRight className="size-4 text-[#A48AFB]" />
                  </Link>
                </div>
              </div>

              {/* Right Visual: Plain 5D render with no container/border */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <img
                  src={activeProduct.heroImage}
                  alt={activeProduct.title}
                  className="w-full h-auto max-h-[440px] object-contain mx-auto select-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities & Specs (for specific product) */}
        {!isCatalogView && (
          <section className="w-full py-14 lg:py-20 px-4 sm:px-8 border-t border-white/10">
            <div className="max-w-[1405px] mx-auto space-y-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {activeProduct.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-2xl bg-[#0b0b0f] border border-[#252833] p-5"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#94A3B8]">
                      {spec.label}
                    </div>
                    <div className="mt-2 text-[17px] sm:text-[19px] font-semibold text-white">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {activeProduct.highlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-[#0d0d12] border border-white/10 hover:border-[#A48AFB]/40 transition-colors p-6 space-y-3"
                    >
                      <div className="size-9 rounded-lg bg-[#16161a] border border-white/10 flex items-center justify-center text-[#A48AFB]">
                        <CheckCircle2 className="size-4" />
                      </div>
                      <h3 className="text-[18px] font-semibold text-white">{item.title}</h3>
                      <p className="text-[14.5px] leading-[22px] text-white/70">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-5 rounded-2xl bg-[#0b0b0f] border border-[#252833] p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#A48AFB]">
                    <Layers className="size-4" />
                    <span>Built For</span>
                  </div>
                  <img
                    src={activeProduct.secondaryImage}
                    alt={`${activeProduct.title} preview`}
                    className="w-full h-[190px] object-contain rounded-xl bg-black/40 p-3 border border-white/5"
                  />
                  <div className="flex flex-wrap gap-2">
                    {activeProduct.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="px-3 py-1.5 rounded-full bg-[#16161a] border border-white/10 text-[13px] text-white/85"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Supported Devices & Platforms Strip */}
        <section className="w-full py-12 lg:py-16 px-4 sm:px-8 border-t border-white/10 bg-[#070709]">
          <div className="max-w-[1405px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2
                className="text-[28px] sm:text-[36px] text-[#faf9f5] font-normal"
                style={{ fontFamily: "'Adamina', Georgia, serif" }}
              >
                Stream Across Every Screen
              </h2>
            </div>

            <div
              className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4"
              style={{ perspective: '1000px' }}
            >
              {DEVICE_LOGOS.map((device, idx) => (
                <motion.div
                  key={device.name}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.22,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.07,
                    rotateX: 10,
                    rotateY: -6,
                    transition: { type: 'spring', stiffness: 320, damping: 18 },
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    borderColor: device.border,
                    boxShadow: `0 14px 32px -12px ${device.glow}, inset 0 1px 0 rgba(255,255,255,0.22)`,
                  }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#171822] via-[#0e0f15] to-[#08090d] border px-3 py-5 flex flex-col items-center justify-center gap-3 cursor-pointer"
                >
                  {/* 5D Ambient Volumetric Glow */}
                  <div
                    className="absolute inset-0 opacity-25 group-hover:opacity-65 transition-opacity duration-300 pointer-events-none blur-xl"
                    style={{
                      background: `radial-gradient(circle at 50% 35%, ${device.glow}, transparent 72%)`,
                    }}
                  />

                  {/* Diagonal Glossy Light Sweep on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                  {/* 5D Brand-Colored Masked Logo */}
                  <div
                    className="relative z-10 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ filter: `drop-shadow(0 4px 12px ${device.glow})` }}
                  >
                    <div
                      role="img"
                      aria-label={device.name}
                      className="h-8 w-20"
                      style={{
                        background: device.gradient,
                        WebkitMaskImage: `url(${device.src})`,
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        WebkitMaskSize: 'contain',
                        maskImage: `url(${device.src})`,
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        maskSize: 'contain',
                      }}
                    />
                  </div>

                  <span className="relative z-10 text-[12px] font-medium text-white/85 group-hover:text-white text-center leading-tight transition-colors">
                    {device.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Product Suite / Related Products Synced with Header */}
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {PRODUCTS_DATA.filter((p) => p.category === cat.key).map((product) => (
                        <Link
                          key={product.slug}
                          to={`/products/${product.slug}`}
                          className="group rounded-2xl bg-[#0b0b0f] border border-[#252833] hover:border-[#A48AFB]/50 p-6 flex flex-col justify-between gap-5 transition-colors"
                        >
                          <div className="space-y-3">
                            <div className="h-36 rounded-xl bg-black/50 border border-white/5 p-3 flex items-center justify-center overflow-hidden">
                              <img
                                src={product.heroImage}
                                alt={product.title}
                                className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
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
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedProducts.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    className="group rounded-2xl bg-[#0b0b0f] border border-[#252833] hover:border-[#A48AFB]/50 p-6 flex flex-col justify-between gap-4 transition-colors"
                  >
                    <div className="space-y-2">
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
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Synced Homepage CTA Section */}
        <CTASection />
      </div>
    </div>
  )
}
