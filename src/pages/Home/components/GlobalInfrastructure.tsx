import WorldMap from '@/components/ui/world-map'
import { motion } from 'motion/react'

export function GlobalInfrastructure() {
  const dots = [
    {
      start: {
        lat: 64.2008,
        lng: -149.4937,
      }, // Alaska (Fairbanks)
      end: {
        lat: 34.0522,
        lng: -118.2437,
      }, // Los Angeles
    },
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    },
    {
      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-[#090D14] w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-bold text-2xl sm:text-4xl text-white font-heading tracking-tight">
          Global{' '}
          <span className="text-[#94A3B8]">
            {'Connectivity'.split('').map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </p>

        <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto py-4 leading-relaxed">
          Break free from traditional boundaries. Broadcast live and on-demand video worldwide with broadcast-grade, ultra-low latency edge distribution.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <WorldMap dots={dots} lineColor="#0ea5e9" />
      </div>
    </section>
  )
}
