"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  AlterNavLink,
  ALTER_NAV_ITEMS_COLLECTIONS,
  ALTER_NAV_ITEMS_CATEGORIES,
  ALTER_NAV_ITEMS_ABOUT_US,
} from "@/constants/top-nav-dropdown-items";
import KpLogo from "@/public/kp-logo.svg";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MenuSquare, ShoppingCartIcon } from "lucide-react";
import { useShoppingCart } from "@/context/shopping-cart";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        {/* @ts-ignore */}
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const AlterNav = () => {
  const shoppingCart = useShoppingCart();

  return (
    <NavigationMenu className="capitalize bg-white sticky top-0 drop-shadow-md overflow-x-clip">
      <NavigationMenuList className="w-screen flex-row justify-between px-6">
        <div className="flex flex-row justify-between items-center">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + " hover:bg-white"}
              >
                <Image
                  src={KpLogo}
                  alt="Home"
                  className="w-[180px] pt-7 -ml-10 rotate-3"
                />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {ALTER_NAV_ITEMS_COLLECTIONS.map((item: AlterNavLink) => {
                  return item.title === "all collections" ? (
                    <li className="row-span-3" key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex bg-sm hover:bg-sm2 h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                          href={item.href}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            {item.title}
                          </div>
                          <p className="text-sm leading-tight text-white">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ) : (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {ALTER_NAV_ITEMS_CATEGORIES.map((item: AlterNavLink) => {
                  return item.title === "all categories" ? (
                    <li className="row-span-3" key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="bg-itm hover:bg-itm2 transition duration-300 ease-in-out flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                          href={item.href}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            {item.title}
                          </div>
                          <p className="text-sm leading-tight text-white">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ) : (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {ALTER_NAV_ITEMS_ABOUT_US.map((item: AlterNavLink) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </div>
        <NavigationMenuItem className="absolute left-1/2 translate-x-1/2 md:hidden">
          <NavigationMenuTrigger>
            <MenuSquare />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ScrollArea className="max-h-[600px] overflow-y-scroll">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {[
                  ALTER_NAV_ITEMS_COLLECTIONS,
                  ALTER_NAV_ITEMS_CATEGORIES,
                  ALTER_NAV_ITEMS_ABOUT_US,
                ]
                  .flat()
                  .map((item: AlterNavLink) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
              </ul>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/shopping-cart" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="relative">
                <ShoppingCartIcon size={36} />
                <p className="absolute bottom-0 bg-red-500 text-white rounded-full h-5 w-5 text-sm text-center justify-center items-center flex">
                  {shoppingCart.shoppingCart.length}
                </p>
              </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
