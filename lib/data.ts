
type Link = {
    label: string;
    href: string;
  };

export const links: Link[] = [
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ] as const;