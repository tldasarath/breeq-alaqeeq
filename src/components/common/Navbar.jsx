import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE_CONFIG } from '../../utils/constants'
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
        { name: 'Projects', path: '/' }, // Mapping 'Projects' text to '/portfolio' route
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ]

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    }

    const socialIcons = [
        {
            name: 'Facebook',
            bg: 'bg-[#3b5998]',
            path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
        },
        {
            name: 'LinkedIn',
            bg: 'bg-[#0077b5]',
            path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 4a2 2 0 11-2 2 2 2 0 012-2z'
        },
        {
            name: 'Instagram',
            bg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
            path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z',
            gradient: true
        },
        {
            name: 'WhatsApp',
            bg: 'bg-[#25D366]',
            path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
        }
    ]

    return (
        <nav className={`bg-[#FAF5F5] fixed top-0 left-0 right-0 z-50 shadow-md font-sans transition-all duration-500 ease-in-out ${isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
            }`}>
            <div className="flex w-full h-auto">
                {/* 1. Logo Section - Scalable/Responsive width */}
                <div className="hidden lg:flex shrink-0 w-[20%] xl:w-[250px] border-r border-gray-200 items-center justify-center p-2 bg-[#FAF5F5]">
                    <Link to="/" className='w-full flex justify-center'>
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
                            {socialIcons.map((icon) => (
                                <a
                                    key={icon.name}
                                    href="#"
                                    className={`w-7 h-7 flex items-center justify-center rounded text-white hover:opacity-90 transition-opacity ${icon.gradient ? icon.bg : icon.bg}`}
                                    title={icon.name}
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d={icon.path} />
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
                            {socialIcons.map((icon) => (
                                <a
                                    key={icon.name}
                                    href="#"
                                    className={`w-8 h-8 flex items-center justify-center rounded text-white ${icon.gradient ? icon.bg : icon.bg}`}
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d={icon.path} />
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