import React from 'react';
import './Header.css'
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()
  const user = null

  return (
    <div className='header'>
        <h2 onClick={()=> navigate('/')}>Wanderer</h2>
        <div className='header-content'>
          {user ? (
            <>
              <Avatar />
              <p>Deeraj</p>
              <button className='header-btn'>Log Out</button>
            </>   
          ): (
            <button className='header-btn' onClick={()=>navigate('/login')}>Log In</button>
          )}
        </div>
    </div>
  )
}

export default Header