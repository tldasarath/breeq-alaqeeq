import HeroCarousel from '../components/homePage/HeroCarousel'
import AboutUsSection from '../components/homePage/AboutUsSection'
import IndustriesSection from '../components/homePage/IndustriesSection'
import ServicesGrid from '../components/homePage/ServicesGrid'
import WhyChooseUs from '../components/homePage/WhyChooseUs'
import WorkProcess from '../components/homePage/WorkProcess'
import CTASection from '../components/homePage/CTASection'
import FAQSection from '../components/homePage/FAQSection'

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroCarousel />
            <AboutUsSection />
            <ServicesGrid />
            <WorkProcess />
            <WhyChooseUs />
            <IndustriesSection />
            <CTASection />
            <FAQSection />
        </div>
    )
}

export default Home
