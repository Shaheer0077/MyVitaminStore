import { useState } from "react";
import { Filter, Grid2X2 } from "lucide-react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

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

export default function Supplements() {
    const [sortBy, setSortBy] = useState("best");
    const [visibleCount, setVisibleCount] = useState(10); // show first 5 products

    const products = [
        {
            img: NewItem1,
            discount: "-11%",
            title: "NOW Vitamin C 500mg Chewable Tablets (Orange), 100 Ct",
            reviews: 23,
            oldPrice: "PKR 4,950",
            newPrice: "PKR 4,450",
        },
        {
            img: NewItem2,
            discount: "-17%",
            title: "Applied Nutrition Creatine Monohydrate Powder (Strawberry & Raspberry), 250g",
            reviews: 18,
            oldPrice: "PKR 5,390",
            newPrice: "PKR 4,450",
        },
        {
            img: NewItem1,
            discount: "-11%",
            title: "NOW Vitamin C 500mg Chewable Tablets (Orange), 100 Ct",
            reviews: 23,
            oldPrice: "PKR 4,950",
            newPrice: "PKR 4,450",
        },
        {
            img: NewItem2,
            discount: "-17%",
            title: "Applied Nutrition Creatine Monohydrate Powder (Strawberry & Raspberry), 250g",
            reviews: 18,
            oldPrice: "PKR 5,390",
            newPrice: "PKR 4,450",
        },
        {
            img: NewItem1,
            discount: "-11%",
            title: "NOW Vitamin C 500mg Chewable Tablets (Orange), 100 Ct",
            reviews: 23,
            oldPrice: "PKR 4,950",
            newPrice: "PKR 4,450",
        },
        {
            img: NewItem2,
            discount: "-17%",
            title: "Applied Nutrition Creatine Monohydrate Powder (Strawberry & Raspberry), 250g",
            reviews: 18,
            oldPrice: "PKR 5,390",
            newPrice: "PKR 4,450",
        },
        {
            img: NewItem3,
            discount: "-5%",
            title: "Applied Nutrition Tri-Magnesium Powder (Tropical Vibes), 200g",
            reviews: 18,
            oldPrice: "PKR 3,790",
            newPrice: "PKR 2,975",
        },
        {
            img: NewItem4,
            discount: "-15%",
            title: "Natural Factors BioCoenzymated Methylfolate Folate + B12 1000/50 mcg, 60 Ct",
            reviews: 9,
            oldPrice: "PKR 3,990",
            newPrice: "PKR 3,390",
        },
        {
            img: NewItem5,
            discount: "-35%",
            title: "Applied Nutrition Hydration+ Electrolyte & Vitamin Powder (Lemon & Lime), 240g",
            reviews: 4,
            oldPrice: "PKR 1,673",
            newPrice: "PKR 950",
        },
        {
            img: NewItem6,
            discount: "-10%",
            title: "Webber Naturals Calcium Vitamin D3 500mg / 200 IU, 275 Ct",
            reviews: 4,
            oldPrice: "PKR 10,980",
            newPrice: "PKR 9,882",
        },
        {
            img: NewItem7,
            discount: "-10%",
            title: "Webber Naturals Lutein with Zeaxanthin 40mg, 60 Ct",
            reviews: 4,
            oldPrice: "PKR 4,950",
            newPrice: "PKR 4,450",
        },
        {
            img: NewItem8,
            discount: "-10%",
            title: "NOW Calcium D-Glucarate 500mg, 90 Ct",
            reviews: 4,
            oldPrice: "PKR 9,490",
            newPrice: "PKR 8,541",
        },
        {
            img: NewItem9,
            discount: "-7%",
            title: "NOW Coral Calcium 1000 mg, 100 Ct",
            reviews: 4,
            oldPrice: "PKR 9,100",
            newPrice: "PKR 8,450",
        },
        {
            img: NewItem10,
            discount: "-10%",
            title: "Natural Factors Vitamin B6 100mg, 90 Ct",
            reviews: 4,
            oldPrice: "PKR 13,980",
            newPrice: "PKR 12,582",
        },
        {
            img: NewItem9,
            discount: "-7%",
            title: "NOW Coral Calcium 1000 mg, 100 Ct",
            reviews: 4,
            oldPrice: "PKR 9,100",
            newPrice: "PKR 8,450",
        },
        {
            img: NewItem10,
            discount: "-10%",
            title: "Natural Factors Vitamin B6 100mg, 90 Ct",
            reviews: 4,
            oldPrice: "PKR 13,980",
            newPrice: "PKR 12,582",
        },
        {
            img: NewItem9,
            discount: "-7%",
            title: "NOW Coral Calcium 1000 mg, 100 Ct",
            reviews: 4,
            oldPrice: "PKR 9,100",
            newPrice: "PKR 8,450",
        },
        {
            img: NewItem10,
            discount: "-10%",
            title: "Natural Factors Vitamin B6 100mg, 90 Ct",
            reviews: 4,
            oldPrice: "PKR 13,980",
            newPrice: "PKR 12,582",
        },
    ];

    const displayProducts = products.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 5); // load 5 more
    };

    return (
        <section className="w-full bg-white py-8 px-6 md:px-8">
            <div className=" bg-gray-600 py-8 flex justify-center   ">
                <img src={NewItem10}/>
            </div>
            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
                Supplements
            </h2>

            {/* Controls */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <Filter className="w-5 h-5" />
                    <span className="font-medium">Filter</span>
                </div>
                <div className="flex items-center gap-2">
                    <Grid2X2 className="w-5 h-5 text-gray-600" />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-gray-200"
                    >
                        <option value="best">Best selling</option>
                        <option value="priceLow">Price: Low to High</option>
                        <option value="priceHigh">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                {displayProducts.map((product, i) => (
                    <div
                        key={i}
                        className="relative w-full max-w-[200px] flex flex-col items-center group transition-all duration-300"
                    >

                        {/* Image */}
                        <div className="relative w-full flex justify-center items-center overflow-hidden">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-40 h-40 object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Add to Cart Button */}
                            <button
                                className="absolute opacity-0 mt-40 group-hover:opacity-100 transition-all duration-300 bg-white border border-[#4cbfa6] text-[#4cbfa6] font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 hover:bg-[#4cbfa6] hover:text-white"
                            >
                                <FaShoppingCart />
                                Add to Cart
                            </button>
                        </div>

                        {/* Title */}
                        <p className="text-center text-sm font-medium text-gray-800 mb-2 leading-tight hover:text-[#4cbfa6]">
                            {product.title}
                        </p>

                        {/* Rating */}
                        <div className="flex justify-center items-center gap-1 text-[#009688] mb-1">
                            {Array(5)
                                .fill(0)
                                .map((_, idx) => (
                                    <FaStar key={idx} size={13} />
                                ))}
                            <span className="text-xs text-[#009688] ml-1">
                                {product.reviews} reviews
                            </span>
                        </div>

                        {/* Prices */}
                        <div className="flex flex-row gap-2 items-center">
                            <span className="line-through text-gray-500 text-xs">
                                {product.oldPrice}
                            </span>
                            <span className="text-red-600 font-semibold text-sm">
                                {product.newPrice}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < products.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleLoadMore}
                        className="bg-[#4cbfa6] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3aa994] transition-all"
                    >
                        Load More
                    </button>
                </div>
            )}
        </section>
    );
}
