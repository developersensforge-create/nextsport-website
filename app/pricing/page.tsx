import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — NextSport AI Baseball Swing Analyzer",
  description: "NextSport is free to start — 10 swing analyses every week at no cost. Upgrade to Premium at $14.99/mo for 200 analyses, full drill library, and unlimited history.",
};

const freeFeatures = [
  "10 swing analyses per week",
  "Basic drill suggestions",
  "30-day history",
  "Mobile app (iOS & Android)",
  "AI mechanics breakdown",
];

const premiumFeatures = [
  "200 swing analyses per week",
  "Full personalized drill library",
  "Unlimited history",
  "Priority processing (faster results)",
  "Progress trend charts",
  "Side-by-side swing comparison",
  "Early access to new features",
  "Email progress reports",
];

const faqs = [
  {
    q: "Is there a free trial for Premium?",
    a: "The free tier is permanently free — 10 analyses every week, forever. Think of it as a permanent free trial. When you're ready for more, upgrade to Premium for $14.99/mo."
  },
  {
    q: "Can I cancel my Premium subscription anytime?",
    a: "Yes. No contracts, no cancellation fees. Cancel anytime from the app settings and you'll keep Premium access until the end of your billing period."
  },
  {
    q: "What video formats are supported?",
    a: "NextSport accepts MP4 and MOV files, up to 60 seconds in length. Most smartphone cameras record in one of these formats automatically."
  },
  {
    q: "How accurate is the AI analysis?",
    a: "NextSport is powered by GPT-4o, one of the most advanced AI vision models available. While no AI replaces a world-class hitting coach, our analysis is consistently reliable and actionable for youth-level development."
  },
  {
    q: "What age range is NextSport designed for?",
    a: "NextSport is designed for youth baseball players ages 8–18. The drill recommendations and feedback are calibrated to be age-appropriate and easy for parents and young athletes to understand."
  },
  {
    q: "Do I need special equipment to record swings?",
    a: "No. Any modern smartphone works perfectly. We recommend filming from the side (catcher's perspective) for the most detailed analysis, but front-facing recordings are also supported."
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Header */}
        <section className="bg-[#0A1628] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6">Simple, Transparent Pricing</h1>
            <p className="text-white/60 text-xl">Start free. Upgrade when you&apos;re ready. No surprises.</p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="bg-[#F8FAFC] py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

              {/* Free */}
              <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
                <p className="text-[#1E293B]/60 font-semibold mb-3">Free</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-extrabold text-[#0A1628]">$0</span>
                </div>
                <p className="text-[#1E293B]/40 text-sm mb-8">Forever. No credit card needed.</p>
                <ul className="space-y-3 mb-10">
                  {freeFeatures.map(f => (
                    <li key={f} className="flex items-center gap-3 text-[#1E293B]/70 text-sm">
                      <span className="text-[#00E676] font-bold text-base">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/download" className="block text-center border-2 border-[#0A1628] text-[#0A1628] font-semibold py-3.5 rounded-xl hover:bg-[#0A1628] hover:text-white transition-all text-sm">
                  Download Free
                </Link>
              </div>

              {/* Premium */}
              <div className="bg-[#0A1628] rounded-2xl p-10 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00E676] text-[#0A1628] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  ⭐ MOST POPULAR
                </div>
                <p className="text-[#00E676] font-semibold mb-3">Premium</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-extrabold text-white">$14.99</span>
                  <span className="text-white/40 mb-2">/mo</span>
                </div>
                <p className="text-white/40 text-sm mb-8">Cancel anytime. No contracts.</p>
                <ul className="space-y-3 mb-10">
                  {premiumFeatures.map(f => (
                    <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="text-[#00E676] font-bold text-base">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/download" className="block text-center bg-[#00E676] text-[#0A1628] font-bold py-3.5 rounded-xl hover:bg-[#00ff88] transition-colors text-sm">
                  Start Free Trial
                </Link>
              </div>

            </div>

            {/* Feature comparison table */}
            <div className="mt-20 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#0A1628] text-center mb-10">Full Feature Comparison</h2>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F8FAFC]">
                      <th className="text-left px-6 py-4 text-[#1E293B] font-semibold">Feature</th>
                      <th className="px-6 py-4 text-[#1E293B] font-semibold text-center">Free</th>
                      <th className="px-6 py-4 text-[#0A1628] font-bold text-center">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Swing analyses per week", "10", "200"],
                      ["AI mechanics breakdown", "✓", "✓"],
                      ["Basic drill suggestions", "✓", "✓"],
                      ["Full drill library", "—", "✓"],
                      ["History", "30 days", "Unlimited"],
                      ["Progress trend charts", "—", "✓"],
                      ["Side-by-side comparison", "—", "✓"],
                      ["Priority processing", "—", "✓"],
                      ["Email progress reports", "—", "✓"],
                      ["Early feature access", "—", "✓"],
                    ].map(([feature, free, premium]) => (
                      <tr key={feature} className="hover:bg-slate-50">
                        <td className="px-6 py-4 text-[#1E293B]/70 text-sm">{feature}</td>
                        <td className="px-6 py-4 text-center text-sm text-[#1E293B]/60">{free}</td>
                        <td className="px-6 py-4 text-center text-sm font-semibold text-[#00E676]">{premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#0A1628] text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#0A1628] mb-2">{faq.q}</h3>
                  <p className="text-[#1E293B]/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#00E676] py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Start Free Today</h2>
            <p className="text-[#0A1628]/70 mb-8">10 free analyses every week. No credit card. No catch.</p>
            <Link href="/download" className="inline-block bg-[#0A1628] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#0d1f36] transition-colors">
              Download the App
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
