import { useEffect, useState } from "react";
import { ClaimFormData } from "@/types";
import { loadClaim, saveClaim } from "@/lib/claimStorage";

export function useClaimForm() {
  const [claim, setClaim] = useState<ClaimFormData | null>(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setClaim(loadClaim());
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

  return {
    claim,
    step,
    updateClaim,
    nextStep,
    prevStep,
    goToStep,
  };
}
