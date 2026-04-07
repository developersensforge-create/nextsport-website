import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Download — NextSport AI Baseball Swing Analyzer",
  description: "Download the NextSport app for iOS and Android. AI-powered baseball swing analysis for youth players. Free to start.",
};

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-[#1a4d2e] min-h-[70vh] flex items-center py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Get NextSport<br /><span className="text-[#26a65c]">Free on Any Device</span>
            </h1>
            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
              Available for iOS and Android. Start with 10 free swing analyses every week — no credit card required.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-white text-[#1a4d2e] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-base"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-[#f0cc3c] text-[#1a4d2e] font-semibold px-8 py-4 rounded-xl hover:bg-[#f5d55a] transition-colors text-base"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.22.99.14l12.45-7.19-2.78-2.78-10.66 9.83zm-1.15-20.23C1.73 3.85 1.5 4.28 1.5 4.83v14.34c0 .55.23.98.53 1.3l.07.06 8.03-8.03v-.19L2.03 3.53zm17.9 7.74L17.4 9.08l-2.99 2.99 2.99 2.99 2.54-1.19c.72-.42.72-1.11.99-1.6-.27-.47-.27-1.18-.99-1.6zM4.17.36L16.62 7.55 13.84 10.33 3.18.5a1.2 1.2 0 01-.15-.14z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
            </div>
            <p className="text-white/30 text-sm">📱 App store links coming soon — check back shortly</p>
          </div>
        </section>

        {/* Device Mockups */}
        <section className="bg-[#F8FAFC] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1a4d2e] text-center mb-16">What You&apos;ll Get</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🤖",
                  title: "AI Swing Analysis",
                  desc: "Upload any swing video and get a full mechanical breakdown in seconds"
                },
                {
                  icon: "🏋️",
                  title: "Drill Plans",
                  desc: "Custom drills generated for each analysis, targeting your child's specific weaknesses"
                },
                {
                  icon: "📈",
                  title: "Progress Dashboard",
                  desc: "Track improvement over time with charts and history for every submission"
                }
              ].map((item, i) => (
                <div key={item.title} className="text-center">
                  <div className="w-48 rounded-[32px] border-2 border-[#26a65c]/20 mx-auto mb-6 overflow-hidden shadow-xl bg-[#1a4d2e]">
                    <Image
                      src={["/screens/swing-analysis.png", "/screens/upload-video.png", "/screens/homepage.png"][i]}
                      alt={item.title}
                      width={384}
                      height={640}
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="font-bold text-[#1a4d2e] mb-2">{item.title}</h3>
                  <p className="text-[#1E293B]/60 text-sm max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QR Placeholder */}
        <section className="bg-white py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-[#1a4d2e] mb-4">Scan to Download</h2>
            <p className="text-[#1E293B]/60 mb-8 text-sm">QR code will be available when the app launches on the App Store and Google Play.</p>
            {/* QR Placeholder */}
            <div className="w-48 h-48 bg-[#F8FAFC] border-2 border-dashed border-slate-300 rounded-2xl mx-auto flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <p className="text-slate-400 text-xs">QR Code<br />Coming Soon</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
