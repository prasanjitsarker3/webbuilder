"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, MoveUpRight, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={` ${
        scrolling ? "w-full fixed top-0  z-40 bg-white" : "fixed w-full z-40 "
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full container mx-auto md:px-8 px-4">
        <div className="w-full flex justify-between items-center text-[#824EEB] py-3">
          {/* First Div */}
          <div className="flex-1 flex justify-start items-center">
            <Link href={"/"} className="flex items-center gap-3">
              <Image
                src={"/1.png"}
                alt=""
                width={40}
                height={40}
                className=" "
              />
            </Link>
          </div>

          {/* Second Div */}
          <div className=" hidden md:block flex-1 flex justify-center items-center">
            <div className=" text-sm lg:text-base 2xl:text-lg flex items-center text-center gap-4 2xl:gap-6">
              <Link href={"/"} className=" text-[#824EEB] cursor-pointer">
                Home
              </Link>
              <Link href={"/about"} className=" text-[#824EEB] cursor-pointer">
                About Us
              </Link>
              <Link
                href={"/services"}
                className=" text-[#824EEB] cursor-pointer"
              >
                Services
              </Link>
              <Link
                href={"/pricing"}
                className=" text-[#824EEB] cursor-pointer"
              >
                Pricing
              </Link>

              <Link
                href={"/contact"}
                className=" text-[#824EEB] cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Third Div */}
          <div className="hidden md:block flex-1">
            <div className="   flex items-center gap-5 justify-end md:pr-0 pr-12">
              <button
                className={`py-2 2xl:py-3 px-6 ${
                  scrolling
                    ? " border border-[#824EEB]"
                    : " border border-[#824EEB] "
                }  text-[#824EEB] rounded-full flex items-center gap-2`}
              >
                Get in touch <MoveUpRight size={16} />
              </button>
            </div>
          </div>
          <button className="md:hidden text-[#824EEB]" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 h-[100vh] bg-white shadow-lg z-40 w-full left-0 md:hidden">
          <div className="  w-full p-3 ">
            <div className="flex justify-between items-center p-1 text-[#824EEB]">
              <div className="flex items-center gap-3 ">
                <Image
                  src={"/1.png"}
                  alt=""
                  width={40}
                  height={40}
                  className=" "
                />
                <h1 className="text-xl md:text-3xl font-bold vigaRegular">
                  Builder
                </h1>
              </div>
              <div
                onClick={() => setIsOpen(false)}
                className="bg-[#824EEB] text-white cursor-pointer"
              >
                <X />
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-1">
            <Link
              href={"/"}
              onClick={() => setIsOpen(false)}
              className="text-lg text-black cursor-pointer py-1 px-1 hover:bg-primary hover:text-white"
            >
              Home
            </Link>
            <Link
              href={`/about`}
              onClick={() => setIsOpen(false)}
              className="text-lg text-black cursor-pointer py-1 px-1 hover:bg-primary hover:text-white"
            >
              About Us
            </Link>
            <Link
              href={"/services"}
              onClick={() => setIsOpen(false)}
              className="text-lg text-black cursor-pointer py-1 px-1 hover:bg-primary hover:text-white"
            >
              Services
            </Link>
            <Link
              href={"/pricing"}
              onClick={() => setIsOpen(false)}
              className="text-lg text-black cursor-pointer py-1 px-1 hover:bg-primary hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href={"/contact"}
              onClick={() => setIsOpen(false)}
              className="text-lg text-black cursor-pointer py-1 px-1 hover:bg-primary hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
