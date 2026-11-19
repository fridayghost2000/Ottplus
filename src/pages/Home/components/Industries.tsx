import { useState } from 'react'
import {
  Film,
  GraduationCap,
  Clapperboard,
  Building2,
  Trophy,
  Users,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export function Industries() {
  const [activeTab, setActiveTab] = useState(0)

  const industries = [
    {
      id: 'broadcasters',
      title: 'Broadcast & Media',
      icon: <Film className="w-4 h-4" />,
      tag: 'Linear & Live Streaming',
      heading: 'Broadcast-Grade Live Video Infrastructure',
      description:
        'Deliver television-quality live broadcasts with multi-bitrate HLS/DASH streaming, automated SCTE-35 ad-insertion triggers, and multi-camera live feeds.',
      highlights: [
        'Cloud-based live stream transcoding and playout',
        'Sub-second glass-to-glass latency for live programming',
        'Server-Side Ad Insertion (SSAI) for linear streams',
        'Global edge distribution with zero buffering guarantee',
      ],
      previewImage:
        'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&auto=format&fit=crop&q=80',
    },
    {
      id: 'education',
      title: 'Education & E-Learning',
      icon: <GraduationCap className="w-4 h-4" />,
      tag: 'Interactive Video Learning',
      heading: 'Educate, Engage & Monetize Video Courses',
      description:
        'Launch branded learning applications for students across web, iOS, and Android. Protect valuable educational courseware with dynamic forensic watermarking.',
      highlights: [
        'Dynamic forensic user watermarking on playback',
        'Chapter markers, course playlists & resource attachments',
        'Offline video downloading with DRM expiration',
        'Student completion tracking and engagement telemetry',
      ],
      previewImage:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop&q=80',
    },
    {
      id: 'filmmakers',
      title: 'Filmmakers & Studios',
      icon: <Clapperboard className="w-4 h-4" />,
      tag: 'D2C Movie Premieres',
      heading: 'Your Own Personalized Movie Streaming Platform',
      description:
        'Release independent movies, web series, and documentary films directly to audiences worldwide with pay-per-view ticketing and subscription passes.',
      highlights: [
        'Pay-per-view (TVOD) digital cinema ticket sales',
        '4K Ultra HD with Dolby Atmos audio support',
        'Studio-grade Multi-DRM (Widevine, FairPlay, PlayReady)',
        'Custom movie trailers, cast bios & bonus features',
      ],
      previewImage:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1000&auto=format&fit=crop&q=80',
    },
    {
      id: 'enterprise',
      title: 'Enterprise & Corporate',
      icon: <Building2 className="w-4 h-4" />,
      tag: 'Internal Video Portals',
      heading: 'Secure Enterprise Town Halls & Video Portals',
      description:
        'Engage global employees and partners with enterprise-grade security, Single Sign-On (SSO) integration, and confidential internal broadcast channels.',
      highlights: [
        'SAML 2.0 / Okta / Azure AD Single Sign-On',
        'Restricted IP-range and geographic geo-fencing',
        'Interactive live chat, polls, and Q&A during town halls',
        'Detailed viewer watch-time compliance reporting',
      ],
      previewImage:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&auto=format&fit=crop&q=80',
    },
    {
      id: 'sports',
      title: 'Sports & Live Events',
      icon: <Trophy className="w-4 h-4" />,
      tag: 'Low-Latency Sports',
      heading: 'Ultra-Low Latency Sports Streaming Software',
      description:
        'Broadcast live sporting events, leagues, and tournaments with instant DVR rewind, synchronized multi-angle playback, and real-time live match statistics.',
      highlights: [
        'Sub-second ultra-low latency glass-to-glass streaming',
        'Instant live DVR rewind during active matches',
        'Pay-per-view ticket gating for championship games',
        'Dynamic graphic scoreboards and sponsor overlays',
      ],
      previewImage:
        'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
    },
    {
      id: 'creators',
      title: 'YouTubers & Creators',
      icon: <Users className="w-4 h-4" />,
      tag: 'Creator Economy Freedom',
      heading: 'Monetize Fans Directly Beyond Third-Party Algorithms',
      description:
        'Escape unpredictable algorithm demonetization. Own your subscriber relationships, run exclusive premium member clubs, and monetize 100% of your earnings.',
      highlights: [
        '100% direct revenue retention from subscribers',
        'Direct email access and audience relationship ownership',
        'Native Smart TV, iOS, and Android mobile applications',
        'Community exclusive livestreams and behind-the-scenes content',
      ],
      previewImage:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1000&auto=format&fit=crop&q=80',
    },
  ]

  const current = industries[activeTab]

  return (
    <section id="industries" className="py-24 sm:py-32 bg-[#090D14] relative">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A5AF8]/20 border border-white/10 text-[#BDB4FE] text-[13px] font-semibold tracking-wide mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Verticals • Streaming for Every Industry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white font-heading leading-tight mb-4">
            Tailored Streaming Solutions for Every Sector
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            From television broadcasters and independent studios to e-learning academies and creator networks,
            OTTFast delivers specialized streaming architecture for your unique audience.
          </p>
        </div>

        {/* Industry Pill Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {industries.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#7A5AF8] text-white shadow-lg shadow-[#7A5AF8]/40 scale-[1.02]'
                  : 'bg-[#111622] text-[#94A3B8] hover:text-white hover:bg-[#161B26] border border-white/10'
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="rounded-3xl bg-[#111622] border border-white/10 overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Description (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-[#161B26] border border-white/10 text-[#BDB4FE] text-xs font-semibold uppercase tracking-wider">
              {current.tag}
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white font-heading leading-tight">
              {current.heading}
            </h3>

            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-3 pt-2">
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-sm sm:text-[15px] font-medium text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#12B76A] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#request-demo"
                className="inline-flex items-center gap-2.5 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-[15px] font-semibold h-12 px-7 rounded-full shadow-lg shadow-[#7A5AF8]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Launch for {current.title}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Visual Image Canvas (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video relative group">
              <img
                src={current.previewImage}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {current.title} Application Preview
                </span>
                <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
