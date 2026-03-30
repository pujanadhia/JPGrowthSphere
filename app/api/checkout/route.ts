import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe if key exists, otherwise throw error logically handled later
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_...", {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { plan, email } = body;

    let priceId = "";
    if (plan === "starter") priceId = "price_starter_123";
    if (plan === "scale") priceId = "price_scale_123";
    if (plan === "dominance") priceId = "price_dominance_123";

    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan selected" }, { status: 400 });
    }

    // Create Checkout Sessions from body params
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      customer_email: email, // Optionally link or create customer
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/pricing`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
