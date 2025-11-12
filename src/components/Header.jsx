import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { RiMenu2Fill } from 'react-icons/ri';

import logoSrc from '../assets/logo.svg';

export default function Header({ cartCount = 0, onSearch }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const items = [
        <div className="flex items-center gap-1 text-black" key="phone">
            <BsTelephone className="text-[14px]" /> 03400687687
        </div>,
        <div key="shipping text-black">
            Free shipping all over Pakistan on orders above PKR 2,500
        </div>,
        <div className="flex items-center gap-2 text-black" key="email">
            <HiOutlineMail className="text-[14px]" /> contact@myvitaminstore.pk
        </div>,
    ];

    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All Categories');
    const [showCategories, setShowCategories] = useState(false);

    const categories = [
        'All Categories', 'Vitamins', 'Supplements', 'Protein', 'Herbal', 'Personal Care', 'Deals', 'Brands'
    ];

    function submitSearch(e) {
        e.preventDefault();
        if (onSearch) onSearch(query, category);
    }

    return (
        <>
            {/* Top info bar */}
            <div className="bg-[#f6f7f8] text-xs text-gray-600">
                <div className="container mx-auto px-4 py-2 flex items-center justify-between">

                    {/* Desktop View — show all items */}
                    <div className="hidden sm:flex items-center justify-between w-full">
                        <div className="flex items-center gap-1 text-gray-600">
                            <BsTelephone className="text-[14px]" /> 03400687687
                        </div>
                        <div className='text-gray-600'>
                            Free shipping all over Pakistan on orders above PKR 2,500
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <HiOutlineMail className="text-[14px]" /> contact@myvitaminstore.pk
                        </div>
                    </div>

                    {/* Mobile View — show one at a time */}
                    <div className="sm:hidden w-full flex justify-center items-center text-center transition-all duration-500 ease-in-out">
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                            {items[index]}
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Section */}
            <div className="sticky top-0 z-50 bg-white shadow-md">
            <div className="flex flex-wrap items-center justify-between px-4 py-2 sm:py-3 bg-white ">

                {/* Left: Menu Icon */}
                <div className="flex items-center gap-3 order-1 sm:order-1 ">
                    <button className="text-gray-700 hover:text-green-600">
                        <RiMenu2Fill className="text-[28px]" />
                    </button>
                </div>

                {/* Center: Logo */}
                <div className="order-2 flex-1 flex justify-center sm:justify-start items-center md:ml-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src={logoSrc}
                            alt="MyVitaminStore"
                            className="h-14 sm:h-24 md:h-10 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Right: Links + Cart */}
                <div className="flex items-center gap-6 text-sm text-gray-800 order-3 sm:order-3 ml-auto">
                    {/* Hide these links on mobile */}
                    <div className="hidden sm:flex items-center mr-0 md:mr-20  gap-4 text-sm text-gray-800">
                        <a href="#" className="hover:text-green-600 ">Sell on MVS</a>
                        <a href="#" className="hover:text-green-600 ">How to Order</a>
                        <a href="#" className="hover:text-green-600 ">Login/Register</a>
                    </div>

                    {/* Cart — same element, just reorders */}
                    <div className="relative">
                        <LiaShoppingCartSolid className="text-[30px] md:mr-6 mr-0" />
                        <span className="absolute -top-2 -right-2 md:mr-6 mr-0 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                    </div>
                </div>
                {/* Middle: Search bar */}
                <div className="w-full sm:w-[570px] flex justify-center items-center order-3 sm:order-2 mt-3 sm:mt-2  mx-auto md:mr-20 mr-0">
                    <form
                        onSubmit={submitSearch}
                        className="flex items-center border border-green-600  overflow-hidden w-full sm:w-[570px]  "
                    >
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for Products"
                            className="flex-1 px-6 py-2 text-black outline-none text-sm"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 mr-0.5 mt-0.5 mb-0.5 bg-[#43b39d] text-gray-50 font-semibold text-sm uppercase tracking-wide cursor-pointer "
                        >
                            search
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
}
