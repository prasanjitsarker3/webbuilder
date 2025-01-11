import { Sparkles } from "lucide-react";

const Consultation = () => {
  return (
    <div className=" ">
      <section className="w-full px-4 py-8 md:py-14 lg:py-24 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-purple-200 to-purple-100 rounded-t-[50px]" />

        {/* Decorative elements */}
        <div className=" hidden md:block absolute top-20 right-32">
          <Sparkles className="w-8 h-8 text-purple-600" />
        </div>
        <div className=" hidden md:block absolute top-20 left-32">
          <Sparkles className="w-8 h-8 text-purple-600" />
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center space-y-3 lg:space-y-4 2xl:space-y-6">
          <h2 className=" text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight">
            Let's Create The Best Marketing Solution For Your Business
          </h2>

          <p className=" text-sm  lg:text-base 2xl:text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us today to see how we can create a custom digital marketing
            strategy that drives growth for your business
          </p>

          <div className="pt-4">
            <a
              href="#consultation"
              className="inline-block px-8 py-2.5 md:py-3 2xl:py-4 bg-purple-600 text-white text-sm md:text-base font-medium md:font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300"
            >
              Get 30min Free Consultation
            </a>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className=" hidden md:block absolute left-1/4 bottom-12 w-16 h-16 bg-purple-200 rounded-lg transform -rotate-12" />
        <div className=" hidden md:block absolute right-1/3 top-10 w-12 h-12 bg-purple-200 rounded-lg transform rotate-45" />
        <div className="hidden md:block absolute left-1/3 top-16 w-8 h-8 bg-purple-200 rounded-lg transform rotate-12" />
      </section>
    </div>
  );
};

export default Consultation;
