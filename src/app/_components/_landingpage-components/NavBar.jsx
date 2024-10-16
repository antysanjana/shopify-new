"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

            <motion.div
              className="absolute mt-11 flex justify-between inset-x-0 z-20 w-full px-6 bg-primary overflow-hidden"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              <div>
                <NavBarLinks />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden md:flex">
          <NavBarLinks />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
