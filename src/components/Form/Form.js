import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import './Form.css';
import { useDispatch } from 'react-redux'
import { createPosts, updatePost } from '../../actions/post';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';

function Form({currentId, setCurrentId}) {

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
    tags: ""
  });

  const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id === currentId) : null)
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))


  useEffect(()=>{
    if(post) setPostData(post)
  }, [post])



  const handleSubmit = (e) =>{
    e.preventDefault()
    if(currentId) {
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name}))
      clear()
    }else{
      dispatch(createPosts({...postData, name: user?.result?.name}))
      clear()
    }
    
  }


  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      selectedFile: "",
      tags: "" 
    })
  }


  if(!user?.result?.name){
    return(
      <Paper>
        <Typography variant='h6' align='center'>
          Please Sign In to create your own memories and like others memories
        </Typography>
      </Paper>
    )
  }

  return (
    <div className='create-memory'>
        <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
        <h2>{currentId ? "Updating" : "Creating"} a Memory</h2>
        <input type='text' placeholder='Title' value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})} />
        <input type='text' placeholder='Messages' value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})} />
        <input type='text' placeholder='Tags' value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value.split(',') })} />
        <FileBase className="filebase" type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})} />
        <button type='submit' >Submit</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  )
}

export default Form