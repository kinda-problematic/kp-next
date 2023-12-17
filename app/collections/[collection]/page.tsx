import { bebas_neue, dm_sans } from "@/app/layout";
import { ProductCard } from "@/components/ProductCard";
import stripe from "@/config/stripe";
import Link from "next/link";
import { Suspense } from "react";

interface CollectionProps {
  params: {
    collection: string;
  };
}

interface BottomCopy {
  name: string;
  title: string;
  content: string;
}

type BottomCopyList = {
  "in-the-mood": BottomCopy;
  "kinda-problematic": BottomCopy;
  "social-media": BottomCopy;
  [key: string]: BottomCopy | undefined;
};

const bottomCopies: BottomCopyList = {
  "in-the-mood": {
    name: "in-the-mood",
    title: "Find Your Statement Piece",
    content: `Each shirt in our "In The Mood" collection is more than just a piece of clothing—it's a conversation starter, a mood booster, and a unique expression of your personal style. Whether you're feeling cheeky, bold, or just proudly embracing the day, we've got the perfect tee to match your vibe. With premium quality, comfort fit, and that perfect splash of attitude, why not let your shirt do the talking?`,
  },
  "kinda-problematic": {
    name: "kinda-problematic",
    title: "Be Unapologetically You",
    content: `In a world full of expectations, "Kinda Problematic" is your invitation to defy the ordinary. Our pieces are designed for comfort, built for durability, and styled for the statement-makers. So go ahead—wear the KP Hoodie, rock those KP Joggers, and do it all with an unapologetic flair that's uniquely yours.`,
  },
  "social-media": {
    name: "in-the-mood",
    title: "Capture the Moment in Style",
    content: `Why just scroll when you can make the scroll stop? Our 'Social Media' tees are perfect for those who speak in hashtags and live for likes. Whether you're channeling 'Bad Influencer' vibes or rocking 'Iconic' status, your fashion choices are about to get as many likes as your finest filtered photo.`,
  },
};

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
  const collectionNormalized = params.collection.split("-").join(" ");

  return (
    <div className="bg-gradient-to-tr from-cyan-600 to-emerald-700 -mr-14 -ml-14 -mt-14 pb-20 min-h-screen">
      <h2
        className={
          bebas_neue.className +
          " text-6xl underline text-center mx-auto py-10 text-white drop-shadow-lg"
        }
      >
        {collectionNormalized} Collection
      </h2>
      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-evenly md:items-start my-2 ">
        {data.data.map((e: any) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
      <div
        className={
          dm_sans.className +
          " flex flex-col px-80 justify-center text-white text-center mb-10"
        }
      >
        <h2 className="text-xl underline text-center mx-auto text-white">
          {bottomCopies[params.collection]?.title}
        </h2>
        <p>{bottomCopies[params.collection]?.content}</p>
      </div>
    </div>
  );
}
