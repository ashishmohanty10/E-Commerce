"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const siteroutes = [
  {
    id: 1,
    href: "/products",
    label: "Products",
  },
  {
    id: 2,
    href: "/phonecases",
    label: "Phone Cases",
  },

  {
    id: 3,
    href: "/accessories",
    label: "Accessories",
  },
  {
    id: 4,
    href: "/watch",
    label: "Watches",
  },
];

const SideNav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex items-center gap-5">
        {siteroutes.map((siteroutes) => (
          <Link
            href={siteroutes.href}
            key={siteroutes.id}
            className={cn(
              `text-zinc-400 font-medium hover:text-zinc-50 ${
                pathname === siteroutes.href ? "text-zinc-50" : ""
              }`
            )}
          >
            {siteroutes.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
