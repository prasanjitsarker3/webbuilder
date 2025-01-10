import FAQ from "@/app/src/common/FAQ";
import FooterSection from "@/app/src/common/Footer";
import Consultation from "@/app/src/pages/Home/Consultation";
import PricingCard from "@/app/src/pages/Home/PricingCard";

const PricingPage = () => {
  return (
    <div>
      <section className="min-h-[500px] w-full relative overflow-hidden bg-gradient-to-b from-white  to-[#B595F3] rounded-b-[40px] flex justify-center items-center">
        <div className="w-full h-full md:px-0 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-8">
              Driving <span className="italic">Success</span> Together with{" "}
              <span className="italic">Innovation</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We integrate creativity, strategic thinking, and innovative
              technology to help businesses unlock their full potential, adapt
              to changing
            </p>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-200/50 to-transparent pointer-events-none" />
      </section>
      <PricingCard />
      <FAQ />
      <Consultation />
      <FooterSection />
    </div>
  );
};

export default PricingPage;
