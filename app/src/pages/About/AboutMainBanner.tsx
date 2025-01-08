import Image from "next/image";

const AboutMainBanner = () => {
  const stats = [
    {
      number: "500+",
      label: "Total Projects Completed",
    },
    {
      number: "05+",
      label: "Years of Experience",
    },
    {
      number: "30+",
      label: "Dedicated Team Member",
    },
    {
      number: "200+",
      label: "Satisfied happy clients",
    },
  ];

  const images = [
    {
      src: "https://media.istockphoto.com/id/1331470022/photo/indian-white-collar-male-worker-in-wheelchair-having-cheerful-discussion-leading-conversation.jpg?s=612x612&w=0&k=20&c=dL5cYkW-we2uudznnEg05lWA0FVZR1BlylkQfOr6GtY=",
      alt: "Team meeting with whiteboard discussion",
    },
    {
      src: "https://media.istockphoto.com/id/1591572504/photo/cheerful-businesswomen-shaking-hands-in-meeting-room.jpg?s=612x612&w=0&k=20&c=mo5VjVyA-t4ydS6ZjJVxaUSi0v9KVbJV_Go5EOF_B8M=",
      alt: "Developers working at computers",
    },
    {
      src: "https://media.istockphoto.com/id/1482143501/photo/manager-updating-project-team-during-coffee-break.jpg?s=612x612&w=0&k=20&c=GHJM8pohblJAuzU7xTiaVSJDleXmyQBg-QAa0dDAzBw=",
      alt: "Team member in deep thought",
    },
    {
      src: "https://media.istockphoto.com/id/1454885967/photo/hands-happy-and-business-people-clapping-hands-in-support-of-speech-or-presentation-at.jpg?s=612x612&w=0&k=20&c=clIRVYq2_bskAi4bCxzzMbxDeA7XWKJvrahchgcfJDk=",
      alt: "Team members collaborating",
    },
  ];

  return (
    <div>
      <section className="min-h-[550px] w-full relative overflow-hidden bg-gradient-to-b from-white  to-[#B595F3] rounded-b-[40px] flex justify-center items-center">
        <div className="w-full h-full md:px-0 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-8">
              Driving <span className="italic">Success</span> Together with{" "}
              <span className="italic">Innovation</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We integrate creativity, strategic thinking, and innovative
              technology to help businesses unlock their full potential, adapt
              to changing
            </p>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-200/50 to-transparent pointer-events-none" />
      </section>
      <section className=" w-full container  mx-auto md:px-8 px-4 py-16 sm:py-24">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16">
          <div className="md:col-span-3">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3 md:mt-12">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                width={500}
                height={300}
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3 mt-12">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                width={500}
                height={300}
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#8257E9]">
                {stat.number}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMainBanner;
