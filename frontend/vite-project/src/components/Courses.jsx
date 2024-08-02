import React from 'react'
import List from '../../public/list.json'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 item-center justify-center text-center'>
            <h1 className='text-3xl text-semibold  md:text-4xl '>
                We`re delighted to have you{" "}
                <span className='text-pink-400'>Here! :)</span>
            </h1>
            <p className='mt-12'>
            At our platform, led by <b>aadil</b>  <span className='text-pink-400'>Rishi Vyas</span>, we are dedicated to serving
             you with the highest quality courses designed to enhance your skills
              and knowledge. Our mission is to provide a seamless and enriching 
              learning experience that empowers you to achieve your professional
            and personal goals.We offer a diverse range of courses that cater to
             various interests and industries, ensuring that there is something 
             valuable for everyone. Under the guidance

            </p>
           <Link to="/"> 
           <button className='btn btn-secondary mt-8'> B A C  K </button>
           </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 card">
            {
                List.map((data)=>(
                    <Card key={data.id} data={data} />
                ))
            }
        </div>
        </div>

    </>
  )
}
