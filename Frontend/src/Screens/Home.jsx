import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import School from '../Components/School'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import Branches from '../Components/Branches'
import Classes from '../Components/Classes'
import Testimonials from '../Components/Testimonials'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <School/>
      <Classes/>
      <Branches/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
