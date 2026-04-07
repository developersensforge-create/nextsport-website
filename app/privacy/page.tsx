import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — NextSport",
  description: "NextSport privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold text-[#0A1628] mb-4">Privacy Policy</h1>
          <p className="text-[#1E293B]/50 text-sm mb-12">Last updated: April 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-[#1E293B]/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">1. Information We Collect</h2>
              <p>We collect information you provide when creating an account (email address, name), video content you submit for analysis, usage data, and device information to improve the service.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">2. How We Use Your Information</h2>
              <p>We use your information to provide AI swing analysis, generate drill recommendations, track progress, process payments, and improve NextSport. We do not sell your personal data to third parties.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">3. Video Data</h2>
              <p>Videos submitted for analysis are processed by our AI pipeline and stored securely. Videos are used only for the purpose of providing analysis to you. You may delete your video history at any time from within the app.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">4. Children&apos;s Privacy</h2>
              <p>NextSport is used by parents on behalf of their children. We do not knowingly collect personal information directly from children under 13. Parent or guardian consent is required for any account creation.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">5. Contact</h2>
              <p>Questions about this policy? Contact us at privacy@nextsport.ai</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
