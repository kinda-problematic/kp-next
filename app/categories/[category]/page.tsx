import stripe from "@/config/stripe";
import { Suspense } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

interface CategoryProps {
  params: {
    category: string;
  };
}

const getData = async (category: string) => {
  const regex = /-and-/g;
  const res = await stripe.products.search({
    limit: 100,
    query: `metadata['floor_model']:'true' AND metadata['category']:'${category.replace(
      regex,
      "&"
    )}'`,
  });

  return res;
};

export default async function Category({ params }: CategoryProps) {
  const data = await getData(params.category);

  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-between md:items-start my-2">
      {data.data.map((e: any) => (
        <ProductCard key={e.id} product={e} />
      ))}
    </div>
  );
}
