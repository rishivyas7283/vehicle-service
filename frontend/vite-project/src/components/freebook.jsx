import React from 'react'
import List from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card.jsx"

export default function Freebook() {
    const filterData= List.filter((data) =>data.category==="free")
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };
    return (
    <div className='max-w-screen-2-1  container mx-auto md:px-20 px-4'>
      <h1 className='font-bold text-xl pb-1'>Free Offered Cources</h1>
      <p>
      Enjoy unlimited access to a vast collection of free books across various genres.
       Start reading today and dive into endless stories and knowledge at no cost!
       With our user-friendly platform, finding and downloading your favorite books 
       has never been easier. Start your literary adventure today and immerse yourself
        in the joy of reading without spending a dime. Happy reading!
      </p>
      <div className='p-8'>
      <Slider {...settings}>
       
            {filterData.map((data) => (
              <Card data={data} key={data.id} />
              ))}
      
        
       
         
    </Slider>
      </div>
    </div>
    
  )
}

