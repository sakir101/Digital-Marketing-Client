"use client";

import React from "react";
import logo1 from "@/assets/logo1.webp";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const gradientTextStyle = {
    background:
      "linear-gradient(45deg, #ff6b6b, #ffca3a, #8ac926, #1982c4, #6a4c93)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  const jumpAnimation = {
    initial: { y: 0, scale: 1, rotate: 0 },
    animate: {
      y: [-10, 0, -20, 0, -15, 0],
      scale: [1, 1.2, 1, 1.3, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  return (
    <div className="bg-black lg:px-5">
      <section className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center p-3 lg:p-0 lg:px-8">
        <div>
          <div className="my-4">
            <Image src={logo1} alt="logo" className="w-16 h-auto" />
          </div>
          <div>
            <p className="text-white text-xs">
              When do they work well, and when do they <br />
              on us and finally, when do we actually need <br /> how can we
              avoid them.
            </p>
          </div>
        </div>
        <div className="my-4 lg:my-0 text-center">
          <div className="px-6 py-4 border-[1px] border-solid border-[#493737] hover:bg-white">
            <a
              href="#"
              className="text-white no-underline text-xs hover:text-black"
            >
              FACEBOOK
            </a>
          </div>
          <div className="px-6 py-4 border-[1px] border-solid border-[#493737] hover:bg-white">
            <a
              href="#"
              className="text-white no-underline text-xs hover:text-black"
            >
              TWITTER
            </a>
          </div>
          <div className="px-6 py-4 border-[1px] border-solid border-[#493737] hover:bg-white">
            <a
              href="#"
              className="text-white no-underline text-xs hover:text-black"
            >
              LINKEDIN
            </a>
          </div>
          <div className="px-6 py-4 border-[1px] border-solid border-[#493737] hover:bg-white">
            <a
              href="#"
              className="text-white no-underline text-xs hover:text-black"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
        <div className="me-14  text-center hidden lg:block">
          <motion.h1
            className="text-[80px]"
            style={gradientTextStyle}
            initial="initial"
            animate="animate"
            variants={jumpAnimation}
          >
            <a href="#" className="no-underline">
              LETS TALK
            </a>
          </motion.h1>
        </div>
        <div className="me-14  text-center block lg:hidden">
          <motion.h1
            className="text-3xl"
            style={gradientTextStyle}
            initial="initial"
            animate="animate"
            variants={jumpAnimation}
          >
            <a href="#" className="no-underline">
              LETS TALK
            </a>
          </motion.h1>
        </div>
      </section>
      <div>
        <hr className="bg-[#493737] border-[1px] border-solid border-[#493737]" />
      </div>
      <section className="p-8 flex flex-col-reverse lg:flex-row justify-center lg:justify-between lg:items-center pb-5 lg:pb-10">
        <div>
          <div className="hidden lg:block">
            <p className="text-white text-xs">
              © 2022 - 2025 | Alrights reserved
            </p>
            <a href="#" className="text-white no-underline text-xs">
              by Wealcoder
            </a>
          </div>
          <div className="block lg:hidden text-center">
            <p className="text-white text-xs">
              © 2022 - 2025 | Alrights reserved{" "}
              <a href="#" className="text-white no-underline text-xs">
                by Wealcoder
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-evenly mb-4 lg:mb-4">
          <div>
            <a
              href="#"
              className="text-white mx-3 lg:mx-4 no-underline text-xs"
            >
              ABOUT US
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-white mx-3 lg:mx-4 no-underline text-xs"
            >
              CONTACT
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-white mx-3 lg:mx-4 no-underline text-xs"
            >
              CAREER
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-white mx-3 lg:mx-4 no-underline text-xs"
            >
              FAQS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
