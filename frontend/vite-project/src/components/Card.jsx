import React from 'react'






function Card({data}) {
  
  
   
   
  return (
    <>
    <div className="card bg-base-100 md:w-96 shadow-xl px-1 m-8 hover:bg-pink-200 ">
  <figure>
    <img
      src={data.image} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {data.name}
      <div className="badge badge-secondary">FREE</div>
    </h2>
    <p>{data.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline mt-4">{data.price}</div>
      <div className="btn btn-secondary bg-pink-500">buy now</div>
    </div>
  </div>
</div>
    </>
  )
}
export default Card;
