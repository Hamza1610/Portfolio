const mongoose = require('mongoose');


const ExperienceSchema = mongoose.Schema({
    "Role Title": {
        type: String,
        required: true
    },
    "Role  Description": {
        type: String,
        required: true
    },
    "Started Role Date": {
        type: Date,
        required: true
    },
    "Finish Role Date": {
        type: Date,
        required:false
    },
}, { timestamps: true })

const Experience = mongoose.model('Profile', ExperienceSchema);

module.exports = Experience;