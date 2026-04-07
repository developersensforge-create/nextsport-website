import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="13" stroke="#26a65c" strokeWidth="2"/>
              <path d="M7 14 Q14 6 21 14" stroke="#26a65c" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="14" cy="14" r="2.5" fill="#26a65c"/>
            </svg>
            <span className="text-white font-bold text-lg tracking-tight">NextSport</span>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/download" className="hover:text-white transition-colors">Download</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          © 2026 NextSport. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
