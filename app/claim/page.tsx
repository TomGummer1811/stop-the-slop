"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ClientOnly } from "@/components/ClientOnly";
import { Stepper } from "@/components/claim/Stepper";
import { Step1ContentType } from "@/components/claim/steps/Step1ContentType";
import { Step2ExposureDate } from "@/components/claim/steps/Step2ExposureDate";
import { Step3Disclosure } from "@/components/claim/steps/Step3Disclosure";
import { Step4Company } from "@/components/claim/steps/Step4Company";
import { Step5DocumentType } from "@/components/claim/steps/Step5DocumentType";
import { QualificationCheck } from "@/components/claim/QualificationCheck";
import { useClaimForm } from "@/hooks/useClaimForm";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ClaimPage() {
  const { claim, step, isQualified, updateClaim, nextStep, prevStep, qualify } =
    useClaimForm();

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

  if (!isQualified) {
    return (
      <>
        <Header />

        <main className="flex-1 bg-gradient-to-br from-white via-teal-50 to-mist-100">
          <Container className="py-12 max-w-2xl">
            <QualificationCheck onQualify={qualify} />
          </Container>
        </main>

        <Footer />
      </>
    );
  }

  // Validation
  const validateStep = (): boolean => {
    switch (step) {
      case 1:
        return !!claim.contentType;
      case 2:
        return !!claim.exposureDate;
      case 3:
        return !!claim.hadDisclosure;
      case 4:
        return !!claim.companyName && !!claim.incidentDescription;
      case 5:
        return !!claim.documentType;
      default:
        return true;
    }
  };

  const errors: { [key: string]: string } = {};

  if (step === 4) {
    if (!claim.companyName) errors.companyName = "Company name is required";
    if (!claim.incidentDescription)
      errors.incidentDescription = "Please describe the incident";
  }

  const handleNext = () => {
    if (validateStep()) {
      if (step < 5) {
        nextStep();
      } else {
        // Last step - go to review
        window.location.href = "/review";
      }
    }
  };

  return (
    <ClientOnly>
      <Header />

      <main className="flex-1 bg-gradient-to-br from-white via-teal-50 to-mist-100">
        <Container className="py-12 max-w-2xl">
          <Stepper currentStep={step} totalSteps={5} />

          {/* Step 1 */}
          {step === 1 && (
            <Step1ContentType
              value={claim.contentType}
              onChange={(value) => updateClaim({ contentType: value })}
            />
          )}

          {/* Step 2 */}
          {step === 2 && (
            <Step2ExposureDate
              value={claim.exposureDate}
              onChange={(value) => updateClaim({ exposureDate: value })}
            />
          )}

          {/* Step 3 */}
          {step === 3 && (
            <Step3Disclosure
              hadDisclosure={claim.hadDisclosure}
              details={claim.disclosureDetails || ""}
              onDisclosureChange={(value) =>
                updateClaim({ hadDisclosure: value })
              }
              onDetailsChange={(value) =>
                updateClaim({ disclosureDetails: value })
              }
            />
          )}

          {/* Step 4 */}
          {step === 4 && (
            <Step4Company
              companyName={claim.companyName}
              companyWebsite={claim.companyWebsite}
              companyCountry={claim.companyCountry}
              incidentDescription={claim.incidentDescription}
              errors={errors}
              onChange={(field, value) => {
                updateClaim({ [field]: value } as any);
              }}
            />
          )}

          {/* Step 5 */}
          {step === 5 && (
            <Step5DocumentType
              value={claim.documentType}
              onChange={(value) => updateClaim({ documentType: value })}
            />
          )}

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="flex gap-4 mt-12 pt-8 border-t border-slate-200"
          >
            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-3 rounded-lg border-2 border-slate-200 text-slate-900 font-semibold hover:border-slate-300 transition-colors"
              >
                Back
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={!validateStep()}
              className={`ml-auto px-8 py-3 rounded-lg font-semibold transition-all ${
                validateStep()
                  ? "bg-teal-600 text-white hover:bg-teal-700 cursor-pointer"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              {step === 5 ? "Review Claim" : "Continue"}
            </button>
          </motion.div>

          {/* Save indicator */}
          <p className="text-center text-xs text-slate-500 mt-6">
            Your answers are automatically saved
          </p>
        </Container>
      </main>

      <Footer />
    </ClientOnly>
  );
}
