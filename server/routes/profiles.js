var fetchProfiles = require('../services/Profile');
var createProfile = require('../services/createProfile');
var express = require('express');
const getProfile = require('../services/getProfile');
const updateProfile = require('../services/updateProfile');
var router = express.Router();


/* GET Profiles page. */
router.get('/', async function(req, res, next) {
  // body: "<%- include('./pages/profiles.ejs') %>" 
  try {
    const profiles = (await fetchProfiles())
    res.render('layout', { title: 'Profiles', profiles, page: 'profiles' }); 

  } catch (error) {
    console.log(error);
    res.render('layout', { title: 'Profiles', profiles, page: 'profiles' }); 
  }   
});

/* GET Create Profile page. */
router.get('/create_profile', async function(req, res, next) {
  // body: "<%- include('./pages/profiles.ejs') %>" 
  res.render('layout', { title: 'New Profile', page: 'new_profile' }); 
});

/* GET Create Profile page. */
router.post('/create_profile', async function(req, res, next) {

  console.log(req.body);

  await createProfile(req.body)
  .then((profiles) => {
    console.log(profiles);
    res.status(200).json({ message: profiles }) 
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json({ error: error })
  })
});

router.put('/update_profile', async function(req, res, next) {

  console.log('Updated data', req.body);

  await updateProfile(req.body)
  .then((profiles) => {
    console.log(profiles);
    res.status(200).json({ message: profiles })
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json({ error: error })
  })
});

/* GET Single Profile . */
router.get('/:id', async function(req, res, next) {
    const id = req.params.id

    try {
      const profile = await getProfile(id);
      res.render('layout', { title: 'Edit Profile',  page: 'edit_profile', profile: profile });  
    
    } catch (error) {
      console.log(error);
      res.render('layout', { title: 'Edit Profile',  page: 'edit_profile', error: 'Error' });
    }

});


module.exports = router;