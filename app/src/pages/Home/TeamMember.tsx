import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Marketing Director",
    image:
      "https://media.istockphoto.com/id/1325359218/photo/portrait-of-a-young-african-man-at-studio-high-fashion-male-model-in-colorful-bright-neon.jpg?s=612x612&w=0&k=20&c=1O_vxp9rdD_5avvE0aCMYgJumDv4Ykq6dCWfQmU2G3U=",
  },
  {
    id: 2,
    name: "Taylor Smith",
    role: "Creative Director",
    image:
      "https://media.istockphoto.com/id/1153750624/photo/profile-portrait-of-a-senior-man-with-white-beard.jpg?s=612x612&w=0&k=20&c=9YeRvXIUruZl-q9ADIk25YvoQxjMC8B8L1NPIQQc5pI=",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Digital Marketing Analyst",
    image:
      "https://media.istockphoto.com/id/2157907180/photo/man-jeweler-produces-hand-made-a-ring-jeweler-craft-workshop.jpg?s=612x612&w=0&k=20&c=_6hyg-_6m9uN1-pb8Jtj8wtHDLdbmPFVXudYMmSK4uA=",
  },
];

const TeamMember = () => {
  return (
    <div>
      <section className=" w-full md:container  2xl:max-w-7xl mx-auto lg:px-8 pb-6 px-4 lg:py-12 2xl:py-16">
        <h2 className="text-center text-2xl lg:text-4xl 2xl:text-5xl font-bold pb-6 md:pb-12 2xl:mb-16">
          Our <span className="text-primary">Dedicated</span> Team Members
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group rounded-2xl overflow-hidden bg-gray-100"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-[300px] lg:h-[460px] 2xl:h-[500px] object-cover"
              />

              {/* Overlay that slides up on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#824EEB]/70 to-[#824EEB]/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h3 className=" text-base lg:text-2xl font-semibold py-2">
                    {member.name}
                  </h3>
                  <p className=" text-sm md:text-base text-gray-200 mb-2">
                    {member.role}
                  </p>
                  <div className=" flex justify-center items-center gap-2">
                    <div className=" w-8 h-8 lg:h-10 lg:w-10 rounded-full border border-white text-white flex justify-center items-center">
                      <Linkedin size={20} />
                    </div>
                    <div className=" w-8 h-8 lg:h-10 lg:w-10 rounded-full border border-white text-white flex justify-center items-center">
                      <Facebook size={20} />
                    </div>
                    <div className=" w-8 h-8 lg:h-10 lg:w-10 rounded-full border border-white text-white flex justify-center items-center">
                      <Twitter size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Static overlay for non-hover state */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h3 className=" text-base lg:text-2xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default TeamMember;
