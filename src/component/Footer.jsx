import Link from "next/link";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { FaBookOpen, FaXTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-olive-200 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />
      <div className="absolute inset-0 -z-10 bg-linear-to-tr from-purple-500/5 via-transparent to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Divider */}
        <div className="mb-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-5 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="bg-[#4F5A2A] p-2.5 rounded-2xl shadow-md">
                <FaBookOpen size={20} className="text-[#E8EDE0]" />
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                StudyNook
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              StudyNook is a full-stack platform that helps students and library users discover and book study rooms with ease.
              It allows users to list and manage available study spaces while enabling others to find quiet, productive environments for learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-black dark:text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/rooms", label: "Rooms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-black dark:text-white mb-5">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/terms", label: "Terms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-5 flex flex-col items-center md:items-start">
            
            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white">
                Social Media
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Follow us on
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {[TiSocialFacebook, FaXTwitter,  TiSocialLinkedin, TiSocialInstagram].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 rounded-full bg-white/60 dark:bg-white/5 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/signup"
              className="
                group inline-flex items-center gap-2 px-6 py-3
                rounded-2xl bg-linear-to-r from-[#586235] to-[#738046]
                text-white font-semibold tracking-wide
                shadow-lg hover:shadow-2xl hover:scale-105
                hover:from-[#4f582f] hover:to-[#879654]
                active:scale-95 transition-all duration-300
              "
            >
              <span>Get Started</span>
              <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} BookNest. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {["Privacy", "Terms"].map((item) => (
              <Link
                key={item}
                href="/"
                className="hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;