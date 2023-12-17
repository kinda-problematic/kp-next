"use client";

import { useShoppingCart } from "@/context/shopping-cart";

export default function ShoppingCart() {
  const cartContext = useShoppingCart();

  return (
    <div>
      Shopping Cart
      {cartContext.shoppingCart.map((e: any, i: any) => (
        <div key={e.id + i.toString()}>{e.name}</div>
      ))}
    </div>
  );
}
