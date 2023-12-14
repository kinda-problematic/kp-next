import { ProductCard } from "@/components/ProductCard";
import stripe from "@/config/stripe";
import Link from "next/link";
import { Suspense } from "react";

interface CollectionProps {
  params: {
    collection: string;
  };
}

const getData = async (collection: string) => {
  let collectionCoerced;

  switch (collection) {
    case "in-the-mood":
      collectionCoerced = "ITM";
      break;
    case "kinda-problematic":
      collectionCoerced = "kp";
      break;
    default:
      collectionCoerced = "SM";
  }

  const res = await stripe.products.search({
    limit: 100,
    query: `metadata['floor_model']:'true' AND metadata['collection']:'${collectionCoerced}'`,
  });

  return res;
};

export default async function Collection({ params }: CollectionProps) {
  const data = await getData(params.collection);

  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-between md:items-start my-2">
      {data.data.map((e: any) => (
        <ProductCard key={e.id} product={e} />
      ))}
    </div>
  );
}
