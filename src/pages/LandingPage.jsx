import React from 'react'
import Announcement from '../components/Announcement'
import HeaderLinks from '../components/HeaderLinks'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer';
import Categories from '../components/Categories'
import Products from '../components/Products'

const LandingPage = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <HeaderLinks/>
        <Home/>
        <Categories/>
        <Products/>
        <Footer/>

    </div>
  )
}

export default LandingPage