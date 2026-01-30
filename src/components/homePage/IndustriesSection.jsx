import React, { useEffect, useRef, useState } from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { industries } from '../../utils/industiesData';

const IndustriesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-[#FAF5F5] overflow-hidden">
            <Container>
                {/* Header Container */}
                <div className={`flex flex-col items-center text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionHeader
                        title="Industries We Serve"
                        align="center"
                        className="mb-2"
                    />
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1A1A1A] leading-tight mt-4">
                        Serving All Property Types <span className="text-[#1183C8]">Across Dubai</span>
                    </h2>
                </div>

                {/* Industries Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-12 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    {industries.map((industry) => (
                        <div key={industry.id} className="group flex flex-col items-center cursor-pointer">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] mb-6 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Industry Title */}
                            <h3 className="text-center text-[#1183C8] font-bold text-lg md:text-xl px-4 transition-colors duration-300">
                                {industry.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default IndustriesSection;
