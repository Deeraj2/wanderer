import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Form from '../../Form/Form'
import Posts from '../../Posts/Posts'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { getPosts, getPostSearch } from '../../../actions/post'
import Paginate from '../../Pagination/Paginate'

function useQuery(){
  return new URLSearchParams(useLocation().search)
}


function HomePage() {

  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery')
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('')

  const handleKeyPress = (e) => {
    if(e.keyCode === 13){
        searchPost()
    }
  }

  const searchPost = (e) =>{
    e.preventDefault();
    if(search.trim() || tags){
      dispatch(getPostSearch({search, tags}))
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags}`)
    }else{
      navigate('/')
    }
  }

  // useEffect(()=>{
  //   dispatch(getPosts())
  // },[currentId, dispatch])

  return (
    <>
    <div className='hompage'>
        <div className='homepage-post'>
            <Posts  setCurrentId={setCurrentId} />
        </div>
        <div className='homepage-form'>
            <div className='searchbar'>
              <input type='text' placeholder='Search post' onKeyPress={handleKeyPress}  value={search} onChange={(e)=> setSearch(e.target.value)} />
              <div className='tagbar'>
                <input type='text' placeholder='Search Tags' value={tags} onChange={(e)=> setTags(e.target.value)} />
                <button onClick={searchPost} >Search</button>  
              </div>
            </div>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {
              (!searchQuery && !tags) && (
                <div className='pagination' >
                  <Paginate page={page}/>
                </div>
              )
            }
            
        </div>
    </div>
  </>
  )
}

export default HomePage