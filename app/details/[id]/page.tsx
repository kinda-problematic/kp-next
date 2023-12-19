import { AddToCartButton } from "@/components/AddToCartButton";
import stripe from "@/config/stripe";
import { formatToDecimal } from "@/lib/format-to-decimal";
import { PhotoList } from "../components/PhotoList";
import { bebas_neue } from "@/app/layout";

interface DetailsProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const product = await stripe.products.retrieve(id);
  const price = await stripe.prices.retrieve(product.default_price as string);

  const prodWithPrice: any = {
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
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 -mt-14 md:mt-0 ">
      <PhotoList
        productImages={data.images}
        skuPrefix={data.metadata.sku_prefix}
        skuSuffix={data.metadata.sku_suffix}
      />
      <div className="w-4/5 h-full flex flex-col items-start justify-start">
        <h2 className={bebas_neue.className + " text-5xl"}>{data.name}</h2>
        <div>size</div>
        <div>color</div>
        <div>quantity</div>
        <AddToCartButton product={data} />
        <div>description</div>
        <div>accordion fit and care etc</div>
      </div>
    </div>
  );
}
