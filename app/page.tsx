import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BaseballIcon, BatIcon, DiamondIcon, GloveIcon, StitchDivider, BaseballBgPattern } from "@/components/BaseballElements";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-[#0A1628] min-h-screen flex items-center pt-20 overflow-hidden">
          <BaseballBgPattern />
          {/* Green field glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00E676]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                <BaseballIcon className="w-4 h-4" />
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

              {/* Age badges */}
              <div className="flex gap-3 mb-8">
                {["Ages 8–18", "All Skill Levels", "Any Smartphone"].map(tag => (
                  <span key={tag} className="bg-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full border border-white/10">
                    ⚾ {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4" id="download">
                <a href="#download" className="flex items-center justify-center gap-2 bg-white text-[#0A1628] font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download for iOS
                </a>
                <a href="#download" className="flex items-center justify-center gap-2 bg-[#00E676] text-[#0A1628] font-semibold px-6 py-3.5 rounded-xl hover:bg-[#00ff88] transition-colors text-sm">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.99.14l12.45-7.19-2.78-2.78-10.66 9.83zm-1.15-20.23C1.73 3.85 1.5 4.28 1.5 4.83v14.34c0 .55.23.98.53 1.3l.07.06 8.03-8.03v-.19L2.03 3.53zm17.9 7.74L17.4 9.08l-2.99 2.99 2.99 2.99 2.54-1.19c.72-.42.72-1.11.99-1.6-.27-.47-.27-1.18-.99-1.6zM4.17.36L16.62 7.55 13.84 10.33 3.18.5a1.2 1.2 0 01-.15-.14z"/></svg>
                  Download for Android
                </a>
              </div>
              <p className="text-white/30 text-xs mt-4">📱 App store links coming soon — early access available</p>
            </div>

            {/* Right: phone mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[520px] bg-[#1a2840] rounded-[40px] border-2 border-white/20 shadow-2xl flex flex-col overflow-hidden">
                  <div className="h-10 bg-[#0A1628] flex items-center justify-center">
                    <div className="w-20 h-5 bg-[#1a2840] rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-[#0A1628] via-[#0d2040] to-[#0A1628] flex flex-col items-center justify-center p-5 gap-4">
                    {/* Baseball icon */}
                    <BaseballIcon className="w-16 h-16" />
                    <p className="text-white font-bold text-sm">Swing Analysis</p>

                    {/* Metrics */}
                    <div className="w-full space-y-3">
                      {[
                        { label: "Hip Rotation", val: 78, unit: "%" },
                        { label: "Bat Speed", val: 65, unit: "%" },
                        { label: "Contact Zone", val: 82, unit: "%" },
                        { label: "Follow Through", val: 71, unit: "%" },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between text-xs text-white/60 mb-1">
                            <span>{item.label}</span>
                            <span className="text-[#00E676] font-semibold">{item.val}{item.unit}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-[#00E676] rounded-full" style={{ width: `${item.val}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="w-full bg-[#00E676]/10 border border-[#00E676]/30 rounded-xl p-3 text-xs text-white/80">
                      ⚾ <strong>Coach AI:</strong> Work on hip rotation timing. Try the hip drive drill 3× this week.
                    </div>
                  </div>
                </div>
                {/* Floating baseball decorations */}
                <div className="absolute -top-4 -right-6 opacity-60">
                  <BaseballIcon className="w-12 h-12" />
                </div>
                <div className="absolute -bottom-4 -left-6 opacity-40">
                  <BaseballIcon className="w-8 h-8" />
                </div>
                <div className="absolute inset-0 rounded-[40px] bg-[#00E676]/5 blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BANNER ── */}
        <section className="bg-[#00E676] py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { num: "10+", label: "Swing Metrics Analyzed" },
                { num: "<30s", label: "Analysis Turnaround" },
                { num: "Ages 8–18", label: "Youth Focus" },
                { num: "Free", label: "To Start" },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl font-extrabold text-[#0A1628]">{stat.num}</div>
                  <div className="text-[#0A1628]/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="bg-white py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <DiamondIcon className="w-14 h-14" />
              </div>
              <h2 className="text-4xl font-bold text-[#0A1628] mb-4">Every Young Athlete Deserves Better Feedback</h2>
              <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto">The current system is broken for youth baseball. Here&apos;s why parents are looking for something better.</p>
            </div>

            <StitchDivider />

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: "🕐", title: "Coaches Are Stretched Thin", desc: "With 15+ kids per team, your child gets maybe 2 minutes of feedback per practice. That's not enough to build real skills." },
                { icon: "💸", title: "Private Lessons Are Expensive", desc: "Hitting coaches charge $80–150/hr. Most families can't afford weekly sessions. Your child's development shouldn't depend on your wallet." },
                { icon: "📉", title: "Progress Is Hard to Track", desc: "No data. No benchmarks. Just 'he's doing better' — or isn't. Without measurement, improvement is guesswork." },
              ].map(card => (
                <div key={card.title} className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3">{card.title}</h3>
                  <p className="text-[#1E293B]/60 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="bg-[#F8FAFC] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <BatIcon className="w-14 h-14" />
              </div>
              <h2 className="text-4xl font-bold text-[#0A1628] mb-4">Go From Swing to Feedback in 3 Steps</h2>
              <p className="text-[#1E293B]/60 text-lg">No equipment. No appointments. Just your phone and a few minutes at the diamond.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", icon: "📹", title: "Record the Swing", desc: "Film your child's swing at the plate with any smartphone. Side angle or front — the AI handles both. Works at practice, in the backyard, anywhere." },
                { step: "02", icon: "⬆️", title: "Upload in Seconds", desc: "Submit the video through the NextSport app in seconds. Videos up to 60 seconds, MP4 or MOV. No special gear needed." },
                { step: "03", icon: "📋", title: "Get Your Game Plan", desc: "Receive a full AI mechanics breakdown + personalized drill plan within seconds. Print it, save it, or work through it right there at the field." },
              ].map(item => (
                <div key={item.step} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="text-[#00E676] font-black text-6xl absolute top-4 right-4 opacity-10 select-none">{item.step}</div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3">{item.title}</h3>
                  <p className="text-[#1E293B]/60 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Baseball field diagram callout */}
            <div className="mt-16 bg-[#0A1628] rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
              <DiamondIcon className="w-32 h-32 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Built for the Real Game</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  NextSport understands baseball. Our AI is trained specifically on youth swing mechanics —
                  not generic sports analytics. It knows the difference between Little League and travel ball,
                  and it speaks a language parents and young players actually understand.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Little League", "Travel Ball", "High School", "Rec League", "Backyard Practice"].map(tag => (
                    <span key={tag} className="bg-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full border border-white/10">
                      ⚾ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── METRICS BREAKDOWN ── */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A1628] mb-4">What the AI Actually Analyzes</h2>
              <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto">Every swing gets scored on the mechanics that matter most for youth development.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🔄", metric: "Hip Rotation", desc: "Power generation from the lower half" },
                { icon: "💨", metric: "Bat Speed", desc: "Velocity through the hitting zone" },
                { icon: "🎯", metric: "Contact Zone", desc: "Point of contact relative to the plate" },
                { icon: "👣", metric: "Stance & Load", desc: "Starting position and weight transfer" },
                { icon: "🦾", metric: "Arm Extension", desc: "Full extension through the ball" },
                { icon: "👁️", metric: "Head Position", desc: "Eye level and tracking the pitch" },
                { icon: "🔁", metric: "Follow Through", desc: "Completion of the swing arc" },
                { icon: "⚖️", metric: "Weight Transfer", desc: "Balance shift from back to front foot" },
              ].map(m => (
                <div key={m.metric} className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-5 text-center hover:border-[#00E676]/40 hover:shadow-sm transition-all">
                  <div className="text-2xl mb-2">{m.icon}</div>
                  <div className="font-bold text-[#0A1628] text-sm mb-1">{m.metric}</div>
                  <div className="text-[#1E293B]/50 text-xs leading-tight">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="bg-[#F8FAFC] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <GloveIcon className="w-14 h-14" />
              </div>
              <h2 className="text-4xl font-bold text-[#0A1628] mb-4">Built for Parents. Trusted by Young Athletes.</h2>
              <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto">Everything you need to support your child&apos;s baseball journey.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🤖", title: "AI Swing Analysis", desc: "GPT-4o vision analyzes swing mechanics frame by frame — the same AI used by professionals, now for youth players." },
                { icon: "🏋️", title: "Personalized Drill Plans", desc: "Custom age-appropriate drills targeting exactly what your child needs to improve. Not generic advice — real game plans." },
                { icon: "📈", title: "Progress Tracking", desc: "Track every swing. Watch improvement across sessions. See real data on what's working and what still needs attention." },
                { icon: "🔓", title: "Free to Start", desc: "10 free analyses every week. No credit card needed. Real coaching value from day one." },
                { icon: "⚡", title: "Instant Feedback", desc: "Results in under 30 seconds. Analyze and adjust during the same practice — not days later." },
                { icon: "📱", title: "Works Anywhere", desc: "At the field, in the backyard, at the batting cage. Any iPhone or Android, any time." },
              ].map(feat => (
                <div key={feat.title} className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow border border-slate-100">
                  <div className="text-3xl mb-3">{feat.icon}</div>
                  <h3 className="font-bold text-[#0A1628] mb-2">{feat.title}</h3>
                  <p className="text-[#1E293B]/60 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPORTS BUDDY ── */}
        <section className="bg-[#0A1628] py-24 relative overflow-hidden">
          {/* Faint connecting dots background */}
          <div className="absolute inset-0 pointer-events-none opacity-5" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#00E676"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)"/>
            </svg>
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                🤝 New Feature
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Train Together.<br />
                <span className="text-[#00E676]">Even When You&apos;re Apart.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                NextSport isn&apos;t just for solo practice. Connect with teammates, challenge your best friend,
                and cheer each other on — whether you&apos;re at the field or training at home.
              </p>
            </div>

            {/* 3 buddy features */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: "👀",
                  title: "See Your Buddy's Progress",
                  desc: "Follow a teammate or friend and watch their swing scores improve over time. Cheer them on, spot what they're working on, stay connected through the off-season.",
                },
                {
                  icon: "🏆",
                  title: "Friendly Challenges",
                  desc: "Challenge a friend to beat your hip rotation score or bat speed this week. Healthy competition makes practice more fun — and more consistent.",
                },
                {
                  icon: "📨",
                  title: "Refer & Train Together",
                  desc: "Invite a teammate and you both get bonus analysis tokens. The more friends you bring, the more you can both train. Your whole team levels up together.",
                },
              ].map(item => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00E676]/40 hover:bg-white/8 transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Visual: buddy comparison mockup */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Your Team Leaderboard</h3>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed">
                    See where you stack up against your teammates this week.
                    Everyone trains harder when the whole team can see the scoreboard.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    {[
                      "Compare swing scores with teammates",
                      "Weekly most-improved badge",
                      "Group drill challenges",
                      "Invite up to 10 friends for free",
                    ].map(f => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="text-[#00E676]">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fake leaderboard UI */}
                <div className="bg-[#0d1e38] rounded-2xl border border-white/10 overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#00E676]/10 border-b border-white/10 px-5 py-3 flex items-center justify-between">
                    <span className="text-white font-semibold text-sm">🏆 This Week&apos;s Leaderboard</span>
                    <span className="text-white/40 text-xs">7 players</span>
                  </div>
                  {/* Rows */}
                  {[
                    { rank: "1", name: "Jake M.", score: 87, badge: "🔥", you: false },
                    { rank: "2", name: "You", score: 82, badge: "⬆️", you: true },
                    { rank: "3", name: "Tyler R.", score: 79, badge: "", you: false },
                    { rank: "4", name: "Carlos D.", score: 74, badge: "", you: false },
                    { rank: "5", name: "Owen S.", score: 71, badge: "", you: false },
                  ].map(row => (
                    <div
                      key={row.name}
                      className={`flex items-center gap-4 px-5 py-3.5 border-b border-white/5 ${row.you ? "bg-[#00E676]/10 border-l-2 border-l-[#00E676]" : ""}`}
                    >
                      <span className="text-white/40 text-sm w-4">{row.rank}</span>
                      <div className="flex-1">
                        <span className={`text-sm font-semibold ${row.you ? "text-[#00E676]" : "text-white"}`}>
                          {row.name} {row.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#00E676] rounded-full" style={{ width: `${row.score}%` }}></div>
                        </div>
                        <span className={`text-xs font-bold w-8 text-right ${row.you ? "text-[#00E676]" : "text-white/60"}`}>{row.score}</span>
                      </div>
                    </div>
                  ))}
                  <div className="px-5 py-3 text-center">
                    <span className="text-white/30 text-xs">+ 2 more teammates · Invite friends to join</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Referral callout */}
            <div className="mt-8 bg-[#00E676]/10 border border-[#00E676]/30 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div>
                <p className="text-white font-bold mb-1">⚾ Refer a Teammate — Both Get Bonus Tokens</p>
                <p className="text-white/60 text-sm">Invite a friend and you both get +30 free analyses added to your weekly allowance. No limits on referrals.</p>
              </div>
              <Link
                href="/download"
                className="flex-shrink-0 bg-[#00E676] text-[#0A1628] font-bold px-6 py-3 rounded-xl hover:bg-[#00ff88] transition-colors text-sm whitespace-nowrap"
              >
                Invite a Friend ⚾
              </Link>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="bg-[#0A1628] py-24 relative overflow-hidden">
          <BaseballBgPattern />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-white/60 text-lg">Less than one private lesson a month — for unlimited AI coaching.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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

              <div className="bg-[#00E676]/10 border-2 border-[#00E676] rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00E676] text-[#0A1628] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  ⭐ MOST POPULAR
                </div>
                <p className="text-[#00E676] font-semibold mb-2">Premium</p>
                <div className="text-5xl font-extrabold text-white mb-1">$14.99</div>
                <p className="text-white/40 text-sm mb-1">/month</p>
                <p className="text-white/30 text-xs mb-8">vs. $80–150 for a single private lesson</p>
                <ul className="space-y-3 mb-8">
                  {["200 swing analyses / week", "Full drill library", "Unlimited history", "Priority processing", "Progress analytics", "Early feature access"].map(f => (
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

        {/* ── DOWNLOAD CTA ── */}
        <section className="bg-[#00E676] py-24 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none" aria-hidden="true">
            <DiamondIcon className="w-[500px] h-[500px]" />
          </div>
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <BaseballIcon className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1628] mb-4">
              Your Child&apos;s Best Season Starts Now
            </h2>
            <p className="text-[#0A1628]/70 text-lg mb-10 max-w-2xl mx-auto">
              Join families using AI coaching to help their young athletes level up at bat.
              Free to download. Free to start. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="flex items-center justify-center gap-3 bg-[#0A1628] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#0d1f36] transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a href="#" className="flex items-center justify-center gap-3 bg-[#0A1628] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#0d1f36] transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.99.14l12.45-7.19-2.78-2.78-10.66 9.83zm-1.15-20.23C1.73 3.85 1.5 4.28 1.5 4.83v14.34c0 .55.23.98.53 1.3l.07.06 8.03-8.03v-.19L2.03 3.53zm17.9 7.74L17.4 9.08l-2.99 2.99 2.99 2.99 2.54-1.19c.72-.42.72-1.11.99-1.6-.27-.47-.27-1.18-.99-1.6zM4.17.36L16.62 7.55 13.84 10.33 3.18.5a1.2 1.2 0 01-.15-.14z"/></svg>
                Google Play
              </a>
            </div>
            <p className="text-[#0A1628]/40 text-sm mt-6">⚾ App store links coming soon</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
