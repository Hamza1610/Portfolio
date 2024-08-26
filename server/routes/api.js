
var express = require('express');
const ProfileModel = require('../models/profile');
var router = express.Router();

/* 
    API ROUTERS
*/

/* GET profiles. */
router.get('/get-profiles', function(req, res, next) {    
    res.status(200).json({});
});



module.exports = router;
