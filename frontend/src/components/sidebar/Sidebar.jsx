import React, { useEffect } from 'react'
import  SearchInput  from './SearchInput'
import Conversations from './Conversations';
import LogoutButton from '../LogoutButton';
 const Sidebar = () => {
  return (
  <div className='border-r border-gray flex flex-col'>
    <div className='pl-2 flex items-center justify-between'>
        <div className="avatar p-3">
       <div className="w-8 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
       </div>
     </div>
     <LogoutButton/> 
    </div>
        <SearchInput/>
        <Conversations/>
    </div>
  )
}

export default  Sidebar;