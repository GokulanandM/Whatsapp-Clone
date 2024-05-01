import React from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username,setUsername] = React.useState("");
  const [password,setPassword] = React.useState("");

  const {loading,login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  }

  return (
    <div className='flex flex-col item-center justify-center min-w-96 mx-auto'>
       <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-5'>
        <h1 className='text-3xl font-semibold text-center text-Wgreen'>LOGIN
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Username</span>
              <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
            </label>
          </div>
          <div>
            <label className=' flex flex-col label p-2'>
              <span className='text-base label-text p-2'>Password</span>
              <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
            </label>            
          </div>
          <Link to={'/signup'} className='text-sm hover:underline hover:text-blue mt-2 inline-block'>Don't have an account?</Link>
          <div>
            <button className='btn btn-block btn-sm mt-2'
            disabled={loading}>
              
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
              </button>          
          </div>        
        </form>
       
       </div>
    </div>
  )
}

export default Login