"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import SubThirdSection from "./SubThirdSection";

const ThirdSection = () => {
  const controlsText = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

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
          controlsText.start("visible");
        } else {
          controlsText.start("hidden");
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
  }, [controlsText]);

  return (
    <div ref={sectionRef}>
      <div className="hidden lg:flex bg-white dark:bg-black overflow-x-hidden">
        <div className="mt-36">
          <div className="ms-[500px]">
            <motion.h1
              className="text-[#6a6a6a] text-xl"
              initial="hidden"
              animate={controlsText}
              variants={brandFlyIn}
            >
              SERVICES
            </motion.h1>
          </div>
          <div className="ms-[500px] mb-36">
            <motion.h1
              className="text-6xl"
              initial="hidden"
              animate={controlsText}
              variants={brandFlyIn}
            >
              OUR MARKETING <br />
              SERVICES
            </motion.h1>
          </div>
          <div className="ms-[700px] flex items-center mb-36 relative">
            <div className="border-[1px] border-solid border-[#ded6d6] h-60"></div>
            <div className="w-[450px] pl-4 before:bg-[#6a6a6a]">
              <motion.p
                className="text-[#6a6a6a] text-xl"
                initial="hidden"
                animate={controlsText}
                variants={brandFlyIn}
              >
                Consumers today rely heavily on digital means to research
                products. We research a brand of blend engaging with it,
                according to the meanwhile, 51% of consumers say they use Google
                to research products before buying.
              </motion.p>
            </div>
          </div>
          <div className="flex justify-center mx-64">
            <div className="border-[1px] border-solid border-[#ded6d6] w-[1000px]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:hidden bg-white  dark:bg-black overflow-x-hidden p-4">
        <div className="mt-20">
          <div>
            <motion.h1
              className="text-[#6a6a6a] text-lg"
              initial="hidden"
              animate={controlsText}
              variants={brandFlyIn}
            >
              SERVICES
            </motion.h1>
          </div>
          <div className="mb-10">
            <motion.h1
              className="text-3xl"
              initial="hidden"
              animate={controlsText}
              variants={brandFlyIn}
            >
              OUR MARKETING <br />
              SERVICES
            </motion.h1>
          </div>
          <div className="flex justify-center mb-10">
            <div className="border-[1px] border-solid border-[#ded6d6] w-full">
              <hr />
            </div>
          </div>
          <div className="mb-10">
            <motion.p
              className="text-[#6a6a6a] text-lg"
              initial="hidden"
              animate={controlsText}
              variants={brandFlyIn}
            >
              Consumers today rely heavily on digital means to research
              products. We research a brand of blend engaging with it, according
              to the meanwhile, 51% of consumers say they use Google to research
              products before buying.
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <div className="border-[1px] border-solid border-[#ded6d6] w-full">
            <hr />
          </div>
        </div>
      </div>
      <SubThirdSection />
    </div>
  );
};

export default ThirdSection;
