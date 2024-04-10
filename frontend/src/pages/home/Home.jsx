import React from 'react'
import  Sidebar  from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/Messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-screen overflow-hidden bg-clip-padding'>
    <Sidebar />
    <MessageContainer/>
    </div>
  )
}

export default Home