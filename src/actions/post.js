import * as api from '../Api/index'
import { CREATE, DELETE, START_LOADING , END_LOADING ,FETCH_ALL, FETCH_BY_SEARCH, LIKE, UPDATE, FETCH_POST } from '../constants/actionTypes'

//Action Creators

export const getPost = (id) =>async(dispatch) => {
    
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPost(id)

        dispatch({type: FETCH_POST, payload: data })
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error)
    }
}

export const getPosts = (page) =>async(dispatch) => {
    
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPosts(page)

        dispatch({type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error)
    }
}

export const getPostSearch = (searchQuery) => async(dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data : { data } } = await api.fetchPostsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const createPosts = (post) => async(dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createPost(post)
        dispatch({type: CREATE, payload: data})
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async(dispatch) =>{
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletPost = (id) => async(dispatch) =>{
    try {
        await api.deletePost(id)
        dispatch({type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}


export const likePost = (id) => async(dispatch) =>{
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
        const { data } = await api.updateLike(id, user?.token)
        dispatch({type: LIKE, payload: data})
    } catch (error) {
        console.log(error)
    }
}