const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts')
const { ensureAuth, ensureGuest } = require('../middleware/auth')




router.post('/createPost', postsController.createPost) /// creates a new post or change to the site

router.get('/:id', ensureAuth, postsController.getPost) /// this requests the data you're asking for
// router.put('/likePost/:id', postsController.likePost)
router.put('/addComment/:id', ensureAuth, postsController.addComment) /// updates your post
router.delete('/deleteComment', ensureAuth, postsController.deleteComment) //// deletes something
router.delete('/deletePost', postsController.deletePost)



module.exports = router;
