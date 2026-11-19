import { Link } from 'react-router-dom'
import { ArrowLeft, Home, Play } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F3FF] border border-[#EBE7FB] text-[#7A5AF8] text-xs font-semibold mb-6">
        <Play className="w-3.5 h-3.5" />
        <span>Error 404 • Page Not Found</span>
      </div>

      <h1 className="text-6xl sm:text-8xl font-black text-[#181D27] font-heading tracking-tight mb-4">
        404
      </h1>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#181D27] font-heading mb-4">
        Looking for a Live Stream?
      </h2>

      <p className="text-base text-[#535862] max-w-md mx-auto mb-8 leading-relaxed">
        The page or channel you are looking for does not exist or has been moved to another frequency.
      </p>

      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#7A5AF8] hover:bg-[#6941C6] text-white text-sm font-semibold h-11 px-6 rounded-full shadow-md shadow-[#7A5AF8]/30 transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 bg-white hover:bg-[#F8F9FC] text-[#181D27] border border-[#E9EAEB] text-sm font-semibold h-11 px-6 rounded-full shadow-xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  )
}
