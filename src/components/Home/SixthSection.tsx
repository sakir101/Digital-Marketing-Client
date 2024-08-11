"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import ScrollCarousel from "scroll-carousel-react";
import counter from "@/assets/counter-3.webp";
import { ArrowRightOutlined } from "@ant-design/icons";
import bg6 from "@/assets/bg6.png";

const ScrollCarouselComponent = () => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

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
    <div>
      <div className="h-screen w-screen block lg:hidden bg-white dark:bg-black"></div>
      <div
        className="hidden lg:block"
        style={{ position: "relative", overflow: "hidden", display: "flex" }}
        ref={sectionRef}
      >
        <ScrollCarousel speed={7} onReady={() => console.log("I am ready")}>
          <div
            className="w-screen h-screen bg-[#fefaef] dark:bg-black text-center flex justify-center items-center"
            style={{
              scrollSnapAlign: "start",
            }}
          >
            <motion.h2
              className="text-black dark:text-white text-6xl lg:text-[100px]"
              initial="hidden"
              animate={controls}
              variants={brandFlyIn}
            >
              WHY <br /> CHOOSE US
            </motion.h2>
          </div>
          <div
            className="w-screen h-screen bg-white dark:bg-black py-7 hidden lg:block"
            style={{
              backgroundImage: `url(${bg6.src})`,
              backgroundPosition: "left bottom",
              backgroundRepeat: "no-repeat",
              scrollSnapAlign: "start",
            }}
          >
            <p className="font-bold text-sm ms-96">
              WHY <br /> CHOOSE US
            </p>
            <div className="flex justify-center items-center ">
              <div className="me-20">
                <div>
                  <h1 className="text-5xl">
                    Keword,Research <br />
                    Strategy, Survey, <br />& Analytics
                  </h1>
                </div>
                <div className="mt-10 mb-20 ms-20">
                  <p className="text-[#6a6a6a] text-xs">
                    Attention, we take out our round glasses and <br />
                    our sweater with elbow patches to go back <br />
                    to the origins of the user experience: the first <br />
                    mention of the user and its importance was <br />
                    born in the
                  </p>
                </div>
                <div className="flex items-center ms-20">
                  <button className="bg-transparent dark:bg-white border-[1px] border-solid border-black rounded-full p-2 hover:bg-black hover:text-white cursor-pointer">
                    GOOGLE
                  </button>
                  <button className="bg-transparent dark:bg-white border-[1px] border-solid border-black rounded-full p-2 hover:bg-black hover:text-white cursor-pointer">
                    PINTEREST
                  </button>
                  <button className="bg-transparent dark:bg-white border-[1px] border-solid border-black rounded-full p-2 hover:bg-black hover:text-white dark:hover:text-yellow-300 cursor-pointer">
                    INSTAGRAM
                  </button>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <div
                    className="me-8"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <motion.div className="w-40 h-40 border-[2px] border-solid border-black dark:border-white rounded-full flex items-center justify-center bg-transparent">
                      <a
                        className=" no-underline font-bold text-3xl text-black dark:text-white"
                        href="#"
                      >
                        60%
                      </a>
                    </motion.div>
                  </div>
                  <div>
                    <h1 className="text-xl mb-3">Strategy</h1>
                    <p className="text-xs text-[#6a6a6a]">
                      Your marketing strategy optimizing <br />
                      performances doesn’t have to be a <br />
                      guessing game.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center my-16 me-36">
                  <div
                    className="me-8"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <motion.div className="w-40 h-40 border-[2px] border-solid border-black dark:border-white rounded-full flex items-center justify-center bg-transparent">
                      <a
                        className=" no-underline font-bold text-3xl text-black dark:text-white"
                        href="#"
                      >
                        95%
                      </a>
                    </motion.div>
                  </div>
                  <div>
                    <h1 className="text-xl mb-3">AUDIENCE</h1>
                    <p className="text-xs text-[#6a6a6a]">
                      Your marketing strategy optimizing <br />
                      performances doesn’t have to be a <br />
                      guessing game.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div
                    className="me-8"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <motion.div className="w-40 h-40 border-[2px] border-solid border-black dark:border-white rounded-full flex items-center justify-center bg-transparent">
                      <a
                        className=" no-underline font-bold text-3xl text-black dark:text-white"
                        href="#"
                      >
                        70%
                      </a>
                    </motion.div>
                  </div>
                  <div>
                    <h1 className="text-xl mb-3">KEYWORD</h1>
                    <p className="text-xs text-[#6a6a6a]">
                      Your marketing strategy optimizing <br />
                      performances doesn’t have to be a <br />
                      guessing game.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-screen h-screen bg-[#fefaef] dark:bg-black text-center hidden lg:flex justify-center items-center"
            style={{
              scrollSnapAlign: "start",
            }}
          >
            <div>
              <div>
                <h1 className="text-6xl">25K</h1>
                <p className="text-xs text-gray-600 mt-4">
                  Project <br />
                  Completed
                </p>
              </div>
              <div className="mt-36">
                <h1 className="text-6xl">15</h1>
                <p className="text-xs text-gray-600 mt-4">
                  Years <br /> experience
                </p>
              </div>
            </div>
            <div className="mx-16">
              <div>
                <h1 className="text-6xl">8K</h1>
                <p className="text-xs text-gray-600 mt-4">
                  Happy <br />
                  customers
                </p>
              </div>
              <div className="mt-36">
                <h1 className="text-6xl">98</h1>
                <p className="text-xs text-gray-600 mt-4">
                  Awards <br /> achievements
                </p>
              </div>
            </div>
            <div>
              <Image src={counter} alt="counter" className="w-[450px] h-auto" />
            </div>
          </div>
          <div
            className="w-screen h-screen bg-[#dfe3cc] dark:bg-black text-center hidden lg:flex justify-center items-center"
            style={{
              scrollSnapAlign: "start",
            }}
          >
            <div className="text-center">
              <p className="text-lg">Have you project in mind?</p>
              <h1 className="text-[80px]">
                Let’s make something <br />
                great together!
              </h1>
              <div
                className="mt-5 lg:mt-28 flex justify-center items-center"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <motion.div
                  className={`w-40 h-40 border-[1px] border-solid rounded-full mx-2 flex items-center justify-center ${
                    hovered ? "scale-110 overflow-hidden" : "scale-100"
                  } border-black dark:border-white`}
                  style={{
                    backgroundColor: hovered
                      ? `rgba(0, 0, 0, ${hoverPosition.x / 176})`
                      : "transparent",
                  }}
                  animate={controlsFlipFlop}
                  variants={flipFlopAnimation}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.a
                    className="no-underline text-black dark:text-white"
                    href="#"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    Contact <br />
                    with us
                    <ArrowRightOutlined />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollCarousel>
      </div>
    </div>
  );
};

export default ScrollCarouselComponent;
