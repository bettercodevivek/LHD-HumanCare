
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
            image: 'https://i.postimg.cc/s24ZWdM0/brain-upper-view-outline-svgrepo-com.png',
            title: 'Neurology',
            description: 'Advancing brain health with innovative treatments and expert neurological care.',
            link: '#'
        },
        {
            id: 2,
            image: 'https://i.postimg.cc/K8LTZgxb/hand-palm-outline-with-scratch-wound-with-blood-droplet-svgrepo-com.png',
            title: 'Diabetology',
            description: 'This is a description for item 2.',
            link: '#'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/VsGn48Dx/liver-svgrepo-com.png',
            title: 'Hepatology',
            description: 'Leading the way in liver health with advanced treatments and compassionate care.',
            link: '#'
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/yYD9bbGk/stomach-svgrepo-com.png',
            title: 'GastroEnterology',
            description: 'Your partner in digestive health, providing expert care for a healthy gut',
            link: '#'
        },
        {
            id: 5,
            image: 'https://i.postimg.cc/yxd9BQYp/standing-human-body-silhouette-svgrepo-com.png',
            title: 'Vitaminology',
            description: 'Unlock the power of vitamins for optimal health and wellness.',
            link: '#'
        }
    ];

    return (
        <div className="relative w-full overflow-hidden rounded-lg h-dvh top-28">
             <h1 className="text-4xl font-bold text-center"> Our Products</h1>
           
            <div className="relative overflow-hidden w-full top-8">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(100 / 3) * currentSlide}%)` }}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className=" min-w-[calc(100%/3)] flex-shrink-0 box-border  p-4"
                        >
                            <div className="bg-inherit p-6 rounded-3xl w-5/6  flex flex-col items-center text-wrap">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-28 h-28 object-cover aspect-square rounded-full mb-4"
                                />
                                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                                <p className="text-gray-700 text-center mb-4">{item.description}</p>
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
            <div className="flex justify-center mt-4 relative top-12">
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




       
            