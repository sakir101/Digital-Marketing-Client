"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import meeting from "@/assets/meeting.webp";
import bg3 from "@/assets/bg3.png";
import { ArrowRightOutlined } from "@ant-design/icons";

const SecondSection = () => {
  const [hovered, setHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const controls = useAnimation();
  const controls1 = useAnimation();
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
          controls1.start("visible");
          controlsFlipFlop.start("visible");
        } else {
          controls1.start("hidden");
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
  }, [controls1, controlsFlipFlop]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      y: scrollY * 0.09,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    });
  }, [scrollY, controls]);

  return (
    <div ref={sectionRef}>
      <div className="hidden lg:flex bg-black overflow-y-hidden py-36">
        <motion.div className="mx-28" animate={controls}>
          <Image
            src={meeting}
            alt="meeting"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>
        <div>
          <motion.div
            initial="hidden"
            animate={controls1}
            variants={brandFlyIn}
          >
            <h1 className="text-white text-xl">Who We Are</h1>
          </motion.div>
          <div
            style={{
              backgroundImage: `url(${bg3.src})`,
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <motion.h1
              className="text-6xl text-white"
              initial="hidden"
              animate={controls1}
              variants={brandFlyIn}
            >
              We are leading <br />
              digital marketing <br />
              agency.
            </motion.h1>
          </div>
          <div>
            <div className="my-16 mx-28 w-96 flex justify-evenly items-center">
              <div className="border-[1px] border-solid border-[#6d2929] h-60 me-10"></div>
              <div>
                <motion.p
                  className="text-[#6a6a6a] text-xs"
                  initial="hidden"
                  animate={controls1}
                  variants={brandFlyIn}
                >
                  We’re a team of strategic digital marketing experts working
                  globally with the largest brands. We believe that progress
                  only happens when you refuse to play things safe. We combine
                  ideas and behaviors, and insights with design, technological
                  data to produce brand experiences that customers love.
                </motion.p>
              </div>
            </div>
            <div
              className="mx-28 w-96"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <motion.div
                initial="hidden"
                className="w-44 h-44 border-[1px] border-solid border-white rounded-full mx-2 flex items-center justify-center"
                style={{
                  backgroundColor: hovered
                    ? `rgba(255, 255, 255, ${hoverPosition.x / 176})`
                    : "transparent",
                }}
                animate={controlsFlipFlop}
                variants={flipFlopAnimation}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.a
                  className="no-underline"
                  style={{ color: hovered ? "black" : "white" }}
                  href="#"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  Explore Us
                  <ArrowRightOutlined />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:hidden bg-black overflow-y-hidden py-10 px-5">
        <div className="me-5 my-5">
          <Image
            src={meeting}
            alt="meeting"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div>
          <div>
            <h1 className="text-white text-lg">Who We Are</h1>
          </div>
          <div>
            <h1 className="text-4xl text-white">
              We are leading <br />
              digital marketing <br />
              agency.
            </h1>
          </div>
          <div>
            <div className="my-10">
              <p className="text-white text-lg">
                We’re a team of strategic digital marketing experts working
                globally with the largest brands. We believe that progress only
                happens when you refuse to play things safe. We combine ideas
                and behaviors, and insights with design, technological data to
                produce brand experiences that customers love.
              </p>
            </div>
            <div
              className=""
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <motion.div
                className="w-44 h-44 border-[1px] border-solid border-white rounded-full mx-2 flex items-center justify-center"
                style={{
                  backgroundColor: hovered
                    ? `rgba(255, 255, 255, ${hoverPosition.x / 176})`
                    : "transparent",
                }}
                animate={{
                  scale: hovered ? 1.1 : 1,
                  color: hovered ? "black" : "white",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.p
                  style={{ color: hovered ? "black" : "white" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  Explore Us
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
