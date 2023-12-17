"use client";

import { useShoppingCart } from "@/context/shopping-cart";
import { ShoppingCartIcon } from "lucide-react";

export const ShoppingCartLink = () => {
  const shoppingCart = useShoppingCart();

  return (
    <span className="relative inline-block">
      <ShoppingCartIcon size={36} />
      <p className="absolute bottom-0 bg-red-500 text-white rounded-full h-5 w-5 text-sm text-center justify-center items-center flex">
        {shoppingCart.shoppingCart.length}
      </p>
    </span>
  );
};
