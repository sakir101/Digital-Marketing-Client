"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import quote from "@/assets/quote.png"; // Assuming you have a quote image

// Example testimonial data
const testimonials = [
  {
    quote:
      "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    author: "MARIA D. HALK",
    title: "MANAGING DIRECTOR",
  },
  {
    quote:
      "Working with Alts has been a game-changer for our company. Their dedication and commitment to excellence are unmatched. We have seen significant growth and improvement since we partnered with them.",
    author: "JOHN DOE",
    title: "CEO",
  },
  {
    quote:
      "Alts is not just a service provider; they are a true partner in our success. Their expertise and guidance have been invaluable in navigating challenges and achieving our goals.",
    author: "JANE SMITH",
    title: "COO",
  },
];

const Carousel1 = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center text-center p-8">
      {/* Quotation Mark Image */}
      <div className="mb-4">
        <Image
          src={quote}
          alt="Quote Icon"
          width={40}
          height={40}
          className="dark:bg-white"
        />
      </div>

      {/* Testimonial Text */}
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="italic text-lg md:text-xl">
          {testimonials[current].quote}
        </p>
        <div className="mt-6 font-bold text-xl md:text-2xl">
          {testimonials[current].author}
        </div>
        <div className="text-gray-500 text-sm md:text-base">
          {testimonials[current].title}
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex mt-8">
        <button
          onClick={prevSlide}
          className="bg-transparent border border-gray-400 p-2 rounded-full mx-2 hover:bg-gray-200"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="bg-transparent border border-gray-400 p-2 rounded-full mx-2 hover:bg-gray-200"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel1;
