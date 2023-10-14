//'express' module to create a router
var express = require('express');
var  router = express.Router();

router.get('/', function(req, res) {// Defining  routes for all pages
    res.render('index');// rendering views
});
router.get('/AboutMe', function(req, res) {
    res.render('AboutMe');
});
router.get('/Projects', function(req, res) {
    res.render('Projects');
});
router.get('/ContactMe', function(req, res) {
    res.render('ContactMe');
});

module.exports = router;
