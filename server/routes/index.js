var express = require('express');
var router = express.Router();

// document head data
var headLocals = {
  link: { rel: "stylesheet",  href: "/css/bootstrap.css" },
  link: { rel: "stylesheet",  href: "/css/bootstrap-theme.css" },
  script: { type: "application/javascript",  src: "/js/bootstrap.js"}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Dashboard', page: 'index' });
});

router.get('/blog', function(req, res, next) {

  res.render('pages/bootsrap.pages/blog');
});

router.get('/dashboard', function(req, res, next) {

  res.render('pages/bootsrap.pages/dashboard');
});

router.get('/album', function(req, res, next) {

  res.render('pages/bootsrap.pages/album');
});

router.get('/carousel', function(req, res, next) {

  res.render('pages/bootsrap.pages/carousel');
});

router.get('/mensarry', function(req, res, next) {

  res.render('pages/bootsrap.pages/mensarry');
});

router.get('/product', function(req, res, next) {

  res.render('pages/bootsrap.pages/product');
});


module.exports = router;
