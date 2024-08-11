"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import girl1 from "@/assets/girl1.webp";
import girl2 from "@/assets/girl2.webp";
import girl3 from "@/assets/girl3.webp";
import Image from "next/image";

const images = [girl1, girl2, girl3];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const textAnimate = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <motion.div
        variants={textAnimate}
        initial="initial"
        animate="animate"
        key={current} // key to trigger re-render on slide change
        className="absolute z-10 text-white md:text-[60px] text-[24px] md:ms-44 ms-5 top-1/4 md:top-auto"
      >
        <h1>
          BENJON <br />
          <span className="md:ms-20">WEBSITE</span>
          <br />
          2012
        </h1>
      </motion.div>
      <div className="carousel-container me-52">
        <button className="prev" onClick={prevSlide}>
          ‹
        </button>
        <div className="carousel">
          <div>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`carousel-item ${index === current ? "active" : ""}`}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: index === current ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {index === current && (
                  <>
                    <Image
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="carousel-image w-full h-auto object-cover"
                      priority
                    />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <button className="next" onClick={nextSlide}>
          ›
        </button>

        <style jsx>{`
          .carousel-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            overflow: hidden;
          }
          .carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
          }
          .carousel-item {
            position: relative;
            min-width: 100%;
            height: 300px;
            overflow: hidden;
          }
          .prev,
          .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
          }
          .prev {
            left: 10px;
          }
          .next {
            right: 10px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Carousel;
