import React from 'react'
import Post from '../Post/Post'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import './Posts.css'


function Posts({setCurrentId}) {

  const { posts } = useSelector((state) => state.posts);   //[] -> {, isLoading posts: [] }


  return (
    !posts?.length ? ( <CircularProgress sx={{ textAlign: 'center' }} /> ) : (
      <div className='posts'>
       { posts.map((post) => <Post key={post._id}  post={post} setCurrentId={setCurrentId} /> ) }
      </div>
    )
  )
}

export default Posts