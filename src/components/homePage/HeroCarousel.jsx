import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../../utils/heroData';
import Container from '../common/Container';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); 
        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
        // Reset animation lock after transition
        setTimeout(() => setIsAnimating(false), 800);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 800);
    };

    return (
        <div className="relative w-full
         h-[600px] 
         md:h-[700px] lg:h-[860px] 
         overflow-hidden bg-gray-900 group">

            {/* Background Images with Fade Effect */}
            {HERO_SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Image */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay: Dark gradient from left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>
            ))}

            {/* Content Container */}
            <div className="absolute inset-0 z-20 flex items-center">
<Container>
                <div className="c w-full">
                    <div className="max-w-3xl overflow-hidden">
                        {/* 
                            Key-based re-rendering for animation: 
                            When key changes (on slide change), the element is removed and recreated, 
                            triggering the CSS animation.
                        */}
                        <div key={currentSlide} className="animate-slide-in-left">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                                {HERO_SLIDES[currentSlide].title}
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                                {HERO_SLIDES[currentSlide].description}
                            </p>

                            {/* "Get a Quick Quote" Button */}
                            <Link
                                to="/contact"
                                className="inline-flex items-center bg-white h-14 pl-1 pr-8 rounded transition-transform hover:-translate-y-1"
                            >
                                <div className="h-12 w-12 bg-[#800000] flex items-center justify-center mr-4 rounded-sm">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                                <span className="text-gray-900 font-bold text-lg tracking-wide">
                                    Get a Quick Quote
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
</Container>

            </div>

            {/* Navigation Arrows (Bottom Right) */}
            <div className="absolute bottom-10 right-10 z-30 flex space-x-4">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-[#800000] hover:border-[#800000] transition-colors"
                    aria-label="Previous Slide"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-[#800000] hover:border-[#800000] transition-colors"
                    aria-label="Next Slide"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
{/* </Container> */}

        </div>
    );
};

export default HeroCarousel;
