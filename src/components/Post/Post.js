import React from 'react';
import moment from 'moment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Post.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';

function Post({post}) {
  return (
    <div className='post-detail'>
      <div className='post-header' >
        <img src={post?.selectedFile} alt="user-post-pic" />
        <div className='header-content'>
          <div className='content'>
            <h3>{post?.creator}</h3>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>
          <div className='content2'>
            <MoreHorizIcon sx={{  cursor: 'pointer'}}/>
          </div>
        </div>
      </div>
      <div className='post-content'>
        <h3>{post.title}</h3>
        <p>{post.message}</p>
        <p>{post.tags}</p>
      </div>
      <div className='post-icons'>
        <div className='icons-detail'>
          <ThumbUpOffAltIcon sx={{  cursor: 'pointer',color: 'gray', fontSize: '24px' }} />
          <p>{post.likeCount}</p>
        </div>
        <div className='icons-detail'>
          <DeleteIcon sx={{ cursor: 'pointer', color: 'gray', fontSize: '24px' }} />
        </div>
      </div>
    </div>
  )
}

export default Post