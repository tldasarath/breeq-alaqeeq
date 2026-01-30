import React from 'react';
import PageHeader from '../components/common/PageHeader';
import FaqContent from '../components/faqPage/FaqContent';

const Faq = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Frequently Asked Questions"
                description="Find answers to common questions about our services, processes, and policies. Can't find what you're looking for? Contact us directly."
            />
            <FaqContent />
        </div>
    );
};

export default Faq;
