"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ClientOnly } from "@/components/ClientOnly";
import { useIntl } from "@/components/providers/IntlProvider";
import { loadClaim } from "@/lib/claimStorage";
import { ClaimFormData } from "@/types";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const { t } = useIntl();
  const router = useRouter();
  const [claim, setClaim] = useState<ClaimFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const claimData = loadClaim();
    if (!claimData) {
      router.push("/claim");
      return;
    }
    setClaim(claimData);
  }, [router]);

  const handleDownloadDocument = async () => {
    if (!claim) return;

    setLoading(true);
    try {
      const response = await fetch("/api/generate-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          claim,
          documentType: claim.documentType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate document");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `document-${Date.now()}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setDownloaded(true);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download document. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!claim) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <ClientOnly>
      <Header />

      <main className="flex-1 bg-gradient-to-br from-white via-teal-50 to-mist-100">
        <Container className="py-12 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                className="w-8 h-8 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            <h1 className="mb-4">Payment Successful!</h1>
            <p className="text-slate-600 mb-12">
              Your legal document is ready to download. You can now access your
              professional complaint letter.
            </p>

            {/* Document Info */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8">
              <div className="mb-6 pb-6 border-b border-slate-200">
                <p className="text-sm text-slate-600 mb-2">Your Document</p>
                <h3 className="text-xl font-semibold text-teal-600">
                  {claim.documentType === "complaint"
                    ? "Complaint Letter"
                    : claim.documentType === "regulatory"
                    ? "Regulatory Complaint"
                    : "Letter Before Action"}
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-slate-600">Company</p>
                  <p className="font-medium text-slate-900">
                    {claim.companyName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Content Type</p>
                  <p className="font-medium text-slate-900 capitalize">
                    {claim.contentType}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Exposure Date</p>
                  <p className="font-medium text-slate-900">
                    {new Date(claim.exposureDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadDocument}
                disabled={loading}
                className="w-full px-8 py-4 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                {loading ? "Generating PDF..." : "Download Document"}
              </motion.button>

              {downloaded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-teal-600 font-medium"
                >
                  ✓ Document downloaded successfully!
                </motion.p>
              )}
            </div>

            {/* Next Steps */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">Next Steps</h3>
              <ol className="text-left space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <span>Review your generated document</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <span>
                    Send it to the company via registered mail or email
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <span>
                    For regulatory complaints, file with your national authority
                  </span>
                </li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  localStorage.removeItem("stop_the_slop_claim");
                  router.push("/");
                }}
                className="px-8 py-3 rounded-lg bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition-colors"
              >
                Start New Claim
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/")}
                className="px-8 py-3 rounded-lg border-2 border-slate-200 text-slate-900 font-semibold hover:border-slate-300 transition-colors"
              >
                Back Home
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </ClientOnly>
  );
}
