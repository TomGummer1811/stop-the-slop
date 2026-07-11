"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ClientOnly } from "@/components/ClientOnly";
import { useIntl } from "@/components/providers/IntlProvider";
import { loadClaim } from "@/lib/claimStorage";
import { ClaimFormData } from "@/types";
import { motion } from "framer-motion";

export default function PaymentPage() {
  const { t } = useIntl();
  const router = useRouter();
  const [claim, setClaim] = useState<ClaimFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const claimData = loadClaim();
    if (!claimData) {
      router.push("/claim");
      return;
    }
    setClaim(claimData);
  }, [router]);

  const handlePayment = async () => {
    if (!claim) return;

    setLoading(true);
    setError("");

    try {
      // Create checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentType: claim.documentType }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        throw new Error("No checkout URL provided");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
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

  const documentLabels = {
    complaint: t("wizard.complaintLetter", "Complaint Letter"),
    regulatory: t("wizard.regulatoryComplaint", "Regulatory Complaint"),
    "letter-before-action": t("wizard.letterBeforeAction", "Letter Before Action"),
  };

  const prices = {
    complaint: "€2.00",
    regulatory: "€2.00",
    "letter-before-action": "€25.00",
  };

  return (
    <ClientOnly>
      <Header />

      <main className="flex-1 bg-gradient-to-br from-white via-teal-50 to-mist-100">
        <Container className="py-12 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="mb-2">Complete Your Purchase</h1>
            <p className="text-slate-600 mb-12">
              Finalize your payment to generate and download your legal document.
            </p>

            {/* Order Summary */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8">
              <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-slate-200">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-900">
                      {
                        documentLabels[
                          claim.documentType as keyof typeof documentLabels
                        ]
                      }
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Professional legal document
                    </p>
                  </div>
                  <p className="text-lg font-bold text-teal-600">
                    {prices[claim.documentType as keyof typeof prices]}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-2xl font-bold text-teal-600">
                  {prices[claim.documentType as keyof typeof prices]}
                </p>
              </div>

              {/* Claim Details */}
              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-slate-900 mb-3">
                  Claim Details
                </p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p>
                    <span className="font-medium">Content Type:</span>{" "}
                    {claim.contentType}
                  </p>
                  <p>
                    <span className="font-medium">Company:</span>{" "}
                    {claim.companyName}
                  </p>
                  <p>
                    <span className="font-medium">Disclosure:</span>{" "}
                    {claim.hadDisclosure}
                  </p>
                </div>
              </div>

              {/* Payment Button */}
              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePayment}
                disabled={loading}
                className="w-full px-8 py-4 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Proceed to Payment"}
              </motion.button>

              <p className="text-center text-xs text-slate-600 mt-4">
                Secure payment powered by Stripe. Your data is encrypted and safe.
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={() => router.push("/review")}
              className="px-6 py-3 rounded-lg border-2 border-slate-200 text-slate-900 font-semibold hover:border-slate-300 transition-colors"
            >
              Back to Review
            </button>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </ClientOnly>
  );
}
