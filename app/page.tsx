import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section className="bg-[#0A1628] min-h-screen flex items-center pt-20">
          <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-block bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                AI-Powered Baseball Training
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Better Swings.<br />
                Faster Growth.<br />
                <span className="text-[#00E676]">Powered by AI.</span>
              </h1>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Upload your child&apos;s swing video and get instant AI coaching feedback.
                Personalized drills. Real progress tracking. Free to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4" id="download">
                <a
                  href="#download"
                  className="flex items-center justify-center gap-2 bg-white text-[#0A1628] font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download for iOS
                </a>
                <a
                  href="#download"
                  className="flex items-center justify-center gap-2 bg-[#00E676] text-[#0A1628] font-semibold px-6 py-3.5 rounded-xl hover:bg-[#00ff88] transition-colors text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.99.14l12.45-7.19-2.78-2.78-10.66 9.83zm-1.15-20.23C1.73 3.85 1.5 4.28 1.5 4.83v14.34c0 .55.23.98.53 1.3l.07.06 8.03-8.03v-.19L2.03 3.53zm17.9 7.74L17.4 9.08l-2.99 2.99 2.99 2.99 2.54-1.19c.72-.42.72-1.11.99-1.6-.27-.47-.27-1.18-.99-1.6zM4.17.36L16.62 7.55 13.84 10.33 3.18.5a1.2 1.2 0 01-.15-.14z"/></svg>
                  Download for Android
                </a>
              </div>
              <p className="text-white/40 text-xs mt-4">📱 App store links coming soon — sign up for early access</p>
            </div>

            {/* Right: Device Mockup Placeholder */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-64 h-[520px] bg-[#1a2840] rounded-[40px] border-2 border-white/20 shadow-2xl flex flex-col overflow-hidden">
                  {/* Status bar */}
                  <div className="h-10 bg-[#0A1628] flex items-center justify-center">
                    <div className="w-20 h-5 bg-[#1a2840] rounded-full"></div>
                  </div>
                  {/* Screen content */}
                  <div className="flex-1 bg-gradient-to-br from-[#0A1628] via-[#0d2040] to-[#0A1628] flex flex-col items-center justify-center p-6 gap-5">
                    <div className="w-20 h-20 rounded-full bg-[#00E676]/20 border-2 border-[#00E676] flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="13" stroke="#00E676" strokeWidth="2"/>
                        <path d="M7 14 Q14 6 21 14" stroke="#00E676" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                        <circle cx="14" cy="14" r="2.5" fill="#00E676"/>
                      </svg>
                    </div>
                    <p className="text-white font-bold text-center text-sm">AI Swing Analysis</p>
                    {/* Fake progress bars */}
                    <div className="w-full space-y-3">
                      {[
                        { label: "Hip Rotation", val: "78%" },
                        { label: "Bat Speed", val: "65%" },
                        { label: "Contact Zone", val: "82%" },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between text-xs text-white/60 mb-1">
                            <span>{item.label}</span><span className="text-[#00E676]">{item.val}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#00E676] rounded-full"
                              style={{ width: item.val }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full bg-[#00E676]/10 border border-[#00E676]/30 rounded-xl p-3 text-xs text-white/80">
                      💡 <strong>AI Tip:</strong> Work on hip rotation timing. Try the hip drive drill 3x this week.
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-[40px] bg-[#00E676]/5 blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A1628] mb-4">Every Young Athlete Deserves Better Feedback</h2>
              <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto">The current system is broken for youth baseball. Here&apos;s why parents are looking for something better.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🕐",
                  title: "Coaches Are Stretched Thin",
                  desc: "With 15+ kids per team, your child gets maybe 2 minutes of feedback per practice. That's not enough to build real skills."
                },
                {
                  icon: "💸",
                  title: "Private Lessons Are Expensive",
                  desc: "Hitting coaches charge $80–150/hr. Most families can't afford weekly sessions. Your child's development shouldn't depend on your wallet."
                },
                {
                  icon: "📉",
                  title: "Progress Is Hard to Track",
                  desc: "No data. No benchmarks. Just 'he's doing better' — or isn't. Without measurement, improvement is guesswork."
                }
              ].map((card) => (
                <div key={card.title} className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3">{card.title}</h3>
                  <p className="text-[#1E293B]/60 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#F8FAFC] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A1628] mb-4">Get Pro-Level Feedback in 3 Simple Steps</h2>
              <p className="text-[#1E293B]/60 text-lg">No equipment. No appointments. Just your phone and a few minutes.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", icon: "📹", title: "Record", desc: "Film your child's swing with any smartphone. Side angle or front — the AI handles both." },
                { step: "02", icon: "⬆️", title: "Upload", desc: "Submit the video in seconds through the NextSport app. Videos up to 60 seconds supported." },
                { step: "03", icon: "📋", title: "Improve", desc: "Get instant AI analysis with a mechanics breakdown + personalized drill plan. Start improving today." }
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className="text-[#00E676] font-black text-5xl mb-2 opacity-20">{item.step}</div>
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3">{item.title}</h3>
                    <p className="text-[#1E293B]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A1628] mb-4">Built for Parents. Trusted by Athletes.</h2>
              <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto">Everything you need to support your child&apos;s development — without the complexity.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🤖", title: "AI Swing Analysis", desc: "GPT-4o vision analyzes swing mechanics frame by frame — the same AI trusted by professionals." },
                { icon: "🏋️", title: "Personalized Drills", desc: "Custom drill plans built around exactly what your child needs to improve, not generic advice." },
                { icon: "📈", title: "Progress Tracking", desc: "Track improvement across every submission. See real data on what's getting better over time." },
                { icon: "🔓", title: "Free to Start", desc: "10 free swing analyses every week. No credit card needed. Real value from day one." },
                { icon: "⚡", title: "Instant Feedback", desc: "Results in seconds, not days. Your child can analyze and adjust during the same practice session." },
                { icon: "📱", title: "Mobile First", desc: "Designed for parents on the go. Works perfectly on any iPhone or Android device." }
              ].map((feat) => (
                <div key={feat.title} className="bg-[#F8FAFC] rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{feat.icon}</div>
                  <h3 className="font-bold text-[#0A1628] mb-2">{feat.title}</h3>
                  <p className="text-[#1E293B]/60 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="bg-[#0A1628] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-white/60 text-lg">Start free. Upgrade when you&apos;re ready.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Free */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-white/60 font-semibold mb-2">Free</p>
                <div className="text-5xl font-extrabold text-white mb-1">$0</div>
                <p className="text-white/40 text-sm mb-8">Forever free</p>
                <ul className="space-y-3 mb-8">
                  {["10 swing analyses / week", "Basic drill suggestions", "30-day history", "Mobile app access"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="text-[#00E676] text-lg">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/download" className="block text-center border border-white/30 text-white font-semibold py-3 rounded-xl hover:border-white/60 transition-colors text-sm">
                  Download Free
                </Link>
              </div>

              {/* Premium */}
              <div className="bg-[#00E676]/10 border-2 border-[#00E676] rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00E676] text-[#0A1628] text-xs font-bold px-4 py-1.5 rounded-full">
                  ⭐ MOST POPULAR
                </div>
                <p className="text-[#00E676] font-semibold mb-2">Premium</p>
                <div className="text-5xl font-extrabold text-white mb-1">$14.99</div>
                <p className="text-white/40 text-sm mb-8">per month</p>
                <ul className="space-y-3 mb-8">
                  {["200 swing analyses / week", "Full drill library", "Unlimited history", "Priority processing", "Progress analytics", "Early access to new features"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="text-[#00E676] text-lg">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/download" className="block text-center bg-[#00E676] text-[#0A1628] font-bold py-3 rounded-xl hover:bg-[#00ff88] transition-colors text-sm">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section className="bg-[#00E676] py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1628] mb-4">
              Start Improving Your Child&apos;s Swing Today
            </h2>
            <p className="text-[#0A1628]/70 text-lg mb-10">Free to download. Free to start. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="flex items-center justify-center gap-2 bg-[#0A1628] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#0d1f36] transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a href="#" className="flex items-center justify-center gap-2 bg-[#0A1628] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#0d1f36] transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.99.14l12.45-7.19-2.78-2.78-10.66 9.83zm-1.15-20.23C1.73 3.85 1.5 4.28 1.5 4.83v14.34c0 .55.23.98.53 1.3l.07.06 8.03-8.03v-.19L2.03 3.53zm17.9 7.74L17.4 9.08l-2.99 2.99 2.99 2.99 2.54-1.19c.72-.42.72-1.11.99-1.6-.27-.47-.27-1.18-.99-1.6zM4.17.36L16.62 7.55 13.84 10.33 3.18.5a1.2 1.2 0 01-.15-.14z"/></svg>
                Google Play
              </a>
            </div>
            <p className="text-[#0A1628]/50 text-sm mt-6">📱 App store links coming soon — join the waitlist below</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
