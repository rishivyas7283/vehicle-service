import React from 'react'
import { Link, redirect } from 'react-router-dom'
import {useForm} from 'react-hook-form'

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors }
    } = useForm()
    
    const onSubmit=(data) =>console.log(data)

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-3xl text-center m-3 bg-pink-300 rounded h-11 ">Login</h3>
    <br></br>
    <div>
    <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" required />
</label>
<br></br>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder='enter a password' required />
</label>
<div className=' flex justify-around '>
<button className='btn btn-secondary mt-8'>
    Login
</button>
<p className='mt-9'>Not Register ?
<span>
<Link to="/signup" className='text-blue-600 cursor-pointer'>Sign up
</Link>
</span>
</p>
</div>
</div>
  </div>
</dialog>
</form>
    </div>
  )
}
