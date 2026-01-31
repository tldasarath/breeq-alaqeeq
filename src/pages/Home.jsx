import HeroCarousel from '../components/homePage/HeroCarousel'
import AboutUsSection from '../components/homePage/AboutUsSection'
import IndustriesSection from '../components/homePage/IndustriesSection'
import ServicesGrid from '../components/homePage/ServicesGrid'
import WorkProcess from '../components/homePage/WorkProcess'
import CTASection from '../components/homePage/CTASection'
import FAQSection from '../components/homePage/FAQSection'

import SEO from '../components/common/SEO'

const Home = () => {
    return (
        <div className="min-h-screen">
            <SEO
                title="Technical Services in Dubai | Breeq Alaqeeq Technical Services "
                description="Breeq Alaqeeq provides Trusted technical services in Dubai, including maintenance, repair, fit-out & handyman solutions for homes and businesses. "
                keywords=" technical services in dubai,technical services companies in dubai,technical company in dubai,technical services llc dubai, technical services in uae, technical services companies in uae, best technical services company in dubai, building cleaning services, hvac service, plastering in dubai "
                canonicalUrl="/"
            />
            <HeroCarousel />
            <AboutUsSection />
            <ServicesGrid />
            <WorkProcess />
            <IndustriesSection />
            <CTASection />
            <FAQSection />
        </div>
    )
}

export default Home
