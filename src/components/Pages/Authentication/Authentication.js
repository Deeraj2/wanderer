import React from 'react'
import Login from '../../Login/Login'
import './Authentication.css';

function Authentication() {
  return (
    <div className='auth'>
        <div className='auth-gradient' />
          <div className='auth-form' >
            <Login />
          </div> 
    </div>
  )
}

export default Authentication