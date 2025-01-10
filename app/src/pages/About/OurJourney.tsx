import Image from "next/image";
import Link from "next/link";

const OurJourney = () => {
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
          <div className="">
            <div className="grid grid-cols-12 gap-12 relative">
              {/* Top Right Image */}
              <div className="col-span-6 space-y-7 w-full h-[28rem]">
                <div className="h-1/2 w-full rounded-3xl flex justify-center lg:justify-end ">
                  <Image
                    src={
                      "https://img.freepik.com/premium-photo/three-people-sitting-table_1124848-131270.jpg?uid=R181855209&ga=GA1.1.1524916337.1735299616&semt=ais_hybrid"
                    }
                    alt=" "
                    width={300}
                    height={300}
                    className="h-full w-full lg:w-[80%] object-cover rounded-3xl"
                  />
                </div>
                <div className="h-1/2 rounded-3xl ">
                  <Image
                    src={
                      "https://img.freepik.com/premium-photo/three-people-sitting-table_1124848-131270.jpg?uid=R181855209&ga=GA1.1.1524916337.1735299616&semt=ais_hybrid"
                    }
                    alt=" "
                    width={300}
                    height={300}
                    className="h-full w-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              <div className="col-span-6 space-y-7 w-full h-[28rem] mt-16">
                <div className="h-1/2 rounded-3xl">
                  <Image
                    src={
                      "https://img.freepik.com/premium-photo/three-people-sitting-table_1124848-131270.jpg?uid=R181855209&ga=GA1.1.1524916337.1735299616&semt=ais_hybrid"
                    }
                    alt=" "
                    width={300}
                    height={300}
                    className="h-full w-full object-cover rounded-3xl"
                  />
                </div>
                <div className="h-1/2 rounded-3xl  w-full">
                  <Image
                    src={
                      "https://img.freepik.com/premium-photo/three-people-sitting-table_1124848-131270.jpg?uid=R181855209&ga=GA1.1.1524916337.1735299616&semt=ais_hybrid"
                    }
                    alt=" "
                    width={300}
                    height={300}
                    className="h-full w-full lg:w-[80%] object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Centered Absolute Div */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white w-48 h-16 rounded-full flex items-center justify-center">
                <h1 className="text-center">Wevloper Technology</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
