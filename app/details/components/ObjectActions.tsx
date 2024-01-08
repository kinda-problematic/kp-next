"use client";
import { useState } from "react";
import ColorSelector from "./ColorSelector";
import QuantitySelector from "./QuantitySelector";
import SizeSelector from "./SizeSelector";
import { AddToCartButton } from "@/components/AddToCartButton";

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

export default function ObjectActions({
  item,
  fullProductList,
}: {
  item: any;
  fullProductList: any[];
}) {
  const availableColors = item.metadata.colors
    .split(",")
    .map((color: string) => colorMap[color]);
  const sizes = item.metadata.sizes.split(",").filter((size: string) => {
    if (
      (item.name.includes("Anxious Queen") || item.name.includes("Hot Mess")) &&
      size === "xxl"
    ) {
      return;
    } else if (size !== "xs") {
      return size;
    }
  });

  const [selectedColor, setSelectedColor] = useState(availableColors[0].value);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="flex flex-col space-y-4 items-center justify-center md:items-start">
      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <ColorSelector
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        availableColors={availableColors}
      />
      <QuantitySelector count={count} setCount={setCount} />
      <AddToCartButton
        product={item}
        fullProductList={fullProductList}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        count={count}
      />
    </div>
  );
}
