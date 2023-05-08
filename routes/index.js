const express = require('express');
const passport = require('passport');
const router = express.Router();
const user_Controller = require('../controllers/userController');
router.get('/home', user_Controller.homepage);
router.get('/', user_Controller.signupPage);
router.get('/login', user_Controller.loginPage);
router.get('/reset', user_Controller.resetPage)
router.get('/logout', user_Controller.destroy);
router.post('/signup', user_Controller.signup);
router.post('/reset', user_Controller.reset);
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), user_Controller.signin);
router.post('/signin', passport.authenticate('local', { failureRedirect: '/login' }), user_Controller.signin);


module.exports = router;