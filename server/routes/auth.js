var express = require('express');
var router = express.Router();

/* POST Log in admin */
router.get('/log-in', function(req, res, next) {
  res.render('login', { title: 'Login', error: '' });
});

module.exports = router;