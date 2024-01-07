import { AddToCartButton } from "@/components/AddToCartButton";
import stripe from "@/config/stripe";
import { formatToDecimal } from "@/lib/format-to-decimal";
import { PhotoList } from "../components/PhotoList";
import { bebas_neue } from "@/app/layout";
import SizeSelector from "../components/SizeSelector";
import QuantitySelector from "../components/QuantitySelector";
import { Separator } from "@/components/ui/separator";
import ColorSelector from "../components/ColorSelector";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CLOTHING_CARE, CLOTHING_KEYS } from "@/constants/clothing-care";

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

const getFullProductList = async (productName: string) => {
  const coercedName =
    productName.toLowerCase() === "kp embroidered crewneck"
      ? "kp unisex embroidered crewneck"
      : productName;
  const products = await stripe.products.search({
    limit: 100,
    query: `active:'true' AND -metadata['floor_model']:'true' and name:"${coercedName}"`,
  });
  const productsWithPrices = await Promise.all(
    products.data.map(async (item: any) => {
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

  return productsWithPrices;
};

export default async function Details({ params }: DetailsProps) {
  const data = await getData(params.id);
  const fullProductList = await getFullProductList(data.name);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 -mt-14 md:mt-0 ">
      <PhotoList
        productImages={data.images}
        skuPrefix={data.metadata.sku_prefix}
        skuSuffix={data.metadata.sku_suffix}
      />
      <div className="md:w-4/5 h-full flex flex-col items-center md:items-start justify-start">
        <h2
          className={`${bebas_neue.className} text-5xl ${
            data.name.includes("Embroidered") ? "" : "whitespace-nowrap"
          }`}
        >
          {data.name}
        </h2>
        <Separator className="mb-4" />
        <div className="flex flex-col space-y-4 items-center justify-center md:items-start">
          <SizeSelector
            sizes={data.metadata.sizes.split(",").filter((size: string) => {
              if (
                (data.name.includes("Anxious Queen") ||
                  data.name.includes("Hot Mess")) &&
                size === "xxl"
              ) {
                return;
              } else if (size !== "xs") {
                return size;
              }
            })}
          />
          <ColorSelector colors={data.metadata.colors} />
          <QuantitySelector />
          <AddToCartButton product={data} fullProductList={fullProductList} />
        </div>
        <div className="mt-4">
          {data.description}
          <ul className="list-disc ml-8">
            {data.metadata.additional_info
              .split("|")
              .map((info: string, i: any) => (
                <li key={i}>{info}</li>
              ))}
          </ul>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {/* @ts-ignore */}
          {CLOTHING_CARE[CLOTHING_KEYS[data.name.toLowerCase()]].map(
            (item: any, i: any) => (
              <AccordionItem value={item.key} key={i}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc ml-4">
                    {item.description.map((description: string, i: any) => (
                      <p key={i}>-{description}</p>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>
    </div>
  );
}
