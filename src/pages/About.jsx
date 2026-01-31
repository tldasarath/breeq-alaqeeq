import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Introduction from '../components/aboutPage/Introduction';
import MissionVision from '../components/aboutPage/MissionVision';
import CoreValues from '../components/aboutPage/CoreValues';
import WhyChooseUs from '../components/aboutPage/WhyChooseUs';
import FounderMessage from '../components/aboutPage/FounderMessage';

import SEO from '../components/common/SEO';

const About = () => {
    return (
        <div className="bg-[#FAF5F5] min-h-screen">
            <SEO
                title="Best Technical Services Company in Dubai | Technical Services LLC UAE "
                description="We are a leading technical services company in Dubai, UAE, providing professional maintenance, repair & fit-out solutions. Trusted technical services LLC in Dubai."
                keywords="technical services dubai,technical services companies in dubai,technical company in dubai,technical services llc dubai, technical services in uae, technical services companies in uae, best technical services company in dubai, technical services in dubai "
                canonicalUrl="/about"
            />
            <PageHeader
                title="About Us"
            />
            <Introduction />
            <MissionVision />
            <CoreValues />
            <WhyChooseUs />
            <FounderMessage />
        </div>
    );
};

export default About;
