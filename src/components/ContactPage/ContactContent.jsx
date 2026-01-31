import React, { useState } from 'react';
import Container from '../common/Container';
import { SITE_CONFIG } from '../../utils/constants';

const ContactContent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone Number',
            value: SITE_CONFIG.phone,
            link: `tel:${SITE_CONFIG.phone}`,
            bg: 'bg-[#800000]'
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email Address',
            value: SITE_CONFIG.contactEmail,
            link: `mailto:${SITE_CONFIG.contactEmail}`,
            bg: 'bg-[#1183C8]'
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Our Location',
            value: 'Dubai, United Arab Emirates',
            link: '#',
            bg: 'bg-[#800000]' // Using primary red again for balance
        }
    ];

    return (
        <section className="py-10 md:py-20 bg-[#FAF5F5]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Cards */}
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.link}
                            className="group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-16 h-16 ${info.bg} rounded-full flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110`}>
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                            <p className="text-gray-600 font-medium text-center">{info.value}</p>
                        </a>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Form */}
                    <div className=" rounded-2xl p-0">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                            <p className="text-gray-600">
                                Have a specific project in mind or need more information? Fill out the form below and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 focus:outline-none transition-all placeholder-gray-400"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 focus:outline-none transition-all placeholder-gray-400"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 focus:outline-none transition-all placeholder-gray-400"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 focus:outline-none transition-all placeholder-gray-400 resize-none"
                                    placeholder="Tell us about your project requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto px-10 py-4 bg-[#800000] text-white font-bold rounded-lg hover:bg-[#600000] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map Section */}
                    <div className="h-full min-h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                        {/* Map placeholder - using a generic Dubai embed for now */}
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231264.83689408013!2d54.91898730999516!3d25.074363236357425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1706612345678!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactContent;
