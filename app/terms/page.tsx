import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — NextSport",
  description: "NextSport terms of service — the rules for using our platform.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold text-[#0A1628] mb-4">Terms of Service</h1>
          <p className="text-[#1E293B]/50 text-sm mb-12">Last updated: April 2026</p>

          <div className="space-y-8 text-[#1E293B]/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">1. Acceptance of Terms</h2>
              <p>By using NextSport, you agree to these Terms of Service. If you do not agree, please do not use the service.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">2. Use of the Service</h2>
              <p>NextSport is intended for personal, non-commercial use by individuals and families to support youth athletic development. Commercial redistribution of analysis results is not permitted.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">3. Subscription and Billing</h2>
              <p>Premium subscriptions are billed monthly at $14.99/mo. You may cancel at any time. Access continues until the end of the current billing period. No refunds for partial months.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">4. AI Analysis Disclaimer</h2>
              <p>NextSport&apos;s AI analysis is designed to support — not replace — qualified coaching. Results should be used as one input among many in an athlete&apos;s development. We make no guarantees about specific performance outcomes.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">5. Contact</h2>
              <p>Questions? Contact us at support@nextsport.ai</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
