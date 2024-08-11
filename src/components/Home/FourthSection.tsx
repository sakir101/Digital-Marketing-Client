"use client";

import React from "react";
import Carousel from "./Carousel";

const FourthSection = () => {
  return (
    <div className="bg-black overflow-y-hidden p-10">
      <div className="ms-24">
        <h1 className="text-white text-lg font-bold">
          FEATURED <br />
          WORK
        </h1>
      </div>
      <Carousel />
    </div>
  );
};

export default FourthSection;
