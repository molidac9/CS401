import React from 'react'
import Announcement from '../components/Announcement'
import HeaderLinks from '../components/HeaderLinks'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <HeaderLinks/>
        <Home/>
        <Footer/>

    </div>
  )
}

export default LandingPage