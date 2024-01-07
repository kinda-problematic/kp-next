import Link from "next/link";
import stripe from "@/config/stripe";
import { ProductCard } from "@/components/ProductCard";
import { formatToDecimal } from "@/lib/format-to-decimal";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { bebas_neue, dm_sans } from "../layout";

interface CollectionsI {
  inTheMood: any[];
  kindaProblematic: any[];
  socialMedia: any[];
}

interface CollectionsDescriptions {
  href: string;
  title: string;
  description: string;
  footer: string;
  className: string;
  bgImage: string;
}

type CollectionsDescriptionsArrayType = CollectionsDescriptions[];

const collectionsDescriptionsArray: CollectionsDescriptionsArrayType = [
  {
    href: "#in-the-mood",
    title: "in the mood",
    description: "Elevate Your Mood",
    footer:
      "Dive into our 'In the Mood' collection for eclectic and uplifting styles. Perfect for adding a spark of joy to your day.",
    className: "backdrop-blur-sm bg-transparent hover:backdrop-blur-none",
    bgImage:
      "bg-[url('https://kp-clopthing.s3.us-east-2.amazonaws.com/landing_photos/ITM_COLLECTION.jpg')] bg-center bg-[length:650px_950px] hover:bg-[length:660px_960px]",
  },
  {
    href: "#kinda-problematic",
    title: "kinda problematic",
    description: "Embrace Your Edge",
    footer:
      "Our 'Kinda Problematic' collection is designed for the bold and the brave. Stand out with unique, daring designs.",
    className: "backdrop-blur-sm bg-transparent hover:backdrop-blur-none",
    bgImage:
      "bg-[url('https://kp-clopthing.s3.us-east-2.amazonaws.com/landing_photos/KP_COLLECTION.jpg')] bg-center bg-[length:690px_990px] hover:bg-[length:700px_1000px]",
  },
  {
    href: "#social-media",
    title: "social media",
    description: "Trendsetting Styles",
    footer:
      "Our 'Social Media' collection offers trendy, eye-catching outfits that are sure to get likes both online and off. Be the trendsetter you are meant to be.",
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
  const collections: CollectionsI = {
    inTheMood: [],
    kindaProblematic: [],
    socialMedia: [],
  };

  resWithPrices.forEach((item: any) => {
    switch (item.metadata.collection) {
      case "ITM":
        collections.inTheMood.push(item);
        break;
      case "kp":
        collections.kindaProblematic.push(item);
        break;
      case "SM":
        collections.socialMedia.push(item);
        break;
      default:
        break;
    }
  });

  return collections;
};

export default async function Collections() {
  const data = await getData();

  return (
    <div>
      <div className="flex flex-col justify-start space-y-10 items-center min-h-screen bg-gradient-to-t from-zinc-600 to-zinc-700 border-none py-6">
        <h2
          className={
            bebas_neue.className +
            " text-white text-6xl underline tracking-wide"
          }
        >
          Collections
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly md:w-full md:space-x-4">
          {collectionsDescriptionsArray.map((e: CollectionsDescriptions) => (
            <Link
              href={e.href}
              key={e.title}
              className={
                e.bgImage +
                " rounded-3xl group shadow-glowy-sm hover:shadow-glowy-md mb-10 transition-all ease-in-out duration-100"
              }
            >
              <Card
                className={`${e.className} ${dm_sans.className} rounded-3xl md:h-[500px] w-[350px] justify-between flex flex-col drop-shadow-2xl new-shadow`}
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
      <div className="bg-gradient-to-bl to-yellow-300 from-cyan-200">
        <div id="in-the-mood" className="py-14 min-h-screen">
          <h2
            className={
              bebas_neue.className + " my-10 text-center text-3xl tracking-wide"
            }
          >
            In The Mood
          </h2>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-evenly md:items-start my-2">
            {data.inTheMood.map((e: any) => (
              <ProductCard key={e.id} product={e} />
            ))}
          </div>
        </div>
        <div id="kinda-problematic" className="py-14 min-h-screen">
          <h2
            className={
              bebas_neue.className + " my-10 text-center text-3xl tracking-wide"
            }
          >
            Kinda Problematic
          </h2>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-evenly md:items-start my-2">
            {data.kindaProblematic.map((e: any) => (
              <ProductCard key={e.id} product={e} />
            ))}
          </div>
        </div>
        <div id="social-media" className="py-14 min-h-screen">
          <h2
            className={
              bebas_neue.className + " my-10 text-center text-3xl tracking-wide"
            }
          >
            Social Media
          </h2>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-evenly md:items-start my-2">
            {data.socialMedia.map((e: any) => (
              <ProductCard key={e.id} product={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
