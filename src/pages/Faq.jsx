import React from 'react';
import PageHeader from '../components/common/PageHeader';
import FaqContent from '../components/faqPage/FaqContent';

import SEO from '../components/common/SEO';

const Faq = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Technical Services in Dubai | Best Technical Services Company in UAE – FAQs"
                description=" Find answers about technical services in Dubai, technical services companies in UAE, LLC setup, maintenance, HVAC, and building solutions from a trusted technical company in Dubai."
                keywords='technical services dubai,technical services companies in dubai,technical company in dubai,technical services llc dubai, technical services in uae, technical services companies in uae, best technical services company in dubai,  technical services in dubai
'
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
