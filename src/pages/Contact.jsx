import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactContent from '../components/ContactPage/ContactContent';

const Contact = () => {
    return (
        <div className=" min-h-screen">
            <PageHeader
                title="Contact Us"
            />
            <ContactContent />
        </div>
    );
}

export default Contact;
