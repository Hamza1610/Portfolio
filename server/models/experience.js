const mongoose = require('mongoose');


const ExperienceSchema = mongoose.Schema({
    "ProfileID": {
        type: String,
        required: true
    },
    "Title": {
        type: String,
        required: true
    },
    "Description": {
        type: String,
        required: true
    },
    "Started": {
        type: Date,
        required: true
    },
    "Finish": {
        type: Date,
        required:false
    },
}, { timestamps: true })

const Experience = mongoose.model('Experience', ExperienceSchema);

module.exports = Experience;