import HeroCarousel from '../components/homePage/HeroCarousel'
import ServicesGrid from '../components/homePage/ServicesGrid'
import WorkProcess from '../components/homePage/WorkProcess'

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroCarousel />
            <ServicesGrid />
            <WorkProcess />
        </div>
    )
}

export default Home
