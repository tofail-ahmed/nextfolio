import { useCreateProjectMutation } from "@/redux/projects/projectApi";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ProjectCreateModal = ({ closeCreateModal }) => {
  const [createProject, { data, isLoading, isSuccess, isError }] = useCreateProjectMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      techs: data.techs.split(',').map(tech => tech.trim()),
    };
    createProject(formattedData);
    console.log(formattedData);
  };

  useEffect(() => {
    if (isLoading) {
      toast("Project is being added, please wait...");
    }
    if (isSuccess) {
      toast.success("Project added successfully");
      closeCreateModal();
    }
    if (isError) {
      toast.error("Failed to add project");
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="fixed overflow-y-scroll inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-4/5 my-auto max-w-[50%] mx-auto py-4">
      <div className="bg-slate-200/30 backdrop-blur-md p-6 rounded-md shadow-lg pt-96">
        <h3 className="font-bold text-lg">Create a New Project</h3>
        <p className="py-4">Fill out the form to add a new project.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4 my-4">
          <div>
            <label className="block">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div>
            <label className="block">Images</label>
            <input
              {...register("img1", {
                required: "Image-1 is required",
              })}
              className="w-full p-2 border rounded my-2"
              type="url"
              placeholder="Image-1"
            />
            {errors.img1 && (
              <span className="text-red-500">{errors.img1.message}</span>
            )}
            <input
              {...register("img2", {
                required: "Image-2 is required",
              })}
              className="w-full p-2 border rounded my-2"
              type="url"
              placeholder="Image-2"
            />
            {errors.img2 && (
              <span className="text-red-500">{errors.img2.message}</span>
            )}
            <input
              {...register("img3", {
                required: "Image-3 is required",
              })}
              className="w-full p-2 border rounded my-2"
              type="url"
              placeholder="Image-3"
            />
            {errors.img3 && (
              <span className="text-red-500">{errors.img3.message}</span>
            )}
            <input
              {...register("img4", {
                required: "Image-4 is required",
              })}
              className="w-full p-2 border rounded my-2"
              type="url"
              placeholder="Image-4"
            />
            {errors.img4 && (
              <span className="text-red-500">{errors.img4.message}</span>
            )}
          </div>
          <div>
            <label className="block">Technologies</label>
            <input
              {...register("techs", {
                required: "Technologies is required",
              })}
              className="w-full p-2 border rounded"
              type="text"
            />
            <span className="text-xs text-slate-900">N.B: Use comma(,) after each technology</span>
            <br />
            {errors.techs && (
              <span className="text-red-500">{errors.techs.message}</span>
            )}
          </div>
          <div>
            <label className="block">Live URL</label>
            <input
              {...register("live", { required: "Live URL is required" })}
              className="w-full p-2 border rounded"
              type="url"
              placeholder="Live URL"
            />
            {errors.live && (
              <span className="text-red-500">{errors.live.message}</span>
            )}
          </div>
          <div>
            <label className="block">Github URL</label>
            <input
              {...register("github", { required: "Github URL is required" })}
              className="w-full p-2 border rounded"
              type="url"
              placeholder="Github URL"
            />
            {errors.github && (
              <span className="text-red-500">{errors.github.message}</span>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" className="btn" onClick={closeCreateModal}>
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectCreateModal;
