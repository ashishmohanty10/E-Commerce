"use client";
import { cn } from "@/utils/cn";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import {
  HiArrowSmRight,
  HiShoppingCart,
  HiOutlineXCircle,
} from "react-icons/hi";

const siteroutes = [
  {
    href: "/products",
    label: "Products",
    requiredAuth: true,
  },
  {
    href: "/phonecases",
    label: "Phone Cases",
    requiredAuth: true,
  },

  {
    href: "/accessories",
    label: "Accessories",
    requiredAuth: true,
  },
  {
    href: "/watch",
    label: "Watches",
    requiredAuth: true,
  },
  {
    href: "/cart",
    label: <HiShoppingCart size={24} />,
    requiredAuth: true,
  },
];

const SideNav = () => {
  const pathname = usePathname();
  const { isAuthenticated, user, isLoading } = useKindeBrowserClient();

  return (
    <nav>
      <ul className="flex items-center gap-5">
        {siteroutes.map(({ href, label, requiredAuth }) => {
          if (requiredAuth && !isAuthenticated) {
            return null;
          }
          return (
            <>
              <Link
                href={href}
                key={href}
                className={cn(
                  `text-zinc-400 font-medium hover:text-zinc-50 ${
                    pathname === href ? "text-zinc-50" : ""
                  }`
                )}
              >
                {label}
              </Link>
            </>
          );
        })}

        <div>
          {isLoading && !(pathname === "/") && (
            <div className="animate-spin rounded-full h-7  w-7 border-white/50 mx-auto my-2"></div>
          )}

          <div className="cursor-pointer relative">
            {user?.picture && (
              <Image
                src={user?.picture}
                alt="profile picture"
                width={30}
                height={30}
                className="rounded-full mx-auto my-2"
              />
            )}
          </div>

          {user && !user.picture && (
            <>
              <div className="h-7 w-7 rounded-full mx-auto bg-zinc-800 text-xs cursor-pointer">
                {user?.given_name}
              </div>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default SideNav;
