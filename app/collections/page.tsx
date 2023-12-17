import Link from "next/link";
import stripe from "@/config/stripe";
import { ProductCard } from "@/components/ProductCard";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { bebas_neue, inter, dm_sans } from "../layout";

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
    description: "feeling moody?",
    footer:
      "no stress! check out our in the mood collection for something sweet. and remember: it's not that serious.",
    className:
      "backdrop-contrast-50 bg-transparent hover:backdrop-contrast-100",
    bgImage:
      "bg-[url('https://kp-clopthing.s3.us-east-2.amazonaws.com/landing_photos/ITM_COLLECTION.jpg')] bg-center bg-[length:650px_950px] hover:bg-[length:660px_960px]",
  },
  {
    href: "#kinda-problematic",
    title: "kinda problematic",
    description: "feeling problematic?",
    footer: `our kp collection will fit your needs! whether you're
    looking for something comfy or daring, we got you covered.`,
    className:
      "backdrop-contrast-50 bg-transparent hover:backdrop-contrast-100",
    bgImage:
      "bg-[url('https://kp-clopthing.s3.us-east-2.amazonaws.com/landing_photos/KP_COLLECTION.jpg')] bg-center bg-[length:690px_990px] hover:bg-[length:700px_1000px]",
  },
  {
    href: "#social-media",
    title: "social media",
    description: `Make waves online!`,
    footer: `Explore our 'Social Media' collection to elevate your presence. Stay iconic, vibrant, and unforgettably you.`,
    className:
      "backdrop-contrast-50 bg-transparent hover:backdrop-contrast-100",
    bgImage:
      "bg-[url('https://kp-clopthing.s3.us-east-2.amazonaws.com/landing_photos/SM_COLLECTION2.jpeg')] bg-center bg-[length:690px_990px] hover:bg-[length:700px_1000px]",
  },
];

const getData = async () => {
  const res = await stripe.products.search({
    limit: 100,
    query: "metadata['floor_model']:'true'",
  });
  const collections: CollectionsI = {
    inTheMood: [],
    kindaProblematic: [],
    socialMedia: [],
  };

  res.data.forEach((item: any) => {
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
    <div className="relative">
      <div className={bebas_neue.className + " flex flex-col items-center md:items-start md:flex-row md:justify-around tracking-widest min-h-screen bg-gradient-to-t from-zinc-600 to-zinc-700 -mr-14 -ml-14 -mt-14 py-40 pb-40 border-none after:content-['COLLECTIONS'] after:absolute after:mx-auto after:top-10 after:z-40 after:text-white after:text-6xl after:underline"}>
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
              className={`${e.className} ${dm_sans.className} rounded-3xl md:h-[500px] w-[350px] justify-between flex flex-col drop-shadow-2xl`}
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
      <div className="bg-gradient-to-bl to-yellow-300 from-cyan-200 -ml-14 -mr-14">
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
