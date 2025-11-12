import React, { useState, useEffect } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// import  images
import patternImg from "../assets/pattern.jpg";
import TopItem1 from "../assets/TopItem1.jpg";
import TopItem2 from "../assets/TopItem2.jpg";
import TopItem3 from "../assets/TopItem3.jpg";
import TopItem4 from "../assets/TopItem4.jpg";
import TopItem5 from "../assets/TopItem5.jpg";
import TopItem6 from "../assets/TopItem6.jpg";
import TopItem7 from "../assets/TopItem7.jpg";
import TopItem8 from "../assets/TopItem8.jpg";
import TopItem9 from "../assets/TopItem9.jpg";
import TopItem10 from "../assets/TopItem10.jpg";


const products = [
    {
        img: TopItem1,
        discount: "-11%",
        title: "NGumvits Apple Cider Vinegar 500mg Gummies, 60 Ct",
        reviews: 10,
        oldPrice: "PKR 4,950",
        newPrice: "PKR 4,450",
    },
    {
        img: TopItem2,
        discount: "-17%",
        title: "Get Alyve Maxamus for Men, 30 Ct",
        reviews: 18,
        oldPrice: "PKR 5,390",
        newPrice: "PKR 4,450",
    },
    {
        img: TopItem3,
        discount: "-5%",
        title: "Gumvits Kids Multi Gummies, 60 Ct",
        reviews: 18,
        oldPrice: "PKR 3,790",
        newPrice: "PKR 2,975",
    },
    {
        img: TopItem4,
        discount: "-35%",
        title: "Get Alyve Women's Daily One A Day Multivitamin, 30 Ct",
        reviews: 9,
        oldPrice: "PKR 1,650",
        newPrice: "PKR 1,073",
    },
    {
        img: TopItem5,
        discount: "-35%",
        title: "Natural Factors Vitamin B12 1000 mcg (Methylcobalamin), 90 Ct",
        reviews: 4,
        oldPrice: "PKR 1,673",
        newPrice: "PKR 950",
    },
    {
        img: TopItem6,
        discount: "-15%",
        title: "Natural Factors Magnesium Chelate 125mg, 90 Ct",
        reviews: 4,
        oldPrice: "PKR 3,990",
        newPrice: "PKR 3,390",
    },
    {
        img: TopItem7,
        discount: "-10%",
        title: "Webber Naturals Women's Most Complete Multi, 90 Ct",
        reviews: 4,
        oldPrice: "PKR 4,950",
        newPrice: "PKR 4,450",
    },
    {
        img: TopItem8,
        discount: "-10%",
        title: "Gumvits Women's Multi Gummies, 60 Ct",
        reviews: 4,
        oldPrice: "PKR 9,490",
        newPrice: "PKR 8,541",
    },
    {
        img: TopItem9,
        discount: "-7%",
        title: "Fablous Hairgain Hair Spray, 100ml",
        reviews: 4,
        oldPrice: "PKR 9,100",
        newPrice: "PKR  8,450",
    },
    {
        img: TopItem10,
        discount: "-10%",
        title: "Gumvits Magnesium Bisglycinate (Magnesium Glycinate) 200mg Gummies, 60 Ct",
        reviews: 4,
        oldPrice: "PKR 13,980",
        newPrice: "PKR 12,582",
    },
];


const TopSellers = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(2);
            }
            else {
                setVisibleCount(5);
            }
        }
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

    const visibleProducts = products.slice(startIndex, startIndex + visibleCount)
    const displayProducts =
        visibleProducts.length < visibleCount ? [...visibleProducts, ...products.slice(0, visibleCount - visibleProducts.length)] : visibleProducts;

    return (
        <section className="w-full md:mb-35 mb:0 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
            {/* Title Section */}
            <div className="relative flex justify-between items-center my-12 px-4 sm:px-0">
                <div className="relative text-left sm:text-center w-full">
                    <h2 className="text-2xl sm:text-4xl mb-4 font-semibold text-[#48ad92] font-[Plus Jakarta Sans]">
                       TopSellers
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

            {/* Product Slider */}
            <div className="relative max-w-6xl mx-auto">
                {/* Left Arrow */}
                {isHovered && (
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#4cbfa6] z-10 cursor-pointer"
                    >
                        <MdArrowBackIos className="text-gray-700" />
                    </button>
                )}

                {/* Products */}
                <div className="flex justify-center  flex-wrap sm:flex-nowrap gap-4 sm:gap-6 overflow-hidden transition-transform duration-700 ease-in-out cursor-pointer">
                    {displayProducts.map((product, i) => (
                        <div
                            key={i}
                            className="relative w-[45%] sm:w-[200px] flex flex-col items-center group"
                        >
                            {/* Discount Badge */}
                            <span className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded z-20">
                                {product.discount}
                            </span>

                            {/* Image Container */}
                            <div className="relative w-full flex justify-center items-center overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-40 h-40 sm:w-50 sm:h-50 object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Add to Cart Button */}
                                <button
                                    className="absolute opacity-0 mt-40 group-hover:opacity-100 transition-all duration-300 bg-white border border-[#48ad92] text-[#48ad92] font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 hover:bg-[#4cbfa6] hover:text-white"
                                >
                                    <FaShoppingCart />
                                    Add to Cart
                                </button>
                            </div>

                            {/* Title */}
                            <p className="text-center text-sm font-medium text-gray-800 mb-2 leading-tight hover:text-[#48ad92]">
                                {product.title}
                            </p>

                            {/* Rating */}
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

                            {/* Prices */}
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
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#4cbfa6] z-10 cursor-pointer"
                    >
                        <MdArrowForwardIos className="text-gray-700" />
                    </button>
                )}
            </div>
        </section>
    );
};

export default TopSellers;