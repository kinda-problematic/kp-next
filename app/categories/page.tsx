import Link from "next/link";
import { formatToDecimal } from "@/lib/format-to-decimal";
import stripe from "@/config/stripe";
import { ProductCard } from "@/components/ProductCard";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { bebas_neue } from "@/app/layout";

interface CategoriesDescriptions {
  href: string;
  title: string;
  description: string;
  footer: string;
  className: string;
  bgImage: string;
}

type CategoriesDescriptionsArrayType = CategoriesDescriptions[];

const categoriesDescriptionsArray: CategoriesDescriptionsArrayType = [
  {
    href: "#t-shirts",
    title: "t-shirts",
    description: "Casual Comfort Redefined",
    footer:
      "Discover our versatile range of t-shirts. Perfect for any occasion, blending style and comfort effortlessly.",
    className: "backdrop-blur-sm bg-transparent hover:backdrop-blur-none",
    bgImage:
      "bg-[url('https://kp-clopthing.s3.us-east-2.amazonaws.com/landing_photos/ITM_COLLECTION.jpg')] bg-center bg-[length:650px_950px] hover:bg-[length:660px_960px]",
  },
  {
    href: "#hoodies-and-crewnecks",
    title: "hoodies & crewnecks",
    description: "Cozy Up in Style",
    footer:
      "Embrace the chill with our cozy hoodies and crewnecks. Perfect for lounging or on-the-go style.",
    className: "backdrop-blur-sm bg-transparent hover:backdrop-blur-none",
    bgImage:
      "bg-[url('https://kp-clopthing.s3.us-east-2.amazonaws.com/landing_photos/KP_COLLECTION.jpg')] bg-center bg-[length:690px_990px] hover:bg-[length:700px_1000px]",
  },
  {
    href: "#shorts-and-pants",
    title: "shorts and pants",
    description: "Fashion Meets Function",
    footer:
      "From trendy shorts to functional pants, find your perfect fit for any occasion. Style and comfort in every step.",
    className: "backdrop-blur-sm bg-transparent hover:backdrop-blur-none",
    bgImage:
      "bg-[url('https://kp-clopthing.s3.us-east-2.amazonaws.com/landing_photos/SM_COLLECTION2.jpeg')] bg-center bg-[length:690px_990px] hover:bg-[length:700px_1000px]",
  },
];

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
  const categories: any = {
    hoodiesAndCrewnecks: [],
    tShirts: [],
    shortsAndPants: [],
  };

  resWithPrices.forEach((item: any) => {
    switch (item.metadata.category) {
      case "shorts&pants":
        categories.shortsAndPants.push(item);
        break;
      case "t-shirt":
        categories.tShirts.push(item);
        break;
      case "t-shirts":
        categories.tShirts.push(item);
        break;
      case "hoodies&crewnecks":
        categories.hoodiesAndCrewnecks.push(item);
        break;
      default:
        break;
    }
  });

  return categories;
};

export default async function Categories() {
  const data = await getData();

  return (
    <div>
      <div className="bg-gradient-to-bl from-pink-400 to-cyan-600 flex flex-col justify-start space-y-10 items-center min-h-screen py-6">
        <h2
          className={
            bebas_neue.className +
            " text-white text-6xl underline tracking-wide"
          }
        >
          All Categories
        </h2>
        <div className="flex flex-col items-center justify-start md:flex-row md:justify-evenly md:w-full md:space-x-4">
          {categoriesDescriptionsArray.map((e: CategoriesDescriptions) => (
            <Link
              href={e.href}
              key={e.title}
              className={
                e.bgImage +
                " rounded-3xl group shadow-glowy-sm hover:shadow-glowy-md mb-10 transition-all ease-in-out duration-100 overflow-x-clip"
              }
            >
              <Card
                className={`${e.className} rounded-3xl md:h-[500px] w-[350px] justify-between flex flex-col drop-shadow-2xl new-shadow`}
              >
                <CardHeader>
                  <CardTitle className="text-3xl">
                    <span className="text-white p-[1px]">{e.title}</span>
                  </CardTitle>
                  <CardDescription>
                    <span className="text-white p-[1px]">{e.description}</span>
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="text-sm text-white p-[1px]">{e.footer}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-tr to-iconic from-kpCharcoal">
        <div id="t-shirts" className="py-14 min-h-screen">
          <h2
            className={
              bebas_neue.className + " my-10 text-center text-3xl tracking-wide"
            }
          >
            T-Shirts
          </h2>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-evenly md:items-start my-2">
            {data.tShirts.map((e: any) => (
              <ProductCard key={e.id} product={e} />
            ))}
          </div>
        </div>
        <div id="shorts-and-pants" className="py-14 min-h-screen">
          <h2
            className={
              bebas_neue.className + " my-10 text-center text-3xl tracking-wide"
            }
          >
            Shorts & Pants
          </h2>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-evenly md:items-start my-2">
            {data.shortsAndPants.map((e: any) => (
              <ProductCard key={e.id} product={e} />
            ))}
          </div>
        </div>
        <div id="hoodies-and-crewnecks" className="py-14 min-h-screen">
          <h2
            className={
              bebas_neue.className + " my-10 text-center text-3xl tracking-wide"
            }
          >
            Hoodies & Crewnecks
          </h2>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-evenly md:items-start my-2">
            {data.hoodiesAndCrewnecks.map((e: any) => (
              <ProductCard key={e.id} product={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
