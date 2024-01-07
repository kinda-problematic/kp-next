import Link from "next/link";
import { bebas_neue } from "./layout";
import stripe from "@/config/stripe";
import { Suspense } from "react";
import { ProductCard } from "@/components/ProductCard";
// load all products here and then make available with context
const getData = async () => {
  const res = await stripe.products.search({
    limit: 100,
    query: 'metadata["home_page"]:"true"',
  });

  return res;
};

export default async function Home() {
  const { data } = await getData();

  return (
    <main className="bg-kpCharcoal py-2">
      <div
        className={`min-h-screen flex flex-col items-center justify-start p-10 pt-0 text-black relative bg-[url('https://kp-clopthing.s3.us-east-2.amazonaws.com/ALL_GIRLS_SITTING.jpg')] bg-contain md:bg-center bg-top bg-no-repeat `}
      >
        <div className="p-2 mt-56 md:mt-0 max-w-7xl bg-black/80 text-white border-none backdrop-blur drop-shadow rounded-3xl flex flex-col justify-center items-center text-center animate-breathe">
          <h1
            className={
              bebas_neue.className +
              " text-4xl md:text-6xl mb-1 mx-4 text-center"
            }
          >
            Unapologetically Human
          </h1>
          <p className="text-md px-10">
            Kinda Problematic is a U.S based clothing brand that ignites the
            fashion world by stitching together the threads of style,
            self-expression, and mental health awareness. We craft great quality
            clothing by weaving our shared experiences and transcending stigmas.
            Together we celebrate self-love and the perfectly imperfect journey
            that makes us who we are. Kinda Problematic supports being boldly
            flawed and fearlessly you.
          </p>
          <Link
            href="/collections"
            passHref
            className={
              bebas_neue.className +
              " inline-block text-3xl tracking-wide mt-4 px-6 py-2 bg-surf bg-four-hundo animate-surf-wave hover:animate-none hover:ring-1 hover:ring-offset-2 text-white rounded-2xl w-4/5 text-center shadow-lg hover:shadow-inner [text-shadow:_1px_2px_0_rgb(0_0_0_/_40%)] hover:[text-shadow:_2px_3px_0_rgb(0_0_0_/_40%)]"
            }
            aria-label="Explore our collections"
          >
            Explore Our Collections
          </Link>
        </div>
      </div>

      <Suspense fallback="">
        <div className="flex flex-col justify-center space-y-4 items-center mt-10">
          <h2
            className={
              bebas_neue.className +
              " text-white text-6xl tracking-wide underline"
            }
          >
            popular items
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8 justify-evenly items-center">
            {data.map((item, i) => (
              <ProductCard key={i} product={item} className="shadow-glowy-sm" />
            ))}
          </div>
        </div>
      </Suspense>
    </main>
  );
}
