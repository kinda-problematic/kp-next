import stripe from "@/config/stripe";
import { NextResponse } from "next/server";

const assembleLineItems = (shoppingCart: any) => {
  const itemCounts: { [key: string]: { product: any; count: number } } = {};

  // Build up a count of each item in the shoppingCart
  for (const item of shoppingCart) {
    const itemId = item.id;
    if (!itemCounts[itemId]) {
      itemCounts[itemId] = { product: item, count: 0 };
    }
    itemCounts[itemId].count += 1;
  }

  return Object.values(itemCounts).map(({ product, count }) => ({
    price: product.default_price,
    quantity: count,
    adjustable_quantity: {
      enabled: true,
      maximum: 100,
    },
  }));
};

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id");

  try {
    const session = await stripe.checkout.sessions.retrieve(
      session_id as string
    );

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details?.email,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: err.statusCode || 500,
      message: err.message,
    });
  }
}

export async function POST(req: any) {
  const lineItems = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      allow_promotion_codes: true,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      shipping_options: [{ shipping_rate: "shr_1MrOCvAr8NKIaNewceQ8KVWM" }],
      line_items: assembleLineItems(lineItems),
      mode: "payment",
      automatic_tax: {
        enabled: true,
      },
      invoice_creation: {
        enabled: true,
      },
      return_url: `${process.env.BASE_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err: any) {
    return NextResponse.json({
      status: err.statusCode || 500,
      message: err.message,
    });
  }
}
