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
    name: "Shoran A Rohimn",
    role: "Corporate Fashion BD",
    quote:
      "Wevloper did a great job on our website. They used our designs and made the site look good on all screen sizes, keeping it simple and easy to use even with lots of data. Highly recommended and would work with them again.",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/997773960/photo/handsome-young-businessman.jpg?s=612x612&w=0&k=20&c=ltWzrGrzERzUjbtkAm1zCPO7ri_M3AICgsq9eWard_I=",
  },
  {
    id: 2,
    name: "Tahmid Hasan",
    role: "JSB Engineering Co.",
    quote:
      "I am absolutely impressed with Wevloper's designs and wish we had found them sooner. Their designs are incredible, and their willingness to make revisions even when it's not their fault stands out.",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/175358980/photo/confident-executive-posing.jpg?s=612x612&w=0&k=20&c=fhxBfpqZtRUgp7EJK4NWtvZJqu2NkG09heLulS3gZBU=",
  },
  {
    id: 3,
    name: "Imrul Kayes",
    role: "Top Mark Internationa",
    quote:
      "Working with this team has been a game-changer for our business. Their attention to detail and proactive communication have made complex projects feel seamless and achievable proactive communication have",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/1320492251/photo/low-key-portrait-of-handsome-indian-young-businessman-looking-at-the-camera-low-key-side-view.jpg?s=612x612&w=0&k=20&c=X7n4Epc5bRq8B9tWaJU3tiucAVzaas1g3eVtqbn7oSg=",
  },
  {
    id: 4,
    name: "Foysal Bin Ekram",
    role: "Foysal Tred International",
    quote:
      "Working with this team has been a game-changer for our business. Their attention to detail and proactive communication have made complex projects feel seamless and achievable proactive communication have",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/1320492251/photo/low-key-portrait-of-handsome-indian-young-businessman-looking-at-the-camera-low-key-side-view.jpg?s=612x612&w=0&k=20&c=X7n4Epc5bRq8B9tWaJU3tiucAVzaas1g3eVtqbn7oSg=",
  },
  {
    id: 5,
    name: "Foysal Bin Ekram",
    role: "Foysal Tred International",
    quote:
      "Working with this team has been a game-changer for our business. Their attention to detail and proactive communication have made complex projects feel seamless and achievable proactive communication have",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/1320492251/photo/low-key-portrait-of-handsome-indian-young-businessman-looking-at-the-camera-low-key-side-view.jpg?s=612x612&w=0&k=20&c=X7n4Epc5bRq8B9tWaJU3tiucAVzaas1g3eVtqbn7oSg=",
  },
  {
    id: 6,
    name: "Foysal Bin Ekram",
    role: "Foysal Tred International",
    quote:
      "Working with this team has been a game-changer for our business. Their attention to detail and proactive communication have made complex projects feel seamless and achievable proactive communication have",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/1320492251/photo/low-key-portrait-of-handsome-indian-young-businessman-looking-at-the-camera-low-key-side-view.jpg?s=612x612&w=0&k=20&c=X7n4Epc5bRq8B9tWaJU3tiucAVzaas1g3eVtqbn7oSg=",
  },
  {
    id: 7,
    name: "Imrul Kayes",
    role: "Top Mark Internationa",
    quote:
      "Working with this team has been a game-changer for our business. Their attention to detail and proactive communication have made complex projects feel seamless and achievable proactive communication have",
    rating: 5,
    image:
      "https://media.istockphoto.com/id/1320492251/photo/low-key-portrait-of-handsome-indian-young-businessman-looking-at-the-camera-low-key-side-view.jpg?s=612x612&w=0&k=20&c=X7n4Epc5bRq8B9tWaJU3tiucAVzaas1g3eVtqbn7oSg=",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(3);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className=" w-full container mx-auto md:px-8 px-4 py-4 md:py-12 2xl:py-16 ">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-6 lg:mb-12 2x:mb-16">
        Feedback from Our <span className="text-primary">Thrilled</span> Clients
      </h2>

      <div className="grid grid-cols-12 items-center justify-center gap-0 md:gap-8  ">
        <div className=" col-span-12 lg:col-span-5 relative h-[20rem] md:h-[26rem] 2xl:h-[32rem] w-[18rem] md:w-[22rem] 2xl:w-[26rem] mx-auto">
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
            <h3 className="font-semibold text-base md:text-lg text-center">
              {currentTestimonial.name}
            </h3>
            <p className="text-sm opacity-90 text-center">
              {currentTestimonial.role}
            </p>
          </div>
        </div>

        <div className=" col-span-12 lg:col-span-6 relative">
          <div className=" hidden md:block ext-6xl text-[#8257E9] font-serif absolute top-0 lg:-top-8 left-0">
            <Image
              src={"/testiic.svg"}
              alt="logo"
              width={60}
              height={60}
              className=" h-6 w-6 md:h-12 md:w-12"
            />
          </div>
          <blockquote className="text-lg md:text-3xl 2xl:text-4xl italic text-gray-700 mb-8 relative z-10 pt-14 lg:pt-8">
            " {currentTestimonial.quote} "
          </blockquote>
          <div className="flex gap-4">
            {/* Dot Create and Middle active  and clicked way change and active color  */}
            <div className="flex mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={` rounded-full ${
                    index === currentIndex
                      ? "bg-primary h-6 w-6 -mt-1"
                      : "bg-gray-300 h-4 w-4"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
