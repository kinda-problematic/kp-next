"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

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
    value: "NEGN",
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

export default function ColorSelector({ colors }: { colors: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [availableColors, setAvailableColors] = useState(
    colors.split(",").map((color: string) => colorMap[color])
  );
  const [selectedColor, setSelectedColor] = useState(
    colorMap[searchParams.get("color") as string].value
  );

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
      <span className="text-3xl md:mx-1 uppercase">color</span>
      <ToggleGroup
        type="single"
        variant="outline"
        value={selectedColor as string}
        onValueChange={(value) => {
          if (value) setSelectedColor(value);
        }}
      >
        {availableColors.map((color: ColorMapEntry) => (
          <ToggleGroupItem
            key={color.name}
            value={color.value}
            className={`${color.bg} rounded-full w-10 h-10 data-[state=on]:${color.bg} data-[state=on]:outline`}
            onClick={() => {
              router.replace(
                pathname + "?" + createQueryString("color", color.name),
                {
                  scroll: false,
                }
              );
            }}
          ></ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
