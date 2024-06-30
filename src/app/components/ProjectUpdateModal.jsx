import { useAllProjectQuery, useUpdateProjectMutation } from "@/redux/projects/projectApi";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { toast } from "sonner";

const ProjectUpdateModal = ({ closeUpdateModal, initialData }) => {
  const [updateProject, result] = useUpdateProjectMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialData,
  });

  React.useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);
  const onSubmit = (data) => {
    let techs = data.techs;
    if (!Array.isArray(techs)) {
      techs = techs.split(",").map((tech) => tech.trim());
    }

    const id = data._id;
    const modifiedData = {
      name: data.name,
      img1: data.img1,
      img2: data.img2,
      img3: data.img3,
      img4: data.img4,
      techs: techs,
      live: data.live,
      github: data.github,
    };
    // console.log(data);
    // console.log(id, modifiedData);
    updateProject({ id, body: modifiedData })
      .then((response) => {
        // console.log('Project updated successfully', response.data.success);
        closeUpdateModal();
        if (response.data.success === true) {
          toast.success("Project Updated Successfully");
          useAllProjectQuery.invalidate()
        }
      })
      .catch((error) => {
        console.error('Failed to update project', error);
        toast.error(error);
        closeUpdateModal();
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-scroll">
      <div className="bg-slate-200/30 backdrop-blur-md p-6 rounded-md shadow-lg">
        <h3 className="font-bold text-lg">Update Project</h3>
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
            <span className="text-xs text-slate-900">
              N.B: Use comma(,) after each technology
            </span>
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
            <button type="button" className="btn" onClick={closeUpdateModal}>
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

export default ProjectUpdateModal;
