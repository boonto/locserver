var express = require('express')
    , router = express.Router()
    , multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/levels')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var message = '';

function fileFilter(req, file, cb) {

    if (file.mimetype === 'text/xml') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

var upload = multer({
    storage: storage,

    limits: {fileSize: 50000, files: 1},

    fileFilter: fileFilter
});

router.get('/', function(req, res){
    res.render('secure/upload', {message: message});
});

router.post('/', upload.single("level"), function (req, res) {
    console.log(req.body);

    console.log(req.file);

    res.redirect('/');
});

module.exports = router;