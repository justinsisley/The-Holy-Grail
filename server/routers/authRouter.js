/**
 * Sub-router for /auth paths.
 *
 * Note that because this is a "sub-router",
 * and we initialized it with app.use('/auth', authRouter),
 * all paths defined here will have '/user'
 * preceding them.
 * For example, router.get('/session', ...)
 * is actually creating the path: '/auth/session'.
 * 
 * See http://expressjs.com/4x/api.html#router
 * for more information about this technique.
 */

var config      = require('../../config');
var express     = require('express');
var router      = express.Router();
var passport    = require('passport');

if (config.settings.auth.facebook) {
    router.get('/facebook', passport.authenticate('facebook', {scope: 'email'}));
    router.get('/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
}

if (config.settings.auth.google) {
    router.get('/google', passport.authenticate('google', {scope: 'profile email'}));
    router.get('/google/callback', passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
}

if (config.settings.auth.twitter) {
    router.get('/twitter', passport.authenticate('twitter'));
    router.get('/twitter/callback', passport.authenticate('twitter', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
}

if (config.settings.auth.github) {
    router.get('/github', passport.authenticate('github'));
    router.get('/github/callback', passport.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
}

module.exports = router;