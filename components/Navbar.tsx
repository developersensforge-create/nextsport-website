import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a4d2e]/97 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Real logo wordmark */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/app-icon-green.png"
            alt="NextSport icon"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <Image
            src="/logo-wordmark.png"
            alt="NextSport"
            width={160}
            height={40}
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</Link>
          <Link href="/pricing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</Link>
          <Link href="/download" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Download</Link>
        </div>

        {/* CTA — brand yellow */}
        <Link
          href="/download"
          className="bg-[#f0cc3c] text-[#1a4d2e] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#f5d55a] transition-colors"
        >
          Get the App
        </Link>
      </div>
    </nav>
  );
}
