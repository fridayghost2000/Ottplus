import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#181D27] flex flex-col font-sans selection:bg-[#7A5AF8] selection:text-white">
      {/* 1. BrightHub-styled Sticky Header with OTTFast branding & Navigation */}
      <Header />

      {/* 2. BrightHub-styled Hero Section with OTTFast Content & Streaming Mockup */}
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  )
}
