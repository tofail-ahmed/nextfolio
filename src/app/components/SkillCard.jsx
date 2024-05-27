"use client"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript, SiTypescript, SiRedux, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const SkillCard = ({ icon: Icon, className, title, subtitle }) => {
  useEffect(() => {
    AOS.init({
      // offset: -450
    });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className="flex items-center gap-4 p-2 border-2 border-primary-600 rounded-md bg-transparent hover:bg-secondary-600/50 duration-1000">
      <span className={`${className} text-[40px]`}>
        <Icon />
      </span>
      <div>
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default SkillCard;
