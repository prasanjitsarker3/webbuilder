import { User, Target, Lightbulb, Lock, Award, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Approach",
    description:
      "Prioritizing client needs and delivering tailored website solutions that help them succeed.",
    bgClass: "bg-purple-50",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "Ensuring every project is high-performing, secure, and offers an exceptional user experience.",
    bgClass: "bg-purple-50",
  },
  {
    icon: Lightbulb,
    title: "Innovative Idea",
    description:
      "Embracing creativity and modern technology to craft standout, future-ready websites.",
    bgClass: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Fostering transparency and partnership with clients to create shared success..",
    bgClass: "bg-purple-50",
  },
];

export default function FoundationalValues() {
  return (
    <section className=" pb-8 md:pb-16 pt-4 md:pt-8 px-0 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-6 md:mb-8 lg:mb-12">
          <span className=" text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold">
            Our Foundational{" "}
          </span>
          <span className="text-3xl lg:text-4xl 2xl:text-5xl font-bold  text-primary">
            Values
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`${value.bgClass} group rounded-none md:rounded-3xl p-8 transition-transform hover:scale-100 hover:bg-primary`}
            >
              <div className="text-purple-500 mb-3  md:mb-6 group-hover:text-white">
                <value.icon size={24} />
              </div>
              <h3 className=" text-base md:text-xl font-bold mb-4 group-hover:text-white">
                {value.title}
              </h3>
              <p className=" text-sm md:text-base text-gray-600 group-hover:text-white">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
