import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TopNav() {
  return (
    <nav className="flex flex-row space-x-1 bg-secondary h-14 items-center">
      <Link href="/">Home</Link>
      <DropdownMenu>
        <DropdownMenuTrigger>Collections</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/collections" className="h-full w-full">
              All Collections
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/collections/in-the-mood" className="h-full w-full">
              In the Mood
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/collections/kinda-problematic"
              className="h-full w-full"
            >
              Kinda Problematic
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/collections/social-media" className="h-full w-full">
              Social Media
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/categories" className="h-full w-full">
              All Categories
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href="/categories/hoodies-and-crewnecks"
              className="h-full w-full"
            >
              Hoodies & Crewnecks
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/categories/t-shirt" className="h-full w-full">
              T-Shirts
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/categories/shorts-and-pants" className="h-full w-full">
              Shorts and Pants
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href="/our-story">Our Story</Link>
      <Link href="/contact-us">Contact Us</Link>
      <Link href="/shopping-cart">Shopping Cart</Link>
    </nav>
  );
}
