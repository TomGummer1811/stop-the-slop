export type ContentType = "article" | "image" | "video" | "advertisement" | "chatbot" | "other";

export type DisclosureLevel = "yes" | "no" | "unsure";

export type DocumentType = "complaint" | "regulatory" | "letter-before-action";

export interface ClaimFormData {
  // Step 1: Content Type
  contentType: ContentType;

  // Step 2: Exposure Date
  exposureDate: Date;

  // Step 3: Disclosure
  hadDisclosure: DisclosureLevel;
  disclosureDetails?: string;

  // Step 4: Company
  companyName: string;
  companyWebsite: string;
  companyCountry: string;
  incidentDescription: string;

  // Step 5: Action
  documentType: DocumentType;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
}

export interface GeneratedDocument {
  id: string;
  userId: string;
  type: DocumentType;
  content: string;
  claimData: ClaimFormData;
  createdAt: Date;
  pdfUrl?: string;
}

export interface Payment {
  id: string;
  userId: string;
  documentId: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  stripeSessionId: string;
  createdAt: Date;
}
