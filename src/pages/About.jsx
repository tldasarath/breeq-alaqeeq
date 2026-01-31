import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Introduction from '../components/aboutPage/Introduction';
import MissionVision from '../components/aboutPage/MissionVision';
import CoreValues from '../components/aboutPage/CoreValues';
import WhyChooseUs from '../components/aboutPage/WhyChooseUs';
import FounderMessage from '../components/aboutPage/FounderMessage';

const About = () => {
    return (
        <div className="bg-[#FAF5F5] min-h-screen">
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
