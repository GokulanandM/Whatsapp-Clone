import React from 'react'
import { GenderCheckbox } from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js';

const Signup = () => {
  const [inputs,setInputs] = React.useState({
    fullName: "",
    username: "",
    password:"",
    confirmPassword: "",
    gender: ""
  });

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  };
const handleSubmit = async (e) => {
 e.preventDefault();
//  console.log(inputs);
await signup(inputs)
};

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-5'>
        <h1 className='text-3xl font-semibold text-center text-Wgreen'>SIGN UP
        </h1>

        <form onSubmit={handleSubmit}>
        <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Fullname</span>
              <input type="text" placeholder="Fullname" className="input input-bordered w-full max-w-xs" 
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs,fullName: e.target.value})}/>
            </label>
          </div>
          <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Username</span>
              <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" 
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs,username: e.target.value})}/>
            </label>
          </div>
          <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Password</span>
              <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" 
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs,password: e.target.value})}/>
            </label>            
          </div>
          <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Confirm-Password</span>
              <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs,confirmPassword: e.target.value})} />
            </label>            
          </div>

           <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />

          <Link to={'/login'} className='text-sm hover:underline hover:text-blue mt-2 inline-block'>Already have an account?</Link>
          <div>
            <button className='btn btn-block btn-sm mt-2 bg-base-100'
            disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span>: "Sign Up"}
              </button>          
          </div>  
        </form>
      </div>
    </div>
  )
}

export default Signup