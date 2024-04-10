import React from 'react'

const Conversation = () => {
  return (
     <>
     <div className='flex gap-2 items-center hover:bg-gray800 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-12'>
                <img src='profile.png' alt="User profile" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='text-white'>Dikshant</p>
            </div>
        </div>
     </div>

     <div className='divider my-0 py-0 h-1'></div>
     </>
  )
}

export default Conversation