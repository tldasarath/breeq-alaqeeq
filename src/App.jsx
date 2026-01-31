import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import LoadingSpinner from './components/common/LoadingSpinner'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
// const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const Faq = lazy(() => import('./pages/Faq'))


function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />

          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App