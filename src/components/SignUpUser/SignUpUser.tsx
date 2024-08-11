"use client";

import { Button } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupUserSchema } from "@/schemas/signup";
import { useSignUpUserMutation } from "@/redux/api/UserApi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignUpUser = () => {
  const [success, setSuccess] = useState(false);
  const [signUpUser, { isSuccess, isError, isLoading }] =
    useSignUpUserMutation();
  const [validation, setValidation] = useState(false);

  const onSubmit = async (values: any) => {
    console.log(values);
    const obj = { ...values };
    delete obj["confPassword"];
    const data = JSON.stringify(obj);

    const key = "loadingKey";

    signUpUser(data)
      .unwrap()
      .then(() => {
        toast.success("Registration successful");
        setValidation(false);
        setSuccess(true);
      })
      .catch((err) => {
        toast.error("Registration failed");
        setSuccess(false);
        setValidation(true);
      })
      .finally(() => {});
  };

  return (
    <div
      className="flex justify-center items-center p-5"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="my-5 border-[1px] border-solid border-black px-8 py-5">
        <h1 className="text-center font-bold text-black my-5">
          Create your account
        </h1>
        <div>
          <Form
            submitHandler={onSubmit}
            resolver={yupResolver(signupUserSchema)}
            formKey="signupUser"
          >
            <div className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md">
              <FormInput
                name="name"
                type="text"
                size="large"
                label="Name"
                placeholder="Sabbir Hossain"
                required
              />
            </div>
            <div
              className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md"
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="email"
                type="email"
                size="large"
                label="Email"
                placeholder="sabbir104@gmail.com"
                required
              />
            </div>
            <div
              className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md"
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="address"
                type="text"
                size="large"
                label="Address"
                placeholder="Uttara, Dhaka"
                required
              />
            </div>
            <div
              className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md"
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="contactNum"
                type="text"
                size="large"
                label="Contact Number"
                placeholder="016783786576"
                required
              />
            </div>
            <div
              className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md"
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
                required
              />
            </div>
            <div
              className="p-3 bg-slate-300 shadow-md shadow-slate-600 rounded-md"
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="confPassword"
                type="password"
                size="large"
                label="Confirm Password"
                required
              />
            </div>
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              Register
            </Button>
          </Form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpUser;
