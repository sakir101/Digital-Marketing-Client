"use client";

import { useProductCreateMutation } from "@/redux/api/ProductApi";
import { getUserInfo } from "@/services/auth.service";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [productCreate, { isSuccess, isError: err, isLoading }] =
    useProductCreateMutation();
  const addDetails = async (value: any) => {
    const key = "loadingKey";
    const { userId } = getUserInfo() as any;
    const data = {
      title: value.title,
      price: value.price,
      status: value.status,
    };

    try {
      productCreate({ data, id: userId })
        .unwrap()
        .then(() => {
          toast.success("Product create successful");
          reset();
        })
        .catch((err) => {
          toast.error("Product create failed");
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
          Create Product
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
                Price <span className="required"> * </span>{" "}
              </label>
              <br />
              <input
                className="input input-bordered w-full h-10"
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
              />
              {errors.price && (
                <p className="text-red-500">Price is required</p>
              )}
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
                {...register("status", { required: true })}
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
              {errors.status && (
                <p className="text-red-500">Status is required</p>
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

export default CreateProduct;
