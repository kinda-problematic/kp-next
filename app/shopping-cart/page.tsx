"use client";
import { useShoppingCart } from "@/context/shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ShoppingCart() {
  const cartContext = useShoppingCart();

  return (
    <div className="py-20 flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <h2 className={" text-6xl text-white mb-4"}>Shopping Cart</h2>
      <Button
        className="mb-4"
        onClick={() => {
          cartContext.removeFromCart("all");
        }}
      >
        Clear Cart
      </Button>
      <Button>
        <Link href="/checkout">Checkout</Link>
      </Button>
      <div className="py-24 flex flex-col items-center justify-center min-h-screen bg-slate-800">
        <div className="h-3/5 w-full flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl text-center text-white">
            Your cart is empty, go fill it up!
          </h2>
          <div className="flex flex-col justify-center items-center space-y-4">
            <ShoppingCartIcon
              size={400}
              className="bg-kpCharcoal w-36 h-36 rounded-3xl shadow-glowy-sm-360-lg p-4 text-white"
            />
            <div className="flex flex-col justify-center space-y-4 items-center w-full">
              <Link
                href="/collections"
                className={
                  "text-lg w-full text-center bg-white hover:text-white hover:bg-red-600 px-10 py-4 rounded-full text-black"
                }
              >
                Check out our Collections
              </Link>
              <Link
                href="/categories"
                className="text-lg w-full text-center bg-white hover:text-white hover:bg-red-600 px-10 py-4 rounded-full text-black"
              >
                Shop according to Category
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
