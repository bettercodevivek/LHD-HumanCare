
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

    const carouselItems = [
        {
            id: 1,
            image: 'https://via.placeholder.com/300',
            title: 'Item 1',
            description: 'This is a description for item 1.',
            link: '#'
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/300',
            title: 'Item 2',
            description: 'This is a description for item 2.',
            link: '#'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/300',
            title: 'Item 3',
            description: 'This is a description for item 3.',
            link: '#'
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/300',
            title: 'Item 4',
            description: 'This is a description for item 4.',
            link: '#'
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/300',
            title: 'Item 5',
            description: 'This is a description for item 5.',
            link: '#'
        }
    ];

    return (
        <div className="relative w-full overflow-hidden bg-white rounded-lg shadow-md">
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                onClick={prevSlide}
            >
                ❮
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                onClick={nextSlide}
            >
                ❯
            </button>
            <div className="carousel-track-container relative overflow-hidden w-full">
                <div
                    className="carousel-track flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(100 / 3) * currentSlide}%)` }}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className="carousel-item min-w-[calc(100%/3)] flex-shrink-0 box-border p-4"
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                                <p className="text-gray-700 mb-4">{item.description}</p>
                                <a
                                    href={item.link}
                                    className="text-indigo-500 hover:text-indigo-600"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-indicators flex justify-center mt-4">
                {carouselItems.map((_, index) => (
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



/* <h1 className="text-4xl font-bold text-center"> Our Products</h1> */
       
            