import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Freebook from '../components/freebook'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Navbar />
    <Banner />
    <Freebook/>
    <Footer/>
    </div>
  )
}
