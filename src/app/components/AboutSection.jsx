"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

import Header from "./Header";



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div>
      <Header title={"About Me"} />
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
          className="lg:w-[400px] w-[300px] mx-auto"
            src="/images/about-image.png"
            width={400}
            height={400}
            alt=""
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full items-start justify-center">
            {/* <h1 className="text-xl lg:text-3xl text-primary-500 text-start flex">BSc in Engineering Graduate</h1> */}

            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, Typescript, React, NsxtJs, Redux, Node.js, Express,
              Mongodb, Firebase, HTML, CSS, and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set. I am
              a team player and I am excited to work with others to create
              amazing applications.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
