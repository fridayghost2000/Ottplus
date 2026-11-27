import { Hero } from './components/Hero'
import { PlatformSection } from './components/PlatformSection'
import { VideoTools } from './components/VideoTools'
import { Solutions } from './components/Solutions'
import { BusinessSectors } from './components/BusinessSectors'
import { FeaturesRow } from './components/FeaturesRow'
import { SecuritySection } from './components/SecuritySection'
import { AudienceShowcaseSection } from './components/AudienceShowcaseSection'
import { ScrollRevealSection } from './components/ScrollRevealSection'
import { CTASection } from './components/CTASection'

export default function HomePage() {
  return (
    <div className="w-full bg-black text-[#faf9f5] overflow-x-clip">
      <div className="max-w-[1920px] mx-auto relative">
        {/* 1. Hero Section: "Your Streaming Empire. From Our Source." */}
        <Hero />

        {/* 2. Platform Section: "End-to-end video delivery & monetization platform" */}
        <PlatformSection />

        {/* 3. Video Tools: "Power up your business with video tools" */}
        <VideoTools />

        {/* 4. Solutions: "Our solutions" Slider */}
        <Solutions />

        {/* 5. Streaming Solutions for Every Business Sector */}
        <BusinessSectors />

        {/* 6. 4-Column Feature Row */}
        <FeaturesRow />

        {/* 6. Security: "Stream confidently with enterprise-grade protection." */}
        <SecuritySection />

        {/* 7. Audience Showcase Carousel (PremierCS-style) */}
        <AudienceShowcaseSection />

        {/* 8. Scroll-Driven 3D Broadcast Media Reveal */}
        <ScrollRevealSection />

        {/* 8. Engagement CTA: "Ready, set, engage" */}
        <CTASection />
      </div>
    </div>
  )
}
