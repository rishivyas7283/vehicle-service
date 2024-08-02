import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Courses from '../components/Courses'


export default function BestCourses() {

  return (
    <div>
    <Navbar/>
    <div className='min-h-screen'>
    <Courses/>
    </div>
    <Footer/>
    </div>
  )
}
