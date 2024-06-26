"use client";
import { Button } from "@/components/ui/button";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function QuantitySelector({
  count,
  setCount,
}: {
  count: any;
  setCount: any;
}) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <span className={bebas_neue.className + " text-3xl md:mx-1"}>
        Quantity
      </span>
      <div className="flex flex-row space-x-2">
        <button
          disabled={count === 1}
          className="rounded-full p-1 disabled:bg-gray-500 hover:outline disabled:hover:outline-none"
          onClick={() => {
            const newCount = count - 1;
            setCount(newCount);
          }}
        >
          <MinusCircleIcon size={28} />
        </button>
        <button
          disabled
          className={
            bebas_neue.className + " bg-transparent text-black text-xl w-10"
          }
        >
          {count}
        </button>
        <button
          disabled={count === 10}
          className="rounded-full p-1 disabled:bg-gray-500 hover:outline disabled:hover:outline-none"
          onClick={() => {
            const newCount = count + 1;
            setCount(newCount);
          }}
        >
          <PlusCircleIcon size={28} />
        </button>
      </div>
    </div>
  );
}
