import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow mt-20 lg:mt-[112px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout