import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const STRIPE_PRODUCTS = {
  complaint: {
    price: 200,
    name: "Complaint Letter",
    description: "Professional complaint letter to the company",
  },
  regulatory: {
    price: 200,
    name: "Regulatory Complaint",
    description: "Complaint to relevant regulators",
  },
  letterBeforeAction: {
    price: 2500,
    name: "Letter Before Action",
    description: "Formal notice before legal proceedings",
  },
};
