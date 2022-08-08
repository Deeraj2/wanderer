import React from 'react'
import Post from '../Post/Post'
import { useSelector } from 'react-redux';


function Posts() {

  const posts = useSelector((state) => state.posts)

  console.log(posts)

  return (
    <div className='posts'>
      <Post />
      <Post />
    </div>
  )
}

export default Posts