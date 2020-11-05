const express = require('express')
const router = express()
const Controller = require('../controllers')
const jwt = require('../services/jwt')
const auth = require('../middlewares/auth')
var passport = require('passport');

router.post('/sign_up', Controller.UserController.signUp)
router.post('/login', Controller.UserController.login)
router.post('/forgot_password', Controller.UserController.forgotPassword)
router.post('/reset_password', Controller.UserController.resetPassword)
router.post('/validate_reset_token', Controller.UserController.validateResetToken)
router.get('/user_profile/:id', [auth], Controller.UserController.userProfile)


// social Login Start
router.get('/auth/facebook', passport.authenticate('facebook', { session: false }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), Controller.UserController.facebookLogin);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
router.get('/auth/google/callback', passport.authenticate('google', { session: false }), Controller.UserController.googleLogin);
// social Login  End

module.exports = router