"use client"
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Marketing Director",
    review:
      "Ignite Visibility's detailed-oriented efforts have produced results, including significant increases in both organic rankings and leads. Professional, committed, and experienced.",
    image: "/path/to/image1.jpg", // Replace with actual image URLs
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "CEO",
    review:
      "Their strategy was innovative, and their execution was flawless. The team ensured our growth was sustainable.",
    image: "/path/to/image2.jpg",
    rating: 5,
  },
  {
    name: "Michael Lee",
    role: "Tech Lead",
    review:
      "The team delivered impressive results and ensured that all our requirements were met in a timely manner.",
    image: "/path/to/image3.jpg",
    rating: 5,
  },
  {
    name: "Sophia Brown",
    role: "Product Manager",
    review:
      "Highly recommend their services! Their expertise is unmatched, and they truly understand client needs.",
    image: "/path/to/image4.jpg",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Entrepreneur",
    review:
      "They went above and beyond to ensure our satisfaction. Their attention to detail was remarkable.",
    image: "/path/to/image5.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, role, review, image, rating } = testimonials[currentIndex];

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Hear from Our <span className="italic font-bold">Satisfied Clients</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <div className="text-center md:text-left">
          <p className="text-lg italic text-gray-700 mb-4">
            <span className="text-purple-500 text-3xl">“</span>
            {review}
            <span className="text-purple-500 text-3xl">”</span>
          </p>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
          <div className="flex justify-center md:justify-start mt-2">
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">
                  ★
                </span>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-700 transition"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-700 transition"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
