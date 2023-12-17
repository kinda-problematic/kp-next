"use client";

import { Button } from "./ui/button";
import { useShoppingCart } from "@/context/shopping-cart";

interface AddToCartButtonProps {
  product: any;
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const shoppingCart = useShoppingCart();

  return (
    <Button onClick={() => shoppingCart.addToCart(product)}>Add to Cart</Button>
  );
};
