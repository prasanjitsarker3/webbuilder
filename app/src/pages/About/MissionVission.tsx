import { Target, Mountain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MissionVision() {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-[#7C3AED] rounded-3xl p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
                What We <span className="italic">Stand</span> For:
                <br />
                Our <span className="italic">Commitment</span> to
                <br />
                Excellence
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                A Commitment to Creativity, Strategy, and Sustainable Success.
                We strive to transform businesses with innovative marketing
                solutions that drive growth, inspire engagement, and foster
                long-term success in a constantly evolving digital landscape
              </p>
            </div>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-white text-[#7C3AED] px-6 py-3 rounded-full mt-8 w-fit hover:bg-opacity-90 transition-all duration-200"
            >
              Get 30min Free Consultation
            </Link>
          </div>

          {/* Right Section */}
          <div className="space-y-12">
            {/* Mission Section */}
            <div className="space-y-4 bg-gray-100 p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-[#7C3AED]" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses through innovative digital marketing
                strategies that drive sustainable growth, enhance brand
                presence, and deliver measurable results.
              </p>
              <ul className="space-y-3">
                {[
                  "Focus on client success and growth",
                  "Data-driven strategies for measurable impact",
                  "Building strong, lasting client partnerships",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-[#7C3AED] text-xl">+</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision Section */}
            <div className="space-y-4 bg-gray-100 p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Mountain className="w-8 h-8 text-[#7C3AED]" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a leading force in the digital marketing industry by
                consistently pushing the boundaries of creativity, technology,
                and strategy.
              </p>
              <ul className="space-y-3">
                {[
                  "Innovate with cutting-edge marketing solutions",
                  "Data-driven strategies for measurable impact",
                  "Shape the future of digital marketing",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-[#7C3AED] text-xl">+</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
