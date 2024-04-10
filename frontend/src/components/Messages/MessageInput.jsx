import React from 'react'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative flex'>
            <input type='text'
             className='border text-sm rounded-lg block w-full p-2.5 bg-gray700 border-gray500 text-white' 
            placeholder='Type a message'/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' >
            </button>
            <div className='rounded-full bg-teal w-12 h-10 flex items-center justify-center ml-2'>
            <img src='sendbutton.png' className=' object-cover'/> 
            </div>
                
            
        </div>
    </form>
  )
}

export default MessageInput