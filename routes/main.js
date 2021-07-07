const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const postsController = require('../controllers/posts')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/profile', ensureAuth, postsController.getPosts)
router.get('/feed', homeController.getFeed)
router.get('/login', authController.getLogin)
router.get('/signup', authController.getSignup)
router.post('/login', authController.postLogin)
router.post('/signup', authController.postSignup)
router.get('/logout', authController.logout)
router.get('/:id', ensureAuth, postsController.getPost)




module.exports = router