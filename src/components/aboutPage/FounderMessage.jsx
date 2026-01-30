import React from 'react';
import Container from '../common/Container';

const FounderMessage = () => {
    return (
        <section className="py-20 bg-[#111] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#800000] rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#1183C8] rounded-full blur-[100px] opacity-20"></div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-10 inline-block">
                        <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide text-white mb-2">Message from the Founder</h2>
                        <div className="w-24 h-1 bg-[#800000] mx-auto rounded-full"></div>
                    </div>

                    <div className="relative">
                        <svg className="w-16 h-16 text-[#800000] absolute -top-8 -left-4 md:-left-10 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.017C7.91243 16 7.017 16.8954 7.017 18V21H14.017ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19.017C17.9124 16 17.017 16.8954 17.017 18V21H24.017ZM10.017 13.003C11.6739 12.9922 13.017 11.6521 13.017 10V6C13.017 4.34315 11.6739 3 10.017 3H5.017C3.36014 3 2.017 4.34315 2.017 6V11C2.017 12.6569 3.36014 14 5.017 14V21H0.0169983V11C0.0169983 8.23858 2.25557 6 5.017 6H11.017V10C11.017 10.5523 10.5693 11 10.017 11H7.017C6.46471 11 6.017 11.4477 6.017 12C6.017 12.5523 6.46471 13 7.017 13H10.017ZM20.017 13.003L23.017 13C23.5693 13 24.017 12.5523 24.017 12C24.017 11.4477 23.5693 11 23.017 11H20.017C19.4647 11 19.017 10.5523 19.017 10V6H25.017C27.7784 6 30.017 8.23858 30.017 11V21H25.017V14C26.6739 14 28.017 12.6569 28.017 11V6C28.017 4.34315 26.6739 3 25.017 3H20.017C18.3601 3 17.017 4.34315 17.017 6V10C17.017 11.6521 18.3601 12.9922 20.017 13.003Z" />
                        </svg>

                        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify md:text-center italic">
                            <p>
                                "At <strong className="text-white font-semibold">BREEQ ALAQEEQ TECHNICAL WORKS</strong>, our foundation is built on trust, workmanship, and responsibility."
                            </p>
                            <p>
                                "Dubai is a city that demands excellence — in quality, speed, and compliance. From the beginning, our focus has been to create a technical services company that clients can rely on without hesitation. We believe that every wall painted, every system installed, and every space cleaned reflects our reputation."
                            </p>
                            <p>
                                "Our strength lies in our team — skilled professionals who take pride in their work and understand the importance of detail. We approach every project, regardless of size, with the same dedication and respect."
                            </p>
                            <p>
                                "As we continue to grow, our commitment remains unchanged: to deliver dependable services, build lasting relationships, and contribute positively to the UAE’s built environment."
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <h3 className="text-white font-bold text-lg tracking-wider">FOUNDER</h3>
                        <p className="text-[#1183C8] font-medium mt-1">Breeq Alaqeeq Technical Works</p>
                        <p className="text-gray-500 mt-4 text-sm font-medium tracking-widest uppercase">Thank you for trusting us</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FounderMessage;
