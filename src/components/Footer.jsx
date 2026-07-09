import React from "react";
// import { Link } from "react-router-dom";
import logo from "../assets/Gudmed1-removebg-preview.png";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const socialIcons = [
  { icon: FaWhatsapp, link: "https://wa.me/919999196828" },
  { icon: FaFacebookF, link: "https://www.facebook.com/GudMedicare/" },
  { icon: FaTwitter, link: "https://x.com/GudMedicare" },
  { icon: FaInstagram, link: "https://www.instagram.com/gudmedicare/" },
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/channel/UC2qkjYWuIsmEuQ5dnMV3l9Q",
  },
  { icon: FaLinkedin, link: "https://www.linkedin.com/company/gudmed/" },
];

const NewFooter = () => {
  return (
    <footer className="bg-[#2E4168] text-white text-xs sm:text-sm md:text-base py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 sm:gap-10">
          {/* Left Section */}
          <div className="text-center lg:text-left flex-1">
            <p className="text-xs sm:text-sm md:text-base whitespace-normal">
              &copy; 2026{" "}
              <strong>Gud Medicare Solutions Private Limited</strong>
            </p>
            <p className="text-xs sm:text-sm md:text-base mt-1">
              All rights reserved &reg;
            </p>
            <div className="flex justify-center lg:justify-start gap-2 mt-2 text-xs sm:text-sm flex-wrap">
              <a
                to="/privacy-policy"
                className="hover:underline hover:text-gray-300 transition"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a
                to="/terms-conditions"
                className="hover:underline hover:text-gray-300 transition"
              >
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center lg:justify-center shrink-0">
            <div className="relative w-28 sm:w-32 md:w-36 h-12 sm:h-14 md:h-16 bg-slate-100 p-2 rounded-lg">
              <img
                src={logo || "/placeholder.svg"}
                alt="Gudmed logo"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Contact Info and Social Icons */}
          <div className="text-center lg:text-right flex-1">
            <div className="flex flex-col items-center lg:items-end space-y-2 sm:space-y-3 w-full">
              <a
                href="tel:+919999196828"
                className="flex items-center justify-center lg:justify-end gap-2 hover:text-gray-300 transition text-xs sm:text-sm md:text-base"
              >
                <FaPhoneAlt className="rotate-90 shrink-0" size={16} />
                <span className="truncate">Contact Us: +91-9999196828</span>
              </a>

              <a
                href="mailto:cs@gudmed.in"
                className="flex items-center justify-center lg:justify-end gap-2 hover:text-gray-300 transition text-xs sm:text-sm md:text-base truncate"
              >
                <FaEnvelope className="shrink-0" size={16} />
                <span className="truncate"> Email Us: cs@gudmed.in</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-end gap-2 sm:gap-3 md:gap-4 w-full mt-4 sm:mt-5">
              {socialIcons.map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 flex items-center justify-center bg-[#2E4168] rounded-full transition hover:scale-110 active:scale-95 border border-white/20 shrink-0"
                  style={{
                    width: "clamp(2.5rem, 8vw, 3rem)",
                    height: "clamp(2.5rem, 8vw, 3rem)",
                  }}
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
