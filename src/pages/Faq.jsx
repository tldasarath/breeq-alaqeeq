import React from 'react';
import PageHeader from '../components/common/PageHeader';
import FaqContent from '../components/faqPage/FaqContent';

import SEO from '../components/common/SEO';

const Faq = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="FAQ"
                description="Find answers to common questions about our technical works, maintenance services, pricing, and coverage areas in Dubai."
                keywords=''
                canonicalUrl="/faq"
            />
            <PageHeader
                title="Frequently Asked Questions"
            />
            <FaqContent />
        </div>
    );
};

export default Faq;
