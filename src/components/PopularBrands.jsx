import React, { useEffect, useState } from "react";

import patternImg from "../assets/pattern.jpg";
import PopBrand1 from "../assets/PopBrand1.png";
import PopBrand2 from "../assets/PopBrand2.png";
import PopBrand3 from "../assets/PopBrand3.png";
import PopBrand4 from "../assets/PopBrand4.png";
import PopBrand5 from "../assets/PopBrand5.png";
import PopBrand6 from "../assets/PopBrand6.png";
import PopBrand7 from "../assets/PopBrand7.png";

const PopularBrands = () => {
  const images = [
    PopBrand1,
    PopBrand2,
    PopBrand3,
    PopBrand4,
    PopBrand5,
    PopBrand6,
    PopBrand7,
    PopBrand1,
    PopBrand2,
    PopBrand3,
    PopBrand4,
    PopBrand5,
    PopBrand6,
    PopBrand7,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(()=>{
    const updateVisibleCount = ()=>{
      if (window.innerWidth<640){
        setVisibleCount(2);
      }
      else{
        setVisibleCount(6);
      }
    }
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return ()=> window.removeEventListener("resize", updateVisibleCount)
  },[]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Duplicate array to make infinite loop effect
  const loopImages = [...images, ...images];

  return (
    <section className="w-full">
      {/* Title Section */}
      <div className="relative flex justify-between items-center my-12 px-4 sm:px-0">
        <div className="relative text-left sm:text-center w-full">
          <h2 className="text-2xl sm:text-4xl mb-4 font-semibold text-[#48ad92] font-[Plus Jakarta Sans]">
            Popular Brands
          </h2>
          <img
            src={patternImg}
            alt="underline"
            className="absolute sm:left-1/2 sm:-translate-x-1/2 w-24 sm:w-32 left-0"
          />
          <a
            href="#"
            className="absolute right-4 sm:right-50 top-1/2 -translate-y-1/2 font-bold text-gray-800 underline text-sm hover:text-[#48ad92] transition-colors"
          >
            View all
          </a>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            // width: `${(loopImages.length / visibleCount) * 100}%`,
          }}
        >
          {loopImages.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="w-34 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 overflow-hidden flex justify-center items-center transition-transform duration-500 hover:scale-110">
                <img
                  src={item}
                  alt="brand"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
