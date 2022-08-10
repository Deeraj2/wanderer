import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Form from '../../Form/Form'
import Posts from '../../Posts/Posts'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../../actions/post'
import Header from '../../Header/Header'

function HomePage() {

  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[currentId, dispatch])

  return (
    <>
    <Header />
    <div className='hompage'>
        <div className='homepage-post'>
            <Posts  setCurrentId={setCurrentId} />
        </div>
        <div className='homepage-form'>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
    </div>
  </>
  )
}

export default HomePage