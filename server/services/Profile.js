var ProfileModel = require('../models/profile');

/* GET profile */
module.exports = async function fetchProfiles() {

    let profiles;

    await ProfileModel.find()
    .then((result) => {
        
        profiles = result;
    })
    .catch((error) => {
      console.log(error);
    })
    
    return { profiles };
}

