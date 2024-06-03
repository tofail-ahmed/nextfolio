"use client";
import Link from "next/link";
import React, { useState ,useEffect} from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import logo from "../../../public/images/Tofail.png"
import Image from "next/image";


const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Skills",
    path: "#skills",
  },
 
];

const Navbar = () => {
  // const [user,setUser]=useState(null)
  
  // const email = "atofail50@gmail.com";
  //  const password = "123456";
  //  const user={
  //   email,password
  //  }

  const [navbarOpen, setNavbarOpen] = useState(false);
  const closeNav = () => {
    setNavbarOpen(false);
  };
  const openNav = () => {
    setNavbarOpen(true);
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#1212124f] backdrop-blur-lg bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image className="lg:w-[150px] w-[100px]" src={logo} alt="logo" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            
            </button>
          )}
        </div>
        <div onClick={closeNav} className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
           {/* {

            user? ( <NavLink href="/" title="Dashboard" />):(<NavLink href="/login" title="Login" />)
           } */}
<NavLink href="/login" title="Login" />
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay  links={navLinks} closeNav={closeNav} /> : null}
    </nav>
  );
};

export default Navbar;
