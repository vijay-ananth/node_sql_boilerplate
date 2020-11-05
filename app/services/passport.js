'use strict';
const model = require("../models");
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var config = require('../config');

module.exports = function() {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    // Google login
    passport.use(new GoogleStrategy({
            clientID: config['social_logins']['google']['client_id'],
            clientSecret: config['social_logins']['google']['secret'],
            callbackURL: config['social_logins']['google']['callbackURL'],
            userProfileURL: config['social_logins']['google']['userProfileURL']
        },
        function(accessToken, refreshToken, profile, done) {
            const { name, email } = profile._json
            model.user.findOne({ email }).then(async user => {
                if (user) {
                    return done('', user)
                } else {
                    const body = { email, role: 'USER', username: name }
                    const newUser = await model.user.create(body)
                    return done('', newUser)
                }
            })
        }
    ));

    // Facebook login
    passport.use(new FacebookStrategy({
            clientID: config['social_logins']['facebook']['client_id'],
            clientSecret: config['social_logins']['facebook']['secret'],
            callbackURL: config['social_logins']['facebook']['callbackURL'],
            profileFields: ['id', 'emails', 'name', 'displayName']
        },
        function(accessToken, refreshToken, profile, done) {
            const { name, email } = profile._json
            model.user.findOne({ email }).then(async user => {
                if (user) {
                    return done('', user)
                } else {
                    const body = { email, role: 'USER', username: name }
                    const newUser = await model.user.create(body)
                    return done('', newUser)
                }
            })
        }
    ));
};