import Link from "next/link";
import { ShoppingCartLink } from "./ShoppingCartLink";
import { AlterNav } from "./AlterNav";
import { Menu } from "lucide-react";

export default function TopNav() {
  return (
    <nav className="flex flex-row justify-between md:px-10 space-x-1 bg-white h-18 items-center sticky top-0 z-50">
      <AlterNav />
      <Menu color="black" className="md:hidden" />
      <Link href="/shopping-cart">
        <ShoppingCartLink />
      </Link>
    </nav>
  );
}
