import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const FooterSection = () => {
  return (
    <div className="">
      <footer className="bg-[#1C1F26] text-white pt-12 lg:pt-14 2xl:pt-20 pb-6">
        <div className=" w-full container  mx-auto md:px-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/placeholder.svg?height=40&width=160"
                  alt="Monks Marketing"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our agency provides a wide range of marketing services,
                including digital marketing, SEO, social media.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="p-2 border border-gray-700 rounded-full hover:border-purple-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 border border-gray-700 rounded-full hover:border-purple-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 border border-gray-700 rounded-full hover:border-purple-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Explore</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-study"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Case Study
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing Plan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    404 Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>17700 Avalon BLVD Carson California, USA</span>
                </li>
                <li>
                  <Link
                    href="tel:+17165036335"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +1 716 503 6335
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:hello@designmonks.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    hello@designmonks.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-center text-gray-400 text-sm">
              2024 © Design Monks. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
