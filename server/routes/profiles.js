var express = require('express');
var router = express.Router();

/* GET Profile page. */
router.get('/profiles', function(req, res, next) {
  res.render('pages/profiles', { title: 'Profiles', body: "<%- include('pages/profiles') %>" });
});

module.exports = router;