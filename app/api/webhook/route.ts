// /api/webhook/route.ts

import { NextResponse } from "next/server";
import stripe from "@/config/stripe";

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET ?? "";

async function readableStreamToBuffer(readableStream: any) {
  const reader = readableStream.getReader();
  const chunks = [];

  let done, value;

  while ((({ done, value } = await reader.read()), !done)) {
    chunks.push(value);
  }

  // Concatenate all chunks into a single Uint8Array
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const uint8Array = new Uint8Array(totalLength);
  let offset = 0;

  for (const chunk of chunks) {
    uint8Array.set(chunk, offset);
    offset += chunk.length;
  }

  // Convert Uint8Array to Buffer
  return Buffer.from(uint8Array);
}

export async function POST(req: Request) {
  const body = await readableStreamToBuffer(req.body);
  const sig = req.headers.get("stripe-signature") ?? "";

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }

  switch (event.type) {
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;
      const { data } = await stripe.checkout.sessions.listLineItems(
        checkoutSessionCompleted.id
      );

      data.forEach(async (lineItem) => {
        console.log(lineItem.quantity);
        // @ts-expect-error
        const product = await stripe.products.retrieve(lineItem.price?.product);
        const currentCount = Number(product.metadata.inventory);

        if (currentCount === 0) return;

        // @ts-expect-error
        await stripe.products.update(lineItem.price?.product, {
          // @ts-expect-error
          metadata: { inventory: currentCount - lineItem.quantity },
        });
      });
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  return NextResponse.json({ received: true }, { status: 200 });
}
