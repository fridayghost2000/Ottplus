export interface ProductCapability {
  title: string
  description: string
}

export interface ProductSpec {
  label: string
  value: string
}

export type ProductCategoryKey = 'ott-platform' | 'apps-tv' | 'iptv-infra'

export interface ProductItemData {
  slug: string
  category: ProductCategoryKey
  categoryLabel: string
  title: string
  shortDescription: string
  heroHeadline: string
  heroSummary: string
  heroImage: string
  secondaryImage: string
  homepageSectionHref: string
  homepageSectionLabel: string
  highlights: ProductCapability[]
  specs: ProductSpec[]
  useCases: string[]
}

export const DEVICE_LOGOS = [
  {
    name: 'Web',
    src: '/ottfast-images/web.webp',
    gradient: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)',
    glow: 'rgba(56, 189, 248, 0.45)',
    border: 'rgba(56, 189, 248, 0.35)',
  },
  {
    name: 'iOS',
    src: '/ottfast-images/iOS.webp',
    gradient: 'linear-gradient(135deg, #E2E8F0 0%, #60A5FA 100%)',
    glow: 'rgba(96, 165, 250, 0.45)',
    border: 'rgba(96, 165, 250, 0.35)',
  },
  {
    name: 'Android',
    src: '/ottfast-images/android.webp',
    gradient: 'linear-gradient(135deg, #4ADE80 0%, #10B981 100%)',
    glow: 'rgba(74, 222, 128, 0.45)',
    border: 'rgba(74, 222, 128, 0.35)',
  },
  {
    name: 'Android TV',
    src: '/ottfast-images/androidtv.webp',
    gradient: 'linear-gradient(135deg, #2DD4BF 0%, #3DDC84 100%)',
    glow: 'rgba(45, 212, 191, 0.45)',
    border: 'rgba(45, 212, 191, 0.35)',
  },
  {
    name: 'Apple TV',
    src: '/ottfast-images/appletv.webp',
    gradient: 'linear-gradient(135deg, #F8FAFC 0%, #A48AFB 100%)',
    glow: 'rgba(164, 138, 251, 0.45)',
    border: 'rgba(164, 138, 251, 0.35)',
  },
  {
    name: 'Fire TV',
    src: '/ottfast-images/firetv.webp',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F97316 100%)',
    glow: 'rgba(249, 115, 22, 0.48)',
    border: 'rgba(249, 115, 22, 0.38)',
  },
  {
    name: 'Roku',
    src: '/ottfast-images/roku.webp',
    gradient: 'linear-gradient(135deg, #C084FC 0%, #7C3AED 100%)',
    glow: 'rgba(168, 85, 247, 0.5)',
    border: 'rgba(168, 85, 247, 0.38)',
  },
  {
    name: 'Samsung Tizen',
    src: '/ottfast-images/tizen.webp',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)',
    glow: 'rgba(59, 130, 246, 0.48)',
    border: 'rgba(59, 130, 246, 0.38)',
  },
  {
    name: 'LG webOS',
    src: '/ottfast-images/Lg_webOS.webp',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #E11D48 100%)',
    glow: 'rgba(244, 63, 94, 0.48)',
    border: 'rgba(244, 63, 94, 0.38)',
  },
] as const

export const PRODUCTS_DATA: ProductItemData[] = [
  // 1. OTT PLATFORM
  {
    slug: 'ott-platform',
    category: 'ott-platform',
    categoryLabel: 'OTT PLATFORM',
    title: 'White-Label OTT Platform',
    shortDescription: 'Turnkey VoD & live streaming',
    heroHeadline: 'Launch Your Own Branded OTT Streaming Platform',
    heroSummary:
      'Deliver top-notch VoD and live content across web, mobile, and Smart TVs under your own brand with full ownership, 150+ built-in features, and cloud or on-premise deployment.',
    heroImage: '/ottfast-images/ott-platform-5d.jpg',
    secondaryImage: '/ottfast-images/Group-34.png',
    homepageSectionHref: '/#platform',
    homepageSectionLabel: 'Explore Platform Overview',
    highlights: [
      {
        title: '100% White-Label Branding',
        description:
          'Showcase your video catalog with your own logo, domain, UI theme, and custom player controls.',
      },
      {
        title: 'VoD & Live Content Delivery',
        description:
          'Stream on-demand libraries alongside scheduled linear channels and live broadcasts seamlessly.',
      },
      {
        title: 'Cloud or On-Premise Hosting',
        description:
          'Deploy on scalable cloud infrastructure or your own on-premise servers based on compliance needs.',
      },
      {
        title: 'Multi-Model Monetization',
        description:
          'Launch SVOD, TVOD, AVOD, or hybrid plans with integrated payment gateways and in-app purchases.',
      },
    ],
    specs: [
      { label: 'Deployment', value: 'Cloud / On-Premise' },
      { label: 'Built-in Features', value: '150+ OTT Modules' },
      { label: 'Streaming Protocol', value: 'Adaptive HLS / DASH' },
      { label: 'Device Coverage', value: 'Web, Mobile & Smart TVs' },
    ],
    useCases: ['Media & Broadcasters', 'Filmmakers', 'Fitness & Creators', 'Enterprise Portals'],
  },
  {
    slug: 'video-hosting-cms',
    category: 'ott-platform',
    categoryLabel: 'OTT PLATFORM',
    title: 'Video Hosting & CMS',
    shortDescription: 'Upload, edit, schedule & manage',
    heroHeadline: 'Professional-Grade Video Hosting & Content Management',
    heroSummary:
      'Manage all your media assets in one centralized dashboard. Upload, store, organize, edit metadata, schedule releases, and track content performance effortlessly.',
    heroImage: '/ottfast-images/Group-341.png',
    secondaryImage: '/ottfast-images/Group-24.png',
    homepageSectionHref: '/#platform',
    homepageSectionLabel: 'See CMS & Hosting Tools',
    highlights: [
      {
        title: 'Bulk Upload & Library Management',
        description:
          'Ingest large video catalogs with automated metadata tagging, playlists, categories, and series grouping.',
      },
      {
        title: 'Content Scheduling & Publishing',
        description:
          'Schedule VoD premieres, geo-targeted availability windows, and automated publish/unpublish rules.',
      },
      {
        title: 'Role-Based Access Control',
        description:
          'Collaborate safely across editorial, marketing, and operations teams with granular permissions.',
      },
      {
        title: 'Unified Media Dashboard',
        description:
          'Monitor storage usage, bandwidth, and asset status in real time from a single control plane.',
      },
    ],
    specs: [
      { label: 'Storage', value: 'Scalable Cloud / Hybrid' },
      { label: 'Workflow', value: 'Drag & Drop + API Ingest' },
      { label: 'Scheduling', value: 'Time-Zone & Geo Rules' },
      { label: 'Catalog Support', value: 'VoD, Series, Live Clips' },
    ],
    useCases: ['E-Learning Academies', 'Production Studios', 'Newsrooms', 'Corporate Training'],
  },
  {
    slug: 'media-player',
    category: 'ott-platform',
    categoryLabel: 'OTT PLATFORM',
    title: 'HLS Media Player',
    shortDescription: 'Buffer-free playback across devices',
    heroHeadline: 'Buffer-Free HTML5 & HLS Media Player',
    heroSummary:
      'Deliver smooth, adaptive playback across desktops, smartphones, tablets, and Smart TVs with a lightweight, customizable HTML5/HLS player built for zero-lag viewing.',
    heroImage: '/ottfast-images/Group-342.png',
    secondaryImage: '/ottfast-images/Group-25.png',
    homepageSectionHref: '/#features',
    homepageSectionLabel: 'View Player Capabilities',
    highlights: [
      {
        title: 'Adaptive Bitrate Streaming',
        description:
          'Automatically adjusts video quality to each viewer’s network speed to prevent buffering.',
      },
      {
        title: 'Custom Brand Styling',
        description:
          'Match player controls, watermarks, thumbnails, and end-screens to your brand identity.',
      },
      {
        title: 'Multi-Audio & Subtitles',
        description:
          'Support multiple audio tracks, closed captions, and localized subtitle files out of the box.',
      },
      {
        title: 'Interactive Overlays & Ads',
        description:
          'Built-in support for VAST/VPAID ads, chapter markers, and clickable viewer CTAs.',
      },
    ],
    specs: [
      { label: 'Core Engine', value: 'HTML5 / HLS' },
      { label: 'Startup Latency', value: 'Sub-Second Playback' },
      { label: 'Captions', value: 'WebVTT / SRT / Multi-Audio' },
      { label: 'Ad Standards', value: 'VAST / VPAID / Pre-Mid-Post' },
    ],
    useCases: ['OTT Portals', 'News & Sports', 'Course Platforms', 'Embedded Brand Video'],
  },
  {
    slug: 'video-transcoding',
    category: 'ott-platform',
    categoryLabel: 'OTT PLATFORM',
    title: 'Video Transcoding',
    shortDescription: 'Adaptive multi-resolution encoding',
    heroHeadline: 'Scalable & Flexible Cloud Video Transcoding',
    heroSummary:
      'Automatically convert source videos into multiple resolutions and bitrates for instant, high-quality playback on any screen or bandwidth condition.',
    heroImage: '/ottfast-images/Group-343.png',
    secondaryImage: '/ottfast-images/Group-26.png',
    homepageSectionHref: '/#features',
    homepageSectionLabel: 'Explore Video Tools',
    highlights: [
      {
        title: 'Multi-Resolution Renditions',
        description:
          'Generate 360p, 480p, 720p, 1080p Full HD, and 4K ABR ladders automatically from a single upload.',
      },
      {
        title: 'Fast Parallel Processing',
        description:
          'High-throughput encoding pipelines get your newly uploaded content ready for viewers in minutes.',
      },
      {
        title: 'Universal Format Compatibility',
        description:
          'Ingest MP4, MOV, MKV, MXF, and broadcast feeds and output universal HLS/DASH streams.',
      },
      {
        title: 'Bandwidth Optimization',
        description:
          'Reduce storage and CDN delivery costs while preserving crisp visual fidelity.',
      },
    ],
    specs: [
      { label: 'Output Formats', value: 'HLS / MPEG-DASH / MP4' },
      { label: 'Resolutions', value: 'Up to 4K UHD' },
      { label: 'Codecs', value: 'H.264 / HEVC (H.265)' },
      { label: 'Scaling', value: 'Auto-Elastic Queue' },
    ],
    useCases: ['Film Distribution', 'UGC & Creators', 'Sports Highlights', 'Broadcast Archives'],
  },
  {
    slug: 'live-conferencing',
    category: 'ott-platform',
    categoryLabel: 'OTT PLATFORM',
    title: 'Live & Conferencing',
    shortDescription: 'Broadcast & low-lag video chats',
    heroHeadline: 'Live Video Broadcasting & Low-Lag Conferencing',
    heroSummary:
      'Power large-scale live events with PowerStream & Captivate broadcasting tools, or host lag-free personal and business video conferencing with minimal data usage.',
    heroImage: '/ottfast-images/Group-34.png',
    secondaryImage: '/ottfast-images/Group-27.png',
    homepageSectionHref: '/#solutions',
    homepageSectionLabel: 'View Live Solutions',
    highlights: [
      {
        title: 'Live Event Broadcasting',
        description:
          'Stream sports, concerts, religious gatherings, and town halls to global audiences in real time.',
      },
      {
        title: 'Low-Data Video Conferencing',
        description:
          'Flawless two-way personal and enterprise video chats engineered for minimal bandwidth overhead.',
      },
      {
        title: 'Live-to-VoD Recording',
        description:
          'Automatically archive every live stream into your VoD library for instant replay.',
      },
      {
        title: 'Real-Time Engagement',
        description:
          'Combine live video with interactive chat, Q&A, and live viewer analytics.',
      },
    ],
    specs: [
      { label: 'Ingest', value: 'RTMP / RTMPS / SRT' },
      { label: 'Broadcast Suite', value: 'PowerStream & Captivate' },
      { label: 'Archive', value: 'Instant Live-to-VoD' },
      { label: 'Mode', value: '1-to-Many & Interactive' },
    ],
    useCases: ['Broadcasters', 'Live Sports', 'Religious Communities', 'Enterprise Town Halls'],
  },

  // 2. APPS & TV
  {
    slug: 'web-mobile-apps',
    category: 'apps-tv',
    categoryLabel: 'APPS & TV',
    title: 'Web & Mobile Apps',
    shortDescription: 'iOS, Android & web portals',
    heroHeadline: 'Custom Web, iOS & Android OTT Applications',
    heroSummary:
      'Reach viewers everywhere with native iOS and Android apps alongside a responsive web streaming portal—complete with offline downloads, push notifications, and in-app billing.',
    heroImage: '/ottfast-images/ott-platform-5d.jpg',
    secondaryImage: '/ottfast-images/Group-28.png',
    homepageSectionHref: '/#solutions',
    homepageSectionLabel: 'Explore App Solutions',
    highlights: [
      {
        title: 'Native iOS & Android Apps',
        description:
          'Smooth native mobile experiences built for performance, gesture controls, and background audio.',
      },
      {
        title: 'Responsive Web Portal',
        description:
          'SEO-friendly web streaming storefront with instant playback and user account management.',
      },
      {
        title: 'In-App Purchases & Subscriptions',
        description:
          'Seamless Apple App Store and Google Play billing integration for frictionless signups.',
      },
      {
        title: 'Cross-Device Watch Sync',
        description:
          'Continue watching across mobile, tablet, and desktop without losing playback position.',
      },
    ],
    specs: [
      { label: 'Platforms', value: 'Web, iOS, Android' },
      { label: 'Billing', value: 'Apple Pay, Google Play, Stripe' },
      { label: 'Engagement', value: 'Push Alerts & Watchlists' },
      { label: 'Branding', value: '100% Custom Store Listing' },
    ],
    useCases: ['YouTubers & Creators', 'Fitness Studios', 'EdTech Platforms', 'Niche SVOD Brands'],
  },
  {
    slug: 'smart-tv',
    category: 'apps-tv',
    categoryLabel: 'APPS & TV',
    title: 'Smart TV Apps',
    shortDescription: 'Apple TV, Fire TV, Roku, Tizen & webOS',
    heroHeadline: 'Big-Screen Smart TV & Connected TV OTT Apps',
    heroSummary:
      'Put your streaming brand directly in the living room. Launch dedicated apps for Android TV, Apple TV, Amazon Fire TV, Roku, Samsung Tizen, and LG webOS.',
    heroImage: '/ottfast-images/Group-341.png',
    secondaryImage: '/ottfast-images/Group-29.png',
    homepageSectionHref: '/#solutions',
    homepageSectionLabel: 'See TV App Ecosystem',
    highlights: [
      {
        title: 'All Major CTV Ecosystems',
        description:
          'Single-CMS publishing to Android TV, Apple TV, Fire TV, Roku, Samsung Tizen, and LG webOS.',
      },
      {
        title: '10-Foot Living Room UI',
        description:
          'Remote-first navigation, crisp 4K posters, and fast channel/episode switching.',
      },
      {
        title: 'QR & Code-Based Login',
        description:
          'Effortless TV sign-in using QR codes or 6-digit activation codes from mobile/web.',
      },
      {
        title: 'TV-Ready Monetization',
        description:
          'Support TV app store subscriptions, pay-per-view events, and server-side ad insertion.',
      },
    ],
    specs: [
      { label: 'TV OS', value: 'Tizen, webOS, Android TV' },
      { label: 'Streaming Sticks', value: 'Fire TV, Apple TV, Roku' },
      { label: 'Navigation', value: 'D-Pad / Remote Optimized' },
      { label: 'Sync', value: 'Unified CMS & Watch History' },
    ],
    useCases: ['Movie & Series Platforms', 'Sports Channels', 'Broadcasters', 'Faith & Lifestyle'],
  },
  {
    slug: 'hbbtv',
    category: 'apps-tv',
    categoryLabel: 'APPS & TV',
    title: 'HbbTV',
    shortDescription: 'Hybrid Broadcast Broadband TV',
    heroHeadline: 'Interactive HbbTV Solutions for Broadcasters',
    heroSummary:
      'Bridge traditional broadcast television with broadband OTT interactivity. Deliver catch-up TV, red-button apps, EPG overlays, and targeted ads directly on connected TVs.',
    heroImage: '/ottfast-images/Group-342.png',
    secondaryImage: '/ottfast-images/Group-24.png',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'Explore Broadcast Solutions',
    highlights: [
      {
        title: 'Broadcast + Broadband Convergence',
        description:
          'Combine live DVB broadcast feeds with on-demand broadband catalogs in one experience.',
      },
      {
        title: 'Red-Button Interactive Apps',
        description:
          'Launch interactive polls, companion stats, and catch-up menus right over live TV.',
      },
      {
        title: 'Dynamic Program Guides (EPG)',
        description:
          'Rich electronic program guides with start-over TV and instant VoD deep links.',
      },
      {
        title: 'Addressable TV Advertising',
        description:
          'Unlock higher CPMs with targeted broadband ad replacement on broadcast channels.',
      },
    ],
    specs: [
      { label: 'Standard', value: 'HbbTV Compliant' },
      { label: 'Features', value: 'Catch-Up, Start-Over, EPG' },
      { label: 'Signal', value: 'DVB + Broadband Sync' },
      { label: 'Target', value: 'TV Networks & Operators' },
    ],
    useCases: ['National Broadcasters', 'Satellite Channels', 'Public Media', 'Sports Networks'],
  },
  {
    slug: 'monetization',
    category: 'apps-tv',
    categoryLabel: 'APPS & TV',
    title: 'Monetization & Payments',
    shortDescription: 'SVOD, TVOD, AVOD & in-app purchases',
    heroHeadline: 'Flexible Video Monetization & Payment Gateways',
    heroSummary:
      'Turn your content into predictable recurring revenue. Support subscriptions, pay-per-view rentals, ad-supported tiers, coupons, and global payment gateways out of the box.',
    heroImage: '/ottfast-images/Group-343.png',
    secondaryImage: '/ottfast-images/Group-25.png',
    homepageSectionHref: '/#platform',
    homepageSectionLabel: 'See Monetization Engine',
    highlights: [
      {
        title: 'SVOD, TVOD & AVOD Models',
        description:
          'Mix monthly/annual subscriptions, single-title rentals, and ad-supported free tiers.',
      },
      {
        title: 'Global Payment Gateways',
        description:
          'Accept cards, UPI, wallets, and regional currencies with automated recurring billing.',
      },
      {
        title: 'In-App Purchases (IAP)',
        description:
          'Native checkout flows for iOS, Android, Apple TV, Fire TV, and Roku stores.',
      },
      {
        title: 'Promos, Bundles & Coupons',
        description:
          'Run free trials, discount codes, and multi-channel content bundles to boost conversion.',
      },
    ],
    specs: [
      { label: 'Revenue Models', value: 'SVOD / TVOD / AVOD / Hybrid' },
      { label: 'Checkout', value: 'Web Gateway + Mobile IAP' },
      { label: 'Analytics', value: 'MRR, Churn & ROI Reports' },
      { label: 'Tax & Currencies', value: 'Multi-Currency Support' },
    ],
    useCases: ['Independent Filmmakers', 'Course Creators', 'Fitness Brands', 'OTT Startups'],
  },

  // 3. IPTV & INFRASTRUCTURE
  {
    slug: 'iptv',
    category: 'iptv-infra',
    categoryLabel: 'IPTV & INFRASTRUCTURE',
    title: 'IPTV Solutions',
    shortDescription: 'Hotels, operators, MSOs, ISPs & gov',
    heroHeadline: 'Enterprise IPTV Solutions for Every Operator & Venue',
    heroSummary:
      'Deliver reliable, high-definition IP television across managed networks and public internet—purpose-built for Hotels, Content Syndicators, Governments, Broadcast/Satellite, MSOs/ISPs, and Operators.',
    heroImage: '/ottfast-images/ott-platform-5d.jpg',
    secondaryImage: '/ottfast-images/Group-34.png',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'Explore Industry Solutions',
    highlights: [
      {
        title: 'IPTV for Hotels & Hospitality',
        description:
          'Branded in-room TV portals with welcome screens, guest services, and multi-language channels.',
      },
      {
        title: 'IPTV for MSOs, ISPs & Operators',
        description:
          'Launch bundled live TV + VoD services over fiber/broadband to increase ARPU and reduce churn.',
      },
      {
        title: 'IPTV for Broadcast, Satellite & Syndicators',
        description:
          'Distribute linear feeds and syndicated catalogs securely across global IP endpoints.',
      },
      {
        title: 'IPTV for Governments & Institutions',
        description:
          'Secure, closed-network video distribution for public-sector communications and campuses.',
      },
    ],
    specs: [
      { label: 'Verticals', value: 'Hotels, ISPs, Gov, Broadcast' },
      { label: 'Delivery', value: 'Managed IP & Public OTT' },
      { label: 'Channel Support', value: 'Live Linear + Catch-Up + VoD' },
      { label: 'Endpoints', value: 'STBs, Smart TVs, Apps' },
    ],
    useCases: [
      'Hotels & Resorts',
      'MSOs & Fiber ISPs',
      'Telecom Operators',
      'Government & Broadcast Networks',
    ],
  },
  {
    slug: 'drm-security',
    category: 'iptv-infra',
    categoryLabel: 'IPTV & INFRASTRUCTURE',
    title: 'DRM & Security',
    shortDescription: 'Enterprise-grade content protection',
    heroHeadline: 'Enterprise-Grade DRM & Stream Protection',
    heroSummary:
      'Protect your premium movies, courses, and live broadcasts from piracy and unauthorized sharing with studio-grade DRM, token authentication, geo-blocking, and watermarking.',
    heroImage: '/ottfast-images/Group-26.png',
    secondaryImage: '/ottfast-images/Group-27.png',
    homepageSectionHref: '/#features',
    homepageSectionLabel: 'See Security Section',
    highlights: [
      {
        title: 'Multi-DRM Encryption',
        description:
          'Secure streams against screen capture and unauthorized downloads across browsers and apps.',
      },
      {
        title: 'Geo-Blocking & Domain Lock',
        description:
          'Restrict playback by country, IP range, or authorized embed domains.',
      },
      {
        title: 'Signed URLs & Token Auth',
        description:
          'Time-limited playback tokens prevent link sharing and hotlinking.',
      },
      {
        title: 'Concurrent Stream Limits',
        description:
          'Control simultaneous device logins per subscriber account to stop credential sharing.',
      },
    ],
    specs: [
      { label: 'Protection', value: 'Multi-DRM & AES Encryption' },
      { label: 'Access Control', value: 'Signed Tokens & Geo-Fence' },
      { label: 'Anti-Piracy', value: 'Dynamic Watermarking' },
      { label: 'Compliance', value: 'Enterprise & Studio Ready' },
    ],
    useCases: ['Premium Film Catalogs', 'Paid Courses', 'Live PPV Events', 'Enterprise Video'],
  },
  {
    slug: 'ai-analytics',
    category: 'iptv-infra',
    categoryLabel: 'IPTV & INFRASTRUCTURE',
    title: 'AI & Analytics',
    shortDescription: 'Smart recommendations & ROI insights',
    heroHeadline: 'AI Content Recommendations & Subscriber Analytics',
    heroSummary:
      'Increase watch time and retention with AI-driven content recommendations, while tracking subscriber growth, engagement heatmaps, and real-time ROI from one analytics suite.',
    heroImage: '/ottfast-images/Group-28.png',
    secondaryImage: '/ottfast-images/Group-29.png',
    homepageSectionHref: '/#platform',
    homepageSectionLabel: 'Explore Analytics Suite',
    highlights: [
      {
        title: 'AI-Powered Recommendations',
        description:
          'Automatically surface relevant shows, courses, and videos to each viewer to boost session length.',
      },
      {
        title: 'Subscriber & Revenue Analytics',
        description:
          'Track signups, active subscribers, churn, and per-title ROI in clear executive dashboards.',
      },
      {
        title: 'Playback & QoE Telemetry',
        description:
          'Monitor buffering rates, bitrate distribution, and device breakdown in real time.',
      },
      {
        title: 'Actionable Growth Reports',
        description:
          'Export data-backed insights to refine content acquisition and marketing campaigns.',
      },
    ],
    specs: [
      { label: 'Personalization', value: 'AI Recommendation Engine' },
      { label: 'Metrics', value: 'Views, Watch Time, Churn, ROI' },
      { label: 'QoE', value: 'Real-Time Bitrate & Buffer Logs' },
      { label: 'Reporting', value: 'Dashboard + Exportable Reports' },
    ],
    useCases: ['SVOD Platforms', 'E-Learning', 'Media Networks', 'Marketing Teams'],
  },
  {
    slug: 'global-cdn',
    category: 'iptv-infra',
    categoryLabel: 'IPTV & INFRASTRUCTURE',
    title: 'Global CDN',
    shortDescription: 'Fast, lag-free multi-device delivery',
    heroHeadline: 'High-Speed Global CDN for Seamless Streaming',
    heroSummary:
      'Deliver crisp, lag-free video to viewers anywhere in the world. Our globally distributed CDN architecture caches content close to your audience for instant start times.',
    heroImage: '/ottfast-images/Group-342.png',
    secondaryImage: '/ottfast-images/Group-343.png',
    homepageSectionHref: '/#platform',
    homepageSectionLabel: 'Explore Delivery Network',
    highlights: [
      {
        title: 'Worldwide Edge Delivery',
        description:
          'Serve international audiences with minimal latency and consistent throughput.',
      },
      {
        title: 'High-Concurrency Scaling',
        description:
          'Handle sudden traffic spikes during live premieres, sports matches, and viral launches.',
      },
      {
        title: 'Multi-Device Optimization',
        description:
          'Pre-warmed edge caching tuned for HLS segments across mobile, web, and Smart TVs.',
      },
      {
        title: '99.9%+ Uptime Reliability',
        description:
          'Redundant routing ensures uninterrupted playback even during regional network congestion.',
      },
    ],
    specs: [
      { label: 'Architecture', value: 'Multi-Region Edge CDN' },
      { label: 'Optimized For', value: 'HLS / DASH / Live & VoD' },
      { label: 'Scalability', value: 'Auto-Burst Live Concurrency' },
      { label: 'Latency', value: 'Edge-Cached Low Latency' },
    ],
    useCases: ['Global OTT Brands', 'Live Sports & Events', 'International Broadcasters', 'EdTech'],
  },
]

export const PRODUCT_CATEGORIES: { key: ProductCategoryKey; label: string }[] = [
  { key: 'ott-platform', label: 'OTT PLATFORM' },
  { key: 'apps-tv', label: 'APPS & TV' },
  { key: 'iptv-infra', label: 'IPTV & INFRASTRUCTURE' },
]

export function getProductBySlug(slug?: string): ProductItemData | undefined {
  if (!slug) return undefined
  return PRODUCTS_DATA.find((p) => p.slug === slug)
}
