"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { loadClaim } from "@/lib/claimStorage";
import { ClaimFormData } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReviewPage() {
  const [claim, setClaim] = useState<ClaimFormData | null>(null);

  useEffect(() => {
    setClaim(loadClaim());
  }, []);

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
    complaint: "Complaint Letter",
    regulatory: "Regulatory Complaint",
    "letter-before-action": "Letter Before Action",
  };

  return (
    <>
      <Header />

      <main className="flex-1 bg-gradient-to-br from-white via-teal-50 to-mist-100">
        <Container className="py-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="mb-4">Review your claim</h1>
            <p className="text-slate-600 mb-12">
              Here's what we'll use to generate your document. You can go back
              to edit anything.
            </p>

            {/* Document Preview */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8">
              <div className="mb-8 pb-8 border-b border-slate-200">
                <p className="text-sm text-slate-600 mb-2">Document Type</p>
                <h3 className="text-teal-600 font-semibold">
                  {
                    documentLabels[
                      claim.documentType as keyof typeof documentLabels
                    ]
                  }
                </h3>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-sm text-slate-600 mb-2">Content Type</p>
                  <p className="text-slate-900 font-medium capitalize">
                    {claim.contentType}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-600 mb-2">Exposure Date</p>
                  <p className="text-slate-900 font-medium">
                    {new Date(claim.exposureDate).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-600 mb-2">
                    Was AI Use Disclosed?
                  </p>
                  <p className="text-slate-900 font-medium capitalize">
                    {claim.hadDisclosure}
                  </p>
                  {claim.disclosureDetails && (
                    <p className="text-slate-700 mt-2 italic">
                      "{claim.disclosureDetails}"
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-sm text-slate-600 mb-2">Company Name</p>
                  <p className="text-slate-900 font-medium">
                    {claim.companyName}
                  </p>
                </div>

                {claim.companyWebsite && (
                  <div>
                    <p className="text-sm text-slate-600 mb-2">Website</p>
                    <p className="text-slate-900 font-medium">
                      {claim.companyWebsite}
                    </p>
                  </div>
                )}

                {claim.companyCountry && (
                  <div>
                    <p className="text-sm text-slate-600 mb-2">Country</p>
                    <p className="text-slate-900 font-medium">
                      {claim.companyCountry}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-sm text-slate-600 mb-2">
                    Incident Description
                  </p>
                  <p className="text-slate-900 whitespace-pre-wrap">
                    {claim.incidentDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Link
                href="/claim"
                className="px-6 py-3 rounded-lg border-2 border-slate-200 text-slate-900 font-semibold hover:border-slate-300 transition-colors"
              >
                Edit Claim
              </Link>
              <button className="ml-auto px-8 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors cursor-not-allowed opacity-50">
                Proceed to Payment (Coming Soon)
              </button>
            </div>

            <p className="text-center text-sm text-slate-600 mt-8">
              Document generation and payment features coming next phase.
            </p>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
