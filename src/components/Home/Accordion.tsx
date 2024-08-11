"use client";

import React, { useState, useRef, useEffect } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Explicitly typing the ref array as an array of HTMLDivElement or null
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[activeIndex]!.style.maxHeight =
        contentRefs.current[activeIndex]!.scrollHeight + "px";
    }
  }, [activeIndex]);

  return (
    <div className="w-full lg:w-96 h-96 mt-10">
      <button
        onClick={() => toggleAccordion(0)}
        className="w-full flex justify-between items-center p-4 text-left cursor-pointer text-sm font-bold transition-all duration-300 border-t-[1px] border-x-0 border-b-0 bg-transparent border-solid border-black"
      >
        <span>Design should enrich our day</span>
        <span>{activeIndex === 0 ? "-" : "+"}</span>
      </button>
      <div
        ref={(el) => (contentRefs.current[0] = el)}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          activeIndex === 0 ? "max-h-full" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-gray-600 mb-10 text-xs">
            Our design services start and end with a best-in-class experience
            strategy that builds brands. Through a process of iteration and
            prototyping, we design interfaces that bring joy to people.
          </p>
        </div>
      </div>

      <button
        onClick={() => toggleAccordion(1)}
        className="w-full flex justify-between items-center p-4 text-left cursor-pointer text-sm font-bold transition-all duration-300 border-t-[1px] border-x-0 border-b-0 bg-transparent border-solid border-black"
      >
        <span>Bring their individual experience and creativity</span>
        <span>{activeIndex === 1 ? "-" : "+"}</span>
      </button>
      <div
        ref={(el) => (contentRefs.current[1] = el)}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          activeIndex === 1 ? "max-h-full" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-gray-600 mb-10 text-xs">
            This is the second items accordion body. It is hidden by default,
            until the collapse plugin adds the appropriate classes that we use
            to style each element.
          </p>
        </div>
      </div>

      <button
        onClick={() => toggleAccordion(2)}
        className="w-full flex justify-between items-center p-4 text-left cursor-pointer text-sm font-bold transition-all duration-300 border-t-[1px] border-x-0 border-b-0 bg-transparent border-solid border-black"
      >
        <span>Human-centered design to challenges</span>
        <span>{activeIndex === 2 ? "-" : "+"}</span>
      </button>
      <div
        ref={(el) => (contentRefs.current[2] = el)}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          activeIndex === 2 ? "max-h-full" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-gray-600 mb-10 text-xs">
            Our design services start and end with a best-in-class experience
            strategy that builds brands. Through a process of iteration and
            prototyping, we design interfaces that bring joy to people.
          </p>
        </div>
      </div>

      <button
        onClick={() => toggleAccordion(3)}
        className="w-full flex justify-between items-center p-4 text-left cursor-pointer text-sm font-bold transition-all duration-300 border-t-[1px] border-x-0 border-b-0 bg-transparent border-solid border-black"
      >
        <span>Design should enrich our day</span>
        <span>{activeIndex === 3 ? "-" : "+"}</span>
      </button>
      <div
        ref={(el) => (contentRefs.current[3] = el)}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          activeIndex === 3 ? "max-h-full" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-gray-600 mb-10 text-xs">
            Our design services start and end with a best-in-class experience
            strategy that builds brands. Through a process of iteration and
            prototyping, we design interfaces that bring joy to people.
          </p>
        </div>
      </div>

      <button
        onClick={() => toggleAccordion(4)}
        className="w-full flex justify-between items-center p-4 text-left cursor-pointer text-sm font-bold transition-all duration-300 border-t-[1px] border-x-0 border-b-0 bg-transparent border-solid border-black"
      >
        <span>Developing core applications</span>
        <span>{activeIndex === 4 ? "-" : "+"}</span>
      </button>
      <div
        ref={(el) => (contentRefs.current[4] = el)}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          activeIndex === 4 ? "max-h-full" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-gray-600 mb-10 text-xs">
            Our design services start and end with a best-in-class experience
            strategy that builds brands. Through a process of iteration and
            prototyping, we design interfaces that bring joy to people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
