import express from 'express';
import { createPost, deletePost, getPost, getPostBySearch, likePost, updatePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router()

router.get('/' , getPost)
router.get('/search', getPostBySearch)
router.post('/',auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id',auth, deletePost)
router.patch('/:id/likePost', auth, likePost)

export default router