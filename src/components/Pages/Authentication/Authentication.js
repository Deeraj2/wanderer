import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Authentication.css';
import jwt_decode from 'jwt-decode';
import useScript from './useScript';
import { useDispatch } from 'react-redux' ;
import {signin, signup} from '../../../actions/auth'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

function Authentication() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isSignUp, setisSignUp] = useState(false)

  //Form Data
  const [formData, setFormData] = useState(initialState)

  //GOOGLE LOGIN
  const handleCallbackResponse = async(res) => {
    const result = jwt_decode(res?.credential)
    const token = (res?.credential)

    try {
      dispatch({ type: 'AUTH', data: { result, token } })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  const googleSignInbtn = useRef(null)

  useScript("https://accounts.google.com/gsi/client", ()=>{
        //Global google
        window.google.accounts.id.initialize({
            client_id: "31266265153-n65u5ecglam95jltjhqhe0694uandgma.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        window.google.accounts.id.renderButton(
            googleSignInbtn.current,
            { theme: "outline", size: "large", width: "300", padding: "20" }
            
        )
  }, [])

  //FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(isSignUp){
      dispatch(signup(formData, navigate))
    }else{
      dispatch(signin(formData, navigate))
    }

  }

  const handleChange = (e) =>{
    setFormData({  ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className='auth'>
      <div className='login-header' onClick={() => navigate('/')}>
            <h1>Wanderer</h1>
      </div>
      <div className='auth-gradient' />    
          <div className='auth-form' >
            <form className='auth-login' onSubmit={handleSubmit}>
              <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
              {
                isSignUp && (
                  <div className='auth-signIn'>
                    <input name="firstName"  className='auth-fname' type='text' placeholder='First Name' autoFocus onChange={handleChange}/>
                    <input name="lastName"  type='text' placeholder='Last Name' onChange={handleChange}  /> 
                  </div>
                )
              }
              <input type='email' name='email' placeholder='Email' onChange={handleChange}/>
              <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
              { isSignUp && <input type='password' name='confirmPassword' placeholder='Confirm Password' onChange={handleChange}/> }
              <button type='submit' className='submit-btn'>{ isSignUp ? "Sign Up" : "Sign In" }</button>
              <button className='signIn-btn' ref={googleSignInbtn}></button>
              <h4 className='switch-btn' onClick={()=> setisSignUp(!isSignUp)}>
                {isSignUp ? "Already have an account ?" : "Don't have an account ?" }
              </h4>
            </form>
          </div> 
    </div>
  )
}

export default Authentication