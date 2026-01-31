import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactContent from '../components/ContactPage/ContactContent';

import SEO from '../components/common/SEO';

const Contact = () => {
    return (
        <div className=" min-h-screen">
            <SEO
                title="Contact Us | Breeq Alaqeeq | Technical Services Company in Dubai "
                description="Expert HVAC, building cleaning, plastering & maintenance services in Dubai, UAE. Contact us today for reliable, professional technical solutions. 
"
                keywords="technical services in dubai,technical services companies in dubai,technical company in dubai,technical services llc dubai, technical services in uae, technical services companies in uae, best technical services company in dubai, building cleaning services, hvac service, plastering in dubai,building maintenance dubai, technical company in dubai "
                canonicalUrl="/contact"
            />
            <PageHeader
                title="Contact Us"
            />
            <ContactContent />
        </div>
    );
}

export default Contact;
