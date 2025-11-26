import React, { useState, useEffect } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// import  images
import patternImg from "../assets/pattern.jpg";
import NewItem1 from "../assets/NewItem1.jpg";
import NewItem2 from "../assets/NewItem2.jpg";
import NewItem3 from "../assets/NewItem3.jpg";
import NewItem4 from "../assets/NewItem4.jpg";
import NewItem5 from "../assets/NewItem5.jpg";
import NewItem6 from "../assets/NewItem6.jpg";
import NewItem7 from "../assets/NewItem7.jpg";
import NewItem8 from "../assets/NewItem8.jpg";
import NewItem9 from "../assets/NewItem9.jpg";
import NewItem10 from "../assets/NewItem10.jpg";
import { Link } from "react-router-dom";


const products = [
    { id: 11, img: NewItem1, discount: "-11%",rating:"4",description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"90 Veg Capsules",Brand:"Webster Natural",sku:"733739006301",country:"USA", title: "NOW Vitamin C 500mg Chewable Tablets (Orange), 100 Ct", reviews: 23, oldPrice: "PKR 4,950", newPrice: "PKR 4,450" },
    { id: 12, img: NewItem2, discount: "-17%",rating:"5",description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"50 Veg Capsules",Brand:"NOW",sku:"5056555202142 ",country:"UK", title: "Applied Nutrition Creatine Monohydrate Powder (Strawberry & Raspberry), 250g", reviews: 18, oldPrice: "PKR 5,390", newPrice: "PKR 4,450" },
    { id: 13, img: NewItem3, discount: "-5%",rating:"3", description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"60 Veg Capsules",Brand:"Natural Factors",sku:"733739012999",country:"USA",title: "Applied Nutrition Tri-Magnesium Powder (Tropical Vibes), 200g", reviews: 18, oldPrice: "PKR 3,790", newPrice: "PKR 2,975" },
    { id: 14, img: NewItem4, discount: "-15%",rating:"5",description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"70 Veg Capsules",Brand:"Webster Natural",sku:" 5056555206980",country:"UK", title: "Natural Factors BioCoenzymated Methylfolate Folate + B12 1000/50 mcg, 60 Ct", reviews: 9, oldPrice: "PKR 3,990", newPrice: "PKR 3,390" },
    { id: 15, img: NewItem5, discount: "-35%",rating:"4",description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"10 Veg Capsules",Brand:"NOW",sku:"068958012414",country:"Canada", title: "Applied Nutrition Hydration+ Electrolyte & Vitamin Powder (Lemon & Lime), 240g", reviews: 4, oldPrice: "PKR 1,673", newPrice: "PKR 950" },
    { id: 16, img: NewItem6, discount: "-10%",rating:"5",description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"30 Veg Capsules",Brand:"Natural Factors",sku:" 625273038743",country:"Canada", title: "Webber Naturals Calcium Vitamin D3 500mg / 200 IU, 275 Ct", reviews: 4, oldPrice: "PKR 10,980", newPrice: "PKR 9,882" },
    { id: 17, img: NewItem7, discount: "-10%",rating:"5",description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"40 Veg Capsules",Brand:"Webster Natural",sku:" 625273034561",country:"Canada", title: "Webber Naturals Lutein with Zeaxanthin 40mg, 60 Ct", reviews: 4, oldPrice: "PKR 4,950", newPrice: "PKR 4,450" },
    { id: 18, img: NewItem8, discount: "-10%",rating:"4",description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"60 Veg Capsules",Brand:"NOW",sku:"733739030979",country:"Canada", title: "NOW Calcium D-Glucarate 500mg, 90 Ct", reviews: 4, oldPrice: "PKR 9,490", newPrice: "PKR 8,541" },
    { id: 19, img: NewItem9, discount: "-7%",rating:"3", description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"80 Veg Capsules",Brand:"Webster Natural",sku:"733739012999",country:"Canada",title: "NOW Coral Calcium 1000 mg, 100 Ct", reviews: 4, oldPrice: "PKR 9,100", newPrice: "PKR 8,450" },
    { id: 20, img: NewItem10, discount: "-10%",rating:"2",description:"Restores and maintains healthy, balanced intestinal flora FOS (fructoogosaccharides) added as food for bacteria for long-lasting action Supports immune function Counteracts systemic and vaginal Candida albicans yeast overgrowth Prevents urinary...",packsize:"90 Veg Capsules",Brand:"Natural Factors",sku:"625273034561 ",country:"Canada", title: "Natural Factors Vitamin B6 100mg, 90 Ct", reviews: 4, oldPrice: "PKR 13,980", newPrice: "PKR 12,582" }
];
export const newItemsProducts = products;

const NewItems = () => {
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
        <section className="w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
            {/* Title Section */}
            <div className="relative flex justify-between items-center my-12 px-4 sm:px-0">
                <div className="relative text-left sm:text-center w-full">
                    <h2 className="text-2xl sm:text-4xl mb-4 font-semibold text-[#48ad92] font-[Plus Jakarta Sans]">
                        New Items
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
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#48ad92] z-10 cursor-pointer"
                    >
                        <MdArrowBackIos className="text-gray-700" />
                    </button>
                )}

                {/* Products */}
                <div className="flex justify-center  flex-wrap sm:flex-nowrap gap-4 sm:gap-6 overflow-hidden transition-transform duration-700 ease-in-out cursor-pointer">
                    {displayProducts.map((product, i) => (
                        <Link
                            to={`/product/${product.id}`}
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
                                    className="absolute opacity-0 mt-40 group-hover:opacity-100 transition-all duration-300 bg-white border border-[#48ad92] text-[#48ad92] font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 hover:bg-[#48ad92] hover:text-white"
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
                        </Link>
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
};

export default NewItems;