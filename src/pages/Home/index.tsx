import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { BentoGrid } from './components/BentoGrid'
import { Benefits } from './components/Benefits'
import { GlobalInfrastructure } from './components/GlobalInfrastructure'
import { Industries } from './components/Industries'
import { IPTVSection } from './components/IPTVSection'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { CTABanner } from './components/CTABanner'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Streaming Operations Dashboard & Floating Badges */}
      <Hero />

      {/* 2. Partner & Platform Logo Marquee */}
      <Marquee />

      {/* 3. Core OTT Capabilities & Infrastructure (Asymmetrical Bento Grid) */}
      <BentoGrid />

      {/* 4. Why Content Owners Choose OTTFast (6-Card Feature Grid) */}
      <Benefits />

      {/* 5. Aceternity UI Global World Map & Edge CDN Infrastructure */}
      <GlobalInfrastructure />

      {/* 6. Vertical Industry Solutions Showcase */}
      <Industries />

      {/* 7. Turnkey IPTV, Smart TV & HbbTV Infrastructure */}
      <IPTVSection />

      {/* 8. Verified Social Proof & Customer Stories */}
      <Testimonials />

      {/* 9. Transparent Pricing Plans (with Annual 20% Discount Toggle) */}
      <Pricing />

      {/* 10. Frequently Asked Questions (2-Column Accordion) */}
      <FAQ />

      {/* 11. Large Lead Generation CTA Banner */}
      <CTABanner />
    </>
  )
}
