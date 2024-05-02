import ClientImage from "@/components/ClientImage";

export default function OurStory() {
  const s3url = process.env.AMAZON_S3_URL;

  return (
    <div>
      <div
        className={`w-full bg-[url(https://${s3url}/ABOUT_US_OUTSIDE.jpeg)] bg-contain bg-no-repeat h-[36vh] md:bg-cover md:h-[80vh]`}
      />
      <div>
        <h2 className="border text-2xl bg-black text-white uppercase text-center rounded md:mt-4 py-2 mb-5">
          Our Story
        </h2>
        <div className="flex flex-col">
          <div className=" flex-col md:flex-row flex items-center justify-center md:mx-10 ">
            <ClientImage
              src={`https://${process.env.AMAZON_S3_URL}/KP_OWNER_PHOTO.jpg`}
              className="flex flex-row w-80"
            />
            <div className=" flex-row flex justify-start items-center mx-10">
              <p className="font-semibold my-5 md:my-8 text-justify md:w-[85%] text-lg md:mx-7">
                Kinda Problematic (KP) is a U.S. based fashion brand started in
                2023. KP’s founder is a mental health therapist who created the
                brand to promote authenticity and to normalize the mental health
                life challenges which we all go through. Inspired by American
                wardrobe essentials with a hint of Brazilian design, KP offers
                good quality comfortable fabrics with great style.
              </p>
            </div>
          </div>
        </div>
        <hr className=" my-4 md:my-7 h-1 bg-slate-800" />
        <div className="flex flex-col">
          <div className=" flex-col md:flex-row flex items-center justify-center md:mx-10 ">
            <p className="font-semibold my-4 md:my-8 text-justify w-[85%] text-lg mx-7 md:pb-16">
              Our mission is to break stigmas by celebrating and accepting our
              differences, and by creating clothing that make you feel good in
              your own skin. Kinda of problematic – who isn’t? There is only one
              of you in this whole wide world, and if you are human, Kinda
              Problematic is the standard – so dare to be you!
            </p>
            <ClientImage
              src={`https://${process.env.AMAZON_S3_URL}/KP_GIRLS_STANDING.jpg`}
              className="flex flex-row w-80 mb-10 mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
