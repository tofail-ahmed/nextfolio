import React from "react";
import logo from "../../../public/images/Tofail.png"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Link
          href={"/"}
          className="text-xl md:text-3xl text-white font-semibold"
        >
          <Image className="w-[150px]" src={logo} alt="logo" />
        </Link>
        </span>
        <p className="text-white">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
