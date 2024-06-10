"use client";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import { toggleDarkMode, setThemeColor } from "@/redux/theme/themeSlice";
import Image from "next/image";
import { useState } from "react";
import CreateModal from "../../../components/ProjectCreateModal";
import UpdateModal from "../../../components/ProjectUpdateModal";
// import { deletefood } from "@/redux/reducers/foodReducer";
import foods from "../../../../../foods.json"
import {toast} from "sonner"
import { useAllProjectQuery } from "@/redux/projects/projectApi";




export default function Projects() {
 
  const {data,isLoading}=useAllProjectQuery('')
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentFoodItem, setCurrentFoodItem] = useState(null);
console.log(data)
  const openCreateModal = () => {
    setShowCreateModal(true);
  };
  const closeCreateModal = () => {
    setShowCreateModal(false);
  };

  const openUpdateModal = (foodItem) => {
    setCurrentFoodItem(foodItem);
    setShowUpdateModal(true);
  };
  const closeUpdateModal = () => {
    setCurrentFoodItem(null);
    setShowUpdateModal(false);
  };

  const handleDelete = (id) => {
    // dispatch(deletefood({ id: id }));
    toast.warning("Deleted method to be implemented yet!!")
  };

  const confirmDelete = (id) => {
    // toast.warning("Deleted method to be implemented yet!!")
    toast.warning(
      <div>
        <p>Are you sure you want to delete this item?</p>
        <div className="flex gap-4">
          <button
            className="bg-red-300 px-2 rounded-md"
            onClick={() => handleDelete(id)}
          >
            Yes
          </button>
         
        </div>
      </div>
    );
  };

if(isLoading){
  return <h1 className="text-center text-4xl font-bold text-green-400">Loading data...</h1>
}

  return (
    <div className="max-w-[1200px] mx-auto overflow-y-auto p-4" >
      {/* <button className="p-2 bg-green-300 rounded-md" onClick={handleDarkMode}>
        {darkMode ? "Light Theme" : "Dark Theme"}
      </button> */}
     
      <button onClick={openCreateModal} className="ml-4 p-2 bg-green-500 rounded-md border-2 border-slate-400">
        Create Food+
      </button>
      {showCreateModal && <CreateModal closeCreateModal={closeCreateModal} />}
      {showUpdateModal && currentFoodItem && (
        <UpdateModal
          closeUpdateModal={closeUpdateModal}
          initialData={currentFoodItem}
        />
      )}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white/0">
          <thead>
            <tr>
              {/* <th className="py-2 px-4 border-b">ID</th> */}
              {/* <th className="py-2 px-4 border-b">Snap</th> */}
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Techs</th>
              <th className="py-2 px-4 border-b">Live</th>
              <th className="py-2 px-4 border-b">Github</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((project) => (
              <tr key={project._id}>
                {/* <td className="py-2 px-4 border-b">{project._id}</td> */}
                {/* <td className="py-2 px-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle">
                        <Image
                          src={project.name}
                          alt={food.name}
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                </td> */}
                <td className="py-2 px-4 border-b">{project.name}</td>
                {/* <td className="py-2 px-4 border-b">{project.description}</td> */}
                <td className="py-2 px-4 border-b">{(project.techs).join(', ')}</td>
                <td className="py-2 px-4 border-b">
                  <a className="text-blue-500 font-semibold" href={project.live}>Live</a>
                </td>
                <td className="py-2 px-4 border-b">
                  <a className="text-blue-500 font-semibold" href={project.github}>Github</a>
                </td>
                
                <td className="py-2 px-4 border-b">
                  <div className="flex flex-col gap-2">
                    <button
                      className="btn btn-info btn-xs"
                      onClick={() => openUpdateModal(project)}
                    >
                      Update
                    </button>
                    <button onClick={() => confirmDelete(project._id)} className="btn btn-error btn-xs">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}