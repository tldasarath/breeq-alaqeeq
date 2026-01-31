import React from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

const Introduction = () => {
    return (
        <section className="py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/images/about/about.webp"
                                alt="Technical Works Dubai"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <div className="text-white text-xl font-bold">Excellence in Execution</div>
                                <div className="text-gray-200">Across Residential, Commercial & Industrial Sectors</div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <SectionHeader title="About BREEQ ALAQEEQ" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Delivering High-Quality <span className="text-[#800000]">Technical Solutions</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                            <p>
                                <strong className="text-gray-900">BREEQ ALAQEEQ TECHNICAL WORKS</strong> is a Dubai-based technical services company delivering high-quality construction support, maintenance, and finishing solutions across residential, commercial, and industrial properties in the UAE.
                            </p>
                            <p>
                                We specialize in building cleaning, painting, and plastering works, supported by a comprehensive range of MEP, interior fit-out, and specialized technical services. Our team brings together skilled technicians, experienced supervisors, and a strong commitment to quality, safety, and timely delivery.
                            </p>
                            <p>
                                Operating in a fast-moving and quality-driven market like Dubai, we understand the importance of precision, compliance, and reliability. Whether it is a villa renovation, office fit-out, retail space upgrade, or ongoing maintenance contract, BREEQ ALAQEEQ TECHNICAL WORKS approaches every project with professionalism and accountability.
                            </p>
                            <p className="font-medium text-[#1183C8]">
                                Our goal is simple: to deliver dependable technical solutions that add long-term value to our clients’ properties.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Introduction;
