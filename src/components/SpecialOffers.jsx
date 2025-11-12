import React, { useState, useEffect } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import patternImg from "../assets/pattern.jpg";
import product1 from "../assets/Product1.jpg";
import product2 from "../assets/Product2.jpg";
import product3 from "../assets/Product3.jpg";
import product4 from "../assets/Product4.jpg";
import product5 from "../assets/Product5.jpg";
import product6 from "../assets/Product6.jpg";
import product7 from "../assets/Product7.jpg";
import product8 from "../assets/Product8.jpg";
import product9 from "../assets/Product9.jpg";
import product10 from "../assets/Product10.jpg";

const products = [
  { img: product1, discount: "-11%", title: "Natural Factors Ultimate Multi Probiotic 12 Billion CFUs, 60 Ct", reviews: 23, oldPrice: "PKR 9,500", newPrice: "PKR 8,500" },
  { img: product2, discount: "-17%", title: "Webber Naturals Omega 3-6-9 1200mg, 60 Ct", reviews: 18, oldPrice: "PKR 5,390", newPrice: "PKR 4,450" },
  { img: product3, discount: "-5%", title: "Webber Naturals Omega-3 Fish Oil 1000mg, 60 Ct", reviews: 18, oldPrice: "PKR 3,790", newPrice: "PKR 10,175" },
  { img: product4, discount: "-15%", title: "Natural Factors Magnesium Chelate 125mg, 90 Ct", reviews: 9, oldPrice: "PKR 3,990", newPrice: "PKR 3,390" },
  { img: product5, discount: "-35%", title: "Get Alyve Women's Daily One A Day Multivitamin, 30 Ct", reviews: 4, oldPrice: "PKR 1,073", newPrice: "PKR 1,650" },
  { img: product6, discount: "-10%", title: "Bundle Pack - Natural Factors Calcium & Magnesium Citrate with D3 + OsteoMove", reviews: 4, oldPrice: "PKR 10,980", newPrice: "PKR 9,882" },
  { img: product7, discount: "-10%", title: "NOW Vitamin C 500mg Chewable Tablets (Orange), 100 Ct", reviews: 4, oldPrice: "PKR 4,950", newPrice: "PKR 4,450" },
  { img: product8, discount: "-10%", title: "Bundle Pack - Natural Factors RxOmega-3 + Coenzyme CoQ10", reviews: 4, oldPrice: "PKR 9,490", newPrice: "PKR 8,541" },
  { img: product9, discount: "-7%", title: "NOW B-100 Sustained Release Tablets, 100 Ct", reviews: 4, oldPrice: "PKR 9,100", newPrice: "PKR 8,450" },
  { img: product10, discount: "-10%", title: "Bundle Pack - Webber Naturals MultiSure For Women + MultiSure For Men", reviews: 4, oldPrice: "PKR 13,980", newPrice: "PKR 12,582" },
];

const SpecialOffers = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  // ✅ Responsive visible count (Desktop = 5, Mobile = 2)
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2); // mobile/tablet view
      } else {
        setVisibleCount(5); // desktop view
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + visibleCount) % products.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - visibleCount + products.length) % products.length);
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  // If reaching the end of array, wrap around
  const displayProducts =
    visibleProducts.length < visibleCount
      ? [...visibleProducts, ...products.slice(0, visibleCount - visibleProducts.length)]
      : visibleProducts;

  return (
    <section
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Title */}
      <div className="relative flex justify-between items-center my-12 px-4 sm:px-0">
        <div className="relative text-left sm:text-center w-full">
          <h2 className="text-2xl sm:text-4xl mb-4 font-semibold text-[#48ad92] font-[Plus Jakarta Sans]">
            Special Offers
          </h2>
          <img
            src={patternImg}
            alt="underline"
            className="absolute sm:left-1/2 sm:-translate-x-1/2 w-24 sm:w-32 left-0"
          />
        </div>
        <a
          href="#"
          className="absolute right-4 sm:right-50 top-1/2 -translate-y-1/2 font-bold text-gray-800 underline text-sm hover:text-[#48ad92] transition-colors"
        >
          View all
        </a>
      </div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left Arrow */}
        {isHovered && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#48ad92] z-10 cursor-pointer"
          >
            <MdArrowBackIos className="text-gray-700" />
          </button>
        )}

        {/* Product Cards */}
        <div className="flex justify-center gap-4 sm:gap-6 overflow-hidden transition-transform duration-700 ease-in-out cursor-pointer">
          {displayProducts.map((product, i) => (
            <div
              key={i}
              className="relative w-[45%] sm:w-[200px] flex flex-col items-center group"
            >
              {/* Discount Badge */}
              <span className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded z-20">
                {product.discount}
              </span>

              {/* Image */}
              <div className="relative w-full flex justify-center items-center overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-40 h-40 sm:w-50 sm:h-50 object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute opacity-0 mt-40 group-hover:opacity-100 transition-all duration-300 bg-white border border-[#48ad92] text-[#48ad92] font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 hover:bg-[#4cbfa6] hover:text-white">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>

              {/* Title */}
              <p className="text-center text-xs sm:text-sm font-medium text-gray-800 mb-2 leading-tight hover:text-[#48ad92]">
                {product.title}
              </p>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1 text-[#48ad92] mb-1">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <FaStar key={idx} size={12} />
                  ))}
                <span className="text-xs sm:text-sm text-[#48ad92] ml-1">
                  {product.reviews} reviews
                </span>
              </div>

              {/* Price */}
              <div className="flex flex-row gap-2 items-center">
                <span className="line-through text-gray-500 text-xs sm:text-sm">
                  {product.oldPrice}
                </span>
                <span className="text-red-600 font-semibold text-xs sm:text-sm">
                  {product.newPrice}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {isHovered && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-#48ad92] z-10 cursor-pointer"
          >
            <MdArrowForwardIos className="text-gray-700" />
          </button>
        )}
      </div>
    </section>
  );
};

export default SpecialOffers;
