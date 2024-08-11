"use client";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import loginImage from "../../assets/login-image.png";
import toast, { Toaster } from "react-hot-toast";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    const key = "loadingKey";

    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        storeUserInfo({ accessToken: res?.accessToken });
        router.push(`/user/profile/account-profile`);
        toast.success("User login successful");
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error("User login failed");
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image
          src={loginImage}
          alt="login image"
          layout="responsive"
          width={500}
          height={300}
          className="max-w-full h-auto"
        />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit} formKey="loginUser">
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="User Email"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "blue" }}
            >
              Login
            </Button>
          </Form>
        </div>
      </Col>
      <Toaster />
    </Row>
  );
};

export default LoginPage;
