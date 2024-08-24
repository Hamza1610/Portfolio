var express = require('express');
var router = express.Router();
const ProfileModel = require('../models/profiles');
router.get('/add-profile', function(req, res, next) {


  
  res.status(200).json({});
});


/* GET Log in admin */
router.get('/log-in', function(req, res, next) {
  res.render('login', { title: 'Login', error: '' });
});
/* POST  Login */
router.post('/login', function(req, res, next) {
  const profile = new ProfileModel({
    path: '/',
    detail: "Software engineer with specialization in backend"
})

profile.save()
.then(() => {

})
.catch(() => {
  
})

console.log(profile);
  res.status(200).redirect('/');
});


/* GET Log in admin */
router.get('/change-credentials', function(req, res, next) {
  res.render('change_credentials', { title: 'Change credentials', error: '' });
});

/* UPDATE  Login details */
router.post('/change-credentials', function(req, res, next) {
  res.status(200).redirect('/');
});

module.exports = router;