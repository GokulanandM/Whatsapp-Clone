import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-end">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img  src="profile.png" />
      </div>
    </div>
    <div className="chat-bubble">It was said that you would</div>
     <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>1:24</div>
  </div>
  )
}

export default Message