"use client";
import { useShoppingCart } from "@/context/shopping-cart";
import { useState, useEffect, Suspense } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Skeleton } from "@/components/ui/skeleton";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function ShoppingCart() {
  const [clientSecret, setClientSecret] = useState("");
  const cartContext = useShoppingCart();

  useEffect(() => {
    async function getCartSession() {
      const res = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify(cartContext.shoppingCart),
      });
      const awaited = await res.json();
      setClientSecret(awaited.clientSecret);
    }

    if (cartContext.shoppingCart.length > 0) {
      getCartSession();
    }
  }, [cartContext.shoppingCart]); // Dependency array

  return (
    <div>
      <Suspense
        fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}
      >
        {clientSecret ? (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        ) : (
          <div className="flex flex-col items-center justify-center h-4/5">
            <h2 className="text-2xl">Your cart is empty, go fill it up!</h2>
            <ShoppingCartIcon size={400} />
            <Link href="/collections" className="hover:text-blue-500">
              Check out our collections...
            </Link>
            <Link href="/collections" className="hover:text-blue-500">
              or look according to category!
            </Link>
          </div>
        )}
      </Suspense>
    </div>
  );
}
