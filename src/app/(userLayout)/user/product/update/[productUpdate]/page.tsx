"use client";

import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/api/ProductApi";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const UpdateProduct = () => {
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

  const { data, isLoading, refetch } = useGetSingleProductQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const [updateProduct] = useUpdateProductMutation();

  const updateProductInfo = (value: any) => {
    const key = "loadingKey";

    const data1 = {
      title: value.title ? value.title : data.title,
      price: value.price ? value.price : data.price,
      status: value.status ? value.status : data.status,
    };
    try {
      updateProduct({ data: data1, id })
        .unwrap()
        .then(() => {
          toast.success("Product updated successfully");
        })
        .catch((err) => {
          toast.error("Product updated failed");
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
          Update Product
        </h1>
        <div>
          <form onSubmit={handleSubmit(updateProductInfo)}>
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
                Price <span className="required"> * </span>{" "}
              </label>
              <br />
              <input
                className="input input-bordered w-full h-10"
                type="text"
                defaultValue={data?.price}
                {...register("price")}
                placeholder="Price"
              />
            </div>

            {/* Select field for status */}
            <div className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md mt-4">
              <label className="font-weight-bold">
                {" "}
                Status <span className="required"> * </span>{" "}
              </label>
              <br />
              <select
                className="input input-bordered w-full h-10"
                {...register("status")}
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
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

export default UpdateProduct;
