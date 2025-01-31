"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const MainBanner = () => {
  const corporateData = [
    "/Photo/Corporate1.jpg",
    "/Photo/Corporate3.avif",
    "/Photo/Corporate2.avif",
  ];

  return (
    <div className="">
      <main className="relative h-[80vh] lg:h-[100vh] 2xl:h-[90vh] bg-gradient-to-b from-white to-[#B595F3] rounded-b-[40px]">
        <div className="w-full h-full container mx-auto my-0 md:px-8 px-4 flex flex-col justify-center items-center">
          <div>
            {/* Testimonial Section */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-1">
                {/* Profile Images */}
                <div className="flex -space-x-3">
                  {corporateData.map((i, index) => (
                    <motion.div
                      key={index}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      <img
                        src={i}
                        alt={`Profile ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                {/* Star Rating */}
                <div>
                  <motion.div
                    className="flex items-center gap-1 ml-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </motion.div>
                  <span className="ml-2 text-sm font-medium">
                    20+ Company Boosted
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              className="text-center w-full md:max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="heading-style text-3xl lg:text-5xl 2xl:text-6xl font-bold mb-6 leading-tight">
                Empowering <span className="">Visionaries</span> to
                <br />
                Conquer the <span className="text-primary">
                  Digital World.
                </span>{" "}
              </h1>
              <p className="text-gray-800 text-base md:text-lg 2xl:text-xl mb-8 max-w-3xl mx-auto">
                Get expert support to turn your vision into a stunning website.
                Our tailored solutions build your online presence, attract
                customers, and drive business growth effortlessly.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center">
                <motion.button
                  className="px-4 lg:px-8 py-2 lg:py-3 bg-purple-600 text-white rounded-full text-sm lg:text-base font-normal lg:font-semibold hover:bg-purple-700 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  className="px-4 lg:px-8 py-2 lg:py-3 border-2 border-white text-white rounded-full text-sm lg:text-base font-normal lg:font-semibold hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  View Service
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default MainBanner;
