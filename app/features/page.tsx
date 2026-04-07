import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — NextSport AI Baseball & Softball Swing Analyzer",
  description: "Explore NextSport's AI-powered features: swing analysis, personalized drills, progress tracking, and more. Built for youth baseball and softball players and their parents.",
};

const features = [
  {
    icon: "🤖",
    title: "AI Swing Analysis",
    tagline: "Professional-grade feedback, instant delivery",
    desc: "Our AI — powered by GPT-4o vision — analyzes your child's swing mechanics frame by frame. It evaluates hip rotation, bat speed, contact zone, stance, and follow-through. The same AI technology used in professional and enterprise settings, now available to every family.",
    bullets: [
      "Frame-by-frame mechanical breakdown",
      "Hip rotation, bat path, and contact zone analysis",
      "Comparison against ideal swing mechanics",
      "Delivered in seconds, not days",
    ],
  },
  {
    icon: "🏋️",
    title: "Personalized Drill Plans",
    tagline: "No more generic advice",
    desc: "Every analysis generates a custom drill plan built around exactly what your child needs to work on — not a one-size-fits-all program. Drills are age-appropriate, clearly explained, and designed to fit into a normal practice schedule.",
    bullets: [
      "Drills tailored to identified weaknesses",
      "Age-appropriate exercises (ages 6–18)",
      "Clear instructions with reps and sets",
      "Updated with each new analysis",
    ],
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    tagline: "See real improvement over time",
    desc: "Track every submission and watch your child's scores improve over time. Charts show trends in each mechanical category so you always know what's working and what still needs attention.",
    bullets: [
      "Historical analysis timeline",
      "Per-metric trend charts",
      "Side-by-side comparison of old vs new swings",
      "Exportable progress reports",
    ],
  },
  {
    icon: "⚡",
    title: "Instant Feedback",
    tagline: "Analyze during practice, not after",
    desc: "Results come back in seconds. Your child can submit a video, review the feedback, and apply the correction — all in the same practice session. Real-time improvement loops that coaches dream about.",
    bullets: [
      "Analysis results in under 30 seconds",
      "No waiting for a coach to review",
      "Immediate actionable takeaways",
      "Works anywhere with a cell signal",
    ],
  },
  {
    icon: "🔓",
    title: "Free to Start",
    tagline: "No risk, real value from day one",
    desc: "10 free swing analyses every week — no credit card, no trial period, no catch. We want every family to experience the value of AI coaching before committing to a plan.",
    bullets: [
      "10 free analyses per week, forever",
      "Full AI analysis on free tier",
      "Upgrade anytime for more volume",
      "Cancel premium anytime",
    ],
  },
  {
    icon: "📱",
    title: "Mobile First",
    tagline: "Built for parents on the sideline",
    desc: "NextSport is designed for the way parents actually use their phones — quickly, on the go, often one-handed. Record, submit, and review feedback all from the same screen.",
    bullets: [
      "iOS and Android support",
      "Works on any modern smartphone",
      "Optimized for outdoor lighting conditions",
      "Offline draft mode (coming soon)",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Header */}
        <section className="bg-[#1a4d2e] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6">Everything Your Child Needs to Improve</h1>
            <p className="text-white/60 text-xl leading-relaxed">
              NextSport combines AI-powered analysis with real coaching science to give youth baseball and softball players the feedback they deserve.
            </p>
          </div>
        </section>

        {/* Feature Sections */}
        {features.map((feat, i) => (
          <section key={feat.title} className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="text-5xl mb-4">{feat.icon}</div>
                <p className="text-[#26a65c] font-semibold text-sm uppercase tracking-wide mb-2">{feat.tagline}</p>
                <h2 className="text-3xl font-bold text-[#1a4d2e] mb-4">{feat.title}</h2>
                <p className="text-[#1E293B]/60 leading-relaxed mb-6">{feat.desc}</p>
                <ul className="space-y-2">
                  {feat.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3 text-[#1E293B]/70 text-sm">
                      <span className="text-[#26a65c] font-bold">✓</span>{b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Placeholder visual */}
              <div className={`flex justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-[#1a4d2e] to-[#1e5535] border border-[#26a65c]/20 flex flex-col items-center justify-center gap-4 shadow-xl">
                  <div className="text-6xl">{feat.icon}</div>
                  <p className="text-white/40 text-sm text-center px-6">Screenshot placeholder — app preview coming soon</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-[#1a4d2e] py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to See It in Action?</h2>
            <p className="text-white/60 mb-8">Download the app and get your first 10 analyses free. No credit card required.</p>
            <Link href="/download" className="inline-block bg-[#f0cc3c] text-[#1a4d2e] font-bold px-10 py-4 rounded-xl hover:bg-[#f5d55a] transition-colors">
              Download the App
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
