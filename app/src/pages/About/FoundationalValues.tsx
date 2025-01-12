import { User, Target, Lightbulb, Lock } from "lucide-react";

const values = [
  {
    icon: User,
    title: "Customer First",
    description:
      "Optimize content for search engines by including keywords in titles.",
    bgClass: "bg-purple-50",
  },
  {
    icon: Target,
    title: "Precision Craft",
    description:
      "Optimize content for search engines by including keywords in titles.",
    bgClass: "bg-purple-50",
  },
  {
    icon: Lightbulb,
    title: "Innovative Idea",
    description:
      "Optimize content for search engines by including keywords in titles.",
    bgClass: "bg-purple-50",
  },
  {
    icon: Lock,
    title: "Protect Integrity",
    description:
      "Optimize content for search engines by including keywords in titles.",
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
          <span className="text-3xl lg:text-4xl 2xl:text-5xl font-bold italic text-primary">
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
