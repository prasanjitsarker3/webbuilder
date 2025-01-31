import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
}

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      title: "Transforming Engagement for 1 Stop Edits",
      description:
        "1 Stop Edits is a professional video editing agency offering services to clients worldwide. Despite providing high-quality editing solutions, they faced challenges in user engagement and online visibility.",
      image: "/Client/Topone.jpeg",
      // black bg
    },
    {
      title: "Transforming Services for HM Angel Overseas Limited.",
      description:
        "HM Angel Overseas Limited, a multifaceted company based in Dhaka, Bangladesh, offers              services       including travel agency operations, work visa processing, web design and development, software development, tender facilitation, and import-export activities. Despite a broad service portfolio, the company faced challenges in market penetration and client engagement.",
      image: "/Client/Angek.jpeg",
    },
    {
      title: "Ways & Villas: Maldivian Travel Redesign",
      description:
        "This mobile application, launched in 2023, has achieved significant success with over 1 million users globally and is available on...",
      image: "/Client/Ecom.jpeg",
    },
  ];
  return (
    <div className=" bg-[#F7F5FF]">
      <section className=" py-6 lg:py-12 2xl:py-16 w-full container mx-auto md:px-8 px-4">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center pb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          Sustainability &<span className=" text-primary">Green</span> Solutions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-[32px]">
              <div
                className={`relative aspect-[3/2] lg:aspect-[4/3] overflow-hidden  m-3  rounded-xl `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className=" w-full h-full transform group-hover:scale-105 transition-transform duration-300 rounded-xl cursor-pointer p-0.5"
                />
                <div className="absolute bottom-0 right-0">
                  <div className="bg-white w-16 h-16 p-2 rounded-l-full rounded-tr-3xl">
                    <div className="relative p-3 h-full w-full rounded-full bg-purple-100 hover:bg-primary text-purple-600 hover:text-white transition-colors duration-300 cursor-pointer">
                      <ArrowUpRight className="w-5 h-5 " />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-2 2xl:py-4 ">
                <h2 className=" text-xl 2xl:text-2xl font-bold mb-2 2xl:mb-3 text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm 2xl:text-base ">
                  {item.description.slice(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={"/case"}
          className=" w-full mx-auto flex justify-center items-center"
        >
          <button className=" mx-auto py-3 px-16 bg-primary text-white rounded-full">
            Sell All
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Portfolio;
