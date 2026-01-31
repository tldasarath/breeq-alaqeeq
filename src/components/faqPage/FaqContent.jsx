import React, { useState, useEffect } from 'react';
import { FAQ_DATA } from '../../utils/faqData';
import Container from '../common/Container';

const FaqItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-5 flex items-start justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-[#800000]' : 'text-gray-800 group-hover:text-[#800000]'}`}>
                    {item.question}
                </span>
                <span className={`ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${isOpen ? 'rotate-45 border-[#800000] bg-[#800000] text-white' : 'rotate-0 border-gray-300 text-gray-400 group-hover:border-[#800000] group-hover:text-[#800000]'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="text-gray-600 leading-relaxed text-base">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FaqContent = () => {
    const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);
    const [openItems, setOpenItems] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    // Handle accordion toggle
    const toggleItem = (categoryIndex, itemIndex) => {
        const key = `${categoryIndex}-${itemIndex}`;
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Scroll spy effect for active category
    useEffect(() => {
        const handleScroll = () => {
            const sections = FAQ_DATA.map(cat => document.getElementById(cat.category.replace(/\s+/g, '-').toLowerCase()));

            const scrollPosition = window.scrollY + 150; // Offset for header

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    const catName = section.getAttribute('data-category');
                    if (catName) setActiveCategory(catName);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToCategory = (category) => {
        const id = category.replace(/\s+/g, '-').toLowerCase();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
            setActiveCategory(category);
        }
    };

    // Filter data based on search
    const filteredData = FAQ_DATA.map(cat => ({
        ...cat,
        items: cat.items.filter(item =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(cat => cat.items.length > 0);

    return (
        <div className=" min-h-screen py-10 md:py-20 bg-[#FAF5F5]">
            {/* Search Bar Section - Moved here to be part of the content flow if needed, or can be passed as prop */}


            <Container>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation - Desktop */}
                    <aside className="hidden lg:block w-1/4 flex-shrink-0">
                        <div className="sticky top-32 space-y-1">
                            <h3 className="text-gray-900 font-bold text-xl mb-6 px-4">Categories</h3>
                            {FAQ_DATA.map((cat) => (
                                <button
                                    key={cat.category}
                                    onClick={() => scrollToCategory(cat.category)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeCategory === cat.category
                                        ? 'bg-[#800000] text-white shadow-md transform scale-105 origin-left'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {cat.category}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 w-full lg:w-3/4">
                        {filteredData.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 italic">No results found for "{searchTerm}"</h3>
                                <p className="text-gray-500 mt-2">Try searching for a different keyword or browse the categories.</p>
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {filteredData.map((cat, catIndex) => (
                                    <div
                                        key={cat.category}
                                        id={cat.category.replace(/\s+/g, '-').toLowerCase()}
                                        data-category={cat.category}
                                        className="scroll-mt-32"
                                    >
                                        <div className="mb-6 flex items-center gap-3">
                                            <div className="h-8 w-1 bg-[#800000] rounded-full"></div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{cat.category}</h2>
                                        </div>

                                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                                            {cat.items.map((item, itemIndex) => (
                                                <FaqItem
                                                    key={itemIndex}
                                                    item={item}
                                                    isOpen={openItems[`${catIndex}-${itemIndex}`]}
                                                    onClick={() => toggleItem(catIndex, itemIndex)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Container>

            {/* Contact CTA */}
            <section className="mt-20 py-16 bg-gray-50 border-t border-gray-200">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            We're here to help. If you couldn't find the answer you were looking for, feel free to reach out to our team directly.
                        </p>
                        <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-[#800000] rounded-lg hover:bg-[#600000] hover:shadow-lg hover:-translate-y-1">
                            Contact Support
                        </a>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default FaqContent;
