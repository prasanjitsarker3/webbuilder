"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Marketing Director",
    quote:
      "Ignite Visibility's detailed-oriented efforts have produced results, including significant increases in both organic rankings and leads. Professional, committed, and experienced, the team executes efficient.",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/997773960/photo/handsome-young-businessman.jpg?s=612x612&w=0&k=20&c=ltWzrGrzERzUjbtkAm1zCPO7ri_M3AICgsq9eWard_I=",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "CEO",
    quote:
      "The team's innovative approach and dedication to excellence have transformed our digital presence. Their strategic insights and consistent delivery of results have made them an invaluable partner experienced.",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/175358980/photo/confident-executive-posing.jpg?s=612x612&w=0&k=20&c=fhxBfpqZtRUgp7EJK4NWtvZJqu2NkG09heLulS3gZBU=",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Operations Manager",
    quote:
      "Working with this team has been a game-changer for our business. Their attention to detail and proactive communication have made complex projects feel seamless and achievable proactive communication have",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/1320492251/photo/low-key-portrait-of-handsome-indian-young-businessman-looking-at-the-camera-low-key-side-view.jpg?s=612x612&w=0&k=20&c=X7n4Epc5bRq8B9tWaJU3tiucAVzaas1g3eVtqbn7oSg=",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className=" w-full container mx-auto md:px-8 px-4 py-16">
      <h2 className="text-center text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-16">
        Hear from Our <span className="italic text-primary">Satisfied</span>{" "}
        Clients
      </h2>

      <div className="grid grid-cols-12 items-center justify-center gap-8  ">
        <div className=" col-span-12 lg:col-span-5 relative h-[26rem] 2xl:h-[32rem] w-[22rem] 2xl:w-[26rem]">
          <Image
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            width={300}
            height={400}
            className="rounded-lg h-full w-full object-cover"
          />
          <div className="absolute w-[70%] 2xl:w-[85%] left-1/2 transform -translate-x-1/2 bottom-6 bg-[#8257E9] text-white p-4 rounded-lg space-y-1">
            <div className="flex justify-center gap-1">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-current text-yellow-400"
                />
              ))}
            </div>
            <h3 className="font-semibold text-lg text-center">
              {currentTestimonial.name}
            </h3>
            <p className="text-sm opacity-90 text-center">
              {currentTestimonial.role}
            </p>
          </div>
        </div>

        <div className=" col-span-12 lg:col-span-6 relative">
          <div className="text-6xl text-[#8257E9] font-serif absolute top-0 lg:-top-8 left-0">
            <Image
              src={"/testiic.svg"}
              alt="logo"
              width={60}
              height={60}
              className=" h-12 w-12"
            />
          </div>
          <blockquote className="text-xl md:text-3xl 2xl:text-4xl italic text-gray-700 mb-8 relative z-10 pt-14 lg:pt-8">
            " {currentTestimonial.quote} "
          </blockquote>
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              className="p-4 rounded-full bg-[#8257E9] text-white hover:bg-[#724CC7] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-4 rounded-full bg-[#8257E9] text-white hover:bg-[#724CC7] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
