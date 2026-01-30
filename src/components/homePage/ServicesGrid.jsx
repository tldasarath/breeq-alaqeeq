import React from 'react';
import SecondaryButton from '../common/Buttons/SecodaryButton';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

const services = [
    { id: 1, title: 'Building Cleaning Services', image: '/assets/images/services/building-cleaning.webp' },
    { id: 2, title: 'HVAC Installation & Maintenance', image: '/assets/images/services/hvac-installation&maintenance.webp' },
    { id: 3, title: 'Painting Works', image: '/assets/images/services/painting-works.webp' }, // Reduced width
    { id: 4, title: 'Electromechanical (MEP) Works', image: '/assets/images/services/electromechanical-works.webp' },
    { id: 5, title: 'Plastering Works', image: '/assets/images/services/plastering-works.webp' }, // Center image reduced
    { id: 6, title: 'Plumbing & Sanitary Installation', image: '/assets/images/services/plumbing-works.webp' },
    { id: 7, title: 'Carpentry & Wood Flooring', image: '/assets/images/services/carpeting-woodflooring.webp' },
    { id: 8, title: 'Floor & Wall Tiling', image: '/assets/images/services/floor-wall-filling.webp' }, // Takes width of 2 images
    { id: 9, title: 'False Ceiling & Light Partitions', image: '/assets/images/services/false-ceiling.webp' },
    { id: 10, title: 'Engraving & Ornamentation Works', image: '/assets/images/services/engraving-ornamentation.webp' },
    { id: 11, title: 'Wallpaper Fixing Works', image: '/assets/images/services/wallpaper-fixing.webp' },
];

const getGridClass = (index) => {
    // Row 1: 5 - 5 - 2 (Total 12)
    if (index === 0) return 'md:col-span-4'; // Increased width
    if (index === 1) return 'md:col-span-5'; // Increased width (same as first)
    if (index === 2) return 'md:col-span-3'; // Reduced width

    // Row 2: 5 - 2 - 5 (Total 12)
    if (index === 3) return 'md:col-span-5'; // Increased width
    if (index === 4) return 'md:col-span-3'; // Center image reduced
    if (index === 5) return 'md:col-span-4'; // Increased width

    // Row 3: 4 - 8 (Total 12)
    // "i need only 2 image second image should take width for two images"
    if (index === 6) return 'md:col-span-4'; // Normal/Smaller
    if (index === 7) return 'md:col-span-8'; // Second image takes width for two (Large)

    // Row 4: 4 - 4 - 4 (Total 12)
    // "fourth row i need to place the three images same width"
    if (index === 8) return 'md:col-span-4';
    if (index === 9) return 'md:col-span-4';
    if (index === 10) return 'md:col-span-4';

    return 'md:col-span-4'; // Default fallback
};

const ServicesGrid = () => {
    return (
        <section
            className="md:py-20 py-10"
            style={{
                backgroundImage: 'linear-gradient(277deg, rgba(143,20,19,1.00) 0%,rgba(0,0,0,1.00) 100%)',
                backgroundPosition: 'center center'
            }}
        >
            <div className="">
                <Container>
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <SectionHeader title="Our Services" color='red' />
                        </div>
                        <h2 className="text-4xl md:text-[2.5rem] font-bold">
                            <span className="text-white">Our </span>
                            <span className="text-[#1183C8]">Services</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg border-2 border-[#8F1413] ${getGridClass(index)}`}
                            >
                                {/* Image with zoom effect */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Hover Gradient Overlay */}
                                <div
                                    className="absolute inset-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(217,217,217,0.00) 0%, rgba(240,53,53,0.60) 100%)'
                                    }}
                                ></div>

                                {/* Content Container */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-14">
                                        <h3 className="text-white text-xl font-semibold leading-snug">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Button container - slides up and fades in */}
                                    <div className="absolute bottom-6 left-6 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                        <SecondaryButton />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default ServicesGrid;
