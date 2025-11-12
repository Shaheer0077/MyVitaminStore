import React, { useState, useEffect } from "react";
import CircleImg1 from "../assets/CircleImg1.jpg";
import CircleImg2 from "../assets/CircleImg2.jpg";
import CircleImg3 from "../assets/CircleImg3.jpg";
import CircleImg4 from "../assets/CircleImg4.jpg";
import CircleImg5 from "../assets/CircleImg5.jpg";
import CircleImg6 from "../assets/CircleImg6.jpg";
import CircleImg7 from "../assets/CircleImg7.jpg";
import CircleImg8 from "../assets/CircleImg8.png";
import patternImg from "../assets/pattern.jpg";
import suppImg1 from "../assets/suppImg1.jpg";
import suppImg2 from "../assets/suppImg2.jpg";
import suppImg3 from "../assets/suppImg3.jpg";
import suppImg4 from "../assets/suppImg4.jpg";
import suppImg5 from "../assets/suppImg5.jpg";

const QuickShop = () => {
  const categories = [
    { img: CircleImg1, title: "Supplements" },
    { img: CircleImg2, title: "Sports Nutrition" },
    { img: CircleImg3, title: "Homeopathy/Herbal" },
    { img: CircleImg4, title: "Health & Wellness" },
    { img: CircleImg5, title: "Food & Snacks" },
    { img: CircleImg6, title: "Personal Care" },
    { img: CircleImg7, title: "Pet Food" },
    { img: CircleImg8, title: "Home Sense" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const [totalDots, setTotalDots] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2);
        setTotalDots(categories.length - 1); // Mobile dots
      } else {
        setVisibleCount(6);
        setTotalDots(3); // Desktop dots
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [categories.length]);

  const handleDotClick = (dotIndex) => {
    setStartIndex(dotIndex );
  };

  return (
    <div className="w-full">
      {/* Title Section */}
      <div className="relative flex justify-between items-center my-12 px-4 sm:px-0">
        <div className="relative text-left sm:text-center w-full">
          <h2 className="text-2xl sm:text-4xl mb-4 font-semibold text-[#48ad92] font-[Plus Jakarta Sans]">
            Quick Shop
          </h2>
          <img
            src={patternImg}
            alt="underline"
            className="absolute sm:left-1/2 sm:-translate-x-1/2 w-24 sm:w-32 left-0"
          />
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(startIndex * 100) / visibleCount}%)`,
          }}
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center shrink-0 
                w-1/2 sm:w-1/3 md:w-1/6 px-2 sm:px-3`}
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm sm:text-base font-medium text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-3 ">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
              Math.floor(startIndex === index ) 
                ? "bg-[#48ad92]"
                : "bg-[#4cbfa6]/40"
            }`}
          ></button>
        ))}
      </div>

      {/* Category Banners Section */}
      <div className="flex flex-col md:flex-row justify-center items-start px-6 my-10 cursor-pointer">
        {/* Left Big Image */}
        <div className="md:w-[40%] w-full mx-0 md:mx-6 mb-6 md:mb-0">
          <img
            src={suppImg1}
            alt="Collagen Supplements"
            className="w-full h-[400px] md:h-[550px] object-cover"
          />
        </div>

        {/* Right Grid */}
        <div className="md:w-[40%] w-full grid grid-cols-2 gap-6">
          {[suppImg2, suppImg3, suppImg4, suppImg5].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Supp ${i}`}
              className="w-full h-[180px] md:h-[263.5px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickShop;
