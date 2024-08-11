"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";
import client1 from "@/assets/client1.webp";
import client2 from "@/assets/client2.webp";
import Image from "next/image";

const EighthSection = () => {
  const controls = useAnimation();
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setHoverPosition({ x, y });
  };

  const brandFlyIn = {
    hidden: {
      y: 20,
      opacity: 0,
      rotateX: 90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <div
      className="bg-slate-50  overflow-x-hidden px-7 lg:px-0"
      ref={sectionRef}
    >
      <div className="flex flex-col lg:justify-center lg:items-center mt-12 lg:mt-28">
        <div>
          <motion.p
            className="text-[#6a6a6a] text-xs font-medium"
            initial="hidden"
            animate={controls}
            variants={brandFlyIn}
          >
            Recent Blog
          </motion.p>
          <motion.h1
            className="text-4xl font-bold mt-2"
            initial="hidden"
            animate={controls}
            variants={brandFlyIn}
          >
            Read Updated <br />
            Journal
          </motion.h1>
          <div className="mt-10 lg:mt-20 mb-16 flex flex-col lg:flex-row lg:items-center lg:ms-14">
            <div className="border-[1px] border-solid border-[#ded6d6] h-48 hidden lg:block"></div>
            <motion.p
              className="text-[#6a6a6a] text-xs font-medium ms-0 lg:ms-14"
              initial="hidden"
              animate={controls}
              variants={brandFlyIn}
            >
              Read our blog and try to see everything <br />
              from every perspective. Our passion lies <br /> in making
              everything accessible and <br /> aesthetic for everyone.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-32">
          <div className="me-10 flex flex-col relative group">
            <div className="absolute right-48 bottom-10 z-0">
              <Image
                src={client2}
                alt="client"
                className="w-56 h-auto transition-transform duration-300 transform group-hover:scale-x-[-1]"
              />
            </div>
            <div className="bg-slate-50 z-50 p-7">
              <a
                className="text-[#6a6a6a] text-xs font-medium no-underline"
                href="#"
              >
                UI Design, 02 May 2019
              </a>
              <br />
              <p className="text-black font-bold no-underline text-lg mt-3 mb-7 cursor-pointer">
                How to bring fold to your <br /> startup company with Axtra
              </p>
              <hr />
              <div className="flex items-center">
                <a
                  href="#"
                  className="text-[#6a6a6a] text-xs font-medium no-underline"
                >
                  Read More
                </a>
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
          <div className="me-10 flex flex-col relative group mt-48 lg:mt-0">
            <div className="absolute right-48 bottom-10 z-0">
              <Image
                src={client1}
                alt="client"
                className="w-56 h-auto transition-transform duration-300 transform group-hover:scale-x-[-1]"
              />
            </div>
            <div className="p-7 ms-0 lg:ms-48 z-20 bg-slate-50">
              <a
                className="text-[#6a6a6a] text-xs font-medium no-underline"
                href="#"
              >
                UI Design, 02 May 2019
              </a>
              <br />
              <p className="text-black font-bold no-underline text-lg mt-3 mb-7 cursor-pointer">
                How to manage a talented <br /> and successful design <br />{" "}
                team
              </p>
              <hr />
              <div className="flex items-center">
                <a
                  href="#"
                  className="text-[#6a6a6a] text-xs font-medium no-underline"
                >
                  Read More
                </a>
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthSection;
