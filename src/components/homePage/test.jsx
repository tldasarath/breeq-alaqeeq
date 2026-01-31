import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';
import { row1Cards, row2Cards } from '../../utils/whyChooseData';

const WhyChooseUs = () => {
    const [expandedRow1, setExpandedRow1] = useState(0);
    const [expandedRow2, setExpandedRow2] = useState(2);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
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

    const Card = ({ card, isExpanded, onHover, isRow1 }) => {
        return (
            <div
                onMouseEnter={onHover}
                className={`relative h-[300px] md:h-[320px] lg:h-[300px] rounded-[16px] overflow-hidden cursor-pointer flex shadow-2xl group`}
                style={{
                    flex: isExpanded ? (window.innerWidth >= 768 ? 2.8 : 2.5) : 1,
                    transition: 'flex 1.5s cubic-bezier(0.25, 1, 0.5, 1), background 1.5s ease',
                    willChange: 'flex',
                    background: 'linear-gradient(277deg, rgba(143,20,19,1.00) 0%, rgba(0,0,0,1.00) 100%)',
                    backgroundPosition: 'center center'
                }}
            >
                {/* Content Container */}
                <div className={`flex w-full h-full p-6 md:p-8 lg:p-10 relative z-10 
                    ${isRow1 ? 'flex-row' : 'flex-row-reverse'}
                `}>

                    {/* Number - Always at the top, stays in its corner */}
                    <div className={`text-4xl md:text-5xl font-bold transition-all duration-[1500ms] absolute top-6 md:top-8 lg:top-10
                        ${isExpanded ? 'text-[#F03535] opacity-100 scale-110' : 'text-[#F03535] opacity-60'}
                        ${isRow1 ? 'right-6 md:right-8 lg:right-10' : 'left-6 md:left-8 lg:left-10'}
                    `}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
                    >
                        {card.id}
                    </div>

                    {/* Text Section - Positioned at the bottom specifically when NOT expanded */}
                    <div className={`flex flex-col h-full justify-end transition-all duration-[1500ms] w-full
                        ${isExpanded ? (isRow1 ? 'md:pr-[220px]' : 'md:pl-[220px]') : ''}
                    `}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
                    >
                        <div className={`relative z-20 pb-2 md:pb-0 transition-all duration-[1500ms]`}>
                            <h3 className={`font-bold text-white mb-2 md:mb-4 lg:mb-6 leading-tight transition-all duration-[1500ms]
                                ${isExpanded ? 'text-xl md:text-2xl lg:text-3xl' : 'text-lg md:text-[22px]'}
                            `}
                                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
                            >
                                {card.title}
                            </h3>

                            <p className={`text-white/80 leading-relaxed transition-all duration-[1500ms] overflow-hidden
                                ${isExpanded ? 'text-sm md:text-base opacity-100 max-h-[160px]' : 'text-[13px] md:text-sm opacity-100 line-clamp-2 md:line-clamp-4 max-h-[60px] md:max-h-[100px]'}
                            `}
                                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
                            >
                                {card.description}
                            </p>
                        </div>
                    </div>

                    {/* Image Section - Fixed size 200x150, revealed on expansion only */}
                    {card.image && (
                        <div className={`hidden md:block absolute transition-all duration-[1500ms] overflow-hidden rounded-[16px] shadow-2xl
                            ${isExpanded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}
                            ${isRow1 ? 'right-6 md:right-8 lg:right-10 bottom-6 md:bottom-8 lg:bottom-10' : 'left-6 md:left-8 lg:left-10 bottom-6 md:bottom-8 lg:bottom-10'}
                            w-[180px] lg:w-[200px] h-[135px] lg:h-[150px]
                        `}
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    )}
                </div>

                {/* Mobile overlay refinement */}
                {!isExpanded && (
                    <div className="md:hidden absolute inset-0 bg-black/10 pointer-events-none"></div>
                )}
            </div>
        );
    };

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden">
            <Container>
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-[#1183C8]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L14.4 9.6H22L15.8 14.2L18.2 21.8L12 17.2L5.8 21.8L8.2 14.2L2 9.6H9.6L12 2Z" />
                        </svg>
                        <span className="text-[#1183C8] font-bold tracking-widest text-sm md:text-base uppercase">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Why Clients Choose<br />
                        <span className="text-[#1183C8]">BREEQ ALAQEEQ</span> TECHNICAL WORKS
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="w-full  mx-auto">
                    {/* Desktop View: Stretching Logic */}
                    <div className="hidden lg:flex lg:flex-col lg:gap-5 xl:gap-[22px]">
                        {/* Row 1 - Slides from Right */}
                        <div className={`flex gap-1 w-full transition-all duration-1000 ease-out transform
                            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                        `}>
                            {row1Cards.map((card, idx) => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    isExpanded={expandedRow1 === idx}
                                    onHover={() => setExpandedRow1(idx)}
                                    isRow1={true}
                                />
                            ))}
                        </div>

                        {/* Row 2 - Slides from Left */}
                        <div className={`flex gap-1 w-full transition-all duration-1000 ease-out transform
                            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'}
                        `}>
                            {row2Cards.map((card, idx) => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    isExpanded={expandedRow2 === idx}
                                    onHover={() => setExpandedRow2(idx)}
                                    isRow1={false}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile & Tablet View: Static Cards */}
                    <div className={`lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        {[...row1Cards, ...row2Cards].map((card) => (
                            <div
                                key={card.id}
                                className="rounded-[16px] p-6 md:p-8 shadow-xl relative overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                                style={{
                                    background: 'linear-gradient(277deg, rgba(143,20,19,1.00) 0%, rgba(0,0,0,1.00) 100%)',
                                    backgroundPosition: 'center center'
                                }}
                            >
                                {/* Header Section */}
                                <div className="flex justify-between items-center mb-6">
                                    <div className="text-5xl md:text-6xl font-bold text-[#8F1413] opacity-60 leading-none">
                                        {card.id}
                                    </div>
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg border border-white/10 shrink-0">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 flex flex-col justify-end">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
