import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICING = {
  complaint: 200, // €2 in cents
  regulatory: 200, // €2 in cents
  "letter-before-action": 2500, // €25 in cents
};

export async function POST(request: NextRequest) {
  try {
    const { documentType } = await request.json();

    if (!documentType || !Object.keys(PRICING).includes(documentType)) {
      return NextResponse.json(
        { error: "Invalid document type" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: getProductName(documentType),
              description: getProductDescription(documentType),
            },
            unit_amount: PRICING[documentType as keyof typeof PRICING],
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/review`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

function getProductName(documentType: string): string {
  const names = {
    complaint: "Complaint Letter",
    regulatory: "Regulatory Complaint",
    "letter-before-action": "Letter Before Action",
  };
  return names[documentType as keyof typeof names] || "Legal Document";
}

function getProductDescription(documentType: string): string {
  const descriptions = {
    complaint: "Professional complaint letter to the company",
    regulatory: "Complaint to file with regulatory authorities",
    "letter-before-action": "Formal legal notice before legal proceedings",
  };
  return descriptions[documentType as keyof typeof descriptions] || "Legal document";
}
