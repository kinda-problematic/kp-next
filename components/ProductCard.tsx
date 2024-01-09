import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";

interface ColorMapEntry {
  name: string;
  value: string;
  bg: string;
}

type ColorsMap = {
  [key: string]: ColorMapEntry;
};

const colorMap: ColorsMap = {
  black: {
    name: "black",
    value: "BK",
    bg: "accent-black bg-black",
  },
  white: {
    name: "white",
    value: "WT",
    bg: "bg-white border border-black",
  },
  grey: {
    name: "grey",
    value: "GY",
    bg: "bg-kpgray",
  },
  pink: {
    name: "pink",
    value: "PK",
    bg: "bg-kpPeach",
  },
  hotpink: {
    name: "hotpink",
    value: "PK",
    bg: "bg-kpPink",
  },
  natural: {
    name: "natural",
    value: "NT",
    bg: "bg-kpNatural border border-black",
  },
  blue: {
    name: "blue",
    value: "THB",
    bg: "bg-iconic",
  },
  neonyellow: {
    name: "neonyellow",
    value: "NEGN",
    bg: "bg-neon",
  },
  charcoal: {
    name: "charcoal",
    value: "GY",
    bg: "bg-kpCharcoal",
  },
};

export const ProductCard = ({
  product,
  className,
}: {
  product: any;
  className?: string;
}) => {
  const availableColors = product.metadata.colors
    .split(",")
    .map((color: string) => colorMap[color]);

  return (
    <Link href={`/details/${product.id}`}>
      <Card
        key={product.id}
        className={
          `w-80 h-[480px] mb-8 flex flex-col justify-start items-center shadow-none border-none group hover:border hover:border-white hover:shadow-2xl hover:scale-105 transition-all duration-30 ease-in-out rounded-2xl ` +
          className
        }
      >
        <CardHeader className="mx-auto m-6 group-hover:hidden relative h-[310px] w-[210px]">
          <Image
            src={product.images[0]}
            alt={`Picture of ${product.name}`}
            layout="fill"
            priority={true}
            sizes="(max-width: 210px)"
            className="rounded-md"
          />
        </CardHeader>
        <CardHeader className="mx-auto m-6 hidden group-hover:block relative h-[310px] w-[210px]">
          <Image
            src={product.metadata.hover_image}
            alt={product.name}
            layout="fill"
            priority={true}
            sizes="(max-width: 210px)"
            className="rounded-md"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-lg whitespace-nowrap font-semibold text-center ">
            {product.name}
          </CardTitle>
          <div className="flex flex-row justify-center items-center space-x-2">
            <div className="flex flex-row space-x-1 justify-center items-center">
              {product.metadata.colors.split(",").map((color: any, i: any) => {
                const { bg } = colorMap[color];
                const className =
                  "h-4 w-4 rounded-full appearance-none mx-1 " + bg;

                return <span key={i} className={className}></span>;
              })}
            </div>
            <span>|</span>
            <CardDescription className="text-lg font-bold">
              ${product.metadata.price}
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
