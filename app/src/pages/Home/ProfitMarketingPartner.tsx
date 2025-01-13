import { div } from "framer-motion/client";
import React from "react";

const ProfitMarketingPartner = () => {
  return (
    <div className=" py-4 lg:py-16">
      <div className="bg-[#e6dcfb]">
        <div className=" w-full container mx-auto md:px-8 px-4 py-8 lg:py-16 2xl:py-24">
          <div className=" flex flex-col lg:flex-row gap-6 lg:gap-12">
            <div className=" w-full md:w-1/2 flex flex-col justify-center text-center md:text-start">
              <h1 className=" font-semibold text-3xl lg:text-5xl">
                Empowering Your Brand’s
              </h1>
              <h1 className=" font-semibold text-3xl lg:text-5xl">
                Online Success with
              </h1>
              <h1 className=" font-semibold text-3xl lg:text-5xl">
                Professional
                <span className=" font-extrabold font-mono text-4xl lg:text-5xl 2xl:text-6xl text-primary">
                  Websites.
                </span>
              </h1>

              <p className=" text-base text-gray-600 pt-2 lg:pt-4">
                Since 2023, we have specialized in crafting tailored websites
                that empower businesses to establish a strong online presence
                and thrive in the digital world.
              </p>
            </div>
            <div className=" w-full md:w-1/2 flex justify-between items-center">
              <div className=" w-full grid grid-cols-12">
                <div className=" col-span-4 space-y-2">
                  <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-primary">
                    95 %
                  </h1>
                  <p className=" text-gray-600 font-normal text-xs md:text-base">
                    Cleint Satisfaction
                  </p>
                </div>
                <div className=" col-span-4 space-y-2 text-center ">
                  <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-primary">
                    95 %
                  </h1>
                  <p className=" text-gray-600 font-normal text-xs md:text-base">
                    Cleint Satisfaction
                  </p>
                </div>
                <div className=" col-span-4 space-y-2 text-center ">
                  <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-primary">
                    95 %
                  </h1>
                  <p className=" text-gray-600 font-normal text-xs md:text-base">
                    Cleint Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitMarketingPartner;
