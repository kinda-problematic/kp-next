"use client";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [signUpLabel, setSignUpLabel] = useState("Sign Up");
  const signUp = async (e: any) => {
    setSignUpLabel("Signing Up...");
    e.preventDefault();

    await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });

    setSignUpLabel("Signed Up!");
    setEmail("");
  };

  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600 w-full">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <h6 className="uppercase font-semibold flex items-center justify-center md:justify-start">
              Subscribe to our Emails and use code KPDROP for 10% off your
              order!
            </h6>
            <form className="max-w-sm p-">
              <div className="flex items-center border-b border-black py-2 mr-7 mt-6">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="example@gmail.com"
                  aria-label="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="flex-shrink-0 bg-black hover:bg-white hover:disabled:bg-black hover:disabled:text-white border-black hover:border-black hover:text-black text-sm border-2 text-white py-2 px-3 rounded "
                  type="button"
                  onClick={signUp}
                  disabled={signUpLabel === "Signed Up!"}
                >
                  {signUpLabel}
                </button>
              </div>
            </form>
          </div>
          <div className="md:ml-10">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start items-center">
              Shop
            </h6>
            <p className="mb-4">
              <Link
                href="/categories/hoodies-and-crewnecks"
                className="text-gray-600 hover:underline"
              >
                Hoodies & Crewnecks
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href="/categories/t-shirt"
                className="text-gray-600 hover:underline"
              >
                T-Shirts
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href="/categories/shorts-and-pants"
                className="text-gray-600 hover:underline"
              >
                Shorts & Pants
              </Link>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Support
            </h6>
            {/* <p className="mb-4">
              <a href="/faq" className="text-gray-600">
                FAQ
              </a>
            </p> */}
            {/* <p className="mb-4">
              <a href="/shipping-returns" className="text-gray-600">
                Shipping & Returns
              </a>
            </p> */}
            <p>
              <a
                href="/contact-us"
                className="text-gray-600 mb-4 hover:underline"
              >
                Help
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <Link href="/contact">
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                info@kindaproblematic.com
              </p>
            </Link>
            <p>
              <a
                href="https://instagram.com/kindaproblematicstore?igshid=YjNmNGQ3MDY="
                className="mr-6 text-gray-600 flex items-center justify-center md:justify-start mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-5 w-4 mr-4"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
                @kindaproblematicstore
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-white">
        <div className="lg:block flex-row">
          <span
            className="
        uppercase
        font-semibold
        mb-8
        text-gray-700
       "
          >
            Follow us on social media!
          </span>
        </div>
        <div className="flex justify-center p-2">
          <a href="https://pin.it/5pVla2Z" className="mr-6 text-black">
            {/* <PinLogo className=" text-black w-5 h-5" /> */}
          </a>
          <a
            href="https://instagram.com/kindaproblematicstore?igshid=YjNmNGQ3MDY="
            className="mr-6 text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 h-5"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@kindaproblematicstore?_t=8acjZ68FODS&_r=1"
            className="mr-6 text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 h-5"
            >
              <path
                fill="currentColor"
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
              />
            </svg>
          </a>
        </div>
        <div className="w-full p-2">
          <span className="w-full text-right text-gray-700 mr-1">2023</span>
          <a className="text-gray-700 font-semibold w-full text-right">
            Ontologic Design
          </a>
        </div>
      </div>
    </footer>
  );
}
