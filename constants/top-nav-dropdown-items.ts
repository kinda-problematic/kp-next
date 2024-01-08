export interface AlterNavLink {
  title: string;
  href: string;
  description: string;
}

export const ALTER_NAV_ITEMS_COLLECTIONS: AlterNavLink[] = [
  {
    title: "all collections",
    href: "/collections",
    description: "Check out all our collections at once!",
  },
  {
    title: "in the mood",
    href: "/collections/in-the-mood",
    description: "Moody? Don't stress it, we have you covered.",
  },
  {
    title: "kinda problematic",
    href: "/collections/kinda-problematic",
    description: "Embrace yourself in full! Get cozy with the KP collection.",
  },
  {
    title: "social media",
    href: "/collections/social-media",
    description: "Rack up those likes and stay iconic.",
  },
];

export const ALTER_NAV_ITEMS_CATEGORIES: AlterNavLink[] = [
  {
    title: "all categories",
    href: "/categories",
    description: "Check out all our categories at once!",
  },
  {
    title: "hoodies & crewnecks",
    href: "/categories/hoodies-and-crewnecks",
    description:
      "It's cold outside, but you won't be with our hoodies and crewnecks.",
  },
  {
    title: "t-shirts",
    href: "/categories/t-shirt",
    description:
      "Primed for comfort and style, our t-shirts will get you right.",
  },

  {
    title: "shorts & pants",
    href: "/categories/shorts-and-pants",
    description:
      "Whether you're looking to lounge or sweat, we have what you want.",
  },
];

export const ALTER_NAV_ITEMS_ABOUT_US: AlterNavLink[] = [
  {
    title: "our story",
    href: "/our-story",
    description: "Learn more about Kinda Problematic and our journey.",
  },
  {
    title: "contact us",
    href: "/contact-us",
    description: "Send us an email and let us know how you feel!",
  },
  {
    title: "FAQs",
    href: "/faqs",
    description: "Got any questions? Check out our FAQs to get them answered!",
  },
  {
    title: "shipping and returns",
    href: "/shipping-and-returns",
    description: "Find information about our shipping policies!"
  }
];
