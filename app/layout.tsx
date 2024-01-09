import type { Metadata } from "next";
import { ShoppingCartProvider } from "@/context/shopping-cart";
import { Analytics } from "@vercel/analytics/react";

import { Inter, Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import { AlterNav } from "@/components/AlterNav";
import Footer from "@/components/Footer";

export const inter = Inter({ subsets: ["latin"] });
export const bebas_neue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
export const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinda Problematic | Unapologetically Bold Fashion",
  description: "Discover Kinda Problematic's unique fashion line that celebrates individuality and self-expression. Our collection, ranging from distinctive hoodies to comfortable joggers, is crafted to empower and inspire. Join our movement, embrace your unique style, and make a statement with every piece you wear.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <ShoppingCartProvider>
          <AlterNav />
          <div>{children}</div>
          <Footer />
          <Analytics />
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
