"use client";
import { useShoppingCart } from "@/context/shopping-cart";
import { useState, useEffect, Suspense } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function Checkout() {
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
  }, [cartContext.shoppingCart]);

  return clientSecret ? (
    <div className="flex justify-center">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret }}
      >
        <EmbeddedCheckout className="p-4 bg-white rounded-lg w-4/5" />
      </EmbeddedCheckoutProvider>
    </div>
  ) : null;
}
