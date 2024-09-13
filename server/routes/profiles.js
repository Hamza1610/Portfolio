var express = require('express');
var router = express.Router();

/* GET Profiles page. */
router.get('/', function(req, res, next) {
  // body: "<%- include('./pages/profiles.ejs') %>" 
  res.render('pages/profiles', { title: 'Profiles'});
});


/* GET Create Profile page. */
router.get('/create_profile', function(req, res, next) {
  // body: "<%- include('./pages/profiles.ejs') %>" 
  res.render('pages/new_profile', { title: 'New Profile'});
});

module.exports = router;