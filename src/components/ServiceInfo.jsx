import React, { useState, useEffect } from "react";
import ExchangeLogo from "../assets/ExchangeLogo.png";
import PaymentLogo from "../assets/PaymentLogo.png";
import FreeDeliveryLogo from "../assets/FreeDeliveryLogo.png";

const ServiceInfo = () => {
  const categories = [
    {
      img: PaymentLogo,
      title: "Payment Options",
      desc: "COD, Bank Transfer & Credit Card",
    },
    {
      img: FreeDeliveryLogo,
      title: "Free Delivery",
      desc: "On orders above PKR 2500",
    },
    {
      img: ExchangeLogo,
      title: "Free Return & Exchange",
      desc: "Within 7 days",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-white py-6 overflow-hidden md:mb-12 mb:0">
      {/* Top Line */}
      <div className="w-[70%] md:w-[80%] mx-auto border-t border-gray-300 mb-8" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop View */}
        {!isMobile && (
          <div className="flex justify-between items-center gap-8 text-left">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 w-full md:w-1/3 justify-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile View Slider */}
        {isMobile && (
          <div className="relative flex justify-center items-center transition-all duration-700 ease-in-out">
            <div className="flex flex-col items-center text-center">
              <img
                src={categories[currentIndex].img}
                alt={categories[currentIndex].title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {categories[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-600">
                {categories[currentIndex].desc}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Dots for Mobile */}
      {isMobile && (
        <div className="flex justify-center mt-6 gap-3">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#48ad92]"
                  : "bg-[#4cbfa6]/40"
              }`}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServiceInfo;
