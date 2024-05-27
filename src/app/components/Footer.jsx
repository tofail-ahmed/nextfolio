import React from "react";
import logo from "../../../public/images/Tofail.png"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container px-12 py-4 flex lg:flex-row flex-col justify-between items-center">
        <span>
        <Link
          href={"/"}
          className="text-xl md:text-3xl text-white font-semibold"
        >
          <Image className="lg:w-[150px] w-[100px]" src={logo} alt="logo" />
        </Link>
        </span>
        <p className="text-white">All rights reserved @ <Link className="text-bold text-primary-600 text-xl" href={"http://tofail-three.vercel.app/"}>Tofail</Link> </p>
      </div>
    </footer>
  );
};

export default Footer;
