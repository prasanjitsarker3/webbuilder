import { ArrowUp, TrendingUp } from "lucide-react";
import Link from "next/link";

const metrics = [
  {
    percentage: "75%",
    description:
      "Boost Sales Growth: Achieve an average of 75% increase in sales.",
  },
  {
    percentage: "86%",
    description:
      "Increase Conversion Rates: Experience an average improvement of 86% in conversion rates.",
  },
  {
    percentage: "93%",
    description:
      "Drive Higher Website Traffic: See an average traffic increase of 93% on your website.",
  },
];

export default function GrowthMetrics() {
  return (
    <div className="container mx-auto md:px-8 px-2 py-8 md:py-16">
      <h2 className="text-center text-2xl md:text-4xl 2xl:text-5xl font-bold mb-6 md:mb-10 lg:mb-16">
        Fuel Your Business Growth with Our Proven Strategies
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
        {/* Metrics Circles */}
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center bg-gray-100 rounded-lg md:rounded-3xl p-3"
          >
            <div className=" mb-6">
              <div className=" w-20 h-20 lg:w-32 lg:h-32 rounded-full border-2 border-[#7C3AED] flex items-center justify-center">
                <div className=" text-xl md:text-2xl lg:text-3xl font-bold">
                  {metric.percentage}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm md:text-sm max-w-[200px]">
              {metric.description}
            </p>
          </div>
        ))}

        {/* Total Leads Card */}
        <div className="bg-[#7C3AED] rounded-lg md:rounded-3xl p-5 md:p-8 text-white relative">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className=" text-2xl md:text-4xl font-bold mb-4">100+</div>
          <div className="text-white/90 mb-8 text-sm md:text-base">
            Projects Delivered
          </div>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-full  transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
