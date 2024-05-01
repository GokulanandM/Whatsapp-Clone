import React from 'react'
import NavbarMessages from '../NavbarMessages'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className='flex flex-col w-[100vw]'>
     <>
    {noChatSelected ? (<NoChatSelected/>) :(
      <>
      <NavbarMessages/>
      <Messages/>
      <MessageInput/></>
    ) }
     </>
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center flex-col w-full h-full'>
     <div>
     <img src="https://static.whatsapp.net/rsrc.php/v3/yX/r/dJq9qKG5lDb.png" width="320" alt=""></img>       
     </div>
     <div className='px-4 text-center sm:text-lg md:text-xl text-white flex flex-col items-center gap-2'>
        <h1>Download WhatsApp for Windows</h1>
     </div>
    </div>
  )
}
