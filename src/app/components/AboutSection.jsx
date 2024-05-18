"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Header from "./Header";

// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Node.js</li>
//         <li>Express</li>
//         <li>PostgreSQL</li>
//         <li>Sequelize</li>
//         <li>JavaScript</li>
//         <li>React</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Fullstack Academy of Code</li>
//         <li>University of California, Santa Cruz</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>AWS Cloud Practitioner</li>
//         <li>Google Professional Cloud Developer</li>
//       </ul>
//     ),
//   },
// ];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="my-8">
      <Header title={"About Me"} />
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
          className="lg:w-[500px] w-[300px] mx-auto"
            src="/images/about-image.png"
            width={500}
            height={500}
            alt=""
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full items-start justify-center">
            {/* <h2 className="text-4xl font-bold text-white mb-4">About Me</h2> */}
            <h1 className="text-xl lg:text-3xl text-primary-500 text-start flex">BSc in Engineering Graduate</h1>

            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, Typescript, React, NsxtJs, Redux, Node.js, Express,
              Mongodb, Firebase, HTML, CSS, and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set. I am
              a team player and I am excited to work with others to create
              amazing applications.
            </p>
            <div className="text-start mt-8">
              {/* <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton> */}
              {/* <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton> */}
              {/* <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton> */}
            </div>
            {/* <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
