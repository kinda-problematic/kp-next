import Link from "next/link";
import stripe from "@/config/stripe";
import { Suspense } from "react";
import { ProductCard } from "@/components/ProductCard";

interface CollectionsI {
  inTheMood: any[];
  kindaProblematic: any[];
  socialMedia: any[];
}

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
    <div>
      Collections
      <Link href="/collections/in-the-mood">In the Mood</Link>
      <Link href="/collections/kinda-problematic">Kinda Problematic</Link>
      <Link href="/collections/social-media">Social Media</Link>
      <h2>In The Mood</h2>
      <div className="flex flex-row flex-wrap justify-between items-start my-2">
        {data.inTheMood.map((e: any) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
      <h2>Kinda Problematic</h2>
      <div className="flex flex-row flex-wrap justify-evenly items-start my-2">
        {data.kindaProblematic.map((e: any) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
      <h2>Social Media</h2>
      <div className="flex flex-row flex-wrap justify-evenly items-start my-2">
        {data.socialMedia.map((e: any) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    </div>
  );
}
