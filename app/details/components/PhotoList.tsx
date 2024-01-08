"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ITEM_PHOTOS } from "@/constants/item-photos";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PhotoList = ({
  productImages,
  skuPrefix,
  skuSuffix,
}: {
  productImages: string[];
  skuPrefix: string;
  skuSuffix: string;
}) => {
  const [urlList, setUrlList] = useState([
    ...productImages,
    ...ITEM_PHOTOS[skuPrefix + skuSuffix],
  ]);
  const [selectedImage, setSelectedImage] = useState(urlList[0]);

  return (
    <div>
      <Carousel className="p-4 hidden md:block mb-8">
        <CarouselContent>
          {urlList.map((url, i) => (
            <CarouselItem key={i} className="basis-full flex">
              <Image
                src={url}
                alt={`Thumbnail ${i}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
                width={400}
                height={400}
                className="rounded-lg mx-auto my-auto m-4"
                objectFit="cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      <Carousel className="md:hidden my-8">
        <CarouselContent>
          {urlList.map((url, i) => (
            <CarouselItem key={i} className="basis-full">
              <Image
                src={url}
                alt={`Thumbnail ${i}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
                width={400}
                height={400}
                className="rounded-lg mx-auto"
                objectFit="cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
