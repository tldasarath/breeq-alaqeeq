import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const PrimaryButton = ({
    text = "Call Now",
    onClick,
    className = "",
    icon = "phone", // 'phone' | 'arrow' | 'none'
    animation = "none" // 'rotate' | 'slide' | 'none'
}) => {
    // Icon selection logic
    const IconComponent = icon === 'phone' ? Phone : icon === 'arrow' ? ArrowRight : null;

    // Animation class selection
    const getAnimationClass = () => {
        switch (animation) {
            case 'rotate':
                return 'transition-transform duration-500 group-hover:rotate-[360deg]';
            case 'slide':
                return 'transition-transform duration-300 group-hover:translate-x-1';
            default:
                return '';
        }
    };

    return (
        <button
            onClick={onClick}
            className={`group flex items-center bg-white h-12 md:h-14 min-w-[160px] md:min-w-[190px] p-1 rounded-sm shadow-md transition-all duration-300 hover:shadow-lg ${className}`}
        >
            {/* Icon Box */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8F1413] flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105">
                {IconComponent && (
                    <IconComponent
                        className={`w-5 h-5 md:w-6 md:h-6 text-white ${getAnimationClass()}`}
                        {...(icon === 'phone' ? { fill: 'currentColor' } : {})}
                    />
                )}
            </div>

            {/* Button Text */}
            <div className="flex-1 px-4 text-center">
                <span className="text-[#1A1A1A] text-sm md:text-base font-bold whitespace-nowrap">
                    {text}
                </span>
            </div>
        </button>
    );
};

export default PrimaryButton;
