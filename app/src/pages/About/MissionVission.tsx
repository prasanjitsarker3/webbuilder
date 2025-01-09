import { Target, Mountain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MissionVision() {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our <span className="italic">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              We started as a small, passionate team of marketers and
              strategists with a shared vision—to help businesses grow in the
              digital landscape. Over the years, we have expanded into a full-
              service agency, driven by our commitment to delivering measurable
              results and impactful solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center bg-[#7C3AED] text-white px-6 py-3 rounded-full hover:bg-[#6D28D9] transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-gray-900 hover:bg-gray-100 transition-colors duration-200"
              >
                View Our Portfolio
              </Link>
            </div>
            {/* Decorative Arrow */}
            <div className="hidden lg:block absolute -bottom-12 right-0 transform translate-x-1/2">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="text-[#7C3AED]"
              >
                <path
                  d="M20 80 Q 40 80, 50 60 T 100 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[500px]">
            {/* Top Right Image */}
            <div className="col-span-4 col-start-3 row-span-3 relative rounded-2xl overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/digital-circle-circuit-blue-background-futuristic-technology_53876-124643.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                alt="Modern office space"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="col-span-3 row-span-3 row-start-4 relative rounded-2xl overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/digital-circle-circuit-blue-background-futuristic-technology_53876-124643.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                alt="Workspace setup"
                fill
                className="object-cover"
              />
            </div>

            {/* Purple Element */}
            <div className="col-span-2 col-start-4 row-span-2 row-start-3 relative">
              <div className="absolute inset-4 bg-[#7C3AED] rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 h-8 text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </div>
            </div>

            {/* Bottom Right Image */}
            <div className="col-span-3 col-start-4 row-span-3 row-start-4 relative rounded-2xl overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/digital-circle-circuit-blue-background-futuristic-technology_53876-124643.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                alt="Minimalist workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
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
          <div className="space-y-12 py-4">
            {/* Mission Section */}
            <div className="space-y-4">
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
            <div className="space-y-4">
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
