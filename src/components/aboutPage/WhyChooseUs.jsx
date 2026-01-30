import React from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

const WhyChooseUs = () => {
    const reasons = [
        { title: "Dubai-Based & Market-Focused", desc: "Deep understanding of UAE construction standards and client expectations." },
        { title: "Skilled & Experienced Team", desc: "Qualified technicians and supervisors for every service." },
        { title: "Comprehensive Service Offering", desc: "One reliable partner for multiple technical needs." },
        { title: "Quality Assurance", desc: "Strict quality checks at every project stage." },
        { title: "Timely Project Delivery", desc: "Commitment to schedules and deadlines." },
        { title: "Transparent Pricing", desc: "Clear quotations with no hidden costs." },
        { title: "Customer Satisfaction Driven", desc: "Long-term relationships built on trust and performance." }
    ];

    return (
        <section className="py-20 md:py-24">
            <Container>
                <div className="text-center mb-16">
                    <SectionHeader title="Why Choose Us" align="center" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Excellence You Can <span className="text-[#800000]">Trust</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-200 hover:border-[#1183C8] transition-all group">
                            <div className="mb-4">
                                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-[#1183C8]/10 transition-colors">
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-[#1183C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1183C8] transition-colors">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
