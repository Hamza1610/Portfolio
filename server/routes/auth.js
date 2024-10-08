var express = require('express');
var router = express.Router();
const Profile = require('../models/profile');


/* GET Log in admin */
router.get('/login', function(req, res, next) {
  res.render('pages/login', { title: 'Login', error: ''});
});
/* POST  Login */
router.post('/login', function(req, res, next) {
  const { username, passkey } = req.body;
  console.log(username, passkey);
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  res.render('pages/index');
});


/* GET Log in admin */
router.get('/change-credentials', function(req, res, next) {
  res.render('change_credentials', { title: 'Change credentials', error: '' });
});

/* UPDATE  Login details */
router.post('/change-credentials', function(req, res, next) {
  const { username, passkey, newPasskey } = req.body;
  console.log(req.body);

  res.render('login', { title: 'Login', error: '', message: 'Log in with your new credentials' });

});

module.exports = router;