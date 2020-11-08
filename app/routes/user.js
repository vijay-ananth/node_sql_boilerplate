const express = require('express')
const router = express()
const UserController = require('../controllers/UserController')
const jwt = require('../services/jwt')
const auth = require('../middlewares/auth')
var passport = require('passport');

router.post('/sign_up', UserController.signUp)
router.post('/login', UserController.login)
router.post('/forgot_password', UserController.forgotPassword)
router.post('/reset_password', UserController.resetPassword)
router.post('/validate_reset_token', UserController.validateResetToken)
router.get('/user_profile/:id', [auth], UserController.userProfile)


// social Login Start
router.get('/auth/facebook', passport.authenticate('facebook', { session: false }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), UserController.facebookLogin);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
router.get('/auth/google/callback', passport.authenticate('google', { session: false }), UserController.googleLogin);
// social Login  End

module.exports = router