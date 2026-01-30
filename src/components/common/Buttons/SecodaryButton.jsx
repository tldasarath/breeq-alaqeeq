import React from 'react';

const SecondaryButton = ({ text = "View Details", onClick, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`group/btn relative flex items-center border border-white h-14 min-w-[180px] p-1.5 overflow-hidden bg-transparent cursor-pointer ${className}`}
        >
            <div className="relative w-full h-full overflow-hidden">
                {/* --- LAYER 1: WIPE ANIMATION (Initial -> Hover) --- */}
                <div className="absolute inset-0 z-20 transition-opacity duration-0 delay-[700ms] group-hover/btn:opacity-0">

                    {/* Red Wipe Background */}
                    {/* Starts as a box, Expands to cover text */}
                    <div className="absolute left-0 top-0 bottom-0 bg-[#8F1413] w-[45px] z-20 transition-all duration-[700ms] ease-in-out group-hover/btn:w-full"></div>

                    {/* Arrow - Travels with the wipe */}
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1/2 -translate-y-1/2 left-[13px] z-30 transition-all duration-[700ms] ease-in-out group-hover/btn:left-[calc(100%-25px)]"
                    >
                        <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Text - Stationary, gets covered by Red Wipe */}
                    <div className="absolute inset-0 flex items-center justify-center pl-[45px] z-10">
                        <span className="text-white text-sm font-medium tracking-wide uppercase whitespace-nowrap px-4">
                            {text}
                        </span>
                    </div>
                </div>

                {/* --- LAYER 2: REST MOTION (Reset) --- */}
                {/* Appears after wipe finishes to reset the button state smoothly */}
                <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 delay-[700ms] group-hover/btn:opacity-100">

                    {/* Red Box - Slides in from left */}
                    <div className="absolute left-0 top-0 bottom-0 w-[45px] bg-[#8F1413] flex items-center justify-center transform -translate-x-full transition-transform duration-300 delay-[700ms] group-hover/btn:translate-x-0">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="white"
                                strokeWidth="2"
                                lineCap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* Text - Slides up from bottom */}
                    <div className="absolute inset-0 flex items-center justify-center pl-[45px]">
                        <span className="text-white text-sm font-medium tracking-wide uppercase whitespace-nowrap px-4 transform translate-y-full transition-transform duration-300 delay-[700ms] group-hover/btn:translate-y-0">
                            {text}
                        </span>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default SecondaryButton;
