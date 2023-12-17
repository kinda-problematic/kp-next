import Link from "next/link";
import { formatToDecimal } from "@/lib/format-to-decimal";
import stripe from "@/config/stripe";
import { ProductCard } from "@/components/ProductCard";
import { bebas_neue } from "@/app/layout";

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
    <div className="bg-gradient-to-bl from-pink-400 to-cyan-600 -mr-14 -ml-14 -mt-14 pb-20 min-h-screen">
      <h2
        className={
          bebas_neue.className +
          " text-6xl underline text-center mx-auto py-10 text-white drop-shadow-lg"
        }
      >
        All Categories
      </h2>
      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-evenly md:items-start px-14 my-2">
        {data.map((e: any) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    </div>
  );
}
