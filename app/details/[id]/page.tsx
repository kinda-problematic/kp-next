import stripe from "@/config/stripe";
import { formatToDecimal } from "@/lib/format-to-decimal";

interface DetailsProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const product = await stripe.products.retrieve(id);
  const price = await stripe.prices.retrieve(product.default_price as string);
  const prodWithPrice = {
    ...product,
    metadata: {
      ...product.metadata,
      price: price.unit_amount_decimal
        ? formatToDecimal(price.unit_amount_decimal)
        : 0,
    },
  };

  return prodWithPrice;
};

export default async function Details({ params }: DetailsProps) {
  const data = await getData(params.id);

  return (
    <div>
      {data.name}
    </div>
  );
}
