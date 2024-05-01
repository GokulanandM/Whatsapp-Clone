import React from 'react'
import { useSocketContext } from "../../context/socketContext";
import useConversation from '../../zutand/useConversation';

const Conversation = ({conversation,lastIdx}) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
  return (
     <>
     <div className='flex gap-2 items-center hover:bg-gray800 rounded p-2 py-1 cursor-pointer'>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-12'>
                <img src='profile.png' alt="User profile" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='text-white'>{conversation.fullName}</p>
            </div>
        </div>
     </div>

     <div className='divider my-0 py-0 h-1'></div>
     </>
  )
}

export default Conversation