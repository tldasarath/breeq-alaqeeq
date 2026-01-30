import React from 'react';
import Container from './Container';

const PageHeader = ({ title, description, image, children, className = '' }) => {
    return (
        <div className={`relative py-40 bg-gray-900 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#800000]/30 to-black/60 z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('${image || "/assets/images/banner/inner-banner.webp"}')` }}
            />
            <Container className="relative z-20 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                    {title}
                </h1>

                {children}
            </Container>
        </div>
    );
};

export default PageHeader;
