import { Navigate, Route, Routes } from 'react-router-dom'

import Login from './pages/login/Login'
import './App.css'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'

import {Toaster} from "react-hot-toast";
import { useAuthContext } from './context/AuthContext'

function App() {

  const {authUser} = useAuthContext();
  return (
    <div className=' h-screen flex items-center justify-space-around'>
  <Routes>
    <Route path='/' element={authUser? <Home/> : <Navigate to={"/login"}/>} />
    <Route path='/login' element={ authUser? <Navigate to='/'/> : <Login/>} />
    <Route path='/signup' element={authUser? <Navigate to='/'/> : <Signup/>} />
  </Routes>
  <Toaster/>
    </div>
  )
}

export default App
