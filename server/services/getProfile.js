
var models = require('../models/models.d')
/* GET profile */
module.exports = async function getProfile(id) {

    console.log(id)
    let PROFILE = {
        PersonalInfo: [],
        Education: [], Experience: [],
        Contact: [], Skill: [], 
        Summary: [], Contact: [],
        Framework: [], Project: []
    };
    
    const modelsNameArray = ['PersonalInfo', 'Education', 'Experience', 'Contact',
            'Skill',  'Summary', 'Contact', 'Framework',
            'Project'];


    await Promise.all(
        modelsNameArray.map(async (modelName, index) => {
            try {
                const data = await models[modelName].find({
                    ProfileID: id
                })
                PROFILE[modelName] = data;

            } catch(error) {
                console.log(error);
            }    
        })
    )

    
    return PROFILE;
}

