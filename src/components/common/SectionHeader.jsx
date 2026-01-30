import React from 'react';
import iconSvg from '../../assets/images/elements/Subtract.svg';
import iconRedSvg from '../../assets/images/elements/Subtract-red.svg';

const SectionHeader = ({ title, align = 'left', className = '', color = 'blue' }) => {
    const alignmentClasses = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end'
    };

    return (
        <div className={`flex ${alignmentClasses[align]} ${className}`}>
            <div className="inline-flex flex-col items-start gap-2">             
                <div className="flex items-center gap-3">
                    {/* Decorative Icon */}
                    <img
                        src={color === 'blue' ? iconSvg : iconRedSvg}
                        alt=""
                        className="w-5 h-5 md:w-6 md:h-6"
                        aria-hidden="true"
                    />

                    {/* Title Text */}
                    <h2 className="text-[#1183C8] font-inter font-semibold text-base md:text-base lg:text-lg uppercase tracking-wide leading-tight">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;
