import React, { useEffect, useRef, useState } from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import cleaningVideo from '../../assets/videos/Professional_Office_Cleaning.mp4';
import bgImage from '../../assets/images/about/logo bg.webp';

const AboutUsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Set visibility based on whether element is intersecting
                // This will trigger animation both when entering AND reset when leaving
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2,
                // Optional: Add root margin for earlier/later trigger
                // rootMargin: '0px 0px -100px 0px'
            }
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
        <section
            ref={sectionRef}
            className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className="absolute inset-0 bg-[#FAF5F5]/20"></div>

            <Container>
                <div className="relative z-20">

                    <SectionHeader title="ABOUT US" className='mb-8 md:mb-12' />

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 relative z-10">
                        {/* Left Side - Red Card with Rating Badge */}
                        <div className="relative h-full flex">
                            <div className="bg-gradient-to-br from-[#8B1818] to-[#A52A2A] rounded-2xl text-white shadow-2xl relative min-h-[470px] lg:min-h-[474px] h-full w-full flex flex-col overflow-hidden transition-all duration-300">
                                {/* Content Area with padding */}
                                <div className="p-6 md:p-8 lg:p-10 pb-4 flex-1">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                                        Your <span className="text-[#1183C8]">Trusted Technical</span><br />
                                        Services Partner in Dubai
                                    </h3>

                                    <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
                                        BREEQ ALAQEEQ TECHNICAL WORKS is a Dubai-based technical services company delivering high-quality building maintenance, cleaning, painting, plastering, HVAC, MEP, and interior finishing services. We serve residential, commercial, and industrial clients with a strong focus on quality, safety, and timely execution.
                                    </p>
                                </div>

                                {/* Verified Clients Badge - Docked at bottom-right using flex flow to avoid overlap */}
                                <div
                                    className={`self-end bg-white rounded-t-2xl px-6 md:px-5 py-4 shadow-xl w-fit mr-6 md:mr-10 transition-all duration-700 ease-out z-20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                                        }`}
                                    style={{ transitionDelay: '300ms' }}
                                >
                                    <div className="text-center">
                                        <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0E407C] mb-1">
                                            26
                                        </div>
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-5 h-5 md:w-6 md:h-6 text-[#F03535] hover:scale-110 transition-all duration-300 ease-in-out"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <div className="text-sm md:text-base font-semibold text-[#1183C8]">
                                            Verified Clients
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Blue Card and Video Card Stacked */}
                        <div className="flex flex-col gap-4 h-full">
                            {/* Blue Card - Top */}
                            <div
                                className={`bg-gradient-to-br from-[#1E3A5F] to-[#2B5278] rounded-2xl px-6 md:pl-5 md:pr-4 py-4 md:pt-4 md:pb-6 lg:pb-8 text-white shadow-2xl relative overflow-hidden transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                                    }`}
                                style={{ transitionDelay: '400ms' }}
                            >
                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-3 md:mb-4 leading-tight">
                                        Dubai's Trusted Technical<br />
                                        Services Partner
                                    </h3>

                                    <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
                                        From final quality checks to smooth project handover, we ensure complete client satisfaction. From final quality checks to smooth project handover, we ensure client satisfaction.
                                    </p>
                                </div>
                            </div>

                            {/* Video Card - Bottom */}
                            <div
                                className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out flex-1 min-h-[250px] 

                                    opacity-100
                                    `}

                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={cleaningVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutUsSection;
