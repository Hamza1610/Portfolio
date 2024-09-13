
var express = require('express');
const ProfileModel = require('../../models/profile');
var router = express.Router();

/* 
    API ROUTERS
*/

// POST add profile to Profiles
router.post('/create-profile', function(req, res, next) {
    res.status(200).json({});
  });
  
// GET profiles
router.get('/get-profile', function(req, res, next) {
    res.status(200).json({});
});

// GET  ALL profiles
router.get('/get-all-profiles', function(req, res, next) {
    res.status(200).json({});
});



module.exports = router;
