"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Our agency provides a wide range of marketing services, including digital marketing, SEO, social media management, content creation, email marketing, branding, and advertising campaigns.",
  },
  {
    question: "How do you measure the success of a marketing campaign?",
    answer:
      "We track key performance indicators (KPIs) such as ROI, conversion rates, engagement metrics, website traffic, and other relevant metrics specific to your campaign goals.",
  },
  {
    question:
      "What is the typical timeline for seeing results from your marketing?",
    answer:
      "Timeline varies by service, but typically you can expect initial results within 3-6 months. SEO may take longer, while paid advertising can show immediate results.",
  },
  {
    question: "How much do your marketing services cost?",
    answer:
      "Our pricing is customized based on your specific needs and goals. We offer flexible packages starting from basic to comprehensive solutions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Set default to the first FAQ

  return (
    <section className=" pb-8 md:pb-16 pt-2 md:pt-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center mb-6 md:mb-12 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold">
          Questions? We've Got <span className="text-primary">Answers!</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-primary rounded-2xl overflow-hidden bg-white transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-2 md:py-4 px-4 md:px-6 text-left"
              >
                <h3 className="font-semibold text-base md:text-lg">
                  {faq.question}
                </h3>
                <div className="bg-primary text-white rounded-full ml-4">
                  {openIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p
                  className={`text-sm 2xl:text-base text-gray-600 ${
                    openIndex === index ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
