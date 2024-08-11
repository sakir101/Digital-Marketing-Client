"use client";

import React from "react";
import { motion } from "framer-motion";
import bg5 from "@/assets/bg5.png";
import Carousel1 from "./Carousel1";
import work1 from "@/assets/work1.webp";
import work2 from "@/assets/work2.webp";
import work3 from "@/assets/work3.webp";
import work4 from "@/assets/work4.webp";
import work5 from "@/assets/work5.webp";
import work6 from "@/assets/work6.webp";
import Image from "next/image";

const FifthSection = () => {
  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    const elements = document.querySelectorAll(".floating-image");

    elements.forEach((element: any) => {
      const rect = element.getBoundingClientRect();
      const elementX = (rect.left + rect.right) / 2;
      const elementY = (rect.top + rect.bottom) / 2;
      const moveX = ((elementX - clientX) / window.innerWidth) * 30;
      const moveY = ((elementY - clientY) / window.innerHeight) * 30;

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  return (
    <div
      className="bg-white dark:bg-black overflow-x-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="floating-image hidden lg:block absolute top-32 left-80"
        initial={{ x: 0, y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image src={work5} alt="work" className="w-24 h-auto" />
      </motion.div>
      <motion.div
        className="floating-image hidden lg:block absolute top-32 right-80"
        initial={{ x: 0, y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image src={work2} alt="work" className="w-16 h-auto" />
      </motion.div>
      <motion.div
        className="floating-image hidden lg:block absolute top-80 left-24"
        initial={{ x: 0, y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image src={work6} alt="work" className="w-16 h-auto" />
      </motion.div>
      <motion.div
        className="floating-image hidden lg:block absolute top-[450px] left-36"
        initial={{ x: 0, y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image src={work4} alt="work" className="w-40 h-auto" />
      </motion.div>
      <motion.div
        className="floating-image hidden lg:block absolute top-96 right-14"
        initial={{ x: 0, y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image src={work1} alt="work" className="w-40 h-auto" />
      </motion.div>
      <motion.div
        className="floating-image hidden lg:block absolute top-[540px] right-52"
        initial={{ x: 0, y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image src={work3} alt="work" className="w-20 h-auto" />
      </motion.div>
      <div className="my-60">
        <div className="flex justify-center items-center">
          <Carousel1 />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
