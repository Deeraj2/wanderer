import * as api from '../Api/index'
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from '../constants/actionTypes'

//Action Creators

export const getPosts = () =>async(dispatch) => {
    
    try {
        const { data } = await api.fetchPost()
        dispatch({type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createPosts = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({type: CREATE, payload: data})
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