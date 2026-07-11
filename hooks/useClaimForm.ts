import { useEffect, useState } from "react";
import { ClaimFormData } from "@/types";
import { loadClaim, saveClaim } from "@/lib/claimStorage";

const QUALIFIED_KEY = "stop_the_slop_qualified";

export function useClaimForm() {
  const [claim, setClaim] = useState<ClaimFormData | null>(null);
  const [step, setStep] = useState(1);
  const [isQualified, setIsQualified] = useState(false);

  useEffect(() => {
    setClaim(loadClaim());
    const qualified = localStorage.getItem(QUALIFIED_KEY) === "true";
    setIsQualified(qualified);
  }, []);

  const updateClaim = (updates: Partial<ClaimFormData>) => {
    setClaim((prev) => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      saveClaim(updated);
      return updated;
    });
  };

  const goToStep = (newStep: number) => {
    if (newStep >= 1 && newStep <= 5) {
      setStep(newStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextStep = () => goToStep(step + 1);
  const prevStep = () => goToStep(step - 1);

  const qualify = () => {
    localStorage.setItem(QUALIFIED_KEY, "true");
    setIsQualified(true);
  };

  return {
    claim,
    step,
    isQualified,
    updateClaim,
    nextStep,
    prevStep,
    goToStep,
    qualify,
  };
}
