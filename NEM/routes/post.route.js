const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const { createPost, getAllPosts, getPostById, deletePostById, commentAdd,makeLike, makeDislike } = require('../controller/post.controller');
const router = express.Router()


router.post('/create', authMiddleware, createPost) // create post route
router.get('/all', authMiddleware, getAllPosts) // get all posts route
router.get('/:id', authMiddleware, getPostById) // get post by id
router.delete('/:id', authMiddleware, deletePostById) // delete post by id

router.post('/:id/comment', authMiddleware, commentAdd) // add comment to particular post

router.post('/:id/like', authMiddleware, makeLike) // like post 
router.post('/:id/dislike', authMiddleware, makeDislike) // dislike post


module.exports = router;