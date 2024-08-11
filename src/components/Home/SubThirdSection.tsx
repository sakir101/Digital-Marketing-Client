"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";

const SubThirdSection = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [img, setImg] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controlsFlipFlop = useAnimation();
  const controlsFlipFlop1 = useAnimation();
  const controlsFlipFlop2 = useAnimation();
  const controlsFlipFlop3 = useAnimation();

  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setHoverPosition({ x, y });
  };

  const slideInLeft = {
    hidden: { x: "-10%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls2.start("visible");
          controlsFlipFlop1.start("visible");
        } else {
          controls2.start("hidden");
          controlsFlipFlop1.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef1.current) {
      observer.observe(sectionRef1.current);
    }

    return () => {
      if (sectionRef1.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef1.current);
      }
    };
  }, [controls2, controlsFlipFlop1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls3.start("visible");
          controlsFlipFlop2.start("visible");
        } else {
          controls3.start("hidden");
          controlsFlipFlop2.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef2.current);
      }
    };
  }, [controls3, controlsFlipFlop2]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls4.start("visible");
          controlsFlipFlop3.start("visible");
        } else {
          controls4.start("hidden");
          controlsFlipFlop3.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef3.current) {
      observer.observe(sectionRef3.current);
    }

    return () => {
      if (sectionRef3.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef3.current);
      }
    };
  }, [controls4, controlsFlipFlop3]);

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
    <div className="flex flex-col bg-white dark:bg-black overflow-x-hidden p-5 lg:p-0">
      <div
        className="grid grid-cols-1 lg:grid-cols-3 justify-center lg:gap-0 my-10 lg:mx-64 lg:my-20"
        ref={sectionRef}
      >
        <div className="lg:w-[1000px] mb-5 lg:mb-0">
          <motion.a
            href="#"
            className="text-2xl lg:text-3xl no-underline text-black font-semibold dark:text-white "
            initial="hidden"
            animate={controls1}
            variants={slideInLeft}
          >
            SEARCH ENGINE <br />
            OPTIMIZATION
          </motion.a>
        </div>
        <div>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls1}
            variants={slideInLeft}
          >
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </motion.p>
          <br />
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls1}
            variants={slideInLeft}
          >
            + Logo Design
          </motion.p>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls1}
            variants={slideInLeft}
          >
            + Advertisement
          </motion.p>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls1}
            variants={slideInLeft}
          >
            + Promotion
          </motion.p>
        </div>

        <div
          className="lg:mx-44 lg:w-96 mt-5 lg:mt-0"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            className="w-40 h-40 border-[1px] border-solid border-black rounded-full mx-2 flex items-center justify-center dark:border-white"
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
              className="no-underline dark:text-white"
              href="#"
              style={{ color: hovered1 ? "white" : "black" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Detail
              <ArrowRightOutlined />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center mx-64">
        <div className="border-[1px] border-solid border-[#ded6d6] w-[1000px]"></div>
      </div>
      <div className="flex lg:hidden justify-center mb-10">
        <div className="w-full">
          <hr />
        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 justify-center lg:gap-0 my-10 lg:mx-64 lg:my-20"
        ref={sectionRef1}
      >
        <div className="lg:w-[1000px] mb-5 lg:mb-0">
          <motion.a
            href="#"
            className="text-2xl lg:text-3xl no-underline text-black font-semibold dark:text-white "
            initial="hidden"
            animate={controls2}
            variants={slideInLeft}
          >
            EMAIL <br />
            MARKETING
          </motion.a>
        </div>
        <div>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls2}
            variants={slideInLeft}
          >
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </motion.p>
          <br />
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls2}
            variants={slideInLeft}
          >
            + Logo Design
          </motion.p>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls2}
            variants={slideInLeft}
          >
            + Advertisement
          </motion.p>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls2}
            variants={slideInLeft}
          >
            + Promotion
          </motion.p>
        </div>

        <div
          className="lg:mx-44 lg:w-96 mt-5 lg:mt-0"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        >
          <motion.div
            className="w-40 h-40 border-[1px] border-solid border-black rounded-full mx-2 flex items-center justify-center dark:border-white"
            style={{
              backgroundColor: hovered1
                ? `rgba(0, 0, 0, ${hoverPosition.x / 176})`
                : "transparent",
              // Added transform to handle scaling and avoid overflow issues
              transform: hovered1 ? "scale(1.1)" : "scale(1)",
              // Ensure any overflow is handled
              overflow: "hidden",
            }}
            animate={controlsFlipFlop1}
            variants={flipFlopAnimation}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.a
              className="no-underline dark:text-white"
              href="#"
              style={{ color: hovered1 ? "white" : "black" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Detail
              <ArrowRightOutlined />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center mx-64">
        <div className="border-[1px] border-solid border-[#ded6d6] w-[1000px]"></div>
      </div>
      <div className="flex lg:hidden justify-center mb-10">
        <div className="w-full">
          <hr />
        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 justify-center lg:gap-0 my-10 lg:mx-64 lg:my-20"
        ref={sectionRef2}
      >
        <div className="lg:w-[1000px] mb-5 lg:mb-0">
          <motion.a
            href="#"
            className="text-2xl lg:text-3xl no-underline text-black font-semibold dark:text-white "
            initial="hidden"
            animate={controls3}
            variants={slideInLeft}
          >
            CONTENT <br />
            MARKETING
          </motion.a>
        </div>
        <div>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls3}
            variants={slideInLeft}
          >
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </motion.p>
          <br />
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls3}
            variants={slideInLeft}
          >
            + Logo Design
          </motion.p>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls3}
            variants={slideInLeft}
          >
            + Advertisement
          </motion.p>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls3}
            variants={slideInLeft}
          >
            + Promotion
          </motion.p>
        </div>

        <div
          className="lg:mx-44 lg:w-96 mt-5 lg:mt-0"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <motion.div
            className="w-40 h-40 border-[1px] border-solid border-black rounded-full mx-2 flex items-center justify-center dark:border-white"
            style={{
              backgroundColor: hovered2
                ? `rgba(0, 0, 0, ${hoverPosition.x / 176})`
                : "transparent",
              // Added transform to handle scaling and avoid overflow issues
              transform: hovered2 ? "scale(1.1)" : "scale(1)",
              // Ensure any overflow is handled
              overflow: "hidden",
            }}
            animate={controlsFlipFlop2}
            variants={flipFlopAnimation}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.a
              className="no-underline dark:text-white"
              href="#"
              style={{ color: hovered2 ? "white" : "black" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Detail
              <ArrowRightOutlined />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center mx-64">
        <div className="border-[1px] border-solid border-[#ded6d6] w-[1000px]"></div>
      </div>
      <div className="flex lg:hidden justify-center mb-10">
        <div className="w-full">
          <hr />
        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 justify-center lg:gap-0 my-10 lg:mx-64 lg:my-20"
        ref={sectionRef3}
      >
        <div className="lg:w-[1000px] mb-5 lg:mb-0">
          <motion.a
            href="#"
            className="text-2xl lg:text-3xl no-underline text-black font-semibold dark:text-white "
            initial="hidden"
            animate={controls4}
            variants={slideInLeft}
          >
            SOCIAL <br />
            MARKETING
          </motion.a>
        </div>
        <div>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls4}
            variants={slideInLeft}
          >
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </motion.p>
          <br />
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls4}
            variants={slideInLeft}
          >
            + Logo Design
          </motion.p>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls4}
            variants={slideInLeft}
          >
            + Advertisement
          </motion.p>
          <motion.p
            className="font-semibold text-lg"
            initial="hidden"
            animate={controls4}
            variants={slideInLeft}
          >
            + Promotion
          </motion.p>
        </div>

        <div
          className="lg:mx-44 lg:w-96 mt-5 lg:mt-0"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          <motion.div
            className="w-40 h-40 border-[1px] border-solid border-black rounded-full mx-2 flex items-center justify-center dark:border-white"
            style={{
              backgroundColor: hovered3
                ? `rgba(0, 0, 0, ${hoverPosition.x / 176})`
                : "transparent",
              // Added transform to handle scaling and avoid overflow issues
              transform: hovered3 ? "scale(1.1)" : "scale(1)",
              // Ensure any overflow is handled
              overflow: "hidden",
            }}
            animate={controlsFlipFlop3}
            variants={flipFlopAnimation}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.a
              className="no-underline dark:text-white"
              href="#"
              style={{ color: hovered3 ? "white" : "black" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Detail
              <ArrowRightOutlined />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center mx-64">
        <div className="border-[1px] border-solid border-[#ded6d6] w-[1000px]"></div>
      </div>
      <div className="flex lg:hidden justify-center mb-10">
        <div className="w-full">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SubThirdSection;
