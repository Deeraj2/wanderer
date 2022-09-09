import React from 'react';
import moment from 'moment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Post.css';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux';
import { deletPost, likePost } from '../../actions/post';
import { useNavigate } from 'react-router-dom';

function Post({post, setCurrentId}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id))
        ? (
          <p className='icons-content'><ThumbUpAltIcon sx={{ cursor: 'pointer', color: 'gray', fontSize: '24px' }} />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</p>
        ) : (
          <p className='icons-content'><ThumbUpOffAltIcon sx={{ cursor: 'pointer', color: 'gray', fontSize: '24px' }} />&nbsp;{post.likes.length}</p>
        );
    }

    return <p className='icons-content'><ThumbUpOffAltIcon sx={{ cursor: 'pointer', color: 'gray', fontSize: '24px' }} />&nbsp;</p>;
  };

  return (
    <div className='post-detail' onClick={() => navigate(`/posts/${post._id}`)}>
      <div className='post-header' >
        <img src={post?.selectedFile} alt="user-post-pic" />
        <div className='header-content'>
          <div className='content'>
            <h3>{post?.name}</h3>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>
          <div className='content2'>
            {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
              <MoreHorizIcon sx={{  cursor: 'pointer'}} onClick={()=> setCurrentId(post._id)}/>
            )}
          </div>
        </div>
      </div>
      <div className='post-content'>
        <h3>{post.title}</h3>
        <p>{post.message}</p>
        <p>{post.tags.map((tag) => `#${tag} `)}</p>
      </div>
      <div className='post-icons'>
        <div className='icons-detail' onClick={()=> dispatch(likePost(post._id))}>
          <Likes />
        </div>
        <div className='icons-detail'>
        {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (   
            <DeleteIcon sx={{ cursor: 'pointer', color: 'gray', fontSize: '24px' }} onClick={()=> dispatch(deletPost(post._id))}  />
          )
        }
        </div>
        
      </div>
    </div>
  )
}

export default Post