import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }


  return (
    <div>
      <Header></Header>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="logo" />

      </div>
      <form className='absolute p-12 bg-black w-4/12 my-24 mx-auto right-0 left-0 top-10 bg-opacity-70'>
        <h1 className='font-bold text-white text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign up"}</h1>

        {!isSignInForm &&
          <input type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-500' />
        }
        <input type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-500' />

        <input type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-500' />
        <button className='p-4 my-4 bg-red-700 w-full text-white rounded-lg cursor-pointer'>{isSignInForm ? "Sign In" : "Sign up"}</button>

        <p className='py-2 text-white' onClick={toggleSignInForm}>{isSignInForm ? "New to netflix ?  Sign up now!" : "Already registered? Sign in now!"}</p>
      </form>
    </div>

  )
}

export default Login

// rafce - react arrow function create and export
