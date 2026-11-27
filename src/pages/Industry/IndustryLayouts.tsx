import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  Clapperboard,
  DollarSign,
  Dumbbell,
  GraduationCap,
  Headphones,
  Layers,
  Radio,
  Sparkles,
  Trophy,
  Tv,
  Video,
  Zap,
} from 'lucide-react'
import { Visual5D } from '@/components/ui/visual-5d'
import { HoverHighlightGrid } from '@/components/ui/hover-highlight'
import type { IndustryItemData } from '@/data/industries'

export interface IndustryThemeConfig {
  accentHex: string
  glowRgba: string
  heroLayout: 'centered' | 'split-left'
}

export const INDUSTRY_THEMES: Record<string, IndustryThemeConfig> = {
  'broadcast-media': {
    accentHex: '#A48AFB',
    glowRgba: 'rgba(164, 138, 251, 0.38)',
    heroLayout: 'centered',
  },
  'education-e-learning': {
    accentHex: '#38BDF8',
    glowRgba: 'rgba(56, 189, 248, 0.38)',
    heroLayout: 'split-left',
  },
  filmmakers: {
    accentHex: '#FBBF24',
    glowRgba: 'rgba(251, 191, 36, 0.36)',
    heroLayout: 'split-left',
  },
  enterprise: {
    accentHex: '#60A5FA',
    glowRgba: 'rgba(96, 165, 250, 0.38)',
    heroLayout: 'centered',
  },
  fitness: {
    accentHex: '#4ADE80',
    glowRgba: 'rgba(74, 222, 128, 0.36)',
    heroLayout: 'split-left',
  },
  sports: {
    accentHex: '#F97316',
    glowRgba: 'rgba(249, 115, 22, 0.38)',
    heroLayout: 'centered',
  },
  religious: {
    accentHex: '#C084FC',
    glowRgba: 'rgba(192, 132, 252, 0.38)',
    heroLayout: 'centered',
  },
  youtubers: {
    accentHex: '#F43F5E',
    glowRgba: 'rgba(244, 63, 94, 0.38)',
    heroLayout: 'split-left',
  },
}

export function IndustryUniqueSection({ industry }: { industry: IndustryItemData }) {
  switch (industry.slug) {
    case 'broadcast-media':
      return <BroadcastPlaybookSection industry={industry} />
    case 'education-e-learning':
      return <EduTechChannelSection industry={industry} />
    case 'filmmakers':
      return <FilmmakersMonetizeSection industry={industry} />
    case 'enterprise':
      return <EnterpriseCommsSection industry={industry} />
    case 'fitness':
      return <FitnessStudioSection industry={industry} />
    case 'sports':
      return <SportsBroadcastSection industry={industry} />
    case 'religious':
      return <ReligiousReachSection industry={industry} />
    case 'youtubers':
      return <CreatorFreedomSection industry={industry} />
    default:
      return null
  }
}

function BroadcastPlaybookSection({ industry }: { industry: IndustryItemData }) {
  const pillars = [
    {
      step: '01',
      title: 'PowerStream Live',
      desc: 'Broadcast flawless high-quality live TV and mobile streams without large crews or heavy hardware.',
    },
    {
      step: '02',
      title: 'Captivate VOD',
      desc: 'Operate live and on-demand catalogs simultaneously with custom lineups and intelligent search.',
    },
    {
      step: '03',
      title: 'High-ROI Monetization',
      desc: 'Maximize ad revenue and subscriptions with SSAI, refined user access, and 100% modifiable UI/UX.',
    },
  ]

  return (
    <>
      <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Visual5D
              src={industry.secondaryImage}
              alt="Broadcast Streaming Architecture"
              glowColor="rgba(164, 138, 251, 0.4)"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <h2
              className="text-[32px] sm:text-[42px] text-[#faf9f5] font-normal"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Flexibility At Its Best. 100% Modifiable.
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
    </>
  )
}

function EduTechChannelSection({ industry }: { industry: IndustryItemData }) {
  const steps = [
    { title: '1. Course Ingest', desc: 'Upload lectures, tutorials, and training modules in minutes.' },
    { title: '2. Structured Classes', desc: 'Organize smart on-demand playlists and live cohort sessions.' },
    { title: '3. Student Access', desc: 'Protect paid curriculum with DRM and enrolled member gating.' },
    { title: '4. Steady Income', desc: 'Collect recurring tuition and course sales year-round.' },
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
              Built for Today’s EduTech Gurus
            </h2>
            <HoverHighlightGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4" roundedClass="rounded-xl">
              <div className="rounded-xl bg-[#111111]/45 border border-white/[0.05] p-4 space-y-2 cursor-pointer">
                <GraduationCap className="size-5 text-sky-400" />
                <div className="font-semibold text-white">Self-Paced VOD</div>
                <p className="text-[13px] text-white/65">
                  Deliver immersive recorded classes students can revisit on web, iOS, and Android.
                </p>
              </div>
              <div className="rounded-xl bg-[#111111]/45 border border-white/[0.05] p-4 space-y-2 cursor-pointer">
                <Radio className="size-5 text-sky-400" />
                <div className="font-semibold text-white">Live Interactive Classrooms</div>
                <p className="text-[13px] text-white/65">
                  Host live doubt-clearing sessions and workshops with real-time engagement.
                </p>
              </div>
            </HoverHighlightGrid>
          </div>
          <div className="lg:col-span-6">
            <Visual5D
              src={industry.secondaryImage}
              alt="EduTech Video Platform"
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

function FilmmakersMonetizeSection({ industry }: { industry: IndustryItemData }) {
  const [model, setModel] = useState<'SVOD' | 'TVOD' | 'AVOD' | 'PPV'>('SVOD')
  const modelDetails: Record<typeof model, { headline: string; bullets: string[] }> = {
    SVOD: {
      headline: 'Recurring Membership Passes for Your Cinema Catalog',
      bullets: ['Monthly & annual film club tiers', 'Free trials & festival promo codes', 'Keep full subscriber ownership'],
    },
    TVOD: {
      headline: 'Digital Rentals & Direct Movie Purchases',
      bullets: ['48-hour rental windows', '4K UHD & regional pricing', 'DRM-protected offline viewing'],
    },
    AVOD: {
      headline: 'Ad-Supported Free Streaming With High Fill Rates',
      bullets: ['Pre-roll, mid-roll & post-roll VAST/VMAP', 'SSAI ad-blocker resilience', 'Combine free & premium tiers'],
    },
    PPV: {
      headline: 'Exclusive Red-Carpet Premieres & Festival Screenings',
      bullets: ['Scheduled premiere countdowns', 'Ticketed global live Q&As', 'Dynamic forensic watermarking'],
    },
  }

  return (
    <section className="relative w-full py-16 lg:py-24 px-4 sm:px-8 border-t border-white/10 overflow-hidden bg-black">
      <motion.img
        src="/figma-assets/s1_blades.png"
        alt=""
        animate={{ scale: [1, 1.04, 1], opacity: [0.22, 0.35, 0.22] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 75% 50%, rgba(251,191,36,0.14), transparent 70%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Monetize Movies Across Every Revenue Stream
          </h2>
          <div className="flex flex-wrap gap-2">
            {(['SVOD', 'TVOD', 'AVOD', 'PPV'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setModel(m)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors cursor-pointer ${
                  model === m
                    ? 'bg-amber-400 text-black'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-[#0f0e0a] border border-amber-400/25 p-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-300 font-semibold">
              <Clapperboard className="size-4" />
              <span>{modelDetails[model].headline}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {modelDetails[model].bullets.map((b) => (
                <div key={b} className="rounded-xl bg-black/50 border border-white/10 p-3.5 text-[13px] text-white/80">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Visual5D
            src={industry.secondaryImage}
            alt="Filmmakers Cinema Platform"
            glowColor="rgba(251, 191, 36, 0.36)"
            maxHeightClass="max-h-[340px]"
          />
        </div>
      </div>
    </section>
  )
}

function EnterpriseCommsSection({ industry }: { industry: IndustryItemData }) {
  const [mode, setMode] = useState<'Town Halls' | 'Team Meetings' | 'L&D Portals'>('Town Halls')
  const metrics: Record<typeof mode, { scale: string; security: string; desc: string }> = {
    'Town Halls': {
      scale: '100,000+ Concurrent Employees',
      security: 'SSO + Geo-Restricted Access',
      desc: 'Broadcast executive all-hands globally with low-latency Q&A and live polls.',
    },
    'Team Meetings': {
      scale: 'Cross-Region HQ Streams',
      security: 'Encrypted Internal Feeds',
      desc: 'Address corporate plans with routine video briefings and project alignment.',
    },
    'L&D Portals': {
      scale: 'Searchable On-Demand Hub',
      security: 'Role-Based Permissions',
      desc: 'Centralize onboarding, compliance training, and recorded sessions in one portal.',
    },
  }

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Empower Team Talks at Global Scale
          </h2>
          <div className="flex flex-wrap gap-2">
            {(['Town Halls', 'Team Meetings', 'L&D Portals'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setMode(tab)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors cursor-pointer ${
                  mode === tab
                    ? 'bg-blue-400 text-black'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-[#0b0d12] border border-blue-400/25 p-6 space-y-4">
            <p className="text-[15px] text-white/80 leading-relaxed">{metrics[mode].desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-black/50 border border-white/10 p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-blue-300">Scale</div>
                <div className="text-[14px] font-semibold text-white mt-1">{metrics[mode].scale}</div>
              </div>
              <div className="rounded-xl bg-black/50 border border-white/10 p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-blue-300">Security</div>
                <div className="text-[14px] font-semibold text-white mt-1">{metrics[mode].security}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <Visual5D
            src={industry.secondaryImage}
            alt="Enterprise Video Communication"
            glowColor="rgba(96, 165, 250, 0.38)"
            maxHeightClass="max-h-[340px]"
          />
        </div>
      </div>
    </section>
  )
}

function FitnessStudioSection({ industry }: { industry: IndustryItemData }) {
  const stats = [
    { label: 'Platform Commission', value: '0%', icon: <DollarSign className="size-4 text-emerald-400" /> },
    { label: 'Revenue Uplift', value: '5X Faster', icon: <Activity className="size-4 text-emerald-400" /> },
    { label: 'Playback Quality', value: 'Energy-Rich HD', icon: <Dumbbell className="size-4 text-emerald-400" /> },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <Visual5D
            src={industry.secondaryImage}
            alt="Online Fitness Studio"
            glowColor="rgba(74, 222, 128, 0.36)"
            maxHeightClass="max-h-[360px]"
          />
        </div>
        <div className="lg:col-span-7 space-y-6">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Your Online Fitness Studio With Zero Commission
          </h2>
          <p className="text-[15.5px] text-white/75 leading-relaxed">
            Reach clients worldwide with stutter-free HD workout routines, structured training
            programs, and flexible membership pricing.
          </p>
          <HoverHighlightGrid className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-[#111111]/45 border border-white/[0.05] p-5 space-y-2 cursor-pointer"
              >
                <div className="size-8 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="text-[22px] font-bold text-white">{s.value}</div>
                <div className="text-[12.5px] text-white/65">{s.label}</div>
              </div>
            ))}
          </HoverHighlightGrid>
        </div>
      </div>
    </section>
  )
}

function SportsBroadcastSection({ industry }: { industry: IndustryItemData }) {
  const [quality, setQuality] = useState<'Auto (ABR)' | '4K 60fps' | '1080p Live'>('Auto (ABR)')

  return (
    <section className="relative w-full py-16 lg:py-24 px-4 sm:px-8 border-t border-white/10 overflow-hidden bg-black">
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
            'radial-gradient(ellipse 60% 55% at 75% 50%, rgba(249,115,22,0.14), transparent 70%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/35 to-black pointer-events-none" />

      <div className="relative z-10 max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Ultra-Fast Sports Transcoding & Live Playback
          </h2>
          <p className="text-[15.5px] text-white/70 leading-relaxed">
            Deliver live matches and on-demand highlight reels with 100% adaptable streaming,
            cloud or on-site deployment, and high-ROI monetization.
          </p>
          <div className="rounded-2xl bg-[#100d0a] border border-orange-400/25 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-orange-300">
                <Trophy className="size-4" /> Match Stream Profile
              </span>
              <div className="flex flex-wrap gap-2">
                {(['Auto (ABR)', '4K 60fps', '1080p Live'] as const).map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setQuality(q)}
                    className={`px-3 py-1.5 rounded-lg text-[12.5px] font-medium transition-colors cursor-pointer ${
                      quality === q
                        ? 'bg-orange-400 text-black'
                        : 'bg-white/5 text-white/75 hover:bg-white/10'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center pt-2 border-t border-white/10">
              <div className="rounded-xl bg-black/50 p-3">
                <div className="text-[11px] text-white/55 uppercase">Profile</div>
                <div className="text-[14px] font-semibold text-white mt-0.5">{quality}</div>
              </div>
              <div className="rounded-xl bg-black/50 p-3">
                <div className="text-[11px] text-white/55 uppercase">Hosting</div>
                <div className="text-[14px] font-semibold text-white mt-0.5">Cloud / On-Site</div>
              </div>
              <div className="rounded-xl bg-black/50 p-3">
                <div className="text-[11px] text-white/55 uppercase">Mode</div>
                <div className="text-[14px] font-semibold text-white mt-0.5">Live + VOD</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Visual5D
            src={industry.secondaryImage}
            alt="Sports Live Streaming"
            glowColor="rgba(249, 115, 22, 0.38)"
            maxHeightClass="max-h-[340px]"
          />
        </div>
      </div>
    </section>
  )
}

function ReligiousReachSection({ industry }: { industry: IndustryItemData }) {
  const channels = [
    {
      title: 'All Around TV',
      desc: 'Reach millions of followers on iOS, Android, Roku, and Amazon Fire TV.',
      icon: <Tv className="size-5 text-purple-300" />,
    },
    {
      title: 'Mobile Live Broadcasting',
      desc: 'Stream services, concerts, weddings, prayers, and discourses in real time.',
      icon: <Radio className="size-5 text-purple-300" />,
    },
    {
      title: 'Message Audio & Podcasts',
      desc: 'Share devotional podcasts and sermon audio with congregations everywhere.',
      icon: <Headphones className="size-5 text-purple-300" />,
    },
  ]

  return (
    <>
      <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Visual5D
              src={industry.secondaryImage}
              alt="Religious Community Streaming"
              glowColor="rgba(192, 132, 252, 0.38)"
              maxHeightClass="max-h-[360px]"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <h2
              className="text-[30px] sm:text-[40px] text-white font-normal"
              style={{ fontFamily: "'Adamina', Georgia, serif" }}
            >
              Rekindle Faith Across Every Screen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {channels.map((c) => (
                <motion.div
                  key={c.title}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-[#0d0b12] border border-purple-400/20 p-5 space-y-3"
                >
                  <div className="size-9 rounded-lg bg-purple-400/10 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h3 className="text-[17px] font-semibold text-white">{c.title}</h3>
                  <p className="text-[13.5px] text-white/70 leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CreatorFreedomSection({ industry }: { industry: IndustryItemData }) {
  const perks = [
    { title: '0% Commission', desc: 'Keep 100% of your membership and pay-per-view earnings.', icon: <Sparkles className="size-4 text-rose-400" /> },
    { title: 'Total Creative Control', desc: 'Publish directly to fans without third-party algorithm rules.', icon: <Video className="size-4 text-rose-400" /> },
    { title: 'Instant Channel Setup', desc: 'Launch your own branded streaming platform without coding.', icon: <Zap className="size-4 text-rose-400" /> },
    { title: 'Unlimited Collection', desc: 'Host your entire video archive, exclusives, and livestreams.', icon: <Layers className="size-4 text-rose-400" /> },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1405px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2
            className="text-[30px] sm:text-[40px] text-white font-normal"
            style={{ fontFamily: "'Adamina', Georgia, serif" }}
          >
            Own Your Audience Beyond Third-Party Algorithms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {perks.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-[#110b0e] border border-rose-400/20 p-5 space-y-2"
              >
                <div className="size-8 rounded-lg bg-rose-400/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-[17px] font-semibold text-white">{p.title}</h3>
                <p className="text-[13.5px] text-white/70 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <Visual5D
            src={industry.secondaryImage}
            alt="Creator Streaming Channel"
            glowColor="rgba(244, 63, 94, 0.38)"
            maxHeightClass="max-h-[380px]"
          />
        </div>
      </div>
    </section>
  )
}
