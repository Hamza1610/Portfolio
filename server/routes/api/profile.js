var express = require('express');
var router = express.Router();
var fetchProfiles = require('../../services/Profile');
var getProfile = require('../../services/getProfile');

/* 
    API ROUTERS
*/

// POST add profile to Profiles
router.post('/create-profile', function(req, res, next) {
    res.status(200).json({});
  });
  
// GET profiles
router.get('/get-profile/:id', async function(req, res, next) {

  const id = req.params.id

  try {
    const profile = await getProfile(id);
    res.status(200).json(profile);
  
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// GET  ALL profiles
router.get('/get-all-profiles', async function(req, res, next) {
    try {
        const profiles = (await fetchProfiles());
        console.log(profiles)
        res.status(200).json({profiles});   
    } catch (error) {
        console.log(error);
        res.status(500).json({error});  
    }
});

router.get('intro/:id', async function(req, res, next) {
    const id = req.params.id

    try {
      const profile = await getProfile(id);
      res.status(200).json({profile});    
    } catch (error) {
      console.log(error);
      res.status(500).json({error});    }
});


router.get('projects/:id', async function(req, res, next) {
    const id = req.params.id

    try {
      const profile = await getProfile(id);
      res.status(200).json({profile});    
    } catch (error) {
      console.log(error);
      res.status(500).json({error});    }
});
router.get('/experience/:id', async function(req, res, next) {
    const id = req.params.id

    try {
      const profile = await getProfile(id);
      res.status(200).json({profile});    
    } catch (error) {
      console.log(error);
      res.status(500).json({error});    }
});
router.get('/technologies/:id', async function(req, res, next) {
    const id = req.params.id

    try {
      const profile = await getProfile(id);
      res.status(200).json({profile});    
    } catch (error) {
      console.log(error);
      res.status(500).json({error});    }
});

router.get('/contact/:id', async function(req, res, next) {
    const id = req.params.id

    try {
      const profile = await getProfile(id);
      res.status(200).json({profile});    
    } catch (error) {
      console.log(error);
      res.status(500).json({error});    }
});



module.exports = router;