"use client";
import { Button } from "./ui/button";
import { useShoppingCart } from "@/context/shopping-cart";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

interface AddToCartButtonProps {
  product: any;
  fullProductList: any[];
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
}: AddToCartButtonProps) => {
  const shoppingCart = useShoppingCart();
  const searchParams = useSearchParams();
  const productToAdd = () => {
    const selectedSize = searchParams.get("size");
    const selectedColor = colorMap[searchParams.get("color") as string];
    const skuPrefix =
      product.metadata.sku_prefix === "BI"
        ? "BIN"
        : product.metadata.sku_prefix;
    const constructedSku =
      skuPrefix +
      selectedSize?.toUpperCase() +
      selectedColor.value +
      product.metadata.sku_suffix;
    console.log(constructedSku);
    const filteredList = fullProductList.find((item) => {
      return item.metadata.sku.includes(constructedSku);
    });

    return filteredList;
  };

  return (
    <Button onClick={() => shoppingCart.addToCart(productToAdd())}>
      Add to Cart
    </Button>
  );
};
