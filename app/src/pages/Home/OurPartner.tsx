"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OurPartner = () => {
  const items = [
    {
      id: 1,
      img: "/Client/ATE.png",
    },
    {
      id: 2,
      img: "/Client/JSB.png",
    },
    {
      id: 3,
      img: "/Client/Cfbd.png",
    },
    {
      id: 4,
      img: "/Client/FAO.png",
    },
    {
      id: 5,
      img: "/Client/FTI.png",
    },
    {
      id: 6,
      img: "/Client/HAO.png",
    },
    {
      id: 7,
      img: "/Client/TMI.png",
    },
  ];

  return (
    <div className="pb-8 w-full container mx-auto   md:px-8 px-4">
      <h1 className=" text-2xl md:text-4xl 2xl:text-5xl  py-3 text-center font-semibold">
        Our <span className=" text-primary">Valued</span> Clients
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-7 gap-8 pt-12">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-primary rounded-sm shadow-lg overflow-hidden cursor-pointer"
            whileHover={{
              backgroundColor: "#683ebc",
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.img}
                alt="Client logo"
                width={500}
                height={500}
                className="p-1 "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
