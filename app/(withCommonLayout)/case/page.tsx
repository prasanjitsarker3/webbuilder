import FooterSection from "@/app/src/common/Footer";
import { ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  bg: string;
}

const CaseStudySolutions = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      title: "Transforming Engagement for 1 Stop Edits",
      description:
        "1 Stop Edits is a professional video editing agency offering services to clients worldwide. Despite providing high-quality editing solutions, they faced challenges in user engagement and online visibility.",
      image: "/Client/Topone.jpeg",
      // black bg
      bg: "#FFFFF",
    },
    {
      title: "Transforming Services for HM Angel Overseas Limited.",
      description:
        "HM Angel Overseas Limited, a multifaceted company based in Dhaka, Bangladesh, offers              services including travel agency operations, work visa processing, web design and development, software development, tender facilitation, and import-export activities. Despite a broad service portfolio, the company faced challenges in market penetration and client engagement.",
      image: "/Client/Angek.jpeg",
      bg: "#E5383B",
    },
    {
      title: "ZenithFeet - Elevating Footwear Excellence Online",
      description:
        "ZenithFeet, a rising footwear brand, is dedicated to delivering high-quality, stylish, and comfortable shoes. With a strong commitment to craftsmanship and innovation, ZenithFeet aims to redefine the footwear experience. However, despite its premium offerings, the brand faced challenges in digital engagement and visibility.",
      image: "/Client/Ecom.jpeg",
      bg: "#F89414",
    },

    {
      title: "Transforming Engagement for AskBDNow.com.",
      description:
        "AskBDNow.com, a vibrant Bangla-language platform, provides diverse articles and discussions on topics like education, technology, health, and lifestyle. Despite offering rich content, it struggled to retain users and boost interaction.",
      image: "/Client/ask.jpeg",
      // black bg
      bg: "#FFFFF",
    },
    {
      title: "Transforming Engagement for SkillHub Bangladesh.",
      description:
        "SkillHub Bangladesh, a leading training, learning, and business consultancy provider, is dedicated to helping individuals and businesses unlock their full potential. Despite offering high-quality training and advisory services, they faced challenges in user engagement and online visibility.",
      image: "/Client/skill.jpeg",
      bg: "#E5383B",
    },
    {
      title: "Transforming Market Reach for Corporate Fashion BD",
      description:
        "Corporate Fashion BD, an eco-friendly apparel supplier since 2014, specializes in manufacturing and supplying high-quality garments to global brands, particularly in Sweden and the European Union. Despite their commitment to quality and sustainability, they faced challenges in expanding their market presence and enhancing client engagement.",
      image: "/Client/Cor.jpeg",
      bg: "#FFFFF",
    },
  ];
  return (
    <div className=" bg-[#F7F5FF]">
      <section className=" py-6 lg:py-12 2xl:py-16 w-full container mx-auto md:px-8 px-4 ">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center pb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          {/* Sustainability &<span className=" text-primary">Green</span> Solutions */}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-[32px]">
              {/* Image Container with gradient overlay */}
              <div
                className={`relative aspect-[3/2] lg:aspect-[4/3] overflow-hidden  m-3  rounded-xl`}
                // style={{ backgroundColor: item.bg }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className=" w-full h-full transform group-hover:scale-105 transition-transform duration-300 rounded-xl cursor-pointer p-0.5"
                />
                <div className="absolute bottom-0 right-0">
                  <div className="bg-[#f3edfd] w-16 h-16 p-2 rounded-l-full rounded-tr-3xl">
                    {/* Inner circle with arrow */}
                    <div className="relative p-3 h-full w-full rounded-full bg-purple-100 hover:bg-primary text-purple-600 hover:text-white transition-colors duration-300 cursor-pointer">
                      <ArrowUpRight className="w-5 h-5 " />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-2 2xl:py-4 ">
                <h2 className=" text-xl 2xl:text-2xl font-bold mb-2 2xl:mb-3 text-primary">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm 2xl:text-base ">
                  {item.description.slice(0, 95)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default CaseStudySolutions;
