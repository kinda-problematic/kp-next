// import { ITEM_PHOTOS } from "@/constants/item-photos";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ITEM_PHOTOS: { [key: string]: string[] } = {
  BITS: [
    `https://${process.env.AMAZON_S3_URL}/BI-Tshirt/BI_NATURAL_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/BI-Tshirt/BI_NATURAL2.jpg`,
    `https://${process.env.AMAZON_S3_URL}/BI-Tshirt/BI_GRAY.jpg`,
    `https://${process.env.AMAZON_S3_URL}/BI-Tshirt/BI_GRAY_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/BI-Tshirt/BI_GROUP.jpg`,
  ],
  KPPN: [
    `https://${process.env.AMAZON_S3_URL}/KP-Joggers/BLACK_JOGGER_FULL_BODY.jpg`,

    `https://${process.env.AMAZON_S3_URL}/KP-Joggers/FULL_BODY_BLACK_JOGGER.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Joggers/BLACK_JOGGER_FRONT.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Joggers/BLACK_JOGGER_POSE3.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Joggers/BLACK_JOGGER_BACK.jpg`,
  ],
  KPSR: [
    `https://${process.env.AMAZON_S3_URL}/KP-Shorts/WHITE_SHORT_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Shorts/WHITE_OUTFIT_SHORTS.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Shorts/BLACK_SHORTS_SIDE.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Shorts/BLACK_SHORTS_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Shorts/BLACK_WHITE_SHORTS.jpg`,
  ],
  HMTS: [
    `https://${process.env.AMAZON_S3_URL}/HM-Tshirt/HM_JANE_FRONT.jpg`,
    `https://${process.env.AMAZON_S3_URL}/HM-Tshirt/HM_JANE_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/HM-Tshirt/HM_GRAY_FRONT.jpg`,
    `https://${process.env.AMAZON_S3_URL}/HM-Tshirt/HM_GRAY_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/HM-Tshirt/HM_GROUP_PHOTO.jpg`,
  ],
  YNMTS: [
    `https://${process.env.AMAZON_S3_URL}/INYM-tshirt/INYM_BACK_BLACK2.jpg`,
    `https://${process.env.AMAZON_S3_URL}/INYM-tshirt/INYM_COUPLE_FRONT.jpg`,
    `https://${process.env.AMAZON_S3_URL}/INYM-tshirt/PINK_FRONT2_INYM.jpg`,
    `https://${process.env.AMAZON_S3_URL}/INYM-tshirt/INYM_COUPLE2_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/INYM-tshirt/INYM_GROUP.jpg`,
  ],
  ICTS: [
    `https://${process.env.AMAZON_S3_URL}/Iconic-TS/ICONIC_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/Iconic-TS/ICONIC_FRONT_POSE.jpg`,
    `https://${process.env.AMAZON_S3_URL}/Iconic-TS/ICONIC_MAN_STANDING.jpg`,
    `https://${process.env.AMAZON_S3_URL}/Iconic-TS/ICONIC_MAN.jpg`,
  ],
  AQTS: [
    `https://${process.env.AMAZON_S3_URL}/AQ-Tshirts/AQ_PINK_FRONT.jpg`,
    `https://${process.env.AMAZON_S3_URL}/AQ-Tshirts/AQ_PINK_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/AQ-Tshirts/AQ_BLACK_FRONT.jpg`,
    `https://${process.env.AMAZON_S3_URL}/AQ-Tshirts/AQ_BLACK_POSE.jpg`,
    `https://${process.env.AMAZON_S3_URL}/AQ-Tshirts/AQ_BACK_BLACK.jpg`,
  ],
  AQCPCK: [
    `https://${process.env.AMAZON_S3_URL}/AQ-Crewneck/AQ_CREWNECK_FRONT.jpg`,
    `https://${process.env.AMAZON_S3_URL}/AQ-Crewneck/AQ_CREWNECK_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/AQ-Crewneck/AQ_CK_FRONT_POSE.jpg`,
    `https://${process.env.AMAZON_S3_URL}/AQ-Crewneck/AQ_POSE_CK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/AQ-Crewneck/AQ_CK_GIRLS.jpg`,
  ],
  KPNCK: [
    `https://${process.env.AMAZON_S3_URL}/KP-CK-NEON/KP_NEON_BOY.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-CK-NEON/KP_NEON_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-CK-NEON/FRONT_NEON.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-CK-NEON/KP_CK_NEON_POSE.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-CK-NEON/KP_NEON_FIRLS.jpg`,
  ],
  KPCK: [
    `https://${process.env.AMAZON_S3_URL}/KP-Crewneck/CREWNECK_NUDE_PSOE.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Crewneck/KP_CREWNECK_NATURAL_CLSEUP.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Crewneck/CREWNECK_NUDE_BACK.jpg`,

    `https://${process.env.AMAZON_S3_URL}/KP-Crewneck/CREWNECK_GRAY_FRONT.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Crewneck/CREWNECK_GRAY_BACK2.jpg`,
  ],
  KPHD: [
    `https://${process.env.AMAZON_S3_URL}/KP-Hoodies/KP_BLACK_HOODIE_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Hoodies/KP_HOODIE_DUO.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Hoodies/WHITE_HOODIE_FRONT2.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Hoodies/WHITE_HOODIE_POSE.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Hoodies/KP_HOODIE_GROUP.jpg`,
  ],
  KPTS: [
    `https://${process.env.AMAZON_S3_URL}/KP-Tshirts/KP_TS_FRONT.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Tshirts/KP_FRONT_TS.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Tshirts/KP_TS_BACK.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Tshirts/KP_TS_POSE.jpg`,
    `https://${process.env.AMAZON_S3_URL}/KP-Tshirts/KP_TS_POSE2.jpg`,
  ],
};

export const PhotoList = ({
  productImages,
  skuPrefix,
  skuSuffix,
}: {
  productImages: string[];
  skuPrefix: string;
  skuSuffix: string;
}) => {
  const urlList = [...productImages, ...ITEM_PHOTOS[skuPrefix + skuSuffix]];

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
                className="rounded-lg mx-auto my-auto"
                priority={true}
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
