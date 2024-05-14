import Image from "next/image";
import React, { useState } from "react";

const ProjectModal = ({ showModal, setShowModal }) => {
  // const [showModal,setShowModal]=useState(false)
  return (
    showModal && (
      <div classNam="bg-slate-400 ">
        <h1 className="text-5xl font-bold text-center p-8">This is Modal</h1>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    )
  );
};

export default ProjectModal;
