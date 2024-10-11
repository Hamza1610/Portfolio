var ProfileID = require('../models/profile');
var PersonalInfo = require('../models/personalInfo');
var Education = require('../models/education');
var Experience = require('../models/experience');
var Contact = require('../models/contact');
var Skill = require('../models/skill');
var Summary = require('../models/summary');
var Contact = require('../models/contact');
var Framework = require('../models/framework');
var Certification = require('../models/certification');
var Project = require('../models/project');


const models = {
    ProfileID, PersonalInfo, Education, Experience, Contact,
    Skill,  Summary, Contact, Framework, Certification,
    Project
}

module.exports = models;