'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What services do you offer?",
    answer: "Our agency provides a wide range of marketing services, including digital marketing, SEO, social media management, content creation, email marketing, branding, and advertising campaigns."
  },
  {
    question: "How do you measure the success of a marketing campaign?",
    answer: "We track key performance indicators (KPIs) such as ROI, conversion rates, engagement metrics, website traffic, and other relevant metrics specific to your campaign goals."
  },
  {
    question: "What is the typical timeline for seeing results from your marketing?",
    answer: "Timeline varies by service, but typically you can expect initial results within 3-6 months. SEO may take longer, while paid advertising can show immediate results."
  },
  {
    question: "How much do your marketing services cost?",
    answer: "Our pricing is customized based on your specific needs and goals. We offer flexible packages starting from basic to comprehensive solutions."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center mb-12 text-4xl md:text-5xl font-bold">
          Questions? We've Got <span className="italic">Answers!</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <div className="text-purple-500 ml-4">
                  {openIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

