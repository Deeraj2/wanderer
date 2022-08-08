import React, { useEffect } from 'react'
import './HomePage.css'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/post'

function HomePage() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <div className='hompage'>
        <div className='homepage-post'>
            <Posts />
        </div>
        <div className='homepage-form'>
            <Form />
        </div>
    </div>
  )
}

export default HomePage