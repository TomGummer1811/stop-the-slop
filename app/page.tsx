"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { ClientOnly } from "@/components/ClientOnly";
import { useIntl } from "@/components/providers/IntlProvider";
import {
  AIContentIllustration,
  DisclosureIllustration,
  ActionIllustration,
  TrustIllustration,
} from "@/components/ui/Illustrations";

export default function Home() {
  const { t } = useIntl();

  return (
    <ClientOnly>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Section className="bg-gradient-to-br from-white via-teal-50 to-mist-100">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
                {t("hero.title") === "hero.title" ? "Undisclosed AI Content" : ""}
              </span>
            </div>

            <h1 className="mb-6">
              {t("hero.title")}<br />
              <span className="text-teal-600">{t("hero.highlight")}</span> {t("hero.subtitle")}
            </h1>

            <p className="text-lg text-slate-700 mb-8 max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>

            <Link
              href="/claim"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              {t("hero.cta")}
              <span className="text-lg">→</span>
            </Link>

            <p className="text-sm text-slate-600 mt-6">
              {t("hero.note")}
            </p>
          </div>
        </Section>

        {/* What is AI Slop */}
        <Section id="what-is-ai-slop" className="bg-gradient-to-br from-white to-mist-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">{t("wizard.step1Title", "What is AI Slop?")}</h2>
              <p className="mb-4">
                {/* Fallback for missing translation */}
                AI Slop is AI-generated content that's published without
                clear disclosure that it was created by AI. It undermines
                trust, spreads misinformation, and violates consumer rights.
              </p>
              <p>
                When companies use AI to create content—images, articles,
                videos, ads—they have a legal obligation to disclose this
                to consumers. Many don't.
              </p>
            </div>
            <div className="h-64">
              <AIContentIllustration />
            </div>
          </div>
        </Section>

        {/* Why Disclosure Matters */}
        <Section id="why-disclosure-matters" className="bg-gradient-to-br from-teal-50 via-mist-50 to-white">
          <div className="max-w-3xl">
            <h2 className="mb-8">{t("hero.title", "Why disclosure matters")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 border border-teal-100/50">
                <div className="w-16 h-16 mb-4 opacity-80">
                  <TrustIllustration />
                </div>
                <h4 className="mb-3">{t("wizard.complaintLetter", "Trust")}</h4>
                <p>
                  {t("hero.description", "Consumers have the right to know when content is AI-generated so they can make informed decisions.")}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-teal-100/50">
                <div className="w-16 h-16 mb-4 opacity-80">
                  <DisclosureIllustration />
                </div>
                <h4 className="mb-3">{t("wizard.regulatoryComplaint", "Compliance")}</h4>
                <p>
                  {t("hero.description", "Regulators worldwide are enforcing AI disclosure laws. Non-compliance carries serious penalties.")}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-teal-100/50">
                <div className="w-16 h-16 mb-4 opacity-80">
                  <ActionIllustration />
                </div>
                <h4 className="mb-3">{t("wizard.letterBeforeAction", "Accountability")}</h4>
                <p>
                  {t("hero.description", "Companies that violate disclosure rules should face consequences. You can make a difference.")}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* How It Works */}
        <Section id="how-it-works" className="bg-white">
          <div className="max-w-3xl">
            <h2 className="mb-8">{t("hero.title", "How it works")}</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">
                  1
                </div>
                <div>
                  <h4 className="mb-1">{t("wizard.step1Title", "Answer a few questions")}</h4>
                  <p className="text-slate-600">
                    {t("hero.description", "Tell us about the AI content you encountered and the company responsible.")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">
                  2
                </div>
                <div>
                  <h4 className="mb-1">{t("wizard.step5Title", "Choose your action")}</h4>
                  <p className="text-slate-600">
                    {t("hero.description", "Complaint letter, regulatory complaint, or formal legal notice.")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">
                  3
                </div>
                <div>
                  <h4 className="mb-1">{t("hero.cta", "Get your document")}</h4>
                  <p className="text-slate-600">
                    {t("hero.description", "We generate a professional, legally-backed document ready to send.")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">
                  4
                </div>
                <div>
                  <h4 className="mb-1">{t("hero.note", "Take action")}</h4>
                  <p className="text-slate-600">
                    {t("hero.description", "Download and send your document. We show you where to send it.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Pricing */}
        <Section id="pricing" className="bg-gradient-to-br from-teal-50 via-mist-75 to-mist-100">
          <div>
            <h2 className="mb-4 text-center">{t("wizard.step5Title", "Choose your action")}</h2>
            <p className="text-center text-slate-600 mb-12 max-w-xl mx-auto">
              {t("wizard.step5Desc", "No subscriptions. No hidden fees. Choose the action that fits your situation.")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-teal-200 transition-colors">
                <h3 className="mb-2">{t("wizard.complaintLetter", "Complaint Letter")}</h3>
                <p className="text-sm text-slate-600 mb-6">
                  {t("wizard.complaintLetterDesc", "Direct communication to the company")}
                </p>
                <p className="text-3xl font-bold text-teal-600 mb-6">€2</p>
                <Link
                  href="/claim"
                  className="w-full inline-block text-center bg-slate-100 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
                >
                  {t("common.continue", "Choose")}
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-teal-200 transition-colors">
                <h3 className="mb-2">{t("wizard.regulatoryComplaint", "Regulatory Complaint")}</h3>
                <p className="text-sm text-slate-600 mb-6">
                  {t("wizard.regulatoryComplaintDesc", "File with government regulators")}
                </p>
                <p className="text-3xl font-bold text-teal-600 mb-6">€2</p>
                <Link
                  href="/claim"
                  className="w-full inline-block text-center bg-slate-100 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
                >
                  {t("common.continue", "Choose")}
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-teal-300">
                <div className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {t("wizard.letterBeforeActionImpact", "Maximum legal impact")}
                </div>
                <h3 className="mb-2">{t("wizard.letterBeforeAction", "Letter Before Action")}</h3>
                <p className="text-sm text-slate-600 mb-6">
                  {t("wizard.letterBeforeActionDesc", "Formal notice before legal proceedings")}
                </p>
                <p className="text-3xl font-bold text-teal-600 mb-6">€25</p>
                <Link
                  href="/claim"
                  className="w-full inline-block text-center bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  {t("common.continue", "Choose")}
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">{t("hero.title", "Frequently asked questions")}</h2>

            <div className="space-y-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-slate-900">
                    {t("hero.title", "Is this legally binding?")}
                  </h4>
                  <span className="text-teal-600 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-slate-600 mt-4">
                  {t("hero.description", "Our documents are professionally written based on current laws. They carry legal weight and are designed to pressure companies to respond.")}
                </p>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-slate-900">{t("hero.title", "Do I need a lawyer?")}</h4>
                  <span className="text-teal-600 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-slate-600 mt-4">
                  {t("hero.description", "No. Our documents are self-contained and ready to send. We recommend consulting a lawyer only if you pursue legal action.")}
                </p>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-slate-900">
                    {t("hero.title", "Will the company have to pay me?")}
                  </h4>
                  <span className="text-teal-600 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-slate-600 mt-4">
                  {t("hero.description", "Possibly. The outcome depends on the severity of the violation and local laws. Our documents maximize your chances.")}
                </p>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-slate-900">
                    {t("hero.title", "How long does the process take?")}
                  </h4>
                  <span className="text-teal-600 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-slate-600 mt-4">
                  {t("hero.description", "You can complete the questionnaire and download your document in under 5 minutes. After that, response times depend on the company.")}
                </p>
              </details>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </ClientOnly>
  );
}
