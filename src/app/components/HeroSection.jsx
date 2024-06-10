"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import profileImg from "../../../public/images/profile_img.png" 
import { MdDownloadForOffline } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-primary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              className="text-xl lg:text-[50px]"
              sequence={[
                "Tofail",
                1000,
                "Web Developer",
                1000,
                "MERN Stack Web Developer",
                1000,
                "Front End Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div>
            <Link
              // href="https://drive.google.com/drive/folders/1nqmC0MKgH13WaqApUtGyaDnQfG1Kwo1J?usp=sharing"
              href="https://drive.google.com/file/d/1wLCgJbaJv42-6E3D63IwaOlWp9-hMhq5/view?usp=sharing"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-primary-600 hover:bg-slate-800 text-white"
            >
              <span className="flex items-center justify-center gap-2">
                <FaEye  className="text-lg lg:text-xl" />
                <p>View Resume</p>
              </span>
            </Link>
            <a
              
              href="https://drive.google.com/uc?export=download&id=1wLCgJbaJv42-6E3D63IwaOlWp9-hMhq5"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-primary-600  hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-tranparent hover:bg-slate-800 rounded-full px-5 py-2">
                <span className="flex items-center justify-center gap-2">
                  <MdDownloadForOffline className="text-lg lg:text-xl" />
                  <p>Download Resume</p>
                </span>
              </span>
            </a>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-full bg-transparent w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] relative border-2 border-primary-600"
          >
            <Image
              src={profileImg}
              alt="hero image"
              className="absolute w-full rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
