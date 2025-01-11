import { BarChart, Edit, Globe, Mail, RefreshCw, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const DigitalSolution = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Keyword Research",
      description:
        "Identify and use relevant keywords that your target audience is searching for. Regularly update to stay ahead.",
      link: "/search",
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      icon: Search,
      title: "On-Page SEO",
      description:
        "Optimize content for search engines by including keywords in titles, headers, and meta descriptions.",
      link: "/search",
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Distribute content through email newsletters to keep your subscribers informed and engaged.",
      link: "/search",
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      title: "Analytics Tracking",
      description:
        "Use these insights to refine strategies and enhance overall effectiveness.",
      icon: BarChart, // Replace with the actual icon from Lucide
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      title: "Quality Writing",
      description:
        "Craft engaging and informative content that provides value. Compelling clear structure.",
      icon: Edit,
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      title: "Digital Marketing",
      description:
        "Develop and execute targeted digital campaigns across various channels such as social media.",
      icon: Globe,
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
  ];

  return (
    <div className="w-full container mx-auto md:px-8 px-4 pt-4 pb-8 lg:pb-16 lg:pt-6">
      <h1 className=" text-2xl lg:text-4xl 2xl:text-5xl font-bold text-center pb-6 lg:pb-12 2xl:pb-16">
        All Round <span className="italic text-primary">Digital Solution</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 2xl:gap-12 ">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`relative group overflow-hidden p-3 lg:p-6 rounded-[32px] ${service.bgColor} transition-all duration-300 ease-in-out hover:bg-primary hover:text-white`}
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${service.iconBg} mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300`}
                >
                  <Icon
                    className={`w-6 h-6 ${service.iconColor} group-hover:text-primary`}
                  />
                </div>

                {/* Text Content */}
                <div className=" space-y-2 lg:space-y-3 2xl:space-y-4">
                  <h3 className=" text-base lg:text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className=" text-xs md:text-base text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DigitalSolution;
