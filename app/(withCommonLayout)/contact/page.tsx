"use client";
import FooterSection from "@/app/src/common/Footer";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      <section className="min-h-[500px] w-full relative overflow-hidden bg-gradient-to-b from-white  to-[#B595F3] rounded-b-[40px] flex justify-center items-center">
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

      <div className="container mx-auto md:px-8 px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                We're Here To <span className="italic">Help</span>
                <br />
                You <span className="italic">Grow</span>
              </h1>
              <p className="text-gray-600 max-w-md">
                Whether you're scheduling your first consultation or a follow-up
                strategy session, our appointments are key to building Client
                relationships.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Phone Number</div>
                <div className="text-xl font-semibold">+1 716 503 6335</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Email Address</div>
                <div className="text-xl font-semibold">
                  hello@designmonks.co
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-600">Follow us</div>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Twitter, href: "#" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 rounded-full border-2 border-[#7C3AED] flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold">
                  We'd love to hear from you!
                </h2>
                <p className="text-gray-600">Let's get in touch</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm text-gray-600 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Jhon Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-600 mb-2"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="example@domain.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm text-gray-600 mb-2"
                      >
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+1 1122 3344"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-600 mb-2"
                    >
                      How we can help You?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7C3AED] text-white py-4 rounded-full hover:bg-[#6D28D9] transition-colors duration-200 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactPage;
