
import React, { useState, useEffect, useRef } from "react";
import ProductSlider from '../components/ProductSlider';
import ReviewsList from "../components/ReviewsList";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";



import {
    FaStar,
    FaHeart,
    FaMinus,
    FaPlus,
    FaShoppingCart,
} from "react-icons/fa";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { newItemsProducts } from "../components/NewItems";
import { SpecialOffferProducts } from "../components/SpecialOffers";


import HalalLogo from "../assets/HalalLogo.png";
import VegeterianLogo from "../assets/VegeterianLogo.png";
import patternImg from "../assets/pattern.jpg";
import VerifiedCheckmark from "../assets/verified-checkmark.svg";
import diamond from "../assets/diamond.svg"
import silver from "../assets/silver.svg"

import PDImg1 from "../assets/PDImg1.png";
import PDImg2 from "../assets/PDImg2.png";
import PDImg3 from "../assets/PDImg3.png";
import PDImg4 from "../assets/PDImg4.png";
import PDImg5 from "../assets/PDImg5.png";
import PDImg6 from "../assets/PDImg6.png";
import PDImg7 from "../assets/PDImg7.png";
import PDImg8 from "../assets/PDImg8.png";

import FBTImg1 from "../assets/FBTImg1.jpg";
import FBTImg2 from "../assets/FBTImg2.jpg";





export default function ProductDetail({ product: propProduct = null }) {
    const { addToCart } = useCart();

    const { productId } = useParams();
    const productIdNum = parseInt(productId);
    const products_1 = [
        {
            img: PDImg1,
            discount: "-11%",
            title: "NOW Vitamin C 500mg Chewable Tablets (Orange), 100 Ct",
            reviews: 23,
            oldPrice: "PKR 4,950",
            newPrice: "PKR 4,450",
        },
        {
            img: PDImg2,
            discount: "-17%",
            title: "Applied Nutrition Creatine Monohydrate Powder (Strawberry & Raspberry), 250g",
            reviews: 18,
            oldPrice: "PKR 5,390",
            newPrice: "PKR 4,450",
        },
        {
            img: PDImg3,
            discount: "-5%",
            title: "Applied Nutrition Tri-Magnesium Powder (Tropical Vibes), 200g",
            reviews: 18,
            oldPrice: "PKR 3,790",
            newPrice: "PKR 2,975",
        },
        {
            img: PDImg4,
            discount: "-15%",
            title: "Natural Factors BioCoenzymated Methylfolate Folate + B12 1000/50 mcg, 60 Ct",
            reviews: 9,
            oldPrice: "PKR 3,990",
            newPrice: "PKR 3,390",
        },
        {
            img: PDImg5,
            discount: "-35%",
            title: "Applied Nutrition Hydration+ Electrolyte & Vitamin Powder (Lemon & Lime), 240g",
            reviews: 4,
            oldPrice: "PKR 1,673",
            newPrice: "PKR 950",
        },
        {
            img: PDImg6,
            discount: "-10%",
            title: "Webber Naturals Calcium Vitamin D3 500mg / 200 IU, 275 Ct",
            reviews: 4,
            oldPrice: "PKR 10,980",
            newPrice: "PKR 9,882",
        },
        {
            img: PDImg7,
            discount: "-10%",
            title: "Webber Naturals Lutein with Zeaxanthin 40mg, 60 Ct",
            reviews: 4,
            oldPrice: "PKR 4,950",
            newPrice: "PKR 4,450",
        },
        {
            img: PDImg8,
            discount: "-10%",
            title: "NOW Calcium D-Glucarate 500mg, 90 Ct",
            reviews: 4,
            oldPrice: "PKR 9,490",
            newPrice: "PKR 8,541",
        },

    ];

    const parsePrice = (price) => {
        if (!price) return 0;
        if (typeof price === "number") return price;
        const n = Number(price.toString().replace(/[^0-9.-]+/g, ""));
        return isNaN(n) ? 0 : n;
    };
    // fallback product data (you can replace this by passing "product" prop)
    const allProducts = [
        ...SpecialOffferProducts.map(p => ({
            ...p,
            type: "special",
            brand: p.Brand || "Default Brand",
            sku: p.sku || "N/A",
            country: p.country || "N/A",
            availability: p.availability || "In Stock",
            price: p.price || parsePrice(p.newPrice) || 0,
            oldPrice: p.oldPrice || parsePrice(p.oldPrice) || 0,
            discount: p.discount || "0%",
            rating: p.rating || 0,
            reviews: p.reviews || 0,
            packSize: p.packsize || "1 Unit",
            description: p.description
        })),
        ...newItemsProducts.map(p => ({
            ...p,
            type: "new",
            brand: p.Brand || "Default Brand",
            sku: p.sku || "N/A",
            country: p.country || "N/A",
            availability: p.availability || "In Stock",
            price: p.price || parsePrice(p.newPrice) || 0,
            oldPrice: p.oldPrice || parsePrice(p.oldPrice) || 0,
            discount: p.discount || "0%",
            rating: p.rating || 0,
            reviews: p.reviews || 0,
            packSize: p.packsize || "1 Unit",
            description: p.description
        })),
    ];

    const product = propProduct || allProducts.find(p => p.id === productIdNum) || allProducts[0];

    const [qty, setQty] = useState(1);
    const [readMore, setReadMore] = useState(false);
    const [activeTab, setActiveTab] = useState("shipping");
    const [showDescription, setShowDescription] = useState(false);

    /** ---------------------------
 *  Frequently Bought Together
 * --------------------------- */
    const recommended = [
        {
            id: 2,
            name: "Nature's Bounty Magnesium 500mg, 100 Ct",
            img: FBTImg1,
            variants: ["100 Tablets", "200 Tablets"],
            selectedVariant: "100 Tablets",
            price: 5695,
            oldPrice: null,
        },
        {
            id: 3,
            name: "OH MY GUT Digestive Enzymes – Versus",
            img: FBTImg2,
            variants: ["90 Capsules"],
            selectedVariant: "90 Capsules",
            price: 2300,
            oldPrice: null,
        },
    ];
    const [items, setItems] = useState([
        {
            id: 1,
            name: product.title,
            img: product.img,
            selected: true,
            variants: [product.packsize],
            selectedVariant: product.packsize,
            price: product.price,
            oldPrice: product.oldPrice,
            isMain: true,
        },
        ...recommended.map(x => ({ ...x, selected: true })),
    ]);
    const toggleSelect = (id) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };




    const totalOriginal = items
        .filter((i) => i.selected)
        .reduce((t, x) => t + parsePrice(x.oldPrice || x.price), 0);

    const totalDiscount = items
        .filter((i) => i.selected)
        .reduce((t, x) => t + parsePrice(x.price), 0);

    /** --------------------------- */

    function dec() {
        setQty((q) => Math.max(1, q - 1));
    }
    function inc() {
        setQty((q) => q + 1);
    }

    const fullDescRef = useRef(null);
    const shortDescription = product.description?.split(". ").slice(0, 3).join(". ") + ".";


    return (
        <div className="w-full mt-10">
            <div className="max-w-6xl mx-auto px-6 ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* LEFT: IMAGE */}

                    <div className=" md:sticky top-20 bg-white p-6 flex justify-center items-center  rounded shadow-sm">
                        <span className="hidden sm:block absolute top-0 right-0 bg-red-600 text-white text-sm px-4 py-0.5  z-20 ">
                            -11%
                        </span>
                        <img
                            src={product.img}
                            alt={product.title}
                            className="max-h-[520px] w-full object-contain"
                        />

                    </div>

                    {/* RIGHT: DETAILS */}
                    <div className="space-y-6   ">
                        <div>
                            <h1 className="text-2xl lg:text-xl font-semibold text-[#222]">
                                {product.title}
                            </h1>

                            {/* rating & reviews */}
                            <div className="flex items-center gap-3 mt-3">
                                <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`mr-1 ${i < Math.round(product.rating) ? "text-[#108474]" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                <div className="text-sm text-[#696969]">{product.reviews} reviews</div>
                            </div>
                        </div>

                        {/* price */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-baseline gap-3">
                                <div className="text-2xl line-through text-[#696969]">
                                    PKR {(parsePrice(product.oldPrice) || 0).toLocaleString()}
                                </div>
                                <div className="text-2xl lg:text-2xl font-medium text-[#d81600]">
                                    PKR {(parsePrice(product.newPrice) || 0).toLocaleString()}
                                </div>

                            </div>
                            <div className=" bg-[#d81600] text-white text-xs px-2 py-1 font-medium ">
                                SAVE {product.discount}
                            </div>

                        </div>


                        {/* short description */}

                        <div className="text-[#222222bf] text-left">
                            <p className="leading-relaxed">
                                {shortDescription}
                                <button
                                    onClick={() => fullDescRef.current.scrollIntoView({ behavior: "smooth" })}
                                    className="text-[#48ad92] underline ml-2 text-sm font-medium cursor-pointer"
                                >
                                    Read More
                                </button>
                            </p>
                        </div>

                        {/* pack size */}
                        <div className="text-sm text-[#364153]">
                            <span>Pack Size:</span> <span className="font-medium text-[#111]">{product.packSize}</span>
                        </div>

                        {/* quantity + buttons */}
                        <div className="flex flex-col gap-2">
                            <div className="text-[#222222bf] ">Quantity</div>
                            <div className="flex items-center gap-3 border rounded-full px-3 py-1 w-fit">
                                <button
                                    onClick={dec}
                                    className="p-2 rounded-full hover:bg-gray-100"
                                    aria-label="decrease"
                                >
                                    <FaMinus className="text-[#585858bf] cursor-pointer" />
                                </button>
                                <div className="min-w-[10] text-center text-[#111] ">{qty}</div>
                                <button
                                    onClick={inc}
                                    className="p-2 rounded-full hover:bg-gray-100"
                                    aria-label="increase"
                                >
                                    <FaPlus className=" cursor-pointer" />
                                </button>
                            </div>
                            {/*  buttons */}
                        </div>
                        <div className="flex-1 space-y-2 ">
                            <button onClick={() =>
                                addToCart({
                                    id: product.id,
                                    title: product.title,
                                    price: product.price,
                                    oldPrice: product.oldPrice,
                                    image: product.img,
                                },
                                qty
                            )
                            } className="w-[75%] bg-[#48ad92] hover:bg-[#327764] transition text-white py-2 rounded-full font-semibold cursor-pointer">
                                ADD TO CART
                            </button>
                            <button className="w-[75%]  bg-[#48ad92] hover:bg-[#327764] text-white py-2 flex items-center justify-center gap-2 cursor-pointer">
                                <FaHeart /> ADD TO WISHLIST
                            </button>
                        </div>

                        {/* tabs */}
                        <div className="flex gap-6 font-medium text-[#111]  pb-3">
                            <a href="#" className="hover:text-green-600 ">Shipping</a>
                            <a href="#" className="hover:text-green-600 ">Return And Exchange</a>
                            <a href="#" className="hover:text-green-600 ">How to Order</a>

                        </div>

                        {/* meta */}
                        <div className=" text-sm text-[#878787] ">
                            <div className="flex flex-col gap-3 flex-wrap">
                                <div>
                                    <span className="text-[#878787] font-medium ">Brand:</span> <span className="text-[#108474] underline">{product.brand}</span>
                                </div>
                                <div>
                                    <span className="text-[#878787]  font-medium">SKU:</span> <span className="text-[#111]">{product.sku}</span>
                                </div>
                                <div>
                                    <span className="text-[#878787]  font-medium">Availability:</span > <span className="text-[#111]">{product.availability}</span>
                                </div>
                                <div>
                                    <span className="text-[#878787] font-medium">Country:</span> <span className="text-[#111]">{product.country}</span>
                                </div>
                            </div>

                            {/* small icons */}
                            <div className="flex items-center gap-3 mt-4 ">
                                <img className="w-[8%]" src={HalalLogo} alt="Halal" />
                                <img className="w-[10%]" src={VegeterianLogo} alt="Vegeterian" />

                            </div>
                        </div>
                    </div>
                </div>


                {/* -----------------------------
                FREQUENTLY BOUGHT TOGETHER
            ----------------------------- */}
                <h2 className="text-2xl font-normal text-[#222] mt-10">
                    Frequently Bought Together
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-start gap-10 w-full">

                    {/* Images Row */}
                    <div className="flex flex-nowrap items-center gap-6 pb-2 md:pb-0">
                        {items.map((item, index) => (
                            <div key={item.id} className="flex items-center gap-1 min-w-fit">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="h-24 md:h-32 object-contain"
                                />
                                {index !== items.length - 1 && (
                                    <span className="text-xl md:text-2xl font-light  text-[#222222BF]" >+</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Price + Button */}
                    <div className="flex flex-col items-start">
                        <div className="text-base md:text-normal text-gray-700">
                            Total price:{" "}
                            <span className="line-through text-[#222222BF] font-light">
                                PKR {(totalOriginal || 0).toLocaleString()}
                            </span>{" "}
                            <span className="font-medium">
                                PKR {(totalDiscount || 0).toLocaleString()}
                            </span>

                        </div>

                        <button className="bg-[#48ad92] hover:bg-[#327764] text-white md:mt-3 px-6 md:px-10 py-2 md:py-2 rounded-full font-semibold whitespace-nowrap">
                            ADD SELECTED TO CART
                        </button>
                    </div>
                </div>




                {/* Items List */}
                <div className="mt-8 space-y-4 ">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 ">

                            <div className="flex items-center justify-center gap-2 sm:gap-4 ml-0 ">
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={() => toggleSelect(item.id)}
                                    className="w-3 h-3 accent-blue-600"
                                />


                                <span className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 font-medium text-sm ${item.isMain ? "text-[#222222BF]" : "text-[#222]"}`}> {item.name}</span>
                            </div>
                            <div className="flex items-center gap-3 sm:gap-4 ">
                                <select
                                    value={item.selectedVariant}
                                    onChange={(e) =>
                                        setItems((prev) =>
                                            prev.map((x) =>
                                                x.id === item.id
                                                    ? { ...x, selectedVariant: e.target.value }
                                                    : x
                                            )
                                        )
                                    }
                                    className="border mx-2 px-2 py-1 items-center "
                                >
                                    {item.variants.map((v) => (
                                        <option key={v} value={v}>
                                            {v}
                                        </option>
                                    ))}
                                </select>

                                <div className="text-gray-800 font-normal whitespace-nowrap">
                                    {item.oldPrice && (
                                        <span className="line-through text-gray-400 mr-2 font-light">
                                            PKR {(parsePrice(item.oldPrice) || 0).toLocaleString()}
                                        </span>
                                    )}
                                    PKR {(item.price || 0).toLocaleString()}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                {/* -----------------------------
                         Description
            ----------------------------- */}

                <div ref={fullDescRef} className="mt-10 p-6 text-normal leading-relaxed text-[#878787] space-y-4 bg-white ">

                    {/* Header Row */}
                    <button
                        onClick={() => setShowDescription(!showDescription)}
                        className="w-full relative flex items-center justify-between bg-[#f6f6f6] px-6 py-2"
                    >
                        <span className="text-1xl font-normal text-[#111] hover:text-green-600 cursor-pointer ">Description</span>

                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white flex items-center justify-center text-2xl cursor-pointer">
                            {showDescription ? "−" : "+"}
                        </div>
                    </button>

                    {/* Toggle Content */}
                    {showDescription && (
                        <div className="p-6 text-normal leading-relaxed text-[#878787] space-y-4 bg-white">

                            <ul className="list-disc ml-6 space-y-1">
                                <li>Restores and maintains healthy, balanced intestinal flora</li>
                                <li>FOS (fructoogosaccharides) added as "food" for bacteria for long-lasting action</li>
                                <li>Supports immune function</li>
                                <li>Counteracts systemic and vaginal Candida albicans yeast overgrowth</li>
                                <li>Prevents urinary tract infections</li>
                            </ul>
                            <p>
                                Probiotic supplementation provides live microorganisms that temporarily modify gut flora, helping to maintain natural intestinal balance, improve digestion and immunity.
                                Natural Factors Ultimate Multi Probiotic contains active cells of a blend of specially cultured strains of probiotics, chosen for their compatibility and ability to survive stomach acidity.
                            </p>

                            <h3 className="text-lg font-semibold mt-4">Advanced Info</h3>

                            <p>
                                Natural Factors Ultimate Multi Probiotic provides probiotic strains that support digestive health and immunity. Each strain has been specially selected and cultured for their compatibility and natural resistance to gastric acid, allowing the probiotics to reach the intestines at full potency. This formulation offers both Lactobacilli to support small intestine health, along with Bifidobacteria, the most prevalent friendly bacteria in the large intestine.
                            </p>

                            <p>
                                Together, these strains help maintain intestinal barrier health and overall well-being. With age and antibiotic use, healthy gut bacteria decline, increasing susceptibility to inflammation and immune dysfunction.
                            </p>
                            <p>
                                Each strain in the formula has natural resistance to gastric acids. Gastric resistance is critical to surviving the stomach's acidity without an enteric coating and reaching the intestines at full potency.                            </p>

                            <h3 className="text-lg font-semibold mt-4">Supplement Facts</h3>

                            <p>Each vegetarian capsule contains:</p>
                            <p>12 billion active cells* of the following specially cultured strains of probiotics:</p>

                            <ul className="list-disc ml-6 space-y-1">
                                <li>Total bacterial culture:12 billion</li>
                                <li>Lactobacillus casei (HA-108) (whole cell) (human): 3 billion</li>
                                <li>Lactobacillus rhamnosus (HA-111) (whole cell) (human): 1 .44 billion</li>
                                <li>Bifidobacterium breve (HA-129) (whole cell) (human): 1 .20 billion</li>
                                <li>Bifidobacterium longum subsp. longum (HA-135) (whole cell) (human): 1 .20 billion</li>
                                <li>Lactobacillus acidophilus (HA-122) (whole cell) (human): 1 .20 billion</li>
                                <li>Lactobacillus plantarum (HA-119) (whole cell) (plant): 1 .20 billion</li>
                                <li>Lactobacillus rhamnosus (bifidus) (HA-114) (whole cell) (human): 1 .20 billion</li>
                                <li>Bifidobacterium bifidum (HA-132) (whole cell) (human): 0 .60 billion</li>
                                <li>Lactobacillus fermentum (HA-179) (whole cell) (dairy): 0 .60 billion</li>
                                <li>Lactobacillus salivarius (HA-118) (whole cell) (human): 0 .12 billion</li>
                                <li>Lactobacillus paracasei (HA-196) (whole cell) (dairy): 0 .12 billion</li>
                                <li>Bifidobacterium animalis subsp. lactis (HA-194) (whole cell) (dairy): 0 .12 billion</li>

                            </ul>
                            <p>* Guaranteed minimum 12 billion active cells per capsule at expiry date.</p>
                            <p>  * Guaranteed minimum 18 billion active cells per capsule at manufacture date.</p>

                            <h3 className="text-lg font-semibold mt-4">Suggested Usage</h3>
                            <p>Take 1 capsule in the morning and 1 capsule in evening before or after meal.</p>
                            <p>For maximum potency, refrigerate.</p>

                            <h3 className="text-lg font-semibold mt-4">This is a Vegetarian / Halal product.</h3>
                            <p>* Food Supplements should not be used as a substitute for a varied and balanced diet and healthy lifestyle. No medical claims are made or implied for any product and these are being sold as Nutritional/Dietary Supplements. Use as suggested or as advised by health provider.</p>

                            <h3 className="text-lg font-semibold mt-4">Legal Disclaimer</h3>
                            <p>
                                Unless expressly indicated in the product description, MyVitaminStore.pk is not the manufacturer of the products sold on our website. While we work to ensure that product information on our website is correct, manufacturers may alter their product information. Actual product packaging and materials may contain more and/or different information than shown on our website. If you have any specific product queries, please contact the manufacturer. For medicinal products, content on our website is not intended to be used to diagnose, treat, cure, or prevent any disease or health condition or to substitute advice given by medical practitioners, pharmacists or other licensed health care professionals. You should contact your health care provider immediately if you suspect that you have a medical problem. You should always read the labels, warnings and instructions provided with the product before using or consuming it and not solely rely on the information presented on our website.                            </p>
                        </div>
                    )}
                </div>
                {/* -----------------------------
                         Products
                 ----------------------------- */}
                <ProductSlider title="You may also like" products={products_1} patternImg={patternImg} />
                <ProductSlider title="Recently Viewed Products" products={products_1} patternImg={patternImg} />

                {/* -----------------------------
                         Customer Reviews
                 ----------------------------- */}

                <section className="w-full py-16 px-4 md:px-10 bg-white md:mt-10">
                    {/* TITLE */}
                    <h2 className="text-center text-2xl text-[#222222] font-normal mb-10">
                        Customer Reviews
                    </h2>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

                        {/* LEFT SIDE – Rating Summary */}
                        <div className="flex flex-col items-center md:items-start ">
                            <div className="flex text-[#108474] text-2xl gap-1 ">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span className="text-sm text-center font-normal underline text-[#108474] ">4.79 out of 5</span>
                            </div>


                            <p className="text-gray-500 text-sm flex items-center gap-1">
                                Based on 24 reviews
                                <img src={VerifiedCheckmark} alt="icon" className="w-4 h-4 inline-block" />
                            </p>
                        </div>

                        {/* MIDDLE – Rating Bars */}
                        <div className="space-y-1 w-full md:px-6 border-l border-r border-[#1084741a]">
                            {/* row */}
                            {[
                                { stars: 5, count: 20, width: "w-[85%]" },
                                { stars: 5, count: 3, width: "w-[15%]" },
                                { stars: 5, count: 1, width: "w-[5%]" },
                                { stars: 5, count: 0, width: "w-[0%]" },
                                { stars: 5, count: 0, width: "w-[0%]" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 ">
                                    <div className="flex text-[#108474]  text-xl">
                                        {Array(item.stars).fill(0).map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>

                                    <div className="flex-1 h-3 bg-gray-200  ">
                                        <div
                                            className={`h-full bg-[#108474]  ${item.width}`}
                                        ></div>
                                    </div>

                                    <p className="w-6 text-gray-600 ">{item.count}</p>
                                </div>
                            ))}

                        </div>

                        {/* RIGHT SIDE – Buttons */}
                        <div className="flex flex-col gap-4 items-center md:items-end  ">
                            <button className="bg-[#108474]  text-white px-10 py-2  font-medium w-55">
                                Write a review
                            </button>

                            <button className="border-2 border-[#108474]  text-[#108474]  px-10 py-2 font-medium w-55">
                                Ask a question
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-[#1084741a] mt-5" />

                    {/* BADGES SECTION (Bottom) */}
                    <div className="mt-10 w-full flex justify-center gap-10 ">
                        <img
                            src={diamond}
                            className="w-24 opacity-70"
                            alt="badge1"
                        />
                        <img
                            src={silver}
                            className="w-24 opacity-70"
                            alt="badge2"
                        />
                    </div>
                    <p className="underline text-sm flex justify-center text-[#108474] items-center gap-1">
                        Verified
                        <img src={VerifiedCheckmark} alt="icon" className="w-4 h-4 inline-block" />
                    </p>

                </section>

                <ReviewsList productId={productId} />

            </div>

            <div className="w-full"><Footer /></div>
        </div>
    );
}
