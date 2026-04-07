import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — using designer green #26a65c */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#26a65c"/>
            <circle cx="16" cy="16" r="9" fill="none" stroke="white" strokeWidth="2"/>
            <path d="M10 16 Q16 9 22 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <circle cx="16" cy="16" r="2.5" fill="white"/>
          </svg>
          <span className="text-white font-bold text-xl tracking-tight" style={{fontFamily: "var(--font-poppins)"}}>NextSport</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Features</Link>
          <Link href="/pricing" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Pricing</Link>
          <Link href="/download" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Download</Link>
        </div>

        {/* CTA — brand green */}
        <Link
          href="/download"
          className="bg-[#26a65c] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#1e8f4e] transition-colors"
        >
          Get the App
        </Link>
      </div>
    </nav>
  );
}
