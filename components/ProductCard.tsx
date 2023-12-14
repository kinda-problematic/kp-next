import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";

export const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link href={`/details/${product.id}`}>
      <Card
        key={product.id}
        className="w-80 h-[480px] mb-10 flex flex-col justify-start items-center"
      >
        <CardHeader className="mx-auto">
          <Image src={product.images[0]} alt="" width={210} height={300} />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-lg whitespace-nowrap">
            {product.name}
          </CardTitle>
        </CardContent>
        <CardFooter className="flex flex-col">
          <CardDescription>${product.metadata.price}</CardDescription>
          <CardDescription>{product.metadata.sizes}</CardDescription>
        </CardFooter>
      </Card>
    </Link>
  );
};
