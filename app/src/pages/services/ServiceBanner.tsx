"use client";
import { Play, PlayCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServiceBanner = () => {
  return (
    <div>
      <div className="container mx-auto md:px-8 px-4  pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Content */}
          <div>
            <div className=" relative  bg-gradient-to-br from-[#7C3AED] to-[#9F67FF] rounded-3xl flex flex-col justify-center">
              <div className="space-y-6 p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white space-y-2">
                  <div>Innovative</div>
                  <div className="italic">Marketing</div>
                  <div className="italic">Solutions</div>
                  <div>
                    Tailored for <span className="italic">You</span>
                  </div>
                </h1>
              </div>
              <div className=" w-full flex justify-end ">
                <div className=" bg-white w-36 h-14 pl-2 pt-2 pb-2 rounded-s-full">
                  <button className=" bg-slate-800  text-white text-sm h-full w-full rounded-full">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative aspect-video lg:aspect-auto rounded-3xl overflow-hidden flex items-center">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              muted
              loop
            >
              <source src="/BannerVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/20" />

            {/* Play Button */}
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-20 h-20 rounded-full flex items-center justify-center bg-white bg-opacity-15 hover:bg-primary transition-colors duration-200 group"
              onClick={() => {
                console.log("Play video");
              }}
            >
              <div className=" w-16 h-16 bg-white bg-opacity-30 rounded-full flex justify-center items-center">
                <button
                  // onClick={togglePlay}
                  className="flex items-center justify-center w-12 h-12 bg-white text-primary rounded-full transition-all"
                >
                  {/* {isPlaying ? <Pause size={25} /> : <Play size={25} />} */}
                  <Play size={25} />
                </button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
