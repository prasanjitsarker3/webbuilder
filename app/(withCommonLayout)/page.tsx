import React from "react";
import MainBanner from "../src/pages/Home/MainBanner";
import VideoBanner from "../src/pages/Home/BannerVideo";
import ProfitMarketingPartner from "../src/pages/Home/ProfitMarketingPartner";
import DigitalSolution from "../src/pages/Home/DigitalSolution";

export default function HomePage() {
  return (
    <div>
      <div className=" ">
        <MainBanner />
      </div>
      <div className="-mt-20 2xl:-mt-32">
        <VideoBanner />
      </div>
      <ProfitMarketingPartner />
      <DigitalSolution />
    </div>
  );
}
