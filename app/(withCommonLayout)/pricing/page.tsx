import FAQ from "@/app/src/common/FAQ";
import FooterSection from "@/app/src/common/Footer";
import Consultation from "@/app/src/pages/Home/Consultation";
import PricingCard from "@/app/src/pages/Home/PricingCard";

const PricingPage = () => {
  return (
    <div>
      <section className="min-h-[450px] w-full relative overflow-hidden bg-gradient-to-b from-white  to-[#B595F3] rounded-b-[40px] flex justify-center items-center">
        <div className="w-full h-full md:px-0 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-8">
              Driving <span className="italic">Success</span> Together with{" "}
              <span className="italic">Innovation</span>
            </h1>

            <p className="text-base md:text-lg 2xl:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              We integrate creativity, strategic thinking, and innovative
              technology to help businesses unlock their full potential, adapt
              to changing
            </p>
          </div>
        </div>
      </section>
      <div className=" pt-12">
        <PricingCard />
      </div>
      <FAQ />
      <Consultation />
      <FooterSection />
    </div>
  );
};

export default PricingPage;
