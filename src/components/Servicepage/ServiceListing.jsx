import React from 'react';
import Container from '../common/Container';
import PrimaryButton from '../common/Buttons/PrimaryButton';
import { serviceListingData } from '../../utils/serviceListingData';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

// Import Images
import paintingImg from '../../assets/images/services/painting_service.png';
import hvacImg from '../../assets/images/services/hvac_service.png';
import cleaningImg from '../../assets/images/services/cleaning_tiling.png';
import carpentryImg from '../../assets/images/services/carpentry_work.png';

const ServiceListing = () => {
    // Map service IDs to images
    const imageMap = {
        'building-cleaning': "/assets/images/services/building-cleaning.webp",
        'painting-works': "/assets/images/services/painting-works.webp",
        'plastering-works': "/assets/images/services/plastering-works.webp",
        'hvac-services': "/assets/images/services/hvac-installation&maintenance.webp",
        'mep-services': "/assets/images/services/electromechanical-works.webp",
        'wallpaper-fixing': "/assets/images/services/wallpaper-fixing.webp",
        'carpentry-flooring': "/assets/images/services/carpeting-woodflooring.webp",
        'engraving-ornamentation': "/assets/images/services/engraving-ornamentation.webp",
        'tiling-works': "/assets/images/services/floor-wall-filling.webp",
        'plumbing-sanitary': "/assets/images/services/plumbing-works.webp",
        'false-ceiling': "/assets/images/services/false-ceiling.webp"
    };

    return (
        <section className="py-10 md:py-20 bg-[#FAF5F5]">

            <Container className="space-y-32 ">
                {serviceListingData.map((service, index) => {
                    const isEven = index % 2 === 0;
                    const ServiceImage = imageMap[service.id] || cleaningImg;

                    return (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center `}
                        >
                            {/* Content Section */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-3">
                                    {/* <span className="text-[#800000] font-bold tracking-wider uppercase text-sm">
                                        Professional Service
                                    </span> */}
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                        {service.title}
                                    </h2>
                                    <h3 className="text-lg md:text-xl text-gray-700 font-medium">
                                        {service.subtitle}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4 pt-2">
                                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                        <ArrowRight className="w-5 h-5 text-[#800000]" />
                                        <span>Key Services Include:</span>
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Why Choose Us (Conditional) */}
                                {service.whyChooseUs && (
                                    <div className="bg-[#FFF9F5] p-6 rounded-lg border border-gray-100 mt-4">
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            {/* <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> */}
                                            Why Choose Us?
                                        </h4>
                                        <ul className="space-y-2">
                                            {service.whyChooseUs.map((reason, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-gray-700">
                                                    <div className="w-1.5 h-1.5 bg-[#800000] rounded-full" />
                                                    {reason}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* CTAs */}
                                {/* <div className="flex flex-wrap gap-4 pt-6">
                                {service.cta.map((ctaText, idx) => (
                                    idx === 0 ? (
                                        <PrimaryButton
                                            key={idx}
                                            text={ctaText}
                                            onClick={() => window.location.href = '/contact'}
                                            icon="arrow"
                                        />
                                    ) : (
                                        <a
                                            key={idx}
                                            href="/contact"
                                            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded-sm"
                                        >
                                            {ctaText}
                                        </a>
                                    )
                                ))}
                            </div> */}
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    {/* Decorative Borders/Backdrops */}
                                    <div className={`absolute -inset-4 bg-[#1183C8]/20 rounded-lg transform ${isEven ? 'rotate-2' : '-rotate-2'} transition-transform duration-500 group-hover:rotate-0`} />
                                    <div className={`absolute -inset-4 bg-gray-100 rounded-lg transform ${isEven ? '-rotate-2' : 'rotate-2'} -z-10 transition-transform duration-500 group-hover:rotate-0`} />

                                    {/* Main Image */}
                                    <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3]">
                                        <img
                                            src={ServiceImage}
                                            alt={service.title}
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                            <span className="text-white font-bold text-lg border-l-4 border-[#800000] pl-3">
                                                {service.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Container>
        </section>

    );
};

export default ServiceListing;
