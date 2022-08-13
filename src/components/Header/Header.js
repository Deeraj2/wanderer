import React, { useEffect, useState } from 'react';
import './Header.css'
import Avatar from '@mui/material/Avatar';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux' ;

function Header() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))


  const logout = () => {
    dispatch({type: 'LOGOUT'})
    navigate('/')
    setUser(null)
  }
  
  useEffect(()=>{
    const token = user?.tokenId;

    if(token) {
      const decodeToken = decode(token)

      if(decodeToken.exp*1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [])

  return (
    <div className='header'>
        <h2 onClick={()=> navigate('/')}>Wanderer</h2>
        <div className='header-content'>
          {user ? (
            <>
              <Avatar src={user?.result.picture} alt={user?.result.name}>{user?.result.name.charAt(0)}</Avatar>
              <p>{user?.result.name}</p>
              <button className='header-btn' onClick={logout}>Log Out</button>
            </>   
          ): (
            <button className='header-btn' onClick={()=>navigate('/login')}>Log In</button>
          )}
        </div>
    </div>
  )
}

export default Header