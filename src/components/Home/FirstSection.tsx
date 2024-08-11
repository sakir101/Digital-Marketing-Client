"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import videoFile from "@/assets/hero-3.mp4";
import playIcon from "@/assets/play-icon.png";
import bg1 from "@/assets/bg1.png";
import bg2 from "@/assets/bg2.png";
import arrowDown from "@/assets/arrow-down.webp";
import office from "@/assets/office.webp";
import brand1 from "@/assets/brand1.webp";
import brand2 from "@/assets/brand2.webp";
import brand3 from "@/assets/brand3.webp";
import brand4 from "@/assets/brand4.webp";
import brand5 from "@/assets/brand5.webp";
import brand6 from "@/assets/brand6.webp";
import { MinusOutlined } from "@ant-design/icons";

const FirstSection = () => {
  const controls = useAnimation();
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  const handlePlayClick = () => {
    const videoElement = document.getElementById(
      "hero-video"
    ) as HTMLVideoElement | null;

    if (videoElement) {
      const requestFullscreen =
        videoElement.requestFullscreen ||
        (videoElement as any).webkitRequestFullscreen ||
        (videoElement as any).msRequestFullscreen;

      if (requestFullscreen) {
        requestFullscreen.call(videoElement);
      }

      videoElement.play();
      setIsVideoFullscreen(true);
    }
  };

  const slideInRight = {
    hidden: { x: "150%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const arrowAnimation = {
    y: [0, 20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const brandFlyIn = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="flex flex-col bg-slate-50 overflow-x-hidden">
      <div
        className="my-10 ms-3 lg:ms-32 me-24"
        style={{
          backgroundImage: `url(${bg2.src})`,
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-base">
          DIGITAL <MinusOutlined />
        </h1>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg1.src})`,
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-between items-center ms-3 lg:ms-28 my-0 relative">
          <div>
            <motion.h1
              className="text-[80px] lg:text-[250px] relative z-10"
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              MARK
            </motion.h1>
          </div>
          <div className="me-28 hidden lg:block relative">
            <div className="absolute bottom-20 left-4  mt-10 lg:mt-20 z-0">
              <motion.video
                id="hero-video"
                src={videoFile}
                className={`rounded-full w-32 h-32 lg:w-28 lg:h-28 ${
                  isVideoFullscreen ? "w-screen h-screen" : ""
                }`}
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                controls={false}
                onClick={handlePlayClick}
              />
            </div>
            <div className="flex justify-center items-center z-20">
              <motion.div
                className="relative w-12 h-12 bg-blue-500 rounded-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={handlePlayClick}
              >
                <Image
                  src={playIcon}
                  alt="Play Video"
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <div className="ml-11">
                <p className="font-bold">WATCH</p>
                <p className="font-bold">VIDEO INTRO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-between items-center my-0 mt-[-3px]">
          <motion.p
            className="ms-24 me-44 text-lg text-[#6a6a6a] "
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            Static and dynamic secure code review can prevent a day before your
            product is even released. We can integrate with your dev environment
          </motion.p>
          <motion.h1
            className="me-28 text-[250px]"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            ETING
          </motion.h1>
        </div>
        <div className="justify-between items-center my-0 mt-[-3px] block lg:hidden mb-5">
          <motion.h1
            className="me-3 text-[80px] text-end"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            ETING
          </motion.h1>
          <motion.p
            className="ms-3 me-10 text-lg text-[#6a6a6a] "
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            Static and dynamic secure code review can prevent a day before your
            product is even released. We can integrate with your dev environment
          </motion.p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <motion.div
          className="ms-24 px-2 py-5 border-[1px] border-solid border-[#6a6a6a] rounded-full hidden lg:block"
          animate={arrowAnimation}
        >
          <Image
            src={arrowDown}
            alt="arrow"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>
        <div>
          <Image
            src={office}
            alt="office"
            width={1000}
            height={500}
            className="h-auto"
          />
        </div>
      </div>
      <div className="my-40 text-center">
        <motion.h1
          className="text-[#6a6a6a] text-lg"
          initial="hidden"
          animate={controls}
          variants={brandFlyIn}
        >
          WE WORKED WITH GLOBAL LARGEST BRANDS
        </motion.h1>
        <div>
          <div>
            <div className="grid gap-[50px] lg:gap-0 grid-cols-2 lg:grid-cols-6 mx-20 my-20">
              <motion.div
                initial="hidden"
                animate={controls}
                variants={brandFlyIn}
              >
                <Image src={brand1} alt="brand" width={70} height={70} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={brandFlyIn}
              >
                <Image src={brand2} alt="brand" width={70} height={70} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={brandFlyIn}
              >
                <Image src={brand3} alt="brand" width={70} height={70} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={brandFlyIn}
              >
                <Image src={brand4} alt="brand" width={70} height={70} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={brandFlyIn}
              >
                <Image src={brand5} alt="brand" width={70} height={70} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={brandFlyIn}
              >
                <Image src={brand6} alt="brand" width={70} height={70} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
