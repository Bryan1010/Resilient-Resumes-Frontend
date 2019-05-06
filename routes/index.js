const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/', (req,res)=> {
    res.render('home');
});

router.get('/login', userController.loginForm);

router.get('/register', userController.registerForm);

// 1. Validate the registration data
// 2. register the user
// 3. we need to log them in
router.post('/register',
  userController.validateRegister,
  userController.register,
  authController.login
);

module.exports = router;