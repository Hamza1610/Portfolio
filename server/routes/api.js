
var express = require('express');
const ProfileModel = require('../models/profile');
var router = express.Router();

/* 
    API ROUTERS
*/

/* GET profiles listing. */
router.get('/add-profile', function(req, res, next) {

    const profile = new ProfileModel({
        path: '/',
        detail: "Software engineer with specialization in backend"
    })

    profile.save()

    console.log(profile);
    
    res.status(200).json({});
});


module.exports = router;
