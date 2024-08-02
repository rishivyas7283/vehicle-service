import React from 'react'
import Home from './home/Home'
import { Routes ,Route } from "react-router-dom"
import BestCourses from './courses/BestCourses'
import Signup from './components/signup'





export default function App() {
  return (
    <div>
   
   
     
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Course" element= <BestCourses/> />
      <Route path="/signup" element= <Signup/> />
      
      
     
     </Routes>
   
    </div>
  )
}
