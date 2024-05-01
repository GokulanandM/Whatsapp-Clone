import React from 'react'
import useLogout from '../hooks/useLogout'


const LogoutButton = () => {
  
  const {loading,logout} = useLogout();
  return (
  <div>{
    !loading ? 
    (<div className='bg-gray500 w-7 h-7 rounded-full flex items-center justify-center mx-2' onClick={logout}>
      <img src='logout.png' className='w-6 h-6  cursor-pointer'/>
    </div>) : (
      <span className='loading loading-spinner'/>
    )}
  </div>
  )
}

export default LogoutButton