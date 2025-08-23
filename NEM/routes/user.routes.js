const express = require('express');
const { UserLogin, UserRegister, profile } = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router()


router.post('/login', UserLogin) // email , password
router.post('/register', UserRegister) // name, email, password, mobile, dob
router.get('/me', authMiddleware, profile) // token 


module.exports = router;