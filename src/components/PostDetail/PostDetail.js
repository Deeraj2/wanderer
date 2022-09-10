import React, { useEffect } from 'react';
import './PostDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'; 
import { getPost } from '../../actions/post';

function PostDetail() {

  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    dispatch(getPost(id))
  }, [id])

  console.log(post)

  return (
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
  )
}

export default PostDetail