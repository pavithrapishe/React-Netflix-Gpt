import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState()

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const email = useRef(null)
  const password = useRef(null)
  const fullname = useRef(null)

  const handleButtonClick = () => {
    // validate form data. 

    const message = checkValidData(email.current.value, password.current.value)
    console.log(message)
    setErrorMessage(message)

    if (message) return;

    // onAuthStateChanged - on auth change 
    if (!isSignInForm) {
      // Sign up Logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value
          }).then(() => {

            navigate("/browse")
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    } else {
      // sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("done 2", user)
          navigate("/browse")
        })
        .catch((error) => {
          console.log("m in error")
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    }

  }

  return (
    <div>
      <Header></Header>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="logo" />

      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black w-4/12 my-24 mx-auto right-0 left-0 top-10 bg-opacity-70'>
        <h1 className='font-bold text-white text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign up"}</h1>

        {!isSignInForm &&
          <input type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-500' ref={fullname} />
        }
        <input type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-500' ref={email} />

        <input type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-500' ref={password} />

        <p className='text-red-500'>{errorMessage}</p>

        <button className='p-4 my-4 bg-red-700 w-full text-white rounded-lg cursor-pointer' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>

        <p className='py-2 text-white' onClick={toggleSignInForm}>{isSignInForm ? "New to netflix ?  Sign up now!" : "Already registered? Sign in now!"}</p>
      </form>
    </div>

  )
}

export default Login

// rafce - react arrow function create and export
