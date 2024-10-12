const { model, createConnection } = require("mongoose");

var models = require('../models/models.d')
/* GET profile */
module.exports = async function createProfile(data) {
    let profileId;
    const {
        PersonalInfo, Institutions, Experience,
        Summary, Contact, Frameworks, Skills, Projects

    } = data;

    models.ProfileID({
        Title: PersonalInfo['Title']
    }).save()
    .then((docs) => {
        profileId = docs._id;
        console.log(profileId);

        if (profileId) {
            
            // add profileID to each Models
            // for (const key in data) {
            //     const model = data[key];
            //     model['ProfileID'] = profileId;
            //     console.log('model:', model);
            // }
            try {


                models['PersonalInfo']({
                    Name: PersonalInfo['Name'], Title: PersonalInfo['Title'], Address: PersonalInfo['Address'],
                    ProfileID: profileId
                }).save()
                .then((result) => console.log(`PersonalInfo create: `, result))

                // adding institution data
                for (let key in Institutions) {
                    Institutions[key]['ProfileID'] = profileId;
                    models['Education'](Institutions[key]).save()
                    .then((result) => console.log(`Education ${key} create`, result))               
                }

                // adding experience data
                for (let key in Experience) {
                    Experience[key]['ProfileID'] = profileId;
                    models['Experience'](Experience[key]).save()
                    .then((result) => console.log(`Experience ${key} create`, result));               
                }

                // add Contact data
                Contact['ProfileID'] = profileId;
                models['Contact'](Contact).save()
                .then((result) => console.log(`Contact:  create`, result));
            
                // add Skills
                for (let key in Skills) {
                    Skills[key]['ProfileID'] = profileId;
                    console.log('Testing Skills', Skills[key])
                    models['Skill']({
                        Skills: Skills[key],
                        ProfileID: profileId
                    }).save()
                    .then((result) => console.log(`Skills ${key} create`, result));               
                }
                
                // add Summary
                Summary['ProfileID'] = profileId;
                models['Summary']({
                    Content: Summary['Content'],
                    ProfileID: Summary['ProfileID']
                }).save()
                .then((result) => console.log(`Summary:  create`, result));
                
                // add framework data
                for (let key in Frameworks) {
                    Frameworks[key]['ProfileID'] = profileId;
                    models['Framework']({ Framework : Frameworks[key], ProfileID: profileId }).save()
                    .then((result) => console.log(`Framework ${key} create`, result));               
                }
            
    
                // add project data
                for (let key in Projects) {
                    Projects[key]['ProfileID'] = profileId;
                    models['Project'](Projects[key]).save()
                    .then((result) => console.log(`Project ${key} create`, result));               
                }
                return { message: "Created!"} 
    
            }
            catch (error) {
                console.log(error);
                return { error: `Error: ${error}`}; 
            }
    
        } else {
            return { data: null };
        }
    })
    .catch((error) => {
        console.log(error);
        return { error: `Error: ${error}`}; 
    })

    // profile id is available
}