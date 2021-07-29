const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')




router.post('/createPost', postsController.createPost)

router.get('/:id', ensureAuth, postsController.getPost)
// router.put('/likePost/:id', postsController.likePost)
router.put('/addComment/:id', ensureAuth, postsController.addComment)
router.delete('/deleteComment', ensureAuth, postsController.deleteComment)
router.delete('/deletePost', postsController.deletePost)



module.exports = router;
