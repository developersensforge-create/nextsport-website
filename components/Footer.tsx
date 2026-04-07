import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a4d2e] text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="NextSport" width={44} height={44} className="h-10 w-auto" />
            <span className="text-white font-bold text-lg">NextSport</span>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
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
