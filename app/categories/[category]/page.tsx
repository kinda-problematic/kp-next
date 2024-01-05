import stripe from "@/config/stripe";
import { bebas_neue } from "@/app/layout";
import { ProductCard } from "@/components/ProductCard";

interface CategoryProps {
  params: {
    category: string;
  };
}

interface BottomCopy {
  name: string;
  title: string;
  content: string;
}

type BottomCopyList = {
  [key: string]: BottomCopy | undefined;
};

const bottomCopies: BottomCopyList = {
  "t-shirt": {
    name: "t-shirts",
    title: "Speak Your Vibe with Every Wear",
    content: `Every T-Shirt in our collection is a statement, a wearable manifesto of your mood, humor, and spirit. With "Kinda Problematic," you're not just picking out a T-shirt; you're curating your message to the world. Our T-Shirt line features bold statements like "Hot Mess" and "Iconic", each a conversation piece that wears as good as it looks. Crafted for comfort and designed to be noticed, our tees are your go-to for days when you feel like broadcasting your personality. So, choose the one that resonates, pull it on, and let your chest do the talking. After all, why blend in when you were born to stand out?`,
  },
  "shorts-and-pants": {
    name: "shorts-and-pants",
    title: "Embrace Your Unique Style with Every Step",
    content: `Stride into comfort and step out in style with "Kinda Problematic's" Shorts and Pants collection. Each piece is a celebration of individuality and a rebellion against the one-size-fits-all approach of fashion. Designed with the perfect blend of comfort and durability, these are more than just garments—they're your second skin. Whether you're lounging in our KP Joggers or stepping out in our KP Shorts, you're making a statement that's all your own. Defy expectations and embrace your unique style—because being unapologetically you never goes out of fashion.`,
  },
  "hoodies-and-crewnecks": {
    name: "hoodies-and-crewnecks",
    title: "Stand Out in Comfort",
    content: `Make every moment your highlight reel with our Hoodies and Crewnecks collection. Each piece is a statement in itself, a blend of comfort and style that says you're here to make waves. It's not just about keeping you cozy; it's about ensuring you're the trend in motion, the style others aspire to. With our collection, it's not just about wearing something new—it's about wearing how you feel, bold and unfiltered. From the subtle to the statement-makers, our hoodies and crewnecks are your canvas for self-expression that goes beyond the usual. So wear it loud, wear it proud, and let your style speak volumes.`,
  },
};

const getData = async (category: string) => {
  const regex = /-and-/g;
  const res = await stripe.products.search({
    limit: 100,
    query: `metadata['floor_model']:'true' AND metadata['category']:'${category.replace(
      regex,
      "&"
    )}'`,
  });

  return res;
};

export default async function Category({ params }: CategoryProps) {
  const data = await getData(params.category);
  const categoryNormalized = params.category.split("-").join(" ");

  return (
    <div className="flex flex-col justify-start items-center space-y-10 bg-gradient-to-tr from-cyan-600 to-emerald-700 min-h-screen py-6">
      <h2
        className={
          bebas_neue.className +
          " text-6xl underline text-center mx-auto py-10 text-white drop-shadow-lg"
        }
      >
        {params.category === "t-shirt" ? "t-shirts" : categoryNormalized}
      </h2>
      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-evenly md:items-center md:space-x-4 my-2 ">
        {data.data.map((e: any) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
      <div
        className={
          " flex flex-col justify-center items-center text-white text-center mb-10"
        }
      >
        <h2 className="text-xl underline text-center mx-auto text-white">
          {bottomCopies[params.category]?.title}
        </h2>
        <p className="w-3/5">{bottomCopies[params.category]?.content}</p>
      </div>
    </div>
  );
}
