import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ProductSlider({ title, products, patternImg }) {
  const [isHovered, setIsHovered] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) setVisibleCount(2);
      else setVisibleCount(5);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = () =>
    setStartIndex((prev) => (prev + visibleCount) % products.length);

  const prevSlide = () =>
    setStartIndex((prev) => (prev - visibleCount + products.length) % products.length);

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);
  const displayProducts =
    visibleProducts.length < visibleCount
      ? [
        ...visibleProducts,
        ...products.slice(0, visibleCount - visibleProducts.length),
      ]
      : visibleProducts;

  return (
    <section
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex justify-between items-center my-12 px-4 sm:px-0">
        <div className="relative text-left sm:text-center w-full">
          <h2 className="text-2xl sm:text-4xl mb-4 font-semibold text-[#48ad92] font-[Plus Jakarta Sans]">
            {title}
          </h2>

          {patternImg && (
            <img
              src={patternImg}
              alt="underline"
              className="absolute sm:left-1/2 sm:-translate-x-1/2 w-24 sm:w-32 left-0"
            />
          )}
        </div>
      </div>

      <div className="relative flex justify-center gap-4 sm:gap-6 overflow-hidden">
        {/* Left Arrow */}
        {isHovered && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#48ad92] z-10 cursor-pointer"
          >
            <MdArrowBackIos className="text-gray-700" />
          </button>
        )}

        {/* Products */}
        <div className="flex justify-center flex-wrap sm:flex-nowrap gap-4 sm:gap-6 transition-transform duration-700 ease-in-out cursor-pointer">
          {displayProducts.map((product, i) => (
            <div key={i} className="relative w-[45%] sm:w-[200px] flex flex-col items-center group">
              
              {/* <div className="w-40 h-40 sm:w-[200px] sm:h-[200px] mb-3 flex items-center justify-center 
                transition-all duration-300 group-hover:bg-gray-100 ">
              </div> */}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-40 h-40  sm:w-[200px] sm:h-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
                />


              <p className="text-center text-sm font-medium text-gray-800 mb-2 leading-tight hover:text-[#48ad92]">
                {product.title}
              </p>

              <div className="flex justify-center items-center gap-1 text-[#48ad92] mb-1">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <FaStar key={idx} size={14} />
                  ))}
                <span className="text-xs sm:text-sm text-[#48ad92] ml-1">
                  {product.reviews} reviews
                </span>
              </div>

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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#48ad92] z-10 cursor-pointer"
          >
            <MdArrowForwardIos className="text-gray-700" />
          </button>
        )}
      </div>
    </section>
  );
}
