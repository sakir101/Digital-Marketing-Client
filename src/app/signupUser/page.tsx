import Navbar from "@/components/Navbar/Navbar";
import SignUpUser from "@/components/SignUpUser/SignUpUser";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-300">
      <Navbar />
      <SignUpUser />
    </div>
  );
};

export default page;
