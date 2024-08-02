import React from "react";

import Book from '../../public/book.jpg'

export default function banner(){

    return(
        <>
        <div className="max-w-screen-2-1  container mx-auto md:px-20 px-4 flex flex-col md:flex-row" >
            <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 ">
                <h1 className="text-4xl font-bold ">
                    Hello, welcomes here to learn somthing <span className="text-pink-500">new everyday!!!</span>
                </h1>
                <p className="mt-4 ">
                Discover the joy of reading with our website, where you can access a new book every day for free! Dive into a diverse collection of genres and expand your horizons, all at no cost. Whether you're a fan of fiction, non-fiction, mystery, or romance, there's something for everyone. Join our community of book lovers and start your literary adventure today. Happy reading!
                </p>
                <label className="input input-bordered flex items-center gap-2 mt-6">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 ">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
 <button className="btn btn-secondary mt-4">Secondary</button>
            </div>
            
            <div className="w-full m-9 p-8 order-1">
                <img src={Book} className="w-full h-full object-cover" alt="book"></img>
            </div>
            
           
        </div>
        </>
    )
} 