"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      <div className="">
        <h2 className=" text-4xl font-bold text-center text-gray-900">
          Shipping & Returns
        </h2>
      </div>
      <div className="my-4 text-lg font-normal text-center text-gray-900 flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-left text-gray-900 my-2">
            SHIPPING:
          </h1>
          <ul className="list-disc text-left md:w-2/4">
            <li>Shipping within the U.S only.</li>
            <li>
              Our team is working hard to guarantee your order is shipped as
              soon as possible.
            </li>
            <li>
              Most orders will ship within 1-3 business days. Items in your
              order may ship separately.
            </li>
            <li>
              Average shipping times: Within the US: 3-7 business days (once
              shipped). The above shipping times are estimates only. Actual
              delivery times may vary depending on shipping location.
            </li>
            <li>
              To ensure your package arrives in the advertised time, please make
              sure your address is entered correctly  and includes all required
              and relevant information. Kinda Problematic is not responsible for
              lost, stolen, incorrect address, or misplaced packages.
            </li>
            <li>
              KINDA PROBLEMATIC is not liable for any loss or damage suffered by
              any reasonable or unavoidable delay in delivery.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-center text-gray-900 my-2">
            RETURNS:
          </h1>
          <ul className="list-disc text-left md:w-2/4">
            <li>
              We accept returns of unused and unwashed items with original tags
              purchased on kindaproblematic.com if they are requested within 14
              days of the date your order was delivered.
            </li>
            <li>
              A prepaid return shipping label is provided with in-stock orders
              only. A shipping label can be sent to you by contacting us at
              info@kindaproblematic.com. Please provide your name and order
              number.
            </li>
            <li>
              Returns will be subjected to a $5 shipping fee, which will be
              deducted from your refund.
            </li>
            <li>
              A full refund, excluding shipping charges will be issued to the
              original form of payment.
            </li>
            <li>
              *Please note, refunds may take 3-5 weeks to be processed to the
              original form of payment. We appreciate your patience.
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <p className="flex flex-col justify-center text-center my-10">
        For More Information:
        <Link
          href="/faqs"
          className="underline text-center text-blue-400 cursor-pointer ml-1"
        >
          FAQ
        </Link>
      </p>
    </div>
  );
}
