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
    title: "Find Your Statement Piece",
    content: `Each shirt in our "In The Mood" collection is more than just a piece of clothing—it's a conversation starter, a mood booster, and a unique expression of your personal style. Whether you're feeling cheeky, bold, or just proudly embracing the day, we've got the perfect tee to match your vibe. With premium quality, comfort fit, and that perfect splash of attitude, why not let your shirt do the talking?`,
  },
  "shorts-and-pants": {
    name: "shorts-and-pants",
    title: "Be Unapologetically You",
    content: `In a world full of expectations, "Kinda Problematic" is your invitation to defy the ordinary. Our pieces are designed for comfort, built for durability, and styled for the statement-makers. So go ahead—wear the KP Hoodie, rock those KP Joggers, and do it all with an unapologetic flair that's uniquely yours.`,
  },
  "hoodies-and-crewnecks": {
    name: "hoodies-and-crewnecks",
    title: "Capture the Moment in Style",
    content: `Why just scroll when you can make the scroll stop? Our 'Social Media' tees are perfect for those who speak in hashtags and live for likes. Whether you're channeling 'Bad Influencer' vibes or rocking 'Iconic' status, your fashion choices are about to get as many likes as your finest filtered photo.`,
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
          bebas_neue.className + " text-6xl underline text-center text-white"
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
