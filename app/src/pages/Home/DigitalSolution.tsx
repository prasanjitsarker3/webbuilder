"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  GanttChartIcon as ChartGantt,
  CodeXml,
  Cpu,
  Figma,
  Settings,
} from "lucide-react";

const DigitalSolution = () => {
  const services = [
    {
      icon: ChartGantt,
      title: "Planning & Strategy",
      description:
        "Develop winning website strategies with SEO focus and user-centered planning.",
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      icon: Figma,
      title: "Design Services",
      description:
        "Create stunning, responsive designs that captivate users and enhance brand identity.",
      bgColor: "bg-[#F7F5FF]",
      iconBg: "bg-[#F1EDFF]",
      iconColor: "text-[#7B61FF]",
    },
    {
      icon: CodeXml,
      title: "Development Services",
      description:
        "Build high-quality websites tailored to your business goals and user needs.",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full container mx-auto md:px-8 px-4 pt-4 pb-8 lg:pb-16 lg:pt-6">
      <motion.h1
        className="text-2xl lg:text-4xl 2xl:text-5xl font-bold text-center pb-6 lg:pb-12 2xl:pb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Complete Technical
        <span className="text-primary"> Solution</span>
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 2xl:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              className={`relative group overflow-hidden p-3 lg:p-6 rounded-lg md:rounded-[32px] ${service.bgColor} transition-all duration-300 ease-in-out hover:bg-primary hover:text-white`}
            >
              <div className="relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${service.iconBg} mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon
                    className={`w-6 h-6 ${service.iconColor} group-hover:text-primary`}
                  />
                </motion.div>

                <div className="space-y-2 lg:space-y-3 2xl:space-y-4">
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-xs md:text-base text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default DigitalSolution;
