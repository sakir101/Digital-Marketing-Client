"use client";

import { useTaskCreateMutation } from "@/redux/api/taskApi";
import { getUserInfo } from "@/services/auth.service";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const CreateTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [TaskCreate, { isSuccess, isError: err, isLoading }] =
    useTaskCreateMutation();
  const addDetails = async (value: any) => {
    const key = "loadingKey";
    const { userId } = getUserInfo() as any;
    const data = {
      title: value.title,
      desc: value.desc,
    };

    try {
      TaskCreate({ data, id: userId })
        .unwrap()
        .then(() => {
          toast.success("Task create successful");
          reset();
        })
        .catch((err) => {
          toast.error("Task create failed");
        })
        .finally(() => {});
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-4/5 lg:w-1/2">
        <h1
          className="text-center text-xl text-blue-500 font-semibold"
          style={{ margin: "15px 0px" }}
        >
          Create Task
        </h1>
        <div>
          <form onSubmit={handleSubmit(addDetails)}>
            <div className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md">
              <label className="font-weight-bold">
                {" "}
                Title <span className="required"> * </span>{" "}
              </label>
              <br />
              <input
                className="input input-bordered w-full h-10"
                type="text"
                {...register("title", { required: true })}
                placeholder="Title"
              />
              {errors.title && (
                <p className="text-red-500">Title is required</p>
              )}
            </div>
            <div className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md mt-4">
              <label className="font-weight-bold">
                {" "}
                Description <span className="required"> * </span>{" "}
              </label>
              <br />
              <textarea
                className="input input-bordered w-full"
                {...register("desc", { required: true })}
                placeholder="Description"
              />
              {errors.price && (
                <p className="text-red-500">Description is required</p>
              )}
            </div>
            <div className="flex justify-center my-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CreateTask;
