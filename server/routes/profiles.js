var fetchProfiles = require('../services/Profile');
var express = require('express');
var router = express.Router();

/* GET Profiles page. */
router.get('/', async function(req, res, next) {
  // body: "<%- include('./pages/profiles.ejs') %>" 
  try {
    const profiles = (await fetchProfiles()).profiles
    console.log(profiles);
    res.render('pages/profiles', { title: 'Profiles', profiles }); 

  } catch (error) {
    console.log(error);
    res.render('pages/profiles', { title: 'Profiles', error }); 
  }   
});

/* GET Create Profile page. */
router.get('/create_profile', function(req, res, next) {
  // body: "<%- include('./pages/profiles.ejs') %>" 
  res.render('pages/new_profile', { title: 'New Profile'});
});

/* GET Create Profile page. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  
  res.render('pages/edit_profile', { title: 'Edit Profile'});
});


module.exports = router;