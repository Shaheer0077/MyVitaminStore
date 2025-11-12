import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import sec1Img1 from "../assets/Sec1Img-1.jpg";
import sec1Img2 from "../assets/Sec1Img-2.jpg";
import sec1Img3 from "../assets/Sec1Img-3.jpg";
import sec1Img4 from "../assets/Sec1Img-4.jpg";
import sec1Img5 from "../assets/Sec1Img-5.jpg";
import sec1Img6 from "../assets/Sec1Img-6.jpg";
import sec1Img7 from "../assets/Sec1Img-7.jpg";
import sec1Img8 from "../assets/Sec1Img-8.jpg";

const HeroSlider = () => {
    const images = [
        sec1Img1,
        sec1Img2,
        sec1Img3,
        sec1Img4,
        sec1Img5,
        sec1Img6,
        sec1Img7,
        sec1Img8,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);


    // Arrow click handlers
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative w-full overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, i) => (
                    <div key={i} className="min-w-full">
                        <img
                            src={src}
                            alt={`Slide ${i + 1}`}
                            className="w-full h-auto object-cover block"
                        />
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            {isHovered && (
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                >
                   <FaAngleLeft className="text-[30px] cursor-pointer" />
                </button>
            )}

            {/* Right Arrow */}
            {isHovered && (
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                >
                   <FaAngleRight className="text-[30px] cursor-pointer"/>
                </button>
            )}

        </div>

    );
};

export default HeroSlider;
