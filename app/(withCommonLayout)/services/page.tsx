import FAQ from "@/app/src/common/FAQ";
import FooterSection from "@/app/src/common/Footer";
import Consultation from "@/app/src/pages/Home/Consultation";
import Portfolio from "@/app/src/pages/Home/Portfolios";
import Testimonials from "@/app/src/pages/Home/Testimonials";
import GrowthMetrics from "@/app/src/pages/services/GrowthMetrics";
import ServiceBanner from "@/app/src/pages/services/ServiceBanner";

const ServicePage = () => {
  return (
    <div>
      <ServiceBanner />
      <GrowthMetrics />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Consultation />
      <FooterSection />
    </div>
  );
};

export default ServicePage;
