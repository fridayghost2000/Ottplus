export interface IndustryCapability {
  title: string
  description: string
}

export interface IndustrySpec {
  label: string
  value: string
}

export interface IndustryItemData {
  slug: string
  tagline: string
  title: string
  shortDescription: string
  heroHeadline: string
  heroSummary: string
  heroImage: string
  secondaryImage: string
  homepageSectionHref: string
  homepageSectionLabel: string
  highlights: IndustryCapability[]
  specs: IndustrySpec[]
  useCases: string[]
}

export const INDUSTRIES_DATA: IndustryItemData[] = [
  {
    slug: 'broadcast-media',
    tagline: 'OTTFAST FOR BROADCASTERS',
    title: 'Broadcast & Media',
    shortDescription:
      'PowerStream and Captivate feature powerful live video broadcast software for all audiences.',
    heroHeadline: 'A Modern Video Broadcasting System for Broadcasters.',
    heroSummary:
      'PowerStream and Captivate feature powerful live video broadcast software for all audiences. Create Streaming Video On Demand solutions that operate live, on-demand, or both simultaneously across every screen.',
    heroImage: '/sectors/broadcasters.jpg',
    secondaryImage: '/sectors/broadcasters.jpg',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'View Business Sectors',
    specs: [
      { label: 'Delivery Mode', value: 'Live + VOD + Linear' },
      { label: 'Monetization', value: 'SSAI, AVOD, SVOD' },
      { label: 'Playback Quality', value: '4K Adaptive Bitrate' },
      { label: 'Customization', value: '100% White-Label' },
    ],
    highlights: [
      {
        title: 'Live & On-Demand Simultaneously',
        description:
          'Operate live and video-on-demand channels separately or simultaneously without heavy equipment or large production crews.',
      },
      {
        title: 'Surreal Multi-Platform Viewing',
        description:
          'High pixel rates, refined user access, customized lineups, and intelligent search options accessible anywhere and on any device.',
      },
      {
        title: 'High ROI Advertising & Monetization',
        description:
          'Generate strong return on investment with OTTFast’s best-in-class advertising tactics and flexible video monetization tools.',
      },
      {
        title: '100% Modifiable UI/UX',
        description:
          'Push through restrictions and customize every feature for your targeted audience to publish, distribute, and engage your content.',
      },
    ],
    useCases: [
      'TV Networks & Channels',
      'Live News Broadcasters',
      'Cable & Satellite Operators',
      'Digital Media Publishers',
    ],
  },
  {
    slug: 'education-e-learning',
    tagline: 'OTTFAST FOR EDUCATION',
    title: 'Education & e-Learning',
    shortDescription:
      'Educate and Motivate! Bring your video courses online in your own web & mobile app.',
    heroHeadline: 'Educate & Motivate. Bring Your Video Courses Online.',
    heroSummary:
      'Create smart on-demand classes for your enrolled students, stream live lectures, and expand the scope of your courses on a completely online platform supported by sustainable monetization.',
    heroImage: '/sectors/education.jpg',
    secondaryImage: '/sectors/education.jpg',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'View Business Sectors',
    specs: [
      { label: 'Course Format', value: 'Live Classes & VOD' },
      { label: 'Channel Control', value: '100% Independent' },
      { label: 'Security', value: 'DRM & Access Control' },
      { label: 'Setup Speed', value: 'No-Code Launch' },
    ],
    highlights: [
      {
        title: 'Independent Educational Channel',
        description:
          'Offer courses online at your own pace and schedule on a dedicated video channel that keeps learners engaged and coming back.',
      },
      {
        title: 'Immersive Learning Opportunities',
        description:
          'Deliver structured educational courses in the most captivating video format with all the components needed for modern learning.',
      },
      {
        title: 'Maintain a Sustainable Income',
        description:
          'Broadcast and monetize your classes directly as an education expert—building a steady, recurring revenue stream year-round.',
      },
      {
        title: 'Simple EduTech Channel Setup',
        description:
          'Share your expertise globally with complete control over your channel, curriculum structure, and student access.',
      },
    ],
    useCases: [
      'Universities & Coaching',
      'Online Course Creators',
      'Corporate Training Academies',
      'Skill Certification Portals',
    ],
  },
  {
    slug: 'filmmakers',
    tagline: 'OTTFAST FOR FILMMAKERS',
    title: 'Filmmakers',
    shortDescription:
      'Create your own personalized movie streaming platform to make unlimited revenue through videos.',
    heroHeadline: 'Your Personalized Movie Streaming Platform.',
    heroSummary:
      'Launch, manage, and stream movies, web series, and TV shows globally with multi-model monetization (SVOD, TVOD, AVOD, PPV) and studio-grade DRM content protection.',
    heroImage: '/sectors/filmmakers.jpg',
    secondaryImage: '/sectors/filmmakers.jpg',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'View Business Sectors',
    specs: [
      { label: 'Revenue Models', value: 'SVOD, TVOD, AVOD, PPV' },
      { label: 'Protection', value: 'DRM & Watermarking' },
      { label: 'Hosting', value: 'Cloud & On-Premise' },
      { label: 'Discovery', value: 'SEO & Recommendations' },
    ],
    highlights: [
      {
        title: 'Maximize Value Across Revenue Streams',
        description:
          'Combine subscriptions (SVOD), rentals/ticketing (TVOD/PPV), and ad-supported (AVOD) tiers to maximize the value of every title.',
      },
      {
        title: 'Integrated Piracy & DRM Protection',
        description:
          'Protect your films with Multi-DRM, encryption, dynamic watermarking, password protection, and single-sign-on access control.',
      },
      {
        title: 'Built-In Growth & SEO Tools',
        description:
          'Boost discoverability using social interactions, real-time notifications, smart recommendation engines, and search-engine optimization.',
      },
      {
        title: 'Insightful Audience Analytics',
        description:
          'Track content reach by geographic location, device, viewing minutes, and traffic source from one unified analytics dashboard.',
      },
    ],
    useCases: [
      'Independent Filmmakers',
      'Production Houses & Studios',
      'Film Festivals & Premieres',
      'Documentary Distributors',
    ],
  },
  {
    slug: 'enterprise',
    tagline: 'OTTFAST FOR ENTERPRISE',
    title: 'Enterprise',
    shortDescription:
      'Engage your corporate workforce with a business streaming platform for live and on-demand video.',
    heroHeadline: 'Empower Team Talks With Corporate Video Streaming.',
    heroSummary:
      'Connect your global workforce and webcasts at any scale with HQ live & on-demand streaming for town halls, team meetings, executive updates, and internal training.',
    heroImage: '/sectors/enterprise.jpg',
    secondaryImage: '/sectors/enterprise.jpg',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'View Business Sectors',
    specs: [
      { label: 'Access Control', value: 'SSO & Private Portals' },
      { label: 'Scale', value: 'Global Workforce' },
      { label: 'Communication', value: 'Live Town Halls + VOD' },
      { label: 'Reliability', value: '99.99% Uptime SLA' },
    ],
    highlights: [
      {
        title: 'Executive Town Halls & Team Meetings',
        description:
          'Address corporate plans with crisp live broadcasts and curated on-demand video libraries that sharpen project alignment.',
      },
      {
        title: 'Global Workforce Communication',
        description:
          'Connect distributed teams across offices and regions with buffer-free high-quality webcasts at any scale.',
      },
      {
        title: 'Confidential Internal Security',
        description:
          'Keep proprietary company broadcasts restricted to authorized employees with enterprise authentication and encrypted delivery.',
      },
      {
        title: 'Centralized Knowledge Library',
        description:
          'Record every live session automatically into an organized, searchable on-demand portal for onboarding and compliance.',
      },
    ],
    useCases: [
      'Global Town Halls',
      'Employee Onboarding & L&D',
      'Partner & Investor Webcasts',
      'Internal Corporate Comms',
    ],
  },
  {
    slug: 'fitness',
    tagline: 'OTTFAST FOR FITNESS',
    title: 'Fitness',
    shortDescription:
      'Procure 5X more money by streaming and selling fitness courses with zero commission.',
    heroHeadline: 'Changing the Game for Fitness Monetization.',
    heroSummary:
      'Establish your online fitness studio in minutes with an all-encompassing video monetization platform—delivering HD workout programs worldwide with zero commission.',
    heroImage: '/sectors/fitness.jpg',
    secondaryImage: '/sectors/fitness.jpg',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'View Business Sectors',
    specs: [
      { label: 'Commission', value: '0% Platform Cut' },
      { label: 'Streaming', value: 'Energy-Rich HD Video' },
      { label: 'Monetization', value: 'Passes & Subscriptions' },
      { label: 'Reach', value: 'Web, Mobile & TV Apps' },
    ],
    highlights: [
      {
        title: 'Launch Your Studio in Minutes',
        description:
          'Get a ready-to-go, feature-rich fitness channel so you can start streaming and selling workout programs immediately.',
      },
      {
        title: 'Online Fitness Courses for Coaches',
        description:
          'Sell more as you produce more—reach clients worldwide with stutter-free HD training experiences across every device.',
      },
      {
        title: 'Pocket 5X Revenue Faster',
        description:
          'Set up flexible membership tiers, bundle pricing, and payment options tailored to your fitness community with zero commission.',
      },
      {
        title: 'Lifelike Virtual Studio Experience',
        description:
          'Deliver crisp, energy-rich HD workout videos and live classes that make subscribers feel like they are right in the studio.',
      },
    ],
    useCases: [
      'Personal Trainers & Coaches',
      'Yoga & Pilates Studios',
      'Gym Chains & Wellness Brands',
      'Nutrition & Bootcamp Programs',
    ],
  },
  {
    slug: 'sports',
    tagline: 'OTTFAST FOR SPORTS',
    title: 'Sports',
    shortDescription:
      'Broadcast live and on-demand sporting events using end-to-end OTT sports streaming software.',
    heroHeadline: 'End-to-End OTT Sports Streaming Platform.',
    heroSummary:
      'Provide fans an incredible, riveting viewing experience across any device—combining live match broadcasts, on-demand highlights, flexible monetization, and quick transcoding.',
    heroImage: '/sectors/sports.jpg',
    secondaryImage: '/sectors/sports.jpg',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'View Business Sectors',
    specs: [
      { label: 'Streaming Mode', value: 'Live + Instant VOD' },
      { label: 'Transcoding', value: 'Ultra-Fast Multi-Bitrate' },
      { label: 'Deployment', value: 'Cloud & On-Site' },
      { label: 'Monetization', value: 'PPV, Season Pass, Ads' },
    ],
    highlights: [
      {
        title: 'Live & On-Demand Match Coverage',
        description:
          'Operate live game feeds and on-demand replay libraries simultaneously without massive outside-broadcast infrastructure.',
      },
      {
        title: '100% Adaptable Multi-Device Playback',
        description:
          'Let fans watch sporting events on mobile, desktop, and Smart TVs with high pixel rates and intelligent search.',
      },
      {
        title: 'Quick Transcoding & Low Latency',
        description:
          'Deliver fast-moving sports action smoothly across varying network speeds with rapid adaptive transcoding.',
      },
      {
        title: 'High ROI Advertising & Ticketing',
        description:
          'Monetize tournaments and leagues through pay-per-view passes, subscriptions, and targeted sponsorship ads.',
      },
    ],
    useCases: [
      'Sports Leagues & Federations',
      'Collegiate & Club Athletics',
      'Esports Tournaments',
      'Live Match Highlight Hubs',
    ],
  },
  {
    slug: 'religious',
    tagline: 'OTTFAST FOR RELIGIOUS',
    title: 'Religious',
    shortDescription:
      'Connect & involve your communities with a live & on-demand religious streaming platform.',
    heroHeadline: 'Connect & Involve Your Communities Worldwide.',
    heroSummary:
      'Stream live services, discourses, concerts, weddings, and group prayers—and share audio sermons and devotional podcasts across iOS, Android, Roku, and Amazon Fire TV.',
    heroImage: '/sectors/religious.jpg',
    secondaryImage: '/sectors/religious.jpg',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'View Business Sectors',
    specs: [
      { label: 'Platforms', value: 'iOS, Android, Roku, Fire' },
      { label: 'Formats', value: 'Live, VOD & Audio' },
      { label: 'Workflow', value: 'Auto Live-to-VOD' },
      { label: 'Reach', value: 'Global Congregations' },
    ],
    highlights: [
      {
        title: 'All Around TV & Mobile Reach',
        description:
          'Reach millions of followers worldwide on iOS, Android, Roku, and Amazon Fire TV with dedicated on-demand and live channels.',
      },
      {
        title: 'Real-Time Mobile Broadcasting',
        description:
          'Stream church services, concerts, weddings, group prayers, and discourses live to engage remote congregations effortlessly.',
      },
      {
        title: 'Message Audio & Devotional Podcasts',
        description:
          'Let listeners absorb key sermon teachings on the go with audio streaming and devotional podcasts for churches, mosques, and temples.',
      },
      {
        title: 'Automated Live-to-VOD Archives',
        description:
          'Turn every live spiritual broadcast into a permanent, searchable on-demand library so faith stays accessible everywhere.',
      },
    ],
    useCases: [
      'Churches & Ministries',
      'Temples & Spiritual Centers',
      'Mosques & Community Faith',
      'Devotional Audio & Podcasts',
    ],
  },
  {
    slug: 'youtubers',
    tagline: 'OTTFAST FOR CREATORS',
    title: 'Creators',
    shortDescription:
      'Think outside of YouTube! Own your audience and create 5x more revenue with 0% commission.',
    heroHeadline: 'Think Outside of YouTube. Create 5x More Revenue.',
    heroSummary:
      'Celebrate exclusivity with your own full-featured video channel. Stop relying on third-party algorithms and keep your profits with 0% commission and total creative control.',
    heroImage: '/sectors/youtubers.jpg',
    secondaryImage: '/sectors/youtubers.jpg',
    homepageSectionHref: '/#industries',
    homepageSectionLabel: 'View Business Sectors',
    specs: [
      { label: 'Revenue Share', value: '0% Commission' },
      { label: 'Creative Rules', value: '100% Yours' },
      { label: 'Catalog', value: 'Unlimited Videos' },
      { label: 'Setup', value: 'Launch Immediately' },
    ],
    highlights: [
      {
        title: 'Your Brand & Identity First',
        description:
          'Build your own network, deliver one-of-a-kind member experiences, and strengthen your identity as an independent creator.',
      },
      {
        title: 'Total Creative Control',
        description:
          'No more unpredictable algorithm rules or demonetization—express your vision and publish directly to your core fans.',
      },
      {
        title: 'Own Financial Gain (0% Commission)',
        description:
          'Monetize your close-knit community with memberships, exclusive drops, and pay-per-view at your own pace.',
      },
      {
        title: 'Simple Channel Setup & Unlimited Library',
        description:
          'Launch your branded video platform immediately without building from scratch, backed by an unlimited video collection.',
      },
    ],
    useCases: [
      'Independent Video Creators',
      'Podcast & Talk Show Hosts',
      'Exclusive Member Clubs',
      'Niche Documentary Channels',
    ],
  },
]

export function getIndustryBySlug(slug?: string): IndustryItemData | undefined {
  if (!slug) return undefined
  return INDUSTRIES_DATA.find((item) => item.slug === slug)
}
