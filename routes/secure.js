var express = require('express')
    , router = express.Router()
    , serveIndex = require('serve-index')
    , upload = require('./upload');

router.use(function(req, res, next){
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/auth');
});

router.get('/', function(req, res){
    res.render('secure/index', {user: req.user});
});

router.get('/profile', function (req, res) {
    res.render('secure/profile', {user: req.user});
});

router.use('/upload', upload);

router.use('/levels', serveIndex('./public/levels/', {'icons': true}));

//router.get('/*', function(req, res){
//    res.redirect('/');
//});

module.exports = router;