import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { faqData } from '../../utils/faqData';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-16 md:py-24 bg-[#FAF5F5]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Side: Header Content */}
                    <div className="max-w-xl">
                        <SectionHeader
                            title="FAQ"
                            className="mb-4"
                        />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                            Frequently<br />
                            Asked <span className="text-[#1183C8]">Questions</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                            BREEQ ALAQEEQ TECHNICAL WORKS is committed to providing high-quality technical solutions. Here are some of the most common questions we receive from our clients in Dubai.
                        </p>
                    </div>

                    {/* Right Side: Accordion Grid */}
                    <div className="w-full lg:max-w-[616px] space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={item.id}
                                className="bg-[#FBF9F9] rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between px-5 md:px-6 h-[53px] text-left focus:outline-none group"
                                >
                                    <span className={`text-[#1A1A1A] font-medium text-sm md:text-base pr-4 transition-colors duration-300 ${openIndex === index ? 'text-[#1183C8]' : 'group-hover:text-[#1183C8]'}`}>
                                        {item.question}
                                    </span>

                                    {/* Circular Icon Button */}
                                    <div className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#1183C8] rotate-180' : 'bg-[#8F1413]'}`}>
                                        {openIndex === index ? (
                                            <Minus className="w-4 h-4 text-white" strokeWidth={3} />
                                        ) : (
                                            <Plus className="w-4 h-4 text-white" strokeWidth={3} />
                                        )}
                                    </div>
                                </button>

                                {/* Answer Content Wrapper */}
                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 md:px-6 pb-5 text-gray-500 text-sm md:text-sm leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default FAQSection;
