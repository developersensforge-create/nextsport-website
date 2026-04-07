import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="13" stroke="#00E676" strokeWidth="2"/>
            <path d="M7 14 Q14 6 21 14" stroke="#00E676" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <circle cx="14" cy="14" r="2.5" fill="#00E676"/>
          </svg>
          <span className="text-white font-bold text-xl tracking-tight">NextSport</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Features</Link>
          <Link href="/pricing" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Pricing</Link>
          <Link href="/download" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Download</Link>
        </div>

        {/* CTA */}
        <Link
          href="/download"
          className="bg-[#00E676] text-[#0A1628] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#00ff88] transition-colors"
        >
          Get the App
        </Link>
      </div>
    </nav>
  );
}
