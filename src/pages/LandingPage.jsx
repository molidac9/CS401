import React from 'react'
import Announcement from '../components/Announcement'
import HeaderLinks from '../components/HeaderLinks'
import Navbar from '../components/Navbar'
import Home from '../components/Home'

const LandingPage = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <HeaderLinks/>
        <Home/>
       

    </div>
  )
}

export default LandingPage