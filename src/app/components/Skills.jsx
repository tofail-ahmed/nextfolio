"use client"
import React from "react";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";


import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="text-white">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
        <SkillCard
          title={"Git"}
          subtitle={"Version Controller"}
          className="text-[#EF4444]"
          icon={FaGitAlt}
        />

        <SkillCard
          title={"TailwindCSS"}
          subtitle={"CSS Framework"}
          className="text-blue-500"
          icon={SiTailwindcss}
        />
        <SkillCard
          title={"Javascript"}
          subtitle={"Programming Language"}
          className="text-yellow-500"
          icon={SiJavascript}
        />

        <SkillCard
          title={"Typescript"}
          subtitle={"Programming Language"}
          className="text-blue-500"
          icon={SiTypescript}
        />

        <SkillCard
          title={"React"}
          subtitle={"Frontend Library"}
          className="text-cyan-500"
          icon={FaReact}
        />

        <SkillCard
          title={"NextJs"}
          subtitle={"JS State Container"}
          className="text-white"
          icon={RiNextjsFill}
        />
        <SkillCard
          title={"Redux"}
          subtitle={"CSS Framework"}
          className="text-[#6D28D9]"
          icon={SiRedux}
        />
        <SkillCard
          title={"Firebase"}
          subtitle={"Backend as a Service"}
          className="text-[#F59E0B]"
          icon={IoLogoFirebase}
        />
        <SkillCard
          title={"NodeJs"}
          subtitle={"Javascript Runtime"}
          className="text-[#22C55E]"
          icon={FaNodeJs}
        />
        <SkillCard
          title={"ExpressJs"}
          subtitle={"NodeJs Framework"}
          className="text-[white]"
          icon={SiExpress}
        />
        <SkillCard
          title={"MongoDB"}
          subtitle={"NoSQL Database"}
          className="text-[#22C55E]"
          icon={SiMongodb}
        />
        <SkillCard
          title={"Postman"}
          subtitle={"API Platform"}
          className="text-[#FB923C]"
          icon={SiPostman}
        />
      </div>
    </div>
  );
};

export default Skills;
