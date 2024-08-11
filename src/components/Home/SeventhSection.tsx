"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import Accordion from "./Accordion";
import { motion, useAnimation } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";

const SeventhSection = () => {
  const [hovered, setHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const controls = useAnimation();
  const controlsFlipFlop = useAnimation();

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

  const flipFlopAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [0, -20, 20, -20, 0],
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          controlsFlipFlop.start("visible");
        } else {
          controls.start("hidden");
          controlsFlipFlop.start("hidden");
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
  }, [controls, controlsFlipFlop]);

  return (
    <div
      className="bg-[#f2ecec] py-24 px-5 flex flex-col lg:flex-row justify-center items-top"
      ref={sectionRef}
    >
      <div className="me-10">
        <div>
          <motion.p
            className="text-[#6a6a6a] text-xs font-medium"
            initial="hidden"
            animate={controls}
            variants={brandFlyIn}
          >
            PRICING TABLE
          </motion.p>
        </div>
        <div>
          <motion.h1
            className="text-4xl font-bold"
            initial="hidden"
            animate={controls}
            variants={brandFlyIn}
          >
            BE kIND TO YOUR <br />
            MIND
          </motion.h1>
        </div>
        <Accordion />
      </div>
      <div>
        {/* Pricing cards */}
        <div className="bg-black py-8 w-full lg:w-[500px] rounded-lg mb-3">
          <div className="flex justify-between ms-20 me-7">
            <div className="p-3 border-[1px] border-solid border-white rounded-2xl">
              <p className="text-white text-xs font-light">YEARLY</p>
            </div>
            <div>
              <h1 className="text-white text-2xl">$129.99</h1>
            </div>
          </div>
          <div className="flex items-center ms-5">
            <div className="me-5">
              <div className="text-lg text-black px-2 py-1 bg-[#965c4b] rounded-lg">
                <CheckOutlined />
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-white text-xl my-4">14 DAYS FREE</h1>
              </div>
              <div>
                <p className="text-white text-xs">
                  Subscription fee is $129.99 USD and automatically <br />
                  renews each year.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-8 w-full lg:w-[500px] rounded-lg mb-3">
          <div className="flex justify-between ms-20 me-7">
            <div className="p-3 border-[1px] border-solid border-black rounded-2xl">
              <p className="text-black text-xs font-light">YEARLY</p>
            </div>
            <div>
              <h1 className="text-black text-2xl">$12.99</h1>
            </div>
          </div>
          <div className="flex items-center ms-5">
            <div className="me-5">
              <div className="text-lg text-black px-2 py-1 bg-transparent border-[1px] border-solid border-[#6a6a6a] rounded-lg">
                <CheckOutlined />
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-black text-xl my-4">7 DAYS FREE</h1>
              </div>
              <div>
                <p className="text-black text-xs">
                  Subscription fee is $12.99 USD and automatically <br />
                  renews each year.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-5 lg:mt-28"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            className="w-32 h-32 border-[1px] border-solid border-black rounded-full mx-2 flex items-center justify-center"
            style={{
              backgroundColor: hovered
                ? `rgba(0, 0, 0, ${hoverPosition.x / 176})`
                : "transparent",
              // Added transform to handle scaling and avoid overflow issues
              transform: hovered ? "scale(1.1)" : "scale(1)",
              // Ensure any overflow is handled
              overflow: "hidden",
            }}
            animate={controlsFlipFlop}
            variants={flipFlopAnimation}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.a
              className=" no-underline"
              href="#"
              style={{ color: hovered ? "white" : "black" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Try It <br />
              Free Now
              <ArrowRightOutlined />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
