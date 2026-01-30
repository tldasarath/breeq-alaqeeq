import React from 'react';
import Container from '../common/Container';

const MissionVision = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mission Card */}
                    <div className="group relative rounded-3xl overflow-hidden min-h-[500px] shadow-xl">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
                        ></div>
                        {/* Gradient Overlay - Red Tint */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000] via-[#800000]/80 to-transparent opacity-90 transition-opacity duration-300"></div>

                        {/* Decorative Icon Background */}
                        <div className="absolute top-8 right-8 text-white/10 transform rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white text-[#800000] flex items-center justify-center shadow-lg">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white tracking-wide">Our Mission</h3>
                                </div>
                                <div className="h-1 w-20 bg-white/40 mb-6 rounded-full group-hover:w-full transition-all duration-700"></div>
                                <p className="text-white/90 text-lg leading-relaxed font-medium">
                                    To provide reliable, cost-effective, and high-quality technical services that meet Dubai’s construction standards while exceeding client expectations through professionalism, transparency, and skilled workmanship.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="group relative rounded-3xl overflow-hidden min-h-[500px] shadow-xl">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
                        ></div>
                        {/* Gradient Overlay - Blue Tint */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e4e75] via-[#1183C8]/80 to-transparent opacity-90 transition-opacity duration-300"></div>

                        {/* Decorative Icon Background */}
                        <div className="absolute top-8 right-8 text-white/10 transform -rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white text-[#1183C8] flex items-center justify-center shadow-lg">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white tracking-wide">Our Vision</h3>
                                </div>
                                <div className="h-1 w-20 bg-white/40 mb-6 rounded-full group-hover:w-full transition-all duration-700"></div>
                                <p className="text-white/90 text-lg leading-relaxed font-medium">
                                    To become a trusted and recognized technical services partner in the UAE, known for quality execution, ethical practices, and long-term client relationships across residential, commercial, and industrial sectors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MissionVision;
