import {
  Search,
  Mail,
  BarChart2,
  FileText,
  TrendingUp,
  Share2,
  PieChart,
  BarChart,
  Users,
  MessageSquare,
  Target,
  UserCheck,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "Identify and use relevant keywords that your target audience is searching for. Regularly update.",
  },
  {
    icon: Target,
    title: "On-Page SEO",
    description:
      "Optimize content for search engines by including keywords in titles.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Distribute content through email newsletters to keep your subscribers informed.",
  },
  {
    icon: BarChart2,
    title: "Analytics Tracking",
    description:
      "Use these insights to refine strategies and enhance overall effectiveness.",
  },
  {
    icon: FileText,
    title: "Quality Writing",
    description:
      "Craft engaging and informative content that user provides value. Compelling clear structure",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Develop and execute targeted digital campaigns across various channels such as social media.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Use these insights to refine strategies and enhance overall effectiveness.",
  },
  {
    icon: PieChart,
    title: "Analytics & Reporting",
    description:
      "Optimize content for search engines by including keywords in titles.",
  },
  {
    icon: BarChart,
    title: "Social Analytics",
    description:
      "Distribute content through email newsletters to keep your subscribers informed.",
  },
  {
    icon: MessageSquare,
    title: "Conversion Rate Optimization",
    description:
      "Use these insights to refine strategies and enhance overall effectiveness.",
  },
  {
    icon: Users,
    title: "Content Marketing",
    description:
      "Craft engaging and informative content that user provides value. Compelling clear structure",
  },
  {
    icon: UserCheck,
    title: "Influencer Marketing",
    description:
      "Develop and execute targeted digital campaigns across various channels such as social media.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
      <div className=" w-full container mx-auto">
        <h2 className="text-center mb-12">
          <span className="text-2xl lg:text-4xl 2xl:text-5xl font-bold">
            Transform Your Business with{" "}
          </span>
          <span className=" text-2xl lg:text-4xl 2xl:text-5xl font-bold  text-primary">
            Our Services
          </span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 2xl:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white  group"
            >
              <div className="text-purple-500 group-hover:text-white mb-4">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4">
                {service.description}
              </p>
              <a
                href="#"
                className="text-sm font-medium text-purple-600 group-hover:text-white hover:text-white/90 inline-flex items-center"
              >
                View Search
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
