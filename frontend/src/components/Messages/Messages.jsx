import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'

const Messages = () => {
  const {messages,loading} = useGetMessages();
  return (
    <div className='px-4 flex-1 overflow-auto bg-[url("/Whatsappbg.jpg")] object-contain'>
     {
      !loading && messages.length>0 && messages.map((messages)=>{
        <Message key={message._id} message={message}/>
      })
     }
    </div>
  )
}

export default Messages