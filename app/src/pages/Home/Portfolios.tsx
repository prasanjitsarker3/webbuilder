import { ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
}

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      title: "Akij Cement's Leap into Digitalized Referrals",
      description:
        "The CRM platform for Akij Cement revolutionizes the referral system. Specifically tailored for engineers and masons.",
      image:
        "https://img.freepik.com/free-psd/designer-template-design_23-2151803004.jpg?uid=R181855209&ga=GA1.1.1524916337.1735299616&semt=ais_hybrid",
    },
    {
      title: "Enhancing Fitness for Australians",
      description:
        "Fitmate is an innovative fitness app designed to transform the way Australians engage with their fitness routines. By partnering with...",
      image:
        "https://img.freepik.com/premium-photo/innovative-template-modern-company-social-media-post-design_1251574-20089.jpg?uid=R181855209&ga=GA1.1.1524916337.1735299616&semt=ais_hybrid",
    },
    {
      title: "Ways & Villas: Maldivian Travel Redesign",
      description:
        "This mobile application, launched in 2023, has achieved significant success with over 1 million users globally and is available on...",
      image:
        "https://img.freepik.com/free-vector/gradient-business-template-design_23-2149752076.jpg?uid=R181855209&ga=GA1.1.1524916337.1735299616&semt=ais_hybrid",
    },
  ];
  return (
    <div>
      <section className=" py-6 lg:py-12 2xl:py-16 w-full container mx-auto md:px-8 px-4">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center pb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          Sustainability &<span className=" text-primary">Green</span> Solutions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-[32px]">
              {/* Image Container with gradient overlay */}
              <div className="relative aspect-[3/2] lg:aspect-[4/3] overflow-hidden  m-3 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300 rounded-xl cursor-pointer "
                />
                <div className="absolute bottom-0 right-0">
                  <div className="bg-white w-16 h-16 p-2 rounded-l-full rounded-tr-3xl">
                    {/* Inner circle with arrow */}
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
                <p className="text-gray-600 text-sm 2xl:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className=" w-full mx-auto flex justify-center items-center">
          <button className=" mx-auto py-3 px-16 bg-primary text-white rounded-full">
            Sell All
          </button>
        </div>
      </section>
      )
    </div>
  );
};

export default Portfolio;
