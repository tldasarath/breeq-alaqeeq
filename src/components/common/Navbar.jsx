import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE_CONFIG, SOCIAL_MEDIA_DATA } from '../../utils/constants'
import logo from '../../assets/logos/breeq-alaqeeq-technical-works.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY

            // Show navbar when at the top of the page
            if (currentScrollY < 10) {
                setIsVisible(true)
            }
            // Hide when scrolling down, show when scrolling up
            else if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false)
                setIsOpen(false) // Close mobile menu when hiding
            } else {
                // Scrolling up
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY])

    // Nav Links (mapped to existing routes where possible)
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '#' }, // Mapping 'Projects' text to '/portfolio' route
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ]

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    }


    return (
        <nav className={`bg-[#FAF5F5] fixed top-0 left-0 right-0 z-50 shadow-md font-sans transition-all duration-500 ease-in-out ${isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
            }`}>
            <div className="flex w-full h-auto">
                {/* 1. Logo Section - Scalable/Responsive width */}
                <div className="hidden lg:flex shrink-0 w-[20%] xl:w-[250px] border-r border-gray-200 items-center justify-center p-2 bg-[#FAF5F5]">
                    <Link to="/" className='w-full flex justify-end'>
                        <img src={logo} alt={SITE_CONFIG.name} className="h-16 w-auto object-contain" />
                    </Link>
                </div>

                {/* Mobile Header (visible only on small screens) */}
                <div className="lg:hidden flex items-center justify-between w-full px-4 h-20">
                    <Link to="/">
                        <img src={logo} alt={SITE_CONFIG.name} className="h-12 w-auto" />
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-primary-600 focus:outline-none"
                    >
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* 2. Middle Section - Flex Column */}
                <div className="hidden lg:flex flex-col flex-grow">
                    {/* Top Bar: Contact + Social */}
                    <div className="h-12 border-b border-gray-200 flex items-center justify-between px-6 lg:px-8 bg-gray-50/50">
                        {/* Contact Info */}
                        <div className="flex items-center space-x-6 text-sm text-gray-600 font-medium">
                            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="flex items-center hover:text-primary-600 transition-colors">
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {SITE_CONFIG.contactEmail}
                            </a>
                            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center hover:text-primary-600 transition-colors">
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {SITE_CONFIG.phone}
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-2">
                            {SOCIAL_MEDIA_DATA.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 flex items-center justify-center rounded text-white transition-all duration-300"
                                    style={{ backgroundColor: social.bgColor }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = social.hoverBg}
                                    onMouseLeave={(e) => e.currentTarget.style.background = social.bgColor}
                                    title={social.name}
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Bar: Links */}
                    <div className="h-16 flex items-center justify-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[15px] font-semibold tracking-wide transition-colors duration-200 uppercase ${isActive(link.path)
                                    ? 'text-primary-700 decoration-2 underline-offset-8'
                                    : 'text-gray-600 hover:text-primary-600'
                                    }`}
                            >
                                <span className={isActive(link.path) ? "border-b-2 border-primary-600 pb-1" : ""}>
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 3. Right Section - Contact Button Area */}
                <div className="hidden lg:flex w-[200px] shrink-0 bg-[#800000] items-center justify-center shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.3)]">
                    <Link to="/contact" className="group">
                        <div className="flex items-center bg-white pl-2 pr-6 py-2">
                            <div className="bg-[#800000] p-2 mr-3 transition-transform group-hover:translate-x-1">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                            <span className="text-[#800000] font-bold text-sm uppercase tracking-wider">Contact Us</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden border-t border-gray-100 absolute top-20 left-0 w-full bg-white shadow-xl">
                    <div className="flex flex-col p-4 space-y-4">
                        {/* Mobile Contact Info */}
                        <div className="flex flex-col space-y-2 pb-4 border-b border-gray-100">
                            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {SITE_CONFIG.contactEmail}
                            </a>
                            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {SITE_CONFIG.phone}
                            </a>
                        </div>

                        {/* Mobile Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-2 py-2 text-base font-medium rounded-md ${isActive(link.path)
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Socials */}
                        <div className="flex items-center space-x-3 pt-2">
                            {SOCIAL_MEDIA_DATA.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center rounded text-white"
                                    style={{ backgroundColor: social.bgColor }}
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar