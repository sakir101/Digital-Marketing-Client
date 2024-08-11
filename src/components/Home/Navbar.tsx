"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoBlack from "@/assets/logo-black.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f9fafc] p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <Image src={logoBlack} alt="logo" className="w-24 h-auto" />
        </div>
        <div className="hidden md:flex space-x-6 md:items-center">
          <a href="/" className="text-black no-underline hover:font-bold">
            Home
          </a>
          <a href="#" className="text-black no-underline hover:font-bold">
            About
          </a>
          <a href="#" className="text-black no-underline hover:font-bold">
            Services
          </a>
          <a href="#" className="text-black no-underline hover:font-bold">
            Contact
          </a>
          <Link href="/common">
            <button className="btn btn-sm btn-primary">Log in</button>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        >
          <div
            className="fixed inset-0 bg-[#f9fafc] p-8 z-50 flex flex-col space-y-6 justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-8 right-8 text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="#"
              className="text-black text-xl no-underline hover:font-bold"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#"
              className="text-black text-xl no-underline hover:font-bold"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#"
              className="text-black text-xl no-underline hover:font-bold"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#"
              className="text-black text-xl no-underline hover:font-bold"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
