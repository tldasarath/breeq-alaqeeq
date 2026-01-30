import React from 'react';
import Container from '../common/Container';

const CoreValues = () => {
    const values = [
        {
            title: "Quality First",
            desc: "We never compromise on materials, workmanship, or finishing standards."
        },
        {
            title: "Integrity & Transparency",
            desc: "Clear communication, honest pricing, and ethical business practices define our operations."
        },
        {
            title: "Safety & Compliance",
            desc: "We strictly follow UAE regulations, safety protocols, and industry best practices."
        },
        {
            title: "Reliability & Timeliness",
            desc: "We respect deadlines and deliver projects as committed."
        },
        {
            title: "Customer-Centric Approach",
            desc: "Every project is handled with personalized attention and accountability."
        }
    ];

    return (
        <section className="py-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(277deg, rgba(143,20,19,1.00) 0%,rgba(0,0,0,1.00) 100%)' }}>
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                    <div className="w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                            <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                            <p className="text-gray-200">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CoreValues;
