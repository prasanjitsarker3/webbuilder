import {
  BarChart,
  ChartGantt,
  CodeXml,
  Cpu,
  Edit,
  Figma,
  Globe,
  Mail,
  RefreshCw,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const DigitalSolution = () => {
  const services = [
    {
      icon: ChartGantt,
      title: "Planning & Strategy",
      description:
        "Develop winning website strategies with SEO focus and user-centered planning.",
      link: "/search",
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      icon: Figma,
      title: "Design Services",
      description:
        "Create stunning, responsive designs that captivate users and enhance brand identity.",
      link: "/search",
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      icon: CodeXml,
      title: "Development Services",
      description:
        "Build high-quality websites tailored to your business goals and user needs.",
      link: "/search",
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Ensure a seamless user experience with rigorous testing and quality checks.",
      icon: BarChart,
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      title: "Deployment & Hosting",
      description:
        "Launch your website smoothly with reliable hosting and expert deployment.",
      icon: Cpu,
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      title: "Maintenance & Support",
      description:
        "Receive ongoing support and maintenance to keep your website secure.",
      icon: Settings,
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
  ];

  return (
    <div className="w-full container mx-auto md:px-8 px-4 pt-4 pb-8 lg:pb-16 lg:pt-6">
      <h1 className=" text-2xl lg:text-4xl 2xl:text-5xl font-bold text-center pb-6 lg:pb-12 2xl:pb-16">
        Complete Technical
        <span className="text-primary"> Solution</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 2xl:gap-12 ">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`relative group overflow-hidden p-3 lg:p-6 rounded-lg md:rounded-[32px] ${service.bgColor} transition-all duration-300 ease-in-out hover:bg-primary hover:text-white`}
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
                  <h3 className=" text-sm md:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
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
