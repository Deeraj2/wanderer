import React, { useEffect } from 'react';
import './PostDetail.css';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'; 
import { getPost, getPosts} from '../../actions/post';
import { CircularProgress } from '@mui/material';
import Post from '../Post/Post';

function PostDetail() {

  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(()=>{
    dispatch(getPost(id))
  }, [id])

  useEffect(()=>{
    if(post){
      dispatch(getPosts())
    }
  },[post])

  if(isLoading) return <CircularProgress size="7em" />

  const recommendedPosts = posts.filter((posts)=> posts?._id !== post?._id)

  return (
    <>
      <div className='post-details' >
        <div className='post-img'>
          <img src={post?.selectedFile} alt={post?.name} />
        </div>
        <div className='post-content'>
          <h1 className='content-header'>{post?.title}</h1>
          <p className='tags'>{post?.tags.map((tag) => `#${tag} `)}</p>
          <p className='desc'>{post?.message}</p>
          <h4 className='creator'>Posted by : {post?.name}</h4>
          <p className='postedAt'>{moment(post?.createdAt).fromNow()}</p>
        </div>
      </div>
      {
        !!recommendedPosts.length && (
          <div className='r-content'>
            <h2>Recommended For You</h2>
            {
              recommendedPosts.map((post) => <Post post={post} key={post._id} />)
            }
          </div>
        )
      }
    </>
  )
}

export default PostDetail