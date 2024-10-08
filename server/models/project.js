const mongoose = require('mongoose');


const ProjectSchema = mongoose.Schema({
    "ProfileID": {
        type: String,
        required: true
    },
    "Title": {
        type: String,
        required: true
    },
    "Summary": {
        type: String,
        required: true
    },
    "Technologies": {
        type: String,
        required: true
    },
    "GitHub": {
        type: String,
        required: true
    },
    "Demo": {
        type: String,
        required: true
    }

}, { timestamps: true })

const Project = mongoose.model('Projects', ProjectSchema);

module.exports = Project;