"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function SizeSelector({
  sizes,
  selectedSize,
  setSelectedSize,
}: {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: any;
}) {
  return (
    <div
      className={
        bebas_neue.className + " flex flex-col items-center md:items-start"
      }
    >
      <span className="text-3xl md:mx-1">Size</span>
      <ToggleGroup
        type="single"
        variant="outline"
        value={selectedSize as string}
        onValueChange={(value) => {
          if (value) {
            setSelectedSize(value);
          }
        }}
      >
        {sizes.map((size: string) => (
          <ToggleGroupItem key={size} value={size} className="w-12 text-2xl">
            {size}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
