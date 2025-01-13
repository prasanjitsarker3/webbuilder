import { Star } from "lucide-react";
import VideoBanner from "./BannerVideo";

const MainBanner = () => {
  return (
    <div className="">
      <main className=" relative h-[80vh] lg:h-[100vh] 2xl:h-[90vh] bg-gradient-to-b from-white to-[#824EEB] rounded-b-[40px] ">
        <div className=" w-ful h-full container mx-auto my-0 md:px-8 px-4 flex flex-col justify-center  items-center ">
          <div>
            {/* Testimonial Section */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {/* Profile Images */}
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={`https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R181855209&ga=GA1.1.1524916337.1735299616&semt=ais_hybrid`}
                        alt={`Profile ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                {/* Star Rating */}
                <div>
                  <div className="flex items-center gap-1 ml-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    100+ Company Boosted
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-style text-3xl lg:text-5xl 2xl:text-6xl font-bold mb-6 leading-tight">
                Empowering <span className="italic-text">Visionaries</span> to
                <br />
                Conquer the Solutions{" "}
                <span className="italic-text">Digital World.</span>{" "}
              </h1>
              <p className="text-gray-800 text-base md:text-lg 2xl:text-xl mb-8 max-w-3xl mx-auto">
                You get expert support to transform your vision into a stunning,
                professional website. Our tailored solutions help you establish
                a strong online presence, attract more customers, and grow your
                business seamlessly.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center">
                <button className=" px-4 lg:px-8 py-2 lg:py-3 bg-purple-600 text-white rounded-full text-sm lg:text-base font-normal lg:font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
                <button className="px-4 lg:px-8  py-2 lg:py-3 border-2 border-white text-white rounded-full text-sm  lg:text-base font-normal lg:font-semibold hover:bg-primary hover:text-white hover:border-primary transition-colors">
                  View Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default MainBanner;
