import Link from "next/link"

export function SponsorBanner() {
  return (
    <Link
      href="https://try.elevenlabs.io/o0mqtv28bx1n"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 p-6 backdrop-blur-xl transition-all hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-3">
        <span className="text-sm font-medium text-muted-foreground/80">
          Sponsored by
        </span>
        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
          The most realistic voice AI platform
        </span>
        <svg
          className="h-5 w-5 text-muted-foreground/60 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </Link>
  )
}
