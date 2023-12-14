import Link from "next/link";
import { formatToDecimal } from "@/lib/format-to-decimal";
import stripe from "@/config/stripe";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";

const getData = async () => {
  const res = await stripe.products.search({
    limit: 100,
    query: "metadata['floor_model']:'true'",
  });
  const resWithPrices = await Promise.all(
    res.data.map(async (item: any) => {
      const price = await stripe.prices.retrieve(item.default_price);

      return {
        ...item,
        metadata: {
          ...item.metadata,
          price: price.unit_amount_decimal
            ? formatToDecimal(price.unit_amount_decimal)
            : 0,
        },
      };
    })
  );

  return resWithPrices;
};

export default async function Categories() {
  const data = await getData();

  return (
    <div>
      Categories
      <Link href="/categories/hoodies-and-crewnecks">Hoodies & Crewnecks</Link>
      <Link href="/categories/t-shirt">T-Shirts</Link>
      <Link href="/categories/shorts-and-pants">Shorts and Pants</Link>
      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-between md:items-start my-2">
        {data.map((e: any) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    </div>
  );
}
