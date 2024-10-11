const { model, createConnection } = require("mongoose");

var models = require('../models/models.d')
/* GET profile */
module.exports = async function updateProfile(data) {
    let profileId;
    const {
        PersonalInfo, Institutions, Experience,
        Summary, Contact, Frameworks, Skills, Projects

    } = data;
            
    try {
        models['PersonalInfo'].updateOne({
            Name: PersonalInfo['Name'], Title: PersonalInfo['Title'], Address: PersonalInfo['Address'],
            ProfileID: profileId
        })
        .then((result) => console.log(`PersonalInfo create: `, result))

        // adding institution data
        for (let key in Institutions) {
            Institutions[key]['ProfileID'] = profileId;
            models['Education'].updateOne(Institutions[key])
            .then((result) => console.log(`Education ${key} create`, result))               
        }

        // adding experience data

        for (let key in Experience) {
            Experience[key]['ProfileID'] = profileId;
            models['Experience'].updateOne(Experience[key])
            .then((result) => console.log(`Experience ${key} create`, result));               
        }

        // add Contact data
        Contact['ProfileID'] = profileId;
        models['Contact'].updateOne(Contact)
        .then((result) => console.log(`Contact:  create`, result));
            
        // add Skills
        for (let key in Skills) {
            Skills[key]['ProfileID'] = profileId;
            console.log('Testing Skills', Skills[key])
            models['Skill'].updateOne({
                Skills: Skills[key],
                    ProfileID: profileId
            })
            .then((result) => console.log(`Skills ${key} create`, result));               
        }
                

        // add Summary
        Summary['ProfileID'] = profileId;
        models['Summary'].updateOne({
            Content: Summary['Content'],
            ProfileID: Summary['ProfileID']
        })
        .then((result) => console.log(`Summary:  create`, result));
                
        // add framework data
        for (let key in Frameworks) {
            Frameworks[key]['ProfileID'] = profileId;
            models['Framework'].updateOne({ Framework : Frameworks[key], ProfileID: profileId })
            .then((result) => console.log(`Framework ${key} create`, result));               
        }
            
    
        // add project data
        for (let key in Projects) {
            Projects[key]['ProfileID'] = profileId;
            models['Project'].updateOne(Projects[key])
            .then((result) => console.log(`Project ${key} create`, result));               
        }
        return { message: "Created!"} 
    
    }
    catch(error) {
        console.log(error);
        return { error: `Error: ${error}`}; 
    }
}