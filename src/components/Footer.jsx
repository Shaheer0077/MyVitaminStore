import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import MVSLogo from "../assets/MVSLogo.png"; // replace with your logo

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-[#ffffffbf] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid ${isMobile ? "grid-cols-1 divide-y divide-gray-700" : "grid-cols-3 gap-10"
            }`}
        >
          {/* Help & Support */}
          <div>
            <div
              className="flex justify-between items-center py-4 cursor-pointer md:cursor-default"
              onClick={() => isMobile && toggleSection("support")}
            >
              <h3 className="text-lg font-semibold text-[#ffffffbf]">
                Help & Support
              </h3>
              {isMobile &&
                (openSection === "support" ? (
                  <AiOutlineMinus size={20} />
                ) : (
                  <AiOutlinePlus size={20} />
                ))}
            </div>
            <ul
              className={`space-y-2 text-sm overflow-hidden transition-all duration-300 ${isMobile
                  ? openSection === "support"
                    ? "max-h-96 opacity-100 py-2"
                    : "max-h-0 opacity-0"
                  : "opacity-100 py-0"
                }`}
            >
              <li><a href="#" className="hover:text-white transition">Sell on MVS</a></li>
              <li><a href="#" className="hover:text-white transition">How to Order</a></li>
              <li><a href="#" className="hover:text-white transition">Exchange & Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Free Shipping</a></li>
              <li><a href="#" className="hover:text-white transition">Payment Options</a></li>
              <li><a href="#" className="hover:text-white transition">Login/Register</a></li>
            </ul>
          </div>

          {/* My Vitamin Store */}
          <div>
            <div
              className="flex justify-between items-center py-4 cursor-pointer md:cursor-default"
              onClick={() => isMobile && toggleSection("store")}
            >
              <h3 className="text-lg font-semibold text-[#ffffffbf]">
                My Vitamin Store
              </h3>
              {isMobile &&
                (openSection === "store" ? (
                  <AiOutlineMinus size={20} />
                ) : (
                  <AiOutlinePlus size={20} />
                ))}
            </div>
            <ul
              className={`space-y-2 text-sm overflow-hidden transition-all duration-300 ${isMobile
                  ? openSection === "store"
                    ? "max-h-96 opacity-100 py-2"
                    : "max-h-0 opacity-0"
                  : "opacity-100 py-0"
                }`}
            >
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Locations</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <div
              className="flex justify-between md:justify-center items-center py-4 cursor-pointer md:cursor-default"
              onClick={() => isMobile && toggleSection("contact")}
            >
              <h3 className="text-lg font-semibold text-[#ffffffbf]">
                Get in Touch
              </h3>
              {isMobile &&
                (openSection === "contact" ? (
                  <AiOutlineMinus size={20} />
                ) : (
                  <AiOutlinePlus size={20} />
                ))}
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${isMobile
                  ? openSection === "contact"
                    ? "max-h-96 opacity-100 py-2"
                    : "max-h-0 opacity-0"
                  : "opacity-100 py-0"
                }`}
            >
              <div className="flex flex-col items-center md:items-center">
                <img
                  src={MVSLogo}
                  alt="My Vitamin Store"
                  className="w-16 h-16 mb-4 object-contain"
                />
                <p className="text-sm text-[#ffffffbf] mb-4 max-w-xs text-center md:text-center">
                  My Vitamin Store is a retailer dedicated to inspiring customers through unique products.
                </p>
                <div className="flex gap-4 mb-4 justify-center md:justify-end">
                  <a href="#" className="hover:text-white transition"><FaFacebookF size={18} /></a>
                  <a href="#" className="hover:text-white transition"><FaInstagram size={18} /></a>
                  <a href="#" className="hover:text-white transition"><FaLinkedinIn size={18} /></a>
                </div>
                <p className="text-sm text-[#ffffffbf] text-center md:text-right">
                  101-B/III MM Alam Rd, Block B 3 Gulberg III, Lahore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Line */}
      <div className=" border-t border-white mt-10 pt-6 text-center text-sm text-[#ffffffbf]">
        Copyright © 2025,{" "}
        <span className="text-[#48ad92] hover:underline cursor-pointer">
          My Vitamin Store
        </span>{" "}
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
