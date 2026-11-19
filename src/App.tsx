import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { BentoGrid } from '@/components/BentoGrid'
import { Benefits } from '@/components/Benefits'
import { Industries } from '@/components/Industries'
import { IPTVSection } from '@/components/IPTVSection'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { CTABanner } from '@/components/CTABanner'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#181D27] flex flex-col font-sans selection:bg-[#7A5AF8] selection:text-white">
      {/* 1. BrightHub Sticky Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section with Streaming Operations Dashboard & Floating Badges */}
        <Hero />

        {/* 3. Partner & Platform Logo Marquee */}
        <Marquee />

        {/* 4. Core OTT Capabilities & Infrastructure (Asymmetrical Bento Grid) */}
        <BentoGrid />

        {/* 5. Why Content Owners Choose OTTFast (6-Card Feature Grid) */}
        <Benefits />

        {/* 6. Vertical Industry Solutions Showcase (Broadcasters, EdTech, Filmmakers, etc.) */}
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
      </main>

      {/* 12. Complete 4-Column Footer */}
      <Footer />
    </div>
  )
}
