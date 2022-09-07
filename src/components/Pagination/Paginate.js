import React, { useEffect } from 'react';
import { PaginationItem, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post' 

function Paginate({page}) {

  const dispatch = useDispatch();

  const { numberOfPages } = useSelector((state) => state.posts)

  useEffect(()=>{
   if(page) dispatch(getPosts(page))
  }, [])

  return (
    <Pagination
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/post?page=${item.page}`} /> 
      )}
    />
  )
}

export default Paginate