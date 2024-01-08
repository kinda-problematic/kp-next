"use client";
import { Button } from "./ui/button";
import { useShoppingCart } from "@/context/shopping-cart";
import { useSearchParams } from "next/navigation";

interface AddToCartButtonProps {
  product: any;
  fullProductList: any[];
  selectedColor: string;
  count: number;
  selectedSize: string;
}

interface ColorMapEntry {
  name: string;
  value: string;
  bg: string;
  class: string;
}

type ColorsMap = {
  [key: string]: ColorMapEntry;
};

const colorMap: ColorsMap = {
  black: {
    name: "black",
    value: "BK",
    bg: "bg-black",
    class: "accent-black bg-black",
  },
  white: {
    name: "white",
    value: "WT",
    bg: "bg-white",
    class: "bg-white border border-black",
  },
  grey: {
    name: "grey",
    value: "GY",
    bg: "bg-kpgray",
    class: "bg-kpgray",
  },
  pink: {
    name: "pink",
    value: "PK",
    bg: "bg-kpPeach",
    class: "bg-kpPeach",
  },
  hotpink: {
    name: "hotpink",
    value: "PK",
    bg: "bg-kpPink",
    class: "bg-kpPink",
  },
  natural: {
    name: "natural",
    value: "NT",
    bg: "bg-kpNatural",
    class: "bg-kpNatural border border-black",
  },
  blue: {
    name: "blue",
    value: "THB",
    bg: "bg-iconic",
    class: "bg-iconic",
  },
  neonyellow: {
    name: "neonyellow",
    value: "NEG",
    bg: "bg-neon",
    class: "bg-neon",
  },
  charcoal: {
    name: "charcoal",
    value: "GY",
    bg: "bg-kpCharcoal",
    class: "bg-kpCharcoal",
  },
};

export const AddToCartButton = ({
  product,
  fullProductList,
  selectedColor,
  selectedSize,
  count,
}: AddToCartButtonProps) => {
  const shoppingCart = useShoppingCart();
  const productToAdd = () => {
    const skuPrefix =
      product.metadata.sku_prefix === "BI"
        ? "BIN"
        : product.metadata.sku_prefix;
    const constructedSku =
      skuPrefix +
      selectedSize?.toUpperCase() +
      selectedColor +
      product.metadata.sku_suffix;
    const filteredList = fullProductList.find((item) => {
      return item.metadata.sku.includes(constructedSku);
    });

    return new Array(count).fill(filteredList);
  };

  return (
    <Button onClick={() => shoppingCart.addToCart(productToAdd())}>
      Add to Cart
    </Button>
  );
};
