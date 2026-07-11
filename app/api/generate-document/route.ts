import { NextRequest, NextResponse } from "next/server";
import { generateDocument, getDocumentFilename } from "@/lib/documentGenerator";
import { ClaimFormData } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const { claim, documentType } = await request.json();

    if (!claim || !documentType) {
      return NextResponse.json(
        { error: "Missing claim or documentType" },
        { status: 400 }
      );
    }

    const pdfBuffer = generateDocument(claim as ClaimFormData, documentType);
    const filename = getDocumentFilename(documentType);

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("Document generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate document" },
      { status: 500 }
    );
  }
}
