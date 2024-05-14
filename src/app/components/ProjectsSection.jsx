"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Header from "./Header";
import athletic from "../../../public/images/projects/me/athletic_excel-home.jpg";
import campus from "../../../public/images/projects/me/campus_guru_home.jpg";
import event from "../../../public/images/projects/me/event360_home.jpg";
import fyto from "../../../public/images/projects/me/fyto_home.jpg";
import kiddo from "../../../public/images/projects/me/kiddo_valley_home.jpg";
import quisinne from "../../../public/images/projects/me/quisinne_home.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: event,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: campus,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: fyto,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: athletic,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: kiddo,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: quisinne,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  //--------------slicker slider setting------------
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    // <section id="projects" className="my-8">
    //   {/* <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
    //     My Projects
    //   </h2> */}
    //   <Header title={"My Projects"}/>
    //   <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
    //     <ProjectTag
    //       onClick={handleTagChange}
    //       name="All"
    //       isSelected={tag === "All"}
    //     />
    //     <ProjectTag
    //       onClick={handleTagChange}
    //       name="Web"
    //       isSelected={tag === "Web"}
    //     />
    //     <ProjectTag
    //       onClick={handleTagChange}
    //       name="Mobile"
    //       isSelected={tag === "Mobile"}
    //     />
    //   </div>
    //   <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
    //     {filteredProjects.map((project, index) => (
    //       <motion.li
    //         key={index}
    //         variants={cardVariants}
    //         initial="initial"
    //         animate={isInView ? "animate" : "initial"}
    //         transition={{ duration: 0.3, delay: index * 0.4 }}
    //       >
    //         <ProjectCard
    //           key={project.id}
    //           title={project.title}
    //           description={project.description}
    //           imgUrl={project.image}
    //           gitUrl={project.gitUrl}
    //           previewUrl={project.previewUrl}
    //         />
    //       </motion.li>
    //     ))}
    //   </ul>
    // </section>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <Image src={fyto} alt="fyto"/>
        </div>
        <div>
        <Image src={kiddo} alt="fyto"/>
        </div>
        <div>
        <Image src={event} alt="fyto"/>
        </div>
        <div>
        <Image src={quisinne} alt="fyto"/>
        </div>
        <div>
        <Image src={event} alt="fyto"/>
        </div>
        <div>
        <Image src={campus} alt="fyto"/>
        </div>
        <div>
        <Image src={athletic} alt="fyto"/>
        </div>
        <div>
        <Image src={quisinne} alt="fyto"/>
        </div>
      </Slider>
    </div>

  );
};

export default ProjectsSection;
