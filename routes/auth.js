module.exports = function (passport) {

    var express = require('express')
        , router = express.Router();

    router.get('/', function (req, res) {
        res.render('auth/auth', {title: 'Lands of Cinder'});
    });

    router.get('/signup', function (req, res) {
        res.render('auth/signup', {message: req.flash('signupMessage')});
    });

    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/auth/signup',
        failureFlash: true
    }));

    router.get('/login', function (req, res) {
        res.render('auth/login', {message: req.flash('loginMessage')});
    });

    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/auth/login',
        failureFlash: true
    }));

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/auth');
    });

    return router;
};