const express = require('express');
const { UserLogin, UserRegister, profile } = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router()


router.post('/login', UserLogin)
router.post('/register', UserRegister)
router.get('/me', authMiddleware, profile)


module.exports = router;