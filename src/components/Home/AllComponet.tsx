"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import EighthSection from "./EighthSection";
import Footer from "./Footer";
import { SettingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const AllComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleModeChange = (mode: any) => {
    setTheme(mode);
  };

  return (
    <div className="relative min-h-screen">
      {!isSidebarOpen && (
        <motion.div
          className="bg-black p-3 fixed right-0 top-1/2 cursor-pointer z- hidden lg:block"
          onClick={toggleSidebar}
        >
          <motion.div
            className="text-white"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          >
            <SettingOutlined />
          </motion.div>
        </motion.div>
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-1/2 right-0 h-48 w-64 bg-gray-800 text-white shadow-lg z-40 hidden lg:block"
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <button
            className="block mb-2 p-2 bg-gray-700 rounded w-full text-left"
            onClick={() => handleModeChange("light")}
          >
            Light Mode
          </button>
          <button
            className="block p-2 bg-gray-700 rounded w-full text-left"
            onClick={() => handleModeChange("dark")}
          >
            Dark Mode
          </button>
          <button
            className="block p-2 bg-red-600 rounded w-full text-left mt-4"
            onClick={toggleSidebar}
          >
            Close Sidebar
          </button>
        </div>
      </motion.div>

      <div
        className={`${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        } min-h-screen`}
      >
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <Footer />
      </div>
    </div>
  );
};

export default AllComponent;
