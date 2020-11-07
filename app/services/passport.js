'use strict';
const model = require("../models");
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var config = require('../config').social_logins;

module.exports = function () {

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    // Google login
    passport.use(new GoogleStrategy({
        clientID: config['google']['client_id'],
        clientSecret: config['google']['secret'],
        callbackURL: config['google']['callbackURL'],
        userProfileURL: config['google']['userProfileURL']
    },
        function (accessToken, refreshToken, profile, done) {
            const { name, email } = profile._json
            model.user.findOne({ where: { email } }).then(async user => {
                if (user) {
                    return done('', user)
                } else {
                    const body = { email, first_name: name }
                    const newUser = await model.user.create(body)
                    return done('', newUser)
                }
            })
        }
    ));

    // Facebook login
    passport.use(new FacebookStrategy({
        clientID: config['facebook']['client_id'],
        clientSecret: config['facebook']['secret'],
        callbackURL: config['facebook']['callbackURL'],
        profileFields: ['id', 'emails', 'name', 'displayName']
    },
        function (accessToken, refreshToken, profile, done) {
            const { name, email } = profile._json
            model.user.findOne({ where: { email } }).then(async user => {
                if (user) {
                    return done('', user)
                } else {
                    const body = { email, first_name: name }
                    const newUser = await model.user.create(body)
                    return done('', newUser)
                }
            })
        }
    ));
};