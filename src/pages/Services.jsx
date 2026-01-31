import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ServiceListing from '../components/Servicepage/ServiceListing';
import Container from '../components/common/Container';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import SecondaryButton from '../components/common/Buttons/SecodaryButton';

import SEO from '../components/common/SEO';

const Services = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Technical Services in Dubai | Breeq Alaqeeq Technical Works "
                description="Leading technical services company in Dubai offering HVAC, cleaning & maintenance. Trusted technical services LLC Dubai for homes & businesses."
                keywords="technical services in dubai,technical services companies in dubai,technical company in dubai,technical services llc dubai, technical services in uae, technical services companies in uae, best technical services company in dubai, building cleaning services, hvac service, plastering in dubai"
                canonicalUrl="/services"
            />
            <PageHeader
                title="Our Professional Services"
                description="Comprehensive building maintenance and technical solutions in Dubai."
            />

            <ServiceListing />

            {/* Bottom CTA Block */}
            {/* <div className="bg-[#1A1A1A] py-16">
                <Container className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                        Contact BREEQ ALAQEEQ TECHNICAL WORKS today for a free consultation and quote.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                        <PrimaryButton text="Get a Free Quote" onClick={() => window.location.href = '/contact'} />
                        <SecondaryButton text="Explore Projects" onClick={() => window.location.href = '/portfolio'} />
                    </div>
                </Container>
            </div> */}
        </div>
    );
};

export default Services;
