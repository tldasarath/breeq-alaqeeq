import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords = "Technical Services, Maintenance, Dubai, Construction, Painting, Cleaning, HVAC",
    canonicalUrl
}) => {
    return (
        <Helmet>
            <title>{title} | Breeq Alaqeeq Technical Works</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            <meta property="og:title" content={`${title} | Breeq Alaqeeq Technical Works`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} | Breeq Alaqeeq Technical Works`} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
