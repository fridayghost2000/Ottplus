import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  Building2,
  CheckCircle2,
  Cloud,
  Cpu,
  Globe,
  Layers,
  Lock,
  Play,
  Radio,
  Server,
  Shield,
  Sparkles,
  Tv,
  Zap,
} from 'lucide-react'
import { Visual5D } from '@/components/ui/visual-5d'
import { HoverHighlightGrid } from '@/components/ui/hover-highlight'
import type { ProductItemData } from '@/data/products'

export interface ProductThemeConfig {
  accentHex: string
  glowRgba: string
  heroLayout: 'centered' | 'split-left'
}

export const PRODUCT_THEMES: Record<string, ProductThemeConfig> = {
  'ott-platform': {
    accentHex: '#A48AFB',
    glowRgba: 'rgba(164, 138, 251, 0.38)',
    heroLayout: 'split-left',
  },
  'video-hosting-cms': {
    accentHex: '#38BDF8',
    glowRgba: 'rgba(56, 189, 248, 0.38)',
    heroLayout: 'centered',
  },
  'media-player': {
    accentHex: '#2DD4BF',
    glowRgba: 'rgba(45, 212, 191, 0.38)',
    heroLayout: 'split-left',
  },
  'video-transcoding': {
    accentHex: '#FBBF24',
    glowRgba: 'rgba(251, 191, 36, 0.35)',
    heroLayout: 'split-left',
  },
  'live-conferencing': {
    accentHex: '#F43F5E',
    glowRgba: 'rgba(244, 63, 94, 0.38)',
    heroLayout: 'centered',
  },
  'web-mobile-apps': {
    accentHex: '#60A5FA',
    glowRgba: 'rgba(96, 165, 250, 0.38)',
    heroLayout: 'split-left',
  },
  'smart-tv': {
    accentHex: '#F97316',
    glowRgba: 'rgba(249, 115, 22, 0.38)',
    heroLayout: 'centered',
  },
  hbbtv: {
    accentHex: '#C084FC',
    glowRgba: 'rgba(192, 132, 252, 0.38)',
    heroLayout: 'centered',
  },
  monetization: {
    accentHex: '#4ADE80',
    glowRgba: 'rgba(74, 222, 128, 0.36)',
    heroLayout: 'split-left',
  },
  iptv: {
    accentHex: '#3B82F6',
    glowRgba: 'rgba(59, 130, 246, 0.38)',
    heroLayout: 'centered',
  },
  'drm-security': {
    accentHex: '#FB7185',
    glowRgba: 'rgba(251, 113, 133, 0.38)',
    heroLayout: 'split-left',
  },
  'ai-analytics': {
    accentHex: '#818CF8',
    glowRgba: 'rgba(129, 140, 248, 0.38)',
    heroLayout: 'split-left',
  },
  'global-cdn': {
    accentHex: '#06B6D4',
    glowRgba: 'rgba(6, 182, 212, 0.38)',
    heroLayout: 'centered',
  },
}

export function ProductUniqueSection({ product }: { product: ProductItemData }) {
  switch (product.slug) {
    case 'ott-platform':
      return <OttPillarsSection product={product} />
    case 'video-hosting-cms':
      return <WorkflowPipelineSection product={product} />
    case 'media-player':
      return <PlayerStageSection />
    case 'video-transcoding':
      return <AbrLadderSection product={product} />
    case 'live-conferencing':
      return <LiveSignalSection product={product} />
    case 'web-mobile-apps':
      return <MobileSyncSection product={product} />
    case 'smart-tv':
      return <SmartTvShowcaseSection product={product} />
    case 'hbbtv':
      return <HbbTvFlowSection product={product} />
    case 'monetization':
      return <MonetizationSwitcherSection product={product} />
    case 'iptv':
      return <IptvVerticalsSection product={product} />
    case 'drm-security':
      return <SecurityLayersSection product={product} />
    case 'ai-analytics':
      return <AnalyticsKpiSection product={product} />
    case 'global-cdn':
      return <CdnMetricsSection product={product} />
    default:
      return null
  }
}

function OttPillarsSection({ product }: { product: ProductItemData }) {
  const pillars = [
    {
      step: '01',
      title: 'Establish',
      desc: 'Establish your personalized video streaming platform with launch strategies and industry insights.',
    },
    {
      step: '02',
      title: 'Expand',
      desc: 'Scale your business with swift, flexible, and scalable cloud or on-premise infrastructure and glocal tactics.',
    },
    {
      step: '03',
      title: 'Engage',
      desc: 'Delight viewers with captivating UI, AI recommendations, and sustainable monetization models.',
    },
  ]

  return (
      <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Visual5D
              src={product.secondaryImage}
              alt="OTT Platform Architecture"
              glowColor="rgba(164, 138, 251, 0.4)"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <h2
              className="text-[32px] sm:text-[42px] text-[#faf9f5] font-normal"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Build. Grow. Upscale AnyMoment.
            </h2>
            <HoverHighlightGrid className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl bg-[#111111]/45 border border-white/[0.05] p-5 space-y-2.5 cursor-pointer"
                >
                  <span className="text-[12px] font-bold text-[#A48AFB]">{p.step}</span>
                  <h3 className="text-[19px] font-semibold text-white">{p.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-white/70">{p.desc}</p>
                </div>
              ))}
            </HoverHighlightGrid>
          </div>
        </div>
      </section>
  )
}

function WorkflowPipelineSection({ product }: { product: ProductItemData }) {
  const steps = [
    { title: '1. Bulk Ingest', desc: 'Upload raw MP4, MOV, MXF via web dashboard or API.' },
    { title: '2. Metadata & Tags', desc: 'Organize series, episodes, cast, genres, and thumbnails.' },
    { title: '3. Schedule & Geo-Rules', desc: 'Set premiere dates, expiry windows, and country locks.' },
    { title: '4. Multi-App Publish', desc: 'Push instantly to web, mobile, and Smart TV catalogs.' },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto space-y-12">
        <HoverHighlightGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-[#111111]/45 border border-white/[0.05] p-6 space-y-2 cursor-pointer"
            >
              <h3 className="text-[17px] font-semibold text-sky-300">{s.title}</h3>
              <p className="text-[14px] text-white/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </HoverHighlightGrid>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#090c12] border border-white/10 p-6 sm:p-10">
          <div className="lg:col-span-6 space-y-5">
            <h2
              className="text-[28px] sm:text-[36px] text-white font-normal"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Cloud or On-Premise Hosting Flexibility
            </h2>
            <HoverHighlightGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4" roundedClass="rounded-xl">
              <div className="rounded-xl bg-[#111111]/45 border border-white/[0.05] p-4 space-y-2 cursor-pointer">
                <Cloud className="size-5 text-sky-400" />
                <div className="font-semibold text-white">Managed Cloud</div>
                <p className="text-[13px] text-white/65">
                  Auto-scaling storage and zero server maintenance for rapid global launches.
                </p>
              </div>
              <div className="rounded-xl bg-[#111111]/45 border border-white/[0.05] p-4 space-y-2 cursor-pointer">
                <Server className="size-5 text-sky-400" />
                <div className="font-semibold text-white">On-Premise</div>
                <p className="text-[13px] text-white/65">
                  Full data sovereignty behind your own firewall for enterprise & government.
                </p>
              </div>
            </HoverHighlightGrid>
          </div>
          <div className="lg:col-span-6">
            <Visual5D
              src={product.secondaryImage}
              alt="Cloud and On-Premise Hosting Infrastructure"
              glowColor="rgba(56, 189, 248, 0.42)"
              maxHeightClass="max-h-[300px]"
              spaceFloat
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function PlayerStageSection() {
  const [quality, setQuality] = useState<'Auto (ABR)' | '4K UHD' | '1080p' | '720p'>('Auto (ABR)')
  const [audioTrack, setAudioTrack] = useState<'English' | 'Hindi' | 'Spanish'>('English')

  return (
    <section className="relative w-full py-16 lg:py-24 px-4 sm:px-8 border-t border-white/10 overflow-hidden bg-black">
      {/* Homepage-matched background effect */}
      <motion.img
        src="/figma-assets/s1_blades.png"
        alt=""
        animate={{ scale: [1, 1.04, 1], opacity: [0.22, 0.36, 0.22] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 75% 50%, rgba(45,212,191,0.14), transparent 70%), radial-gradient(ellipse 50% 50% at 30% 25%, rgba(243,193,44,0.06), transparent 65%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/35 to-black pointer-events-none" />

      <div className="relative z-10 max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Interactive Player Controls & Zero-Buffer Playback
          </h2>
          <p className="text-[15.5px] text-white/70 leading-relaxed">
            Test how OTTFast’s HTML5/HLS player adapts seamlessly across bitrates, audio tracks, and
            ad insertion cues.
          </p>

          <div className="rounded-2xl bg-[#0b0f10] border border-teal-400/25 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-teal-300">
                <Play className="size-4 fill-teal-300" /> Stream Quality Selector
              </span>
              <div className="flex flex-wrap gap-2">
                {(['Auto (ABR)', '4K UHD', '1080p', '720p'] as const).map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setQuality(q)}
                    className={`px-3 py-1.5 rounded-lg text-[12.5px] font-medium transition-colors cursor-pointer ${
                      quality === q
                        ? 'bg-teal-400 text-black'
                        : 'bg-white/5 text-white/75 hover:bg-white/10'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
              <span className="text-[13px] font-semibold text-white/80">Multi-Audio Track</span>
              <div className="flex flex-wrap gap-2">
                {(['English', 'Hindi', 'Spanish'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setAudioTrack(lang)}
                    className={`px-3 py-1.5 rounded-lg text-[12.5px] font-medium transition-colors cursor-pointer ${
                      audioTrack === lang
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-white/75 hover:bg-white/10'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[12.5px] text-teal-300/90 pt-1">
              Active Stream: <strong className="text-white">{quality}</strong> • Audio:{' '}
              <strong className="text-white">{audioTrack}</strong> • Buffer Health:{' '}
              <strong className="text-emerald-400">0.0% Stall</strong>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            style={{ perspective: '1200px' }}
            className="relative flex items-center justify-center py-4 select-none"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateX: [3, -3, 3],
                rotateY: [-6, 6, -6],
                scale: [1, 1.03, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_28px_70px_rgba(45,212,191,0.28)]"
            >
              <video
                src="/videos/bento-yellow.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AbrLadderSection({ product }: { product: ProductItemData }) {
  const [selectedTier, setSelectedTier] = useState(0)
  const tiers = [
    { res: '4K UHD (2160p)', bitrate: '15 – 20 Mbps', codec: 'HEVC / H.265', target: 'Smart TVs & 4K Displays' },
    { res: 'Full HD (1080p)', bitrate: '5 – 8 Mbps', codec: 'H.264 High', target: 'Desktops & Tablets' },
    { res: 'HD (720p)', bitrate: '2.5 – 4 Mbps', codec: 'H.264 Main', target: 'Mobile & Standard Wi-Fi' },
    { res: 'SD (480p / 360p)', bitrate: '0.8 – 1.5 Mbps', codec: 'H.264 Baseline', target: '3G/4G Low Bandwidth' },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal mb-4"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Adaptive Bitrate (ABR) Encoding Ladder
          </h2>
          {tiers.map((t, i) => (
            <button
              key={t.res}
              type="button"
              onClick={() => setSelectedTier(i)}
              className={`w-full text-left rounded-2xl border p-4 transition-all cursor-pointer flex items-center justify-between gap-4 ${
                selectedTier === i
                  ? 'bg-amber-400/10 border-amber-400/60'
                  : 'bg-[#0b0b0f] border-white/10 hover:border-white/25'
              }`}
            >
              <div>
                <div className="font-semibold text-white text-[16px]">{t.res}</div>
                <div className="text-[13px] text-white/65">{t.target}</div>
              </div>
              <div className="text-right">
                <div className="text-[13.5px] font-semibold text-amber-300">{t.bitrate}</div>
                <div className="text-[12px] text-white/55">{t.codec}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-6">
          <Visual5D
            src={product.secondaryImage}
            alt="Transcoding Pipeline"
            glowColor="rgba(251, 191, 36, 0.35)"
          />
        </div>
      </div>
    </section>
  )
}

function LiveSignalSection({ product }: { product: ProductItemData }) {
  const modes = [
    {
      icon: Radio,
      title: 'PowerStream & Captivate Live Broadcast',
      desc: 'One-to-many ultra-reliable live streaming for sports, news, concerts, and religious events with instant Live-to-VoD recording.',
    },
    {
      icon: Zap,
      title: 'Low-Data Video Conferencing',
      desc: 'Lag-free personal and enterprise video chats engineered to consume minimal mobile or broadband data.',
    },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <Visual5D
            src={product.secondaryImage}
            alt="Live Streaming Signal"
            glowColor="rgba(244, 63, 94, 0.38)"
          />
        </div>
        <div className="lg:col-span-7 space-y-5">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Dual-Mode Live Broadcasting & Conferencing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {modes.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl bg-[#0d0a0c] border border-rose-500/25 p-6 space-y-3"
              >
                <m.icon className="size-6 text-rose-400" />
                <h3 className="text-[18px] font-semibold text-white">{m.title}</h3>
                <p className="text-[14px] text-white/70 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileSyncSection({ product }: { product: ProductItemData }) {
  return (
    <>
      <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2
              className="text-[30px] sm:text-[40px] text-white font-normal"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Native Storefront Apps with In-App Billing
            </h2>
            <p className="text-[15.5px] text-white/70 leading-relaxed">
              Publish custom-branded apps to the Apple App Store and Google Play Store with
              native Apple Pay, Google Play billing, push notifications, and cross-device watch
              history sync.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {product.highlights.map((h) => (
                <div key={h.title} className="rounded-xl bg-[#0b0d14] border border-blue-400/20 p-4">
                  <div className="font-semibold text-blue-300 text-[15px]">{h.title}</div>
                  <p className="text-[13px] text-white/65 mt-1">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <Visual5D
              src={product.secondaryImage}
              alt="Mobile App Sync"
              glowColor="rgba(96, 165, 250, 0.38)"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function SmartTvShowcaseSection({ product }: { product: ProductItemData }) {
  const advantages = [
    {
      title: 'Zero Revenue Split With Aggregators',
      desc: 'Launch your own Smart TV app to display ads and sell subscriptions directly without sharing profits.',
    },
    {
      title: 'Living-Room Home Screen Presence',
      desc: 'Secure a permanent spot on Samsung Tizen, LG webOS, Android TV, Apple TV, Fire TV, and Roku.',
    },
    {
      title: 'Global Smart TV Adoption',
      desc: 'Smart TVs are standard in modern households—unlocking massive high-engagement lean-back audiences.',
    },
  ]

  return (
    <>
      <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Visual5D
              src={product.secondaryImage}
              alt="Smart TV App Development"
              glowColor="rgba(249, 115, 22, 0.38)"
            />
          </div>
          <div className="lg:col-span-7 space-y-5">
            <h2
              className="text-[30px] sm:text-[40px] text-white font-normal"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Why Smart TV App Development?
            </h2>
            <div className="space-y-4">
              {advantages.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl bg-[#100c09] border border-orange-500/25 p-5 flex items-start gap-4"
                >
                  <Tv className="size-6 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[17px] font-semibold text-white">{a.title}</h3>
                    <p className="text-[14px] text-white/70 mt-1">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function HbbTvFlowSection({ product }: { product: ProductItemData }) {
  const steps = [
    {
      title: '1. Broadcast Signal + App Trigger',
      desc: 'Broadcaster embeds an HbbTV application alongside the live DVB TV channel.',
    },
    {
      title: '2. Red-Button Viewer Pop-Up',
      desc: 'Viewers receive a non-intrusive on-screen prompt while the live broadcast continues playing.',
    },
    {
      title: '3. Interactive Broadband Layer',
      desc: 'Instant access to catch-up TV, EPG, games, educational content, and geo-targeted ads.',
    },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-[#0e0a14] border border-purple-400/25 p-6 space-y-2.5"
            >
              <h3 className="text-[17px] font-semibold text-purple-300">{s.title}</h3>
              <p className="text-[14px] text-white/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <Visual5D
              src={product.secondaryImage}
              alt="HbbTV Interactive Overlay"
              glowColor="rgba(192, 132, 252, 0.38)"
            />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <h2
              className="text-[28px] sm:text-[36px] text-white font-normal"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Global HbbTV Adoption & Addressable Ads
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed">
              Adopted across Europe, UK, Australia, and growing markets worldwide—HbbTV lets
              broadcasters pair linear reach with broadband analytics, EPGs, and geo-targeted
              advertising.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['UK & Europe', 'Australia & NZ', 'EPG & Catch-Up', 'Geo-Targeted Ads', 'HbbTV Test Suite'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/25 text-[12.5px] text-purple-200"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MonetizationSwitcherSection({ product }: { product: ProductItemData }) {
  const [model, setModel] = useState<'SVOD' | 'TVOD' | 'AVOD' | 'Hybrid'>('SVOD')
  const details: Record<typeof model, { title: string; desc: string; bullets: string[] }> = {
    SVOD: {
      title: 'Subscription Video on Demand (Recurring Revenue)',
      desc: 'Charge monthly or annual memberships with free trials, promo codes, and automated renewals.',
      bullets: ['Tiered plans (Basic / Pro / Family)', 'Apple & Google In-App Subscriptions', 'Churn & MRR tracking'],
    },
    TVOD: {
      title: 'Transactional Video on Demand (Pay-Per-View)',
      desc: 'Sell individual movie premieres, live sports matches, or single courses on a rental or buy basis.',
      bullets: ['48-hour rental windows', 'Live PPV event passes', 'Instant digital receipts'],
    },
    AVOD: {
      title: 'Ad-Supported Video on Demand (Free Tier)',
      desc: 'Monetize free viewers with pre-roll, mid-roll, and post-roll VAST/VPAID video advertisements.',
      bullets: ['VAST / VPAID compliant', 'Geo-targeted ad slots', 'Higher ad fill rates'],
    },
    Hybrid: {
      title: 'Hybrid Monetization (Maximum ROI)',
      desc: 'Combine free ad-supported episodes with paid VIP subscriptions and exclusive PPV specials.',
      bullets: ['Freemium funnel to SVOD', 'Coupon & bundle campaigns', 'Multi-currency gateway'],
    },
  }

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Choose Your Revenue Model
          </h2>
          <div className="flex flex-wrap gap-2">
            {(['SVOD', 'TVOD', 'AVOD', 'Hybrid'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setModel(m)}
                className={`px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all cursor-pointer ${
                  model === m
                    ? 'bg-emerald-400 text-black shadow-[0_0_24px_rgba(74,222,128,0.45)]'
                    : 'bg-white/5 text-white/75 border border-white/10 hover:bg-white/10'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-[#09100c] border border-emerald-400/25 p-6 space-y-4">
            <h3 className="text-[20px] font-semibold text-white">{details[model].title}</h3>
            <p className="text-[14.5px] text-white/75">{details[model].desc}</p>
            <ul className="space-y-2">
              {details[model].bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-[14px] text-emerald-300">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span className="text-white/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Visual5D
            src={product.secondaryImage}
            alt="Monetization Engine"
            glowColor="rgba(74, 222, 128, 0.38)"
          />
        </div>
      </div>
    </section>
  )
}

function IptvVerticalsSection({ product }: { product: ProductItemData }) {
  const verticals = [
    {
      key: 'hotels',
      label: 'Hotels',
      title: 'IPTV Solution for Hotels & Hospitality',
      desc: 'Deliver branded in-room TV welcome portals, guest billing integration, multi-language channels, and VoD entertainment.',
    },
    {
      key: 'syndicators',
      label: 'Content Owners',
      title: 'IPTV for Content Owners & Syndicators',
      desc: 'Syndicate linear channels and VoD catalogs securely to partner operators and regional networks over IP.',
    },
    {
      key: 'governments',
      label: 'Governments',
      title: 'IPTV for Governments & Public Sector',
      desc: 'Closed-network, encrypted live and on-demand video broadcasting for ministries, campuses, and public agencies.',
    },
    {
      key: 'broadcast',
      label: 'Broadcast / Satellite',
      title: 'IPTV for Broadcast & Satellite Networks',
      desc: 'Extend satellite and terrestrial feeds onto managed IP and OTT screens with EPG and catch-up TV.',
    },
    {
      key: 'msos',
      label: 'MSOs / ISPs',
      title: 'IPTV for MSOs & Fiber ISPs',
      desc: 'Bundle high-margin Live TV + VoD packages with broadband plans to boost ARPU and reduce subscriber churn.',
    },
    {
      key: 'operators',
      label: 'Operators',
      title: 'IPTV for Telecom & Network Operators',
      desc: 'Carrier-grade middleware, STB & Smart TV apps, DRM, and subscriber billing built for large-scale operators.',
    },
  ]
  const [active, setActive] = useState(verticals[0].key)
  const current = verticals.find((v) => v.key === active) ?? verticals[0]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            6 Dedicated IPTV Verticals
          </h2>
          <div className="flex flex-wrap gap-2">
            {verticals.map((v) => (
              <button
                key={v.key}
                type="button"
                onClick={() => setActive(v.key)}
                className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all cursor-pointer ${
                  active === v.key
                    ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.45)]'
                    : 'bg-[#0b0d14] text-white/75 border border-white/10 hover:border-blue-400/40'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-[#090d16] border border-blue-500/25 p-6 space-y-3">
            <div className="flex items-center gap-2 text-blue-400 text-[12px] font-bold uppercase tracking-wider">
              <Building2 className="size-4" />
              <span>IPTV VERTICAL</span>
            </div>
            <h3 className="text-[22px] font-semibold text-white">{current.title}</h3>
            <p className="text-[15px] text-white/75 leading-relaxed">{current.desc}</p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Visual5D
            src={product.secondaryImage}
            alt={current.title}
            glowColor="rgba(59, 130, 246, 0.38)"
          />
        </div>
      </div>
    </section>
  )
}

function SecurityLayersSection({ product }: { product: ProductItemData }) {
  const layers = [
    { icon: Shield, title: 'Layer 1: Multi-DRM Encryption', desc: 'Studio-grade stream encryption across browsers, iOS, Android & TVs.' },
    { icon: Lock, title: 'Layer 2: Signed Token URLs', desc: 'Expiring playback tokens block hotlinking and unauthorized sharing.' },
    { icon: Globe, title: 'Layer 3: Geo-Blocking & Domain Lock', desc: 'Restrict streams by country, IP whitelist, or authorized domains.' },
    { icon: Sparkles, title: 'Layer 4: Dynamic Watermarking', desc: 'Deter screen recording leaks with session-specific overlays.' },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <Visual5D
            src={product.secondaryImage}
            alt="DRM Security Shield"
            glowColor="rgba(251, 113, 133, 0.38)"
          />
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {layers.map((l) => (
            <div
              key={l.title}
              className="rounded-2xl bg-[#11090c] border border-rose-400/20 p-5 space-y-2.5"
            >
              <l.icon className="size-5 text-rose-400" />
              <h3 className="text-[16.5px] font-semibold text-white">{l.title}</h3>
              <p className="text-[13.5px] text-white/70 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnalyticsKpiSection({ product }: { product: ProductItemData }) {
  const kpis = [
    { label: 'AI Recommendation Lift', value: '+38%', note: 'Higher session watch time' },
    { label: 'Avg. Startup Time', value: '< 0.8s', note: 'Tracked across global edge' },
    { label: 'Subscriber Retention', value: '94.2%', note: 'Cohort & churn telemetry' },
    { label: 'ROI Attribution', value: 'Real-Time', note: 'Per-title & plan breakdown' },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto space-y-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <motion.div
              key={k.label}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-[#0b0c16] border border-indigo-400/25 p-5 space-y-1.5"
            >
              <div className="text-[12px] uppercase tracking-wider text-indigo-300 font-semibold">
                {k.label}
              </div>
              <div className="text-[28px] sm:text-[34px] font-bold text-white">{k.value}</div>
              <div className="text-[13px] text-white/60">{k.note}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-indigo-300 text-[12px] font-bold uppercase tracking-wider">
              <Activity className="size-4" />
              <span>AI & QoE Intelligence</span>
            </div>
            <h2
              className="text-[28px] sm:text-[38px] text-white font-normal"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Turn Viewer Data Into Actionable Growth
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed">
              Combine AI-driven content discovery with deep subscriber, device, and bitrate
              analytics to maximize engagement and ROI.
            </p>
          </div>
          <div className="lg:col-span-6">
            <Visual5D
              src={product.secondaryImage}
              alt="AI Analytics Dashboard"
              glowColor="rgba(129, 140, 248, 0.38)"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CdnMetricsSection({ product }: { product: ProductItemData }) {
  const nodes = [
    { icon: Globe, title: 'Global Edge Caching', desc: 'Content cached close to viewers across Asia, North America, Europe & MENA.' },
    { icon: Cpu, title: 'Auto-Burst Live Scaling', desc: 'Absorb massive concurrent spikes during live sports and premieres.' },
    { icon: Layers, title: 'HLS/DASH Segment Tuning', desc: 'Pre-warmed edge routes optimized for adaptive video chunks.' },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <Visual5D
            src={product.secondaryImage}
            alt="Global Edge CDN"
            glowColor="rgba(6, 182, 212, 0.38)"
          />
        </div>
        <div className="lg:col-span-6 space-y-4">
          <h2
            className="text-[28px] sm:text-[38px] text-white font-normal mb-2"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Built for Zero-Lag Global Delivery
          </h2>
          {nodes.map((n) => (
            <div
              key={n.title}
              className="rounded-2xl bg-[#071014] border border-cyan-400/20 p-5 flex items-start gap-4"
            >
              <n.icon className="size-6 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-[17px] font-semibold text-white">{n.title}</h3>
                <p className="text-[14px] text-white/70 mt-1">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
