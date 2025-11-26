import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSkipRightLine,RiSkipLeftLine } from "react-icons/ri";

import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
import { dummyReviews } from "../data/reviews";
import VerifiedCheckmarkIcon from "../assets/VerifiedCheckmarkIcon.jpg"


export default function ReviewsList({ productId }) {
    const [reviews, setReviews] = useState([]);
    const [sort, setSort] = useState("recent");
    const [page, setPage] = useState(1);
    const perPage = 5;

    useEffect(() => {
        setReviews(dummyReviews); // <-- using dummy data
    }, []);

    useEffect(() => {
        setPage(1); // reset page whenever sort changes
    }, [sort]);


    // Sorting
    const sorted = [...reviews].sort((a, b) => {
        if (sort === "recent") return new Date(b.date) - new Date(a.date);
        if (sort === "oldest") return new Date(a.date) - new Date(b.date);
        if (sort === "rating-high") return b.rating - a.rating;
        if (sort === "rating-low") return a.rating - b.rating;
        return 0;
    });


    // Pagination
    const totalPages = Math.ceil(sorted.length / perPage);
    const current = sorted.slice((page - 1) * perPage, page * perPage);

    return (
        <section className="w-full">
            {/* SORTING + VERIFIED */}
            <div className="w-full border-t border-b border-[#1084741a] py-3 mb-4">
                <div className="flex items-center justify-between">

                    {/* Sort dropdown  */}
                    <div className="relative">
                        <select
                            onChange={(e) => setSort(e.target.value)}
                            value={sort}
                            className="
                            appearance-none 
                            bg-transparent 
                            text-[#108474] 
                            font-medium 
                            pr-6 
                            focus:outline-none
                            cursor-pointer
                            "
                        >
                            <option value="recent">Most Recent</option>
                            <option value="oldest">Oldest</option>
                            <option value="rating-high">Highest Rating</option>
                            <option value="rating-low">Lowest Rating</option>
                        </select>

                        <IoMdArrowDropdown
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-[#108474] pointer-events-none"
                        />
                    </div>

                </div>
            </div>


            {/* REVIEWS */}
            <div className="space-y-10">
                {current.map((rev, i) => (
                    <div key={i} className="border-b border-[#1084741a] pb-6 relative">

                        {/* Date at top-right */}
                        <p className="absolute top-0 right-0 text-gray-400 text-sm">
                            {new Date(rev.date).toLocaleDateString("en-GB")}
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="flex text-[#108474]">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`${i < rev.rating ? "text-[#108474]" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>


                        </div>

                        <div className="flex items-center gap-2 mt-2">

                            {/* Left Icon */}
                            {rev.verified && (
                                <img
                                    src={VerifiedCheckmarkIcon}
                                    alt="verified"
                                    className="w-10 h-10"
                                />
                            )}

                            {/* Name */}
                            <p className="font-medium text-[#108474]">
                                {rev.name}
                            </p>

                            {/* Verified Badge (same as before) */}
                            {rev.verified && (
                                <span className="bg-[#108474] text-white text-xs px-3 py-0.5 ">
                                    Verified
                                </span>
                            )}

                        </div>

                        {rev.title && (
                            <p className="mt-1 text-[#222222BF] font-semibold">{rev.title}</p>
                        )}

                        <p className="text-[#222222BF] mt-1">{rev.message}</p>

                    </div>
                ))}
            </div>


            {/* PAGINATION */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-10 text-[#108474] font-medium select-none mb-15">

                    {/* First Page */}
                    <button
                        onClick={() => setPage(1)}
                        disabled={page === 1}
                        className={`${page === 1 ? "opacity-40 cursor-default " : "cursor-pointer"}`}
                    >
                        <RiSkipLeftLine />
                    </button>

                    {/* Previous */}
                    <button
                        onClick={() => setPage(prev => (prev > 1 ? prev - 1 : prev))}
                        disabled={page === 1}
                        className={`${page === 1 ? "opacity-40 cursor-default" : "cursor-pointer"}`}
                    >
                        <MdKeyboardArrowLeft />
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }).map((_, i) => {
                        const num = i + 1;
                        return (
                            <button
                                key={i}
                                onClick={() => setPage(num)}
                                className={`${page === num
                                        ? "text-gray-600 font-bold " // active
                                        : "text-[#108474]"
                                    }`}
                            >
                                {num}
                            </button>
                        );
                    })}

                    {/* Next */}
                    <button
                        onClick={() => setPage(prev => (prev < totalPages ? prev + 1 : prev))}
                        disabled={page === totalPages}
                        className={`${page === totalPages ? "opacity-40 cursor-default" : "cursor-pointer"}`}
                    >
                        <MdKeyboardArrowRight />
                    </button>

                    {/* Last Page */}
                    <button
                        onClick={() => setPage(totalPages)}
                        disabled={page === totalPages}
                        className={`${page === totalPages ? "opacity-40 cursor-default" : "cursor-pointer"}`}
                    >
                        <RiSkipRightLine />
                    </button>

                </div>
            )}

        </section>
    );
}
