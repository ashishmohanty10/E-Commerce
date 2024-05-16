import Image from "next/image";
import React from "react";
import NextLogo from "../../public/next.svg";
import Link from "next/link";
import SideNav from "./SideNav";
const Header = () => {
  return (
    <div className="h-[7vh] flex items-center justify-between">
      <div>
        <Link href={"/"}>
          <Image src={NextLogo} alt="Brand Logo" className="w-[100px]" />
        </Link>
      </div>

      <div>
        <SideNav />
      </div>
    </div>
  );
};

export default Header;
