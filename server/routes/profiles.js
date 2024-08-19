var express = require('express');
var router = express.Router();

/* GET Profile page. */
router.get('/profiles', function(req, res, next) {
  res.render('profiles', { title: 'Profiles' });
});

module.exports = router;