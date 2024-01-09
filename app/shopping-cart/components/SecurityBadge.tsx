"use client";
import { useState } from "react";
import StripeBadgeTransparent from "@/public/stripe-badge-transparent.png";
import Image from "next/image";
import { LockIcon } from "lucide-react";

export const SecurityBadge = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="flex items-center px-4 py-2 bg-gray-100 text-gray-800 text-sm font-semibold rounded shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <Image
          width={400}
          height={100}
          src={StripeBadgeTransparent}
          alt="Stripe Payment Badge"
        />
      </button>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <LockIcon />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Secure Checkout
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  We use Stripe for secure checkout. Stripe is certified to PCI
                  Service Provider Level 1, the most stringent level of
                  certification available in the payments industry. You can feel
                  confident and safe making purchases with us.
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  onClick={closeModal}
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Okay, got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
