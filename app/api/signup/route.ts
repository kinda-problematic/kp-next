import stripe from "@/config/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  await stripe.customers.create({
    email: email,
  });

  return NextResponse.json("Successful");
}
