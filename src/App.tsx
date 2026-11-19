import { useState } from 'react'
import {
  Play,
  Tv,
  Film,
  Flame,
  Search,
  Bell,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Plus,
  Star,
  Info
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface MediaItem {
  id: number
  title: string
  category: string
  rating: string
  year: string
  duration: string
  badge?: string
  image: string
}

const FEATURED_ITEMS: MediaItem[] = [
  {
    id: 1,
    title: 'Cyberpulse: Neo Tokyo',
    category: 'Sci-Fi • Thriller',
    rating: '4.9',
    year: '2026',
    duration: '2h 15m',
    badge: 'Trending #1',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Echoes of the Abyss',
    category: 'Mystery • Drama',
    rating: '4.8',
    year: '2025',
    duration: '1h 58m',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Velocita GP: Unleashed',
    category: 'Sports • Action',
    rating: '4.7',
    year: '2026',
    duration: '2h 05m',
    badge: 'Live Event',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Chronicles of Valoria',
    category: 'Fantasy • Adventure',
    rating: '4.9',
    year: '2026',
    duration: 'Season 2',
    badge: 'New Season',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80',
  },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo & Main Nav */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-900/40">
                <Play className="h-5 w-5 fill-white text-white translate-x-0.5" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                OTT<span className="text-rose-500">Fast</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
              <a href="#" className="text-white transition-colors hover:text-white flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-500" /> Discover
              </a>
              <a href="#" className="transition-colors hover:text-white flex items-center gap-1.5">
                <Tv className="w-4 h-4" /> Live TV
              </a>
              <a href="#" className="transition-colors hover:text-white flex items-center gap-1.5">
                <Film className="w-4 h-4" /> Movies
              </a>
              <a href="#" className="transition-colors hover:text-white">Series</a>
            </nav>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block w-56 lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <Input
                placeholder="Search movies, shows..."
                className="pl-9 h-9 bg-neutral-900/90 border-neutral-800 text-sm focus-visible:ring-rose-500 rounded-full"
              />
            </div>

            <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-full">
              <Bell className="h-5 w-5" />
            </Button>

            <Avatar className="h-9 w-9 border border-neutral-700/80 cursor-pointer">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" />
              <AvatarFallback className="bg-rose-600 text-white font-semibold">OF</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-10">
        {/* Setup Banner */}
        <section className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-200 flex items-center gap-2">
                  Project Setup Completed Successfully
                  <Badge variant="outline" className="border-emerald-500/40 text-emerald-300 text-xs py-0">Ready</Badge>
                </h3>
                <p className="text-sm text-neutral-400 mt-0.5">
                  React.js + Tailwind CSS + Shadcn UI + Lucide Icons configured and operational.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-center">
              <Badge variant="secondary" className="bg-neutral-800 text-neutral-300 hover:bg-neutral-800">
                Vite + TypeScript
              </Badge>
              <Badge variant="secondary" className="bg-neutral-800 text-neutral-300 hover:bg-neutral-800">
                Tailwind CSS
              </Badge>
              <Badge variant="secondary" className="bg-neutral-800 text-neutral-300 hover:bg-neutral-800">
                Shadcn UI
              </Badge>
            </div>
          </div>
        </section>

        {/* Hero Spotlight Section */}
        <section className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 min-h-[380px] sm:min-h-[440px] flex items-end">
          {/* Background Image & Overlays */}
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&auto=format&fit=crop&q=80"
            alt="Hero Spotlight"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-75 scale-105 transition-transform duration-700 hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />

          {/* Hero Content */}
          <div className="relative p-6 sm:p-10 max-w-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge className="bg-rose-600 hover:bg-rose-700 text-white font-medium border-0 px-2.5 py-1">
                <Sparkles className="w-3.5 h-3.5 mr-1" /> EXCLUSIVE PREMIERE
              </Badge>
              <Badge variant="outline" className="border-neutral-700 text-neutral-300 backdrop-blur-sm">
                4K Ultra HD
              </Badge>
              <span className="text-xs text-neutral-400 font-medium">IMDb 8.9</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
              Astral Odyssey: Beyond The Horizon
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 line-clamp-3 leading-relaxed">
              When deep space exploration vessels lose contact with Earth, a rogue crew uncovers
              an ancient cosmic signal that threatens to bend reality itself.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white font-semibold gap-2 shadow-lg shadow-rose-900/50">
                <Play className="w-4 h-4 fill-white" /> Watch Now
              </Button>
              <Button size="lg" variant="secondary" className="bg-neutral-800/90 hover:bg-neutral-700 text-white font-medium gap-2 backdrop-blur-sm">
                <Plus className="w-4 h-4" /> Add to List
              </Button>
              <Button size="lg" variant="ghost" className="text-neutral-300 hover:text-white hover:bg-neutral-800/60 gap-1.5">
                <Info className="w-4 h-4" /> Details
              </Button>
            </div>
          </div>
        </section>

        {/* Content Explorer Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Popular & Trending</h2>
              <p className="text-sm text-neutral-400 mt-1">Handpicked entertainment streaming right now</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="bg-neutral-900 border border-neutral-800 p-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-rose-600 data-[state=active]:text-white text-xs sm:text-sm">
                  All
                </TabsTrigger>
                <TabsTrigger value="movies" className="data-[state=active]:bg-rose-600 data-[state=active]:text-white text-xs sm:text-sm">
                  Movies
                </TabsTrigger>
                <TabsTrigger value="series" className="data-[state=active]:bg-rose-600 data-[state=active]:text-white text-xs sm:text-sm">
                  Series
                </TabsTrigger>
                <TabsTrigger value="action" className="data-[state=active]:bg-rose-600 data-[state=active]:text-white text-xs sm:text-sm">
                  Action
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Media Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_ITEMS.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-neutral-900 border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 hover:shadow-xl hover:shadow-rose-950/20 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {item.badge && (
                    <Badge className="absolute top-3 left-3 bg-rose-600/90 backdrop-blur-md text-white text-[11px] font-semibold border-0">
                      {item.badge}
                    </Badge>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-12 w-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg shadow-rose-900/60 scale-75 group-hover:scale-100 transition-transform">
                      <Play className="h-5 w-5 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                      <span>{item.category}</span>
                      <span className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating}
                      </span>
                    </div>
                    <h3 className="font-semibold text-white text-base group-hover:text-rose-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60 text-xs text-neutral-400">
                    <span>{item.year} • {item.duration}</span>
                    <span className="flex items-center gap-0.5 text-rose-400 font-medium group-hover:translate-x-1 transition-transform">
                      Watch <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/80 bg-neutral-950/90 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-300">OTTFast</span>
            <span>• Built with React 19, Tailwind CSS & Shadcn UI</span>
          </div>
          <p>© {new Date().getFullYear()} OTTFast. Ready for custom pages, routes & media players.</p>
        </div>
      </footer>
    </div>
  )
}
