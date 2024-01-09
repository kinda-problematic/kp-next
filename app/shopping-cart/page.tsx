"use client";
import { useShoppingCart } from "@/context/shopping-cart";
import {
  MinusSquareIcon,
  PlusSquareIcon,
  ShoppingCartIcon,
  XSquareIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { track } from "@vercel/analytics/react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { useState } from "react";
import { SecurityBadge } from "./components/SecurityBadge";

export const bebas_neue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

interface TableHeaderI {
  label: string;
  width: string;
}

const tableHeaders: TableHeaderI[] = [
  { label: "Items", width: "40%" },
  { label: "Quantity", width: "10%" },
  { label: "Subtotal", width: "10%" },
  { label: "Remove", width: "10%" },
];

function calculateSubtotal(shoppingCart: any[]): string {
  let subtotal = 0;

  shoppingCart.forEach((item) => {
    const price = parseFloat(item.metadata.price);
    if (!isNaN(price)) {
      // Check if the price is a valid number
      subtotal += price;
    }
  });

  return subtotal.toFixed(2);
}

const discountCodes: any[] = [
  {
    name: "HOODIESZN",
    discount: 0.85,
  },
  {
    name: "KPDROP",
    discount: 0.9,
  },
];

export default function ShoppingCart() {
  const cartContext = useShoppingCart();
  const itemCounts = new Map();
  const uniqueItems = cartContext.shoppingCart.reduce((acc, item) => {
    itemCounts.set(item.id, (itemCounts.get(item.id) || 0) + 1);

    if (itemCounts.get(item.id) === 1) {
      acc.push({ ...item, count: 1 });
    } else {
      const existingItem = acc.find((i: any) => i.id === item.id);
      if (existingItem) existingItem.count++;
    }

    return acc;
  }, []);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeApplied, setPromoCodesApplied] = useState([]);
  const availablePromoCodes = ["HOODIESZN", "KPDROP"];

  return (
    <div className="py-20 flex flex-col items-center justify-start min-h-screen">
      <h2 className={" text-6xl mb-4 text-center"}>Shopping Cart</h2>
      {cartContext.shoppingCart.length === 0 ? (
        <div className="flex flex-col items-center justify-start min-h-screen">
          <div className="h-3/5 w-full flex flex-col justify-center items-center space-y-4">
            <h2 className="text-2xl text-center text-black">
              Your cart is empty, go fill it up!
            </h2>
            <div className="flex flex-col justify-center items-center space-y-4">
              <ShoppingCartIcon
                size={400}
                className="bg-kpCharcoal w-36 h-36 rounded-3xl shadow-glowy-sm-360-lg p-4 text-white"
              />
              <div className="flex flex-col justify-center space-y-4 items-center w-full">
                <Link
                  href="/collections"
                  className={
                    "text-lg w-full text-center bg-purple-300 hover:text-white hover:bg-red-600 px-10 py-4 rounded-full text-black"
                  }
                >
                  Check out our Collections
                </Link>
                <Link
                  href="/categories"
                  className="text-lg w-full text-center bg-purple-300 hover:text-white hover:bg-red-600 px-10 py-4 rounded-full text-black"
                >
                  Shop according to Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center px-4 md:px-36">
          <div className="flex flex-row space-x-4"></div>
          <Table className="text-black">
            <TableHeader>
              <TableRow>
                {tableHeaders.map((item: any, i: any) => (
                  <TableHead key={i}>{item.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {uniqueItems.map((item: any, i: any) => {
                return item ? (
                  <TableRow key={i}>
                    <TableCell className={`font-medium w-[400px]`}>
                      <span className="flex flex-col md:flex-row items-center md:space-x-4">
                        <Image
                          className="mr-4"
                          src={item.images[0]}
                          width={40}
                          height={60}
                          alt={`Photo of ${item.name}`}
                        />
                        {item.name}
                      </span>
                    </TableCell>
                    <TableCell
                      className={`flex flex-col-reverse items-center justify-center space-y-1 md:flex-row md:justify-start md:items-center md:space-x-2 md:space-y-0 w-[200px]`}
                    >
                      <Button
                        className="p-0 w-10 h-10"
                        onClick={() => {
                          const itemCopy = item;
                          delete itemCopy.count;

                          cartContext.removeFromCart(itemCopy);
                        }}
                      >
                        <MinusSquareIcon />
                      </Button>
                      <span className="w-10 text-center">{item.count}</span>
                      <Button
                        className="p-0 w-10 h-10"
                        onClick={() => {
                          const itemCopy = item;
                          delete itemCopy.count;

                          cartContext.addToCart(itemCopy);
                        }}
                      >
                        <PlusSquareIcon />
                      </Button>
                    </TableCell>
                    <TableCell className="w-[100px]">
                      ${(item.metadata.price * item.count).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button
                        className="p-0 w-10 h-10 bg-red-600"
                        onClick={() => {
                          const itemCopy = item;
                          delete itemCopy.count;
                          const itemsToRemove = new Array(item.count).fill(
                            itemCopy
                          );

                          cartContext.removeFromCart(itemsToRemove);
                        }}
                      >
                        <XSquareIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ) : null;
              })}
              <TableRow>
                <TableCell className="text-left">
                  Total Quantity:
                  <span className="ml-2">
                    {cartContext.shoppingCart.length}
                  </span>
                </TableCell>
                <TableCell>
                  Pre-tax total: ${calculateSubtotal(cartContext.shoppingCart)}
                </TableCell>
                <TableCell className="font-medium"></TableCell>
                <TableCell>
                  <Button
                    className="bg-red-600"
                    onClick={() => {
                      cartContext.removeFromCart("all");
                    }}
                  >
                    Clear Cart
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex flex-col items-center">
            <Button
              className={
                bebas_neue.className +
                " p-8 bg-green-600 rounded-2xl text-3xl tracking-wider m-4"
              }
            >
              <Link
                href="/checkout"
                onClick={() =>
                  track("Checkout", {
                    cart: JSON.stringify(cartContext.shoppingCart),
                  })
                }
                className="new-shadow"
              >
                Checkout
              </Link>
            </Button>
            <SecurityBadge />
            <span className="text-center italic">
              **Enjoy free shipping! US Only**
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
