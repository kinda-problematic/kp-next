import stripe from "@/config/stripe";

export async function GET() { 
  const res = await stripe.products.search({
    limit: 100,
    query: "metadata['floor_model']:'true'",
  });

  return Response.json(res);
}
