import React from 'react'
import { GenderCheckbox } from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-5'>
        <h1 className='text-3xl font-semibold text-center text-Wgreen'>SIGN UP
        </h1>

        <form>
        <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Fullname</span>
              <input type="text" placeholder="Fullname" className="input input-bordered w-full max-w-xs" />
            </label>
          </div>
          <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Username</span>
              <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" />
            </label>
          </div>
          <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Password</span>
              <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
            </label>            
          </div>
          <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Confirm-Password</span>
              <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs" />
            </label>            
          </div>

           <GenderCheckbox/>

          <a href='#' className='text-sm hover:underline hover:text-blue mt-2 inline-block'>Already have an account?</a>
          <div>
            <button className='btn btn-block btn-sm mt-2 bg-base-100'>SignUp</button>          
          </div>  
        </form>
      </div>
    </div>
  )
}

export default Signup