import React from 'react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG, SOCIAL_MEDIA_DATA } from '../../utils/constants'
import logo from '../../assets/logos/breeq-alaqeeq-technical-works.svg'
import footerVector from '../../assets/images/footer/footer-vector.svg'
import callVector from '../../assets/images/footer/call-vector.svg'
import emailVector from '../../assets/images/footer/email-vector.svg'
import Container from './Container'

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-black to-[#8F1413] text-white pt-16 pb-6 overflow-hidden font-sans">
            <Container>

                {/* 1. Top White Banner (Refined to match reference image) */}
                <div className="relative max-w-[1200px] mx-auto bg-white rounded-2xl mb-16 flex flex-col md:flex-row items-stretch shadow-2xl overflow-hidden min-h-[140px] md:min-h-[160px]">
                    {/* Logo Section */}
                    <div className="w-full md:w-[220px] lg:w-[280px] flex justify-center items-center py-6 md:py-0 px-6 md:px-8 relative z-10 shrink-0">
                        <img
                            src={logo}
                            alt={SITE_CONFIG.name}
                            className="h-20 md:h-16 lg:h-24 w-auto object-contain"
                        />
                    </div>

                    {/* Divider (Desktop only) */}
                    <div className="hidden md:block w-[1px] bg-[#4C4747] relative z-10 self-stretch my-6"></div>

                    {/* Description Section */}
                    <div className="flex-1 flex items-center justify-center md:justify-start px-4 md:px-10 lg:px-3 py-8 md:py-3 relative z-10">
                        <p className="text-gray-800 text-sm lg:text-[18px] leading-normal md:leading-5 lg:leading-relaxed font-normal max-w-[350px] lg:max-w-[491px] text-center md:text-left">
                            We are a trusted and dependable technical service provider in Dubai with a focus on precision, safety, and trust. Our experienced team focuses on quality execution, transparent processes, and timely to ensure complete customer satisfaction from start to final handover.
                        </p>
                    </div>

                    {/* Skyline Graphic (Right end) */}
                    <div className="absolute top-0 right-0 h-full w-[40%] md:w-[35%] lg:w-[30%] pointer-events-none select-none overflow-hidden hidden md:block">
                        <img
                            src={footerVector}
                            alt="Dubai Skyline"
                            className="w-full h-full object-contain object-right-bottom scale-[1.1] origin-bottom-right"
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(11%) sepia(37%) saturate(6011%) hue-rotate(349deg) brightness(91%) contrast(97%)' // Sets color to #72100F
                            }}
                        />
                    </div>

                    {/* Mobile Skyline Overlay (Subtle) */}
                    <div className="md:hidden absolute bottom-0 right-0 w-full h-1/3 opacity-5 pointer-events-none grayscale">
                        <img src={footerVector} alt="" className="w-full h-full object-contain object-right-bottom" />
                    </div>
                </div>

                {/* 2. Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">

                    {/* Column 1: Quick Links (Span 5) */}
                    <div className="lg:col-span-5">
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link></li>
                                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                                <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Get In Touch (Span 4) */}
                    <div className="lg:col-span-4">
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Get In Touch</h4>
                        <div className="space-y-4">
                            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center group">
                                <span className=" p-1.5 rounded mr-3 transition-colors">
                                    <img src={callVector} alt="Call" className="w-4 h-4" />
                                </span>
                                <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">{SITE_CONFIG.phone}</span>
                            </a>
                            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="flex items-center group">
                                <span className=" p-1.5 rounded mr-3  transition-colors">
                                    <img src={emailVector} alt="Email" className="w-4 h-4" />
                                </span>
                                <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">{SITE_CONFIG.contactEmail}</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Map (Span 3) */}
                    <div className="lg:col-span-3">
                        {/* Map Placeholder or IFrame */}
                        <div className="bg-gray-200 rounded-lg h-32 w-full flex items-center justify-center overflow-hidden relative group">
                            {/* Simple Map representation or interactive map */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231220.32766327896!2d55.11666620580327!3d25.076280447833037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1709121221321!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 group-hover:opacity-100 transition-opacity"
                            ></iframe>
                            <div className="absolute pointer-events-none font-bold text-black bg-white/80 px-3 py-1 rounded shadow-sm hidden">Map</div>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
                        &copy; 2026 {SITE_CONFIG.name}. Published by Next Media. All Rights Reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex rounded-lg px-2 py-1 space-x-1">
                        {SOCIAL_MEDIA_DATA.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center text-white rounded-md transition-all duration-300 sm:w-10 sm:h-10"
                                style={{ backgroundColor: social.bgColor }}
                                onMouseEnter={(e) => e.currentTarget.style.background = social.hoverBg}
                                onMouseLeave={(e) => e.currentTarget.style.background = social.bgColor}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                                    <path d={social.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer