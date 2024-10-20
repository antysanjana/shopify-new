"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { left: 0, opacity: 1 },
    closed: { left: "-100%", opacity: 0 },
  };

  return (
    <div className="bg-primary">
      <div className="flex justify-between items-center w-10/12 py-4 mx-auto ">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            className="mainlogo"
            width={500}
            height={500}
          />
        </div>
        <div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.1,
                  }}
                  className="absolute mt-11 flex justify-between inset-x-0 z-20 w-full px-6 bg-primary overflow-hidden gap-5"
                >
                  <div className="flex flex-col gap-4 pb-4">
                    <NavBarLinks />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="hidden md:flex md:flex-row md:gap-4">
          <NavBarLinks />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
