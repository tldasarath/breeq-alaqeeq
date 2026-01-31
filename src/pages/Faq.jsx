import React from 'react';
import PageHeader from '../components/common/PageHeader';
import FaqContent from '../components/faqPage/FaqContent';

const Faq = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Frequently Asked Questions"
                />
            <FaqContent />
        </div>
    );
};

export default Faq;
