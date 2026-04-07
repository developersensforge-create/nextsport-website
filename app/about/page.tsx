import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — NextSport",
  description: "NextSport was built by parents who wanted more for their kids. We believe youth sports should be joyful, encouraging, and full of growth — not pressure.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── HERO ── */}
        <section className="bg-[#1a4d2e] py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%"><defs><pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#f0cc3c"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"/></svg>
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#f0cc3c]/10 border border-[#f0cc3c]/30 text-[#f0cc3c] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
              👨‍👩‍👧 Built by Parents, for Parents
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              We Just Want Our Kids<br />
              <span className="text-[#f0cc3c]">to Love the Game.</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
              NextSport started on a Saturday morning at the ballpark. We were watching our kids play,
              wishing we could do more to help — without adding pressure, without replacing the joy.
              So we built it ourselves.
            </p>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#26a65c] font-semibold text-sm uppercase tracking-wide mb-3">Our Story</p>
                <h2 className="text-4xl font-bold text-[#1a4d2e] mb-6">From the Sideline to the App Store</h2>
                <div className="space-y-5 text-[#1a1a1a]/70 leading-relaxed">
                  <p>
                    We&apos;re a team of parents — engineers, coaches, and baseball and softball fans —
                    who share one thing in common: we sit in those folding chairs every weekend cheering
                    our kids on.
                  </p>
                  <p>
                    We watched our kids struggle with their swings and wanted to help. But coaches are
                    stretched thin, private lessons are expensive, and filming a swing and actually
                    knowing what to do with it? That gap felt huge.
                  </p>
                  <p>
                    We believed AI could close that gap — not to replace coaches, but to extend their
                    reach. To give every kid, on every team, in every rec league and travel squad,
                    access to the kind of feedback that actually makes a difference.
                  </p>
                  <p>
                    That&apos;s NextSport. Built by parents who know what it feels like to want more for
                    your child — and who wanted to give it to them without turning practice into pressure.
                  </p>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-[#f0cc3c]/10 rounded-3xl p-10 text-center">
                  <div className="text-8xl mb-6">⚾</div>
                  <blockquote className="text-[#1a4d2e] text-xl font-semibold leading-relaxed italic">
                    &ldquo;We don&apos;t want our kids to feel like they&apos;re being evaluated.
                    We want them to feel like they&apos;re growing.&rdquo;
                  </blockquote>
                  <p className="text-[#1a1a1a]/50 text-sm mt-4">— A NextSport parent & co-founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="bg-[#F8FAFC] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1a4d2e] mb-4">What We Believe</h2>
              <p className="text-[#1a1a1a]/60 text-lg max-w-2xl mx-auto">
                These aren&apos;t company values from a whiteboard session. They&apos;re what we actually
                talk about at the dinner table after a game.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌱",
                  title: "Growth Over Perfection",
                  desc: "Every child develops at their own pace. NextSport celebrates improvement — a 5-point gain in hip rotation is worth cheering, no matter where you started.",
                },
                {
                  icon: "😊",
                  title: "Joy First, Always",
                  desc: "If your kid stops loving the game, nothing else matters. We build tools that support their journey without turning it into a grind. Fun is the foundation.",
                },
                {
                  icon: "🤝",
                  title: "Parents as Partners",
                  desc: "Coaches lead the field. Parents lead the heart. NextSport gives parents a way to be genuinely helpful — not just cheerleaders from the sideline.",
                },
                {
                  icon: "⚖️",
                  title: "Fair Access for Every Family",
                  desc: "Pro-level feedback shouldn't cost $150/hr. Every kid deserves great coaching, regardless of budget. That's why we built a generous free tier — and kept it permanent.",
                },
                {
                  icon: "🧠",
                  title: "AI as a Tool, Not a Replacement",
                  desc: "We love coaches. NextSport is a tool that makes their job easier and extends their reach — not something that replaces the human relationship at the heart of youth sports.",
                },
                {
                  icon: "🏅",
                  title: "The Long Game",
                  desc: "We measure success by whether kids keep playing. Not just this season — but next year, and the year after. Building love for the sport is our real mission.",
                },
              ].map(val => (
                <div key={val.title} className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{val.icon}</div>
                  <h3 className="font-bold text-[#1a4d2e] text-lg mb-3">{val.title}</h3>
                  <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HARMONY SECTION ── */}
        <section className="bg-[#1a4d2e] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%"><defs><pattern id="dots2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#f0cc3c"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots2)"/></svg>
          </div>
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Sports Should Be<br /><span className="text-[#f0cc3c]">Harmony, Not Pressure.</span>
              </h2>
              <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
                We&apos;ve all seen it — kids burning out, dreading practice, losing the spark that made
                them fall in love with the sport in the first place. We refuse to build something
                that adds to that pressure. NextSport is built to do the opposite.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  before: "😓 \"Why didn't you do better?\"",
                  after: "✅ \"Look how much your hip rotation improved!\"",
                  label: "From Criticism to Progress",
                },
                {
                  before: "😓 \"We need to find a private coach.\"",
                  after: "✅ \"Let's check what the AI suggests this week.\"",
                  label: "From Expensive to Accessible",
                },
                {
                  before: "😓 \"Practice every day or you'll fall behind.\"",
                  after: "✅ \"Three focused drills this week. That's it.\"",
                  label: "From Grind to Focused Growth",
                },
              ].map(item => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                  <p className="text-white/40 text-sm mb-3 line-through">{item.before}</p>
                  <p className="text-[#f0cc3c] font-semibold text-sm mb-4">{item.after}</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section className="bg-white py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#1a4d2e] mb-6">Who We Are</h2>
            <p className="text-[#1a1a1a]/60 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              We&apos;re a small team based in Pittsburgh, PA — engineers, product designers, and
              baseball parents. Some of us coach Little League. All of us have been that parent
              standing behind the chain-link fence, hoping our kid has a great day at the plate.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: "⚾", stat: "100%", label: "Parent-founded" },
                { icon: "🏙️", stat: "Pittsburgh", label: "Headquartered" },
                { icon: "🥎", stat: "2", label: "Sports supported" },
                { icon: "🌱", stat: "Ages 6–18", label: "Youth focus" },
              ].map(item => (
                <div key={item.label} className="bg-[#F8FAFC] rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-xl font-bold text-[#1a4d2e]">{item.stat}</div>
                  <div className="text-[#1a1a1a]/50 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#f0cc3c] py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <Image src="/logo.png" alt="NextSport" width={64} height={64} className="mx-auto mb-6 h-16 w-auto" />
            <h2 className="text-3xl font-bold text-[#1a4d2e] mb-4">Join Us on the Journey</h2>
            <p className="text-[#1a4d2e]/70 mb-8">
              Help your child grow, improve, and most importantly — keep loving the game.
            </p>
            <Link
              href="/download"
              className="inline-block bg-[#1a4d2e] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#1e5535] transition-colors"
            >
              Download Free — Start Today
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
