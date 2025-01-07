import React from "react";

const ProfitMarketingPartner = () => {
  return (
    <div className="bg-[#e6dcfb]">
      <div className=" w-full container mx-auto md:px-8 px-4 py-12">
        <div className=" flex flex-col lg:flex-row gap-12">
          <div className=" w-full md:w-1/2 flex flex-col justify-center">
            <h1 className=" font-semibold text-5xl">Profit Your </h1>
            <h1 className=" font-semibold text-5xl">Marketing Partner </h1>
            <h1 className=" font-semibold text-5xl">
              for{" "}
              <span className=" font-extrabold font-mono text-6xl">Growth</span>
            </h1>
            <p className=" text-base text-gray-600 pt-4">
              With over a decade of experience, we specialize in delivering
              results-driven marketing strategies that empower businesses to
              thrive
            </p>
          </div>
          <div className=" w-full md:w-1/2 flex justify-between items-center">
            <div className=" w-full grid grid-cols-12">
              <div className=" col-span-4 space-y-2">
                <h1 className=" text-6xl font-bold text-primary">95 %</h1>
                <p className=" text-gray-600 font-normal text-base">
                  Cleint Satisfaction
                </p>
              </div>
              <div className=" col-span-4 space-y-2 text-center ">
                <h1 className=" text-6xl font-bold text-primary">95 %</h1>
                <p className=" text-gray-600 font-normal text-base">
                  Cleint Satisfaction
                </p>
              </div>
              <div className=" col-span-4 space-y-2 text-center ">
                <h1 className=" text-6xl font-bold text-primary">95 %</h1>
                <p className=" text-gray-600 font-normal text-base">
                  Cleint Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitMarketingPartner;
