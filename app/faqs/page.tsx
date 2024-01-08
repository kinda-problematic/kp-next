"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqI {
  trigger: string;
  content: string;
  extraContent?: string[];
}

const FaqInfo: FaqI[] = [
  {
    trigger: "What Payment Methods Do You Accept?",
    content:
      "We accept all major debit and credit cards from customers in the US!",
  },
  {
    trigger: "Do You Offer Free Shipping?",
    content: "Yep! But currently we only ship within the US.",
  },
  {
    trigger: "Do You Offer Expedited Shipping?",
    content:
      "At this time, we do not offer expedited shipping options. Although we would like to be able to offer it in the future!",
  },
  {
    trigger: "Do You Ship Internationally?",
    content:
      "Currently we only ship in the U.S, but are hoping to expand internationally soon!",
  },
  {
    trigger: "Do You Ship To PO Boxes?",
    content:
      "We are unable to ship to PO Boxes. We ask that you please use an alternate address at checkout.",
  },
  {
    trigger: "How Long Will It Take To Receive My Order?",
    content: "Most orders will ship within 1-3 business days.",
    extraContent: [
      "Our team is working hard to guarantee your order is shipped as soon as possible. Items in your order may ship separately.",
      "Average shipping times: Within the US: 3-7 business days (once shipped).",
      "The above shipping times are estimates only. Actual delivery times may vary depending on shipping location. KINDA PROBLEMATIC is not liable for any loss or damage suffered by any reasonable or unavoidable delay in delivery.",
    ],
  },
  {
    trigger: "How Do I Track My Order?",
    content:
      "Once your order has shipped, you will receive a shipping confirmation via email.",
    extraContent: [
      "If you are unable to locate this email, or believe you have yet to recieve your tracking details, please email us at info@kindproblematic.com",
    ],
  },
  {
    trigger: "What Is Your Return Policy?",
    content:
      "We accept returns of unused and unwashed items purchased on kindaproblematic.com if they are requested within 14 days of the date your order was delivered.",
    extraContent: [
      "Returns will be subjected to a $5 shipping fee, which will be deducted from your refund.",
      "If you have a question that is not addressed, please feel free to contact us at info@kindaproblematic.com.",
    ],
  },
  {
    trigger: "How Can I Recieve A Prepaid Return Shipping Label?",
    content:
      "1. A prepaid return shipping label is provided with in-stock orders only. A replacement shipping label can be sent to you by contacting us at info@kindaproblematic.com. Please provide your name and order number.",
    extraContent: [
      "2. Refunds are processed based on applicable product and tax charges. Original shipping charges are not refunded. Refunds are issued to the original form of payment.",
    ],
  },
  {
    trigger: "How Do I Return My Purchase?",
    content:
      "1. Pack and seal the product securely in your original bag or any clean cardboard shipping box. Please make sure the weight is comparable with original packing, otherwise the shipping label will not cover the cost for shipping.",
    extraContent: [
      "2. Attach the prepaid return label to the outside of the return package (make sure to cover or remove any old shipping labels).",
      "3. Take a picture of the label for your records, or write down the return tracking number from the label.",
      "4. Take the package to the shipping carrier (UPS, USPS, etc).",
    ],
  },
  {
    trigger: "How Long Does A Return Take To Process?",
    content:
      "A full refund, excluding shipping charges, will be issued on unworn merchandise sent back within 14 days of being delivered.",
    extraContent: [
      "A refund will be issued to the original form of payment.",
      "*Please note, refunds may take 3-5 weeks to be processed to the original form of payment. We appreciate your patience and understanding.",
    ],
  },
  {
    trigger: "Can I Cancel Or Modify My Order?",
    content:
      "We begin processing your order immediately upon receipt. For this reason, we will not be able to cancel or modify your order once it has been placed. If you decide you do not want the item(s) you have ordered, please follow the return instructions above.",
  },
  {
    trigger: "What Happens If My Package Gets Lost?",
    content: "Please email us at support@kindaproblematic.com.",
    extraContent: [
      "If your package is lost in transit, we will do everything we possibly can to assist you. However, we are not responsible for packages if there is proof of delivery.",
    ],
  },
  {
    trigger: "What Should I Do If My Item Is Damaged Or Defective?",
    content:
      "Please email us at info@kindaproblematic.com with your order number and a short description of the issue. Please also include photos so we may better assist you.",
  },
  {
    trigger: "How Do I Unsubscribe From Your Email List?",
    content:
      "Click the “unsubscribe” link at the bottom of any of our emails. If you need any further assistance, please email us at info@kindaproblematic.com to unsubscribe.",
  },
];

export default function Page() {
  return (
    <div className="md:px-40 m-10">
      <h2 className={"text-center text-5xl mb-8"}>FAQs</h2>
      <Accordion type="single" collapsible className="w-full mb-10">
        {FaqInfo.map((item: FaqI, i: any) => (
          <AccordionItem value={item.trigger} key={i}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>
              <p>{item.content}</p>
              {item.extraContent
                ? item.extraContent.map((content: string, i: any) => (
                    <p key={i}>{content}</p>
                  ))
                : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
