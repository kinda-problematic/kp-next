"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ITEM_PHOTOS } from "@/constants/item-photos";
import Image from "next/image";
import { useState } from "react";

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
    <div className="flex flex-col-reverse justify-center items-center w-full md:flex-row md:justify-end md:items-start">
      <ScrollArea className="h-[600px] hidden md:block">
        <div className="flex justify-center items-center md:flex-col md:items-center md:justify-between space-x-2 md:space-y-4 m-4">
          {urlList.map((url, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(url)}
              className={`min-w-[60px] focus:outline-none ${
                url === selectedImage
                  ? "ring-2 ring-offset-2 rounded-lg ring-black"
                  : "hover:ring-2 hover:ring-gray-300"
              }`}
            >
              <Image
                src={url}
                alt={`Thumbnail ${i}`}
                width={55}
                height={55}
                className="rounded-lg cursor-pointer mx-auto"
                objectFit="cover"
              />
            </button>
          ))}
        </div>
      </ScrollArea>
      <div className="flex justify-center items-center md:flex-col md:items-center md:justify-center space-x-2 md:space-y-4 m-4 md:hidden">
        {urlList.map((url, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(url)}
            className={`min-w-[60px] focus:outline-none ${
              url === selectedImage
                ? "ring-2 ring-offset-2 rounded-lg ring-black"
                : "hover:ring-2 hover:ring-gray-300 rounded-lg"
            }`}
          >
            <Image
              src={url}
              alt={`Thumbnail ${i}`}
              width={60}
              height={60}
              className="rounded-lg cursor-pointer mx-auto"
              objectFit="cover"
            />
          </button>
        ))}
      </div>
      <div className="h-[600px] md:min-w-[400px] flex justify-center items-center overflow-hidden">
        <Image
          src={selectedImage}
          alt="Selected Image"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
          }}
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
