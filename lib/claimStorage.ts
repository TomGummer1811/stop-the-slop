import { ClaimFormData, ContentType, DisclosureLevel, DocumentType } from "@/types";

const STORAGE_KEY = "stop_the_slop_claim";

const DEFAULT_CLAIM: ClaimFormData = {
  contentType: "article",
  exposureDate: new Date(),
  hadDisclosure: "unsure",
  disclosureDetails: "",
  companyName: "",
  companyWebsite: "",
  companyCountry: "",
  incidentDescription: "",
  documentType: "complaint",
};

export function loadClaim(): ClaimFormData {
  if (typeof window === "undefined") return DEFAULT_CLAIM;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_CLAIM;

    const parsed = JSON.parse(stored);
    return {
      ...DEFAULT_CLAIM,
      ...parsed,
      exposureDate: new Date(parsed.exposureDate),
    };
  } catch {
    return DEFAULT_CLAIM;
  }
}

export function saveClaim(claim: ClaimFormData): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(claim));
  } catch {
    console.error("Failed to save claim");
  }
}

export function clearClaim(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
