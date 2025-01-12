import React from "react";
import MainBanner from "../src/pages/Home/MainBanner";
import VideoBanner from "../src/pages/Home/BannerVideo";
import ProfitMarketingPartner from "../src/pages/Home/ProfitMarketingPartner";
import DigitalSolution from "../src/pages/Home/DigitalSolution";
import Portfolio from "../src/pages/Home/Portfolios";
import PricingCard from "../src/pages/Home/PricingCard";
import Testimonials from "../src/pages/Home/Testimonials";
import TeamMember from "../src/pages/Home/TeamMember";
import BlogSection from "../src/pages/Home/BlogSection";
import Consultation from "../src/pages/Home/Consultation";
import FooterSection from "../src/common/Footer";

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
      <Portfolio />
      <PricingCard />
      <Testimonials />
      <TeamMember />
      {/* <BlogSection /> */}
      <Consultation />
      <FooterSection />
    </div>
  );
}
