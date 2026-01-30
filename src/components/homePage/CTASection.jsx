import React from 'react';
import Container from '../common/Container';
import PrimaryButton from '../common/Buttons/PrimaryButton';

const CTASection = () => {
    return (
        <section className="py-16 md:py-24 bg-[#FAF5F5] overflow-hidden">
            <Container>
                <div
                    className="relative w-full max-w-[1120px] mx-auto min-h-[209px] rounded-[18px] p-8 md:p-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-black to-[#8F1414] shadow-2xl transition-all duration-1000 ease-out opacity-100 translate-y-0 scale-100"
                >
                    {/* Content Section */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                            Looking for Reliable Technical<br className="hidden lg:block" /> Services in Dubai?
                        </h2>
                        <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-[650px] font-normal leading-relaxed">
                            Get in touch with BREEQ ALAQEEQ TECHNICAL WORKS for professional, affordable, and timely technical solutions.
                        </p>
                    </div>

                    {/* Button Section */}
                    <div className="flex-shrink-0">
                        <PrimaryButton
                            text="Call Now"
                            className="transform transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                        />
                    </div>


                </div>
            </Container>
        </section>
    );
};

export default CTASection;
