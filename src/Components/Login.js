import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
   
  const [isSignIn , setIsSignIn] = useState(true);
  const toggleForm = ()=>{
     setIsSignIn(!isSignIn);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_small.jpg"/>
        </div>
        <form className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignIn?"Sign In":"Sign UP"}</h1>
          {!isSignIn && (
            <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>
          )}
          <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>
          <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>{isSignIn?"Sign In":"Sign UP"}</button>
          <p  className='p-4 cursor-pointer' onClick={toggleForm}>{isSignIn? "New to Netfix? Sign UP First" :"Already Registered! Sign In "}</p>
        </form>
    </div>
    
  )
}

export default Login
