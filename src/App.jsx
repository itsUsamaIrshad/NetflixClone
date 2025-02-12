import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Player from './Components/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Config/firebase'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {


  const navigate = useNavigate()


  useEffect(()=>{

    onAuthStateChanged(auth , async (user)=>
    {
     if(user)
      {
        navigate('/')
        
      } 
      else
      {
        navigate('login')
       

      }
    })


  },[])


  return (
    <>
    
    <ToastContainer theme='dark'/>
    <Routes>

<Route path='/'>
<Route index element={<Home/>}/>
<Route path='login' element={<Login/>}/>
<Route path='player/:id' element={<Player/>}/>

</Route>



    </Routes>
    
    
    
    
    
    
    </>
  )
}

export default App