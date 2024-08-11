"use client";

import {
  useGetSingleTaskQuery,
  useUpdateTaskMutation,
} from "@/redux/api/taskApi";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const UpdateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [id, setId] = useState<string>("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    const match = url.match(/\/([^\/?]+)\?$/);
    const extractId = match ? match[1] : null;
    if (extractId !== null) {
      setId(extractId);
    }
  }, [pathname, searchParams]);

  const { data, isLoading, refetch } = useGetSingleTaskQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const [updateTask] = useUpdateTaskMutation();

  const updateTaskInfo = (value: any) => {
    const key = "loadingKey";

    const data1 = {
      title: value.title ? value.title : data.title,
      desc: value.desc ? value.desc : data.desc,
    };
    try {
      updateTask({ data: data1, id })
        .unwrap()
        .then(() => {
          toast.success("Task updated successfully");
        })
        .catch((err) => {
          toast.error("Task updated failed");
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
          Update Task
        </h1>
        <div>
          <form onSubmit={handleSubmit(updateTaskInfo)}>
            <div className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md">
              <label className="font-weight-bold">
                {" "}
                Title <span className="required"> * </span>{" "}
              </label>
              <br />
              <input
                className="input input-bordered w-full h-10"
                type="text"
                defaultValue={data?.title}
                {...register("title")}
                placeholder="Title"
              />
            </div>
            <div className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md mt-4">
              <label className="font-weight-bold">
                {" "}
                Description <span className="required"> * </span>{" "}
              </label>
              <br />
              <textarea
                className="input input-bordered w-full"
                defaultValue={data?.desc}
                {...register("desc")}
                placeholder="desc"
              />
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

export default UpdateTask;
