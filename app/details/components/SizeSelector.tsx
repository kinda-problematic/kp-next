"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function SizeSelector({ sizes }: { sizes: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectedSize, setSelectedSize] = useState(searchParams.get("size"));

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

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
          router.replace(pathname + "?" + createQueryString("size", value), {
            scroll: false,
          });
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
