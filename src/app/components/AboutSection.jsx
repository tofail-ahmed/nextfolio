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

            <p className="text-sm text-justify">
            I am Tofail Ahmed, a frontend web developer from Chittagong, Bangladesh. With a strong passion for web development, I specialize in ReactJS and NextJS, focusing on creating visually appealing and efficient web solutions. My expertise includes JavaScript, TypeScript, Redux, and various modern web technologies, which enable me to build responsive and user-friendly interfaces.
<br />
            Collaboration and innovation are at the core of my work ethic. I thrive in dynamic environments where teamwork drives success, and I am dedicated to exceeding client expectations through meticulous attention to detail and a deep understanding of user experience principles.
<br />
            Feel free to explore my projects on GitHub and connect with me on LinkedIn.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
