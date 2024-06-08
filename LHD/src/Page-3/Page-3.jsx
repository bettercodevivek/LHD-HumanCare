
import React, { useState, useEffect } from 'react';

const Page3 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 5; // Adjust based on the number of items

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const autoSlide = setInterval(nextSlide, 3000);
        return () => clearInterval(autoSlide);
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-white rounded-lg shadow-md h-dvh top-28">

<h1 className="text-4xl font-bold text-center"> Our Products</h1>
       
            <div className="carousel-track-container relative overflow-hidden w-full">
                <div
                    className="carousel-track flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(100 / 3) * currentSlide}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <div
                            key={index}
                            className="carousel-item min-w-[calc(100%/3)] flex-shrink-0 box-border p-2"
                        >
                            <img
                                src={`https://via.placeholder.com/300?text=Item+${index + 1}`}
                                alt={`Item ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-indicators flex justify-center mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`indicator w-3 h-3 bg-gray-400 rounded-full mx-1 cursor-pointer ${
                            currentSlide === index ? 'bg-gray-800' : ''
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page3;





        

